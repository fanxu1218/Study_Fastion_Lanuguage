# 第 7 课：NSDictionary键值查找

- 日期：2026-09-09
- 课程序号：第 7 课
- 知识点：NSDictionary 与对象下标

## 用途

按课程名称查找对应的练习时长。

## 核心概念

`NSDictionary` 保存键值对象对；读取不存在的键会得到 `nil`。

## 最小代码或操作示例

```objective-c
NSDictionary<NSString *, NSNumber *> *minutes = @{
  @"Objective-C": @20,
  @"Swift": @15
};
NSLog(@"%@", minutes[@"Objective-C"]);
```

## 3～5 分钟练习

读取不存在的 `@"Rust"`，使用空值合并方式提供 `@0`。

## 参考答案

使用 `NSNumber *value = minutes[@"Rust"] ?: @0;`，结果为 `@0`。

## 与上一课的联系

上一课用可变数组按位置增删对象；本课改用键直接查找对象。
