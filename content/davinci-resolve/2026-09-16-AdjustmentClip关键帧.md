# 第 12 课：AdjustmentClip关键帧

- 日期：2026-09-16
- 课程序号：第 12 课
- 知识点：AdjustmentClip关键帧

## 用途

让统一效果随时间逐渐增强。

## 核心概念

调整片段自身可在 Inspector 中记录参数关键帧，下层源片段保持不变。

## 最小代码或操作示例

```text
1. 选中 Adjustment Clip。
2. 在起点为效果参数添加关键帧并设为 0。
3. 到片尾设为目标值。
```

## 3～5 分钟练习

把第二个关键帧移到片段中点。

## 参考答案

效果会在前半段完成变化，后半段保持目标值。

## 与上一课的联系

继承上一课的 Adjustment Clip；本课只增加参数动画；下一课可调整缓动。

## 时效校验

时效校验：2026-09-16（DaVinci Resolve 20 官方 Beginner’s Guide）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [Blackmagic Design：DaVinci Resolve 20 Beginner’s Guide](https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Beginners-Guide.pdf)
