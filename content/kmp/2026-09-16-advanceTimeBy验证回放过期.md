# 第 55 课：advanceTimeBy验证回放过期

- 日期：2026-09-16
- 课程序号：第 55 课
- 知识点：advanceTimeBy验证回放过期

## 用途

用虚拟时间精确推进 replayExpirationMillis 边界。

## 核心概念

advanceTimeBy 推进测试调度器时间，但不会自动执行目标时刻的任务。

## 最小代码或操作示例

```text
runTest {
  advanceTimeBy(1_000)
  runCurrent()
}
```

## 3～5 分钟练习

先推进 999ms，再确认缓存尚未过期。

## 参考答案

advanceTimeBy(999); runCurrent() 后检查仍可收到回放值。

## 与上一课的联系

继承上一课的回放寿命；本课只增加虚拟时间验证；下一课可覆盖边界前后两个断言。

## 时效校验

时效校验：2026-09-16（kotlinx-coroutines-test 当前 API）。已打开并核对下列官方资料；未发现本课主方案存在废弃标记。

## 官方参考

- [kotlinx.coroutines API：advanceTimeBy](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-test/kotlinx.coroutines.test/advance-time-by.html)
