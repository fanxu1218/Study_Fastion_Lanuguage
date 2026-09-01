# 第 43 课：Hypium 异步 afterEach 清理

- 日期：2026-09-01
- 课程序号：第 43 课
- 知识点：在 `afterEach` 中等待异步资源关闭
- 适用场景：每个用例会创建需要异步关闭的连接或资源

## 用途

等待清理 Promise 完成，避免下一个用例在旧资源尚未关闭时启动。

## 核心概念

- `afterEach` 可以声明为 `async`，并用 `await` 等待关闭。
- `beforeEach` 仍为每个用例创建独立资源。
- 清理失败必须让测试失败，不能吞掉异常。

## 最小 ArkTS / Hypium 示例

```ts
import { afterEach, beforeEach, describe, expect, it } from '@ohos/hypium';

class AsyncChannel {
  private opened: boolean = false;
  open(): void { this.opened = true; }
  async close(): Promise<void> {
    await Promise.resolve();
    this.opened = false;
  }
  isOpen(): boolean { return this.opened; }
}

export default function asyncCleanupTest(): void {
  describe('async cleanup', () => {
    let channel: AsyncChannel = new AsyncChannel();
    beforeEach(() => { channel = new AsyncChannel(); channel.open(); });
    afterEach(async () => {
      await channel.close();
      expect(channel.isOpen()).assertFalse();
    });
    it('opensCurrentChannel', 0, () => {
      expect(channel.isOpen()).assertTrue();
    });
  });
}
```

## 3～5 分钟练习

增加第二个用例，确认它开始时得到已打开的新 `channel`。

## 参考答案

```ts
it('createsFreshOpenChannel', 0, () => {
  expect(channel.isOpen()).assertTrue();
});
```

## 与上一课的联系

上一课用同步 `afterEach` 取消订阅；本课把同一原则扩展到必须等待完成的异步关闭。
