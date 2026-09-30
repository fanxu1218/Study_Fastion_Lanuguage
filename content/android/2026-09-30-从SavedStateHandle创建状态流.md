# 第 21 课：从SavedStateHandle创建状态流

- 日期：2026-09-30
- 课程序号：第 21 课
- 知识点：`getStateFlow`

## 用途或适用场景

以保存的课程 ID 作为可观察状态，同时提供首次默认值。

## 核心概念

`getStateFlow(key, initialValue)` 读取并观察同一保存键；只保存轻量 ID。

## 最小代码或操作示例

```kotlin
class LessonViewModel(savedStateHandle: SavedStateHandle) : ViewModel() {
  val lessonId = savedStateHandle.getStateFlow("lessonId", "python")
}
```

## 3～5 分钟练习

把默认课程 ID 改为 `rust`，不保存完整课程对象。

## 参考答案

首次无已保存值时流发出 `rust`；恢复时优先使用系统保存的 ID。

## 与上一课的联系

第 20 课限定只保存课程 ID；本课只新增 `getStateFlow` 暴露该 ID；下一课可由仓库根据 ID 加载课程。

## 时效校验

时效校验：2026-09-30（AndroidX Lifecycle 2.9.0+；官方 SavedStateHandle 文档提供 `getStateFlow`，未见废弃标记。）

## 官方参考

- [官方文档](https://developer.android.com/topic/libraries/architecture/viewmodel/viewmodel-savedstate)

