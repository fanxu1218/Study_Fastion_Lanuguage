# 第 2 课：KMP 目标与 Gradle 配置

- 日期：2026-07-18
- 课程序号：02
- 知识点：在共享库模块声明编译目标与源码集

## 用途

让第 1 课 commonMain 的 Greeting 被 Android 和 iOS 目标编译，并为下一课平台实现准备同名源码集。

## 核心概念

Target 决定产物的平台；source set 决定代码归属。新工程的共享库使用 `com.android.kotlin.multiplatform.library` 插件提供的 `kotlin { android { ... } }`，Android 应用入口留在独立应用模块。

默认层级模板根据目标创建中间源码集；同时保留 iosArm64 与 iosSimulatorArm64 时会创建 iosMain，供下一课共用 iOS 实现。

## 最小代码或操作示例

使用当前 KMP 向导生成的共享库工程，不把下面配置应用到 Android 应用模块。本课固定一组已在当前官方兼容资料中核对的教学组合：Kotlin 2.3.10、AGP 8.13.2、Gradle Wrapper 8.13、JDK 17；安装 Android SDK 36。iOS 构建还需要 macOS/Xcode，兼容表为这组 Kotlin 列出 Xcode 26.0；本课只要求 Gradle 同步。

工程 settings.gradle.kts 的既有 pluginManagement.repositories 须保留 google()、mavenCentral()、gradlePluginPortal()；dependencyResolutionManagement.repositories 保留 google()、mavenCentral()，并已 include(":shared")。这些来自向导，不重复创建 settings 文件。

在 shared/build.gradle.kts 使用以下插件和目标配置；根工程若已统一声明插件版本，则版本保持一致，模块省略重复的 version：

```kotlin
plugins {
    kotlin("multiplatform") version "2.3.10"
    id("com.android.kotlin.multiplatform.library") version "8.13.2"
}

kotlin {
    android {
        namespace = "com.example.study.shared"
        compileSdk = 36
        minSdk = 24
    }
    iosArm64()
    iosSimulatorArm64()

    sourceSets {
        commonMain.dependencies {
            // 第 1 课 Greeting.kt 仍在 src/commonMain/kotlin。
        }
        androidMain.dependencies {
            // Android 专属依赖放这里。
        }
        iosMain.dependencies {
            // 两个 iOS 目标共享的依赖放这里。
        }
    }
}
```

在 IDE 执行 Gradle Sync，检查共享模块的 commonMain/androidMain/iosMain。不要将旧 com.android.library 插件同时应用到这个共享模块，也不添加手工 dependsOn 来修补错误配置。

## 3～5 分钟练习

指出 Android、iPhone 真机、Apple Silicon iOS 模拟器各对应哪个目标；说明为什么为下一课保留两个 iOS 目标，而不只留模拟器。

## 参考答案

```text
Android：新插件的 android { ... }
iPhone 真机：iosArm64()
Apple Silicon iOS 模拟器：iosSimulatorArm64()
两个 iOS 目标共享默认层级模板生成的 iosMain；下一课的 actual 声明放这里。
```

只有一个 iOS 目标时不要直接假定 iosMain 一定生成；本课程继续采用上面的双目标配置。同步成功不等于已经构建或运行 iOS 应用。

## 旧接口/仅用于存量迁移

旧组合 `com.android.library` 加 `androidTarget()` 不作为本课新工程主方案。Kotlin 官方记录过 2.3.0 的弃用警告及 2.3.10 的撤回，不能概括为所有版本都已移除；新项目仍按当前推荐使用专用插件。新插件的 `androidLibrary {}` 旧名称在 AGP 8.12+ 由 `android {}` 替代，且自 9.1.0-alpha09 标弃用。

当前 Compose Multiplatform 已移除 Apple x86_64 目标，因此本课主示例不再声明 iosX64。存量项目迁移需按原插件、资源与测试源码集逐项处理，不能只改一个函数名。

## 与上一课的联系

继承第 1 课 Greeting 与三个源码集的职责；本课只补齐目标和构建配置前提。下一课继续在 commonMain/androidMain/iosMain 放同名 expect/actual 函数，源码集名称与原路径保持一致。

## 时效校验

时效校验：2026-10-15（实际打开 Kotlin 当前兼容指南〔当前稳定版 2.4.21，表内仍列 Kotlin 2.3.10 的兼容范围〕、Compose Multiplatform 1.11.1 说明、Google Android-KMP 插件和 AGP 8.13 官方说明。教学组合 2.3.10/8.13.2/Gradle8.13/JDK17 在双方兼容范围内；新 android DSL 最低 AGP8.12，插件本身最低 AGP8.10/KGP2.0。本次未在本机编译该 KMP 工程。）

## 官方参考

- [Kotlin：Compatibility guide](https://kotlinlang.org/docs/multiplatform/multiplatform-compatibility-guide.html)
- [Android：Android-KMP library plugin](https://developer.android.com/kotlin/multiplatform/plugin)
- [Android：AGP 8.13 compatibility](https://developer.android.com/build/releases/past-releases/agp-8-13-0-release-notes)
- [Kotlin：Compose Multiplatform 1.11.1](https://kotlinlang.org/docs/multiplatform/whats-new-compose-111.html)
