# 第 44 课：shareIn 共享上游 Flow

- 日期：2026-09-01
- 课程序号：第 44 课
- 知识点：用 `shareIn` 让多个订阅者共享同一次上游收集

## 用途

多个观察者订阅昂贵的冷 Flow 时，可共享一次网络监听或数据源收集。

## 核心概念

- 冷 Flow 的每个收集者通常会独立执行上游。
- `shareIn(scope, started, replay)` 将它转为热 `SharedFlow`。
- `WhileSubscribed()` 仅在存在订阅者时维持上游；`replay` 决定新订阅者收到几个旧值。

## 最小代码示例

```kotlin
fun sharedPrices(prices: Flow<Double>, scope: CoroutineScope): SharedFlow<Double> =
    prices.shareIn(scope, SharingStarted.WhileSubscribed(), replay = 1)
```

## 3～5 分钟练习

把 `events: Flow<String>` 转成不重放旧事件的共享流。

## 参考答案

```kotlin
val sharedEvents = events.shareIn(viewModelScope, SharingStarted.WhileSubscribed(), replay = 0)
```

## 与上一课的联系

上一课用 `launchIn` 在指定作用域启动一次收集；本课在明确生命周期内把一次上游收集分享给多个订阅者。

## 参考资料

- [Kotlin 官方 API：shareIn](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/share-in.html)
