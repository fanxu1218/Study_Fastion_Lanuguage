# 第 23 课：用Map.forEach遍历课程备注

- 日期：2026-10-08
- 课程序号：第 23 课
- 知识点：`Map.forEach`

## 用途或适用场景

用双参数回调表达与 `entrySet` 相同的只读遍历。

## 核心概念

本课只增加“`Map.forEach`”，继续沿用上一课的数据、对象和命名，不复制业务事实源。

## 最小代码或操作示例

```java
notes.forEach((lesson, note) -> System.out.println(lesson.title() + ": " + note));
```

## 3～5 分钟练习

加入第二条记录并观察输出。

## 参考答案

每个键值对各输出一次，不再额外调用 `get`。

## 与上一课的联系

第 22 课遍历 `entrySet`；本课只换成 `forEach`；下一课可按标题排序输出。

## 时效校验

时效校验：2026-10-08（Java SE 27 `Map` API，未见 `forEach` 废弃。）

## 官方参考

- [官方文档](https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/Map.html)

