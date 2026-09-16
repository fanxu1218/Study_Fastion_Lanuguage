# 第 12 课：StateFlow暴露可观察状态

- 日期：2026-09-16
- 课程序号：第 12 课
- 知识点：StateFlow暴露可观察状态

## 用途

用 StateFlow 把可恢复状态作为只读流提供给界面。

## 核心概念

MutableStateFlow 由 ViewModel 私有持有，外部只读取 StateFlow。

## 最小代码或操作示例

```text
private val _running = MutableStateFlow(state["running"] ?: false)
val running: StateFlow<Boolean> = _running
```

## 3～5 分钟练习

把 toggle 改为更新 _running.value。

## 参考答案

fun toggle() { _running.value = !_running.value }

## 与上一课的联系

继承上一课的 SavedStateHandle；本课只增加可观察的只读状态；下一课可按生命周期收集它。

## 时效校验

时效校验：2026-09-16（AndroidX Lifecycle 当前文档，repeatOnLifecycle 需 lifecycle-runtime-ktx 2.4.0+）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [Android Developers：StateFlow and SharedFlow](https://developer.android.com/kotlin/flow/stateflow-and-sharedflow)
