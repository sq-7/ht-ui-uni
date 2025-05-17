<template>
  <view :class="`ht-pager ${customClass}`" :style="customStyle" v-if="!(hideIfOnePage && totalPageNum === 1)">
    <view class="ht-pager__content">
      <ht-button :plain="modelValue > 1" type="info" size="small" :disabled="modelValue <= 1" custom-class="ht-pager__nav" @click="sub">
        <text v-if="!showIcon">{{ prevText || translate('prev') }}</text>
        <ht-icon
          v-else
          :custom-class="`ht-pager__left ht-pager__icon ${modelValue <= 1 ? 'ht-pager__nav--disabled' : 'ht-pager__nav--active'}`"
          name="arrow-right"
        ></ht-icon>
      </ht-button>
      <view class="ht-pager__size">
        <text class="ht-pager__current">{{ modelValue }}</text>
        <text class="ht-pager__separator">/</text>
        <text>{{ totalPageNum }}</text>
      </view>
      <ht-button
        :plain="modelValue < totalPageNum"
        type="info"
        size="small"
        :disabled="modelValue >= totalPageNum"
        custom-class="ht-pager__nav"
        @click="add"
      >
        <text v-if="!showIcon">{{ nextText || translate('next') }}</text>
        <ht-icon
          v-else
          :custom-class="`ht-pager__icon ${modelValue >= totalPageNum ? 'ht-pager__nav--disabled' : 'ht-pager__nav--active'}`"
          name="arrow-right"
        ></ht-icon>
      </ht-button>
    </view>
    <view class="ht-pager__message" v-if="showMessage">
      <text>{{ translate('page', modelValue) }}，</text>
      <text v-if="total">{{ translate('total', total) }}，</text>
      <text>{{ translate('size', pageSize) }}</text>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'ht-pagination',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wdIcon from '../ht-icon/ht-icon.vue'
import wdButton from '../ht-button/ht-button.vue'
import { ref, watch } from 'vue'
import { useTranslate } from '../composables/useTranslate'
import { paginationProps } from './types'

const { translate } = useTranslate('pagination')

const props = defineProps(paginationProps)
const emit = defineEmits(['change', 'update:modelValue'])

const totalPageNum = ref<number>(0) // 总页数

watch(
  () => props.totalPage,
  (newValue) => {
    if (!totalPageNum.value && newValue) {
      totalPageNum.value = newValue
    }
  },
  { immediate: true, deep: true }
)

watch(
  () => props.total,
  () => {
    updateTotalPage()
  },
  { immediate: true, deep: true }
)

function add() {
  const { modelValue } = props
  if (modelValue > totalPageNum.value - 1) {
    return
  }
  emit('change', { value: modelValue + 1 })
  emit('update:modelValue', modelValue + 1)
}

function sub() {
  const { modelValue } = props
  if (modelValue < 2) {
    return
  }
  emit('change', { value: modelValue - 1 })
  emit('update:modelValue', modelValue - 1)
}

function updateTotalPage() {
  const { total, pageSize } = props
  totalPageNum.value = Math.ceil(total / pageSize)
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
