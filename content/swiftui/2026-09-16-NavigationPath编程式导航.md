# 第 12 课：NavigationPath编程式导航

- 日期：2026-09-16
- 课程序号：第 12 课
- 知识点：NavigationPath编程式导航

## 用途

由状态主动把课程值推入导航栈。

## 核心概念

NavigationPath 保存可哈希的路径值；绑定给 NavigationStack 后可 append 或 removeLast。

## 最小代码或操作示例

```text
@State private var path = NavigationPath()
NavigationStack(path: $path) {
  Button("打开详情") { path.append("SwiftUI") }
  .navigationDestination(for: String.self) { Text($0) }
}
```

## 3～5 分钟练习

增加返回根页按钮。

## 参考答案

调用 path.removeLast(path.count)。

## 与上一课的联系

继承上一课的值路由映射；本课只绑定 NavigationPath；下一课可恢复可编码路径。

## 时效校验

时效校验：2026-09-16（SwiftUI 当前官方 API）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [Apple Developer：NavigationPath](https://developer.apple.com/documentation/swiftui/navigationpath)
