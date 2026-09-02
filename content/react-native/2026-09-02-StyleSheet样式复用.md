# 第 3 课：StyleSheet样式复用

- 日期：2026-09-02
- 课程序号：第 3 课
- 知识点：StyleSheet.create 与样式数组

## 用途

整理重复布局和文字样式。

## 核心概念

- 样式对象用驼峰属性名。
- style 数组可组合样式，后面的同名属性覆盖前面。

## 最小代码或操作示例

```jsx
import { View, Text, StyleSheet } from "react-native";
export default function App() {
  return <View style={styles.row}>
    <Text style={styles.label}>今日</Text>
    <Text style={[styles.label, styles.active]}>第 3 课</Text>
  </View>;
}
const styles = StyleSheet.create({
  row: { flexDirection: "row", padding: 16 },
  label: { fontSize: 18, color: "#333333", marginRight: 12 },
  active: { color: "#0066CC" },
});
```

## 3～5 分钟练习

让第二段文字在保留字号和颜色的同时变粗。

## 参考答案

```jsx
// 在 StyleSheet.create 内添加
strong: { fontWeight: "bold" },
// 第二个 Text 改成 style={[styles.label, styles.active, styles.strong]}
```

## 与上一课的联系

上一课用 Flexbox 排列组件；本课把这些布局属性整理成可复用样式。
