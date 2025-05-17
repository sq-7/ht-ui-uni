<template>
  <page-wraper>
    <demo-block>
      <ht-checkbox shape="square" size="large" v-model="isSquare">{{ $t('xianShiFangXing') }}</ht-checkbox>
      <ht-checkbox shape="square" size="large" v-model="isCustomIcon">{{ $t('ziDingYiTuBiao') }}</ht-checkbox>
      <ht-checkbox shape="square" size="large" v-model="isTop">{{ $t('ziDingYiJuLi') }}</ht-checkbox>
      <ht-checkbox shape="square" size="large" v-model="isStyle">{{ $t('ziDingYiYangShi') }}</ht-checkbox>
      <ht-checkbox shape="square" size="large" v-model="isDuration">{{ $t('ziDingYiFanHuiDingBuGunDongShiJian') }}</ht-checkbox>
    </demo-block>
    <ht-backtop
      v-if="isCustomIcon"
      :scrollTop="scrollTop"
      :shape="isSquare ? 'square' : undefined"
      :top="isTop ? 600 : undefined"
      :customStyle="isStyle ? 'background: #007aff;color:white;' : undefined"
      :duration="isDuration ? 1000 : undefined"
    >
      <text :style="`color: ${isStyle ? 'white' : '#333'};`">TOP</text>
    </ht-backtop>
    <ht-backtop
      v-else
      :scrollTop="scrollTop"
      :shape="isSquare ? 'square' : undefined"
      :top="isTop ? 600 : undefined"
      :customStyle="isStyle ? 'background: #007aff;color:white;' : undefined"
      :duration="isDuration ? 1000 : undefined"
    ></ht-backtop>
    <view style="height: 2000px; color: red"></view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { onPageScroll } from '@dcloudio/uni-app'
import { ref } from 'vue'

const scrollTop = ref(0)
onPageScroll((e) => {
  scrollTop.value = e.scrollTop
})

const isSquare = ref(false)
const isCustomIcon = ref(false)
const isTop = ref(false)
const isStyle = ref(false)
const isDuration = ref(false)
</script>
<style lang="scss" scoped></style>
