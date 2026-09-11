# 第 9 课：Inspector调整片段透明度

- 日期：2026-09-11
- 课程序号：第 9 课
- 知识点：Composite Opacity

## 用途

让上层片段半透明，以便观察下层画面。

## 核心概念

Inspector 的 Composite 区域用 Opacity 控制所选片段整体可见度。

## 最小代码或操作示例

```text
1. 在 Edit 页把两个片段上下叠放。
2. 选择上层片段，打开 Inspector > Composite。
3. 把 Opacity 从 100 调到 50。
```

## 3～5 分钟练习

比较 25、50、100 三个数值。

## 参考答案

数值越低，下层画面越明显；100 完全不透明。

## 与上一课的联系

上一课裁切可见边界；本课调整整个片段的可见强度。

## 参考资料

- [Blackmagic Design 官方《DaVinci Resolve 20 Colorist Guide》](https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Colorist-Guide.pdf)（2026-09-11 核对）。
