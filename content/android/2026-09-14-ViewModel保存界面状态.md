# 第 10 课：ViewModel保存界面状态

- 日期：2026-09-14
- 课程序号：第 10 课
- 知识点：`ViewModel` 与配置变更

## 用途

在屏幕旋转等配置变更后保留页面的业务界面状态。

## 核心概念

`ViewModel` 的生命周期长于单个 Activity 实例；UI 观察它提供的状态，不复制业务事实。

## 最小代码或操作示例

```kotlin
class LessonViewModel : ViewModel() {
    var running by mutableStateOf(false)
        private set

    fun toggle() { running = !running }
}
```

## 3～5 分钟练习

增加 `reset()`，把 `running` 恢复为 `false`。

## 参考答案

`fun reset() { running = false }`。

## 与上一课的联系

上一课让按钮切换运行状态；本课把该状态移到配置变更可存活的所有者。
