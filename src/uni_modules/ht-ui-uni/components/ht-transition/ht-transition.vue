<template>
  <view v-if="!lazyRender || inited" :class="rootClass" :style="style" @transitionend="onTransitionEnd" @click="handleClick">
    <slot />
  </view>
</template>

<script lang="ts">
export default {
  name: 'ht-transition',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import { computed, onBeforeMount, ref, watch } from 'vue'
import { isObj, isPromise, pause } from '../common/util'
import { transitionProps, type TransitionName } from './types'
import { AbortablePromise } from '../common/AbortablePromise'

const getClassNames = (name?: TransitionName | TransitionName[]) => {
  let enter: string = `${props.enterClass} ${props.enterActiveClass}`
  let enterTo: string = `${props.enterToClass} ${props.enterActiveClass}`
  let leave: string = `${props.leaveClass} ${props.leaveActiveClass}`
  let leaveTo: string = `${props.leaveToClass} ${props.leaveActiveClass}`

  if (Array.isArray(name)) {
    for (let index = 0; index < name.length; index++) {
      enter = `ht-${name[index]}-enter ht-${name[index]}-enter-active ${enter}`
      enterTo = `ht-${name[index]}-enter-to ht-${name[index]}-enter-active ${enterTo}`
      leave = `ht-${name[index]}-leave ht-${name[index]}-leave-active ${leave}`
      leaveTo = `ht-${name[index]}-leave-to ht-${name[index]}-leave-active ${leaveTo}`
    }
  } else if (name) {
    enter = `ht-${name}-enter ht-${name}-enter-active ${enter}`
    enterTo = `ht-${name}-enter-to ht-${name}-enter-active ${enterTo}`
    leave = `ht-${name}-leave ht-${name}-leave-active ${leave}`
    leaveTo = `ht-${name}-leave-to ht-${name}-leave-active ${leaveTo}`
  }
  return {
    enter: enter,
    'enter-to': enterTo,
    leave: leave,
    'leave-to': leaveTo
  }
}

const props = defineProps(transitionProps)
const emit = defineEmits(['click', 'before-enter', 'enter', 'before-leave', 'leave', 'after-leave', 'after-enter'])

// 初始化是否完成
const inited = ref<boolean>(false)
// 是否显示
const display = ref<boolean>(false)
// 当前动画状态
const status = ref<string>('')
// 动画是否结束
const transitionEnded = ref<boolean>(false)
// 动画持续时间
const currentDuration = ref<number>(300)
// 类名
const classes = ref<string>('')
// 用于控制enter和leave的顺序执行
const enterPromise = ref<AbortablePromise<void> | null>(null)

// 动画进入的生命周期
const enterLifeCyclePromises = ref<AbortablePromise<unknown> | null>(null)

// 动画离开的生命周期
const leaveLifeCyclePromises = ref<AbortablePromise<unknown> | null>(null)

const style = computed(() => {
  return `-webkit-transition-duration:${currentDuration.value}ms;transition-duration:${currentDuration.value}ms;${
    display.value || !props.destroy ? '' : 'display: none;'
  }${props.customStyle}`
})

const rootClass = computed(() => {
  return `ht-transition ${props.customClass}  ${classes.value}`
})

onBeforeMount(() => {
  if (props.show) {
    enter()
  }
})

watch(
  () => props.show,
  (newVal) => {
    handleShow(newVal)
  },
  { deep: true }
)

function handleClick() {
  emit('click')
}

function handleShow(value: boolean) {
  if (value) {
    handleAbortPromise()
    enter()
  } else {
    leave()
  }
}
/**
 * 取消所有的promise
 */
function handleAbortPromise() {
  isPromise(enterPromise.value) && enterPromise.value.abort()
  isPromise(enterLifeCyclePromises.value) && enterLifeCyclePromises.value.abort()
  isPromise(leaveLifeCyclePromises.value) && leaveLifeCyclePromises.value.abort()
  enterPromise.value = null
  enterLifeCyclePromises.value = null
  leaveLifeCyclePromises.value = null
}

function enter() {
  enterPromise.value = new AbortablePromise(async (resolve) => {
    try {
      const classNames = getClassNames(props.name)
      const duration = isObj(props.duration) ? (props.duration as any).enter : props.duration
      status.value = 'enter'
      emit('before-enter')
      enterLifeCyclePromises.value = pause()
      await enterLifeCyclePromises.value
      emit('enter')
      classes.value = classNames.enter
      currentDuration.value = duration
      enterLifeCyclePromises.value = pause()
      await enterLifeCyclePromises.value
      inited.value = true
      display.value = true
      enterLifeCyclePromises.value = pause()
      await enterLifeCyclePromises.value
      enterLifeCyclePromises.value = null
      transitionEnded.value = false
      classes.value = classNames['enter-to']
      resolve()
    } catch (error) {
      /**
       *
       */
    }
  })
}
async function leave() {
  if (!enterPromise.value) {
    transitionEnded.value = false
    return onTransitionEnd()
  }
  try {
    await enterPromise.value
    if (!display.value) return
    const classNames = getClassNames(props.name)
    const duration = isObj(props.duration) ? (props.duration as any).leave : props.duration
    status.value = 'leave'
    emit('before-leave')
    currentDuration.value = duration
    leaveLifeCyclePromises.value = pause()
    await leaveLifeCyclePromises.value
    emit('leave')
    classes.value = classNames.leave
    leaveLifeCyclePromises.value = pause()
    await leaveLifeCyclePromises.value
    transitionEnded.value = false
    classes.value = classNames['leave-to']
    leaveLifeCyclePromises.value = setPromise(currentDuration.value)
    await leaveLifeCyclePromises.value
    leaveLifeCyclePromises.value = null
    onTransitionEnd()
    enterPromise.value = null
  } catch (error) {
    /**
     *
     */
  }
}

/**
 * 定时器promise化
 * @param duration 持续时间ms
 */
function setPromise(duration: number) {
  return new AbortablePromise<void>((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      resolve()
    }, duration)
  })
}
function onTransitionEnd() {
  if (transitionEnded.value) return

  transitionEnded.value = true
  if (status.value === 'leave') {
    // 离开后触发
    emit('after-leave')
  } else if (status.value === 'enter') {
    // 进入后触发
    emit('after-enter')
  }

  if (!props.show && display.value) {
    display.value = false
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
