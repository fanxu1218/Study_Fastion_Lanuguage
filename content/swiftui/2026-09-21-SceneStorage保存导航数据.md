# 第 15 课：SceneStorage保存导航数据

- 日期：2026-09-21
- 课程序号：第 15 课
- 知识点：SceneStorage保存导航数据

## 用途或适用场景

为同一场景保存上一课编码的导航数据。

## 核心概念

SceneStorage 保存轻量 Data；路径仍由 NavigationPath 持有，保存时更新编码数据。

## 最小代码或操作示例

```text
@SceneStorage("savedPath") private var savedPath: Data?
@State private var path = NavigationPath()
func savePath() throws {
    guard let value = path.codable else { return }
    savedPath = try JSONEncoder().encode(value)
}
```

## 3～5 分钟练习

清空路径后尝试保存。

## 参考答案

空路径的可编码表示写入 savedPath。

## 与上一课的联系

沿用第 14 课把 `NavigationPath.CodableRepresentation` 编码为 `Data` 的代码；本课只新增把该 Data 写入 `@SceneStorage`；完成练习后下一课可在场景重建时解码恢复路径。

## 时效校验

时效校验：2026-09-21（SwiftUI `SceneStorage` 需 iOS 14+/macOS 11+，`NavigationPath` 使组合示例需 iOS 16+/macOS 13+；已用 Xcode 27、Swift 6.4 与 macOS SDK 27 通过类型检查，未见废弃标记）。

## 官方参考

- [Apple Developer：SceneStorage](https://developer.apple.com/documentation/swiftui/scenestorage)
- [Apple Developer：SceneStorage Optional Data initializer](https://developer.apple.com/documentation/swiftui/scenestorage/init%28_%3A%29-6fdio)
