# 第 37 课：Hypium 可控 Promise 失败时序测试

- 日期：2026-08-22
- 课程序号：第 37 课
- 知识点：由测试精确触发异步依赖失败，并验证异常传播与后续动作中止
- 适用场景：保存、请求或授权失败后必须把异常交给调用方，同时禁止继续提交成功状态或发送成功通知

承接上一课：上一课用可控 Promise 验证依赖完成前不提前提交、完成后才继续；本课把同一控制方式扩展到拒绝路径，验证失败后不会越过 `await` 执行成功动作。

## 核心概念

- 测试持有 Promise 的 `reject`，可以在完成前先观察状态，再精确触发失败。
- 被测方法不捕获异常时，依赖的拒绝会沿 `await` 向上传递给调用方。
- 失败断言既要检查错误契约，也要检查成功事件没有发生，避免只验证异常却漏掉错误的副作用。
- 不使用 `setTimeout` 模拟失败；测试直接控制拒绝时机，结果更稳定。

## 最小 ArkTS / Hypium 示例

```ts
import { describe, expect, it } from '@ohos/hypium';

interface PromiseResult {
  rejected: boolean;
  message: string;
}

class RejectGate {
  private rejectSave: (error: Error) => void = (_error: Error): void => {};
  readonly pending: Promise<void> = new Promise<void>((_resolve: () => void,
    reject: (error: Error) => void) => {
    this.rejectSave = reject;
  });

  reject(error: Error): void {
    this.rejectSave(error);
  }
}

class DraftService {
  constructor(private readonly gate: RejectGate) {}

  async save(): Promise<void> {
    await this.gate.pending;
  }
}

class DraftController {
  readonly events: string[] = [];

  constructor(private readonly service: DraftService) {}

  async submit(): Promise<void> {
    this.events.push('submit-start');
    await this.service.save();
    this.events.push('submit-success');
  }
}

export default function controlledPromiseRejectTest(): void {
  describe('DraftController.submit rejects', () => {
    it('propagatesFailureWithoutReportingSuccess', 0, async () => {
      // Arrange
      const gate: RejectGate = new RejectGate();
      const controller: DraftController = new DraftController(new DraftService(gate));

      // Act：先保留等待状态，再由测试触发保存失败
      const submitting: Promise<void> = controller.submit();
      expect(controller.events.join(',')).assertEqual('submit-start');
      gate.reject(new Error('保存失败'));

      const result: PromiseResult = await submitting.then(
        (): PromiseResult => ({ rejected: false, message: '' }),
        (error: Error): PromiseResult => ({ rejected: true, message: error.message })
      );

      // Assert：异常向上传递，且 await 后的成功动作没有执行
      expect(result.rejected).assertTrue();
      expect(result.message).assertEqual('保存失败');
      expect(controller.events.join(',')).assertEqual('submit-start');
    });
  });
}
```

`gate.reject(...)` 之前，控制器停在 `await`；拒绝发生后，`submit()` 直接以同一错误结束，因此 `submit-success` 不会进入事件记录。

## 3～5 分钟练习

给 `DraftController` 增加一个 `submittedCount` 字段，只允许在保存成功后加一。补充失败路径断言，证明保存失败后计数仍为 `0`。

## 参考答案

```ts
class DraftController {
  readonly events: string[] = [];
  submittedCount: number = 0;

  constructor(private readonly service: DraftService) {}

  async submit(): Promise<void> {
    this.events.push('submit-start');
    await this.service.save();
    this.submittedCount += 1;
    this.events.push('submit-success');
  }
}

expect(controller.submittedCount).assertEqual(0);
expect(controller.events.join(',')).assertEqual('submit-start');
```

把计数更新放在 `await` 之后，依赖拒绝时会直接跳出方法；失败测试同时证明成功事件和成功计数都没有发生。

## 与上一课的联系

上一课控制 `resolve`，验证异步依赖完成前后的成功顺序；本课控制 `reject`，验证同一等待点失败后异常继续向上传递，并阻止所有位于 `await` 之后的成功动作。
