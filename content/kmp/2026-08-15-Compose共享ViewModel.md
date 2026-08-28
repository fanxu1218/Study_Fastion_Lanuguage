# 第 30 课：Compose 共享 ViewModel

## 知识点

在 `commonMain` 中使用 `ViewModel` 保存并管理共享 UI 状态。

## 用途

页面重组时不重复创建业务状态，并让 Android 与 iOS 共用同一份状态更新逻辑。

## 核心概念

- `ViewModel` 负责持有页面状态和处理用户事件。
- 对外暴露只读 `StateFlow`，内部保留 `MutableStateFlow`。
- `viewModel { ... }` 首次创建实例，之后在同一作用域内复用它。
- Route 连接 `ViewModel` 与 UI；Screen 只接收状态和回调。

## 示例代码

在 `commonMain` 添加与项目版本匹配的 ViewModel Compose 依赖：

```kotlin
commonMain.dependencies {
    implementation(libs.androidx.lifecycle.viewmodel.compose)
}
```

共享 `ViewModel` 与界面：

```kotlin
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.collectAsState
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.compose.viewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

data class CounterUiState(val count: Int = 0)

class CounterViewModel : ViewModel() {
    private val _uiState = MutableStateFlow(CounterUiState())
    val uiState = _uiState.asStateFlow()

    fun increment() {
        _uiState.update { state ->
            state.copy(count = state.count + 1)
        }
    }
}

@Composable
fun CounterRoute(
    viewModel: CounterViewModel = viewModel { CounterViewModel() },
) {
    val state by viewModel.uiState.collectAsState()

    CounterScreen(
        count = state.count,
        onIncrement = viewModel::increment,
    )
}

@Composable
fun CounterScreen(count: Int, onIncrement: () -> Unit) {
    Text("计数：$count")
    Button(onClick = onIncrement) {
        Text("加一")
    }
}
```

## 5 分钟练习

为 `CounterViewModel` 增加 `reset()`，并让界面通过“重置”按钮把计数恢复为 `0`。

## 参考答案

```kotlin
fun reset() {
    _uiState.value = CounterUiState()
}

Button(onClick = viewModel::reset) {
    Text("重置")
}
```

## 与上一课的联系

上一课验证了共享导航图；今天开始为导航目的地提供生命周期内可复用的共享状态所有者，让页面跳转和业务状态各自负责清晰的职责。

## 参考资料

- [Kotlin Multiplatform：Multiplatform ViewModel](https://kotlinlang.org/docs/multiplatform/compose-viewmodel.html)

