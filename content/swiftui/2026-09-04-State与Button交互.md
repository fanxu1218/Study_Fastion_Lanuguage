# 第 4 课：State与Button交互

- 日期：2026-09-04
- 课程序号：第 4 课
- 知识点：@State、Button 与视图刷新

## 用途

把静态课程行变为点击计数练习。

## 核心概念

@State 保存视图拥有的交互值；按钮 action 修改它，body 根据新值重新描述内容。重建视图身份后不能把它当作持久存储。

## 最小代码或操作示例

```swift
import SwiftUI
struct ContentView: View {
    @State private var count = 0
    var body: some View {
        VStack(spacing: 12) {
            HStack { Text("练习次数"); Spacer(); Text("\(count)") }
            Button("增加一次") { count += 1 }
        }.padding()
    }
}
```

## 3～5 分钟练习

增加一个重置按钮，并验证增加三次再重置。

## 参考答案

在 VStack 内增加 Button("重置") { count = 0 }。显示值依次为 1、2、3、0。

## 与上一课的联系

上一课用 HStack 和 Spacer 排列信息；本课给右侧显示值增加单一状态来源。
