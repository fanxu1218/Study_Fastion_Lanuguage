# 第 11 课：ShadeAutoSmooth平滑着色

- 日期：2026-09-15
- 课程序号：第 11 课
- 知识点：Shade Auto Smooth 与法线

## 用途

让细分模型的曲面平滑，同时保留尖锐边界。

## 核心概念

平滑着色改变法线插值，不增加几何；按角度平滑可保留超过阈值的硬边。

## 最小代码或操作示例

```text
1. 在 Object Mode 选中细分模型。
2. 右键选择 Shade Auto Smooth。
3. 调整 Angle，观察凹槽边缘。
```

## 3～5 分钟练习

比较 30° 与 60° 的边缘表现。

## 参考答案

较小角度保留更多硬边；较大角度让更多相邻面平滑过渡。

## 与上一课的联系

继承上一课的 Subdivision Surface 模型；本课只调整着色法线；下一课可学习支撑线控制轮廓。

## 时效校验

时效校验：2026-09-15（Blender 5.2 LTS 当前手册）。已打开并核对下列官方文档；示例未使用已废弃接口。

## 官方参考

- [Blender Manual：Shading](https://docs.blender.org/manual/en/latest/scene_layout/object/editing/shading.html)
