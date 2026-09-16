# 第 13 课：typeswitch处理多种实现

- 日期：2026-09-16
- 课程序号：第 13 课
- 知识点：typeswitch处理多种实现

## 用途

根据接口值的动态类型执行不同逻辑。

## 核心概念

type switch 使用 v := x.(type)；每个 case 中 v 具有对应具体类型。

## 最小代码或操作示例

```text
switch v := item.(type) {
case Lesson:
    fmt.Println(v.Name())
default:
    fmt.Println("unknown")
}
```

## 3～5 分钟练习

增加 *Lesson 分支。

## 参考答案

case *Lesson: fmt.Println(v.Name())

## 与上一课的联系

继承上一课的类型断言；本课只增加多类型分支；下一课可定义错误接口。

## 时效校验

时效校验：2026-09-16（Go 当前官方教程）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [A Tour of Go：Type switches](https://go.dev/tour/methods/16)
