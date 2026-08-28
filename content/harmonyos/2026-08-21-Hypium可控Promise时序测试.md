# 第 36 课：Hypium 可控 Promise 时序测试

- 日期：2026-08-21
- 课程序号：第 36 课
- 知识点：用可控 Promise 精确验证异步依赖完成前后的行为顺序
- 适用场景：业务必须等待保存、请求或授权完成后才能更新结果，需要验证等待期间不会提前执行后续动作

承接上一课：上一课验证多组非法输入会正确拒绝 Promise；本课继续测试异步契约，但把重点从“最终成功或失败”推进到“完成前后分别发生了什么”。

## 核心概念

- 测试自己持有 Promise 的 `resolve`，就能明确控制异步依赖何时完成。
- 调用被测方法后先不 `await`，先断言后续动作尚未发生；释放 Promise 后再 `await` 并断言动作已发生。
- 用事件记录表达业务顺序，不依赖 `setTimeout` 或真实网络延迟，测试更快且结果稳定。
- 可控 Promise 只控制依赖的完成时机，不改变生产代码的业务语义。

## 最小 ArkTS / Hypium 示例

```ts
import { describe, expect, it } from '@ohos/hypium';

class SaveGate {
  private releaseSave: () => void = (): void => {};
  readonly pending: Promise<void> = new Promise<void>((resolve: () => void) => {
    this.releaseSave = resolve;
  });

  release(): void {
    this.releaseSave();
  }
}

class DraftService {
  constructor(private readonly saveGate: SaveGate) {}

  async save(): Promise<void> {
    await this.saveGate.pending;
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

export default function controlledPromiseOrderTest(): void {
  describe('DraftController.submit', () => {
    it('reportsSuccessOnlyAfterSaveCompletes', 0, async () => {
      // Arrange
      const gate: SaveGate = new SaveGate();
      const controller: DraftController = new DraftController(new DraftService(gate));

      // Act：暂不 await，保留仍在等待保存的状态
      const submitting: Promise<void> = controller.submit();

      // Assert：保存未完成时不能提前报告成功
      expect(controller.events.join(',')).assertEqual('submit-start');

      // Act：由测试精确释放保存操作
      gate.release();
      await submitting;

      // Assert：保存完成后才出现成功事件
      expect(controller.events.join(',')).assertEqual('submit-start,submit-success');
    });
  });
}
```

这个用例不猜测保存需要等待多少毫秒：`gate.release()` 之前，`submit()` 必然停在 `await`；释放后再等待 `submitting`，就能稳定验证两个阶段。

## 3～5 分钟练习

在 `DraftController.submit()` 的保存完成后、成功事件前增加 `this.events.push('save-finished')`，并同步修改最后一条断言，验证完整顺序。不要添加 `setTimeout`。

## 参考答案

```ts
async submit(): Promise<void> {
  this.events.push('submit-start');
  await this.service.save();
  this.events.push('save-finished');
  this.events.push('submit-success');
}

expect(controller.events.join(','))
  .assertEqual('submit-start,save-finished,submit-success');
```

释放 `gate` 前的断言仍应只有 `submit-start`；释放并等待后，三个事件必须按参考答案中的顺序出现。

## 与上一课的联系

上一课通过转换 Promise 结果验证“失败是否按契约发生”；本课使用可控 Promise 把异步过程拆成完成前和完成后两个可观察阶段，进一步验证业务不会越过尚未完成的依赖。
