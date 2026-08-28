# 第 7 课：用 StateFlow 管理共享状态

- 日期：2026-07-23
- 课程序号：07
- 知识点：使用 `StateFlow` 暴露可观察、只读的当前状态

## 用途

页面通常既需要知道“当前值”，又需要持续接收后续变化，例如计数、登录状态和加载状态。`StateFlow` 同时具备当前值与数据流能力，适合由 KMP 共享层向 Android、iOS 暴露状态。

## 核心概念

- `StateFlow` 始终持有一个当前值，可通过 `value` 读取。
- 它是热流：状态由持有者维护，不会因为暂时没有收集者而消失。
- 内部使用 `MutableStateFlow` 修改状态，对外只暴露只读 `StateFlow`。
- 状态应由真实业务事件更新；UI 只观察并渲染，不再维护另一份重复状态。

## 示例代码

`commonMain/CounterStore.kt`：

```kotlin
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

data class CounterState(
    val count: Int = 0,
)

class CounterStore {
    private val _state = MutableStateFlow(CounterState())
    val state: StateFlow<CounterState> = _state.asStateFlow()

    fun increment() {
        _state.update { current ->
            current.copy(count = current.count + 1)
        }
    }
}
```

调用方可以持续收集状态：

```kotlin
lifecycleScope.launch {
    store.state.collect { state ->
        println("当前计数：${state.count}")
    }
}
```

调用 `store.increment()` 后，`StateFlow` 会保存新状态并通知收集者。外部无法直接修改 `_state`，所有变化都经过 `CounterStore` 的业务方法。

## 5 分钟练习

给 `CounterStore` 增加 `reset()` 方法，把计数恢复为 `0`。

## 参考答案

```kotlin
fun reset() {
    _state.update { current ->
        current.copy(count = 0)
    }
}
```

即使只是重置，也应通过状态持有者更新，避免 UI 直接制造一份与共享层脱节的计数。

## 与上一课的联系

上一课的普通 `Flow` 用来依次发送多个值；本课的 `StateFlow` 在此基础上增加了明确的当前状态，更适合页面状态和长期观察的数据。
