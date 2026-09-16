# 第 12 课：WaitForSeconds动态等待

- 日期：2026-09-16
- 课程序号：第 12 课
- 知识点：WaitForSeconds动态等待

## 用途

用协程按运行时参数等待不同时间。

## 核心概念

WaitForSeconds 按缩放时间暂停协程；动态时长比 InvokeRepeating 更适合逐次变化。

## 最小代码或操作示例

```text
IEnumerator Tick(float delay)
{
    yield return new WaitForSeconds(delay);
    Debug.Log("练习");
}
```

## 3～5 分钟练习

把 delay 改为 2 秒并启动协程。

## 参考答案

StartCoroutine(Tick(2f));

## 与上一课的联系

继承上一课的固定间隔调用；本课只比较可参数化等待；下一课可在循环中改变时长。

## 时效校验

时效校验：2026-09-16（Unity 6.3 LTS 当前 API）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [Unity Scripting API：WaitForSeconds](https://docs.unity3d.com/ScriptReference/WaitForSeconds.html)
