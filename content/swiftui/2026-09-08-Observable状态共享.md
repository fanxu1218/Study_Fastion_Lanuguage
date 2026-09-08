# 第 6 课：Observable状态共享

- 日期：2026-09-08
- 课程序号：第 6 课
- 知识点：@Observable 与 @State

## 用途

让同一个页面中的多个子视图观察并修改共享学习进度。

## 核心概念

`@Observable` 让模型属性变化可被 SwiftUI 追踪；拥有模型的视图用 `@State` 保持它的生命周期。

## 最小代码或操作示例

```swift
import Observation
import SwiftUI

@Observable final class Progress {
    var count = 0
}

struct ContentView: View {
    @State private var progress = Progress()
    var body: some View {
        Button("完成 \(progress.count) 次") { progress.count += 1 }
    }
}
```

## 3～5 分钟练习

增加一个 `Text`，显示同一个 `progress.count`。

## 参考答案

在按钮旁加入 `Text("当前：\(progress.count)")`，点击后两处会同步更新。

## 与上一课的联系

上一课用 `Binding` 把单个值传给子视图；本课用可观察模型组织一组共享状态。
