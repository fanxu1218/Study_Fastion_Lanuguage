# 第 5 课：ForEach 与稳定 Key

- 日期：2026-07-08
- 知识点：数组驱动列表、`ForEach`、稳定 key
- 适用场景：菜单、消息列表、股票列表、设置项、搜索结果等重复结构

承接上一课的 `@Link`：父子组件能同步状态后，实际页面通常会进入列表场景；这一课学习 ArkUI 如何渲染数组数据。

## 1. `ForEach` 用数据生成多个组件

不要手写多个相似组件。把数据放进数组，用 `ForEach` 根据数组逐项渲染 UI。数据变化后，列表会跟着重新渲染。

```ts
@Entry
@Component
struct TodoPage {
  @State tasks: string[] = ['学习 @State', '学习 @Prop', '学习 @Link'];

  build() {
    Column({ space: 12 }) {
      ForEach(this.tasks, (task: string) => {
        Text(task)
          .fontSize(20)
          .width('100%')
          .padding(12)
      })

      Button('新增任务')
        .onClick(() => {
          this.tasks.push('学习 ForEach');
        })
    }
    .width('100%')
    .padding(16)
  }
}
```

## 2. 列表项要有稳定 key

列表会新增、删除或排序时，`ForEach` 的第三个参数可以提供 key。key 用来标识每一项，帮助 ArkUI 判断哪些组件可以复用。简单字符串列表可以直接用内容作为 key；真实业务里通常用唯一 id。

```ts
ForEach(this.tasks, (task: string) => {
  Text(task)
    .fontSize(20)
}, (task: string) => task)
```

### Key 到底在哪里

`key` 不在 `Text()` 里，也不是 UI 属性。它位于 `ForEach` 的第三个参数：

```ts
ForEach(
  this.tasks,
  (task: string) => {
    Text(task)
  },
  (task: string) => task // 这里就是 key 生成函数
)
```

三个参数分别是：

```text
第 1 个参数：数据数组
第 2 个参数：每条数据如何渲染成 UI
第 3 个参数：每条数据的唯一标识 key
```

对象数组通常使用业务 id：

```ts
interface TaskItem {
  id: string;
  title: string;
}

@State tasks: TaskItem[] = [
  { id: '001', title: 'UIAbility' },
  { id: '002', title: '@State' },
  { id: '003', title: '@Prop' }
];

ForEach(this.tasks, (item: TaskItem) => {
  Text(item.title)
}, (item: TaskItem) => item.id)
```

key 不显示给用户，它回答的是“这一行数据是谁”。列表会新增、删除、排序时，稳定 key 能避免组件复用错位。真实项目应优先使用业务唯一 id，不要优先使用数组下标。

## 3～5 分钟练习

把 `tasks` 改成 4 个鸿蒙学习主题，例如 `UIAbility`、`@State`、`@Prop`、`ForEach`；再加一个按钮，点击后追加“生命周期”，观察列表是否自动增加一行。

## 参考答案

```ts
@State tasks: string[] = ['UIAbility', '@State', '@Prop', 'ForEach'];

Button('新增主题')
  .onClick(() => {
    this.tasks.push('生命周期');
  })
```

## 与上一课的联系

前几课围绕单个组件和父子组件的数据流；这一课把相同的数据驱动原则扩展到数组和重复 UI。
