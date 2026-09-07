# 第 6 课：TextInput受控输入

- 日期：2026-09-07
- 课程序号：第 6 课
- 知识点：value 与 onChangeText

## 用途

让用户编辑并实时显示练习主题。

## 核心概念

value 与 onChangeText用于保持示例中的数据或操作关系清晰；本课只处理这一项，不引入额外状态或自动化。

## 最小代码或操作示例

```jsx
<TextInput value={topic} onChangeText={setTopic} placeholder="主题" />
```

## 3～5 分钟练习

修改示例中的一个输入值，先预测结果，再在对应运行环境或软件副本中执行。

## 参考答案

调用 setTopic("") 会同时清空输入框和显示文字。

## 与上一课的联系

沿用上一课已经建立的最小示例，本课只增加这一项核心能力。

## 参考资料

- [官方文档：TextInput受控输入](https://reactnative.dev/docs/textinput)（2026-09-07 核对）。
