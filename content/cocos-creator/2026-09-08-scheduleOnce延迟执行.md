# 第 6 课：scheduleOnce延迟执行

- 日期：2026-09-08
- 课程序号：第 6 课
- 知识点：Component.scheduleOnce

## 用途

按键后延迟恢复节点状态，而不手动累计计时器。

## 核心概念

`scheduleOnce` 在指定秒数后调用一次回调；组件销毁时相关调度会随生命周期停止。

## 最小代码或操作示例

```ts
private showReady(): void {
  this.node.active = false;
  this.scheduleOnce((): void => {
    this.node.active = true;
  }, 1);
}
```

## 3～5 分钟练习

把等待时间改为 2 秒，并在编辑器预览中观察节点恢复。

## 参考答案

把第二个参数从 `1` 改为 `2`；回调只会执行一次。

## 与上一课的联系

上一课响应键盘输入持续改变方向；本课让一次输入触发带延迟的单次行为。
