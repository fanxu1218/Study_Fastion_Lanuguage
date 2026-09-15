# 第 10 课：Subdivision Surface平滑模型

- 日期：2026-09-14
- 课程序号：第 10 课
- 知识点：细分曲面与控制线

## 用途

保持低模易编辑的同时预览更圆滑的最终表面。

## 核心概念

Subdivision Surface 根据低模笼架生成平滑表面；细分级别越高，计算量增长越快。

## 最小代码或操作示例

```text
1. 新建 Subdivision Surface 对象。
2. 把上一课完成的凹槽模型拖为其子对象。
3. 将编辑器细分设为 2，观察轮廓。
```

## 3～5 分钟练习

把编辑器细分从 2 改为 1，比较轮廓与视口响应。

## 参考答案

1 级面数更少、响应更快；2 级通常更平滑。

## 与上一课的联系

上一课用 Loop 切线控制凹槽边缘；本课让控制线参与细分后的曲面塑形。

## 参考资料

- [Maxon Cinema 4D 2026 官方帮助：Weight Subdivision Surface](https://help.maxon.net/c4d/2026/en-us/Content/html/TOOLSETSDSWEIGHT.html?TocPath=Mesh+menu%7CWeight+Subdivision+Surface%7C_____0)（2026-09-14 核对）。

## 时效校验

时效校验：2026-09-15（Cinema 4D 2026 官方帮助）。已复核本课用法，未发现废弃标记；本轮官方资料见下方链接。

## 官方参考

- [Maxon Cinema 4D 2026：Subdivision Surface](https://help.maxon.net/c4d/2026/en-us/Content/html/OSDS.html)
