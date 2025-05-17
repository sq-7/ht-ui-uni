<template>
  <ht-transition
    :show="show"
    name="fade"
    custom-class="ht-overlay"
    :duration="duration"
    :custom-style="`z-index: ${zIndex}; ${customStyle}`"
    @click="handleClick"
    @touchmove.stop.prevent="lockScroll ? noop : ''"
  >
    <slot></slot>
  </ht-transition>
</template>
<script lang="ts">
export default {
  name: 'ht-overlay',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wdTransition from '../ht-transition/ht-transition.vue'
import { overlayProps } from './types'
// #ifdef H5
import useLockScroll from '../composables/useLockScroll'
// #endif

const props = defineProps(overlayProps)

const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}

function noop() {}

// #ifdef H5
useLockScroll(() => props.show && props.lockScroll)
// #endif
</script>

<style lang="scss">
@import './index.scss';
</style>
