# 第 9 课：NavPathStack 参数传递

- 日期：2026-07-14
- 时效校验：2026-09-15（HarmonyOS API 20 SDK、华为官方 Navigation 文档）
- 知识点：`NavPathInfo.param`、自定义路由表参数
- 适用场景：让第 8 课的静态详情显示被点击列表项的数据

承接上一课：页面已经能跳转，但无论点击哪一行，详情都只显示固定文字。这一课只补上参数，不改变导航结构。

## 1. 定义页面之间的数据协议

`TopicItem` 仍负责列表数据；新增 `DetailParams`，只描述详情页真正需要的字段。

```ts
class DetailParams {
  id: string = '';
  title: string = '';

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }
}
```

## 2. 在第 8 课的三个位置传递参数

先把点击事件中的 `pushPath()` 改成：

```ts
this.pathStack.pushPath({
  name: 'DetailPage',
  param: new DetailParams(item.id, item.title)
});
```

再让同一个 `pageBuilder` 把参数交给目标组件：

```ts
@Builder
pageBuilder(name: string, param: Object) {
  if (name === 'DetailPage') {
    DetailPage({ params: param as DetailParams })
  }
}
```

最后把上一课的静态详情改成：

```ts
@Component
struct DetailPage {
  params: DetailParams = new DetailParams('', '');

  build() {
    NavDestination() {
      Column({ space: 12 }) {
        Text(this.params.title)
          .fontSize(24)
        Text(`id: ${this.params.id}`)
          .fontSize(18)
      }
    }
    .title('详情')
  }
}
```

目标组件直接接收参数，不再使用旧的全局 `router.getParams` 和 `aboutToAppear()` 取参链路。

## 3～5 分钟练习

分别点击 `UIAbility` 和 `List`，确认详情标题与 id 都随点击项变化。

## 参考答案

点击 `UIAbility` 时显示 `UIAbility / 001`；点击 `List` 时显示 `List / 003`。若仍显示固定文字，检查 `pushPath()`、`pageBuilder` 和 `DetailPage` 是否都使用了 `DetailParams`。

## 与上一课的联系

第 8 课只完成静态跳转；这一课沿用完全相同的导航栈，把“点击了谁”带到详情页。

## 官方参考

- [Navigation 页面路由](https://developer.huawei.com/consumer/cn/doc/doccenter-capabilities/arkts-navigation-jump)
- [Navigation API 参考](https://developer.huawei.com/consumer/cn/doc/doccenter-references/api/ts-basic-components-navigation)
