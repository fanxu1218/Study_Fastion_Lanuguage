# 第 8 课：Kotlin Serialization 共享序列化

- 日期：2026-07-24
- 课程序号：08
- 知识点：在 `commonMain` 中把 JSON 转换为 Kotlin 数据类

## 用途

Android 和 iOS 调用同一个接口时，可以在共享层完成 JSON 解析，得到统一的 Kotlin 数据模型。这样两端不必各自维护一套字段映射规则。

## 核心概念

- `@Serializable` 告诉编译器为数据类生成序列化代码。
- `Json.decodeFromString<T>()` 把 JSON 文本解析为类型 `T`。
- `Json.encodeToString()` 把对象转换成 JSON 文本。
- 数据类字段名和类型必须与接口协议匹配；协议不一致应在解析或数据层解决，而不是由 UI 猜测字段。

## 示例代码

在共享模块启用序列化插件并加入 JSON 依赖，版本继续由项目的版本目录统一管理：

```kotlin
plugins {
    alias(libs.plugins.kotlin.serialization)
}

kotlin {
    sourceSets {
        commonMain.dependencies {
            implementation(libs.kotlinx.serialization.json)
        }
    }
}
```

`commonMain/UserDto.kt`：

```kotlin
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

@Serializable
data class UserDto(
    val id: Long,
    val name: String,
)

fun parseUser(jsonText: String): UserDto {
    return Json.decodeFromString<UserDto>(jsonText)
}
```

调用示例：

```kotlin
val jsonText = """{"id":1,"name":"KMP Learner"}"""
val user = parseUser(jsonText)

println(user.name)
```

输出：

```text
KMP Learner
```

## 5 分钟练习

给 `UserDto` 增加布尔字段 `active`，并解析下面的 JSON：

```json
{"id":2,"name":"Ada","active":true}
```

## 参考答案

```kotlin
@Serializable
data class UserDto(
    val id: Long,
    val name: String,
    val active: Boolean,
)

val jsonText = """{"id":2,"name":"Ada","active":true}"""
val user = Json.decodeFromString<UserDto>(jsonText)
println(user.active)
```

输出为 `true`。如果 JSON 缺少必填的 `active` 字段，默认严格解析会失败；是否允许缺失必须由真实接口协议决定。

## 与上一课的联系

上一课用 `StateFlow` 向 UI 暴露共享状态；本课学习把接口返回的 JSON 转成共享数据对象。后续可以把解析结果写入状态流，形成“数据源 → 共享状态 → UI”的完整链路。
