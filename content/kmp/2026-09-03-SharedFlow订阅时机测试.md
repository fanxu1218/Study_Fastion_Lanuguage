# 第 46 课：SharedFlow订阅时机测试

- 日期：2026-09-03
- 课程序号：第 46 课
- 知识点：runTest、runCurrent 与无重放事件

## 用途

用确定的调度步骤验证晚订阅者不会收到 replay=0 的历史事件。

## 核心概念

- 默认 MutableSharedFlow 没有重放缓存，无订阅者时发出的值不会为未来订阅者保存。
- runTest 中 launch 默认不会立刻执行；runCurrent 先运行当前时刻的待执行任务，让订阅建立。
- 用有限的 take(1) 结束收集，避免测试永远等待热流完成。

## 最小代码或操作示例

```kotlin
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.take
import kotlinx.coroutines.flow.toList
import kotlinx.coroutines.launch
import kotlinx.coroutines.test.runCurrent
import kotlinx.coroutines.test.runTest

@OptIn(ExperimentalCoroutinesApi::class)
class EventTimingTest {
    @Test
    fun lateSubscriberMissesOldEvent() = runTest {
        val events = MutableSharedFlow<String>(replay = 0)
        events.emit("old")
        val received = mutableListOf<String>()
        val job = launch { events.take(1).toList(received) }
        runCurrent()
        events.emit("new")
        job.join()
        assertEquals(listOf("new"), received)
    }
}
```

## 3～5 分钟练习

在 commonTest 中沿用 kotlin.test 与 kotlinx-coroutines-test 依赖（协程依赖版本保持一致）。将 replay 改为 1，重新运行并解释结果；随后改正断言。

## 参考答案

```kotlin
// replay=1 时，runCurrent 会使订阅者收到 old，take(1) 随即结束。
// 后发的 new 不再由这个已完成的订阅者收集。
assertEquals(listOf("old"), received)
```

## 与上一课的联系

上一课区分状态和事件语义；本课用可重复测试把“无订阅时丢弃”和“重放历史”变成可观察证据。

## 参考资料

- [官方文档：SharedFlow订阅时机测试](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-shared-flow/)（2026-09-03 核对；以文档标注版本及本机界面为准）。
- [补充官方参考](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/run-current.html)。
