# 第 4 课：SerializeField暴露旋转速度

- 日期：2026-09-04
- 课程序号：第 4 课
- 知识点：私有字段与Inspector配置

## 用途

让两个 Cube 使用不同转速而无需复制脚本。

## 核心概念

SerializeField 使符合规则的私有字段被序列化并显示在 Inspector。已有组件的保存值不会因修改字段初始化值而自动全部替换。

## 最小代码或操作示例

```csharp
using UnityEngine;
public class ConfigurableSpin : MonoBehaviour {
    [SerializeField] private float degreesPerSecond = 90f;
    private void Update() {
        transform.Rotate(0f, degreesPerSecond * Time.deltaTime, 0f, Space.Self);
    }
}
```

## 3～5 分钟练习

保存为 ConfigurableSpin.cs，分别挂到两个 Cube，移除重复旋转脚本；运行前在 Inspector 设为 45 和 -45。

## 参考答案

两者速率大小相同、方向相反；2 秒约转 90 度和 -90 度。退出播放后再编辑可保留场景配置。

## 与上一课的联系

上一课硬编码转速，本课把转速变成各组件可独立配置的输入。

## 参考资料

- [官方文档：SerializeField暴露旋转速度](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/SerializeField.html)（2026-09-04 核对；以文档标注版本及本机界面为准）。
