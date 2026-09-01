# 第 1 课：GameObject 与 MonoBehaviour

- 日期：2026-09-01
- 课程序号：第 1 课
- 知识点：`GameObject`、组件与 `MonoBehaviour`

## 用途

Unity 使用 GameObject 表示场景中的对象，并通过组件为对象添加能力。游戏脚本通常继承 `MonoBehaviour`，从而接入引擎生命周期。

## 核心概念

- GameObject 是场景中角色、灯光、相机等对象的容器。
- Transform 是每个 GameObject 都拥有的基础组件。
- 自定义 C# 脚本可以作为组件挂到 GameObject 上。
- `Start` 会在组件首次启用、第一帧更新前调用。

## 最小代码示例

```csharp
using UnityEngine;

public class HelloUnity : MonoBehaviour
{
    private void Start()
    {
        Debug.Log($"对象名称：{gameObject.name}");
    }
}
```

## 3～5 分钟练习

创建脚本 `PlayerInfo`，在 `Start` 中输出当前 GameObject 的位置。

## 参考答案

```csharp
using UnityEngine;

public class PlayerInfo : MonoBehaviour
{
    private void Start()
    {
        Debug.Log($"当前位置：{transform.position}");
    }
}
```

## 与上一课的联系

这是 Unity 引擎路线的第一课。下一课将学习 Transform 的位置、旋转与缩放。
