# 第 17 课：Inspector 标注调度间隔范围

- 日期：2026-09-23
- 课程序号：第 17 课
- 知识点：`@property` 的 `range` 元数据

## 用途或适用场景

让策划在 Inspector 中直接看到并调整建议的调度间隔范围。

## 核心概念

`range: [min, max, step]` 约束编辑器中的数值操作；运行时仍保留上一课的 `Math.max` 下限，避免由代码写入的非法值进入 `schedule`。

## 最小代码或操作示例

```ts
@property({ displayName: '调度间隔（秒）', range: [0.1, 10, 0.1] })
interval = 1

onEnable(): void {
  const seconds = Math.max(this.interval, 0.1)
  if (!this.isScheduled(this.tick)) this.schedule(this.tick, seconds)
}
```

## 3～5 分钟练习

在 Inspector 中将间隔调到 2 秒，并观察步长。

## 参考答案

属性按 0.1 秒步长调整；`schedule` 使用正数间隔，原有去重逻辑不变。

## 与上一课的联系

沿用第 16 课标明单位的 `interval`、第 15 课的 `Math.max`、`tick` 和 `isScheduled`；本课只新增 Inspector 的 `range` 元数据；下一课可为属性增加悬停说明。

## 时效校验

时效校验：2026-09-24（已打开 Cocos Creator 3.8 LTS Property Attributes 与 Scheduler 官方手册；`range`、`schedule` 未见废弃标记）。

## 官方参考

- [Cocos Creator 3.8：Property Attributes](https://docs.cocos.com/creator/3.8/manual/en/scripting/reference/attributes.html)
- [Cocos Creator 3.8：Scheduler](https://docs.cocos.com/creator/3.8/manual/en/scripting/scheduler.html)
