# 第 36 课：catch 转换 Flow 异常

## 知识点

使用 Flow 的 `catch()` 运算符，将 Repository 上游异常转换为共享 UI 可以渲染的错误状态。

## 用途

数据库读取或网络同步失败时，页面不会因为未处理异常而中断，而是稳定显示“加载失败”等错误内容。

## 核心概念

- `catch()` 只处理它前面的上游 Flow 运算符抛出的异常。
- 可以在 `catch` 中使用 `emit()` 发出一个降级 UI 状态。
- `catch()` 不会吞掉用于取消 Flow 的异常，协程仍能正常取消。
- `catch()` 处理失败但不重试；重试应使用 `retry` 或 `retryWhen`。
- 应放在 `stateIn()` 之前，把失败转换成与正常数据相同类型的状态。

## 示例代码

在上一课的合并数据流后增加 `catch()`：

```kotlin
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.stateIn

class DetailViewModel(
    itemId: Long,
    itemRepository: ItemRepository,
    favoriteRepository: FavoriteRepository,
) : ViewModel() {
    val uiState: StateFlow<DetailUiState> =
        itemRepository.observeItem(itemId)
            .combine(favoriteRepository.observeFavoriteIds()) { item, favoriteIds ->
                if (item == null) {
                    DetailUiState.Error("数据不存在")
                } else {
                    DetailUiState.Content(
                        item = item,
                        isFavorite = item.id in favoriteIds,
                    )
                }
            }
            .catch { error ->
                emit(
                    DetailUiState.Error(
                        message = error.message ?: "加载失败",
                    ),
                )
            }
            .stateIn(
                scope = viewModelScope,
                started = SharingStarted.WhileSubscribed(5_000),
                initialValue = DetailUiState.Loading,
            )
}
```

商品流或收藏流任意一个失败，`catch()` 都会发出 `DetailUiState.Error`；UI 仍然只需要渲染 `uiState`。

## 5 分钟练习

将 `observeUnreadCount(): Flow<Int>` 转成 `StateFlow<CountUiState>`；正常时发出数量，失败时发出错误消息，初始状态为加载中。

## 参考答案

```kotlin
sealed interface CountUiState {
    data object Loading : CountUiState
    data class Content(val count: Int) : CountUiState
    data class Error(val message: String) : CountUiState
}

val countState: StateFlow<CountUiState> =
    repository.observeUnreadCount()
        .map<Int, CountUiState> { count ->
            CountUiState.Content(count)
        }
        .catch { error ->
            emit(CountUiState.Error(error.message ?: "读取失败"))
        }
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5_000),
            initialValue = CountUiState.Loading,
        )
```

## 与上一课的联系

上一课用 `combine()` 合并多个 Repository Flow；今天补上异常出口，让任一上游失败时也能产出同一个 `DetailUiState`，而不是让异常离开数据流。

## 参考资料

- [Kotlin Coroutines API：catch](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/catch.html)
- [Kotlin 文档：处理 Flow 异常](https://kotlinlang.org/docs/coroutines-flow.html#exception-transparency)
