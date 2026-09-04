# 第 6 课：Row与Expanded分配宽度

- 日期：2026-09-04
- 课程序号：第 6 课
- 知识点：横向布局、剩余空间与 flex

## 用途

在一行中放置等宽的两块内容。

## 核心概念

Expanded 必须处于 Row/Column/Flex 的正确父子路径中；这里直接放在 Row 下。横向必须有有限宽度，flex 分配扣除固定子级后的空间。

## 最小代码或操作示例

```dart
import "package:flutter/material.dart";
void main() => runApp(const MaterialApp(home: Scaffold(
  body: Center(child: SizedBox(width: 300, child: Row(children: [
    Expanded(child: ColoredBox(color: Colors.blue, child: Text("基础"))),
    SizedBox(width: 12),
    Expanded(child: ColoredBox(color: Colors.orange, child: Text("练习"))),
  ]))),
)));
```

## 3～5 分钟练习

在足够宽的窗口预测两块宽度，再给第一个 Expanded 设置 flex: 2。

## 参考答案

原两块各 (300-12)/2=144；比例 2:1 后分别为 192 和 96。窗口若限制父宽度，应按实际可用宽度计算。

## 与上一课的联系

上一课观察父级约束，本课在有限横向空间内按比例分配尺寸。

## 参考资料

- [官方文档：Row与Expanded分配宽度](https://api.flutter.dev/flutter/widgets/Expanded-class.html)（2026-09-04 核对；以文档标注版本及本机界面为准）。
