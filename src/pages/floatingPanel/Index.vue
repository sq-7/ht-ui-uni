<template>
  <ht-toast></ht-toast>
  <view class="floating-panel">
    <page-wraper>
      <ht-tabs v-model="tab">
        <ht-tab :title="$t('ji-chu-yong-fa-1')">
          <ht-floating-panel safeAreaInsetBottom>
            <ht-cell-group border>
              <ht-cell v-for="item in data" :key="item" :title="item" />
            </ht-cell-group>
          </ht-floating-panel>
        </ht-tab>
        <ht-tab :title="$t('zi-ding-yi-mao-dian-0')">
          <ht-floating-panel v-model:height="height" :anchors="anchors" safeAreaInsetBottom @heightChange="handleHeightChange">
            <view class="inner-content">{{ $t('"zi-ding-yi-mao-dian"') }} {{ anchors.map(addUnit) }} - {{ addUnit(height.toFixed(0)) }}</view>
          </ht-floating-panel>
        </ht-tab>
        <ht-tab :title="$t('jin-tou-bu-tuo-zhuai-0')">
          <ht-floating-panel :contentDraggable="false">
            <view class="inner-content">{{ $t('nei-rong-qu-bu-ke-yi-tuo-zhuai') }}</view>
          </ht-floating-panel>
        </ht-tab>
      </ht-tabs>
    </page-wraper>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useToast } from '@/uni_modules/ht-ui-uni'
import { addUnit } from '@/uni_modules/ht-ui-uni/components/common/util'

const { show } = useToast()

const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const tab = ref<number>(0)
const height = ref<number>(0)
const windowHeight = ref<number>(0)
const anchors = ref<number[]>([])

const handleHeightChange = ({ height }: { height: number }) => {
  show(addUnit(height))
}

onLoad(() => {
  windowHeight.value = uni.getSystemInfoSync().windowHeight
  anchors.value = [100, Math.round(0.4 * windowHeight.value), Math.round(0.7 * windowHeight.value)]
  height.value = anchors.value[1]
})
</script>

<style lang="scss" scoped>
.inner-content {
  padding: 1rem;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
</style>
