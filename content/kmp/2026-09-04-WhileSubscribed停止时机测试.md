# 第 47 课：WhileSubscribed停止时机测试

- 日期：2026-09-04
- 课程序号：第 47 课
- 知识点：虚拟时间与上游取消

## 用途

验证最后一个订阅者离开后，上游是否按设定超时停止。

## 核心概念

stopTimeoutMillis 延迟停止上游，不是延迟发值；runCurrent 执行当前时刻任务。backgroundScope 在测试结束时自动取消，避免共享任务悬挂。

## 最小代码或操作示例

```kotlin
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.awaitCancellation
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch
import kotlinx.coroutines.test.*

@OptIn(ExperimentalCoroutinesApi::class)
class SharingStopTest {
    @Test
    fun stopsAfterLastSubscriberTimeout() = runTest {
        var active = false
        val shared = flow<Int> {
            active = true
            try { emit(1); awaitCancellation() }
            finally { active = false }
        }.shareIn(backgroundScope, SharingStarted.WhileSubscribed(1000), replay = 1)
        val subscriber = launch { shared.collect { } }
        runCurrent()
        assertTrue(active)
        subscriber.cancel()
        runCurrent()
        advanceTimeBy(999)
        runCurrent()
        assertTrue(active)
        advanceTimeBy(1)
        runCurrent()
        assertFalse(active)
    }
}
```

## 3～5 分钟练习

放入沿用上一课协程测试依赖的 commonTest。将超时改成 0，把取消后的期望改为立即停止。

## 参考答案

subscriber.cancel() 后调用 runCurrent()，此时应 assertFalse(active)。删除原先等待 999 毫秒后仍 active 的断言；runCurrent 不代表等待现实时间。

## 与上一课的联系

上一课确保订阅先建立，本课继续控制测试调度，观察订阅结束后的上游生命周期。

## 参考资料

- [官方文档：WhileSubscribed停止时机测试](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-sharing-started/-companion/-while-subscribed.html)（2026-09-04 核对；以文档标注版本及本机界面为准）。
