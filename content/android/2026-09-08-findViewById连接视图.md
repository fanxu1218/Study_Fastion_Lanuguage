# 第 6 课：findViewById连接视图

- 日期：2026-09-08
- 课程序号：第 6 课
- 知识点：视图 id 与 findViewById

## 用途

让 Activity 获取 XML 中的 TextView，并在代码中修改文字。

## 核心概念

XML 的 `android:id` 生成资源标识；`findViewById` 在已经设置的布局中查找对应视图。

## 最小代码或操作示例

```kotlin
setContentView(R.layout.activity_main)
val title = findViewById<TextView>(R.id.courseTitle)
title.text = getString(R.string.course_title)
```

## 3～5 分钟练习

为按钮设置 `startButton` id，并在 Activity 中取得它。

## 参考答案

XML 使用 `android:id="@+id/startButton"`，代码使用 `findViewById<Button>(R.id.startButton)`。

## 与上一课的联系

上一课把文字移入字符串资源；本课从 Activity 找到显示该资源的视图。
