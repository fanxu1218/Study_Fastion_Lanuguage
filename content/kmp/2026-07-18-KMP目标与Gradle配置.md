# 第 2 课：KMP 目标与 Gradle 配置

- 日期：2026-07-18
- 课程序号：02
- 知识点：在 `build.gradle.kts` 中声明编译目标和源码集

## 用途

KMP 不会自动决定要支持哪些平台。我们需要在共享模块的 Gradle 配置中声明 Android、iOS 等目标，Gradle 才知道同一份共享代码要编译成哪些平台产物。

## 核心概念

- **Target（目标）**：代码最终运行的平台，例如 Android、iOS 模拟器或 iOS 真机。
- **Source set（源码集）**：代码所属的逻辑分组，例如 `commonMain`、`androidMain`、`iosMain`。
- 一个源码集可以被多个目标复用。例如 `iosMain` 可同时服务 iOS 真机和模拟器目标。

## 示例代码

共享模块的 `build.gradle.kts` 可以这样声明目标：

```kotlin
kotlin {
    androidTarget()

    iosX64()
    iosArm64()
    iosSimulatorArm64()

    sourceSets {
        commonMain.dependencies {
            // 在这里添加所有平台共享的依赖
        }

        androidMain.dependencies {
            // 在这里添加 Android 专属依赖
        }

        iosMain.dependencies {
            // 在这里添加 iOS 专属依赖
        }
    }
}
```

其中：

- `androidTarget()` 生成 Android 可使用的产物。
- `iosArm64()` 面向 iPhone 真机。
- `iosSimulatorArm64()` 面向 Apple Silicon Mac 上的 iOS 模拟器。
- `iosX64()` 面向 Intel Mac 上的 iOS 模拟器。

## 5 分钟练习

假设一个 KMP 项目只需要支持 Android 和 Apple Silicon Mac 上的 iOS 模拟器，请写出 `kotlin {}` 中最少需要声明的两个目标。

## 参考答案

```kotlin
kotlin {
    androidTarget()
    iosSimulatorArm64()
}
```

实际发布 iOS 应用时通常还需要 `iosArm64()`，否则无法为 iPhone 真机生成产物。

## 与上一课的联系

上一课认识了 `commonMain`、`androidMain` 和 `iosMain`；本课进一步说明是谁创建并组织这些源码集，以及共享代码最终会被编译到哪些平台。
