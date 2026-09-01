# 第 1 课：Node 与 Component

- 日期：2026-09-01
- 课程序号：第 1 课
- 知识点：`Node`、`Component` 与 `start`

## 用途

Cocos Creator 使用节点组织场景，并通过组件为节点添加行为。掌握节点与组件的关系后，就能继续处理移动、碰撞和交互。

## 核心概念

- Node 是场景树中的基本对象。
- Component 挂载在节点上，负责一类具体行为。
- TypeScript 类通过 `@ccclass` 注册为可挂载组件。
- `start` 会在组件首次启用时执行一次。

## 最小代码示例

```ts
import { _decorator, Component } from 'cc';

const { ccclass } = _decorator;

@ccclass('HelloCocos')
export class HelloCocos extends Component {
  start() {
    console.log(`节点名称：${this.node.name}`);
  }
}
```

## 3～5 分钟练习

创建组件 `PlayerInfo`，在 `start` 中输出当前节点的位置。

## 参考答案

```ts
import { _decorator, Component } from 'cc';

const { ccclass } = _decorator;

@ccclass('PlayerInfo')
export class PlayerInfo extends Component {
  start() {
    console.log(this.node.position);
  }
}
```

## 与上一课的联系

这是 Cocos Creator 引擎路线的第一课。下一课将学习节点的坐标、旋转与缩放。
