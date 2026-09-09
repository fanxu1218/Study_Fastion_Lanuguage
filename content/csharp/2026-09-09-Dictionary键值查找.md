# 第 8 课：Dictionary键值查找

- 日期：2026-09-09
- 课程序号：第 8 课
- 知识点：Dictionary<TKey, TValue>

## 用途

通过课程名称直接查找对应的练习时长。

## 核心概念

字典中的键必须唯一；`TryGetValue` 同时返回是否存在和对应值，避免重复查找。

## 最小代码或操作示例

```csharp
var minutes = new Dictionary<string, int> { ["C#"] = 20 };
if (minutes.TryGetValue("C#", out int value))
    Console.WriteLine(value);
```

## 3～5 分钟练习

查询不存在的“Rust”，并在失败时输出 0。

## 参考答案

在 `else` 分支调用 `Console.WriteLine(0)`。

## 与上一课的联系

上一课用 `List` 按顺序保存记录；本课通过唯一键直接定位记录。
