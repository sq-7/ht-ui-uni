# Text

Text component, used to display text information.

> Available since version 1.3.4

## Basic Usage

Set `text` to set the text content. It is recommended to use the form <code>:text='value'</code>.

```html
<ht-text
  text="Reed leaves fill the sandbar, cold sand carries shallow streams. Twenty years later, passing the south tower again. The boat tied under willows is not yet steady, how many days until mid-autumn comes again? Yellow crane at the broken cliff, has my old friend been here? The old rivers and mountains are all filled with new sorrows. Wanting to buy osmanthus flowers and bring wine, but it's never like the wanderings of youth."
></ht-text>
```

## Set Theme

Set text theme through the <code>type</code> parameter. We provide five types: <code>primary</code> <code>error</code> <code>success</code> <code>warning</code> <code>default</code>.

```html
<ht-text type="primary" text="Primary"></ht-text>
<ht-text type="error" text="Error"></ht-text>
<ht-text type="success" text="Success"></ht-text>
<ht-text type="warning" text="Warning"></ht-text>
<ht-text text="Default"></ht-text>
```

## Custom Font Color

Set the `color` property.

```html
<ht-text
  text="Reed leaves fill the sandbar, cold sand carries shallow streams. Twenty years later, passing the south tower again. The boat tied under willows is not yet steady, how many days until mid-autumn comes again? Yellow crane at the broken cliff, has my old friend been here? The old rivers and mountains are all filled with new sorrows. Wanting to buy osmanthus flowers and bring wine, but it's never like the wanderings of youth."
  color="#36B8C2"
></ht-text>
```

## Bold Text

Set the `bold` property.

```html
<ht-text
  text="Reed leaves fill the sandbar, cold sand carries shallow streams. Twenty years later, passing the south tower again. The boat tied under willows is not yet steady, how many days until mid-autumn comes again? Yellow crane at the broken cliff, has my old friend been here? The old rivers and mountains are all filled with new sorrows. Wanting to buy osmanthus flowers and bring wine, but it's never like the wanderings of youth."
  bold
></ht-text>
```

## Font Size

Set the `size` property.

```html
<ht-text
  text="Reed leaves fill the sandbar, cold sand carries shallow streams. Twenty years later, passing the south tower again. The boat tied under willows is not yet steady, how many days until mid-autumn comes again? Yellow crane at the broken cliff, has my old friend been here? The old rivers and mountains are all filled with new sorrows. Wanting to buy osmanthus flowers and bring wine, but it's never like the wanderings of youth."
  size="16px"
></ht-text>
```

## Data Masking

Set the `format` property, effective when `mode` is `phone` or `name`.

```html
<ht-text text="Li Si" mode="name" :format="true"></ht-text>
<ht-text text="Zhang Chang San" mode="name" :format="true"></ht-text>
<ht-text text="18888888888" mode="phone" :format="true"></ht-text>
```

## Lines

Set the `lines` property to specify the number of lines of text to display. If set, an ellipsis will be shown when the text exceeds this number of lines. Maximum value is 5.

```html
<ht-text :text="text" :lines="2" size="16px"></ht-text>
```

## Line Height

Set `lineHeight` for text line height.

```html
<ht-text :text="text" lineHeight="20px"></ht-text>
```

## Prefix and Suffix Slots

Set `prefix` and `suffix` slots.

```html
<ht-text
  text="12345678901"
  mode="phone"
  format
  type="primary"
  prefix="Prefix"
  suffix="Suffix"
/>

<ht-text text="12345678901" mode="phone" format type="primary">
  <template #prefix>
    <text>Prefix</text>
  </template>
  <template #suffix>Suffix</template>
</ht-text>
```

## Price

Set `mode="price"`.

```html
<ht-text
  text="16354.156"
  mode="price"
  type="success"
  decoration="line-through"
  prefix="￥"
/>
```

## Text Decoration

Set `decoration` for text decoration, such as underline, line-through, etc.

```html
<ht-text :text="text" type="warning" decoration="underline"/>
```

## Events

```html
<ht-text
  text="Reed leaves fill the sandbar, cold sand carries shallow streams. Twenty years later, passing the south tower again. The boat tied under willows is not yet steady, how many days until mid-autumn comes again? Yellow crane at the broken cliff, has my old friend been here? The old rivers and mountains are all filled with new sorrows. Wanting to buy osmanthus flowers and bring wine, but it's never like the wanderings of youth."
  @click="clickTest"
></ht-text>
```

```typescript
function clickTest() {
  console.log(1)
}
```

## Attributes

| Parameter | Description | Type | Options | Default | Version |
|-----------|-------------|------|----------|---------|----------|
| type | Theme type | string | 'primary' / 'error' / 'warning' / 'success' | default | 1.3.4 |
| text | Text content | string / number | - | | 1.3.4 |
| size | Font size | string | - | - | 1.3.4 |
| mode | Text processing mode | string | 'text-normal text' / 'date' / 'phone' / 'name' / 'price' | text | 1.3.4+ |
| bold | Whether bold, default normal | boolean | - | false | 1.3.4 |
| format | Whether to mask data | boolean | Effective when mode is phone or name | false | 1.3.4 |
| color | Text color | string | - | - | 1.3.4 |
| lines | Number of lines to display, if set, ellipsis will show when exceeding. Max value is 5. | Number | - | - | 1.3.4 |
| lineHeight | Text line height | string | - | | 1.3.4 |
| decoration | Text decoration, underline, line-through, etc. | string | underline/line-through/overline | | 1.3.4+ |
| prefix | Prefix slot | string | - | | 1.3.4+ |
| suffix | Suffix slot | string | - | | 1.3.4+ |

## Events

| Event Name | Description | Parameters | Version |
|------------|-------------|------------|----------|
| click | Triggered when text is clicked | event | 1.3.4 |

## Slots

## External Classes

| Class Name | Description | Version |
|------------|-------------|----------|
| custom-class | Root node style | 1.3.4 |
| custom-style | Root node style | 1.3.4 |
