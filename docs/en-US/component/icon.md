# Icon

Icon component for displaying various icons.

## Basic Usage

Set the `name` attribute to use the built-in icons.

```html
<ht-icon name="add-circle"></ht-icon>
<ht-icon name="add"></ht-icon>
<ht-icon name="arrow-down"></ht-icon>
<ht-icon name="arrow-right"></ht-icon>
<ht-icon name="camera"></ht-icon>
```

## Icon Color

Set the `color` attribute to customize the icon color.

```html
<ht-icon name="add-circle" color="#0083ff"></ht-icon>
```

## Icon Size

Set the `size` attribute to customize the icon size.

```html
<ht-icon name="add-circle" size="20px"></ht-icon>
<ht-icon name="add-circle" size="25px"></ht-icon>
<ht-icon name="add-circle" size="30px"></ht-icon>
```

## Custom Icon

Ht Ui Uni allows you to use custom icons in two ways:

### 1. Using Custom Font Icons

First, you need to define your own font icon library, and then set the `class-prefix` attribute to use your custom font icons.

```html
<ht-icon class-prefix="my-icon" name="my-icon-name"></ht-icon>
```

### 2. Using Image Icons

Set the `custom` attribute to use image icons, and set the `name` attribute to the image URL.

```html
<ht-icon custom name="https://example.com/icon.png"></ht-icon>
```

## Icon List

<icon-list></icon-list>

## Attributes

| Attribute | Description | Type | Default | Version |
|---------|---------|---------|---------|------|
| name | Icon name | string | - | - |
| color | Icon color | string | - | - |
| size | Icon size | string | - | - |
| class-prefix | Custom icon class prefix | string | ht-icon | - |
| custom | Whether to use custom image icon | boolean | false | - |

## Events

| Event Name | Description | Parameters | Version |
|---------|---------|---------|------|
| click | Triggered when the icon is clicked | event: Event | - |

## External Style Classes

| Class Name | Description | Version |
|---------|---------|------|
| custom-class | Root node custom class | - |
