# Skeleton

A combination of placeholder shapes displayed while waiting for content to load, with dynamic loading effects to reduce user anxiety during waiting.

## Skeleton Styles

Supports four types: `avatar`, `image`, `text`, and `paragraph`.

```html
// Avatar skeleton
<ht-skeleton theme="avatar" />
// Image skeleton
<ht-skeleton theme="image" />
// Text skeleton
<ht-skeleton theme="text" />
// Paragraph skeleton
<ht-skeleton theme="paragraph" />
```

## Grid Skeleton

```html
<ht-skeleton :row-col="grid" />
```

```ts
const grid = [
  [
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' }
  ],
  [
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' }
  ]
]
```

## Cell Skeleton

```html
<view style="display: flex">
  <ht-skeleton :row-col="[{ size: '48px', type: 'circle' }]" />
  <ht-skeleton :custom-style="{ width: '100%', marginLeft: '12px' }" :row-col="[{ width: '50%' }, { width: '100%' }]" />
</view>
<view style="display: flex; margin-top: 20px">
  <ht-skeleton :row-col="[{ size: '48px', type: 'rect' }]" />
  <ht-skeleton :custom-style="{ width: '100%', marginLeft: '12px' }" :row-col="[{ width: '50%' }, { width: '100%' }]" />
</view>
```

## Image Group Skeleton

```html
<view>
  <ht-skeleton :row-col="imageGroup" />
  <ht-skeleton :custom-style="{ marginTop: '20px' }" :row-col="imageGroup" />
</view>
```

```ts
const imageGroup = [
  { height: '171px' }, 1, { width: '107px' }, 
  [{ width: '93px' }, { width: '32px', marginLeft: '41px' }]
]
```

## Loading Animation

Supports `gradient` and `flashed`

```html
<ht-skeleton animation="gradient" theme="paragraph" />
<view style="display: flex">
  <ht-skeleton :row-col="[{ size: '48px', type: 'circle' }]" />
  <ht-skeleton :custom-style="{ width: '100%', marginLeft: '12px' }" animation="flashed" theme="paragraph" />
</view>
```

## Slot Content

You can write display content through slots. When the request ends and loading is set to false, the skeleton component will be hidden and the slot content will be displayed.

```html
<ht-skeleton 
  :row-col="[
    [
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' }
    ],
    [
      { width: '48px', height: '16px' },
      { width: '48px', height: '16px' },
      { width: '48px', height: '16px' },
      { width: '48px', height: '16px' },
      { width: '48px', height: '16px' }
    ]
  ]" 
  :loading="showContent"
>
  <ht-grid>
    <ht-grid-item icon-size="32px" icon="picture" text="Text" />
    <ht-grid-item icon-size="32px" icon="picture" text="Text" />
    <ht-grid-item icon-size="32px" icon="picture" text="Text" />
    <ht-grid-item icon-size="32px" icon="picture" text="Text" />
    <ht-grid-item icon-size="32px" icon="picture" text="Text" />
  </ht-grid>
</ht-skeleton>
```

```js
const showContent = ref(true)
```

## Attributes

| Parameter | Description | Type | Options | Default | Version |
|-----------|-------------|------|----------|---------|----------|
| theme | Skeleton style | SkeletonTheme | `text` `avatar` `paragraph` `image` | - | - |
| rowCol | Used to set row and column count, width, height, spacing, etc.<br />【Example 1】`[1, 1, 2]` means output three rows of skeleton, first row one column, second row one column, third row two columns.<br />【Example 2】`[1, 1, { width: '100px' }]` means customize the width of the third row to `100px`.<br />【Example 3】`[1, 2, [{ width, height }, { width, height, marginLeft }]]` means the third row has two columns with custom width, height and spacing | SkeletonRowCol | - | - | - |
| loading | Whether in loading state, if true shows skeleton, if false shows loaded content | boolean | - | true | - |
| animation | Animation effect | SkeletonAnimation | `gradient` `flashed` | - | - |

## Slots

| Name | Description | Version |
|------|-------------|----------|
| default | Content to display after loading ends | 1.2.21 |
