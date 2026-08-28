# 第 11 课：AppStorage 与 @StorageLink

- 日期：2026-07-16
- 知识点：`AppStorage`、`@StorageLink`
- 适用场景：列表页和详情页共享登录态、收藏数、主题开关等全局状态

承接上一课的路由栈：页面之间不仅要能进入和返回，还经常要看到同一份共享数据。这一课学习如何把状态提升到应用级存储。

## 1. `AppStorage` 保存应用级共享状态

`@State` 只在当前组件内部生效，`@Link` 适合父子组件同步；如果两个页面没有直接父子关系，就可以把数据放到 `AppStorage`。

可以把它理解成：

```text
页面 A 改值
-> AppStorage 中的共享数据变化
-> 页面 B 读取到同一份最新值
```

## 2. `@StorageLink` 让组件直接响应共享状态

`@StorageLink('key')` 会把组件字段绑定到 `AppStorage` 某个 key 上。读写这个字段，本质上就是在读写共享状态。

最小示例：两个页面共享一个收藏数。

```ts
import { AppStorage } from '@kit.ArkUI';

AppStorage.setOrCreate('favoriteCount', 0);
```

```ts
import { router } from '@kit.ArkUI';

@Entry
@Component
struct ListPage {
  @StorageLink('favoriteCount') favoriteCount: number = 0;

  build() {
    Column({ space: 16 }) {
      Text(`当前收藏数: ${this.favoriteCount}`)
        .fontSize(22)

      Button('去详情页')
        .onClick(() => {
          router.pushUrl({ url: 'pages/DetailPage' });
        })
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```

```ts
import { router } from '@kit.ArkUI';

@Entry
@Component
struct DetailPage {
  @StorageLink('favoriteCount') favoriteCount: number = 0;

  build() {
    Column({ space: 16 }) {
      Text(`详情页收藏数: ${this.favoriteCount}`)
        .fontSize(22)

      Button('收藏 +1')
        .onClick(() => {
          this.favoriteCount += 1;
        })

      Button('返回')
        .onClick(() => {
          router.back();
        })
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```

## 3～5 分钟练习

在详情页添加一个“重置收藏数”按钮，把 `favoriteCount` 改回 `0`。然后验证：

1. 从列表页进入详情页。
2. 先点几次“收藏 +1”。
3. 点击“重置收藏数”后返回列表页。
4. 确认列表页显示也变成 `0`。

## 参考答案

```ts
Button('重置收藏数')
  .onClick(() => {
    this.favoriteCount = 0;
  })
```

因为 `ListPage` 和 `DetailPage` 都通过 `@StorageLink('favoriteCount')` 绑定到同一个 key，所以任一页面修改后，另一页也会看到新值。

## 与上一课的联系

上一课解决了“如何正确返回原页面”；这一课进一步解决“返回后为什么还能看到最新共享状态”，把单页状态管理推进到跨页面共享状态。
