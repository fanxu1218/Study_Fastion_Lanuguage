# 第 22 课：在onDisable中取消调度

- 日期：2026-10-08
- 课程序号：第 22 课
- 知识点：`onDisable` 清理

## 用途或适用场景

组件停用时取消当前实例的回调，避免重新启用前继续计数。

## 核心概念

本课只增加“`onDisable` 清理”，继续沿用上一课的数据、对象和命名，不复制业务事实源。

## 最小代码或操作示例

```ts
protected onDisable(): void {
  this.unschedule(this.tick)
}
```

## 3～5 分钟练习

禁用一个节点，确认另一个实例仍计数。

## 参考答案

被禁用实例停止，另一实例不受影响。

## 与上一课的联系

第 21 课手动停止单个实例；本课只把清理接入 `onDisable`；下一课可在 `onEnable` 恢复。

## 时效校验

时效校验：2026-10-08（Cocos Creator 3.8；Scheduler 文档未见 `unschedule` 废弃。）

## 官方参考

- [官方文档](https://docs.cocos.com/creator/3.8/manual/en/scripting/scheduler.html)

