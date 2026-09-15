# 第 12 课：@StorageProp 单向共享状态

- 日期：2026-07-17
- 时效校验：2026-09-15（HarmonyOS API 20 SDK、华为官方应用状态管理文档）
- 知识点：`@StorageProp`
- 适用场景：在第 11 课中增加只展示收藏数、不负责写入的组件

承接上一课：`TopicPage` 与 `DetailPage` 都通过 `@StorageLink` 修改收藏数。实际项目中，纯展示组件不需要获得写入共享状态的职责。

## 1. 新增一个只做展示的组件

继续使用上一课已经初始化的 `favoriteCount`，新增：

```ts
@Component
struct FavoriteSummary {
  @StorageProp('favoriteCount') favoriteCount: number = 0;

  build() {
    Text(`收藏总数: ${this.favoriteCount}`)
      .fontSize(18)
  }
}
```

然后在第 11 课 `TopicPage` 的列表上方使用它：

```ts
FavoriteSummary()
```

`@StorageProp` 与 `AppStorage` 是单向同步：共享值变化会刷新组件；即使本地修改字段，也不会写回 `AppStorage`。因此这里只展示，不给它添加修改按钮。

## 2. 现在三者职责不同

```text
DetailPage + @StorageLink -> 可以增加收藏
TopicPage + @StorageLink  -> 可以读取，也可承担业务写入
FavoriteSummary + @StorageProp -> 只展示最新值
```

它们仍然围绕第 7 课开始的同一组列表数据和第 8～10 课的同一条导航链路工作。

## 3～5 分钟练习

把 `FavoriteSummary` 同时放进列表和详情。点击“收藏 +1”，观察两个展示位置是否一起刷新。

## 参考答案

两个 `FavoriteSummary()` 都绑定 `favoriteCount`，所以 `DetailPage` 通过 `@StorageLink` 改值后，两处都会刷新；展示组件本身不需要写入代码。

## 与上一课的联系

第 11 课建立共享状态；这一课不换示例，只把“谁负责写、谁只负责展示”拆清楚。

## 官方参考

- [管理应用拥有的状态概述](https://developer.huawei.com/consumer/cn/doc/doccenter-capabilities/arkts-application-state-management-overview)
- [数据存储方案如何选择](https://developer.huawei.com/consumer/cn/doc/doccenter-dev-faq/faqs-local-database-management-38)
