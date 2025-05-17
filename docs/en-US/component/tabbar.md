# Tabbar

Bottom navigation bar, used for switching between different pages.

## Basic Usage

`v-model` is the binding value, representing the index value or name of the selected tab.

```html
<ht-tabbar v-model="tabbar">
  <ht-tabbar-item title="Home" icon="home"></ht-tabbar-item>
  <ht-tabbar-item title="Category" icon="cart"></ht-tabbar-item>
  <ht-tabbar-item title="My" icon="user"></ht-tabbar-item>
</ht-tabbar>
```

```typescript
import { ref } from 'vue'

const tabbar = ref(1)
```

## Match by Name

By setting the `name` property, you can match the selected tab by name.

```html
<ht-tabbar v-model="tabbar">
  <ht-tabbar-item name="home" title="Home" icon="home"></ht-tabbar-item>
  <ht-tabbar-item name="cart" title="Category" icon="cart"></ht-tabbar-item>
  <ht-tabbar-item name="setting" title="Settings" icon="setting"></ht-tabbar-item>
  <ht-tabbar-item name="user" title="My" icon="user"></ht-tabbar-item>
</ht-tabbar>
```
```typescript
import { ref } from 'vue'

const tabbar = ref('home')
```

## Badge Tips

By setting the `value` property, you can display badge tips, and by setting the is-dot property, a small red dot will be displayed in the upper right corner of the icon.

```html
<ht-tabbar v-model="tabbar">
  <ht-tabbar-item is-dot :value="2" title="Dot" icon="home"></ht-tabbar-item>
  <ht-tabbar-item :value="2" icon="cart" title="Category"></ht-tabbar-item>
  <ht-tabbar-item :value="30" title="My" icon="user"></ht-tabbar-item>
  <ht-tabbar-item :value="200" title="Max Value" icon="user"></ht-tabbar-item>
</ht-tabbar>
```
```typescript
import { ref } from 'vue'

const tabbar = ref(1)
```

## Floating Tab Bar

By setting the `shape` property to `round`, you can set the tab bar to floating style.

```html
<ht-tabbar shape="round" v-model="tabbar">
  <ht-tabbar-item title="Home" is-dot :value="2" icon="home"></ht-tabbar-item>
  <ht-tabbar-item title="Category" :value="2" icon="cart"></ht-tabbar-item>
  <ht-tabbar-item title="Photos" :value="30" icon="photo"></ht-tabbar-item>
  <ht-tabbar-item title="My" :value="200" icon="user"></ht-tabbar-item>
</ht-tabbar>
```
```typescript
import { ref } from 'vue'

const tabbar = ref(1)
```

## Custom Icon

By using `<template #icon>`, you can customize the tab's icon.

```html
<ht-tabbar v-model="tabbar">
  <ht-tabbar-item :value="2" title="Home" icon="home"></ht-tabbar-item>
  <ht-tabbar-item :value="2" icon="cart" title="Category">
    <template #icon>
      <ht-img round height="40rpx" width="40rpx" src="https://registry.npmmirror.com/ht-ui-uni-assets/*/files/panda.jpg"></ht-img>
    </template>
  </ht-tabbar-item>
  <ht-tabbar-item :value="3" title="My" icon="user"></ht-tabbar-item>
</ht-tabbar>
```
```typescript
import { ref } from 'vue'

const tabbar = ref(1)
```

## Custom Color

By setting `active-color` and `inactive-color` properties, you can customize the color of active and inactive tabs.

```html
<ht-tabbar v-model="tabbar" active-color="#ee0a24" inactive-color="#7d7e80">
  <ht-tabbar-item is-dot :value="2" title="Dot" icon="home"></ht-tabbar-item>
  <ht-tabbar-item :value="2" icon="cart" title="Category"></ht-tabbar-item>
  <ht-tabbar-item :value="30" title="My" icon="user"></ht-tabbar-item>
  <ht-tabbar-item :value="200" title="Max Value" icon="photo"></ht-tabbar-item>
  <ht-tabbar-item :value="10" title="Service" icon="chat"></ht-tabbar-item>
</ht-tabbar>
```
```typescript
import { ref } from 'vue'

const tabbar = ref(1)
```

## Listen to Switch Events

By listening to the `change` event, you can get the value of the selected tab.

```html
<ht-tabbar v-model="tabbar" @change="handleChange" active-color="#ee0a24" inactive-color="#7d7e80">
  <ht-tabbar-item title="Home" icon="home"></ht-tabbar-item>
  <ht-tabbar-item title="Category" icon="cart"></ht-tabbar-item>
  <ht-tabbar-item title="My" icon="user"></ht-tabbar-item>
  <ht-tabbar-item title="Photos" icon="photo"></ht-tabbar-item>
  <ht-tabbar-item title="Service" icon="chat"></ht-tabbar-item>
</ht-tabbar>
```

```typescript
import { ref } from 'vue'

const tabbar = ref(1)

function handleChange({ value }: { value: string }) {
  show(`Selected tab:${value}`)
}
```

## Fixed Bottom

By setting the `fixed` property, you can fix the tab bar at the bottom; by setting the `placeholder` property, you can generate a placeholder element of the same height at the tab position when fixed at the bottom.

```html
<ht-tabbar fixed v-model="tabbar" bordered safeAreaInsetBottom placeholder>
  <ht-tabbar-item :value="2" is-dot title="Home" icon="home"></ht-tabbar-item>
  <ht-tabbar-item title="Category" icon="cart"></ht-tabbar-item>
  <ht-tabbar-item title="My" icon="user"></ht-tabbar-item>
  <ht-tabbar-item :value="200" title="Photos" icon="photo"></ht-tabbar-item>
  <ht-tabbar-item :value="10" title="Service" icon="chat"></ht-tabbar-item>
</ht-tabbar>
```
```typescript
import { ref } from 'vue'

const tabbar = ref(1)
```

## Attributes
| Parameter | Description | Type | Options | Default | Version |
|-----------|-------------|------|----------|---------|----------|
| model-value / v-model | Index value or name of the selected tab | number / string | - | 0 | 0.1.27 |
| fixed | Whether to fix at the bottom | boolean | - | false | 0.1.27 |
| safeAreaInsetBottom | Whether to set bottom safe area (iPhone X type devices) | boolean | - | false | 0.1.27 |
| bordered | Whether to show top border | boolean | - | true | 0.1.27 |
| shape | Shape of the tab bar | TabbarShape | 'default' / 'round' | 'default' | 0.1.27 |
| activeColor | Color of active tab | string | - | - | 0.1.27 |
| inactiveColor | Color of inactive tab | string | - | - | 0.1.27 |
| placeholder | Whether to generate a placeholder element of the same height at the tab position when fixed at the bottom | boolean | - | false | 0.1.27 |
| zIndex | Z-index of tabbar component | number | - | 500 | 0.1.27 |

## Events

| Event Name | Description | Parameters | Version |
|------------|-------------|------------|----------|
| change | Triggered when tabbar tab switches | `{ value }` | 0.1.27 |

## External Style Classes

| Class Name | Description | Version |
|------------|-------------|----------|
| custom-class | Root node style class | 0.1.27 |
| custom-style | Root node style | 0.1.27 |

## TabbarItem Attributes
| Parameter | Description | Type | Options | Default | Version |
|-----------|-------------|------|----------|---------|----------|
| title | Title of the tab | string | - | - | 0.1.27 |
| name | Unique identifier | string / number | - | - | 0.1.27 |
| icon | Icon | string | - | - | 0.1.27 |
