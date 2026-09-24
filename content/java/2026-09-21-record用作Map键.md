# 第 16 课：record用作Map键

- 日期：2026-09-21
- 课程序号：第 16 课
- 知识点：record用作Map键

## 用途或适用场景

按课程值检索对应备注。

## 核心概念

record 自动生成 equals 与 hashCode；相同组件值可定位同一键。

## 最小代码或操作示例

```text
record Lesson(String title, int minutes) {}
var notes = new java.util.HashMap<Lesson, String>();
notes.put(new Lesson("Java", 5), "已读");
System.out.println(notes.get(new Lesson("Java", 5)));
```

## 3～5 分钟练习

用分钟数 10 构造键并查找。

## 参考答案

返回 null，因为组件值不同。

## 与上一课的联系

沿用第 15 课的 `Lesson` record 和相同组件值；本课只新增把 record 放入 `HashMap` 作为键；完成练习后下一课可先用 `containsKey` 判断键是否存在。

## 时效校验

时效校验：2026-09-24（当前 Java SE 27 规范；record 自 Java 16 起正式可用；已用本机 JBR 17.0.14 编译运行，未见本课方案的废弃说明）。

## 官方参考

- [Java Records 官方教程](https://dev.java/learn/records/)
- [Oracle Java SE 16：Record Classes](https://docs.oracle.com/en/java/javase/16/language/records.html)
- [Oracle：Java SE 27 Specifications](https://docs.oracle.com/en/java/javase/27/docs/specs/index.html)
