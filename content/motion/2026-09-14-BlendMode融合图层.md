# 第 10 课：Blend Mode融合图层

- 日期：2026-09-14
- 课程序号：第 10 课
- 知识点：图层混合模式与不透明度

## 用途

把光效、纹理或颜色层与下方画面自然组合。

## 核心概念

混合模式根据上下层颜色计算结果；图层顺序与不透明度会共同影响最终合成。

## 最小代码或操作示例

```text
1. 在 Layers 列表选中上方纹理层。
2. 在 Properties Inspector 把 Blend Mode 改为 Screen。
3. 调低 Opacity 比较效果。
```

## 3～5 分钟练习

切换 Screen 与 Multiply，观察黑白区域的差异。

## 参考答案

Screen 倾向保留亮部并提亮；Multiply 倾向保留暗部并压暗。

## 与上一课的联系

上一课用关键帧精确控制透明度；本课进一步决定上下图层的颜色交互方式。

## 参考资料

- [Apple Motion 用户指南：Change a layer’s blend mode](https://support.apple.com/guide/motion/change-a-layers-blend-mode-motn292ea104/mac)（2026-09-14 核对）。

## 时效校验

时效校验：2026-09-15（Motion 当前官方指南）。已复核本课用法，未发现废弃标记；本轮官方资料见下方链接。

## 官方参考

- [Apple Motion User Guide：Add a shape mask](https://support.apple.com/guide/motion/add-a-shape-mask-motn169f662c/mac)
