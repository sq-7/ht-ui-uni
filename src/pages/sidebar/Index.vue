<!--
 * @Author: weisheng
 * @Date: 2023-11-06 20:08:34
 * @LastEditTime: 2025-04-02 19:59:55
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: /ht-ui-uni/src/pages/sidebar/Index.vue
 * 记得注释
-->
<template>
  <page-wraper>
    <demo-block :title="$t('ji-chu-yong-fa-0')" transparent>
      <view style="display: flex; justify-content: space-around">
        <ht-sidebar v-model="active1">
          <ht-sidebar-item :value="0" :label="$t('biao-qian-ming-cheng')" />
          <ht-sidebar-item :value="1" :label="$t('biao-qian-ming-cheng')" />
          <ht-sidebar-item :value="2" :label="$t('biao-qian-ming-cheng')" />
        </ht-sidebar>
        <ht-sidebar v-model="active2">
          <ht-sidebar-item :value="0" :label="$t('biao-qian-ming-cheng')" is-dot />
          <ht-sidebar-item :value="1" :label="$t('biao-qian-ming-cheng')" badge="5" />
          <ht-sidebar-item :value="2" :label="$t('biao-qian-ming-cheng')" badge="2" :badge-props="{ type: 'warning', modelValue: 55, max: 99 }" />
        </ht-sidebar>
        <ht-sidebar v-model="active3" :before-change="beforeChange">
          <ht-sidebar-item :value="0" :label="$t('biao-qian-ming-cheng')" />
          <ht-sidebar-item :value="1" :label="$t('biao-qian-ming-cheng')" disabled />
          <ht-sidebar-item :value="2" :label="$t('biao-qian-ming-cheng')" />
        </ht-sidebar>
      </view>
    </demo-block>

    <demo-block :title="$t('mao-dian-yong-fa-shi-li')" transparent>
      <view class="demo-button">
        <ht-button @click="handleClick1" :round="false" block size="large">{{ $t('mao-dian-yong-fa') }}</ht-button>
      </view>
    </demo-block>

    <demo-block :title="$t('qie-huan-ye-mian-yong-fa-shi-li')" transparent>
      <view class="demo-button">
        <ht-button @click="handleClick2" :round="false" block size="large">{{ $t('qie-huan-ye-mian') }}</ht-button>
      </view>
    </demo-block>

    <demo-block :title="$t('zi-ding-yi-tu-biao-shi-li')" transparent>
      <view class="demo-button">
        <ht-button @click="handleClick3" :round="false" block size="large">{{ $t('ziDingYiTuBiao') }}</ht-button>
      </view>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/ht-ui-uni'
import type { SidebarBeforeChange } from '@/uni_modules/ht-ui-uni/components/ht-sidebar/types'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { loading: showLoading, close: closeLoading } = useToast()
const { t } = useI18n()
const active1 = ref(0)
const active2 = ref(0)
const active3 = ref(0)

const beforeChange: SidebarBeforeChange = ({ value, resolve }) => {
  showLoading(t('qie-huan-zhong'))
  setTimeout(() => {
    closeLoading()
    resolve(true)
  }, 2000)
}

function handleClick1() {
  uni.navigateTo({ url: '/pages/sidebar/demo1' })
}
function handleClick2() {
  uni.navigateTo({ url: '/pages/sidebar/demo2' })
}

function handleClick3() {
  uni.navigateTo({ url: '/pages/sidebar/demo3' })
}
</script>
<style lang="scss" scoped>
.demo-button {
  width: 100%;
  box-sizing: border-box;
  padding: 0 24rpx;
}
</style>
