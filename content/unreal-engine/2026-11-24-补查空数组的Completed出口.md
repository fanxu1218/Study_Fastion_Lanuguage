# 第 54 课：补查空数组的Completed出口

- 日期：2026-11-24
- 课程序号：第 54 课
- 知识点：零次循环体与一次完成出口分开观察

## 用途或适用场景

补齐第53课按输入表中原空数组的完成来源。

## 核心概念

数组为空时Loop Body没有元素可执行，但同步For Each Loop仍需观察Completed；结果为空不能单独证明完成出口到达。

## 最小代码或操作示例

在第52课完整个人副本及第53课表中：
```text
1. 打开原WBP_LessonCount活动图，固定原ST_Lesson空数组、阈值和调用入口。
2. 只用原已有观察方式实际调用一次；对照For Each Loop的Loop Body与Completed连接，不新增节点。
3. 分别记录Length、Result内容/顺序、逐项Title次数及Completed实际次数，未到达的项写具体缺口。
4. 将本轮结果附回空数组行，A/B仍使用各自报告；无工程写未执行。
```
不加Delay、不重造同名蓝图，也不用Compile成功代替此次空数组调用。

## 3～5 分钟练习

Length=0且没有Title输出，已经证明Completed执行一次吗？

## 参考答案

没有；这两项只能说明没有元素输出，Completed需要本轮实际到达记录。

## 与上一课的联系

继承第52课三输入回归与第53课逐输入归档；本课只补查空数组完成出口。下一课可将该轮执行引脚来源与输出结果关联归档。

## 时效校验

时效校验：2026-11-24（实际读取Epic当前Array Containers、For Each Loop/Completed及Collapsing Graphs正文；核对同步遍历完成出口，沿原ST_Lesson/WBP_LessonCount，无新节点/插件。）

## 官方参考

- [Epic：Collapsing Graphs](https://dev.epicgames.com/documentation/en-us/unreal-engine/collapsing-graphs-in-unreal-engine)
- [Epic UE5.9：Array Containers](https://dev.epicgames.com/documentation/unreal-engine/array-containers-in-unreal-engine)
- [Epic：For Each Loop/Completed](https://dev.epicgames.com/documentation/unreal-engine/designer-02-create-a-key-in-unreal-engine?lang=zh-CN)
