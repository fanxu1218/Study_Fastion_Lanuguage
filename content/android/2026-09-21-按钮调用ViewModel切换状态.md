# 第 15 课：按钮调用ViewModel切换状态

- 日期：2026-09-21
- 课程序号：第 15 课
- 知识点：按钮调用ViewModel切换状态

## 用途或适用场景

点击按钮时更新已有 StateFlow 的单一事实源。

## 核心概念

监听器只调用 `ViewModel.toggle()`；上一课的收集器负责更新文字。

## 最小代码或操作示例

```text
binding.toggleButton.setOnClickListener { viewModel.toggle() }
```

## 3～5 分钟练习

连续点击两次，观察文字。

## 参考答案

running 依次切换，文字由 StateFlow 收集结果更新。

## 与上一课的联系

沿用第 14 课收集 `viewModel.running` 并更新 `toggleButton` 文字的代码；本课只新增点击时调用 `viewModel.toggle()`；完成练习后下一课可由同一状态同步按钮可用性。

## 时效校验

时效校验：2026-09-21（Android 17 / SDK API 37 的 Views Button 文档与 AndroidX Lifecycle 当前文档；`View.setOnClickListener` 自 API 1 可用，相邻课使用的 `repeatOnLifecycle` 需 2.4.0+；未见废弃标记）。

## 官方参考

- [Android Developers：Add buttons to your app](https://developer.android.com/develop/ui/views/components/button)
- [Android Developers：StateFlow and SharedFlow](https://developer.android.com/kotlin/flow/stateflow-and-sharedflow)
- [Android Developers：Set up the Android 17 SDK](https://developer.android.com/about/versions/17/setup-sdk)
