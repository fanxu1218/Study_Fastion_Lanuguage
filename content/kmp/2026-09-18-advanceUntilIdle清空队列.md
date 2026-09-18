# 第 57 课：advanceUntilIdle清空队列

- 日期：2026-09-18
- 课程序号：第 57 课
- 知识点：advanceUntilIdle清空队列

## 用途或适用场景

在协程测试中推进虚拟时间，直到没有待执行任务。

## 核心概念

advanceUntilIdle 会运行当前调度器中所有任务并推进时间；它适合最终状态断言，不用于检查中间边界。

## 最小代码或操作示例

```text
runTest {
  var done = false
  launch { delay(1_000); done = true }
  advanceUntilIdle()
  assertTrue(done)
}
```

## 3～5 分钟练习

断言 currentTime 为 1000。

## 参考答案

在最后加入 `assertEquals(1_000, currentTime)`。

## 与上一课的联系

继承上一课 runCurrent 只执行到期任务；本课只推进并清空剩余队列；完成后下一课可比较两者的中间状态用途。

## 时效校验

时效校验：2026-09-18（kotlinx-coroutines-test 1.11.0 当前 API；advanceUntilIdle 标注 ExperimentalCoroutinesApi，未标注废弃）。已实际打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [Kotlin API：advanceUntilIdle](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/advance-until-idle.html)
