# 第 58 课：对比runCurrent与advanceUntilIdle

- 日期：2026-09-21
- 课程序号：第 58 课
- 知识点：对比runCurrent与advanceUntilIdle

## 用途或适用场景

观察延迟任务在两个测试调度步骤后的状态。

## 核心概念

runCurrent 只执行当前已到期任务；advanceUntilIdle 继续推进虚拟时间直到空闲。

## 最小代码或操作示例

```text
@OptIn(ExperimentalCoroutinesApi::class)
@Test
fun comparesSchedulerSteps() = runTest {
  var done = false
  launch { delay(1_000); done = true }
  runCurrent()
  assertFalse(done)
  advanceUntilIdle()
  assertTrue(done)
}
```

## 3～5 分钟练习

把 delay 改为 2_000 再运行。

## 参考答案

两个断言仍通过，因为第二步会推进虚拟时间。

## 与上一课的联系

沿用第 57 课的 `runTest`、延迟任务与 `advanceUntilIdle()`；本课只在其前增加 `runCurrent()` 和中间状态断言；完成练习后下一课可用 `advanceTimeBy` 检查指定虚拟时刻。

## 时效校验

时效校验：2026-09-21（当前 Kotlin 2.4.20、kotlinx-coroutines-test 1.11.0；`runCurrent` 与 `advanceUntilIdle` 均标注 `ExperimentalCoroutinesApi`，未标注废弃，示例已显式 opt-in）。

## 官方参考

- [Kotlin API：runCurrent](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/run-current.html)
- [Kotlin API：advanceUntilIdle](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/advance-until-idle.html)
- [Kotlin Docs：Releases](https://kotlinlang.org/docs/releases.html)
