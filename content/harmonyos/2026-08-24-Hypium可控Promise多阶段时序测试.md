# 第 38 课：Hypium 可控 Promise 多阶段时序测试

- 日期：2026-08-24
- 课程序号：第 38 课
- 知识点：用两个可控 Promise 验证串行异步流程不会跳过前置阶段
- 适用场景：业务必须依次完成保存、上传、通知或授权等多个异步步骤，需要证明后一步不会提前启动

承接上一课：上一课精确触发单个依赖失败，验证失败后不会继续成功动作；本课扩展到两个成功依赖，逐阶段验证串行流程的启动与完成顺序。

## 核心概念

- 每个可控步骤分别暴露 `started` 和 `pending`：前者让测试知道步骤已进入，后者让测试决定步骤何时完成。
- 调用被测方法后先等待第一步启动，并断言第二步尚未启动；释放第一步后，再等待第二步启动。
- 只有释放第二步并 `await` 整个任务后，最终成功事件才允许出现。
- 不使用 `setTimeout` 猜测调度时间，测试只等待明确的业务阶段信号。

## 最小 ArkTS / Hypium 示例

```ts
import { describe, expect, it } from '@ohos/hypium';

class ControlledStep {
  private releasePending: () => void = (): void => {};
  private markStarted: () => void = (): void => {};
  readonly pending: Promise<void> = new Promise<void>((resolve: () => void) => {
    this.releasePending = resolve;
  });
  readonly started: Promise<void> = new Promise<void>((resolve: () => void) => {
    this.markStarted = resolve;
  });

  async run(): Promise<void> {
    this.markStarted();
    await this.pending;
  }

  release(): void {
    this.releasePending();
  }
}

class PublishController {
  readonly events: string[] = [];

  constructor(private readonly saveStep: ControlledStep,
    private readonly uploadStep: ControlledStep) {}

  async publish(): Promise<void> {
    this.events.push('publish-start');
    await this.saveStep.run();
    this.events.push('save-finished');
    await this.uploadStep.run();
    this.events.push('publish-success');
  }
}

export default function controlledMultiStageTest(): void {
  describe('PublishController.publish', () => {
    it('startsUploadOnlyAfterSaveCompletes', 0, async () => {
      // Arrange
      const saveStep: ControlledStep = new ControlledStep();
      const uploadStep: ControlledStep = new ControlledStep();
      const controller: PublishController = new PublishController(saveStep, uploadStep);

      // Act：启动发布，但先不释放保存步骤
      const publishing: Promise<void> = controller.publish();
      await saveStep.started;

      // Assert：保存未完成，上传不能提前启动
      expect(controller.events.join(',')).assertEqual('publish-start');

      // Act：保存完成后，等待上传步骤确实启动
      saveStep.release();
      await uploadStep.started;

      // Assert：上传已启动但未完成，仍不能报告发布成功
      expect(controller.events.join(','))
        .assertEqual('publish-start,save-finished');

      uploadStep.release();
      await publishing;

      // Assert：两个步骤都完成后才报告成功
      expect(controller.events.join(','))
        .assertEqual('publish-start,save-finished,publish-success');
    });
  });
}
```

`uploadStep.started` 是明确的阶段信号：测试不会依赖等待若干毫秒来猜测上传是否已经开始，因此能稳定证明串行约束。

## 3～5 分钟练习

在保存和上传之间增加 `validateStep`，补充断言验证：保存未完成时校验不启动；保存完成后校验启动；校验未完成时上传不启动。

## 参考答案

```ts
constructor(private readonly saveStep: ControlledStep,
  private readonly validateStep: ControlledStep,
  private readonly uploadStep: ControlledStep) {}

async publish(): Promise<void> {
  this.events.push('publish-start');
  await this.saveStep.run();
  this.events.push('save-finished');
  await this.validateStep.run();
  this.events.push('validate-finished');
  await this.uploadStep.run();
  this.events.push('publish-success');
}

expect(controller.events.join(',')).assertEqual('publish-start');
saveStep.release();
await validateStep.started;
expect(controller.events.join(',')).assertEqual('publish-start,save-finished');
validateStep.release();
await uploadStep.started;
expect(controller.events.join(','))
  .assertEqual('publish-start,save-finished,validate-finished');
```

练习的关键不是增加延迟，而是为每一阶段提供可等待的启动信号，并由测试逐个释放完成信号。

## 与上一课的联系

上一课控制一个 Promise 的拒绝，证明失败会中止后续动作；本课使用两个可控 Promise 和启动信号，把同一思路推进到多阶段成功路径，证明串行流程不会跳步或提前报告成功。
