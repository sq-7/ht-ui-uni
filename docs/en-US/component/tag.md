# Tag

Used to mark status or summarize main content.

## Basic Usage

Set `type` to modify the tag type.

```html
<ht-tag custom-class="space">Tag</ht-tag>
<ht-tag custom-class="space" type="primary">Tag</ht-tag>
<ht-tag custom-class="space" type="danger">Tag</ht-tag>
<ht-tag custom-class="space" type="warning">Tag</ht-tag>
<ht-tag custom-class="space" type="success">Tag</ht-tag>
```

```scss
:deep(.space) {
  margin: 0 10px 10px;
}
```

## Plain Tag

Set the `plain` property.

```html
<ht-tag plain>Tag</ht-tag>
<ht-tag type="primary" plain>Tag</ht-tag>
<ht-tag type="danger" plain>Tag</ht-tag>
<ht-tag type="warning" plain>Tag</ht-tag>
<ht-tag type="success" plain>Tag</ht-tag>
```

## Mark Tag

Set the `mark` property.

```html
<ht-tag mark>Tag</ht-tag>
<ht-tag type="primary" mark>Tag</ht-tag>
<ht-tag type="danger" mark>Tag</ht-tag>
<ht-tag type="warning" mark>Tag</ht-tag>
<ht-tag type="success" mark>Tag</ht-tag>
```

## Plain Mark Tag

Set both `mark` and `plain` properties.

```html
<ht-tag mark plain>Tag</ht-tag>
<ht-tag type="primary" mark plain>Tag</ht-tag>
<ht-tag type="danger" mark plain>Tag</ht-tag>
<ht-tag type="warning" mark plain>Tag</ht-tag>
<ht-tag type="success" mark plain>Tag</ht-tag>
```

## Round Tag

Set the `round` property.

```html
<ht-tag round>Tag</ht-tag>
<ht-tag type="primary" round>Tag</ht-tag>
<ht-tag type="danger" round>Tag</ht-tag>
<ht-tag type="warning" round>Tag</ht-tag>
<ht-tag type="success" round>Tag</ht-tag>
```

## Set Icon

Set `icon` for the left icon, or use the 'icon' slot. When using the slot, enable `use-icon-slot`.

```html
<ht-tag custom-class="space" icon="clock" mark>Tag</ht-tag>
<ht-tag custom-class="space" mark use-icon-slot>
  <text>Slot</text>
  <template #icon>
    <ht-icon name="clock" />
  </template>
</ht-tag>
```

## Custom Color

Set `color` to modify text color, set `bg-color` to modify background and border color.

```html
<ht-tag color="#0083ff" bg-color="#d0e8ff">Tag</ht-tag>
<ht-tag color="#FAA21E" bg-color="#FAA21E" plain>Tag</ht-tag>
```

## Closable

Set the `closable` property to allow the tag to be closed. When closed, it will trigger the `close` event.

```html
<ht-tag closable round type="primary">Tag</ht-tag>
```

## Add Tag

Set the `dynamic` property for the add tag style. After entering content, it will trigger the `confirm` event.

```html
<ht-tag v-for="(tag, index) in tags" :key="index" custom-class="space" round closable @close="handleClose(index)">{{item}}</ht-tag>
<ht-tag custom-class="space" round dynamic @confirm="handleConfirm"></ht-tag>
```
If you want to customize the add style, you can use the `add` slot.
```html
<ht-tag custom-class="space" round dynamic @confirm="handleConfirm">
  <template #add>
    <ht-icon name="pin" size="12px"></ht-icon>
    <text style="margin-left: 4px">Custom</text>
  </template>
</ht-tag>
```

```typescript
const tags = ref(['Tag 1', 'Tag 2'])

function handleClose(order) {
  tags.value = tags.value.filter((value, index) => index !== order)
  console.log('close:index' + order)
}

function handleConfirm({ value }) {
  if (!value) return
  tags.value = [...tags.value, value]
}
```

## Events

```html
<ht-tag v-for="(tag, index) in tags" :key="index" round closable @click="handleClick(index)" @close="handleClose(index)">{{tag.value}}</ht-tag>
```

```typescript
const tags = ref([
  {
    plain: true,
    closable: true,
    type: 'primary',
    value: 'Tag 1'
  }
])

function handleClick(index) {
  console.log('click:index' + index)
}
function handleClose(order) {
  tags.value = tags.value.filter((value, index) => index !== order)
  console.log('close:index' + order)
}
```

## Attributes

| Parameter | Description | Type | Options | Default | Version |
|-----------|-------------|------|----------|---------|----------|
| type | Tag type | string | `default` / `primary` / `danger` / `warning` / `success` | default | - |
| plain | Plain type | boolean | - | false | - |
| mark | Mark type | boolean | - | false | - |
| round | Round type | boolean | - | false | - |
| icon | Left icon | string | - | - | - |
| color | Text color | string | - | - | - |
| bg-color | Background and border color | string | - | - | - |
| closable | Closable (only supported for round type) | boolean | - | false | - |
| use-icon-slot | Enable icon slot | boolean | - | false | - |
| dynamic | Whether it's an add tag | boolean | - | false | - |

## Events

| Event Name | Description | Parameters | Version |
|------------|-------------|------------|----------|
| click | Triggered when tag is clicked | event | - |
| close | Triggered when close button is clicked | event | - |
| confirm | Triggered after entering content in add tag | `{ value }` | - |

## Slots

| Name | Description | Version |
|------|-------------|----------|
| icon | Icon | - |
| add | Custom add tag slot, effective when `dynamic` is `true` | - |

## External Classes

| Class Name | Description | Version |
|------------|-------------|----------|
| custom-class | Root node style | - |
