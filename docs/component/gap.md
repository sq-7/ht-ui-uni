# Gap 间隔槽
一般用于页面布局时代替margin或者padding;或者充当（底部）占位元素。

## 基本使用

通过 `height` 属性设置标题 `background` 属性设置背景色。


```html
<ht-gap bg-color="#FFFFFF"></ht-gap>
```

## 自定义背景色


```html
<ht-gap bg-color="#4D80F0"></ht-gap>
```

## 自定义高度


```html
<ht-gap bg-color="#4D80F0" height="120rpx"></ht-gap>
```



## 底部安全区


```html
<ht-gap safe-area-bottom height="0"></ht-gap>
```

## Attributes

| 参数              | 说明      | 类型      | 可选值        | 默认值         | 最低版本 |
|-----------------|---------|---------|------------|-------------| -------- |
| height          | 高度      | `string`/`number`  | -          | 15       | -        |
| bgColor      | 背景颜色    | string  |            | transparent | -        |
| safeAreaBottom | 开启底部安全区  | boolean | true/false | false       | -        |

## 外部样式类

| 类名                 | 说明             | 最低版本 |
| -------------------- | ---------------- | -------- |
| custom-class         | 自定义样式 | -        |
