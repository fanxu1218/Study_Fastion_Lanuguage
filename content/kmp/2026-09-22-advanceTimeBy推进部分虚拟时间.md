# 第 59 课：advanceTimeBy 推进部分虚拟时间

- 日期：2026-09-22
- 课程序号：第 59 课
- 知识点：`TestScope.advanceTimeBy`

## 用途或适用场景

不清空所有任务，只观察延迟任务到期前的中间状态。

## 核心概念

`advanceTimeBy(500)` 将测试时钟推进 500 毫秒，并运行这段时间内已到期的任务；1000 毫秒的任务此时尚未执行。

## 最小代码或操作示例

```kotlin
@OptIn(ExperimentalCoroutinesApi::class)
@Test
fun checksBeforeDeadline() = runTest {
    var done = false
    launch { delay(1_000); done = true }
    runCurrent()
    advanceTimeBy(500)
    assertFalse(done)
    assertEquals(500, currentTime)
}
```

在 `commonTest` 使用 `kotlinx-coroutines-test` 1.11.0，并导入 `runTest`、`runCurrent`、`advanceTimeBy`、`delay`、`launch`、`ExperimentalCoroutinesApi` 与 `kotlin.test` 断言和 `Test`。

## 3～5 分钟练习

把推进量改为 900 毫秒，检查状态和时钟。

## 参考答案

`done` 仍为 `false`，`currentTime` 为 900。

## 与上一课的联系

沿用第 58 课的 `runTest`、`done`、1000 毫秒延迟和 `runCurrent()`；本课只改用 `advanceTimeBy` 推进一段指定时间；完成后下一课可检查恰好推进到边界时任务是否已执行。

## 时效校验

时效校验：2026-09-24（kotlinx-coroutines-test 1.11.0 官方 API；`advanceTimeBy` 标注 `ExperimentalCoroutinesApi`，示例显式 opt-in，未标注废弃）。

## 官方参考

- [Kotlin API：TestScope.advanceTimeBy](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/advance-time-by.html)
- [Kotlin API：runCurrent](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/run-current.html)
