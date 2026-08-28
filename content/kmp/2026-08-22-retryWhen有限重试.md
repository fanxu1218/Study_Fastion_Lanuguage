# 第 37 课：retryWhen 有限重试

## 知识点

使用 `retryWhen()` 在 Flow 遇到可恢复异常时，进行有限次数的延迟重试。

## 用途

网络短暂中断等临时故障可能很快恢复。与其立即展示错误，可以先自动重试；同时限制次数并筛选异常类型，避免无限重试或掩盖程序错误。

## 核心概念

- `retryWhen` 要放在 `catch` 前面：先尝试恢复，最终失败再交给 `catch`。
- 回调参数 `cause` 是本次异常，`attempt` 是重试编号，从 `0` 开始。
- 返回 `true` 会重新收集上游，返回 `false` 会把异常继续传给下游。
- 回调是挂起函数，可以调用 `delay()` 实现重试间隔。
- `attempt < 2` 表示最多重试 2 次；加上首次请求，总共最多尝试 3 次。

## 示例代码

下面只重试 `TemporaryNetworkException`，两次重试前分别等待 500 毫秒和 1 秒：

```kotlin
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.retryWhen
import kotlinx.coroutines.flow.stateIn

data class Item(val id: Long, val name: String)

class TemporaryNetworkException(message: String) : Exception(message)

interface ItemRepository {
    fun observeItem(id: Long): Flow<Item?>
}

sealed interface DetailUiState {
    data object Loading : DetailUiState
    data class Content(val item: Item) : DetailUiState
    data class Error(val message: String) : DetailUiState
}

class DetailViewModel(
    repository: ItemRepository,
    itemId: Long,
) : ViewModel() {
    val uiState: StateFlow<DetailUiState> =
        repository.observeItem(itemId)
            .map<Item?, DetailUiState> { item ->
                if (item == null) {
                    DetailUiState.Error("数据不存在")
                } else {
                    DetailUiState.Content(item)
                }
            }
            .retryWhen { cause, attempt ->
                val canRetry =
                    cause is TemporaryNetworkException && attempt < 2

                if (canRetry) {
                    delay((attempt + 1) * 500L)
                }

                canRetry
            }
            .catch { error ->
                emit(DetailUiState.Error(error.message ?: "加载失败"))
            }
            .stateIn(
                scope = viewModelScope,
                started = SharingStarted.WhileSubscribed(5_000),
                initialValue = DetailUiState.Loading,
            )
}
```

第一次失败时 `attempt == 0`，等待 500 毫秒；第二次失败时 `attempt == 1`，等待 1 秒。再次失败时 `attempt == 2`，不再重试，异常由 `catch` 转成错误状态。

## 5 分钟练习

修改示例中的 `retryWhen`：

1. 仍然只重试 `TemporaryNetworkException`。
2. 最多重试 3 次。
3. 每次重试前固定等待 1 秒。

## 参考答案

```kotlin
.retryWhen { cause, attempt ->
    val canRetry =
        cause is TemporaryNetworkException && attempt < 3

    if (canRetry) {
        delay(1_000L)
    }

    canRetry
}
```

这里最多重试 3 次，加上首次请求，总共最多尝试 4 次。

## 与上一课的联系

上一课用 `catch()` 把 Flow 的最终异常转换成可渲染的错误状态；今天在它前面加入 `retryWhen()`，先尝试恢复临时故障，重试耗尽或遇到不可恢复异常后，仍由 `catch()` 统一收尾。

## 参考资料

- [Kotlin 官方 API：retryWhen](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/retry-when.html)
- [Kotlin 官方文档：Flows](https://kotlinlang.org/docs/coroutines-flow.html#restart-the-upstream-flow-after-an-exception)
