# 第 17 课：旋转屏幕后保持 ViewModel 状态

- 日期：2026-09-23
- 课程序号：第 17 课
- 知识点：ViewModel 跨配置变更保留状态

## 用途或适用场景

验证上一课点击按钮改变的 `running` 状态在屏幕旋转后仍被界面正确显示。

## 核心概念

Activity 因旋转重建时，同一作用域的 ViewModel 可保留状态；新的界面通过现有 `repeatOnLifecycle` 重新收集 `StateFlow`。这不等于进程终止后的持久化。

## 最小操作示例

```text
1. 运行第 16 课页面，点击按钮让 running 变为 true，确认按钮文字为“停止”。
2. 旋转设备使 Activity 重建，不在 onCreate 中手动重置 ViewModel 状态。
3. 观察重建后的按钮文字仍为“停止”，再点击一次使其变为“开始”。
```

## 3～5 分钟练习

在 `running` 为 false 时再旋转一次，比较按钮文字。

## 参考答案

重建后仍显示“开始”；按钮文字来自 ViewModel 当前 `StateFlow`，不是旧 Activity 的 View 状态。

## 与上一课的联系

沿用第 16 课的 `toggle()`、`StateFlow` 和按钮文字映射；本课只新增旋转场景下验证状态归属；完成后下一课可区分配置变更与系统进程终止时的状态恢复。

## 时效校验

时效校验：2026-09-24（Android Developers 当前 ViewModel overview；已核对配置变更期间的状态保留及进程终止边界）。

## 官方参考

- [Android Developers：ViewModel overview](https://developer.android.com/topic/libraries/architecture/viewmodel)
