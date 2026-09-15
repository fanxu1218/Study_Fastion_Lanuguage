# 第 11 课：AdjustmentClip统一效果

- 日期：2026-09-15
- 课程序号：第 11 课
- 知识点：Adjustment Clip 与轨道范围

## 用途

把同一种视觉处理统一应用到多个下层片段。

## 核心概念

Adjustment Clip 的效果会作用于其时间范围内的下层轨道，源片段保持独立。

## 最小代码或操作示例

```text
1. 在 Effects Library 中找到 Adjustment Clip。
2. 把它放到两个片段上方轨道。
3. 选中它，在 Inspector 调整 Zoom。
```

## 3～5 分钟练习

缩短 Adjustment Clip，只覆盖第二个片段。

## 参考答案

只有其时间范围下方的第二个片段继续显示统一缩放效果。

## 与上一课的联系

继承上一课的上层合成思路；本课只增加统一效果载体；下一课可给调整片段添加关键帧。

## 时效校验

时效校验：2026-09-15（DaVinci Resolve 20 官方指南）。已打开并核对下列官方文档；示例未使用已废弃接口。

## 官方参考

- [Blackmagic Design：DaVinci Resolve 20 Beginner's Guide](https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Beginners-Guide.pdf)
