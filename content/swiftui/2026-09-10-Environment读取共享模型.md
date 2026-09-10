# 第 8 课：Environment读取共享模型

- 日期：2026-09-10
- 课程序号：第 8 课
- 知识点：@Environment

## 用途

让下层视图读取上层注入的共享模型。

## 核心概念

上层用 `environment` 注入，后代用 `@Environment(Type.self)` 读取同一实例。

## 最小代码或操作示例

```swift
@Environment(CourseStore.self) private var store
var body: some View { Text(store.title) }
```

## 3～5 分钟练习

增加按钮把共享标题改为“已完成”。

## 参考答案

按钮动作中执行 `store.title = "已完成"`。

## 与上一课的联系

上一课注入共享模型；本课在后代读取它。
