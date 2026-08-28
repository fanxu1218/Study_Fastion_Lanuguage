# 第 13 课：PersistentStorage 状态持久化

- 日期：2026-07-20
- 知识点：`PersistentStorage`
- 适用场景：主题开关、登录文案、上次选择的 tab 等状态需要在应用重启后继续保留

承接上一课的 `@StorageProp`：上一课解决了“谁读、谁写共享状态”，这一课继续解决“应用退出再打开后，为什么状态还能保留下来”，把共享状态从内存推进到持久化存储。

## 1. `PersistentStorage` 解决重启后状态丢失

`AppStorage` 适合在应用运行期间共享状态，但如果应用被杀掉再重新启动，内存中的值会丢失。  
`PersistentStorage` 可以把指定 key 的值同步到持久化存储，下次启动时再恢复出来。

可以把它理解成：

```text
首次启动设置默认值
-> PersistentStorage 持久化指定 key
-> 应用重启后自动恢复
-> 页面仍通过 AppStorage / @StorageLink / @StorageProp 使用这份状态
```

## 2. 最小示例

先在应用启动阶段声明要持久化的主题值：

```ts
import { AppStorage, PersistentStorage } from '@kit.ArkUI';

AppStorage.setOrCreate('themeLabel', '浅色模式');
PersistentStorage.persistProp('themeLabel', '浅色模式');
```

页面里继续像上一课一样通过共享状态读写：

```ts
@Entry
@Component
struct SettingsPage {
  @StorageLink('themeLabel') themeLabel: string = '浅色模式';

  build() {
    Column({ space: 12 }) {
      Text(`当前主题：${this.themeLabel}`)
        .fontSize(22)

      Button('切换主题')
        .onClick(() => {
          this.themeLabel = this.themeLabel === '浅色模式'
            ? '深色模式'
            : '浅色模式';
        })
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```

这里真正持久化的是 `themeLabel` 这个 key；`SettingsPage` 仍然只关心共享状态本身，不需要自己写文件。

## 3～5 分钟练习

把示例里的 `themeLabel` 改成一个“是否已看过新手引导”的状态：

1. 新增 `guideFinished`，默认值是 `false`。
2. 用 `PersistentStorage` 持久化它。
3. 页面上显示“已完成引导”或“未完成引导”。
4. 点击按钮后把它切换为 `true`。

## 参考答案

```ts
import { AppStorage, PersistentStorage } from '@kit.ArkUI';

AppStorage.setOrCreate('guideFinished', false);
PersistentStorage.persistProp('guideFinished', false);
```

```ts
@Entry
@Component
struct GuidePage {
  @StorageLink('guideFinished') guideFinished: boolean = false;

  build() {
    Column({ space: 12 }) {
      Text(this.guideFinished ? '已完成引导' : '未完成引导')
        .fontSize(22)

      Button('完成引导')
        .onClick(() => {
          this.guideFinished = true;
        })
    }
  }
}
```

重点是先把 key 接入 `PersistentStorage`，再像普通共享状态一样用 `@StorageLink` 读写。

## 与上一课的联系

上一课强调“展示组件只读、写入职责集中”；这一课在同一套共享状态之上再补一层“重启后仍可恢复”，为后续学习更完整的数据模型和应用初始化流程打基础。
