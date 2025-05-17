<!--
 * @Author: weisheng
 * @Date: 2024-11-09 12:35:25
 * @LastEditTime: 2024-11-09 15:01:32
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: /ht-ui-uni/src/uni_modules/ht-ui-uni/components/ht-loadmore/ht-loadmore.vue
 * 记得注释
-->
<template>
  <view :class="['ht-loadmore', customClass]" :style="customStyle" @click="reload">
    <ht-divider v-if="state === 'finished'">{{ finishedText || translate('finished') }}</ht-divider>
    <block v-if="state === 'error'">
      <text class="ht-loadmore__text">{{ errorText || translate('error') }}</text>
      <text class="ht-loadmore__text is-light">{{ translate('retry') }}</text>
      <ht-icon name="refresh" custom-class="ht-loadmore__refresh" />
    </block>
    <block v-if="state === 'loading'">
      <ht-loading v-bind="customLoadingProps" />
      <text class="ht-loadmore__text">{{ loadingText || translate('loading') }}</text>
    </block>
  </view>
</template>

<script lang="ts">
export default {
  name: 'ht-loadmore',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wdDivider from '../ht-divider/ht-divider.vue'
import wdLoading from '../ht-loading/ht-loading.vue'
import wdIcon from '../ht-icon/ht-icon.vue'
import { computed, ref } from 'vue'
import { useTranslate } from '../composables/useTranslate'
import { loadmoreProps, type LoadMoreState } from './types'
import type { LoadingProps } from '../ht-loading/types'
import { isDef, isUndefined, omitBy } from '../common/util'

const customLoadingProps = computed(() => {
  const loadingProps: Partial<LoadingProps> = isDef(props.loadingProps) ? omitBy(props.loadingProps, isUndefined) : {}
  loadingProps.customClass = `ht-loadmore__loading ${loadingProps.customClass || ''}`
  return loadingProps
})

const props = defineProps(loadmoreProps)
const emit = defineEmits(['reload'])

const { translate } = useTranslate('loadmore')

const currentState = ref<LoadMoreState | null>(null)

function reload() {
  if (props.state !== 'error') return
  currentState.value = 'loading'
  emit('reload')
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
