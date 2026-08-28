# 第 10 课：用 Repository 组织共享数据层

- 日期：2026-07-26
- 课程序号：10
- 知识点：用 Repository 隔离网络 DTO 与业务模型

## 用途

页面如果直接调用 Ktor API，就会同时依赖网络地址、JSON 字段和业务规则。Repository 位于数据层，对上提供业务需要的数据，对下调用网络或数据库，使平台 UI 不必了解数据来源细节。

## 核心概念

- API/RemoteDataSource 负责请求与协议 DTO。
- Repository 负责选择数据源，并把 DTO 转换为业务模型。
- Domain Model 只表达应用真正需要的业务含义。
- UI 依赖 Repository 或更上层的用例，不直接解析 JSON。

## 示例代码

网络 DTO 与接口：

```kotlin
import kotlinx.serialization.Serializable

@Serializable
data class UserDto(
    val id: Long,
    val name: String,
    val active: Boolean,
)

interface UserApi {
    suspend fun getUser(id: Long): UserDto
}
```

业务模型不需要携带所有协议字段：

```kotlin
data class User(
    val id: Long,
    val displayName: String,
)
```

Repository 完成数据获取和映射：

```kotlin
class UserRepository(
    private val api: UserApi,
) {
    suspend fun loadUser(id: Long): User {
        val dto = api.getUser(id)

        return User(
            id = dto.id,
            displayName = dto.name,
        )
    }
}
```

这样，即使服务端字段或数据来源变化，也优先在数据层调整，业务层和 UI 继续使用稳定的 `User`。

## 5 分钟练习

给 `User` 增加 `isEnabled: Boolean`，并把 `UserDto.active` 映射到该字段。

## 参考答案

```kotlin
data class User(
    val id: Long,
    val displayName: String,
    val isEnabled: Boolean,
)

class UserRepository(
    private val api: UserApi,
) {
    suspend fun loadUser(id: Long): User {
        val dto = api.getUser(id)

        return User(
            id = dto.id,
            displayName = dto.name,
            isEnabled = dto.active,
        )
    }
}
```

字段含义的转换发生在 Repository，而不是让 Android、iOS 页面各自映射一次。

## 与上一课的联系

上一课用 Ktor 获取 `UserDto`；本课在其上增加 Repository，把网络协议模型转换成稳定的业务模型，形成“网络 → DTO → Repository → 业务对象”的数据链路。
