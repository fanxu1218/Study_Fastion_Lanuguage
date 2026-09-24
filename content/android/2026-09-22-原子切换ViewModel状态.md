# 第 16 课：原子切换 ViewModel 状态

- 日期：2026-09-22
- 课程序号：第 16 课
- 知识点：`MutableStateFlow.update`

## 用途或适用场景

快速连续触发切换时，让每次更新都基于状态流的当前值。

## 核心概念

`update { !it }` 原子地更新 `MutableStateFlow`；回调可能被重试，所以只做纯值计算。

## 最小代码或操作示例

```kotlin
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.update

class LessonViewModel(state: SavedStateHandle) : ViewModel() {
    private val _running = MutableStateFlow(state["running"] ?: false)
    val running: StateFlow<Boolean> = _running
    fun toggle() { _running.update { current -> !current } }
}
```

上一课的按钮仍调用 `viewModel.toggle()`，收集器根据 `running` 更新文字。

## 3～5 分钟练习

连续调用两次 `toggle()`，观察状态。

## 参考答案

状态从 `false` 到 `true` 再到 `false`，按钮文字先变“停止”再变“开始”。

## 与上一课的联系

沿用第 15 课的按钮监听器、`LessonViewModel.toggle()` 和同一 `running` 状态流；本课只把 ViewModel 内的切换改为 `update`；完成后下一课可旋转屏幕验证 ViewModel 状态仍被新界面读取。

## 时效校验

时效校验：2026-09-24（kotlinx-coroutines 1.11.0 `MutableStateFlow.update` 与 Android StateFlow 指南；未见废弃标记）。

## 官方参考

- [Kotlin API：MutableStateFlow.update](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/update.html)
- [Android Developers：StateFlow and SharedFlow](https://developer.android.com/kotlin/flow/stateflow-and-sharedflow)
