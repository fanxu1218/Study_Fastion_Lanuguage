# 第 16 课：在 Inspector 标明调度间隔单位

- 日期：2026-09-22
- 课程序号：第 16 课
- 知识点：`@property` 的 `displayName`

## 用途或适用场景

让策划知道上一课的 `interval` 输入单位是秒，避免误填毫秒。

## 核心概念

`displayName` 只改变 Inspector 中的显示名，不改脚本字段名、调度值或运行时下限。

## 最小代码或操作示例

```ts
@property({ displayName: '调度间隔（秒）' })
interval = 1
```

保留第 15 课 `onEnable()` 中的 `Math.max(this.interval, 0.1)` 和调度去重代码。

## 3～5 分钟练习

在 Inspector 中找到该字段，把它改为 2，观察调度频率。

## 参考答案

Inspector 显示“调度间隔（秒）”；脚本仍以 `this.interval` 读取 2 秒。

## 与上一课的联系

继承第 15 课的 `interval`、`tick` 与 `onEnable()`；本课只新增字段显示名；下一课在同一装饰器中增加 `range`。

## 时效校验

时效校验：2026-09-24（已打开 Cocos Creator 3.8 LTS Property Attributes 官方手册，确认 `displayName`；未见废弃标记）。

## 官方参考

- [Cocos Creator：Property Attributes](https://docs.cocos.com/creator/3.8/manual/en/scripting/reference/attributes.html)
