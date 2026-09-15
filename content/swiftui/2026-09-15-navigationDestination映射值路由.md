# 第 11 课：navigationDestination映射值路由

- 日期：2026-09-15
- 课程序号：第 11 课
- 知识点：值导航与 navigationDestination

## 用途

按课程值统一映射详情页，避免在每个链接内重复目标视图。

## 核心概念

NavigationLink(value:) 把轻量值推入栈；navigationDestination 按值类型生成目标。

## 最小代码或操作示例

```swift
NavigationStack {
    List(lessons, id: \.self) { lesson in
        NavigationLink(lesson, value: lesson)
    }
    .navigationDestination(for: String.self) { lesson in
        Text("课程详情：\(lesson)")
    }
}
```

## 3～5 分钟练习

把详情文字改成带书本图标的 Label。

## 参考答案

Label("课程详情：\(lesson)", systemImage: "book")

## 与上一课的联系

继承上一课的 NavigationStack 和列表；本课只把目标改为类型映射；下一课可绑定 NavigationPath 实现编程式导航。

## 时效校验

时效校验：2026-09-15（SwiftUI 当前官方文档）。已打开并核对下列官方文档；示例未使用已废弃接口。

## 官方参考

- [Apple Developer：Understanding the navigation stack](https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack)
