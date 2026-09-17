# 第 13 课：repeatOnLifecycle按生命周期收集

- 日期：2026-09-17
- 课程序号：第 13 课
- 知识点：repeatOnLifecycle按生命周期收集

## 用途

按可见生命周期安全收集 ViewModel 的 StateFlow。

## 核心概念

repeatOnLifecycle 会在目标生命周期进入 STARTED 时启动收集，离开时取消子协程。

## 最小代码或操作示例

```text
lifecycleScope.launch {
  repeatOnLifecycle(Lifecycle.State.STARTED) {
    viewModel.running.collect { binding.runButton.isEnabled = !it }
  }
}
```

## 3～5 分钟练习

把目标状态改为 RESUMED。

## 参考答案

将 Lifecycle.State.STARTED 改为 Lifecycle.State.RESUMED。

## 与上一课的联系

继承上一课的只读 StateFlow；本课只增加生命周期感知收集；下一课可用状态更新按钮文字。

## 时效校验

时效校验：2026-09-17（AndroidX Lifecycle 当前文档；repeatOnLifecycle 需 lifecycle-runtime-ktx 2.4.0+）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [Android Developers：StateFlow and SharedFlow](https://developer.android.com/kotlin/flow/stateflow-and-sharedflow)
