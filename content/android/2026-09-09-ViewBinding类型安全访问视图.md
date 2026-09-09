# 第 7 课：ViewBinding类型安全访问视图

- 日期：2026-09-09
- 课程序号：第 7 课
- 知识点：View Binding 与布局绑定类

## 用途

用生成的绑定类访问布局视图，减少手写 id 查找和类型转换。

## 核心概念

启用 View Binding 后，每个 XML 布局会生成对应绑定类；`inflate` 创建视图，`root` 作为 Activity 内容视图。

## 最小代码或操作示例

```kotlin
private lateinit var binding: ActivityMainBinding

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    binding = ActivityMainBinding.inflate(layoutInflater)
    setContentView(binding.root)
    binding.courseTitle.text = getString(R.string.course_title)
}
```

## 3～5 分钟练习

用绑定对象为 `startButton` 设置点击监听。

## 参考答案

使用 `binding.startButton.setOnClickListener { binding.courseTitle.text = "开始" }`。

## 与上一课的联系

上一课用 `findViewById` 手动连接 XML 视图；本课改用生成的类型安全访问入口。
