# 第 7 课：ArrayList动态列表

- 日期：2026-09-08
- 课程序号：第 7 课
- 知识点：ArrayList 与泛型

## 用途

保存数量会变化的一组课程名称。

## 核心概念

`ArrayList<String>` 只接收字符串，`add` 追加元素，增强 `for` 可逐项读取。

## 最小代码或操作示例

```java
import java.util.ArrayList;

ArrayList<String> topics = new ArrayList<>();
topics.add("变量");
topics.add("循环");
for (String topic : topics) System.out.println(topic);
```

## 3～5 分钟练习

在两项之间插入“判断”。

## 参考答案

执行 `topics.add(1, "判断");`，索引 1 表示插入到第二个位置。

## 与上一课的联系

上一课遍历固定长度数组；本课使用可以增删元素的列表。
