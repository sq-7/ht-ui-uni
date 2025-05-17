# Progress

Used to display the current progress of an operation.

## Basic Usage

Set the percentage using `percentage`.

```html
<ht-progress :percentage="30" />
```

## Hide Progress Text

Set `hide-text` to hide the progress text.

```html
<ht-progress :percentage="60" hide-text></ht-progress>
```

## Set Status

Set `status` to inform users of the current state and expectations.

```html
<ht-progress :percentage="100" hide-text status="success" />
<ht-progress :percentage="70" hide-text status="danger" />
```

## Modify Color

Set `color` to modify the progress bar color.

```html
<ht-progress :percentage="80" color="#00c740"></ht-progress>
```

`color` can also be set as an array or function. If only colors are passed in the array, the progress boundaries for each color are automatically calculated. A function needs to return a color value.

```html
<ht-progress :percentage="100" :color="['#00c740', '#ffb300', '#e2231a', '#0083ff']" />
```

The array can also be set in the following format:

```html
<ht-progress :percentage="percentage" :color="colorObject" />
```

```typescript
import type { ProgressColor } from '@/uni_modules/ht-ui-uni/components/ht-progress/types'

const colorObject = ref<ProgressColor>([
  {
    color: 'yellow',
    percentage: 30
  },
  {
    color: 'red',
    percentage: 60
  },
  {
    color: 'blue',
    percentage: 80
  },
  {
    color: 'black',
    percentage: 90
  }
])
const percentage = ref<number>(100)
```

## Attributes

| Parameter | Description | Type | Options | Default | Version |
|-----------|-------------|------|----------|---------|----------|
| percentage | Progress value, maximum 100 | `number` | - | 0 | - |
| hide-text | Hide progress text | `boolean` | - | false | - |
| color | Progress bar color | `string / ProgressColor[] / string[]` | - | - | - |
| status | Progress bar status | `string` | success / danger / warning | - | - |
| duration | Milliseconds needed for 1% increase | `number` | - | 30 | - |

### ProgressColor

| Field | Type | Description | Version |
|-------|------|-------------|----------|
| color | string | Color | - |
| percentage | number | Percentage | - |

## External Classes

| Class Name | Description | Version |
|------------|-------------|----------|
| custom-class | Root node style | - |
