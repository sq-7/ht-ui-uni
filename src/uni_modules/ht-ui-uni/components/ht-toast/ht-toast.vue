<template>
  <ht-overlay v-if="cover" :z-index="zIndex" lock-scroll :show="show" custom-style="background-color: transparent;pointer-events: auto;"></ht-overlay>
  <ht-transition name="fade" :show="show" :custom-style="transitionStyle" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
    <view :class="rootClass">
      <!--iconName优先级更高-->
      <ht-loading
        v-if="iconName === 'loading'"
        :type="loadingType"
        :color="loadingColor"
        :size="loadingSize"
        :custom-class="`ht-toast__icon ${direction === 'vertical' ? 'is-vertical' : ''}`"
      />
      <view
        :class="`ht-toast__iconWrap ht-toast__icon ${direction === 'vertical' ? 'is-vertical' : ''}`"
        v-else-if="iconName === 'success' || iconName === 'warning' || iconName === 'info' || iconName === 'error'"
      >
        <view class="ht-toast__iconBox">
          <view class="ht-toast__iconSvg" :style="svgStyle"></view>
        </view>
      </view>
      <ht-icon
        v-else-if="iconClass"
        :custom-class="`ht-toast__icon ${direction === 'vertical' ? 'is-vertical' : ''}`"
        :size="iconSize"
        :class-prefix="classPrefix"
        :name="iconClass"
      ></ht-icon>
      <!--文本-->
      <view v-if="msg" class="ht-toast__msg">{{ msg }}</view>
    </view>
  </ht-transition>
</template>

<script lang="ts">
export default {
  name: 'ht-toast',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wdIcon from '../ht-icon/ht-icon.vue'
import wdLoading from '../ht-loading/ht-loading.vue'
import wdOverlay from '../ht-overlay/ht-overlay.vue'
import wdTransition from '../ht-transition/ht-transition.vue'

import { computed, inject, onBeforeMount, ref, watch, type CSSProperties } from 'vue'
import base64 from '../common/base64'
import { defaultOptions, getToastOptionKey, toastIcon } from '.'
import { toastProps, type ToastDirection, type ToastLoadingType, type ToastOptions, type ToastProps } from './types'
import { addUnit, isDef, isFunction, objToStyle } from '../common/util'

const props = defineProps(toastProps)
const iconName = ref<string>('') // 图标类型
const msg = ref<string>('') // 消息内容
const position = ref<string>('middle')
const show = ref<boolean>(false)
const zIndex = ref<number>(100)
const loadingType = ref<ToastLoadingType>('outline')
const loadingColor = ref<string>('#4D80F0')
const iconSize = ref<string>() // 图标大小
const loadingSize = ref<string>() // loading大小
const svgStr = ref<string>('') // 图标
const cover = ref<boolean>(false) // 是否存在遮罩层
const classPrefix = ref<string>('ht-icon') // 图标前缀
const iconClass = ref<string>('') // 图标类名
const direction = ref<ToastDirection>('horizontal') // toast布局方向

let opened: (() => void) | null = null

let closed: (() => void) | null = null

const toastOptionKey = getToastOptionKey(props.selector)
const toastOption = inject(toastOptionKey, ref<ToastOptions>(defaultOptions)) // toast选项

// 监听options变化展示
watch(
  () => toastOption.value,
  (newVal: ToastOptions) => {
    reset(newVal)
  },
  {
    deep: true,
    immediate: true
  }
)

// 监听options变化展示
watch(
  () => iconName.value,
  () => {
    buildSvg()
  },
  {
    deep: true,
    immediate: true
  }
)

/**
 * 动画自定义样式
 */
const transitionStyle = computed(() => {
  const style: CSSProperties = {
    'z-index': zIndex.value,
    position: 'fixed',
    top: '50%',
    left: 0,
    width: '100%',
    transform: 'translate(0, -50%)',
    'text-align': 'center',
    'pointer-events': 'none'
  }
  return objToStyle(style)
})

const rootClass = computed(() => {
  return `ht-toast ${props.customClass} ht-toast--${position.value} ${
    (iconName.value !== 'loading' || msg.value) && (iconName.value || iconClass.value) ? 'ht-toast--with-icon' : ''
  } ${iconName.value === 'loading' && !msg.value ? 'ht-toast--loading' : ''} ${direction.value === 'vertical' ? 'is-vertical' : ''}`
})

const svgStyle = computed(() => {
  const style: CSSProperties = {
    backgroundImage: `url(${svgStr.value})`
  }
  if (isDef(iconSize.value)) {
    style.width = iconSize.value
    style.height = iconSize.value
  }
  return objToStyle(style)
})

onBeforeMount(() => {
  buildSvg()
})

function handleAfterEnter() {
  if (isFunction(opened)) {
    opened()
  }
}

function handleAfterLeave() {
  if (isFunction(closed)) {
    closed()
  }
}

function buildSvg() {
  if (iconName.value !== 'success' && iconName.value !== 'warning' && iconName.value !== 'info' && iconName.value !== 'error') return
  const iconSvg = toastIcon[iconName.value]()
  const iconSvgStr = `"data:image/svg+xml;base64,${base64(iconSvg)}"`
  svgStr.value = iconSvgStr
}

/**
 * 重置toast选项值
 * @param option toast选项值
 */
function reset(option: ToastOptions) {
  show.value = isDef(option.show) ? option.show : false

  if (show.value) {
    mergeOptionsWithProps(option, props)
  }
}

function mergeOptionsWithProps(option: ToastOptions, props: ToastProps) {
  iconName.value = isDef(option.iconName!) ? option.iconName! : props.iconName
  iconClass.value = isDef(option.iconClass!) ? option.iconClass! : props.iconClass
  msg.value = isDef(option.msg!) ? option.msg! : props.msg
  position.value = isDef(option.position!) ? option.position! : props.position
  zIndex.value = isDef(option.zIndex!) ? option.zIndex! : props.zIndex
  loadingType.value = isDef(option.loadingType!) ? option.loadingType! : props.loadingType
  loadingColor.value = isDef(option.loadingColor!) ? option.loadingColor! : props.loadingColor
  iconSize.value = isDef(option.iconSize) ? addUnit(option.iconSize) : isDef(props.iconSize) ? addUnit(props.iconSize) : undefined
  loadingSize.value = isDef(option.loadingSize) ? addUnit(option.loadingSize) : isDef(props.loadingSize) ? addUnit(props.loadingSize) : undefined
  cover.value = isDef(option.cover!) ? option.cover! : props.cover
  classPrefix.value = isDef(option.classPrefix) ? option.classPrefix : props.classPrefix
  direction.value = isDef(option.direction) ? option.direction : props.direction
  closed = isFunction(option.closed) ? option.closed : isFunction(props.closed) ? props.closed : null
  opened = isFunction(option.opened) ? option.opened : isFunction(props.opened) ? props.opened : null
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
