# 第 12 课：sealedclass限制状态集合

- 日期：2026-09-15
- 课程序号：第 12 课
- 知识点：sealed class 与穷尽 when

## 用途

把课程加载状态限制为已知分支。

## 核心概念

密封层级的直接子类在编译期可知，when 可穷尽处理而无需 else。

## 最小代码或操作示例

```kotlin
sealed interface LoadState
data object Loading : LoadState
data class Ready(val lesson: Lesson) : LoadState
data class Failed(val message: String) : LoadState
```

## 3～5 分钟练习

写一个 when，把三种状态映射为文字。

## 参考答案

分别为 Loading、Ready、Failed 返回对应字符串。

## 与上一课的联系

继承上一课的 Lesson data class；本课只封装有限加载状态；下一课可在 when 中渲染不同结果。

## 时效校验

时效校验：2026-09-15（Kotlin 当前官方文档）。已打开并核对下列官方文档；示例未使用已废弃接口。

## 官方参考

- [Kotlin Docs：Sealed classes and interfaces](https://kotlinlang.org/docs/sealed-classes.html)
