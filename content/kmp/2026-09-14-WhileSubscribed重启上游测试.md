# 第 53 课：WhileSubscribed重启上游测试

- 日期：2026-09-14
- 课程序号：第 53 课
- 知识点：订阅恢复与上游重启契约

## 用途

验证最后一个订阅者离开后，再次订阅会按策略重新启动上游。

## 核心概念

`SharingStarted.WhileSubscribed(0)` 在无订阅者时停止上游；新订阅者应触发新一次收集。

## 最小代码或操作示例

```kotlin
var starts = 0
val source = flow {
  starts += 1
  emit(starts)
}
val shared = source.shareIn(scope, SharingStarted.WhileSubscribed(0), 0)
shared.first()
shared.first()
assertEquals(2, starts)
```

## 3～5 分钟练习

把 `replay` 改为 1，预测第二次 `first()` 对启动次数的影响。

## 参考答案

第二次可能先收到回放值而不等待新上游值；测试应同时观察值与启动计数。

## 与上一课的联系

上一课去重启停命令；本课从外部订阅行为验证上游确实能重新启动。

