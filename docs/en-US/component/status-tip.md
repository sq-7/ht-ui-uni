# StatusTip

Generally used for fallback placeholder display.

::: warning Note
The images used in this component are external links and **_stability is not guaranteed_**. It is recommended to download the images to the developer's server and use them through custom image `URL` or custom `url-prefix`. Custom image address prefix `url-prefix` is supported starting from version 1.3.11.

Download links:

1. Github repository: [https://github.com/Moonofweisheng/ht-ui-uni-assets](https://github.com/Moonofweisheng/ht-ui-uni-assets)
2. npm address:

- npm: [https://www.npmjs.com/package/ht-ui-uni-assets](https://www.npmjs.com/package/ht-ui-uni-assets)
- Taobao mirror: [https://npmmirror.com/package/ht-ui-uni-assets](https://npmmirror.com/package/ht-ui-uni-assets)

:::

## Basic Usage

Set `image` to modify the display placeholder image type, default is `network`. Available values are `search`, `network`, `content`, `collect`, `comment`, `halo`, `message`. You can set `tip` to control the display prompt text.

```html
<ht-status-tip image="search" tip="No search results" />
<ht-status-tip image="network" tip="This page is currently inaccessible" />
<ht-status-tip image="content" tip="No content" />
<ht-status-tip image="collect" tip="No collections" />
<ht-status-tip image="comment" tip="No contact list currently~" />
<ht-status-tip image="halo" tip="Payment failed, please reorder" />
<ht-status-tip image="message" tip="Subscribed to all messages" />
```

## Custom Size

Customize the image size through the `image-size` property.

```html
<ht-status-tip
  :image-size="{
          height: 200,
          width: 300
  }"
  image="search"
  tip="No search results"
/>
```

## Custom Image

When you need to customize the image, you can pass any image URL in the `image` property.

```html
<ht-status-tip image="https://registry.npmmirror.com/ht-ui-uni-assets/*/files/panda.jpg" tip="View my avatar" />
```

## Custom Image Content

Use the `image` slot to customize image content.

```html
<ht-status-tip tip="Custom image content">
  <template #image>
    <ht-icon name="ie-filled" size="100px"></ht-icon>
  </template>
</ht-status-tip>
```

## Attributes

| Parameter | Description | Type | Options | Default | Version |
|-----------|-------------|------|----------|---------|----------|
| image | Default image type, supports image URL input | string | search / network / content / collect / comment / halo / message | network | - |
| image-size | Image size, default unit is `px` | `string`/`number`/`ImageSize` | - | - | - |
| tip | Prompt text | string | - | - | - |
| image-mode | Mode property for preview image | `ImageMode` | - | aspectFit | 1.2.12 |
| url-prefix | Image path prefix, points to the directory where images are located, used for concatenating image URLs | string | - | https://registry.npmmirror.com/ht-ui-uni-assets/*/files/ | 1.3.11 |

### ImageSize

| Parameter | Description | Type | Options | Default | Version |
|-----------|-------------|------|----------|---------|----------|
| height | Image height, default unit is `px` | string / number | - | - | 1.2.12 |
| width | Image width, default unit is `px` | string / number | - | - | 1.2.12 |

## Slot

| Name | Description | Version |
|------|-------------|----------|
| image | Image content | 1.3.12 |
