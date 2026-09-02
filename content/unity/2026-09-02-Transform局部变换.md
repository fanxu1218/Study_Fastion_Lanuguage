# 第 2 课：Transform局部变换

- 日期：2026-09-02
- 课程序号：第 2 课
- 知识点：localPosition、localEulerAngles 与 localScale

## 用途

相对父对象摆放一个游戏物体。

## 核心概念

- localPosition 相对父对象，position 表示世界位置。
- localEulerAngles 使用角度；localScale 是相对父对象的缩放倍数。

## 最小代码或操作示例

```csharp
using UnityEngine;
public class PlaceCube : MonoBehaviour
{
    private void Start()
    {
        transform.localPosition = new Vector3(2, 0, 0);
        transform.localEulerAngles = new Vector3(0, 45, 0);
        transform.localScale = Vector3.one;
    }
}
```

## 3～5 分钟练习

将 PlaceCube.cs 挂在空父对象下的 Cube 上，移动父对象；观察局部 X 仍为 2，再把立方体缩放为一半。

## 参考答案

```csharp
transform.localScale = new Vector3(0.5f, 0.5f, 0.5f);
// 父对象移动后，子对象世界位置变化，局部位置仍为 (2, 0, 0)。
```

## 与上一课的联系

上一课获取 Transform 并打印位置；本课设置局部变换，区分局部与世界坐标。
