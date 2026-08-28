# 第 31 课：StateFlow 生命周期感知收集

## 知识点

在共享 Compose UI 中使用 `collectAsStateWithLifecycle()` 收集 `StateFlow`。

## 用途

页面进入活跃状态时开始收集数据，页面进入后台或离开活跃状态时停止收集，避免不可见界面继续做无意义的 UI 更新。

## 核心概念

- `collectAsStateWithLifecycle()` 把 `StateFlow` 转换为 Compose `State`。
- 默认至少处于 `Lifecycle.State.STARTED` 时才会收集。
- 生命周期低于目标状态时停止，重新活跃后自动继续。
- 它是 `lifecycle-runtime-compose` 提供的 common API，可用于共享 UI。

## 示例代码

在 `commonMain` 添加与 ViewModel 版本对齐的 Lifecycle Compose 依赖：

```kotlin
commonMain.dependencies {
    implementation(libs.androidx.lifecycle.runtime.compose)
}
```

把上一课的普通收集方式：

```kotlin
val state by viewModel.uiState.collectAsState()
```

替换为生命周期感知的方式：

```kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.lifecycle.compose.collectAsStateWithLifecycle

@Composable
fun CounterRoute(
    viewModel: CounterViewModel,
) {
    val state by viewModel.uiState.collectAsStateWithLifecycle()

    CounterScreen(
        count = state.count,
        onIncrement = viewModel::increment,
    )
}
```

多数页面使用默认的 `STARTED` 即可，不需要手动监听平台生命周期。

## 5 分钟练习

将最小活跃状态改成 `RESUMED`，观察 API 参数应该写在哪里。

## 参考答案

```kotlin
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.compose.collectAsStateWithLifecycle

val state by viewModel.uiState.collectAsStateWithLifecycle(
    minActiveState = Lifecycle.State.RESUMED,
)
```

实际项目通常保留默认的 `STARTED`；只有确实要求页面处于前台交互状态时才使用 `RESUMED`。

## 与上一课的联系

上一课用共享 `ViewModel` 暴露 `StateFlow`；今天优化 UI 的订阅方式，让状态收集跟随 Android、iOS 的共享生命周期。

## 参考资料

- [Kotlin Multiplatform：Lifecycle](https://kotlinlang.org/docs/multiplatform/compose-lifecycle.html)
- [AndroidX API：collectAsStateWithLifecycle](https://developer.android.com/reference/kotlin/androidx/lifecycle/compose/collectAsStateWithLifecycle.composable)

