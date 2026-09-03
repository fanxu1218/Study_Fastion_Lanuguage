# 第 3 课：HStack与Spacer横向布局

- 日期：2026-09-03
- 课程序号：第 3 课
- 知识点：横向排列与剩余空间

## 用途

制作左侧标题、右侧状态的课程行。

## 核心概念

- HStack 横向排列子视图，Spacer 在允许的主轴空间中伸展。
- maxWidth: .infinity 表示在父级给出的宽度内尽可能伸展，不等于强制使用整块屏幕宽度。

## 最小代码或操作示例

```swift
import SwiftUI
struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Text("SwiftUI 基础")
                Spacer()
                Text("待练习")
            }
            .frame(maxWidth: .infinity)
            Text("完成一个布局练习")
        }
        .padding()
    }
}
```

## 3～5 分钟练习

将状态换成“已完成”，再增加第二个 HStack，标题为“下一课”、状态为“未开始”。

## 参考答案

```swift
HStack {
    Text("下一课")
    Spacer()
    Text("未开始")
}
.frame(maxWidth: .infinity)
// 放入同一个 VStack；两行右侧状态应靠容器右侧排列。
```

## 与上一课的联系

上一课学习 VStack；本课在纵向容器中嵌套横向行，不新增另一份业务完成状态。
