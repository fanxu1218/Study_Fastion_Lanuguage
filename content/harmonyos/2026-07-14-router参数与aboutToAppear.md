# 第 9 课：router 参数与 aboutToAppear

- 日期：2026-07-14
- 知识点：`router.getParams()`、`aboutToAppear()`
- 适用场景：详情页读取列表页传来的 id、title、stockCode 等参数

承接上一课的跳转：列表页能够进入详情页后，这一课学习详情页如何读取上一页传来的参数。

## 1. `router.getParams()` 读取路由参数

上一页通过 `router.pushUrl({ params })` 传参，下一页通过 `router.getParams()` 读取。参数名就是页面之间的协议，必须保持一致。

上一页传参：

```ts
router.pushUrl({
  url: 'pages/DetailPage',
  params: {
    id: item.id,
    title: item.title
  }
});
```

详情页读取：

```ts
import { router } from '@kit.ArkUI';

interface DetailParams {
  id: string;
  title: string;
}

@Entry
@Component
struct DetailPage {
  @State id: string = '';
  @State title: string = '';

  aboutToAppear(): void {
    const params = router.getParams() as DetailParams;
    this.id = params.id;
    this.title = params.title;
  }

  build() {
    Column({ space: 12 }) {
      Text(`id: ${this.id}`)
        .fontSize(18)

      Text(`title: ${this.title}`)
        .fontSize(22)
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```

## 2. `aboutToAppear` 做页面进入前的数据准备

`aboutToAppear()` 适合读取路由参数、初始化页面状态、发起页面所需的数据请求。`build()` 只描述 UI，不在里面写取参、请求或变量处理。

```text
pushUrl 传入 params
-> DetailPage aboutToAppear
-> getParams 读取协议参数
-> 写入 @State
-> build 根据状态渲染
```

## 3～5 分钟练习

把列表项标题改成不同文本，例如 `UIAbility`、`@State`、`router`。点击不同项进入详情页，确认详情页显示的 `id` 和 `title` 与点击项一致。

## 参考答案

保持发送端和接收端字段完全一致：发送端使用 `id`、`title`，接收端 `DetailParams` 及赋值也使用 `id`、`title`。点击不同数据项时，详情页会得到对应值。

## 与上一课的联系

上一课解决“跳到哪里”，这一课补全“带什么数据过去”以及“在什么生命周期读取”。
