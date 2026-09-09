# 第 7 课：Environment注入共享模型

- 日期：2026-09-09
- 课程序号：第 7 课
- 知识点：environment 与 @Environment

## 用途

把共享进度模型提供给较深层子视图，避免逐层传递参数。

## 核心概念

祖先视图用 `environment` 注入可观察模型，后代通过 `@Environment` 读取同一实例。

## 最小代码或操作示例

```swift
struct ProgressButton: View {
    @Environment(Progress.self) private var progress
    var body: some View {
        Button("增加") { progress.count += 1 }
    }
}

// 父视图中：ProgressButton().environment(progress)
```

## 3～5 分钟练习

增加一个后代 `Text`，从环境模型显示 `count`。

## 参考答案

在后代声明同样的 `@Environment(Progress.self)`，再显示 `Text("\(progress.count)")`。

## 与上一课的联系

上一课建立可观察共享模型；本课学习把该单一实例注入更深的视图层级。
