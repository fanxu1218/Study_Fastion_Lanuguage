# 第 9 课：NavPathStack 参数传递

- 日期：2026-07-14
- 时效校验：2026-09-14（HarmonyOS API 20 SDK、华为官方 Navigation 文档）
- 知识点：`NavPathInfo.param`、自定义路由表参数
- 适用场景：详情页接收列表页传来的 id、title、stockCode 等参数

承接上一课的 `Navigation` 跳转：页面名称决定“去哪里”，`param` 决定“带什么数据过去”。

## 1. 发送端传入明确的数据模型

把跨页面字段集中在一个 class 中，发送端和接收端共同使用，避免字符串字段各写一套。

```ts
class DetailParams {
  id: string = '';
  title: string = '';

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }
}

this.pathStack.pushPath({
  name: 'DetailPage',
  param: new DetailParams(item.id, item.title)
});
```

## 2. 自定义路由表把参数交给目标组件

`.navDestination()` 的 Builder 会收到页面名称和参数。目标组件直接接收参数，不再通过全局 `router.getParams` 和 `aboutToAppear()` 二次读取。

```ts
@Builder
pageBuilder(name: string, param: Object) {
  if (name === 'DetailPage') {
    DetailPage({ params: param as DetailParams })
  }
}

@Component
struct DetailPage {
  params: DetailParams = new DetailParams('', '');

  build() {
    NavDestination() {
      Column({ space: 12 }) {
        Text(`id: ${this.params.id}`)
          .fontSize(18)
        Text(`title: ${this.params.title}`)
          .fontSize(22)
      }
      .width('100%')
      .height('100%')
      .justifyContent(FlexAlign.Center)
    }
    .title('详情')
  }
}
```

使用系统路由表时，可在 `NavDestination.onReady()` 的 `NavDestinationContext.pathInfo.param` 中读取同一份参数；两种方案选一种，不要再混用旧的全局 router 取参链路。

## 3～5 分钟练习

给 `DetailParams` 增加 `category: string`，从列表页传入分类，并在详情页显示它。

## 参考答案

```ts
class DetailParams {
  id: string = '';
  title: string = '';
  category: string = '';

  constructor(id: string, title: string, category: string) {
    this.id = id;
    this.title = title;
    this.category = category;
  }
}
```

发送端和接收端都使用这个模型，页面间协议就保持一致。

## 与上一课的联系

上一课完成 `NavDestination` 入栈；这一课给入栈信息补上类型明确的业务参数。

## 官方参考

- [Navigation 页面路由](https://developer.huawei.com/consumer/cn/doc/doccenter-capabilities/arkts-navigation-jump)
- [Navigation API 参考](https://developer.huawei.com/consumer/cn/doc/doccenter-references/api/ts-basic-components-navigation)
