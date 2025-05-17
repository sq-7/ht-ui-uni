# Tab

Tab component, used to switch between different content areas.

## Basic Usage

`v-model` is the binding value, which can be of type number (index of the selected tab) or string (tab name).

:::tip Note
When `v-model` is of type `number`, `ht-tab` does not need to set `name`. Also, if the value exceeds the number of tabs, it will automatically default to 0.
:::

```html
<ht-tabs v-model="tab">
  <block v-for="item in 4" :key="item">
    <ht-tab :title="`Tab ${item}`">
      <view class="content">Content {{ item }}</view>
    </ht-tab>
  </block>
</ht-tabs>
```

```typescript
const tab = ref<number>(0)
```

```scss
.content {
  line-height: 120px;
  text-align: center;
}
```

## Name Matching

Set `name` for `ht-tab` as a unique identifier.

```html
<ht-tabs v-model="tab">
  <block v-for="item in tabs" :key="item">
    <ht-tab :title="`${item}`" :name="item">
      <view class="content">Content {{ item }}</view>
    </ht-tab>
  </block>
</ht-tabs>
```

```typescript
const tabs = ref(['This', 'Is', 'An', 'Example'])
const tab = ref('Example')
```

```scss
.content {
  line-height: 120px;
  text-align: center;
}
```

## Using Badges <el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.4.0</el-tag>

Use `badge-props` to set badge properties, you can refer to [Badge Component props](/component/badge#attributes).

```html
<ht-tabs v-model="tabWithBadge" @change="handleChange">
  <ht-tab v-for="(item, index) in tabsWithBadge" :key="index" :title="`${item.title}`" :badge-props="item.badgeProps">
    <view class="content">{{ item.title }} Badge</view>
  </ht-tab>
</ht-tabs>
```

```typescript
const tabWithBadge = ref(0)
const tabsWithBadge = ref([
  {
    title: 'Normal Value',
    badgeProps: {
      modelValue: 10,
      right: '-8px'
    }
  },
  {
    title: 'Max Value',
    badgeProps: {
      modelValue: 100,
      max: 99,
      right: '-8px'
    }
  },
  {
    title: 'Dot',
    badgeProps: {
      isDot: true,
      right: '-8px',
      showZero: true
    }
  }
])
```

## Auto Adjust Bottom Line Width

Set the `auto-line-width` property to automatically adjust the bottom line width to match the text content width.

```html
<ht-tabs v-model="tab" @change="handleChange" auto-line-width>
  <block v-for="item in tabs" :key="item">
    <ht-tab :title="`${item}`" :name="item">
      <view class="content">Content {{ tab }}</view>
    </ht-tab>
  </block>
</ht-tabs>
```

```typescript
const tabs = ref(['Wot', 'Design', 'Uni'])
const tab = ref('Design')
```

## Sticky Layout

Set the `sticky` property to use sticky layout. You can set the `offset-top` property to specify how many pixels from the window top before fixing the tab header. When using a custom navigation bar in `H5`, you need to refer to [sticky's offset distance](/component/sticky.html#offset-distance) for configuration.

```html
<ht-tabs v-model="tab" sticky>
  <block v-for="item in 4" :key="item">
    <ht-tab :title="`Tab ${item}`">
      <view class="content">Content {{ item }}</view>
    </ht-tab>
  </block>
</ht-tabs>
```

## Disabled Tab

Set the `disabled` property on `ht-tab` to disable a specific tab.

```html
<ht-tabs v-model="tab">
  <block v-for="item in 4" :key="item">
    <ht-tab :title="`Tab ${item}`" :disabled="item === 1">
      <view class="content">Content {{ item }}</view>
    </ht-tab>
  </block>
</ht-tabs>
```

## Click Event

Listen to the click event of tabs.

```html
<ht-tabs v-model="tab" @click="handleClick">
  <block v-for="item in 4" :key="item">
    <ht-tab :title="`Tab ${item}`">
      <view class="content">Content {{ item }}</view>
    </ht-tab>
  </block>
</ht-tabs>
```

## Gesture Swipe

Set the `swipeable` property to support gesture swipe.

```html
<ht-tabs v-model="tab" swipeable>
  <block v-for="item in 4" :key="item">
    <ht-tab :title="`Tab ${item}`">
      <view class="content">Content {{ item }}</view>
    </ht-tab>
  </block>
</ht-tabs>
```

## Switch Animation

Set the `animated` property to enable transition animation when switching tab content.

```html
<ht-tabs v-model="tab" animated>
  <block v-for="item in 4" :key="item">
    <ht-tab :title="`Tab ${item}`">
      <view class="content">Content {{ item }}</view>
    </ht-tab>
  </block>
</ht-tabs>
```

## Left-aligned with Scrolling <el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.4.0</el-tag>

When `slidable` is set to `always`, all tabs will be aligned to the left and can be scrolled when they overflow.

```html
<ht-tabs v-model="tab" slidable="always">
  <block v-for="item in 5" :key="item">
    <ht-tab :title="`Large Tab ${item}`">
      <view class="content">Content {{ item }}</view>
    </ht-tab>
  </block>
</ht-tabs>
```
