# 第 10 课：NavigationStack页面导航

- 日期：2026-09-14
- 课程序号：第 10 课
- 知识点：导航栈与 `NavigationLink`

## 用途

从课程列表进入详情页，并保留可返回的页面层级。

## 核心概念

`NavigationStack` 管理导航路径，`NavigationLink` 声明触发入口与目标视图。

## 最小代码或操作示例

```swift
NavigationStack {
    List(lessons, id: \.self) { lesson in
        NavigationLink(lesson) {
            Text("课程详情：\(lesson)")
        }
    }
}
```

## 3～5 分钟练习

把链接标签改成带书本图标的 `Label`。

## 参考答案

使用 `NavigationLink { ... } label: { Label(lesson, systemImage: "book") }`。

## 与上一课的联系

上一课用 `@Bindable` 编辑共享模型；本课把状态驱动的列表连接到详情层级。

## 时效校验

时效校验：2026-09-15（SwiftUI 当前官方文档）。已复核本课用法，未发现废弃标记；本轮官方资料见下方链接。

## 官方参考

- [Apple Developer：Understanding the navigation stack](https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack)
