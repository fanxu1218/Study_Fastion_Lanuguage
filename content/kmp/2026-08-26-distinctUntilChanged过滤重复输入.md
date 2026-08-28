# 第 40 课：distinctUntilChanged 过滤重复输入

## 知识点

使用 `distinctUntilChanged()` 过滤 Flow 中连续出现的相同值。

## 用途

搜索词经过 `trim()` 等处理后，不同的原始输入可能变成同一个值。过滤这些连续重复值，可以避免再次发起语义相同的搜索。

## 核心概念

- `distinctUntilChanged()` 会比较相邻两个值，并过滤后一个重复值。
- 默认使用值的相等性判断，也就是 `equals()`。
- 它只过滤连续重复值；例如 `A、B、A` 三个值都会通过。
- 操作符位置很重要：先规范化输入，再判断是否重复。
- `StateFlow` 已经会抑制完全相等的值，直接对原始 `StateFlow` 使用该操作符没有额外效果。

## 示例代码

在昨天的搜索数据流中，先去掉首尾空格，再过滤连续重复的搜索词：

```kotlin
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.debounce
import kotlinx.coroutines.flow.distinctUntilChanged
import kotlinx.coroutines.flow.flatMapLatest
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.map

@OptIn(FlowPreview::class, ExperimentalCoroutinesApi::class)
val results = query
    .map { value -> value.trim() }
    .distinctUntilChanged()
    .debounce(500)
    .flatMapLatest { value ->
        if (value.isBlank()) {
            flowOf(emptyList())
        } else {
            repository.search(value)
        }
    }
```

如果用户先输入 `KMP`，随后输入 ` KMP `，两者经过 `trim()` 都是 `KMP`，第二个值会被过滤，不会重新触发搜索。

## 5 分钟练习

补全下面的数据流，让搜索词忽略首尾空格和大小写，并过滤连续重复值：

```kotlin
val normalizedQuery = query
    .map { value -> value.________().________() }
    .________________________()
```

想一想：依次输入 `KMP`、` kmp `、`KMP Flow`，最终哪些值会通过？

## 参考答案

```kotlin
val normalizedQuery = query
    .map { value -> value.trim().lowercase() }
    .distinctUntilChanged()
```

通过的值是 `kmp` 和 `kmp flow`。中间的 ` kmp ` 规范化后仍是 `kmp`，因此被过滤。

## 与上一课的联系

上一课用 `flatMapLatest()` 在搜索词变化时取消旧搜索；今天先用 `distinctUntilChanged()` 过滤规范化后的重复搜索词，避免相同查询无意义地取消并重新启动。

## 参考资料

- [Kotlin 官方 API：distinctUntilChanged](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/distinct-until-changed.html)
