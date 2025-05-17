<template>
  <view :class="`ht-navbar-capsule ${customClass}`" :style="customStyle">
    <ht-icon @click="handleBack" name="chevron-left" custom-class="ht-navbar-capsule__icon" />
    <ht-icon @click="handleBackHome" name="home" custom-class="ht-navbar-capsule__icon" />
  </view>
</template>
<script lang="ts">
export default {
  name: 'ht-navbar-capsule',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wdIcon from '../ht-icon/ht-icon.vue'
import { navbarCapsuleProps } from './types'

const emit = defineEmits(['back', 'back-home'])
defineProps(navbarCapsuleProps)

function handleBack() {
  emit('back')
}
function handleBackHome() {
  emit('back-home')
}
</script>

<style lang="scss">
@import './index.scss';
</style>
