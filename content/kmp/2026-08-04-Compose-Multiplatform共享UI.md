# 第 19 课：认识 Compose Multiplatform 共享 UI

- 日期：2026-08-04
- 课程序号：19
- 知识点：在 `commonMain` 中编写无状态 `@Composable` 界面

## 用途

KMP 不仅可以共享数据层，也可以使用 Compose Multiplatform 共享 Android、iOS、桌面和 Web 的 UI 代码。共享组件接收数据并发送用户事件，平台入口负责把它显示到各自窗口中。

## 核心概念

- `@Composable` 标记用于描述界面的 Kotlin 函数。
- 放在 `commonMain` 的组件不能直接依赖 Android `Activity` 或 iOS `UIViewController`。
- 无状态组件通过参数接收当前数据，通过回调把用户事件交给上层。
- `MaterialTheme`、`Text`、`Button` 等 Material3 组件可以在多平台共享。
- 是否共享 UI 是架构选择；KMP 也支持只共享业务逻辑、保留原生 UI。

## 示例代码

在已启用 Compose Multiplatform 插件的共享模块中加入常用依赖：

```kotlin
kotlin {
    sourceSets {
        commonMain.dependencies {
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material3)
        }
    }
}
```

`commonMain/LanguageScreen.kt`：

```kotlin
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun LanguageScreen(
    languageCode: String,
    onChangeLanguage: () -> Unit,
) {
    MaterialTheme {
        Column(
            modifier = Modifier.padding(24.dp),
        ) {
            Text(text = "当前语言：$languageCode")

            Button(onClick = onChangeLanguage) {
                Text(text = "切换语言")
            }
        }
    }
}
```

这个组件只渲染传入的 `languageCode`。点击按钮时，它不自行修改业务状态，而是调用 `onChangeLanguage`，由上层状态持有者处理事件并提供新数据。

调用示意：

```kotlin
LanguageScreen(
    languageCode = "zh-CN",
    onChangeLanguage = {
        println("收到切换语言事件")
    },
)
```

## 5 分钟练习

给 `LanguageScreen` 增加参数 `canChangeLanguage: Boolean`，并用它控制按钮的 `enabled` 状态。

## 参考答案

```kotlin
@Composable
fun LanguageScreen(
    languageCode: String,
    canChangeLanguage: Boolean,
    onChangeLanguage: () -> Unit,
) {
    MaterialTheme {
        Column(
            modifier = Modifier.padding(24.dp),
        ) {
            Text(text = "当前语言：$languageCode")

            Button(
                onClick = onChangeLanguage,
                enabled = canChangeLanguage,
            ) {
                Text(text = "切换语言")
            }
        }
    }
}
```

按钮是否可用仍由外部数据决定，组件只忠实渲染这个结果。

## 与上一课的联系

上一课完成了 Android、iOS 偏好存储实现；本课开始构建共享 UI。后续可以把 `LanguageRepository` 或共享状态持有者提供的数据连接到 `LanguageScreen`，形成“平台存储 → 共享状态 → 共享 UI”的链路。

## 参考资料

- [Kotlin Multiplatform：Compose Multiplatform 入门](https://kotlinlang.org/docs/multiplatform/compose-multiplatform.html)
- [Compose Multiplatform 与 Jetpack Compose 的关系](https://kotlinlang.org/docs/multiplatform/compose-multiplatform-and-jetpack-compose.html)
