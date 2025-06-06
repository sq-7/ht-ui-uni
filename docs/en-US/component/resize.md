# Resize

When the size of the document flow wrapped by the component changes, it triggers the `size` event. Generally used to monitor changes in DOM dimensions and positions caused by DOM content updates, re-acquire DOM dimensions and positions, and perform calculations for content display.

## Basic Usage

> Do not add any external styles to this component

```html
<ht-resize @resize="handleResize">
  <view :style="`background: #4d80f0; width: ${width};height: ${height}`"></view>
</ht-resize>
```

```typescript
const width = ref<string>('')
const height = ref<string>('')

onReady(() => {
  setTimeout(() => {
    width.value = '100px'
    height.value = '100px'
  }, 1500)
})

function handleResize(detail: Record<string, string | number>) {
  const { height, width, top, right, bottom, left } = detail
  console.log(height, width, top, right, bottom, left)
}
```

## Events

| Event Name | Description | Parameters | Version |
|------------|-------------|------------|----------|
| resize | Triggered when size changes | `{width: number, height: number, top: number, right: number, bottom: number, left: number}` | - |
