# 第 34 课：Repository Flow 转 StateFlow

## 知识点

使用 `stateIn()` 将 Repository 返回的冷 `Flow` 转换为 `ViewModel` 对外暴露的热 `StateFlow`。

## 用途

当本地数据库、缓存或网络数据持续变化时，详情页可以自动收到最新结果，不必每次都手动调用 `load()`。

## 核心概念

- 冷 `Flow` 通常在每次收集时重新执行上游逻辑。
- `stateIn()` 在指定作用域内共享一次上游收集，并保存最新值。
- `viewModelScope` 决定共享流的生命周期。
- `SharingStarted.WhileSubscribed(5_000)` 在没有订阅者 5 秒后停止上游，兼顾短暂重建与资源释放。
- `initialValue` 是上游首次发出数据前的页面状态。

## 示例代码

Repository 持续观察一条数据：

```kotlin
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.navigation.toRoute
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.stateIn
import kotlinx.serialization.Serializable

@Serializable
data class Detail(val itemId: Long)

data class Item(val id: Long, val name: String)

interface ItemRepository {
    fun observeItem(id: Long): Flow<Item?>
}

sealed interface DetailUiState {
    data object Loading : DetailUiState
    data class Content(val item: Item) : DetailUiState
    data class Error(val message: String) : DetailUiState
}

class DetailViewModel(
    savedStateHandle: SavedStateHandle,
    repository: ItemRepository,
) : ViewModel() {
    private val itemId = savedStateHandle.toRoute<Detail>().itemId

    val uiState: StateFlow<DetailUiState> =
        repository.observeItem(itemId)
            .map<Item?, DetailUiState> { item ->
                if (item == null) {
                    DetailUiState.Error("数据不存在")
                } else {
                    DetailUiState.Content(item)
                }
            }
            .stateIn(
                scope = viewModelScope,
                started = SharingStarted.WhileSubscribed(5_000),
                initialValue = DetailUiState.Loading,
            )
}
```

共享 UI 继续使用上一课学过的生命周期感知收集：

```kotlin
val state by viewModel.uiState.collectAsStateWithLifecycle()

when (val current = state) {
    DetailUiState.Loading -> Text("加载中")
    is DetailUiState.Content -> Text(current.item.name)
    is DetailUiState.Error -> Text(current.message)
}
```

Repository 后续发出同一条数据的新名称时，`StateFlow` 会保存最新状态并触发界面重组。

## 5 分钟练习

Repository 另有 `observeUnreadCount(): Flow<Int>`。在 `ViewModel` 中将它转换为 `StateFlow<Int>`，初始值为 `0`。

## 参考答案

```kotlin
val unreadCount: StateFlow<Int> =
    repository.observeUnreadCount()
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5_000),
            initialValue = 0,
        )
```

## 与上一课的联系

上一课使用 `viewModelScope.launch` 完成一次按 ID 加载；今天面对会持续变化的数据源，改用 `Flow` 加 `stateIn()` 自动维护最新 UI 状态。

## 参考资料

- [Kotlin Coroutines API：stateIn](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/state-in.html)
- [Android Developers：使用 Flow 计算 UI 状态](https://developer.android.com/topic/libraries/architecture/coroutines)
