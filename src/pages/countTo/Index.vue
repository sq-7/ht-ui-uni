<template>
  <page-wraper>
    <demo-block :title="$t('jiBenYongFa')">
      <ht-count-to :endVal="endVal" suffix="年" color="#16baaa"></ht-count-to>
      <ht-count-to prefix="￥" :decimals="2" :endVal="186.321" :fontSize="32" suffix="%" color="#1e9fff"></ht-count-to>
      <ht-count-to prefix="￥" :decimals="2" :endVal="21286.321" :fontSize="32" suffix="%" color="#ff5722"></ht-count-to>
      <ht-count-to prefix="￥" :decimals="2" :endVal="21286.321" :fontSize="32" suffix="%" color="#ffb800" :duration="2000"></ht-count-to>
    </demo-block>

    <demo-block :title="$t('she-zhi-zhu-ti')">
      <ht-count-to type="primary" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></ht-count-to>
      <ht-count-to type="error" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></ht-count-to>
      <ht-count-to type="success" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></ht-count-to>
      <ht-count-to type="warning" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></ht-count-to>
      <ht-count-to prefix="￥" :startVal="0" :endVal="888888" suffix="%"></ht-count-to>
    </demo-block>

    <demo-block :title="$t('shou-dong-kong-zhi')">
      <ht-count-to
        ref="countTo"
        :auto-start="false"
        prefix="￥"
        :startVal="1000"
        :decimals="3"
        :endVal="9999.32"
        :fontSize="32"
        suffix="%"
        color="#1e9fff"
      ></ht-count-to>

      <ht-grid clickable border>
        <ht-grid-item :text="$t('kai-shi')" icon="play-circle-stroke" @itemclick="start" />
        <ht-grid-item :text="$t('zan-ting')" icon="pause-circle" @itemclick="pause" />
        <ht-grid-item :text="$t('zhong-zhi')" icon="refresh" @itemclick="reset" />
      </ht-grid>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import type { CountToInstance } from '@/uni_modules/ht-ui-uni/components/ht-count-to/types'
import { ref } from 'vue'

const endVal = ref<number>(2024)
const countTo = ref<CountToInstance>()

const start = () => {
  countTo.value!.start()
}
const pause = () => {
  countTo.value!.pause()
}
const reset = () => {
  countTo.value!.reset()
}
</script>
<style lang="scss" scoped></style>
