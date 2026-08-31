# 第 42 课：Hypium afterEach 资源清理

- 日期：2026-08-31
- 课程序号：第 42 课
- 知识点：用 `afterEach` 在每个测试用例后释放订阅资源
- 适用场景：被测对象会注册监听、启动定时器或持有连接，需要保证每个用例结束后成对释放

## 用途

测试中的订阅如果没有清理，可能继续接收后续用例的事件，造成重复回调或与执行顺序有关的失败。`afterEach` 可以集中执行每个用例都需要的回收动作。

## 核心概念

- `beforeEach` 负责创建本用例的新夹具，`afterEach` 负责释放本用例取得的资源。
- 清理动作应与注册动作成对出现，例如 `subscribe()` 对应 `unsubscribe()`。
- 即使用例断言失败，测试框架仍会进入对应的清理钩子。
- 清理后要恢复可观察状态，避免静默吞掉资源泄漏。

## 最小 ArkTS / Hypium 示例

```ts
import { afterEach, beforeEach, describe, expect, it } from '@ohos/hypium';

class MessageSource {
  private listenerCount: number = 0;

  subscribe(): () => void {
    this.listenerCount += 1;
    return (): void => {
      this.listenerCount -= 1;
    };
  }

  activeListeners(): number {
    return this.listenerCount;
  }
}

export default function subscriptionCleanupTest(): void {
  describe('subscription cleanup', () => {
    let source: MessageSource = new MessageSource();
    let unsubscribe: () => void = (): void => {};

    beforeEach(() => {
      source = new MessageSource();
      unsubscribe = source.subscribe();
    });

    afterEach(() => {
      unsubscribe();
      expect(source.activeListeners()).assertEqual(0);
    });

    it('registersOneListenerForCurrentCase', 0, () => {
      expect(source.activeListeners()).assertEqual(1);
    });
  });
}
```

这里每个用例开始时只有一个新订阅，结束时都执行 `unsubscribe()`，并通过监听数量确认资源已经释放。

## 3～5 分钟练习

给测试增加第二个用例，断言它开始时仍然只有一个监听者，而不是累积为两个。

## 参考答案

```ts
it('doesNotReusePreviousListener', 0, () => {
  expect(source.activeListeners()).assertEqual(1);
});
```

两个用例都会先运行 `beforeEach` 创建新 `source`，结束后再由 `afterEach` 取消各自的订阅，因此监听数量不会跨用例累积。

## 与上一课的联系

上一课用 `beforeEach` 重建事件数组和被测对象；本课补上 `afterEach`，让“用例前隔离”和“用例后释放”形成完整的夹具生命周期。
