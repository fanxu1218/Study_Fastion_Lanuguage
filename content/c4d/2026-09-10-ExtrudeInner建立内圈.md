# 第 8 课：ExtrudeInner建立内圈

- 日期：2026-09-10
- 课程序号：第 8 课
- 知识点：Extrude Inner

## 用途

在多边形内部建立新边界，为凹槽做准备。

## 核心概念

Extrude Inner 只缩放选区形成内圈，不沿法线产生高度。

## 最小代码或操作示例

```text
1. 在 Polygon 模式选择顶面。
2. 执行 Mesh > Create Tools > Extrude Inner。
3. 向内拖出较小 Offset，确认无重叠。
```

## 3～5 分钟练习

分别使用两个 Offset 比较中心面。

## 参考答案

Offset 越大，内圈越宽、中心面越小。

## 与上一课的联系

上一课处理外边倒角；本课建立内部边界。

## 参考资料

- [Maxon Cinema 4D 2026 官方文档：Extrude Inner](https://help.maxon.net/c4d/2026/en-us/Content/html/NET_MAXON_NEUTRON_MODELING_INSET-NET_MAXON_NODE_BASE_GROUP_INPUTS.html)（2026-09-10 核对）。
