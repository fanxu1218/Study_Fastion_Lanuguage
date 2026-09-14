# 第 11 课：AppStorage 与 @StorageLink

- 日期：2026-07-16
- 时效校验：2026-09-14（HarmonyOS API 20 SDK、华为官方状态管理与 Navigation 文档）
- 知识点：`AppStorage`、`@StorageLink`
- 适用场景：不同页面内容共享登录态、收藏数、主题开关等应用级 UI 状态

承接上一课的 `NavPathStack`：导航内容之间不仅要能进入和返回，还经常要看到同一份共享数据。这一课学习如何把 UI 状态提升到应用级存储。

## 1. `AppStorage` 保存应用级共享状态

`@State` 只在当前组件内部生效，`@Link` 适合父子组件同步；如果不同页面内容没有直接父子关系，可以把少量应用级 UI 状态放到 `AppStorage`。

在应用初始化位置执行一次：

```ts
AppStorage.setOrCreate<number>('favoriteCount', 0);
```

可以把数据流理解成：

```text
列表内容与详情内容绑定同一个 key
-> 详情内容修改 favoriteCount
-> AppStorage 更新
-> 列表内容自动显示最新值
```

## 2. 与 `Navigation` 一起使用

下面只保留本课关键代码。列表内容通过 `NavPathStack` 进入详情，两个组件都使用 `@StorageLink('favoriteCount')` 绑定同一事实源。

```ts
class FavoriteRouteParams {
}

@Entry
@Component
struct FavoritePage {
  pathStack: NavPathStack = new NavPathStack();
  @StorageLink('favoriteCount') favoriteCount: number = 0;

  @Builder
  pageBuilder(name: string, param: Object) {
    if (name === 'FavoriteDetail') {
      FavoriteDetail({ pathStack: this.pathStack })
    }
  }

  build() {
    Navigation(this.pathStack) {
      Column({ space: 16 }) {
        Text(`当前收藏数: ${this.favoriteCount}`)
          .fontSize(22)

        Button('去详情')
          .onClick(() => {
            this.pathStack.pushPath({
              name: 'FavoriteDetail',
              param: new FavoriteRouteParams()
            });
          })
      }
      .width('100%')
      .height('100%')
      .justifyContent(FlexAlign.Center)
    }
    .title('收藏')
    .navDestination(this.pageBuilder)
  }
}

@Component
struct FavoriteDetail {
  pathStack: NavPathStack = new NavPathStack();
  @StorageLink('favoriteCount') favoriteCount: number = 0;

  build() {
    NavDestination() {
      Column({ space: 16 }) {
        Text(`详情收藏数: ${this.favoriteCount}`)
          .fontSize(22)

        Button('收藏 +1')
          .onClick(() => {
            this.favoriteCount += 1;
          })

        Button('返回')
          .onClick(() => {
            this.pathStack.pop();
          })
      }
      .width('100%')
      .height('100%')
      .justifyContent(FlexAlign.Center)
    }
    .title('详情')
  }
}
```

`AppStorage` 适合 UI 状态共享，不等同于业务数据库；大量数据、结构化业务数据或跨进程数据应选择对应的数据存储方案。

## 3～5 分钟练习

在详情内容添加“重置收藏数”按钮，把 `favoriteCount` 改回 `0`。返回后确认列表内容也显示 `0`。

## 参考答案

```ts
Button('重置收藏数')
  .onClick(() => {
    this.favoriteCount = 0;
  })
```

## 与上一课的联系

上一课解决“如何从详情正确出栈”；这一课进一步解决“返回后如何看到最新共享状态”，同时继续沿用现行 `Navigation` 路由链路。

## 官方参考

- [管理应用拥有的状态概述](https://developer.huawei.com/consumer/cn/doc/doccenter-capabilities/arkts-application-state-management-overview)
- [Navigation 页面路由](https://developer.huawei.com/consumer/cn/doc/doccenter-capabilities/arkts-navigation-jump)
