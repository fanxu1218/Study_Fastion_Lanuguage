# 第 14 课：checkValidity触发表单校验

- 日期：2026-09-17
- 课程序号：第 14 课
- 知识点：checkValidity触发表单校验

## 用途

在提交前用浏览器约束校验判断表单是否有效。

## 核心概念

checkValidity 返回布尔值，并在无效控件上触发 invalid 事件。

## 最小代码或操作示例

```text
const form = document.querySelector("form")
if (!form.checkValidity()) {
  form.reportValidity()
}
```

## 3～5 分钟练习

给输入框设置 required 后留空测试。

## 参考答案

checkValidity 返回 false，reportValidity 显示浏览器提示。

## 与上一课的联系

继承上一课的自定义校验消息；本课只增加主动检查；下一课可在输入时清除自定义消息。

## 时效校验

时效校验：2026-09-17（HTML Living Standard 当前约束校验 API）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [WHATWG HTML：Constraint validation API](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api)

