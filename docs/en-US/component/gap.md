# Gap

Generally used to replace margin or padding in page layout; or serve as a (bottom) placeholder element.

## Basic Usage

Set the title through the `height` property and background color through the `background` property.

```html
<ht-gap bg-color="#FFFFFF"></ht-gap>
```

## Custom Background Color

```html
<ht-gap bg-color="#4D80F0"></ht-gap>
```

## Custom Height

```html
<ht-gap bg-color="#4D80F0" height="120rpx"></ht-gap>
```

## Bottom Safe Area

```html
<ht-gap safe-area-bottom height="0"></ht-gap>
```

## Attributes

| Parameter      | Description                | Type                | Options     | Default     | Version |
|----------------|----------------------------|---------------------|-------------|-------------|----------|
| height         | Height                     | `string`/`number`   | -           | 15          | -        |
| bgColor        | Background color           | string             | -           | transparent | -        |
| safeAreaBottom | Enable bottom safe area    | boolean            | true/false  | false       | -        |

## External Classes

| Class Name    | Description      | Version |
|---------------|------------------|----------|
| custom-class  | Custom style     | -        |
