# 第 33 课：ViewModel 按 ID 加载数据

## 知识点

在共享 `ViewModel` 中使用路由 ID 调用 Repository，并通过 `StateFlow` 发布加载结果。

## 用途

详情页只需要接收一个 `itemId`，真正的数据读取由 `ViewModel` 和 Repository 完成；Android 与 iOS UI 只渲染加载、成功或失败状态。

## 核心概念

- `SavedStateHandle.toRoute()` 提供路由中的最小 ID。
- `viewModelScope.launch` 执行异步加载；`ViewModel` 清除时任务自动取消。
- Repository 负责获取数据，`ViewModel` 负责把结果转换为 UI 状态。
- UI 只观察只读 `StateFlow`，不直接调用数据源。

## 示例代码

```kotlin
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.navigation.toRoute
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlinx.serialization.Serializable

@Serializable
data class Detail(val itemId: Long)

data class Item(val id: Long, val name: String)

sealed interface LoadItemResult {
    data class Success(val item: Item) : LoadItemResult
    data class Failure(val message: String) : LoadItemResult
}

interface ItemRepository {
    suspend fun getItem(id: Long): LoadItemResult
}

sealed interface DetailUiState {
    data object Loading : DetailUiState
    data class Content(val item: Item) : DetailUiState
    data class Error(val message: String) : DetailUiState
}

class DetailViewModel(
    savedStateHandle: SavedStateHandle,
    private val repository: ItemRepository,
) : ViewModel() {
    private val itemId = savedStateHandle.toRoute<Detail>().itemId

    private val _uiState =
        MutableStateFlow<DetailUiState>(DetailUiState.Loading)
    val uiState = _uiState.asStateFlow()

    init {
        loadItem()
    }

    private fun loadItem() {
        viewModelScope.launch {
            _uiState.value = DetailUiState.Loading

            _uiState.value = when (val result = repository.getItem(itemId)) {
                is LoadItemResult.Success -> {
                    DetailUiState.Content(result.item)
                }
                is LoadItemResult.Failure -> {
                    DetailUiState.Error(result.message)
                }
            }
        }
    }
}
```

目标页创建 `ViewModel` 时注入 Repository：

```kotlin
val detailViewModel = viewModel {
    DetailViewModel(
        savedStateHandle = createSavedStateHandle(),
        repository = itemRepository,
    )
}
```

## 5 分钟练习

把 `loadItem()` 改成公开的 `retry()`，让失败界面的“重试”按钮可以重新加载同一个 `itemId`。

## 参考答案

```kotlin
fun retry() {
    viewModelScope.launch {
        _uiState.value = DetailUiState.Loading

        _uiState.value = when (val result = repository.getItem(itemId)) {
            is LoadItemResult.Success -> DetailUiState.Content(result.item)
            is LoadItemResult.Failure -> DetailUiState.Error(result.message)
        }
    }
}
```

界面只发送事件：

```kotlin
Button(onClick = viewModel::retry) {
    Text("重试")
}
```

## 与上一课的联系

上一课在 `ViewModel` 中取出了路由 `itemId`；今天使用这个 ID 调用 Repository，并将数据结果转换为共享 UI 可以观察的 `StateFlow`。

## 参考资料

- [Kotlin Multiplatform：Multiplatform ViewModel](https://kotlinlang.org/docs/multiplatform/compose-viewmodel.html)
- [Android Developers：ViewModelScope](https://developer.android.com/topic/libraries/architecture/coroutines)
