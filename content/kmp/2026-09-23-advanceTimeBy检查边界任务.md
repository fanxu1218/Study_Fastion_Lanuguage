# 第 60 课：advanceTimeBy 检查边界任务

- 日期：2026-09-23
- 课程序号：第 60 课
- 知识点：虚拟时间边界上的任务执行

## 用途或适用场景

测试延迟任务在指定毫秒到达前后是否执行。

## 核心概念

`advanceTimeBy(1_000)` 将虚拟时钟移到 1000 毫秒，但不运行恰好排在该时刻的任务；随后调用 `runCurrent()` 才执行该任务。

## 最小代码或操作示例

```kotlin
@OptIn(ExperimentalCoroutinesApi::class)
@Test
fun checksBoundary() = runTest {
  var done = false
  launch { delay(1_000); done = true }
  runCurrent()
  advanceTimeBy(1_000)
  assertFalse(done)
  assertEquals(1_000, currentTime)
  runCurrent()
  assertTrue(done)
}
```

## 3～5 分钟练习

把延迟改为 2_000 毫秒，并同步修改推进时间和时钟断言。

## 参考答案

将 `delay(1_000)`、`advanceTimeBy(1_000)` 和 `assertEquals(1_000, currentTime)` 中的数值都改为 `2_000`；边界前后两个 `done` 断言仍成立。

## 与上一课的联系

沿用第 59 课的 `runTest`、`done`、延迟任务、`runCurrent()` 和 `advanceTimeBy`；本课只检查推进到恰好 1000 毫秒时的任务边界；完成后下一课可比较边界前一毫秒与边界时刻。

## 时效校验

时效校验：2026-09-24（kotlinx-coroutines-test 1.11.0；官方 API 标记 `ExperimentalCoroutinesApi`，未标记废弃；示例显式 opt-in）。

## 官方参考

- [Kotlin API：TestScope.advanceTimeBy](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/advance-time-by.html)
