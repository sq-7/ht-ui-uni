<template>
  <view :style="{ height: addUnit(height) }">
    <view :class="`ht-navbar ${customClass} ${fixed ? 'is-fixed' : ''} ${bordered ? 'is-border' : ''}`" :style="rootStyle">
      <view class="ht-navbar__content">
        <view class="ht-navbar__capsule" v-if="$slots.capsule">
          <slot name="capsule" />
        </view>

        <view :class="`ht-navbar__left ${leftDisabled ? 'is-disabled' : ''}`" @click="handleClickLeft" v-else-if="!$slots.left">
          <ht-icon v-if="leftArrow" name="arrow-left" custom-class="ht-navbar__arrow" />
          <view v-if="leftText" class="ht-navbar__text">{{ leftText }}</view>
        </view>

        <view v-else :class="`ht-navbar__left ${leftDisabled ? 'is-disabled' : ''}`" @click="handleClickLeft">
          <slot name="left" />
        </view>

        <view class="ht-navbar__title">
          <slot name="title" />
          <block v-if="!$slots.title && title">{{ title }}</block>
        </view>
        <view :class="`ht-navbar__right ${rightDisabled ? 'is-disabled' : ''}`" @click="handleClickRight" v-if="$slots.right || rightText">
          <slot name="right" />

          <view v-if="!$slots.right && rightText" class="ht-navbar__text" hover-class="ht-navbar__text--hover" :hover-stay-time="70">
            {{ rightText }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  name: 'ht-navbar',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wdIcon from '../ht-icon/ht-icon.vue'
import { type CSSProperties, computed, getCurrentInstance, nextTick, onMounted, ref, watch } from 'vue'
import { getRect, addUnit, isDef, objToStyle } from '../common/util'
import { navbarProps } from './types'

const props = defineProps(navbarProps)
const emit = defineEmits(['click-left', 'click-right'])

const height = ref<number | ''>('') // 占位高度

const { statusBarHeight } = uni.getSystemInfoSync()

watch(
  [() => props.fixed, () => props.placeholder],
  () => {
    setPlaceholderHeight()
  },
  { deep: true, immediate: false }
)

const rootStyle = computed(() => {
  const style: CSSProperties = {}
  if (props.fixed && isDef(props.zIndex)) {
    style['z-index'] = props.zIndex
  }
  if (props.safeAreaInsetTop) {
    style['padding-top'] = addUnit(statusBarHeight || 0)
  }
  return `${objToStyle(style)};${props.customStyle}`
})

onMounted(() => {
  if (props.fixed && props.placeholder) {
    nextTick(() => {
      setPlaceholderHeight()
    })
  }
})

function handleClickLeft() {
  if (!props.leftDisabled) {
    emit('click-left')
  }
}

function handleClickRight() {
  if (!props.rightDisabled) {
    emit('click-right')
  }
}

const { proxy } = getCurrentInstance() as any

function setPlaceholderHeight() {
  if (!props.fixed || !props.placeholder) {
    return
  }

  getRect('.ht-navbar', false, proxy).then((res) => {
    height.value = res.height as number
  })
}
</script>

<style lang="scss">
@import './index.scss';
</style>
