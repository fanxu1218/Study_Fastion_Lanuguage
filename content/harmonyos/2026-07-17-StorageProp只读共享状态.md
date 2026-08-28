# 第 12 课：@StorageProp 只读共享状态

- 日期：2026-07-17
- 知识点：`@StorageProp`
- 适用场景：页面或组件只需要读取应用级共享状态，不应该直接修改它，例如显示当前用户名、主题名称、登录文案

承接上一课的 `AppStorage` 与 `@StorageLink`：上一课解决“多个页面都能改同一份状态”，这一课继续区分“谁负责修改、谁只负责展示”，避免所有组件都直接写全局状态。

## 1. `@StorageProp` 适合只读订阅

`@StorageLink('key')` 是可读可写绑定，适合真正要改共享状态的地方。  
`@StorageProp('key')` 是只读订阅，组件会跟着 `AppStorage` 的值刷新，但不应该在当前组件里直接改它。

可以把它理解成：

```text
状态源修改 AppStorage
-> 使用 @StorageProp 的组件自动刷新
-> 展示组件不承担写入职责
```

## 2. 最小示例

先准备一个应用级共享用户名：

```ts
import { AppStorage } from '@kit.ArkUI';

AppStorage.setOrCreate('userName', '游客');
```

写入状态的页面使用 `@StorageLink`：

```ts
@Entry
@Component
struct ProfilePage {
  @StorageLink('userName') userName: string = '游客';

  build() {
    Column({ space: 12 }) {
      Text(`当前用户：${this.userName}`)
        .fontSize(22)

      Button('切换为 Harmony 用户')
        .onClick(() => {
          this.userName = 'Harmony 用户';
        })
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```

只负责展示的子组件使用 `@StorageProp`：

```ts
@Component
struct WelcomeBanner {
  @StorageProp('userName') userName: string = '游客';

  build() {
    Text(`欢迎你，${this.userName}`)
      .fontSize(20)
  }
}
```

这样 `ProfilePage` 改了 `userName` 后，`WelcomeBanner` 会自动刷新，但欢迎条本身不负责改全局用户名。

## 3～5 分钟练习

在示例中再增加一个 `Text`，显示：

```text
当前身份：已登录 / 未登录
```

要求：

1. 新增 `loginLabel` 这个 `AppStorage` 字段，默认值是 `未登录`。
2. 在按钮点击时，同时把它改成 `已登录`。
3. 用一个只读展示组件通过 `@StorageProp('loginLabel')` 显示这个值。

## 参考答案

```ts
import { AppStorage } from '@kit.ArkUI';

AppStorage.setOrCreate('loginLabel', '未登录');
```

```ts
@Entry
@Component
struct ProfilePage {
  @StorageLink('loginLabel') loginLabel: string = '未登录';

  build() {
    Column({ space: 12 }) {
      Button('模拟登录')
        .onClick(() => {
          this.loginLabel = '已登录';
        })

      LoginStatusText()
    }
  }
}

@Component
struct LoginStatusText {
  @StorageProp('loginLabel') loginLabel: string = '未登录';

  build() {
    Text(`当前身份：${this.loginLabel}`)
  }
}
```

## 与上一课的联系

上一课建立了“多个页面共享一份状态”；这一课补上“共享状态的读写职责分离”，为后续学习 `PersistentStorage` 或更复杂的全局状态组织打基础。
