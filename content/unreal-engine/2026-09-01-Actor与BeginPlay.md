# 第 1 课：Actor 与 BeginPlay

- 日期：2026-09-01
- 课程序号：第 1 课
- 知识点：`AActor`、关卡对象与 `BeginPlay`

## 用途

Actor 是虚幻引擎关卡中可以放置或生成的基础对象。自定义 Actor 后，可以为机关、道具和游戏规则添加行为。

## 核心概念

- `AActor` 是许多关卡对象的基础类。
- Actor 可以拥有多个组件，例如网格、碰撞体和相机。
- `BeginPlay` 会在游戏开始或 Actor 进入游戏时调用。
- 重写生命周期函数时应先调用父类实现。

## 最小代码示例

```cpp
void AHelloActor::BeginPlay()
{
    Super::BeginPlay();
    UE_LOG(LogTemp, Display, TEXT("Hello Unreal Engine"));
}
```

## 3～5 分钟练习

把日志内容改成“Actor 已进入游戏”，并在开头输出当前 Actor 的名称。

## 参考答案

```cpp
void AHelloActor::BeginPlay()
{
    Super::BeginPlay();
    UE_LOG(LogTemp, Display, TEXT("%s：Actor 已进入游戏"), *GetName());
}
```

## 与上一课的联系

这是虚幻引擎路线的第一课。下一课将学习 Actor Component 与根组件。
