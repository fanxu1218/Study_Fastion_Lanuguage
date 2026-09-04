# 第 4 课：Collection整理对象

- 日期：2026-09-04
- 课程序号：第 4 课
- 知识点：集合与场景组织

## 用途

把复制出的盒子放进一个命名集合。

## 核心概念

Collection 管理对象归属，不会自动建立变换父子关系；Move to Collection 与复制对象不同。

## 最小代码或操作示例

```text
1. 使用上一课文件副本，保持 Object Mode 和默认键位，退出 Local View。
2. 在 Outliner 选择 Box_A 和 Box_B，鼠标回到 3D Viewport。
3. 按 M，选择 New Collection，命名 Boxes 并确认移动。
4. 展开 Outliner 中的 Boxes，确认两个对象归入该集合。
5. 分别查看两对象位置，核对和移动前一致。
```

## 3～5 分钟练习

只选择 Box_B，沿 Y 移动 1；预测 Box_A 会不会随动。

## 参考答案

Box_A 不随动；本课集合只组织对象，没有给它们建立变换父子关系。M 移动集合归属也不会增加对象数量。

## 与上一课的联系

上一课复制对象，本课整理副本而不改变几何和空间位置。

## 参考资料

- [官方文档：Collection整理对象](https://docs.blender.org/manual/id/5.2/scene_layout/collections/collections.html)（2026-09-04 核对；以文档标注版本及本机界面为准）。

英文 latest 页本次未能读取，采用官方 5.2 印尼语入口中保留的英文集合说明核对。
