# 第 8 课：停止Coroutine

- 日期：2026-09-10
- 课程序号：第 8 课
- 知识点：Coroutine 引用与 StopCoroutine

## 用途

状态提前变化时取消未完成的等待流程。

## 核心概念

保存协程引用，停止后清空，避免误用已结束任务。

## 最小代码或操作示例

```csharp
private Coroutine pending;
pending = StartCoroutine(RestoreLater());
if (pending != null) {
    StopCoroutine(pending);
    pending = null;
}
```

## 3～5 分钟练习

启动两秒恢复协程并在一秒时停止。

## 参考答案

停止后恢复语句不会执行。

## 与上一课的联系

上一课等待后恢复；本课在不再需要时取消。
