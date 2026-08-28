# 第 25 课：Compose 共享 UI 测试

## 知识点

使用 Compose Multiplatform UI 测试验证共享界面的显示内容和用户事件。

## 用途

同一份测试可以确认共享 Composable 是否正确显示状态、响应点击，减少 Android 与 iOS 界面行为不一致的风险。

## 核心概念

- 测试放在 `commonTest`，并添加与项目 Compose 版本匹配的 UI 测试依赖。
- `testTag()` 给测试节点一个稳定标识。
- `runComposeUiTest` 提供测试环境，`setContent` 装载待测界面。
- `onNodeWithTag()` 查找节点，断言显示结果或执行点击。
- UI 测试负责“渲染与事件”；Repository、状态持有者仍分别做单元测试。

## 示例代码

版本目录中配置好 UI 测试依赖后，在共享模块中添加：

```kotlin
kotlin {
    sourceSets {
        commonTest.dependencies {
            implementation(kotlin("test"))
            implementation(libs.compose.ui.test)
        }
    }
}
```

待测组件：

```kotlin
import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.testTag

@Composable
fun ErrorContent(onRetry: () -> Unit) {
    Column {
        Text("加载失败", Modifier.testTag("error_text"))
        Button(
            onClick = onRetry,
            modifier = Modifier.testTag("retry_button"),
        ) {
            Text("重试")
        }
    }
}
```

共享 UI 测试：

```kotlin
import androidx.compose.ui.test.ExperimentalTestApi
import androidx.compose.ui.test.assertTextEquals
import androidx.compose.ui.test.onNodeWithTag
import androidx.compose.ui.test.performClick
import androidx.compose.ui.test.v2.runComposeUiTest
import kotlin.test.Test
import kotlin.test.assertEquals

class ErrorContentTest {
    @OptIn(ExperimentalTestApi::class)
    @Test
    fun retryButtonSendsEvent() = runComposeUiTest {
        var retryCount = 0
        setContent {
            ErrorContent(onRetry = { retryCount++ })
        }

        onNodeWithTag("error_text").assertTextEquals("加载失败")
        onNodeWithTag("retry_button").performClick()

        assertEquals(1, retryCount)
    }
}
```

当前 v2 UI 测试 API 仍是实验性 API，因此示例使用了 `@OptIn`；升级 Compose Multiplatform 时应同步检查测试 API。

## 5 分钟练习

在示例测试中再点击一次“重试”按钮，并验证回调总共执行了两次。

## 参考答案

```kotlin
onNodeWithTag("retry_button").performClick()
onNodeWithTag("retry_button").performClick()

assertEquals(2, retryCount)
```

## 与上一课的联系

上一课用共享主题统一了组件的外观；今天开始为共享组件补上行为验证，确认状态能正确显示、用户操作能正确向外发送事件。

## 参考资料

- [Compose Multiplatform UI testing](https://kotlinlang.org/docs/multiplatform/compose-test.html)
- [Compose Multiplatform 1.11.1：UI testing](https://kotlinlang.org/docs/multiplatform/whats-new-compose-111.html#ui-testing)

