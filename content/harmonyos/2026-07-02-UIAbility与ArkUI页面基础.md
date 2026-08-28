# 第 1 课：UIAbility 与 ArkUI 页面基础

- 日期：2026-07-02
- 知识点：`UIAbility` 入口链路、ArkUI 声明式页面
- 适用场景：理解应用启动后第一屏如何加载，以及如何编写第一个 ArkUI 页面

## 1. UIAbility 是应用页面的运行入口

HarmonyOS 应用里，`UIAbility` 负责承载一个 UI 窗口。应用启动时，系统会创建 `UIAbility`，然后在 `onWindowStageCreate` 中加载入口页面。页面本身通常放在 `pages` 目录下。

典型链路：

```text
系统启动应用
-> 创建 UIAbility
-> onWindowStageCreate
-> windowStage.loadContent('pages/Index')
-> 渲染 Index 页面
```

最小示例：

```ts
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('pages/Index');
  }
}
```

## 2. ArkUI 页面用声明式方式描述界面

`@Entry` 表示页面入口组件，`@Component` 表示这是一个 ArkUI 组件，`build()` 描述 UI 结构。开发者不是手动创建 View，而是声明“界面应该长什么样”。

```ts
@Entry
@Component
struct Index {
  build() {
    Column() {
      Text('Hello HarmonyOS')
        .fontSize(24)
        .fontWeight(FontWeight.Bold)
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```

## 3～5 分钟练习

把 `Text('Hello HarmonyOS')` 改成你的名字，并添加第二行 `Text('今天学习 UIAbility 和 ArkUI')`，观察两个 `Text` 在 `Column` 中如何纵向排列。

## 参考答案

```ts
Column() {
  Text('你的名字')
  Text('今天学习 UIAbility 和 ArkUI')
}
```

## 与上一课的联系

这是学习计划的第一课，从应用入口和页面结构开始。
