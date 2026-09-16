# 第 13 课：setCustomValidity自定义提示

- 日期：2026-09-16
- 课程序号：第 13 课
- 知识点：setCustomValidity自定义提示

## 用途

为 pattern 失败提供更清楚的错误说明。

## 核心概念

setCustomValidity 非空时元素无效；恢复有效时必须清空字符串。

## 最小代码或操作示例

```text
const input = document.querySelector("#code")
input.addEventListener("input", () => {
  input.setCustomValidity(input.validity.patternMismatch ? "请输入3位数字" : "")
})
```

## 3～5 分钟练习

把提示改成包含示例 123。

## 参考答案

将错误文本改为“请输入3位数字，例如123”。

## 与上一课的联系

继承上一课的 pattern；本课只增加校验提示；下一课可在提交时聚焦首个错误。

## 时效校验

时效校验：2026-09-16（WHATWG HTML Living Standard 当前规范）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [WHATWG HTML：Constraint validation API](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api)
