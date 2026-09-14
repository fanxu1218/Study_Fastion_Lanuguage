# 第 10 课：unschedule停止重复任务

- 日期：2026-09-14
- 课程序号：第 10 课
- 知识点：调度回调的精确取消

## 用途

页面隐藏、组件禁用或目标完成时停止特定重复任务。

## 核心概念

取消时必须传入与 `schedule` 相同的函数引用；绑定后的新函数不是同一个引用。

## 最小代码或操作示例

```ts
private tick = (): void => {
  console.log("练习一次")
}

start(): void { this.schedule(this.tick, 1) }
stop(): void { this.unschedule(this.tick) }
```

## 3～5 分钟练习

在 `onDisable` 中停止 `tick`。

## 参考答案

`onDisable(): void { this.unschedule(this.tick) }`。

## 与上一课的联系

上一课用 `schedule` 建立重复任务；本课在生命周期结束时精确撤销它。

