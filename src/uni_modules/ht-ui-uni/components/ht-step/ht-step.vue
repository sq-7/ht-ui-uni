<template>
  <view
    v-if="currentStatus"
    :class="`ht-step ${customClass} ${currentStatus ? 'is-' + currentStatus : ''} ${canAlignCenter ? 'is-center' : ''}  ${
      vertical ? 'is-vertical' : ''
    }`"
    :style="rootStyle"
  >
    <view :class="`ht-step__header  ${dot ? 'is-dot' : ''}`">
      <view :class="`ht-step__icon  ${dot ? 'is-dot' : !!icon || $slots.icon ? 'is-icon' : 'is-text'}`">
        <view v-if="dot" class="ht-step__dot"></view>
        <slot v-else-if="$slots.icon" name="icon" />
        <ht-icon v-else-if="icon" custom-class="ht-step__icon-inner" :name="icon" />
        <view v-else class="ht-step__icon-outer">
          <ht-icon v-if="currentStatus === 'finished'" name="check-bold" />
          <ht-icon v-else-if="currentStatus === 'error'" name="close-bold" />
          <text v-else>{{ index + 1 }}</text>
        </view>
      </view>
      <view v-if="index < childrenLength - 1" class="ht-step__line"></view>
    </view>
    <view class="ht-step__content">
      <view :class="`ht-step__title ${$slots.description || description ? 'is-description' : ''}`">
        <slot v-if="$slots.title" name="title" />
        <text v-else>{{ currentTitle }}</text>
      </view>
      <view v-if="$slots.description || description" class="ht-step__description">
        <slot v-if="$slots.description" name="description" />
        <text v-else>{{ description }}</text>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  name: 'ht-step',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>
<script lang="ts" setup>
import wdIcon from '../ht-icon/ht-icon.vue'
import { computed } from 'vue'
import { useParent } from '../composables/useParent'
import { STEPS_KEY } from '../ht-steps/types'
import { isDef, objToStyle } from '../common/util'
import { useTranslate } from '../composables/useTranslate'
import { stepProps } from './types'
import type { CSSProperties } from 'vue'

const props = defineProps(stepProps)

const { parent: steps, index } = useParent(STEPS_KEY)

const { translate } = useTranslate('steps')

const currentStatus = computed(() => {
  return getCurrentStatus(index.value)
})

const currentTitle = computed(() => {
  return getCurrentTitle(currentStatus.value)
})
const rootStyle = computed(() => {
  const style: CSSProperties = {}
  if (steps) {
    const { vertical, space } = steps.props
    if (vertical) {
      if (isDef(space)) {
        style['height'] = space
      }
    } else {
      style['width'] = space || 100 / steps.children.length + '%'
    }
  }
  return `${objToStyle(style)};${props.customStyle}`
})

const canAlignCenter = computed(() => {
  if (isDef(steps)) {
    const { vertical, alignCenter } = steps.props
    return Boolean(!vertical && alignCenter)
  } else {
    return false
  }
})

const vertical = computed(() => {
  if (isDef(steps)) {
    return Boolean(steps.props.vertical)
  } else {
    return false
  }
})
const dot = computed(() => {
  if (isDef(steps)) {
    return Boolean(steps.props.dot)
  } else {
    return false
  }
})

const childrenLength = computed(() => {
  if (isDef(steps)) {
    return Number(steps.children.length)
  } else {
    return 0
  }
})

function getCurrentStatus(index: number) {
  if (props.status) {
    return props.status
  }

  if (steps) {
    const { active } = steps.props
    if (Number(active) > index) {
      return 'finished'
    } else if (Number(active) === index) {
      return 'process'
    } else {
      return 'wait'
    }
  } else {
    return 'wait'
  }
}
function getCurrentTitle(currentStatus: string) {
  if (props.title) return props.title

  switch (currentStatus) {
    case 'finished':
      return translate('finished')
    case 'error':
      return translate('failed')
    case 'process':
      return translate('process')
    case 'wait':
    default:
      return translate('wait')
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
