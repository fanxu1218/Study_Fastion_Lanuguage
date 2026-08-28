# 第 39 课：flatMapLatest 只保留最新搜索

## 知识点

使用 `flatMapLatest()` 根据最新搜索词切换到新的 Repository Flow，并取消旧搜索结果的收集。

## 用途

搜索词变化后，旧请求可能比新请求更晚返回，导致页面显示过期结果。`flatMapLatest()` 会切换到最新查询对应的 Flow，避免旧结果覆盖新结果。

## 核心概念

- `flatMapLatest` 把上游的每个值转换成一个新的 Flow。
- 上游出现新值时，前一个内部 Flow 的收集会被取消。
- 最终只继续接收最新内部 Flow 发出的结果。
- 输入为空时可以返回 `flowOf(emptyList())`，立即清空搜索结果。
- `flatMapLatest` 目前需要使用 `@OptIn(ExperimentalCoroutinesApi::class)`。

## 示例代码

下面把昨天经过 `debounce()` 稳定后的搜索词，转换为 Repository 的搜索结果：

```kotlin
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.debounce
import kotlinx.coroutines.flow.flatMapLatest
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.stateIn

data class SearchItem(val id: Long, val title: String)

interface SearchRepository {
    fun search(query: String): Flow<List<SearchItem>>
}

@OptIn(FlowPreview::class, ExperimentalCoroutinesApi::class)
class SearchViewModel(
    private val repository: SearchRepository,
) : ViewModel() {
    private val query = MutableStateFlow("")

    val results: StateFlow<List<SearchItem>> = query
        .debounce(500)
        .flatMapLatest { value ->
            if (value.isBlank()) {
                flowOf(emptyList())
            } else {
                repository.search(value)
            }
        }
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5_000),
            initialValue = emptyList(),
        )

    fun onQueryChange(value: String) {
        query.value = value
    }
}
```

如果 `KMP` 的搜索还没结束，用户又输入了 `KMP Flow`，旧搜索 Flow 会被取消收集，页面接下来只接收 `KMP Flow` 的结果。

## 5 分钟练习

已有一个稳定搜索词 `stableQuery: Flow<String>`，请补全代码：输入为空时发送空列表，否则调用 `repository.search(value)`，并且新输入出现时取消旧搜索。

```kotlin
val results: Flow<List<SearchItem>> = stableQuery
    .____________ { value ->
        if (value.isBlank()) {
            ____________(emptyList())
        } else {
            repository.search(value)
        }
    }
```

## 参考答案

```kotlin
val results: Flow<List<SearchItem>> = stableQuery
    .flatMapLatest { value ->
        if (value.isBlank()) {
            flowOf(emptyList())
        } else {
            repository.search(value)
        }
    }
```

记得为使用位置添加：

```kotlin
@OptIn(ExperimentalCoroutinesApi::class)
```

## 与上一课的联系

上一课用 `debounce()` 等待搜索词稳定，减少搜索次数；今天用 `flatMapLatest()` 执行搜索并取消过期查询。组合后形成“先减少触发，再只保留最新结果”的搜索数据流。

## 参考资料

- [Kotlin 官方 API：flatMapLatest](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/flat-map-latest.html)
