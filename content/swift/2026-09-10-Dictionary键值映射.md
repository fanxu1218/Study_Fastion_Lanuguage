# 第 8 课：Dictionary键值映射

- 日期：2026-09-10
- 课程序号：第 8 课
- 知识点：Dictionary 与可选读取

## 用途

按唯一键保存和查找课程属性。

## 核心概念

字典下标读取返回可选值，因为键可能不存在。

## 最小代码或操作示例

```swift
let scores = ["Swift": 90, "Rust": 88]
let score = scores["Swift"] ?? 0
```

## 3～5 分钟练习

读取不存在的 `Kotlin`，默认显示 `60`。

## 参考答案

`let score = scores["Kotlin"] ?? 60`。

## 与上一课的联系

上一课用 Set 保存唯一成员；本课用键关联具体值。
