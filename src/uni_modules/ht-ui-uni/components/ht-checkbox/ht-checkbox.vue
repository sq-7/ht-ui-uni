<template>
  <view
    :class="`ht-checkbox ${innerCell ? 'is-cell-box' : ''} ${innerShape === 'button' ? 'is-button-box' : ''} ${isChecked ? 'is-checked' : ''} ${
      isFirst ? 'is-first-child' : ''
    } ${isLast ? 'is-last-child' : ''} ${innerInline ? 'is-inline' : ''} ${innerShape === 'button' ? 'is-button' : ''} ${
      innerDisabled ? 'is-disabled' : ''
    } ${innerSize ? 'is-' + innerSize : ''} ${customClass}`"
    :style="customStyle"
    @click="toggle"
  >
    <!--shape为button时，移除ht-checkbox__shape，只保留ht-checkbox__label-->
    <view
      v-if="innerShape !== 'button'"
      :class="`ht-checkbox__shape ${innerShape === 'square' ? 'is-square' : ''} ${customShapeClass}`"
      :style="isChecked && !innerDisabled && innerCheckedColor ? 'color :' + innerCheckedColor : ''"
    >
      <ht-icon custom-class="ht-checkbox__check" name="check-bold" />
    </view>
    <!--shape为button时只保留ht-checkbox__label-->
    <view
      :class="`ht-checkbox__label ${customLabelClass}`"
      :style="isChecked && innerShape === 'button' && !innerDisabled && innerCheckedColor ? 'color:' + innerCheckedColor : ''"
    >
      <!--button选中时展示的icon-->
      <ht-icon v-if="innerShape === 'button' && isChecked" custom-class="ht-checkbox__btn-check" name="check-bold" />
      <!--文案-->
      <view class="ht-checkbox__txt" :style="maxWidth ? 'max-width:' + maxWidth : ''">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'ht-checkbox',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wdIcon from '../ht-icon/ht-icon.vue'
import { computed, getCurrentInstance, onBeforeMount, watch } from 'vue'
import { useParent } from '../composables/useParent'
import { CHECKBOX_GROUP_KEY } from '../ht-checkbox-group/types'
import { getPropByPath, isDef } from '../common/util'
import { checkboxProps, type CheckboxExpose } from './types'

const props = defineProps(checkboxProps)
const emit = defineEmits(['change', 'update:modelValue'])

defineExpose<CheckboxExpose>({
  toggle
})

const { parent: checkboxGroup, index } = useParent(CHECKBOX_GROUP_KEY)

const isChecked = computed(() => {
  if (checkboxGroup) {
    return checkboxGroup.props.modelValue.indexOf(props.modelValue) > -1
  } else {
    return props.modelValue === props.trueValue
  }
}) // 是否被选中

const isFirst = computed(() => {
  return index.value === 0
})

const isLast = computed(() => {
  const children = isDef(checkboxGroup) ? checkboxGroup.children : []
  return index.value === children.length - 1
})
const { proxy } = getCurrentInstance() as any

watch(
  () => props.modelValue,
  () => {
    // 组合使用走这个逻辑
    if (checkboxGroup) {
      checkName()
    }
  }
)

watch(
  () => props.shape,
  (newValue) => {
    const type = ['circle', 'square', 'button']
    if (isDef(newValue) && type.indexOf(newValue) === -1) console.error(`shape must be one of ${type.toString()}`)
  }
)

const innerShape = computed(() => {
  return props.shape || getPropByPath(checkboxGroup, 'props.shape') || 'circle'
})

const innerCheckedColor = computed(() => {
  return props.checkedColor || getPropByPath(checkboxGroup, 'props.checkedColor')
})

const innerDisabled = computed(() => {
  if (!checkboxGroup) {
    return props.disabled
  }
  const { max, min, modelValue, disabled } = checkboxGroup.props
  if (
    (max && modelValue.length >= max && !isChecked.value) ||
    (min && modelValue.length <= min && isChecked.value) ||
    props.disabled === true ||
    (disabled && props.disabled === null)
  ) {
    return true
  }

  return props.disabled
})

const innerInline = computed(() => {
  return getPropByPath(checkboxGroup, 'props.inline') || false
})

const innerCell = computed(() => {
  return getPropByPath(checkboxGroup, 'props.cell') || false
})

const innerSize = computed(() => {
  return props.size || getPropByPath(checkboxGroup, 'props.size')
})

onBeforeMount(() => {
  // eslint-disable-next-line quotes
  if (props.modelValue === null) console.error("checkbox's value must be set")
})

/**
 * @description 检测checkbox绑定的value是否和其它checkbox的value冲突
 * @param {Object} self 自身
 * @param  myName 自己的标识符
 */
function checkName() {
  checkboxGroup &&
    checkboxGroup.children &&
    checkboxGroup.children.forEach((child: any) => {
      if (child.$.uid !== proxy.$.uid && child.modelValue === props.modelValue) {
        console.error(`The checkbox's bound value: ${props.modelValue} has been used`)
      }
    })
}
/**
 * @description 点击checkbox的Event handle
 */
function toggle() {
  if (innerDisabled.value) return
  // 复选框单独使用时点击反选，并且在checkbox上触发change事件
  if (checkboxGroup) {
    emit('change', {
      value: !isChecked.value
    })
    checkboxGroup.changeSelectState(props.modelValue)
  } else {
    const newVal = props.modelValue === props.trueValue ? props.falseValue : props.trueValue
    emit('update:modelValue', newVal)
    emit('change', {
      value: newVal
    })
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
