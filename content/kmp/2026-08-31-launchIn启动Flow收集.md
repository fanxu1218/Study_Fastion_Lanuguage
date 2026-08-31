# 第 43 课：launchIn 启动 Flow 收集

- 日期：2026-08-31
- 课程序号：第 43 课
- 知识点：使用 `launchIn()` 在指定协程作用域中启动 Flow 收集

## 用途

当共享层只需要执行日志、埋点等观察动作，不需要在 `collect` 代码块中处理值时，可以把 `onEach()` 与 `launchIn()` 组合成清晰的数据流管道。

## 核心概念

- 冷 Flow 在被收集前不会执行，`launchIn(scope)` 会在指定作用域中启动收集。
- `launchIn(scope)` 等价于在该作用域中 `launch { flow.collect() }`。
- 返回的 `Job` 可以用于主动取消这次收集。
- 作用域取消后，收集也会结束；因此应传入与业务生命周期一致的作用域。
- `launchIn` 只负责启动收集，不应被用来复制或伪造业务状态。

## 最小代码示例

```kotlin
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach

interface SearchLogger {
    fun record(query: String)
}

fun observeQueries(
    queries: Flow<String>,
    logger: SearchLogger,
    scope: CoroutineScope,
): Job = queries
    .onEach { query ->
        logger.record(query)
    }
    .launchIn(scope)
```

当 `queries` 发出新值时，`onEach` 会记录它；当 `scope` 被取消时，这条收集链路也会停止。

## 3～5 分钟练习

补全代码，让 `productStates` 在 `viewModelScope` 中开始收集，并保存返回的 `Job`：

```kotlin
val observation: Job = productStates
    .onEach { state -> logger.record(state) }
    .________(________)
```

## 参考答案

```kotlin
val observation: Job = productStates
    .onEach { state -> logger.record(state) }
    .launchIn(viewModelScope)
```

页面对应的 ViewModel 清理时，`viewModelScope` 会取消，`observation` 也会随之结束。

## 与上一课的联系

上一课用 `onEach()` 定义“每个值到来时做什么”；本课用 `launchIn()` 真正启动这条冷 Flow，并把收集生命周期交给明确的协程作用域。

## 参考资料

- [Kotlin 官方 API：launchIn](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/launch-in.html)
