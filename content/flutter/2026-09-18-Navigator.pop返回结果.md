# 第 16 课：Navigator.pop返回结果

- 日期：2026-09-18
- 课程序号：第 16 课
- 知识点：Navigator.pop返回结果

## 用途或适用场景

从详情页返回时把用户选择传回列表页。

## 核心概念

Navigator.push 返回 Future；详情页用 Navigator.pop(context, result) 完成它。

## 最小代码或操作示例

```text
onTap: () async {
  final saved = await Navigator.push<bool>(
    context,
    MaterialPageRoute(builder: (detailContext) => Scaffold(
      body: TextButton(
        onPressed: () => Navigator.pop(detailContext, true),
        child: Text(lessons[index]),
      ),
    )),
  );
  if (saved == true) debugPrint('已保存');
}
```

## 3～5 分钟练习

只有 saved 为 true 时打印“已保存”。

## 参考答案

`if (saved == true) debugPrint('已保存');`

## 与上一课的联系

继承上一课的 Navigator.push 压栈；本课只增加 pop 返回值；完成后下一课可在返回后刷新对应列表行。

## 时效校验

时效校验：2026-09-21（Flutter 3.47.2 当前 Navigator API；保留原课程日期与序号，已重新核对 `Navigator.push` 与 `Navigator.pop` 返回结果的用法，未见废弃标记）。

## 官方参考

- [Flutter API：Navigator.pop](https://api.flutter.dev/flutter/widgets/Navigator/pop.html)
