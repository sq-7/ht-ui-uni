# Button

Buttons are used to trigger an action, such as submitting a form or opening a link.


## Basic Usage

Basic button.

```html
<ht-button>Primary Button</ht-button>
<ht-button type="success">Success Button</ht-button>
<ht-button type="info">Info Button</ht-button>
<ht-button type="warning">Warning Button</ht-button>
<ht-button type="error">Danger Button</ht-button>
```

## Disabled

Set the `disabled` attribute.

```html
<ht-button disabled>Default Button</ht-button>
```

## Plain Button

Set the `plain` attribute.

```html
<ht-button plain>Primary Button</ht-button>
```

## Hairline Plain Button

Set the `hairline` attribute.

```html
<ht-button plain hairline>Primary Button</ht-button>
```

## Button Size

Set the `size` attribute, supports 'small', 'medium', 'large', default is 'medium'.

```html
<ht-button size="small">Small Button</ht-button>
<ht-button size="medium">Medium Button</ht-button>
<ht-button size="large">Large Button</ht-button>
```

## Loading Button

Set the `loading` attribute to make the button in loading state. A loading button is disabled from being clicked.

```html
<ht-button loading>Loading</ht-button>
```

## Text Button

Set `type` to `text`. Text buttons do not support other colors.

```html
<ht-button type="text">Text Button</ht-button>
```

## Icon Button

Set `type` to `icon` and set the `icon` attribute. The icon is the class name of the icon, which can directly use the icon class names from the `Icon` section.

```html
<ht-button type="icon" icon="picture"></ht-button>
```

## Button with Icon

Set the `icon` attribute without setting `type` to `icon` to use a button with an icon.

```html
<ht-button icon="edit-outline"></ht-button>
```

Combine with `classPrefix` to use custom icons, see [Icon Custom Icons](/component/icon#custom-icons).

```html
<ht-button classPrefix="fish" icon="kehuishouwu">Recyclable</ht-button>
```

## Block Button

Set the `block` attribute.

```html
<ht-button block>Primary Button</ht-button>
```

## Custom Style

Use the `custom-class` and `custom-style` attributes to customize the button's style. Here we use `custom-class` to add a `Material Design 3` style `box-shadow` to the button.

```html
<view class="page-class">
  <ht-button custom-class="custom-shadow">Primary Button</ht-button>
  <ht-button type="success" custom-class="custom-shadow">Success Button</ht-button>
  <ht-button type="info" custom-class="custom-shadow">Info Button</ht-button>
  <ht-button type="warning" custom-class="custom-shadow">Warning Button</ht-button>
  <ht-button type="error" custom-class="custom-shadow">Danger Button</ht-button>
</view>
```

```scss
.page-class {
  :deep() {
    .custom-shadow {
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    }
  }
}
```

## Attributes

| Parameter             | Description                                                                                                                                                           | Type        | Accepted Values                                           | Default      | Min Version |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------- | ------------ | -------- |
| type                   | Button type                                                                                                                                                       | string      | primary / success / info / warning / error / text / icon | primary      | -        |
| round                  | Round button                                                                                                                                                       | boolean     | -                                                        | true         | -        |
| plain                  | Plain button                                                                                                                                                       | boolean     | -                                                        | false        | -        |
| hairline               | Whether to use hairline border                                                                                                                                     | boolean     | -                                                        | false        | -        |
| loading                | Loading button                                                                                                                                                     | boolean     | -                                                        | false        | -        |
| block                  | Block button                                                                                                                                                       | boolean     | -                                                        | false        | -        |
| size                   | Button size                                                                                                                                                       | string      | small / medium / large                                   | medium       | -        |
| disabled               | Disabled button                                                                                                                                                       | boolean     | -                                                        | false        | -        |
| icon                   | Icon class name                                                                                                                                                       | string      | -                                                        | -            | -        |
| loading-color          | Loading icon color                                                                                                                                                   | string      | -                                                        | -            | -        |
| open-type              | WeChat open capability                                                                                                                                                   | string      | -                                                        | -            | -        |
| hover-stop-propagation | Specifies whether to prevent the ancestor node of this node from appearing in the clicked state                                                                                                                         | boolean     | -                                                        | false        | -        |
| lang                   | Specifies the language of the returned user information, zh_CN for Simplified Chinese, zh_TW for Traditional Chinese, en for English                                                                                                | string      | zh_CN / zh_TW                                            | en           | -        |
| session-from           | Session source, valid when open-type="contact"                                                                                                            | string      | -                                                        | -            | -        |
| session-message-title  | Session message card title, valid when open-type="contact"                                                                                                                  | string      | -                                                        | Current title     | -        |
| session-message-path   | Session message card click jump Mini Program path, valid when open-type="contact"                                                                                                    | string      | -                                                        | Current share path | -        |
| send-message-img       | Session message card image, valid when open-type="contact"                                                                                                                  | string      | -                                                        | Screenshot         | -        |
| app-parameter          | Parameters passed to the APP when opening the APP, valid when open-type=launchApp                                                                                                     | string      | -                                                        | -            | -        |
| show-message-card      | Whether to display the message card in the session, setting this parameter to true will show a prompt "May want to send Mini Program" in the bottom right corner when the user enters the customer service session, and the user can quickly send the Mini Program message after clicking, valid when open-type="contact" | boolean     | -                                                        | false        | -        |
| classPrefix            | Class name prefix, used for custom icons, see [icon](/component/icon#custom-icons)                                                                                           | string      | -                                                        | 'ht-icon'    | 0.1.27   |
| button-id              | Unique identifier of the button, can be used to set the id of the privacy consent authorization button                                                                                                                | string      | -                                                        | -            | 1.3.6    |
| scope                  | Used by Alipay Mini Program, valid when open-type is getAuthorize.                                                                                                        | ButtonScope | `phoneNumber` / `userInfo`                               | -            | 1.3.14   |

### ButtonOpenType Open Capabilities

WeChat Mini Program open capabilities, see [WeChat Mini Program Button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html).

| Value            | Description                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| feedback                  | Open the "Feedback" page, where users can submit feedback content and upload logs.                                         |
| share                     | Trigger user forwarding                                                                               |
| getUserInfo               | Get user information, which can be obtained from the @getuserinfo callback                                      |
| contact                   | Open customer service session, if the user returns to the application after clicking the message card in the session, specific information can be obtained from the @contact callback   |
| getPhoneNumber            | Get the user's phone number, which can be obtained from the @getphonenumber callback                                 |
| launchApp                 | Open APP in Mini Program, parameters can be passed to the APP through the app-parameter attribute                           |
| openSetting               | Open authorization settings page                                                                             |
| chooseAvatar              | Get user avatar, avatar information can be obtained from the @chooseavatar callback                                     |
| getAuthorize              | Support Mini Program authorization, used with `scope` in Alipay Mini Program, can implement `getPhoneNumber` and `getUserInfo` functions. |
| lifestyle                 | Follow the lifestyle account, Alipay Mini Program                                                                   |
| contactShare              | Share to contacts, Alipay Mini Program                                                             |
| agreePrivacyAuthorization | User agrees to privacy agreement button. User agreement to privacy agreement events can be monitored through @agreeprivacyauthorization.         |

## Events

| Event Name       | Description                                                         | Parameters     | Min Version |
| -------------- | ------------------------------------------------------------ | -------- | -------- |
| click          | Click event                                                     | `event`  | -        |
| getuserinfo    | Get user information                                                 | `detail` | -        |
| contact        | Customer service message callback, valid when open-type="contact"                      | `detail` | -        |
| getphonenumber | Get user phone number callback, valid when open-type=getPhoneNumber          | `detail` | -        |
| error          | Error callback when using open capabilities, valid when open-type=launchApp | `detail` | -        |
| launchapp      | Callback for successfully opening APP, valid when open-type=launchApp              | `detail` | -        |
| opensetting    | Callback after opening authorization settings page, valid when open-type=openSetting         | `detail` | -        |

## External Style Classes

| Class Name         | Description       | Min Version |
| ------------ | ---------- | -------- |
| custom-class | Root node style | -        |
