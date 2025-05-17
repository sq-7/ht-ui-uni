<template>
  <view :class="`ht-key-wrapper ${wider ? 'ht-key-wrapper--wider' : ''}`" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <view :class="keyClass">
      <ht-loading custom-class="ht-key__loading-icon" v-if="props.loading" />
      <template v-if="type === 'delete'">
        <template v-if="text">
          {{ text }}
        </template>
        <ht-icon v-else custom-class="ht-key__icon" name="keyboard-delete" size="22px"></ht-icon>
      </template>
      <template v-else-if="type === 'extra'">
        <template v-if="text">
          {{ text }}
        </template>
        <ht-icon v-else custom-class="ht-key__icon" name="keyboard-collapse" size="22px"></ht-icon>
      </template>
      <template v-else>{{ text }}</template>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  name: 'ht-key',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wdLoading from '../../ht-loading/ht-loading.vue'
import wdIcon from '../../ht-icon/ht-icon.vue'
import { computed, ref } from 'vue'
import { useTouch } from '../../composables/useTouch'
import { keyProps } from './types'

const props = defineProps(keyProps)
const emit = defineEmits(['press'])

const touch = useTouch()
const active = ref<boolean>(false)

const keyClass = computed(() => {
  return `ht-key ${props.large ? 'ht-key--large' : ''} ${props.type === 'delete' ? 'ht-key--delete' : ''} ${
    props.type === 'close' ? 'ht-key--close' : ''
  }`
})

function onTouchStart(event: TouchEvent) {
  touch.touchStart(event)
  active.value = true
}

function onTouchMove(event: TouchEvent) {
  touch.touchMove(event)
  if (touch.direction.value) {
    active.value = false
  }
}

function onTouchEnd() {
  if (active.value) {
    active.value = false
    emit('press', props.text, props.type)
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
