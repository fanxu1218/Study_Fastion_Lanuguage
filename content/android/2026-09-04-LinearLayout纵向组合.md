# 第 4 课：LinearLayout纵向组合

- 日期：2026-09-04
- 课程序号：第 4 课
- 知识点：布局容器与子视图顺序

## 用途

把提示文字和按钮放在同一个页面。

## 核心概念

vertical 按声明顺序纵向布局；wrap_content 让控件按内容测量。沿用上一课 Activity 点击监听，保留 start_button ID。

## 最小代码或操作示例

```xml
<!-- activity_main.xml -->
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent" android:layout_height="match_parent"
    android:orientation="vertical" android:padding="24dp">
    <TextView android:layout_width="match_parent"
        android:layout_height="wrap_content" android:text="@string/start_lesson" />
    <Button android:id="@+id/start_button"
        android:layout_width="match_parent" android:layout_height="wrap_content"
        android:text="@string/start_lesson" />
</LinearLayout>
```

## 3～5 分钟练习

在 Button 上增加 android:layout_marginTop="16dp"；确认原点击监听仍有效。

## 参考答案

按钮与上方文字拉开 16dp；点击后仅按钮文字变为上一课 lesson_started，TextView 不变。

## 与上一课的联系

上一课只有根 Button；本课加入容器，继续通过原 ID 找到按钮。
