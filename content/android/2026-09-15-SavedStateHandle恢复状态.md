# 第 11 课：SavedStateHandle恢复状态

- 日期：2026-09-15
- 课程序号：第 11 课
- 知识点：SavedStateHandle 与可恢复状态

## 用途

在进程重建后恢复轻量界面状态。

## 核心概念

ViewModel 跨配置变更存活；SavedStateHandle 还能保存可序列化的小型状态。

## 最小代码或操作示例

```kotlin
class LessonViewModel(private val state: SavedStateHandle) : ViewModel() {
  var running: Boolean
    get() = state["running"] ?: false
    set(value) { state["running"] = value }
}
```

## 3～5 分钟练习

把课程标题也保存到 handle。

## 参考答案

var title: String
  get() = state["title"] ?: ""
  set(value) { state["title"] = value }

## 与上一课的联系

继承上一课的 LessonViewModel；本课只增加进程重建后的轻量恢复；下一课可把状态暴露为可观察流。

## 时效校验

时效校验：2026-09-15（AndroidX Lifecycle 当前文档）。已打开并核对下列官方文档；示例未使用已废弃接口。

## 官方参考

- [Android Developers：Saved state module for ViewModel](https://developer.android.com/topic/libraries/architecture/viewmodel/viewmodel-savedstate)
