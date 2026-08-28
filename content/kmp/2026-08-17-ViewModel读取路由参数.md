# 第 32 课：ViewModel 读取路由参数

## 知识点

通过 `SavedStateHandle.toRoute()` 在导航目的地的共享 `ViewModel` 中读取类型安全路由参数。

## 用途

详情页 `ViewModel` 可以直接获得 `itemId` 并向 Repository 加载数据，不需要让 Composable 解析参数后再层层传递。

## 核心概念

- 路由仍然只传最小标识，例如 `itemId`。
- `createSavedStateHandle()` 从当前导航条目的创建信息中生成句柄。
- `SavedStateHandle.toRoute<Detail>()` 将参数还原成类型安全路由对象。
- 在 `composable<Detail>` 内获取 `ViewModel`，实例会绑定到当前导航目的地作用域。

## 示例代码

```kotlin
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.createSavedStateHandle
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.toRoute
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import kotlinx.serialization.Serializable

@Serializable
data object Home

@Serializable
data class Detail(val itemId: Long)

class DetailViewModel(
    savedStateHandle: SavedStateHandle,
) : ViewModel() {
    private val route = savedStateHandle.toRoute<Detail>()
    val itemId: Long = route.itemId
}

@Composable
fun App() {
    val navController = rememberNavController()

    NavHost(navController, startDestination = Home) {
        composable<Home> {
            Text("首页")
        }

        composable<Detail> {
            val detailViewModel = viewModel {
                DetailViewModel(
                    savedStateHandle = createSavedStateHandle(),
                )
            }

            Text("准备加载数据：${detailViewModel.itemId}")
        }
    }
}
```

实际跳转仍使用：

```kotlin
navController.navigate(Detail(itemId = 42L))
```

## 5 分钟练习

定义 `UserDetail(val userId: String)`，创建 `UserDetailViewModel`，并从 `SavedStateHandle` 中读取 `userId`。

## 参考答案

```kotlin
@Serializable
data class UserDetail(val userId: String)

class UserDetailViewModel(
    savedStateHandle: SavedStateHandle,
) : ViewModel() {
    private val route = savedStateHandle.toRoute<UserDetail>()
    val userId: String = route.userId
}

composable<UserDetail> {
    val userViewModel = viewModel {
        UserDetailViewModel(createSavedStateHandle())
    }
    Text("用户 ID：${userViewModel.userId}")
}
```

## 与上一课的联系

上一课让 UI 生命周期感知地收集 `ViewModel` 状态；今天把导航参数也交给目标页 `ViewModel`，下一步即可根据 ID 调用 Repository 并把结果更新到同一个 `StateFlow`。

## 参考资料

- [Android Developers：类型安全路由中的 ViewModel 参数](https://developer.android.com/guide/navigation/design/type-safety)
- [AndroidX API：Compose viewModel initializer](https://developer.android.com/reference/kotlin/androidx/lifecycle/viewmodel/compose/viewModel.composable)

