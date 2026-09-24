# 第 18 课：用 guard case 提前排除非成功状态

- 日期：2026-09-24
- 课程序号：第 18 课
- 知识点：`guard case` 提前返回

## 用途或适用场景

只有成功加载时才继续计算课程数量。

## 核心概念

`guard case` 在不匹配时执行 `else` 并离开当前函数；匹配后绑定的关联值可在后续代码中使用。

## 最小代码或操作示例

```swift
enum LoadState {
    case loading
    case ready(count: Int)
    case failed(message: String)
}
func positiveCount(_ state: LoadState) -> Int? {
    guard case .ready(let count) = state else { return nil }
    return count > 0 ? count : nil
}
print(positiveCount(.ready(count: 3)) as Any)
```

## 3～5 分钟练习

传入 `.loading` 和 `.ready(count: 0)` 分别观察结果。

## 参考答案

两者都返回 `nil`；前者未匹配 `ready`，后者数量不为正。

## 与上一课的联系

沿用第 17 课的 `LoadState`、`.ready(count:)` 和正数条件；本课只把成功状态的提取改为 `guard case` 提前返回；完成后下一课可在成功分支对数量执行进一步转换。

## 时效校验

时效校验：2026-09-24（Swift 官方语言书当前 Control Flow 与 Enumerations；`guard case` 模式匹配未见废弃标记）。

## 官方参考

- [Swift 官方语言书：Control Flow](https://github.com/swiftlang/swift-book/blob/main/TSPL.docc/LanguageGuide/ControlFlow.md)
- [Swift 官方语言书：Enumerations](https://github.com/swiftlang/swift-book/blob/main/TSPL.docc/LanguageGuide/Enumerations.md)
