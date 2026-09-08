# 第 6 课：GetKeyDown触发一次动作

- 日期：2026-09-08
- 课程序号：第 6 课
- 知识点：Input.GetKeyDown

## 用途

按一次空格键只触发一次跳跃或提示动作。

## 核心概念

`GetKeyDown` 只在按键按下的那一帧返回 true，适合单次动作；持续移动仍应使用连续输入值。

## 最小代码或操作示例

```csharp
void Update()
{
    if (Input.GetKeyDown(KeyCode.Space))
        Debug.Log("Jump");
}
```

## 3～5 分钟练习

把触发键改为回车键，并在 Console 观察一次按键只输出一次。

## 参考答案

把 `KeyCode.Space` 改为 `KeyCode.Return`。

## 与上一课的联系

上一课读取持续输入控制移动；本课区分只应在按下瞬间触发的动作。
