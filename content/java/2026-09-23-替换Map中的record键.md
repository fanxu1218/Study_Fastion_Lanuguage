# 第 18 课：替换 Map 中的 record 键

- 日期：2026-09-23
- 课程序号：第 18 课
- 知识点：不可变键的替换

## 用途或适用场景

课程时长修正后，让备注改为通过新课程值查找。

## 核心概念

`record` 组件不可直接修改；作为 Map 键时，先移除旧键，再以新 record 放入同一备注。

## 最小代码或操作示例

```java
public class Main {
  record Lesson(String title, int minutes) {}
  public static void main(String[] args) {
    var notes = new java.util.HashMap<Lesson, String>();
    var oldKey = new Lesson("Java", 5);
    notes.put(oldKey, "已读");
    var note = notes.remove(oldKey);
    var newKey = new Lesson(oldKey.title(), 10);
    notes.put(newKey, note);
    System.out.println(notes.get(newKey));
  }
}
```

## 3～5 分钟练习

分别用 `oldKey` 和 `newKey` 查询，比较结果。

## 参考答案

旧键返回 `null`，新键返回“已读”；Map 中只保留修正后的键。

## 与上一课的联系

沿用第 17 课的 `Lesson` record、`HashMap` 和键存在性判断；本课只新增不可变键的移除与替换；完成练习后下一课可检查替换后的 Map 条目数量。

## 时效校验

时效校验：2026-09-24（Java 官方 Records 教程与 Java SE 27 `Map` API；record 自 Java 16 正式可用，`Map.remove`、`Map.put` 未见废弃标记）。

## 官方参考

- [Java 官方教程：Records](https://dev.java/learn/records/)
- [Java SE 27：Map](https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/Map.html)
