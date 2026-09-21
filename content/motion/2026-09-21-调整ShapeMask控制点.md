# 第 14 课：调整ShapeMask控制点

- 日期：2026-09-21
- 课程序号：第 14 课
- 知识点：调整ShapeMask控制点

## 用途或适用场景

调整已羽化的矩形蒙版范围，使它贴合目标区域。

## 核心概念

Edit Rectangle 会显示矩形 Shape Mask 的屏幕控件；拖动角点只调整蒙版几何，上一课设定的 Feather 保持不变。

## 最小代码或操作示例

```text
1. 选中上一课的 Shape Mask。
2. 在画布的 2D 变换工具弹出菜单中选择 Edit Rectangle。
3. 拖动一个角点，让蒙版边缘贴合目标区域。
```

## 3～5 分钟练习

拖动对角控件，让矩形蒙版覆盖目标区域且不遮挡主体。

## 参考答案

矩形蒙版边缘贴合目标区域，原有羽化宽度保留。

## 与上一课的联系

沿用第 13 课已反转并设置 Feather 的矩形 Shape Mask；本课只新增 Edit Rectangle 调整蒙版几何；完成练习后下一课可给蒙版几何变化设置关键帧。

## 时效校验

时效校验：2026-09-21（Apple Motion 6.3 当前用户指南；已打开并核对 Edit Rectangle 的当前用法，未见本课方案的废弃说明）。

## 官方参考

- [Apple Motion 6.3：Adjust 2D shape and mask onscreen controls](https://support.apple.com/en-ie/guide/motion/motn6f637ace/mac)
