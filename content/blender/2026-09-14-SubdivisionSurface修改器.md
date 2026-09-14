# 第 10 课：Subdivision Surface修改器

- 日期：2026-09-14
- 课程序号：第 10 课
- 知识点：非破坏细分与修改器顺序

## 用途

在保留基础网格的前提下获得更平滑的模型轮廓。

## 核心概念

修改器从堆栈顶部向下计算；Subdivision Surface 改变显示与渲染结果，不直接改写基础网格。

## 最小代码或操作示例

```text
1. 在 Object Mode 选中模型。
2. 打开 Modifiers，添加 Subdivision Surface。
3. 将 Viewport Levels 设为 2。
```

## 3～5 分钟练习

把修改器临时关闭，再比较基础网格与细分结果。

## 参考答案

关闭后显示可直接编辑的低模；开启后显示平滑计算结果。

## 与上一课的联系

上一课直接对边执行 Bevel；本课用修改器建立可随时调整的非破坏流程。

## 参考资料

- [Blender 5.2 LTS 官方手册：Modifiers Introduction](https://docs.blender.org/manual/en/latest/modeling/modifiers/introduction.html)（2026-09-14 核对）。

