# 第 11 课：同一回调避免重复调度

- 日期：2026-09-15
- 课程序号：第 11 课
- 知识点：`schedule` 对同一回调的重复注册

## 用途

重复启动同一组件的计时任务时，避免叠加回调。

## 核心概念

组件的 `schedule` 对同一个回调再次调用时更新间隔，不叠加一份相同回调；仍需保存回调引用，以便用 `unschedule` 清理。

## 最小代码或操作示例

```ts
private tick = (): void => console.log("练习")

start(): void {
  this.schedule(this.tick, 1)
}
```

## 3～5 分钟练习

连续调用两次 `start()`，观察控制台一秒内的输出次数。

## 参考答案

仍约每秒输出一次：第二次 `schedule(this.tick, 1)` 不会叠加相同回调。停止时调用 `this.unschedule(this.tick)`。

## 与上一课的联系

继承第 10 课保存的 `tick` 引用和 `unschedule` 清理；本课只验证相同回调再次 `schedule` 的行为；下一课可用计数观察启用和禁用边界。

## 时效校验

时效校验：2026-09-28（已核对 Cocos Creator 3.8 Scheduler 手册及 3.8.9 `Component` 源码；组件没有 `isScheduled` 方法，已移除原错误示例）。

## 官方参考

- [Cocos Creator 3.8：Scheduler](https://docs.cocos.com/creator/3.8/manual/en/scripting/scheduler.html)
- [Cocos Creator 3.8.9：Component 源码](https://github.com/cocos/cocos-engine/blob/v3.8.9/cocos/scene-graph/component.ts)
