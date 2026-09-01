# 第 3 课：StatefulWidget 与 setState

- 日期：2026-09-01
- 课程序号：第 3 课
- 知识点：可变交互状态、`State` 与 `setState`

## 用途

让界面响应点击并更新计数等局部交互状态。

## 核心概念

- `StatefulWidget` 是不可变配置，可变状态保存在 `State` 中。
- 在 `setState` 内修改字段会请求重新执行 `build`。
- 组件只保存交互状态，不复制底层业务事实。

## 最小代码示例

```dart
class Counter extends StatefulWidget {
  const Counter({super.key});
  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int count = 0;
  @override
  Widget build(BuildContext context) => ElevatedButton(
    onPressed: () => setState(() => count += 1),
    child: Text('点击 $count 次'),
  );
}
```

## 3～5 分钟练习

增加一个按钮，把 `count` 重置为 `0`。

## 参考答案

```dart
ElevatedButton(onPressed: () => setState(() => count = 0), child: const Text('重置'))
```

## 与上一课的联系

上一课用 `StatelessWidget` 描述无状态界面；本课为确实变化的局部交互引入 `StatefulWidget`。
