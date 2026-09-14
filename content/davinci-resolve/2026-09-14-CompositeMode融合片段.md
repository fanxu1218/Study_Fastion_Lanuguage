# 第 10 课：Composite Mode融合片段

- 日期：2026-09-14
- 课程序号：第 10 课
- 知识点：Edit 页合成模式

## 用途

把上层光效、纹理或图形与下层视频合成。

## 核心概念

Inspector 的 Composite Mode 决定上下轨道像素如何组合，Opacity 控制合成强度。

## 最小代码或操作示例

```text
1. 在 Edit 页把纹理片段放到上层轨道。
2. 选中上层片段并打开 Inspector。
3. 在 Composite 中选择 Screen，再调整 Opacity。
```

## 3～5 分钟练习

切换 Normal 与 Screen，比较黑色背景的显示。

## 参考答案

Screen 通常弱化黑色并保留亮部；Normal 按原片段和透明度覆盖。

## 与上一课的联系

上一课只调整 Composite Opacity；本课改变片段之间的像素合成规则。

## 参考资料

- [Blackmagic Design 官方 DaVinci Resolve 20 Colorist Guide](https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Colorist-Guide.pdf)（2026-09-14 核对）。

