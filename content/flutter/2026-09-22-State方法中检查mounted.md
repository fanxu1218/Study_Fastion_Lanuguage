# 第 18 课：State 方法中检查 mounted

- 日期：2026-09-22
- 课程序号：第 18 课
- 知识点：`State.mounted`

## 用途或适用场景

把详情页返回处理放进列表页 `State` 方法后，避免页面销毁时调用 `setState`。

## 核心概念

`await` 之后先判断当前 `State` 的 `mounted`；它为 `false` 时不能再调用 `setState`。

## 最小代码或操作示例

```dart
// 写在第 17 课列表页的 State 类中，沿用其 lessons。
Future<void> openLesson(int index) async {
  final saved = await Navigator.push<bool>(
    context,
    MaterialPageRoute(builder: (detailContext) => Scaffold(
      body: TextButton(
        onPressed: () => Navigator.pop(detailContext, true),
        child: Text(lessons[index]),
      ),
    )),
  );
  if (!mounted) return;
  if (saved == true) {
    setState(() => lessons[index] = '已完成：${lessons[index]}');
  }
}
```

列表行仍用 `onTap: () => openLesson(index)` 调用。

## 3～5 分钟练习

在详情页返回 `false`，确认原列表行不变。

## 参考答案

`saved == true` 不成立，因此不调用 `setState`。

## 与上一课的联系

沿用第 17 课的 `Navigator.push<bool>`、`saved` 和同一 `lessons[index]`；本课只把回调放进 `State` 方法并使用 `State.mounted`；完成后下一课可把同步的单行更新另提为方法。

## 时效校验

时效校验：2026-09-24（Flutter 当前 `State.mounted`、`State.setState`、`Navigator.pop` API；未见废弃标记）。

## 官方参考

- [Flutter API：State.mounted](https://api.flutter.dev/flutter/widgets/State/mounted.html)
- [Flutter API：State.setState](https://api.flutter.dev/flutter/widgets/State/setState.html)
- [Flutter API：Navigator.pop](https://api.flutter.dev/flutter/widgets/Navigator/pop.html)
