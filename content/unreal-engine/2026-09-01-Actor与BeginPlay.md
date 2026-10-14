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

本课使用原 C++ 工程中的 HelloActor 类。先在 Source 的当前模块中建立 HelloActor.h，声明如下（generated.h 必须是最后一个 include）：

```cpp
#pragma once
#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "HelloActor.generated.h"

UCLASS()
class AHelloActor : public AActor
{
    GENERATED_BODY()
protected:
    virtual void BeginPlay() override;
};
```

下面放在同目录 HelloActor.cpp，文件顶部先写 #include "HelloActor.h"。如果工程已经生成了同名 Actor 类，保留原类声明，只替换其已有 BeginPlay 实现，不重复定义类或方法。编译后将该 Actor 类放入练习关卡，再运行观察日志。

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

## 时效校验

时效校验：2026-10-14（实际读取 Unreal Engine 5.8 当前 Actors 正文；AActor 派生类承载 BeginPlay，补齐原片段缺失的类声明和文件位置；保持生命周期与日志语义，未使用废弃 API。）

## 官方参考

- [Epic：Actors](https://dev.epicgames.com/documentation/en-us/unreal-engine/actors-in-unreal-engine)
