# 第 9 课：NSMutableDictionary更新键值

- 日期：2026-09-11
- 课程序号：第 9 课
- 知识点：可变字典

## 用途

在运行时新增或更新课程属性。

## 核心概念

可变字典用 `setObject:forKey:` 写入；同一键会替换旧值。

## 最小代码或操作示例

```objective-c
NSMutableDictionary *lesson = [@{ @"title": @"Objective-C" } mutableCopy];
[lesson setObject:@5 forKey:@"minutes"];
NSLog(@"%@", lesson[@"minutes"]);
```

## 3～5 分钟练习

把 `minutes` 从 5 更新为 8。

## 参考答案

再次对同一键调用 `setObject:@8 forKey:@"minutes"`。

## 与上一课的联系

上一课安全读取字典；本课更新可变字典中的值。
