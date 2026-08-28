# 第 35 课：combine 合并多个 Flow

## 知识点

使用 `combine()` 把多个 Repository 的最新数据合并成一个共享 UI 状态。

## 用途

一个详情页往往同时依赖商品信息和收藏状态。任意数据源发生变化时，页面都应重新计算并显示一致的最新结果。

## 核心概念

- `combine()` 等待每个上游至少发出一个值。
- 任一上游再次发出值时，使用所有上游的最新值重新执行转换逻辑。
- 合并逻辑放在 `ViewModel`，UI 只接收最终的 `DetailUiState`。
- 合并后的冷 `Flow` 仍可用 `stateIn()` 转成共享 `StateFlow`。

## 示例代码

```kotlin
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.stateIn

data class Item(val id: Long, val name: String)

interface ItemRepository {
    fun observeItem(id: Long): Flow<Item?>
}

interface FavoriteRepository {
    fun observeFavoriteIds(): Flow<Set<Long>>
}

sealed interface DetailUiState {
    data object Loading : DetailUiState
    data class Content(
        val item: Item,
        val isFavorite: Boolean,
    ) : DetailUiState
    data class Error(val message: String) : DetailUiState
}

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
            .stateIn(
                scope = viewModelScope,
                started = SharingStarted.WhileSubscribed(5_000),
                initialValue = DetailUiState.Loading,
            )
}
```

当商品名称改变，或收藏集合改变时，`uiState` 都会产生新的 `Content`。

## 5 分钟练习

现有 `observeCartCount(): Flow<Int>` 和 `observeFavoriteCount(): Flow<Int>`。使用 `combine()` 生成包含两个数量的 `HeaderUiState`。

## 参考答案

```kotlin
data class HeaderUiState(
    val cartCount: Int,
    val favoriteCount: Int,
)

val headerState: StateFlow<HeaderUiState> =
    observeCartCount()
        .combine(observeFavoriteCount()) { cartCount, favoriteCount ->
            HeaderUiState(
                cartCount = cartCount,
                favoriteCount = favoriteCount,
            )
        }
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5_000),
            initialValue = HeaderUiState(0, 0),
        )
```

## 与上一课的联系

上一课把单个 Repository 的 `Flow` 转成了 `StateFlow`；今天先用 `combine()` 合并多个数据源，再用同一个 `stateIn()` 策略输出唯一页面状态。

## 参考资料

- [Kotlin Coroutines API：combine](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/combine.html)
- [Kotlin Coroutines API：stateIn](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/state-in.html)
