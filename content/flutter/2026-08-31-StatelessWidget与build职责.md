# 第 2 课：StatelessWidget 与 build 职责

- 日期：2026-08-31
- 课程序号：第 2 课
- 知识点：拆分 `StatelessWidget`，理解 `build()` 的输入与输出

## 知识点

把固定内容封装成无状态组件，并让 `build()` 根据构造参数返回对应的 Widget 树。

## 用途

页面内容增多后，把可复用区域拆成独立 Widget 能减少重复代码，也能让每个组件只负责一小块界面。

## 核心概念

- `StatelessWidget` 适合只由构造参数决定显示结果的组件。
- 构造函数接收组件所需数据，字段通常声明为 `final`。
- `build(BuildContext context)` 返回当前组件的 Widget 树。
- `build()` 可能被多次调用，不应在其中执行网络请求或修改业务状态。
- 参数不变且支持常量构造时，优先使用 `const`。

## 最小代码示例

```dart
import 'package:flutter/material.dart';

class LessonTitle extends StatelessWidget {
  const LessonTitle({super.key, required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Text(
      title,
      style: Theme.of(context).textTheme.headlineSmall,
    );
  }
}

class StudyPage extends StatelessWidget {
  const StudyPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: LessonTitle(title: 'Flutter 第 2 课'),
      ),
    );
  }
}
```

## 3～5 分钟练习

给 `LessonTitle` 增加必填的 `subtitle` 参数，并用 `Column` 同时显示标题和副标题。

## 参考答案

```dart
class LessonTitle extends StatelessWidget {
  const LessonTitle({
    super.key,
    required this.title,
    required this.subtitle,
  });

  final String title;
  final String subtitle;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(title),
        Text(subtitle),
      ],
    );
  }
}
```

## 与上一课的联系

上一课用 `runApp()`、`MaterialApp` 和 `Scaffold` 搭出最小页面；本课从这棵 Widget 树中拆出独立的 `StatelessWidget`，并明确 `build()` 只负责描述界面。
