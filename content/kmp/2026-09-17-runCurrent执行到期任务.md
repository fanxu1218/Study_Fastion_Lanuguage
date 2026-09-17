# 第 56 课：runCurrent执行到期任务
- 日期：2026-09-17
- 课程序号：第 56 课
- 知识点：runCurrent执行到期任务

## 用途

只执行当前虚拟时间点已排队的协程任务。

## 核心概念

runCurrent 不推进虚拟时钟，只运行当前时间可执行的任务；当前 API 标注为 ExperimentalCoroutinesApi，测试代码需按项目约定选择显式 opt-in。

## 最小代码或操作示例

```text
@OptIn(ExperimentalCoroutinesApi::class)
@Test
fun runsDueTasks() =
runTest {
  launch { delay(1000); println("done") }
  advanceTimeBy(1000)
  runCurrent()
}
```

## 3～5 分钟练习

删除 runCurrent 并观察任务是否已完成。

## 参考答案

advanceTimeBy 只推进到目标时间；runCurrent 用于执行该时刻到期任务。

## 与上一课的联系

继承上一课的 advanceTimeBy；本课只增加 runCurrent；下一课可用 advanceUntilIdle 清空队列。

## 时效校验

时效校验：2026-09-17（kotlinx-coroutines-test 1.11.0 当前 API；runCurrent 标注为 ExperimentalCoroutinesApi，未标注废弃）。已打开并核对下列官方资料。

## 官方参考

- [Kotlin API：runCurrent](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/run-current.html)
