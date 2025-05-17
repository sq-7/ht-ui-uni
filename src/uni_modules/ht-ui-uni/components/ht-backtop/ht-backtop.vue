<template>
  <ht-transition :show="show" name="fade">
    <view
      :class="`ht-backtop ${customClass} is-${shape}`"
      :style="`z-index: ${zIndex}; bottom: ${bottom}px; right: ${right}px; ${customStyle}`"
      @click="handleBacktop"
    >
      <slot v-if="$slots.default"></slot>
      <ht-icon v-else custom-class="ht-backtop__backicon" name="backtop" :custom-style="iconStyle" />
    </view>
  </ht-transition>
</template>

<script lang="ts">
export default {
  name: 'ht-backtop',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wdTransition from '../ht-transition/ht-transition.vue'
import wdIcon from '../ht-icon/ht-icon.vue'
import { computed } from 'vue'
import { backtopProps } from './types'

const props = defineProps(backtopProps)

const show = computed(() => props.scrollTop > props.top)

function handleBacktop() {
  uni.pageScrollTo({
    scrollTop: 0,
    duration: props.duration
  })
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
