# Badge

A number or status mark on buttons and icons.

## Basic Usage

Set the `value` attribute, the badge will be displayed in the upper right corner of the element.

```html
<ht-badge value="12">
  <ht-button>Button</ht-button>
</ht-badge>
<ht-badge value="24">
  <ht-button icon="cart-o"></ht-button>
</ht-badge>
```

## Maximum Value

Set the `max` attribute, when the value exceeds the maximum value, it will be displayed as 'max+'.

```html
<ht-badge value="12" max="10">
  <ht-button>Button</ht-button>
</ht-badge>
<ht-badge value="1024" max="999">
  <ht-button icon="cart-o"></ht-button>
</ht-badge>
```

## Custom Content

Set the `value` attribute to a string type to display custom content.

```html
<ht-badge value="new">
  <ht-button>Button</ht-button>
</ht-badge>
<ht-badge value="hot">
  <ht-button icon="cart-o"></ht-button>
</ht-badge>
```

## Dot Badge

Set the `is-dot` attribute to display a small red dot without specific content.

```html
<ht-badge is-dot>
  <ht-button>Button</ht-button>
</ht-badge>
<ht-badge is-dot>
  <ht-button icon="cart-o"></ht-button>
</ht-badge>
```

## Custom Badge Color

Set the `type` attribute to change the badge color, supporting `primary` / `success` / `warning` / `danger` / `info`, default is `danger`.

```html
<ht-badge value="12">
  <ht-button>Danger</ht-button>
</ht-badge>
<ht-badge value="12" type="primary">
  <ht-button>Primary</ht-button>
</ht-badge>
<ht-badge value="12" type="success">
  <ht-button>Success</ht-button>
</ht-badge>
<ht-badge value="12" type="warning">
  <ht-button>Warning</ht-button>
</ht-badge>
<ht-badge value="12" type="info">
  <ht-button>Info</ht-button>
</ht-badge>
```

## Independent Display

When the badge is used independently, the badge will be centered.

```html
<ht-badge value="12"></ht-badge>
<ht-badge value="primary" type="primary"></ht-badge>
```

## Attributes

| Attribute | Description | Type | Default | Version |
|---------|---------|---------|---------|------|
| value | Display value | string / number | - | - |
| max | Maximum value, only valid when value is a number | number | - | - |
| top | Distance from the top of the badge to the top of the container | string | - | - |
| right | Distance from the right of the badge to the right of the container | string | - | - |
| is-dot | Whether to display a small dot | boolean | false | - |
| hidden | Whether to hide the badge | boolean | false | - |
| type | Badge type | string | danger | - |
| bg-color | Custom badge background color | string | - | - |

## External Style Classes

| Class Name | Description |
|---------|------|
| custom-class | Root node custom class |
