# Sticky

Sticky layout component, used to fix elements at a specified position when the page scrolls.

## Basic Usage

Simply wrap the content that needs to be sticky in the `ht-sticky` component.

> Note: Using percentage units `width:xx%;height:xx%;` in the style of wrapped elements is invalid. It's recommended to use `vh`, `vw` instead.

```html
<ht-sticky>
  <ht-button type="success">Basic Usage</ht-button>
</ht-sticky>
```

## Dynamic Insertion

`ht-sticky` supports wrapping dynamically generated content.

> Note: When wrapping dynamically generated content, ensure the content's width and height are not less than `1px`

```html
<view style="margin-top: 20px;">
  <ht-button type="error" v-if="show">Click to Insert</ht-button>
  <ht-sticky>
    <ht-button type="success" v-if="show">Dynamic Insert</ht-button>
  </ht-sticky>
</view>
```

```typescript
const show = ref<boolean>(false)

function display() {
  show.value = true
}

onShow(() => {
  setTimeout(display, 5000)
})
```

```scss
page{
  height: 200vh;
}
```

## Offset Top

You can set the distance between the component and the top when it's sticky using the `offset-top` property.
::: tip Reminder
Since the navigation bar in `H5` is a regular element, the sticky distance will automatically increase by `44px` based on `offset-top`. When developers use a custom navigation bar in `H5`, `offset-top` needs to be reduced by `44`. For example, if you want a sticky distance of 20px, then `offset-top = 20 - 44 = -24`
:::

```html
<ht-sticky :offset-top="50">
  <ht-button>Offset Top</ht-button>
</ht-sticky>
```

## Specify Container

Wrap the `ht-sticky` component inside a custom container, then wrap the custom container with `ht-sticky-box`.

> Note: Using percentage units `width:xx%;height:xx%;` in the style of the wrapped custom container is invalid. It's recommended to use `vh`, `vw` instead.

```html
<ht-sticky-box>
  <view class="container">
    <ht-sticky>
      <ht-button type="warning">Specify Container</ht-button>
    </ht-sticky>
  </view>
</ht-sticky-box>
```

```scss
.container{
    height: 150px;width: 100vw;
}
```

## Sticky Attributes

| Parameter | Description | Type | Options | Default | Version |
|-----------|-------------|------|----------|---------|----------|
| z-index | Stack order | number | - | 1 | - |
| offset-top | Distance from top when sticky | number | - | 0 | - |

## Sticky External Style Classes

| Class Name | Description | Version |
|------------|-------------|----------|
| custom-class | Root node style | - |
