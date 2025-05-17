# Checkbox

A group of options for multiple selections.

## Basic Usage

The `v-model` attribute is used to set the currently selected value.

```html
<ht-checkbox v-model="value">Option</ht-checkbox>
```

```typescript
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      value: true
    })

    return {
      ...toRefs(state)
    }
  }
}
```

## Disabled State

Set the `disabled` attribute to disable the checkbox.

```html
<ht-checkbox v-model="value" disabled>Disabled Option</ht-checkbox>
```

## Custom Shape

Set the `shape` attribute to customize the shape of the checkbox, which can be set to 'button' or 'square', default is 'circle'.

```html
<ht-checkbox v-model="value1" shape="square">Square Checkbox</ht-checkbox>
<ht-checkbox v-model="value2" shape="button">Button Checkbox</ht-checkbox>
```

## Custom Color

Set the `checked-color` attribute to customize the color when checked.

```html
<ht-checkbox v-model="value" checked-color="#4D80F0">Custom Color</ht-checkbox>
```

## Checkbox Size

Set the `size` attribute to customize the size of the checkbox, which can be set to 'large', default is ''.

```html
<ht-checkbox v-model="value" size="large">Large Checkbox</ht-checkbox>
```

## True Value and False Value

Set the `true-value` and `false-value` attributes to customize the value when checked and unchecked.

```html
<ht-checkbox v-model="value" true-value="yes" false-value="no">Custom Value</ht-checkbox>
```

## Checkbox Group

The `value` of the checkbox group is an array, which contains the values of all selected checkboxes. The `value` of each checkbox is set through the `value` attribute.

```html
<ht-checkbox-group v-model="value">
  <ht-checkbox value="1">Option 1</ht-checkbox>
  <ht-checkbox value="2">Option 2</ht-checkbox>
  <ht-checkbox value="3">Option 3</ht-checkbox>
  <ht-checkbox value="4">Option 4</ht-checkbox>
</ht-checkbox-group>
```

```typescript
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      value: ['1', '3']
    })

    return {
      ...toRefs(state)
    }
  }
}
```

## Horizontal Display

Set the `inline` attribute to display checkboxes horizontally.

```html
<ht-checkbox-group v-model="value" inline>
  <ht-checkbox value="1">Option 1</ht-checkbox>
  <ht-checkbox value="2">Option 2</ht-checkbox>
  <ht-checkbox value="3">Option 3</ht-checkbox>
  <ht-checkbox value="4">Option 4</ht-checkbox>
</ht-checkbox-group>
```

## Disabled Checkbox Group

Set the `disabled` attribute on the checkbox group to disable all checkboxes in the group.

```html
<ht-checkbox-group v-model="value" disabled>
  <ht-checkbox value="1">Option 1</ht-checkbox>
  <ht-checkbox value="2">Option 2</ht-checkbox>
  <ht-checkbox value="3">Option 3</ht-checkbox>
  <ht-checkbox value="4">Option 4</ht-checkbox>
</ht-checkbox-group>
```

## Custom Shape for Checkbox Group

Set the `shape` attribute on the checkbox group to customize the shape of all checkboxes in the group.

```html
<ht-checkbox-group v-model="value" shape="square">
  <ht-checkbox value="1">Option 1</ht-checkbox>
  <ht-checkbox value="2">Option 2</ht-checkbox>
  <ht-checkbox value="3">Option 3</ht-checkbox>
  <ht-checkbox value="4">Option 4</ht-checkbox>
</ht-checkbox-group>
```

## Custom Color for Checkbox Group

Set the `checked-color` attribute on the checkbox group to customize the color of all checkboxes in the group when checked.

```html
<ht-checkbox-group v-model="value" checked-color="#4D80F0">
  <ht-checkbox value="1">Option 1</ht-checkbox>
  <ht-checkbox value="2">Option 2</ht-checkbox>
  <ht-checkbox value="3">Option 3</ht-checkbox>
  <ht-checkbox value="4">Option 4</ht-checkbox>
</ht-checkbox-group>
```

## Custom Size for Checkbox Group

Set the `size` attribute on the checkbox group to customize the size of all checkboxes in the group.

```html
<ht-checkbox-group v-model="value" size="large">
  <ht-checkbox value="1">Option 1</ht-checkbox>
  <ht-checkbox value="2">Option 2</ht-checkbox>
  <ht-checkbox value="3">Option 3</ht-checkbox>
  <ht-checkbox value="4">Option 4</ht-checkbox>
</ht-checkbox-group>
```

## Maximum Number of Selections

Set the `max` attribute on the checkbox group to limit the maximum number of selections.

```html
<ht-checkbox-group v-model="value" :max="2">
  <ht-checkbox value="1">Option 1</ht-checkbox>
  <ht-checkbox value="2">Option 2</ht-checkbox>
  <ht-checkbox value="3">Option 3</ht-checkbox>
  <ht-checkbox value="4">Option 4</ht-checkbox>
</ht-checkbox-group>
```

## Cell Style

Set the `cell` attribute on the checkbox group to display checkboxes in cell style.

```html
<ht-checkbox-group v-model="value" cell>
  <ht-checkbox value="1">Option 1</ht-checkbox>
  <ht-checkbox value="2">Option 2</ht-checkbox>
  <ht-checkbox value="3">Option 3</ht-checkbox>
  <ht-checkbox value="4">Option 4</ht-checkbox>
</ht-checkbox-group>
```

## Checkbox Attributes

| Attribute | Description | Type | Default | Version |
|---------|---------|---------|---------|------|
| v-model | Selected value | boolean / string / number | - | - |
| value | Checkbox value | string / number / boolean | - | - |
| shape | Checkbox shape, can be 'circle', 'square', 'button' | string | circle | - |
| checked-color | Color when checked | string | #4D80F0 | - |
| disabled | Whether to disable the checkbox | boolean | false | - |
| true-value | Value when checked | string / number / boolean | true | - |
| false-value | Value when unchecked | string / number / boolean | false | - |
| size | Checkbox size, can be 'large' | string | - | - |

## Checkbox Events

| Event Name | Description | Parameters | Version |
|---------|---------|---------|------|
| change | Triggered when the binding value changes | value: selected value | - |

## Checkbox Slots

| Name | Description | Version |
|---------|---------|------|
| default | Custom content | - |

## Checkbox External Style Classes

| Class Name | Description | Version |
|---------|---------|------|
| custom-class | Root node custom class | - |

## CheckboxGroup Attributes

| Attribute | Description | Type | Default | Version |
|---------|---------|---------|---------|------|
| v-model | Selected value | array | - | - |
| shape | Checkbox shape, can be 'circle', 'square', 'button' | string | circle | - |
| checked-color | Color when checked | string | #4D80F0 | - |
| disabled | Whether to disable all checkboxes | boolean | false | - |
| max | Maximum number of selections | number | - | - |
| inline | Whether to display checkboxes horizontally | boolean | false | - |
| cell | Whether to display checkboxes in cell style | boolean | false | - |
| size | Checkbox size, can be 'large' | string | - | - |

## CheckboxGroup Events

| Event Name | Description | Parameters | Version |
|---------|---------|---------|------|
| change | Triggered when the binding value changes | value: selected value | - |

## CheckboxGroup Slots

| Name | Description | Version |
|---------|---------|------|
| default | Custom content | - |

## CheckboxGroup External Style Classes

| Class Name | Description | Version |
|---------|---------|------|
| custom-class | Root node custom class | - |
