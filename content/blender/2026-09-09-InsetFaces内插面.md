# 第 7 课：Inset Faces内插面

- 日期：2026-09-09
- 课程序号：第 7 课
- 知识点：Inset Faces

## 用途

在选中面内部创建一圈边界，为继续挤出或制作凹槽做准备。

## 核心概念

Inset Faces 在原面内部生成缩小的面和环绕边；Thickness 控制内缩距离。

## 最小代码或操作示例

```text
1. 在 Edit Mode 的 Face Select 中选择挤出后的顶面。
2. 按 I，输入 0.1，再按 Enter。
3. 检查顶面内部新增的一圈边。
```

## 3～5 分钟练习

撤销后把内插厚度改为 0.2，比较中心面的大小。

## 参考答案

厚度增大后环绕边界更宽，中心面更小，外轮廓保持不变。

## 与上一课的联系

上一课从顶面挤出相连几何；本课继续在新顶面内部建立下一步建模边界。

## 参考资料

- [Blender 官方手册：Inset Faces](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/face/inset_faces.html)（2026-09-09 核对）。
