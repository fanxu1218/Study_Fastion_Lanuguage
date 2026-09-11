# 第 9 课：OnDisable清理Coroutine

- 日期：2026-09-11
- 课程序号：第 9 课
- 知识点：生命周期清理

## 用途

组件停用时自动取消仍在等待的协程。

## 核心概念

`OnDisable` 是清理边界；停止后清空引用，保持状态可观察。

## 最小代码或操作示例

```csharp
private void OnDisable() {
    if (pending != null) {
        StopCoroutine(pending);
        pending = null;
    }
}
```

## 3～5 分钟练习

启用后启动协程，等待中禁用对象。

## 参考答案

对象禁用后协程的恢复语句不再执行。

## 与上一课的联系

上一课手动停止协程；本课把停止放进生命周期边界。
