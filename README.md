# 渐进式编程课

一个按工作日持续更新的中文编程学习网站。十八条路线各自保持独立的课程序号和知识路径，每节课只聚焦一个主题，并提供最小代码示例、3～5 分钟练习与参考答案。

## 入口

- 公开学习网站：[https://study.fanxu12180618.chatgpt.site](https://study.fanxu12180618.chatgpt.site)
- 全站搜索：[https://study.fanxu12180618.chatgpt.site/search](https://study.fanxu12180618.chatgpt.site/search)
- 课程源文件：[`content/`](./content)

## 十八条学习路线

| 路线 | 课程索引 | 学习方向 |
| --- | --- | --- |
| KMP | [`content/kmp/README.md`](./content/kmp/README.md) | Kotlin Multiplatform、共享业务、Compose Multiplatform 与 Flow |
| HarmonyOS | [`content/harmonyos/README.md`](./content/harmonyos/README.md) | ArkUI、状态管理、数据服务、异步流程与 Hypium 测试 |
| Python | [`content/python/README.md`](./content/python/README.md) | 基础语法、数据结构、函数、模块与自动化 |
| Rust | [`content/rust/README.md`](./content/rust/README.md) | 类型、所有权、错误处理、并发与工程实践 |
| Flutter | [`content/flutter/README.md`](./content/flutter/README.md) | Widget、布局、状态、导航与应用架构 |
| HTML5 | [`content/html5/README.md`](./content/html5/README.md) | 语义结构、表单、媒体、可访问性与浏览器 API |
| React | [`content/react/README.md`](./content/react/README.md) | JSX、组件、Props、State、Hooks 与前端工程 |
| React Native | [`content/react-native/README.md`](./content/react-native/README.md) | 原生组件、布局、交互、导航与移动端适配 |
| Vue | [`content/vue/README.md`](./content/vue/README.md) | 模板、响应式状态、组件、路由与组合式 API |
| C++ | [`content/cpp/README.md`](./content/cpp/README.md) | 类型、函数、类、资源管理、STL 与现代 C++ |
| Java | [`content/java/README.md`](./content/java/README.md) | 基础语法、面向对象、集合、异常与并发 |
| Kotlin | [`content/kotlin/README.md`](./content/kotlin/README.md) | 类型、函数、空安全、集合、协程与应用开发 |
| C# | [`content/csharp/README.md`](./content/csharp/README.md) | C# 语法、面向对象、集合、异步与 .NET |
| Go（Golang） | [`content/golang/README.md`](./content/golang/README.md) | 函数、结构体、接口、并发与服务端工程 |
| Android | [`content/android/README.md`](./content/android/README.md) | Activity、界面、状态、导航、数据与 Jetpack Compose |
| Objective-C | [`content/objective-c/README.md`](./content/objective-c/README.md) | 消息发送、对象、属性、内存管理与运行时机制 |
| Swift | [`content/swift/README.md`](./content/swift/README.md) | 类型、可选值、函数、协议、并发与 Apple 平台开发 |
| SwiftUI | [`content/swiftui/README.md`](./content/swiftui/README.md) | View、状态、布局、导航、数据流与动画 |

## 课程文件约定

每条路线都使用相同的归档方式：

```text
content/<路线>/
├── README.md
└── YYYY-MM-DD-主题.md
```

- `README.md`：按课程序号排列的路线目录，每条记录包含课程链接和一句话摘要。
- `YYYY-MM-DD-主题.md`：当天完整课程，不覆盖或删除历史文件。
- 每节课包含：课程序号、知识点、用途或适用场景、核心概念、最小代码示例、3～5 分钟练习、参考答案、与上一课的联系。

## 自动更新规则

- 自动任务：`工作日十八路线编程课`。
- 更新时间：北京时间周一至周五 09:00。
- 周六、周日、法定节假日和调休休息日不更新，也不补课。
- 每个有效更新日，十八条路线各推进一课；当天文件已存在时只校验，不重复生成。
- 内容校验和网站构建都成功后，才会提交、推送并发布到公开网站。

## 本地查看与验证

环境要求：Node.js 22.13 或更高版本，并使用仓库现有依赖与锁文件。

```bash
pnpm install
pnpm validate:content
pnpm build
pnpm dev
```

开发地址默认由本地服务输出。提交课程前至少执行内容校验和生产构建，不要把静态内容校验表述为课程示例已经真实运行。

## 工程结构

```text
app/                         网站页面与路由
components/                  通用界面组件
content/                     十八条路线的 README 与课程 Markdown
lib/lessons.ts               路线注册、课程解析与检索
scripts/validate-content.mjs 课程日期、序号与结构校验
public/                      站点图片与图标
.openai/hosting.json         Sites 托管配置
```

## 验证边界

仓库构建会验证 Markdown 能被网站读取并生成页面，但不会自动执行课程里的 KMP、ArkTS、Python、Rust、Flutter、Web、JVM、.NET、C++、Go、Android 或 Apple 平台示例。课程示例是否可运行，需要在对应语言或平台工程中另行验证。
