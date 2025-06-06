# Layout 布局

用于快速进行布局。  


## 基本用法

`Layout` 组件提供了 `24列` 栅格，通过在 `ht-col` 上设置 `span` 属性，通过计算当前内容所占百分比进行分栏。

注意: 分栏布局仅提供布局，即元素宽度，内部样式用户可根据需要通过 `custom-class` 或 `修改内部标签` 来自行定义样式。

```html
<ht-row>
  <ht-col :span="24"><view class="bg-dark1">span: 24</view></ht-col>
</ht-row>
<ht-row>
  <ht-col :span="12"><view class="bg-dark">span: 12</view></ht-col>
  <ht-col :span="12"><view class="bg-light">span: 12</view></ht-col>
</ht-row>
<ht-row>
  <ht-col :span="8"><view class="bg-dark">span: 8</view></ht-col>
  <ht-col :span="8"><view class="bg-light">span: 8</view></ht-col>
  <ht-col :span="8"><view class="bg-dark">span: 8</view></ht-col>
</ht-row>
<ht-row>
  <ht-col :span="6"><view class="bg-dark">span: 6</view></ht-col>
  <ht-col :span="6"><view class="bg-light">span: 6</view></ht-col>
  <ht-col :span="6"><view class="bg-dark">span: 6</view></ht-col>
  <ht-col :span="6"><view class="bg-light">span: 6</view></ht-col>
</ht-row>
```

```scss
.bg-dark1,
.bg-dark,
.bg-light{
  border-radius: 4px;
  min-height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.45);
}
.bg-dark1 {
  background: #99a9bf;
  color: #fff;
}
.bg-dark {
  background: #d3dce6;
}
.bg-light {
  background: #e5e9f2;
}
```

## 分栏偏移

`offset` 属性可以设置分栏的偏移量，计算方式以及偏移大小与 `span` 相同。

```html
<ht-row>
  <ht-col :span="4"><view class="bg-dark">span: 4</view></ht-col>
  <ht-col :span="8" :offset="4"><view class="bg-light">span: 8 offset: 4</view></ht-col>
</ht-row>
<ht-row>
  <ht-col :span="8" :offset="4"><view class="bg-dark">span: 8 offset: 4</view></ht-col>
  <ht-col :span="8" :offset="4"><view class="bg-dark">span: 8 offset: 4</view></ht-col>
</ht-row>
```

## 分栏间隔

通过 `gutter` 属性可以设置列元素之间的间距，默认间距为 0

```html
<ht-row gutter="20">
  <ht-col :span="8"><view class="bg-dark">span: 8</view></ht-col>
  <ht-col :span="8"><view class="bg-light">span: 8</view></ht-col>
  <ht-col :span="8"><view class="bg-dark">span: 8</view></ht-col>
</ht-row>
```


## Row Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
|-----|------|-----|-------|-------|--------|
| gutter | 列元素之间的间距（单位为px） | number | - | 0 | - |

## Col Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
|-----|------|-----|-------|-------|---------|
| span | 列元素宽度 | number | - | 24 | - |
| offset | 列元素偏移距离 | number | - | 0 | - |

## Row 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | Row 根节点样式 | - |

## Col 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | Col 根节点样式 | - |

