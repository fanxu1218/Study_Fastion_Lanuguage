# 第 50 课：subscriptionCount观察订阅者

- 日期：2026-09-09
- 课程序号：第 50 课
- 知识点：MutableSharedFlow.subscriptionCount

## 用途

观察共享流当前是否有活跃订阅者，为按需启动上游工作提供判断依据。

## 核心概念

`subscriptionCount` 是一个 `StateFlow<Int>`；数值随收集者进入和离开而变化，它描述订阅状态，不承载业务事件。

## 最小代码或操作示例

```kotlin
val events = MutableSharedFlow<String>()
val watching = events.subscriptionCount
println(watching.value)
```

## 3～5 分钟练习

在一个协程中收集 `events`，再读取 `watching.value`，预测取消协程前后的数值。

## 参考答案

收集开始后通常为 `1`，取消并完成该协程后回到 `0`。

## 与上一课的联系

上一课管理回放缓存中的旧事件；本课转向观察共享流当前的订阅生命周期。

## 参考资料

- [Kotlin 官方 API：subscriptionCount](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-mutable-shared-flow/subscription-count.html)（2026-09-09 核对）。
