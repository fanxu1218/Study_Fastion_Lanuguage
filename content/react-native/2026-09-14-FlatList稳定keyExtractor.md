# 第 11 课：FlatList稳定keyExtractor

- 日期：2026-09-14
- 课程序号：第 11 课
- 知识点：列表键与项目身份

## 用途

让列表在插入、删除和重排时正确复用每个项目。

## 核心概念

`keyExtractor` 应返回数据中的稳定唯一标识，不能依赖会变化的数组索引。

## 最小代码或操作示例

```tsx
<FlatList
  data={lessons}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.title}</Text>}
/>
```

## 3～5 分钟练习

为 `{ id: 'rn-11', title: '列表键' }` 数据提供键提取函数。

## 参考答案

`keyExtractor={(item) => item.id}`。

## 与上一课的联系

上一课为列表项目加入分隔线；本课保证项目在更新时身份稳定。

## 时效校验

时效校验：2026-09-15（React Native 0.82 当前文档）。已复核本课用法，未发现废弃标记；本轮官方资料见下方链接。

## 官方参考

- [React Native：RefreshControl](https://reactnative.dev/docs/refreshcontrol)
