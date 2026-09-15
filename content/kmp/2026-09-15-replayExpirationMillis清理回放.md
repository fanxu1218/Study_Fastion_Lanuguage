# 第 54 课：replayExpirationMillis清理回放

- 日期：2026-09-15
- 课程序号：第 54 课
- 知识点：WhileSubscribed 的 replayExpirationMillis

## 用途

订阅停止后按策略清除共享流的旧回放值。

## 核心概念

stopTimeoutMillis 控制何时停上游；replayExpirationMillis 控制停止后保留 replay 缓存多久。

## 最小代码或操作示例

```kotlin
val shared = source.shareIn(
  scope,
  SharingStarted.WhileSubscribed(
    stopTimeoutMillis = 0,
    replayExpirationMillis = 0
  ),
  replay = 1
)
```

## 3～5 分钟练习

把回放保留时间改为 5 秒。

## 参考答案

设置 `replayExpirationMillis = 5_000`。

## 与上一课的联系

继承上一课的重新订阅测试；本课只控制停止后的回放寿命；下一课可用虚拟时间验证清理边界。

## 时效校验

时效校验：2026-09-15（kotlinx.coroutines 1.10.2 当前 API）。已打开并核对下列官方文档；示例未使用已废弃接口。

## 官方参考

- [kotlinx.coroutines API：WhileSubscribed](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-sharing-started/-companion/-while-subscribed.html)
