# 第 15 课：Navigator.push进入详情页

- 日期：2026-09-17
- 课程序号：第 15 课
- 知识点：Navigator.push进入详情页

## 用途

点击课程行后把详情页压入导航栈。

## 核心概念

Navigator.push 接收当前 context 和 Route；MaterialPageRoute 用 builder 延迟构建目标页。

## 最小代码或操作示例

```text
onTap: () {
  Navigator.push(context, MaterialPageRoute(
    builder: (_) => Text(lessons[index]),
  ));
}
```

## 3～5 分钟练习

把详情文字放进 Scaffold 的 body。

## 参考答案

builder 返回 Scaffold(body: Center(child: Text(lessons[index])))。

## 与上一课的联系

继承上一课的 ListTile.onTap；本课只增加页面压栈；下一课可用 pop 返回结果。

## 时效校验

时效校验：2026-09-17（Flutter 当前 Navigator API）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [Flutter API：Navigator.push](https://api.flutter.dev/flutter/widgets/Navigator/push.html)
