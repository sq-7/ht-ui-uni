# Circle Progress Bar <el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">0.1.19</el-tag>

A circular progress bar component that supports progress gradient animation.

## Basic Usage

Use `v-model` to represent the current progress of the progress bar, and the `text` property controls the text content in the middle of the progress bar.

```html
<ht-circle v-model="current" :text="`Progress: ${current}%`"></ht-circle>
```

```ts
const current = ref<number>(10)
```

## Width Control

Use the `strokeWidth` property to control the width of the progress bar, default is `10px`.

```html
<ht-circle v-model="current" :strokeWidth="15"></ht-circle>
```

## Color Customization

Use the `color` property to control the progress bar color, default is `#1C64FD`, and use the `layerColor` property to control the progress bar track color, default is `#EBEEF5`.

```html
<ht-circle v-model="current" color="#1C64FD" layer-color="#EBEEF5"></ht-circle>
```

## Gradient Color

The `color` property supports passing an object format to define gradient colors.

```html
<ht-circle v-model="current" :color="gradientColor"></ht-circle>
```

```ts
const gradientColor = {
  '0%': '#ffd01e',
  '100%': '#ee0a24'
}
```

## Progress Bar Direction

Use the `clockwise` property to control the direction of the progress bar. When `clockwise` is `false`, the progress will start from the counterclockwise direction.

```html
<ht-circle v-model="current" :clockwise="false"></ht-circle>
```

## Size Customization

Use the `size` property to control the diameter of the progress bar circle, default is `100px`.

```html
<ht-circle v-model="current" :size="300"></ht-circle>
```

## Attributes

| Parameter | Description | Type | Options | Default | Version |
| --------- | ----------- | ---- | ------- | ------- | ------- |
| `v-model` / `modelValue` | Current progress | number | - | `0` | 0.1.19 |
| `customClass` | Custom class | string | - | - | 0.1.19 |
| `customStyle` | Custom style | string | - | - | 0.1.19 |
| `size` | Circle diameter, default unit is px | number | - | `100` | 0.1.19 |
| `color` | Progress bar color | string / Record<string, string> | - | `#4d80f0` | 0.1.19 |
| `layerColor` | Track color | string | - | `#EBEEF5` | 0.1.19 |
| `fill` | Fill color | string | - | `#ffffff` | 0.1.19 |
| `speed` | Animation speed (unit: rate/s) | number | - | `50` | 0.1.19 |
| `text` | Text content | string | - | - | 0.1.19 |
| `strokeWidth` | Progress bar width, unit px | number | - | `10` | 0.1.19 |
| `strokeLinecap` | Shape of progress bar endpoints | string | `butt` / `round` / `square` | `round` | 0.1.19 |
| `clockwise` | Whether to increase clockwise | boolean | - | `true` | 0.1.19 |

## External Classes

| Class Name | Description | Version |
| ---------- | ----------- | ------- |
| custom-class | Root node style | - |
