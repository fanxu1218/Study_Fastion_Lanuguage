# 第 4 课：Pressable点击与按压反馈

- 日期：2026-09-03
- 课程序号：第 4 课
- 知识点：onPress、pressed 与无障碍角色

## 用途

把静态文字卡片变成有按压反馈的操作入口。

## 核心概念

- onPress 接收回调；style 也可接收函数，用 pressed 计算瞬时按压样式。
- pressed 是交互状态，不代表业务操作成功；操作结果应由真实数据决定。

## 最小代码或操作示例

```jsx
import { Alert, Pressable, Text, View } from "react-native";
export default function App() {
  return <View style={{ padding: 24, marginTop: 40 }}>
    <Pressable
      accessibilityRole="button"
      onPress={() => Alert.alert("开始练习")}
      style={({ pressed }) => ({
        padding: 16,
        backgroundColor: pressed ? "#D0E5FF" : "#EAF2FF"
      })}>
      <Text>开始练习</Text>
    </Pressable>
  </View>;
}
```

## 3～5 分钟练习

将反馈改成按下时 opacity=0.6、松开后为 1；保留原来的背景色和回调。

## 参考答案

```jsx
// 在 style 回调返回的对象内新增：
opacity: pressed ? 0.6 : 1
// 按下时变淡，松开恢复；正常点击会执行 Alert。
```

## 与上一课的联系

上一课学习样式对象；本课根据组件提供的按压状态动态生成样式。

## 参考资料

- [官方文档：Pressable点击与按压反馈](https://reactnative.dev/docs/next/pressable)（2026-09-03 核对；以文档标注版本及本机界面为准）。
