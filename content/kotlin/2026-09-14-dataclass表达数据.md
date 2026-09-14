# 第 11 课：data class表达数据

- 日期：2026-09-14
- 课程序号：第 11 课
- 知识点：`data class` 与自动生成成员

## 用途

简洁表示课程、用户或配置等以数据为主的对象。

## 核心概念

`data class` 会根据主构造参数生成 `equals`、`hashCode`、`toString` 和 `copy`。

## 最小代码或操作示例

```kotlin
data class Lesson(val title: String, val minutes: Int)

val first = Lesson("Kotlin", 5)
val longer = first.copy(minutes = 8)
println(longer)
```

## 3～5 分钟练习

增加 `done: Boolean` 字段，再复制对象把它改为 `true`。

## 参考答案

`val doneLesson = first.copy(done = true)`，并在类中声明 `val done: Boolean`。

## 与上一课的联系

上一课用 `associateBy` 建立索引；本课定义索引中元素的数据结构。

