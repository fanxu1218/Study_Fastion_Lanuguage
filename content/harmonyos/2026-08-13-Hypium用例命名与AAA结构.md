# 第 30 课：Hypium 用例命名与 AAA 结构

- 日期：2026-08-13
- 课程序号：第 30 课
- 知识点：用行为化命名和 Arrange-Act-Assert 结构提升测试可读性
- 适用场景：成功、失败用例逐渐增多，需要从测试名快速看懂条件、行为和期望，并在失败时定位阶段

承接上一课：上一课为同一业务对象组织了成功与失败契约；本课不改变契约，而是把每个用例整理成更容易阅读和维护的结构。

## 核心概念

- 用例名表达“条件 + 结果”，例如 `notifiesWhenSaveSucceeds`，不要只写含义模糊的 `testPublish`。
- Arrange（准备）创建依赖、被测对象和输入；Act（执行）只触发被测行为；Assert（断言）只核对结果。
- AAA 是组织方式，不要求新增工具或业务状态；简单用例可用空行分段，避免为了形式拆出无意义函数。

## 最小 ArkTS / Hypium 示例

```ts
import { describe, expect, it } from '@ohos/hypium';

interface DraftService {
  save(content: string): Promise<void>;
}

class SuccessfulDraftService implements DraftService {
  save(content: string): Promise<void> {
    return Promise.resolve();
  }
}

class DraftPublisher {
  noticeCount: number = 0;

  constructor(private draftService: DraftService) {}

  async publish(content: string): Promise<void> {
    await this.draftService.save(content);
    this.noticeCount += 1;
  }
}

export default function draftPublisherReadableTest(): void {
  describe('DraftPublisher', () => {
    it('notifiesWhenSaveSucceeds', 0, async () => {
      // Arrange：准备依赖、被测对象和输入
      const publisher: DraftPublisher = new DraftPublisher(
        new SuccessfulDraftService()
      );
      const content: string = '鸿蒙笔记';

      // Act：只执行一次目标行为
      await publisher.publish(content);

      // Assert：核对可观察结果
      expect(publisher.noticeCount).assertEqual(1);
    });
  });
}
```

看到失败报告中的 `notifiesWhenSaveSucceeds`，可以直接知道失败契约；再根据 AAA 分段判断是准备条件、业务执行还是结果断言需要检查。

## 3～5 分钟练习

把用例名 `testPublish` 改成能表达“保存成功后发送一次通知”的行为化名称，并把下面三行按 AAA 顺序排列：创建 `DraftPublisher`、调用 `publish()`、断言 `noticeCount`。

## 参考答案

```ts
it('notifiesOnceWhenSaveSucceeds', 0, async () => {
  // Arrange
  const publisher: DraftPublisher = new DraftPublisher(
    new SuccessfulDraftService()
  );

  // Act
  await publisher.publish('鸿蒙笔记');

  // Assert
  expect(publisher.noticeCount).assertEqual(1);
});
```

名称说明前置条件和期望结果；代码依次完成准备、执行、断言，失败时更容易定位。

## 与上一课的联系

上一课解决“成功与失败契约是否完整”；本课解决“这些契约是否一眼可读”。下一步可以在 AAA 结构中进一步学习：每个用例只验证一个主要行为，避免一个失败报告混合多个原因。
