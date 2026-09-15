# 第 12 课：RefreshControl下拉刷新

- 日期：2026-09-15
- 课程序号：第 12 课
- 知识点：RefreshControl 与 refreshing 状态

## 用途

为课程 FlatList 增加明确的下拉刷新反馈。

## 核心概念

refreshing 是受控布尔值；onRefresh 启动任务，结束后必须恢复 false。

## 最小代码或操作示例

```tsx
const [refreshing, setRefreshing] = useState(false);
<FlatList
  data={lessons}
  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={reload} />}
/>
```

## 3～5 分钟练习

在 reload 中先设为 true，结束后设为 false。

## 参考答案

async function reload() { setRefreshing(true); await load(); setRefreshing(false); }

## 与上一课的联系

继承上一课带稳定键的 FlatList；本课只增加刷新交互状态；下一课可处理刷新失败提示。

## 时效校验

时效校验：2026-09-15（React Native 0.82 当前文档）。已打开并核对下列官方文档；示例未使用已废弃接口。

## 官方参考

- [React Native：RefreshControl](https://reactnative.dev/docs/refreshcontrol)
