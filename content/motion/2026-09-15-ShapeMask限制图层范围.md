# 第 11 课：ShapeMask限制图层范围

- 日期：2026-09-15
- 课程序号：第 11 课
- 知识点：Shape Mask 与非破坏遮罩

## 用途

只显示纹理图层的局部区域，而不删除源像素。

## 核心概念

Shape Mask 用几何形状控制图层可见范围，可继续编辑位置、大小与羽化。

## 最小代码或操作示例

```text
1. 选中上一课的纹理层。
2. 添加 Shape Mask 并绘制矩形。
3. 在 Inspector 调整 Feather。
```

## 3～5 分钟练习

移动遮罩，让光效只覆盖画面右侧。

## 参考答案

拖动遮罩控制点或调整 Transform，使可见区域落在右侧。

## 与上一课的联系

继承上一课的混合纹理层；本课只限制其可见范围；下一课可动画遮罩位置。

## 时效校验

时效校验：2026-09-15（Motion 当前官方指南）。已打开并核对下列官方文档；示例未使用已废弃接口。

## 官方参考

- [Apple Motion User Guide：Add a shape mask](https://support.apple.com/guide/motion/add-a-shape-mask-motn169f662c/mac)
