# Collapse

Place a group of content in multiple collapsible panels, clicking on the panel's title can expand or collapse its content.

## Basic Usage

`v-model` is the binding value, which can be of type array (normal collapse), string (accordion) or boolean (expand/collapse to view more). The `name` of CollapseItem is required, `title` is optional and can be customized through `slot`. `name` is used to identify the collapse panel.

```typescript
const value = ref<string[]>(['item1'])
```

```html
<ht-collapse v-model="value">
  <ht-collapse-item title="Label 1" name="item1">This is a simple example text.</ht-collapse-item>
  <ht-collapse-item title="Label 2" name="item2">This is a simple example text.</ht-collapse-item>
  <ht-collapse-item name="item3">
    <template #title="{ expanded, disabled, isFirst }">
      <view class="header">
        <text style="color: red">Custom title through slot</text>
        <text>{{ expanded ? 'I am expanded' : 'I am collapsed' }}</text>
      </view>
    </template>
    This is a simple example text.
  </ht-collapse-item>
</ht-collapse>
```

```css
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

## Accordion

Set the `accordion` property.

```html
<ht-collapse v-model="value" accordion>
  <ht-collapse-item title="Label 1" name="item1">This is a simple example text.</ht-collapse-item>
  <ht-collapse-item title="Label 2" name="item2">This is a simple example text.</ht-collapse-item>
  <ht-collapse-item title="Label 3" name="item3">This is a simple example text.</ht-collapse-item>
</ht-collapse>
```

## Disabled

Set the `disabled` property on CollapseItem to disable a specific collapse panel.

```html
<ht-collapse v-model="value">
  <ht-collapse-item title="Label 1" name="item1">This is a simple example text.</ht-collapse-item>
  <ht-collapse-item title="Label 2" name="item2" disabled>This is a simple example text.</ht-collapse-item>
  <ht-collapse-item title="Label 3" name="item3">This is a simple example text.</ht-collapse-item>
</ht-collapse>
```

## Asynchronous Update

By passing a `beforeExpend` function to the `ht-collapse-item` component, you can validate and process before opening the panel. Return true to allow opening, return false to prohibit opening. Supports returning Promise for operations such as fetching panel data through API calls.

```html
<ht-collapse v-model="value">
  <ht-collapse-item v-for="(item, index) in itemList" :before-expend="beforeExpend" :key="index" :title="item.title" :name="item.name">
    {{ item.body }}
  </ht-collapse-item>
</ht-collapse>
```

```ts
import { useToast } from '@/uni_modules/ht-ui-uni'
const toast = useToast()
const value = ref<string[]>(['item1'])

const itemList = ref<Record<string, any>[]>([
  {
    title: 'Label 1',
    name: 'item1',
    body: 'If the order is in a paused state, go to the "My Orders" page, find the order you want to cancel, click the "Cancel Order" button; select the reason for cancellation, then click "Next" to submit the application.'
  },
  {
    title: 'Label 1',
    name: 'item2',
    body: 'Generally, buyers can only apply for a refund to the merchant. After the merchant confirms that a refund can be made, they can initiate a refund application to WeChat Pay through the interface or merchant platform.'
  },
  {
    title: 'Label 1',
    name: 'item3',
    body: 'Upload photos of products with quality issues or order screenshots to the WeChat public account (follow Lianhua Huashang public account on WeChat), our staff will help you process it as soon as possible.'
  },
  {
    title: 'Label 1',
    name: 'item4',
    body: 'Seven-day no-reason return and exchange policy, all products can be returned or exchanged within 7 days (based on courier receipt) if they do not affect second-hand sales.'
  },
  {
    title: 'Label 1',
    name: 'item5',
    body: 'Q1: Coupon usage details? Details page [My] - [My Benefits] - [Coupon Rules Description].'
  }
])

/**
 * Callback method before collapse panel expands
 * @param e
 */
function beforeExpend(name) {
  const index = itemList.value.findIndex((item) => {
    return item.name === name
  })
  if (index > -1) {
    itemList.value[index].body =
      'Q1: Seven-day no-reason return and exchange policy, all products can be returned or exchanged within 7 days (based on courier receipt) if they do not affect second-hand sales. Seven-day no-reason return and exchange policy, all products can be returned or exchanged within 7 days (based on courier receipt) if they do not affect second-hand sales. Seven-day no-reason return and exchange policy, all products can be returned or exchanged within 7 days (based on courier receipt) if they do not affect second-hand sales. Seven-day no-reason return and exchange policy, all products can be returned or exchanged within 7 days (based on courier receipt) if they do not affect second-hand sales. Seven-day no-reason return and exchange policy, all products can be returned or exchanged within 7 days (based on courier receipt) if they do not affect second-hand sales. Seven-day no-reason return and exchange policy, all products can be returned or exchanged within 7 days (based on courier receipt) if they do not affect second-hand sales.'
  }

  return new Promise((reslove, reject) => {
    toast.loading('Loading')
    setTimeout(() => {
      toast.close()
      reslove(true)
    }, 500)
  })
}
```

## View More

Collapse can be used independently. By setting the `viewmore` property, it can be transformed into a view more collapse type. You can also set `line-num` to modify the number of lines displayed when collapsed. In this case, `value` is of boolean type.

```html
<ht-collapse viewmore v-model="value">
  This is a simple example text. This is a simple example text. This is a simple example text. This is a simple example text. This is a simple example text. This is a simple example text. This is a simple example text. This is a simple example text.
</ht-collapse>
```

## View More - Using Slots

In view more mode, Collapse allows you to define your desired collapse style using slots. Use `use-more-slot` to enable slots. And you can use the external style class `custom-more-slot-class` to style the custom slot.

```scss
:deep(.more-slot) {
  color: red;
}
```

```html
<ht-collapse viewmore v-model="value" @change="handleChange" use-more-slot custom-more-slot-class="more-slot">
  Named slot: This is a simple example text. This is a simple example text. This is a simple example text. This is a simple example text. This is a simple example text. This is a simple example text. This is a simple example text. This is a simple example text.
  <template #more>
    <view>Show All</view>
  </template>
</ht-collapse>
```

## Nested Usage

`collapse` can be nested, and since the content container of `collapse-item` has a default `padding`, the nested `collapse` needs to set `custom-body-style` or `custom-body-class` to override the default style.

**_The following is an example, you can also adjust the style as needed._**

:::tip Note
`custom-body-style` and `custom-body-class` are supported in version `1.4.0` and above.
:::

```html
<view class="collapse">
  <ht-collapse v-model="collapseRoot">
    <ht-collapse-item custom-body-style="padding:0 0 0 14px" v-for="item in 5" :key="item" :title="`Label${item}`" :name="`${item}`">
      <ht-collapse v-model="collapseList[item - 1]">
        <ht-collapse-item
          v-for="(item, index) in itemList"
          :custom-class="index === 0 ? 'no-border' : ''"
          :key="index"
          :title="item.title"
          :name="item.name"
        >
          {{ item.body }}
        </ht-collapse-item>
      </ht-collapse>
    </ht-collapse-item>
  </ht-collapse>
</view>
```

```css
.collapse {
  :deep() {
    .no-border {
      &::after {
        display: none;
      }
    }
  }
}
```

## Collapse Attributes

| Attribute | Description | Type | Options | Default | Version |
|-----------|-------------|------|----------|---------|----------|
| v-model | Binding value | array / string / boolean | - | - | - |
| accordion | Whether to enable accordion mode | boolean | - | false | - |
| viewmore | Whether to enable view more mode | boolean | - | false | - |
| line-num | Number of lines displayed when collapsed in view more mode | number | - | 2 | - |
| use-more-slot | Whether to use custom slot in view more mode | boolean | - | false | - |

## CollapseItem Attributes

| Attribute | Description | Type | Options | Default | Version |
|-----------|-------------|------|----------|---------|----------|
| name | Unique identifier | string / number | - | - | - |
| title | Title | string | - | - | - |
| disabled | Whether to disable | boolean | - | false | - |
| before-expend | Function executed before expansion | function | - | - | - |
| custom-class | Custom class name | string | - | - | - |
| custom-title-class | Custom title class name | string | - | - | 1.4.0 |
| custom-body-class | Custom body class name | string | - | - | 1.4.0 |
| custom-body-style | Custom body style | string | - | - | 1.4.0 |

## CollapseItem Slots

| Name | Description | Version |
|------|-------------|----------|
| title | Custom title content | - |
| default | Content | - |

## Events

| Event Name | Description | Parameters | Version |
|------------|-------------|------------|----------|
| change | Triggered when the active panel changes | value | - |

## External Classes

| Class Name | Description | Version |
|------------|-------------|----------|
| custom-class | Root node style | - |
| custom-title-class | Title style | 1.4.0 |
| custom-body-class | Body style | 1.4.0 |
| custom-more-slot-class | View more slot style | - |
