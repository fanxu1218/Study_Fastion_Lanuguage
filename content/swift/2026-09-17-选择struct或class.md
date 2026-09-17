# 第 13 课：选择struct或class

- 日期：2026-09-17
- 课程序号：第 13 课
- 知识点：选择struct或class

## 用途

根据是否需要共享身份来选择值类型或引用类型。

## 核心概念

默认优先使用 struct；只有需要共享身份、继承或引用生命周期时再使用 class。

## 最小代码或操作示例

```text
struct LessonValue { var minutes: Int }
final class LessonStore { var current = LessonValue(minutes: 5) }
```

## 3～5 分钟练习

让两个变量共享 LessonStore 并修改 current。

## 参考答案

两个变量引用同一实例，修改后都看到新的 minutes。

## 与上一课的联系

继承前两课的 class 与 struct 对比；本课只做建模选择；下一课可学习枚举关联值。

## 时效校验

时效校验：2026-09-17（Swift 当前官方语言书）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [The Swift Programming Language：Classes and Structures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/)

