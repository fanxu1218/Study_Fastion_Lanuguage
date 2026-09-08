# 第 6 课：NSMutableArray可变数组

- 日期：2026-09-08
- 课程序号：第 6 课
- 知识点：NSMutableArray 与可变集合

## 用途

在运行过程中向课程列表增加新项目。

## 核心概念

`NSMutableArray` 是可修改的有序对象集合；`addObject:` 在末尾加入对象。

## 最小代码或操作示例

```objective-c
NSMutableArray<NSString *> *topics = [NSMutableArray arrayWithArray:@[@"变量", @"循环"]];
[topics addObject:@"集合"];
NSLog(@"%@", topics);
```

## 3～5 分钟练习

移除第一项后输出数组。

## 参考答案

调用 `[topics removeObjectAtIndex:0];`，剩下“循环”和“集合”。

## 与上一课的联系

上一课使用不可变 `NSArray`；本课在需要增删元素时改用可变数组。
