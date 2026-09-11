# 第 10 课：associateBy建立索引

- 日期：2026-09-11
- 课程序号：第 10 课
- 知识点：集合 associateBy

## 用途

把列表转换为可按唯一键查找的 Map。

## 核心概念

`associateBy` 用每个元素计算键，重复键保留后出现的元素。

## 最小代码或操作示例

```kotlin
data class Lesson(val id: Int, val title: String)
val byId = lessons.associateBy { it.id }
println(byId[1]?.title)
```

## 3～5 分钟练习

按标题建立索引并读取 Kotlin。

## 参考答案

`val byTitle = lessons.associateBy { it.title }`。

## 与上一课的联系

上一课用 map 转换元素；本课把元素组织成键值索引。
