# 第 6 课：Oscillate行为循环摆动

- 日期：2026-09-08
- 课程序号：第 6 课
- 知识点：Parameter Behavior 与 Oscillate

## 用途

让标题持续轻微旋转摆动，而不逐个制作重复关键帧。

## 核心概念

参数行为只影响指定参数；Oscillate 在两个方向之间周期变化，可应用到旋转或透明度等数值。

## 最小代码或操作示例

```text
1. 选择标题图层，在 Rotation 参数的动画菜单添加 Oscillate。
2. 在 Behaviors Inspector 将 Wave Shape 设为 Sine。
3. 设置较小 Amplitude，播放观察左右摆动。
```

## 3～5 分钟练习

把 Oscillate 改应用到 Opacity，制作重复淡入淡出。

## 参考答案

Opacity 会随振荡周期反复变化，而标题位置保持不变。

## 与上一课的联系

上一课用 Link 让一个参数跟随另一个参数；本课让单个参数按周期自行变化。

## 参考资料

- [Apple Motion 官方指南：Parameter behaviors](https://support.apple.com/en-ie/guide/motion/motn49eb56eb/mac)（2026-09-08 核对）。
