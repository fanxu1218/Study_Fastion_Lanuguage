# 第 13 课：NavigationPath返回根页

- 日期：2026-09-17
- 课程序号：第 13 课
- 知识点：NavigationPath返回根页

## 用途

一次清空导航路径回到根页面。

## 核心概念

NavigationPath 的 count 表示栈深度；removeLast(count) 可移除全部路径元素。

## 最小代码或操作示例

```text
Button("返回首页") {
  path.removeLast(path.count)
}
```

## 3～5 分钟练习

先压入两个页面再返回根页。

## 参考答案

两次 append 后调用 removeLast(path.count)，栈恢复为空。

## 与上一课的联系

继承上一课的 NavigationPath；本课只增加清空路径；下一课可保存可编码路径。

## 时效校验

时效校验：2026-09-17（SwiftUI 当前官方 API）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [Apple Developer：NavigationPath](https://developer.apple.com/documentation/swiftui/navigationpath)

