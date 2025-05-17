<!--
 * @Author: weisheng
 * @Date: 2023-12-14 11:21:58
 * @LastEditTime: 2024-03-15 21:29:33
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: /ht-ui-uni/src/uni_modules/ht-ui-uni/components/ht-form-item/ht-form-item.vue
 * 记得注释
-->
<template>
  <ht-cell
    custom-class="ht-form-item"
    :required="required"
    :title="label"
    :center="center"
    :border="border"
    :title-width="labelWidth"
    :is-link="isLink"
  >
    <slot></slot>
    <view v-if="errorMessage" class="ht-form-item__error-message">{{ errorMessage }}</view>
  </ht-cell>
</template>
<script lang="ts">
export default {
  name: 'ht-form-item',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { useParent } from '../composables/useParent'
import WdCell from '../ht-cell/ht-cell.vue'
import { FORM_KEY } from '../ht-form/types'
import { formItemProps } from './types'

const props = defineProps(formItemProps)

const { parent: form, index } = useParent(FORM_KEY)

const errorMessage = computed(() => {
  if (form && props.prop && form.errorMessages && form.errorMessages[props.prop]) {
    return form.errorMessages[props.prop]
  } else {
    return ''
  }
})

const border = computed(() => {
  if (index.value > 0 && form && form.props.border) {
    return true
  } else {
    return false
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
