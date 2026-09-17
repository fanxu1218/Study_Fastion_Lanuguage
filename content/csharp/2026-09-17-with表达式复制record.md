# 第 14 课：with表达式复制record

- 日期：2026-09-17
- 课程序号：第 14 课
- 知识点：with表达式复制record

## 用途

用 with 基于现有 record 创建只修改部分属性的新值。

## 核心概念

with 表达式执行非破坏性修改，原 record 保持不变。

## 最小代码或操作示例

```text
var first = new Lesson { Title = "C#", Minutes = 5 };
var longer = first with { Minutes = 10 };
```

## 3～5 分钟练习

比较 first 和 longer 的 Minutes。

## 参考答案

first 为 5，longer 为 10。

## 与上一课的联系

继承上一课的 record 值对象；本课只增加 with 复制；下一课可解构 record。

## 时效校验

时效校验：2026-09-17（NET 当前 C# 参考）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [Microsoft Learn：Records](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)
