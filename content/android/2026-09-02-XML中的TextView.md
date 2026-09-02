# 第 2 课：XML中的TextView

- 日期：2026-09-02
- 课程序号：第 2 课
- 知识点：布局资源、尺寸与文字单位

## 用途

在上一课 Activity 中显示一条可读文字。

## 核心概念

- 布局文件放在 app/src/main/res/layout。
- 宽高用 dp 或布局常量，文字大小用 sp；正式应用文案放进 strings.xml。

## 最小代码或操作示例

```xml
<!-- res/layout/activity_main.xml；沿用上一课 setContentView -->
<TextView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:text="今日 Android 练习"
    android:textSize="20sp"
    android:padding="16dp" />
```

## 3～5 分钟练习

把硬编码文字移入名为 lesson_title 的字符串资源。

## 参考答案

```xml
<!-- res/values/strings.xml 的 resources 内新增 -->
<string name="lesson_title">今日 Android 练习</string>
<!-- activity_main.xml 的 TextView 属性改为： -->
<!-- android:text="@string/lesson_title" -->
```

## 与上一课的联系

上一课由 Activity 加载布局资源；本课补齐资源内容，继续使用已有 Activity 和主题配置。
