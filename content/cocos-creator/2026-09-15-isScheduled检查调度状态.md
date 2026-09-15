# 第 11 课：isScheduled检查调度状态

- 日期：2026-09-15
- 课程序号：第 11 课
- 知识点：isScheduled 与回调身份

## 用途

启动重复任务前判断同一回调是否已调度。

## 核心概念

isScheduled 接收原回调引用；它用于观察调度状态，不替代生命周期清理。

## 最小代码或操作示例

```ts
private tick = (): void => console.log("练习")

start(): void {
  if (!this.isScheduled(this.tick)) this.schedule(this.tick, 1)
}
```

## 3～5 分钟练习

写一个返回 tick 是否正在调度的方法。

## 参考答案

`isRunning(): boolean { return this.isScheduled(this.tick) }`

## 与上一课的联系

继承上一课保存的 tick 引用；本课只增加重复注册检查；下一课可记录调度次数验证生命周期。

## 时效校验

时效校验：2026-09-15（Cocos Creator 3.8 当前 API）。已打开并核对下列官方文档；示例未使用已废弃接口。

## 官方参考

- [Cocos Creator 3.8 API：Component](https://docs.cocos.com/creator/3.8/api/en/class/Component)
