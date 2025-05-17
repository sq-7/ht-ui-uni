# Tooltip

Commonly used to display prompt information.

## Basic Usage

Here we provide 12 different placement directions, which can be understood through the following complete examples.

You can control whether to manually display tooltips through `v-model`.

Use the `content` property to determine the prompt information when displayed.

The display effect is determined by the `placement` property:

- `placement` property value is: `direction-alignment`;
- Four directions: `top`, `left`, `right`, `bottom`;
- Three alignment positions: `start`, ''(default empty for center), `end`;

For example, `placement="left-end"` means the prompt information appears on the left side of the target element, and the bottom of the prompt information aligns with the bottom of the target element.

Since the `uni-app` component cannot listen for clicks outside itself, to automatically close the `tooltip` when clicking elsewhere on the page, it is recommended to use the component library's `useQueue` hook (which will close all dropmenu, popover, toast, swipeAction, fab), and listen for click event bubbling on the root element of the page.

:::warning
If there is a scenario where the user manually clicks somewhere outside of `tooltip` like a button to slide out `tooltip`, then you need to add click to the clicked element (in this case the button) to prevent event bubbling to the root element, avoiding triggering `closeOutside` which would close the `tooltip` that you want to manually open.
:::

```html
<view @click="closeOutside">
  <ht-tooltip @change="handleChange" placement="top" content="top prompt text">
    <ht-button>top</ht-button>
  </ht-tooltip>
</view>
```

```typescript
import { useQueue } from '@/uni_modules/ht-ui-uni'

const { closeOutside } = useQueue()

const show = ref<boolean>(false)
```

## More Content

Display multiple lines of text or set the format of text content

Use named slot to distribute `content`, replacing the `content` property in `tooltip`.

When using slots, please use the `useContentSlot` property to ensure the `content` slot is enabled.

:::warning Note
Currently, when using the `content` slot, the component cannot correctly obtain the width and height of the bubble internally. At this time, the offset `placement` cannot take effect, such as `bottom-end`.
:::

```html
<ht-tooltip placement="right" useContentSlot>
  <ht-button>Multiple Lines</ht-button>
  <template #content>
    <view style="color: red; padding: 5px; width: 90px">
      <view>Multiple Line 1</view>
      <view>Multiple Line 2</view>
      <view>Multiple Line 3</view>
    </view>
  </template>
</ht-tooltip>
```

```typescript
import { useQueue } from '@/uni_modules/ht-ui-uni'

const { closeOutside } = useQueue()
const show = ref<boolean>(false)
```

## Show Close Button

The Tooltip component controls whether to display the close button through the `show-close` property.

```html
<ht-tooltip content="Show Close Button" show-close>
  <ht-button>Show Close Button</ht-button>
</ht-tooltip>
```

## Control Visibility
Control the visibility of `tooltip` by binding `v-model`.

```html
<ht-button plain @click="control" size="small" class="button-control">
  {{ show ? 'Close' : 'Open' }}
</ht-button>

<ht-tooltip placement="top" content="Control Visibility" v-model="show">
  <ht-button :round="false">top</ht-button>
</ht-tooltip>
```

```ts
import { ref } from 'vue'

const show = ref<boolean>(false)

const control = () => {
  show.value = !show.value
}
```

## Advanced Extension

In addition to these basic settings, there are some properties that allow users to better customize their effects:

If you need to disable the `tooltip` functionality, the `disabled` property can meet this requirement. It accepts a `Boolean`, set it to `true` to disable.

```html
<ht-tooltip placement="right-end" content="Disabled" disabled>
  <ht-button>Disabled</ht-button>
</ht-tooltip>
```

## Control Position

**Note: Since mini-programs cannot dynamically insert nodes, the text bubble position will align with the outermost position of the passed positioning node. If the text prompt position is not where you want it to render, you can achieve the desired effect by controlling the overall position of the component.**
Example of incorrect usage:

```html
<ht-tooltip placement="top" content="top prompt text">
  <ht-button custom-style="margin-left: 100px">top</ht-button>
</ht-tooltip>
<ht-tooltip placement="top" content="top prompt text">
  <ht-button custom-style="position: absolute; left: 100px;">top</ht-button>
</ht-tooltip>
```

Correct usage:

```html
<ht-tooltip placement="top" content="top prompt text" custom-style="margin-left: 100px">
  <ht-button>top</ht-button>
</ht-tooltip>
<ht-tooltip placement="top" content="top prompt text" custom-style="position: absolute; left: 100px;">
  <ht-button>top</ht-button>
</ht-tooltip>
```

## Attributes

| Parameter | Description | Type | Options | Default | Version |
|-----------|-------------|------|----------|---------|----------|
| show | Whether visible | boolean | - | false | - |
| content | Content to display, can also be passed through `slot#content` | string / array | - | - | - |
| placement | Position of Tooltip | string | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | bottom | - |
| disabled | Whether Tooltip is disabled | boolean | - | false | - |
| visible-arrow | Whether to show Tooltip arrow | boolean | - | true | - |
| offset | Offset of appearance position | number / number[] | - | `{x:0, y:0}` | 1.3.12 |
| show-close | Whether to show close button inside Tooltip | boolean | - | false | - |

## Events

| Event Name | Description | Parameters | Version |
|------------|-------------|------------|----------|
| open | Triggered when showing | - | - |
| close | Triggered when hiding | - | - |
| change | Triggered when visibility changes | - | - |

## Methods

| Method Name | Description | Parameters | Version |
|-------------|-------------|------------|----------|
| open | Open tooltip dialog | - | - |
| close | Close tooltip dialog | - | - |

## Slot

| Name | Description | Version |
|------|-------------|----------|
| content | Multiple lines of content or custom styles | - |

## Tooltip External Style Classes

| Class Name | Description | Version |
|------------|-------------|----------|
| custom-class | Root node style | - |
| custom-arrow | Arrow style | - |
| custom-pop | Tooltip style | - |
