# 第 3 课：使用 expect/actual 对接平台能力

- 日期：2026-07-19
- 课程序号：03
- 知识点：用 `expect` 声明共享接口，用 `actual` 提供平台实现

## 用途

共享业务有时需要读取系统版本、设备名称等平台信息。`commonMain` 不能直接调用 Android 或 iOS API，此时可以用 `expect/actual` 把平台差异隔离在对应源码集中。

## 核心概念

- `expect`：写在共享源码集，表示“各平台必须提供这个声明”。
- `actual`：写在平台源码集，是对应平台的真实实现。
- `expect` 与 `actual` 的包名、函数名、参数和返回类型必须匹配。
- 共享代码只依赖 `expect` 声明，不需要知道底层使用了哪个平台 API。

## 示例代码

`commonMain/Platform.kt`：

```kotlin
expect fun platformName(): String

fun welcomeMessage(): String {
    return "当前平台：${platformName()}"
}
```

`androidMain/Platform.android.kt`：

```kotlin
import android.os.Build

actual fun platformName(): String {
    return "Android API ${Build.VERSION.SDK_INT}"
}
```

`iosMain/Platform.ios.kt`：

```kotlin
import platform.UIKit.UIDevice

actual fun platformName(): String {
    return UIDevice.currentDevice.systemName
}
```

调用 `welcomeMessage()` 时，Android 和 iOS 会自动链接各自的 `actual` 实现。

## 5 分钟练习

声明一个共享函数 `expect fun appVersion(): String`，并让 Android 端先用固定字符串返回 `"1.0-android"`。

## 参考答案

`commonMain/AppVersion.kt`：

```kotlin
expect fun appVersion(): String
```

`androidMain/AppVersion.android.kt`：

```kotlin
actual fun appVersion(): String {
    return "1.0-android"
}
```

iOS 目标也必须提供对应的 `actual fun appVersion()`，否则 iOS 编译无法通过。

## 与上一课的联系

上一课用 Gradle 声明了 Android 和 iOS 目标；本课开始利用它们各自的源码集，实现同一个共享声明在不同平台上的具体行为。
