# 第 11 课：AppStorage 与 @StorageLink

- 日期：2026-07-16
- 时效校验：2026-09-15（HarmonyOS API 20 SDK、华为官方应用状态管理文档）
- 知识点：`AppStorage`、`@StorageLink`
- 适用场景：让第 10 课的列表和详情共享收藏数

承接上一课：列表与详情已经能进入、传参和返回。这一课保持同一组组件，只给它们增加一份共享收藏状态。

## 1. 初始化一份应用级 UI 状态

在应用初始化位置执行一次：

```ts
AppStorage.setOrCreate<number>('favoriteCount', 0);
```

`AppStorage` 是应用级 UI 状态容器；`@StorageLink` 与指定 key 双向同步。这里不需要从 `@kit.ArkUI` 导入 `AppStorage`，它由 ArkUI 状态管理框架提供。

## 2. 在上一课的两个组件中绑定同一个 key

在 `TopicPage` 中增加字段，并把文字放在 `Navigation` 的列表内容上方：

```ts
@StorageLink('favoriteCount') favoriteCount: number = 0;
```

```ts
Text(`当前收藏数: ${this.favoriteCount}`)
  .fontSize(20)
```

在原来的 `DetailPage` 中增加相同字段和按钮；上一课的标题、id 与返回按钮都保留：

```ts
@StorageLink('favoriteCount') favoriteCount: number = 0;
```

```ts
Text(`详情收藏数: ${this.favoriteCount}`)
  .fontSize(20)

Button('收藏 +1')
  .onClick(() => {
    this.favoriteCount += 1;
  })
```

数据链路现在是：

```text
详情页点击“收藏 +1”
-> @StorageLink 写入 favoriteCount
-> AppStorage 更新
-> 返回后 TopicPage 显示同一个新值
```

## 3～5 分钟练习

进入任意详情连续点击两次“收藏 +1”，再使用第 10 课的返回按钮回到列表，确认收藏数变成 `2`。

## 参考答案

两个组件必须使用完全相同的 key：`favoriteCount`。如果一个地方拼写不同，它们就不是同一份共享状态。

## 与上一课的联系

第 10 课解决“回到原列表”；这一课继续同一个列表—详情示例，解决“返回后仍看到详情里修改的新状态”。

## 官方参考

- [管理应用拥有的状态概述](https://developer.huawei.com/consumer/cn/doc/doccenter-capabilities/arkts-application-state-management-overview)
- [Navigation 页面路由](https://developer.huawei.com/consumer/cn/doc/doccenter-capabilities/arkts-navigation-jump)
