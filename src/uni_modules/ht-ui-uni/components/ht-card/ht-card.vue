<template>
  <view :class="['ht-card', type == 'rectangle' ? 'is-rectangle' : '', customClass]" :style="customStyle">
    <view :class="['ht-card__title-content', customTitleClass]" v-if="title || $slots.title">
      <view class="ht-card__title">
        <text v-if="title">{{ title }}</text>
        <slot v-else name="title"></slot>
      </view>
    </view>
    <view :class="`ht-card__content ${customContentClass}`">
      <slot></slot>
    </view>
    <view :class="`ht-card__footer ${customFooterClass}`" v-if="$slots.footer">
      <slot name="footer"></slot>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'ht-card',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import { cardProps } from './types'

defineProps(cardProps)
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
