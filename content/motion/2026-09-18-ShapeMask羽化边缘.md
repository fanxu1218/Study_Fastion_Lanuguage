# 第 13 课：ShapeMask羽化边缘

- 日期：2026-09-18
- 课程序号：第 13 课
- 知识点：ShapeMask羽化边缘

## 用途或适用场景

柔化蒙版边缘，让遮罩过渡不显生硬。

## 核心概念

Feather 扩展柔化区域；它只改变边缘过渡，不改变上一课的反转关系。

## 最小代码或操作示例

```text
1. 选中上一课已反转的 Shape Mask。
2. 在 Inspector 中提高 Feather。
3. 放大查看边缘过渡。
```

## 3～5 分钟练习

比较 Feather 为 0 与 20 的效果。

## 参考答案

0 时边缘清晰；20 时遮罩边缘出现更宽的柔和过渡。

## 与上一课的联系

继承上一课反转后的 Shape Mask；本课只增加边缘羽化；完成后下一课可为蒙版形状设置关键帧。

## 时效校验

时效校验：2026-09-18（Motion 当前用户指南）。已实际打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [Apple Motion User Guide：Add a shape mask](https://support.apple.com/guide/motion/add-a-shape-mask-motn169f662c/mac)
