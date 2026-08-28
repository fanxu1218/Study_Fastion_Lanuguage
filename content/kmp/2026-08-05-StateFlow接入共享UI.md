# 第 20 课：把 StateFlow 接入共享 UI

- 日期：2026-08-05
- 课程序号：20
- 知识点：使用 `collectAsState()` 和 `LaunchedEffect` 连接状态持有者与 Compose

## 用途

上一课的共享组件只能显示外部传入的静态参数。本课把 `UserStore.state` 接入 Compose，使 Repository 数据变化后，Android 和 iOS 的共享界面都能自动重新渲染。

## 核心概念

- `collectAsState()` 把 `StateFlow` 转换为 Compose 可观察的 `State`。
- `StateFlow` 发出新值后，读取该状态的组件会重组。
- `LaunchedEffect` 用于在组合生命周期内执行挂起任务。
- Route 组件负责连接状态和副作用，Screen 组件只负责渲染。
- 状态向下传递，用户事件通过回调向上传递。

## 示例代码

Route 层收集共享状态，并在用户 ID 变化时加载数据：

```kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue

@Composable
fun UserRoute(
    store: UserStore,
    userId: Long,
) {
    val state by store.state.collectAsState()

    LaunchedEffect(store, userId) {
        store.load(id = userId)
    }

    UserScreen(state = state)
}
```

`LaunchedEffect` 离开组合或键变化时会取消旧任务；新的 `userId` 会触发新的加载。重复加载的业务语义仍应由状态持有者和产品规则明确。

Screen 层只根据 `UserUiState` 渲染：

```kotlin
import androidx.compose.foundation.layout.Column
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun UserScreen(state: UserUiState) {
    Column {
        when (state) {
            UserUiState.Idle -> {
                Text(text = "等待加载")
            }

            UserUiState.Loading -> {
                CircularProgressIndicator()
            }

            is UserUiState.Content -> {
                Text(text = state.user.displayName)
            }

            is UserUiState.Error -> {
                Text(text = errorText(state.error))
            }
        }
    }
}

private fun errorText(error: DataError): String {
    return when (error) {
        DataError.Network -> "网络连接失败"
        is DataError.Http -> "请求失败：${error.statusCode}"
        DataError.InvalidPayload -> "数据格式错误"
    }
}
```

UI 根据数据层提供的明确错误类型选择文案，没有通过空对象或超时自行推断失败原因。

## 5 分钟练习

给 `UserScreen` 增加 `onRetry: () -> Unit` 参数，并在 `UserUiState.Error` 分支显示“重试”按钮。

## 参考答案

```kotlin
import androidx.compose.material3.Button

@Composable
fun UserScreen(
    state: UserUiState,
    onRetry: () -> Unit,
) {
    Column {
        when (state) {
            UserUiState.Idle -> Text(text = "等待加载")
            UserUiState.Loading -> CircularProgressIndicator()
            is UserUiState.Content -> {
                Text(text = state.user.displayName)
            }
            is UserUiState.Error -> {
                Text(text = errorText(state.error))
                Button(onClick = onRetry) {
                    Text(text = "重试")
                }
            }
        }
    }
}
```

按钮只发送重试事件，真正的重新请求仍由 Route 或状态持有者执行。

## 与上一课的联系

上一课创建了接收数据与回调的无状态共享组件；本课增加 Route 层，将此前的 `StateFlow`、`UserStore` 和 `UserUiState` 接到共享 Compose UI，形成单向数据流。

## 参考资料

- [Android Developers：Compose 状态与 collectAsState](https://developer.android.com/develop/ui/compose/state)
- [Compose Multiplatform 生命周期](https://kotlinlang.org/docs/multiplatform/compose-lifecycle.html)
