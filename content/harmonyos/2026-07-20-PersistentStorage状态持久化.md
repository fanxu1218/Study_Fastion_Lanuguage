# 第 13 课：PersistentStorage 状态持久化

- 日期：2026-07-20
- 时效校验：2026-09-15（HarmonyOS API 20 SDK、华为官方应用状态管理文档）
- 知识点：`PersistentStorage.persistProp()`
- 适用场景：让第 12 课的收藏数在应用重启后仍能恢复

承接上一课：列表、详情和展示组件已经共享 `favoriteCount`，但它目前只在应用进程存活期间存在。这一课只增加持久化，不更换状态 key 和页面示例。

## 1. 把已有 key 接入持久化

在应用初始化位置按顺序执行：

```ts
AppStorage.setOrCreate<number>('favoriteCount', 0);
PersistentStorage.persistProp<number>('favoriteCount', 0);
```

页面代码不用改，仍然通过第 11、12 课的 `@StorageLink` 和 `@StorageProp` 访问 `favoriteCount`。

```text
DetailPage 增加收藏数
-> AppStorage 更新
-> PersistentStorage 保存指定 key
-> 应用重新启动时恢复 favoriteCount
-> TopicPage 与 FavoriteSummary 继续显示恢复值
```

`PersistentStorage` 适合少量 UI 状态，不应当代替业务数据库或用于大量数据。

## 2. 验证持久化与共享是两层职责

- `AppStorage`：让当前运行中的组件共享状态。
- `PersistentStorage`：让指定的 AppStorage 状态在应用重启后恢复。
- `@StorageLink` / `@StorageProp`：决定组件怎样订阅这份状态。

## 3～5 分钟练习

把收藏数增加到 `3`，关闭并重新启动应用，确认列表上的 `FavoriteSummary` 仍显示 `3`。

## 参考答案

确认 `setOrCreate()` 与 `persistProp()` 使用同一个 key 和相同默认类型；页面仍绑定 `favoriteCount`，不需要自己读写文件。

## 与上一课的联系

第 12 课完成共享状态的读写职责分离；这一课继续同一个 `favoriteCount`，把它从“进程内共享”推进到“重启后恢复”。

## 官方参考

- [管理应用拥有的状态概述](https://developer.huawei.com/consumer/cn/doc/doccenter-capabilities/arkts-application-state-management-overview)
- [PersistentStorage 常见问题与注意事项](https://developer.huawei.com/consumer/cn/doc/doccenter-dev-faq/faqs-arkui-1086)
