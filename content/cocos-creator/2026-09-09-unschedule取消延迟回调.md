# 第 7 课：unschedule取消延迟回调

- 日期：2026-09-09
- 课程序号：第 7 课
- 知识点：回调引用与 unschedule

## 用途

在状态提前改变时取消尚未执行的延迟任务。

## 核心概念

取消调度必须传入注册时的同一个函数引用；单独创建内容相同的新箭头函数不能匹配原任务。

## 最小代码或操作示例

```ts
private readonly showNode = (): void => {
  this.node.active = true;
};

hideTemporarily(): void {
  this.node.active = false;
  this.scheduleOnce(this.showNode, 2);
}

cancelShow(): void {
  this.unschedule(this.showNode);
}
```

## 3～5 分钟练习

先调用 `hideTemporarily()`，两秒内调用 `cancelShow()`，观察节点状态。

## 参考答案

延迟回调被取消，节点不会由这次调度自动恢复显示。

## 与上一课的联系

上一课注册一次延迟回调；本课保存回调引用并在不再需要时取消它。
