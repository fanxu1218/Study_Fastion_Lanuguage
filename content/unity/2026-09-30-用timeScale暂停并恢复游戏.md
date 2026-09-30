# 第 21 课：用timeScale暂停并恢复游戏

- 日期：2026-09-30
- 课程序号：第 21 课
- 知识点：`Time.timeScale`

## 用途或适用场景

把上一课的暂停菜单入口连接到全局游戏时间缩放。

## 核心概念

设为 0 暂停依赖缩放时间的更新，设回 1 恢复；真实时间协程仍按上一课选择独立时钟。

## 最小代码或操作示例

```csharp
public void PauseGame() => Time.timeScale = 0f;
public void ResumeGame() => Time.timeScale = 1f;
```

## 3～5 分钟练习

暂停后等待两秒再恢复，观察真实时间提示与游戏对象。

## 参考答案

游戏对象暂停；使用 `WaitForSecondsRealtime` 的提示仍可完成，恢复后对象继续更新。

## 与上一课的联系

第 20 课给暂停菜单提供真实时间入口；本课只连接暂停与恢复动作；下一课可在禁用对象时保证恢复 timeScale。

## 时效校验

时效校验：2026-09-30（Unity 6.6；`Time.timeScale` 当前脚本 API 未见废弃标记。）

## 官方参考

- [官方文档](https://docs.unity3d.com/ScriptReference/Time-timeScale.html)

