# 第 11 课：InvokeRepeating重复调用

- 日期：2026-09-15
- 课程序号：第 11 课
- 知识点：InvokeRepeating 与 CancelInvoke

## 用途

按固定间隔执行简单无参数方法，并在停用时取消。

## 核心概念

InvokeRepeating 先等待 time，再按 repeatRate 调用；取消应明确匹配方法名。

## 最小代码或操作示例

```csharp
void OnEnable()
{
    InvokeRepeating(nameof(Tick), 1f, 1f);
}
void Tick() { Debug.Log("练习"); }
void OnDisable() { CancelInvoke(nameof(Tick)); }
```

## 3～5 分钟练习

把首次调用延迟改为 2 秒、间隔改为 3 秒。

## 参考答案

InvokeRepeating(nameof(Tick), 2f, 3f);

## 与上一课的联系

继承上一课的 Invoke 与 CancelInvoke；本课只增加固定间隔重复；下一课可比较协程的动态等待。

## 时效校验

时效校验：2026-09-15（Unity 6.3 LTS 当前 API）。已打开并核对下列官方文档；示例未使用已废弃接口。

## 官方参考

- [Unity Scripting API：MonoBehaviour.InvokeRepeating](https://docs.unity3d.com/ScriptReference/MonoBehaviour.InvokeRepeating.html)
