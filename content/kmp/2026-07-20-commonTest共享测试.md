# 第 4 课：用 commonTest 测试共享逻辑

- 日期：2026-07-20
- 课程序号：04
- 知识点：使用 `kotlin.test` 为 `commonMain` 编写跨平台测试

## 用途

共享代码会同时影响 Android 和 iOS，因此越接近业务核心，越应该先用测试固定行为。写在 `commonTest` 的测试可以随不同平台目标执行，避免为同一条业务规则重复写多套测试。

## 核心概念

- 被测试的纯 Kotlin 业务逻辑放在 `commonMain`。
- 对应测试放在 `commonTest`。
- 使用 `kotlin.test.Test`、`assertEquals` 等跨平台测试 API。
- `commonTest` 不应直接依赖 Android SDK 或 iOS API。

## 示例代码

`commonMain/DiscountCalculator.kt`：

```kotlin
class DiscountCalculator {
    fun calculate(price: Double, rate: Double): Double {
        return price * rate
    }
}
```

`commonTest/DiscountCalculatorTest.kt`：

```kotlin
import kotlin.test.Test
import kotlin.test.assertEquals

class DiscountCalculatorTest {
    @Test
    fun calculatesDiscountedPrice() {
        val calculator = DiscountCalculator()

        val result = calculator.calculate(price = 100.0, rate = 0.8)

        assertEquals(expected = 80.0, actual = result)
    }
}
```

如果项目模板没有自动添加测试依赖，可在共享模块中声明：

```kotlin
kotlin {
    sourceSets {
        commonTest.dependencies {
            implementation(kotlin("test"))
        }
    }
}
```

## 5 分钟练习

为 `DiscountCalculator` 增加一个“原价为 `0.0` 时结果仍为 `0.0`”的测试方法。

## 参考答案

```kotlin
@Test
fun returnsZeroWhenPriceIsZero() {
    val calculator = DiscountCalculator()

    val result = calculator.calculate(price = 0.0, rate = 0.8)

    assertEquals(expected = 0.0, actual = result)
}
```

这个测试只验证当前方法已有的计算语义，没有额外引入参数校验规则。

## 与上一课的联系

上一课用 `expect/actual` 隔离平台差异；本课回到最适合共享的纯业务逻辑，并用 `commonTest` 保证它在各个平台上的计算结果一致。
