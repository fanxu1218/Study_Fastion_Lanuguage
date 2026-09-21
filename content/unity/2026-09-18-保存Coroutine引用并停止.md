# 第 14 课：保存Coroutine引用并停止

- 日期：2026-09-18
- 课程序号：第 14 课
- 知识点：保存Coroutine引用并停止

## 用途或适用场景

在动态等待循环不再需要时停止指定协程。

## 核心概念

StartCoroutine 返回 Coroutine；保存引用后可停止这一实例，并在停止后清空引用。

## 最小代码或操作示例

```text
Coroutine running;
void Begin() { running = StartCoroutine(Practice()); }
void Stop() {
    if (running == null) return;
    StopCoroutine(running);
    running = null;
}
```

## 3～5 分钟练习

在 OnDisable 中调用 Stop。

## 参考答案

添加 `void OnDisable() { Stop(); }`。

## 与上一课的联系

继承上一课循环中的动态等待；本课只保存并停止该 Coroutine；完成后下一课可防止重复启动。

## 时效校验

时效校验：2026-09-21（Unity 6.3 LTS 当前 API；保留原课程日期与序号，已重新核对本课用法，未见废弃标记）。

## 官方参考

- [Unity Scripting API：StopCoroutine](https://docs.unity3d.com/ScriptReference/MonoBehaviour.StopCoroutine.html)
