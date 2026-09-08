# 第 49 课：resetReplayCache清空事件缓存

- 日期：2026-09-08
- 课程序号：第 49 课
- 知识点：MutableSharedFlow.resetReplayCache

## 用途

在一次性事件已被处理后清空旧缓存，避免后续订阅者再次收到它。

## 核心概念

`resetReplayCache()` 只清除后续订阅者可见的回放缓存；已经订阅的收集者不会因此收到额外值。

## 最小代码或操作示例

```kotlin
val events = MutableSharedFlow<String>(replay = 1)
events.emit("保存成功")
events.resetReplayCache()
println(events.replayCache)
```

## 3～5 分钟练习

先打印清空前的 `replayCache`，再清空并打印，预测两次结果。

## 参考答案

清空前是 `[保存成功]`，清空后是空列表 `[]`。

## 与上一课的联系

上一课验证了 `replay` 会把最近值交给新订阅者；本课学习在事件已失效时主动清除这份缓存。

## 参考资料

- [Kotlin 官方 API：resetReplayCache](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-mutable-shared-flow/reset-replay-cache.html)（2026-09-08 核对）。
