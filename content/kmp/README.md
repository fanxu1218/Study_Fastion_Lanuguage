# KMP 学习笔记

按从基础到进阶的顺序记录每日课程。

## 课程目录

1. [2026-07-17 · KMP 源码集与代码共享](./2026-07-17-KMP源码集与代码共享.md) — 认识 `commonMain`、平台源码集，以及哪些代码适合跨平台共享。
2. [2026-07-18 · KMP 目标与 Gradle 配置](./2026-07-18-KMP目标与Gradle配置.md) — 学会声明 Android、iOS 编译目标并理解目标与源码集的关系。
3. [2026-07-19 · expect 与 actual 平台实现](./2026-07-19-expect与actual平台实现.md) — 用共享声明连接 Android、iOS 的平台专属实现。
4. [2026-07-20 · commonTest 共享测试](./2026-07-20-commonTest共享测试.md) — 使用 `kotlin.test` 为共享业务逻辑编写跨平台测试。
5. [2026-07-21 · KMP 共享协程基础](./2026-07-21-KMP共享协程基础.md) — 用 `suspend` 描述共享异步任务，并把启动与取消交给平台生命周期。
6. [2026-07-22 · Flow 共享数据流](./2026-07-22-Flow共享数据流.md) — 区分单次异步结果与持续数据流，并用 `emit`、`collect` 传递变化。
7. [2026-07-23 · StateFlow 共享状态](./2026-07-23-StateFlow共享状态.md) — 用私有可变、公开只读的状态流统一维护当前业务状态。
8. [2026-07-24 · Kotlin Serialization 共享序列化](./2026-07-24-Kotlin-Serialization共享序列化.md) — 在共享层将 JSON 解析为统一的 Kotlin 数据模型。
9. [2026-07-25 · Ktor 共享网络请求](./2026-07-25-Ktor共享网络请求.md) — 配置共享 HTTP 客户端、平台引擎与 JSON 响应解析。
10. [2026-07-26 · Repository 数据层](./2026-07-26-Repository数据层.md) — 隔离网络 DTO 与业务模型，建立清晰的数据链路。
11. [2026-07-27 · 密封结果类型](./2026-07-27-密封结果类型.md) — 用穷尽类型表达成功与数据层归类的失败结果。
12. [2026-07-28 · 构造器依赖注入](./2026-07-28-构造器依赖注入.md) — 用接口、构造器和 Fake 让共享业务可替换、可测试。
13. [2026-07-29 · 共享依赖组装](./2026-07-29-共享依赖组装.md) — 在组合根中集中创建、复用并释放共享对象。
14. [2026-07-30 · 共享状态持有者](./2026-07-30-共享状态持有者.md) — 将 Repository 结果转换为互斥、可观察的统一 UI 状态。
15. [2026-07-31 · 测试共享状态](./2026-07-31-测试共享状态.md) — 使用 Fake Repository 和 `runTest` 验证状态持有者的成功、失败结果。
16. [2026-08-01 · 共享存储接口](./2026-08-01-共享存储接口.md) — 用最小接口隔离共享业务与平台键值存储。
17. [2026-08-02 · Android 偏好存储实现](./2026-08-02-Android偏好存储实现.md) — 在 `androidMain` 中用 `SharedPreferences` 实现共享存储契约。
18. [2026-08-03 · iOS 偏好存储实现](./2026-08-03-iOS偏好存储实现.md) — 在 `iosMain` 中用 `NSUserDefaults` 实现同一存储契约。
19. [2026-08-04 · Compose Multiplatform 共享 UI](./2026-08-04-Compose-Multiplatform共享UI.md) — 在 `commonMain` 中编写接收数据、发送事件的无状态共享组件。
20. [2026-08-05 · StateFlow 接入共享 UI](./2026-08-05-StateFlow接入共享UI.md) — 使用 `collectAsState()`、Route 与 Screen 构建单向数据流。
21. [2026-08-06 · Compose 平台入口](./2026-08-06-Compose平台入口.md) — 用 Android Activity 和 iOS ComposeUIViewController 承载同一个共享 `App()`。
22. [2026-08-07 · Compose 共享资源与本地化](./2026-08-07-Compose共享资源与本地化.md) — 使用 `composeResources` 和生成的 `Res.strings` 管理多平台文案。
23. [2026-08-08 · Compose 共享图片资源](./2026-08-08-Compose共享图片资源.md) — 使用 `drawable` 目录、生成的 `Res` 和 `painterResource` 共享图片。
24. [2026-08-09 · Compose 共享主题](./2026-08-09-Compose共享主题.md) — 用 `MaterialTheme` 统一亮色、深色配色并向组件提供设计令牌。
25. [2026-08-10 · Compose 共享 UI 测试](./2026-08-10-Compose共享UI测试.md) — 使用 v2 Compose UI 测试 API 验证共享界面与事件。
26. [2026-08-11 · Compose 共享页面导航](./2026-08-11-Compose共享页面导航.md) — 使用类型安全 Route、NavController 与 NavHost 复用跨平台页面跳转。
27. [2026-08-12 · Compose 类型安全路由传参](./2026-08-12-Compose类型安全路由传参.md) — 用可序列化 data class 路由传递最小 ID，并通过 toRoute 读取参数。
28. [2026-08-13 · Compose 导航返回栈](./2026-08-13-Compose导航返回栈.md) — 使用 popBackStack、popUpTo 和 inclusive 控制普通返回与一次性流程清栈。
29. [2026-08-14 · Compose 共享导航测试](./2026-08-14-Compose共享导航测试.md) — 在 commonTest 中执行真实点击并断言目标页面，验证共享 NavHost 跳转链路。
30. [2026-08-15 · Compose 共享 ViewModel](./2026-08-15-Compose共享ViewModel.md) — 在 commonMain 中用 ViewModel 和只读 StateFlow 管理、复用共享页面状态。
31. [2026-08-16 · StateFlow 生命周期感知收集](./2026-08-16-StateFlow生命周期感知收集.md) — 使用 collectAsStateWithLifecycle 让共享 UI 的状态订阅跟随生命周期。
32. [2026-08-17 · ViewModel 读取路由参数](./2026-08-17-ViewModel读取路由参数.md) — 通过 SavedStateHandle.toRoute 在目标页 ViewModel 中读取类型安全参数。
33. [2026-08-18 · ViewModel 按 ID 加载数据](./2026-08-18-ViewModel按ID加载数据.md) — 用路由 ID 调用 Repository，并通过 viewModelScope 将结果转换为共享 UI 状态。
34. [2026-08-19 · Repository Flow 转 StateFlow](./2026-08-19-RepositoryFlow转StateFlow.md) — 使用 stateIn 和 WhileSubscribed 将持续数据流转换为共享页面状态。
35. [2026-08-20 · combine 合并多个 Flow](./2026-08-20-combine合并多个Flow.md) — 合并多个 Repository 的最新值，并统一转换为页面 StateFlow。
36. [2026-08-21 · catch 转换 Flow 异常](./2026-08-21-catch转换Flow异常.md) — 使用 catch 将 Repository 上游异常转换为可渲染的错误 UI 状态。
37. [2026-08-22 · retryWhen 有限重试](./2026-08-22-retryWhen有限重试.md) — 仅对可恢复异常进行有限次数延迟重试，最终失败交给 catch 转换。
38. [2026-08-24 · debounce 处理搜索输入](./2026-08-24-debounce处理搜索输入.md) — 等待输入稳定后只发送最新搜索词，减少高频无效查询。
39. [2026-08-25 · flatMapLatest 只保留最新搜索](./2026-08-25-flatMapLatest只保留最新搜索.md) — 搜索词变化时取消旧查询 Flow，只继续接收最新搜索结果。
40. [2026-08-26 · distinctUntilChanged 过滤重复输入](./2026-08-26-distinctUntilChanged过滤重复输入.md) — 规范化搜索词后过滤连续重复值，避免重新发起相同查询。
41. [2026-08-27 · onStart 发送加载状态](./2026-08-27-onStart发送加载状态.md) — 在每次搜索 Flow 开始收集前发送 Loading，让加载与结果共享同一状态流。
42. [2026-08-28 · onEach 观察状态变化](./2026-08-28-onEach观察状态变化.md) — 在状态继续向下游传递前记录每个值，不改变 UI 消费的业务状态。
43. [2026-08-31 · launchIn 启动 Flow 收集](./2026-08-31-launchIn启动Flow收集.md) — 在明确的协程作用域中启动冷 Flow，并让收集随生命周期取消。
44. [2026-09-01 · shareIn 共享上游 Flow](./2026-09-01-shareIn共享上游Flow.md) — 让多个订阅者在明确生命周期内共享同一次昂贵上游收集。
45. [2026-09-02：状态流与事件流的语义选择](./2026-09-02-状态流与事件流的语义选择.md)——避免把连续两次相同操作误当成同一份状态。
46. [2026-09-03：SharedFlow订阅时机测试](./2026-09-03-SharedFlow订阅时机测试.md)——用确定的调度步骤验证晚订阅者不会收到 replay=0 的历史事件。
