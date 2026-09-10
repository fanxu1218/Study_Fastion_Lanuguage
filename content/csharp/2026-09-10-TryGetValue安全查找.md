# 第 9 课：TryGetValue安全查找

- 日期：2026-09-10
- 课程序号：第 9 课
- 知识点：Dictionary.TryGetValue

## 用途

在键可能不存在时完成一次安全查找。

## 核心概念

返回布尔值表示是否找到，并通过 `out` 返回值。

## 最小代码或操作示例

```csharp
var scores = new Dictionary<string, int> { ["C#"] = 90 };
if (scores.TryGetValue("C#", out int score))
    Console.WriteLine(score);
```

## 3～5 分钟练习

查找不存在的 `Rust`，失败时打印 `0`。

## 参考答案

在 `else` 分支打印 `0`。

## 与上一课的联系

上一课创建字典；本课安全处理键缺失。
