# 第 7 课：Coroutine等待后恢复状态

- 日期：2026-09-09
- 课程序号：第 7 课
- 知识点：协程与 WaitForSeconds

## 用途

按键触发动作后等待一段时间，再恢复可操作状态。

## 核心概念

协程可在 `yield` 处暂停并在后续帧继续，不会阻塞 Unity 主循环。

## 最小代码或操作示例

```csharp
IEnumerator Cooldown()
{
    enabled = false;
    yield return new WaitForSeconds(1f);
    enabled = true;
}
```

## 3～5 分钟练习

在空格键按下时调用 `StartCoroutine(Cooldown())`，把等待改成 2 秒。

## 参考答案

按键分支调用协程后，该组件暂停更新约 2 秒再恢复。

## 与上一课的联系

上一课捕获单次按键；本课让这次触发产生跨越多个帧的延迟流程。
