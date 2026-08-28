# 第 14 课：@Provide 与 @Consume 组件树共享状态

- 日期：2026-07-21
- 知识点：`@Provide`、`@Consume`
- 适用场景：祖先组件已经拿到状态，但中间会经过多层组件，不想一层层用 `@Prop` 往下透传

承接上一课的 `PersistentStorage`：上一课解决了“状态能否跨页面、跨重启保存”；这一课往组件树内部收一层，解决“状态已经在父层了，子孙组件怎么拿到，而且不需要层层传参”。

## 1. `@Provide` / `@Consume` 解决透传过深的问题

当组件层级变深时，如果每一层都只负责把参数继续传下去，代码会很快变得啰嗦。  
`@Provide` 可以在祖先组件中提供一份状态，后代组件通过 `@Consume` 直接消费它。

可以把它理解成：

```text
祖先组件声明共享状态
-> 用 @Provide 暴露给后代
-> 中间组件不必重复传参
-> 后代组件用 @Consume 直接读取/修改
```

它的作用域是“当前组件树”，比 `AppStorage` 更轻，适合页面内或模块内共享。

## 2. 最小示例

```ts
@Component
struct TitlePanel {
  @Consume('themeLabel') themeLabel: string;

  build() {
    Text(`当前主题：${this.themeLabel}`)
      .fontSize(20)
  }
}

@Entry
@Component
struct SettingsPage {
  @Provide('themeLabel') themeLabel: string = '浅色模式';

  build() {
    Column({ space: 16 }) {
      TitlePanel()

      Button('切换主题')
        .onClick(() => {
          this.themeLabel = this.themeLabel === '浅色模式'
            ? '深色模式'
            : '浅色模式';
        })
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```

这里 `TitlePanel` 没有通过 `@Prop` 接参数，但仍然能读到祖先组件提供的 `themeLabel`。  
如果页面范围内共享即可，用 `@Provide` / `@Consume` 会比直接上 `AppStorage` 更合适。

## 3～5 分钟练习

把上面的 `themeLabel` 改成“当前字号”练习：

1. 祖先组件提供 `fontSizeLevel`，默认值为 `'标准'`。
2. 子组件显示“当前字号：标准”。
3. 点击按钮后在 `'标准'` 和 `'大号'` 之间切换。
4. 不要改成 `@Prop` 透传，保持 `@Provide` / `@Consume` 写法。

## 参考答案

```ts
@Component
struct FontPanel {
  @Consume('fontSizeLevel') fontSizeLevel: string;

  build() {
    Text(`当前字号：${this.fontSizeLevel}`)
      .fontSize(20)
  }
}

@Entry
@Component
struct FontPage {
  @Provide('fontSizeLevel') fontSizeLevel: string = '标准';

  build() {
    Column({ space: 16 }) {
      FontPanel()

      Button('切换字号')
        .onClick(() => {
          this.fontSizeLevel = this.fontSizeLevel === '标准' ? '大号' : '标准';
        })
    }
  }
}
```

重点不是“少写一个参数”，而是明确状态属于当前组件树，而不是应用全局。

## 与上一课的联系

上一课解决的是“共享状态是否能跨页面、跨重启继续存在”；这一课解决的是“当状态只在当前页面组件树里流动时，怎样避免多层透传”。后面如果你看到某个状态既要页面内共享、又要应用重启恢复，就能判断它应该放在组件树、`AppStorage` 还是 `PersistentStorage` 这一层。
