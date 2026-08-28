# 第 6 课：List 与 ListItem

- 日期：2026-07-09
- 知识点：可滚动列表、列表项容器、`ForEach` key
- 适用场景：设置页、消息列表、搜索结果、行情列表、学习目录

承接上一课的 `ForEach key`：key 是列表项身份标识；这一课把它放进更真实的列表组件里。

## 核心概念

`ForEach` 负责根据数组生成多项 UI，`List` 负责列表容器和滚动，`ListItem` 代表每一行。

```ts
interface TopicItem {
  id: string;
  title: string;
}

@Entry
@Component
struct TopicPage {
  @State topics: TopicItem[] = [
    { id: '001', title: 'UIAbility' },
    { id: '002', title: '@State' },
    { id: '003', title: '@Prop' },
    { id: '004', title: 'ForEach key' }
  ];

  build() {
    List({ space: 8 }) {
      ForEach(this.topics, (item: TopicItem) => {
        ListItem() {
          Text(item.title)
            .fontSize(20)
            .padding(16)
            .width('100%')
        }
      }, (item: TopicItem) => item.id)
    }
    .width('100%')
    .height('100%')
  }
}
```

各部分分工：

```text
topics：数据源
ForEach：遍历数据
(item) => item.id：给每一行提供 key
ListItem：每一行的 UI 容器
List：整个可滚动列表
```

key 仍然位于 `ForEach` 第三个参数。它不显示，只告诉 ArkUI：`id = 001` 的这一行是同一条数据。

## 3～5 分钟练习

给 `topics` 追加 `{ id: '005', title: 'ListItem' }`，然后在 `Text(item.title)` 前面添加 `Text(item.id)`，观察每一行如何展示 id 和标题。

## 参考答案

```ts
ListItem() {
  Row() {
    Text(item.id)
    Text(item.title)
  }
}
```

## 与上一课的联系

上一课学习 `ForEach` 如何生成多项 UI；这一课补上负责滚动和行级结构的 `List`、`ListItem`。
