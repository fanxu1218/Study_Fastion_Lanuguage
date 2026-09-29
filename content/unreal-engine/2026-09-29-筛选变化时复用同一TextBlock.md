# 第 20 课：筛选变化时复用同一TextBlock

- 日期：2026-09-29
- 课程序号：第 20 课
- 知识点：保存控件引用并调用 `SetText`

## 用途或适用场景

更新同一个 UMG 文本控件而不重复创建 Widget。

## 核心概念

本课沿用上一课的示例与命名，只增加“保存控件引用并调用 `SetText`”这一项；先保留既有结果，再观察新增步骤带来的变化。

## 最小代码或操作示例

```text
在 OnValueChanged 中重新计算 Length，再对已有 CountText 调用 SetText；不要 Create Widget。
```

## 3～5 分钟练习

照着示例完成一次，再替换一个输入值或操作对象，确认新增步骤仍然只影响预期结果。

## 参考答案

能复用上一课产出完成示例，并得到与“更新同一个 UMG 文本控件而不重复创建 Widget。”一致的结果；其余既有状态保持不变。

## 与上一课的联系

继承第 19 课“在 UMG 文字中显示筛选数量”的同一数据、对象与操作路径；本课只新增保存控件引用并调用 `SetText`；完成后下一课可在此结果上补充边界或发布前验证。

## 时效校验

时效校验：2026-09-29（已打开并核对官方当前文档；适用版本：Unreal Engine 5.8；未见本课用法的废弃标记）。

## 官方参考

- [官方文档](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/UMG/UTextBlock/SetText)
