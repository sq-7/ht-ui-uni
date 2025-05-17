<template>
  <page-wraper>
    <demo-block :title="$t('jiBenYongFa')">
      <ht-count-down :time="time" />
    </demo-block>

    <demo-block :title="$t('zi-ding-yi-ge-shi')">
      <ht-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
    </demo-block>

    <demo-block :title="$t('hao-miao-ji-xuan-ran')">
      <ht-count-down :time="time" millisecond format="HH:mm:ss:SS" />
    </demo-block>

    <demo-block :title="$t('ziDingYiYangShi')">
      <ht-count-down :time="time">
        <template #default="{ current }">
          <span class="custom-count-down">{{ current.hours }}</span>
          <span class="custom-count-down-colon">:</span>
          <span class="custom-count-down">{{ current.minutes }}</span>
          <span class="custom-count-down-colon">:</span>
          <span class="custom-count-down">{{ current.seconds }}</span>
        </template>
      </ht-count-down>
    </demo-block>

    <demo-block :title="$t('shou-dong-kong-zhi')">
      <ht-count-down ref="countDown" :time="3000" millisecond :auto-start="false" format="ss:SSS" @finish="onFinish"></ht-count-down>
      <ht-grid clickable border>
        <ht-grid-item :text="$t('kai-shi')" icon="play-circle-stroke" @itemclick="start" />
        <ht-grid-item :text="$t('zan-ting')" icon="pause-circle" @itemclick="pause" />
        <ht-grid-item :text="$t('zhong-zhi')" icon="refresh" @itemclick="reset" />
      </ht-grid>
    </demo-block>
    <ht-toast></ht-toast>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/ht-ui-uni'
import type { CountDownInstance } from '@/uni_modules/ht-ui-uni/components/ht-count-down/types'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { show: showToast } = useToast()

const { t } = useI18n()

const time = ref(30 * 60 * 60 * 1000)

const countDown = ref<CountDownInstance>()

const start = () => {
  countDown.value!.start()
}
const pause = () => {
  countDown.value!.pause()
}
const reset = () => {
  countDown.value!.reset()
}
const onFinish = () => showToast(t('dao-ji-shi-jie-shu'))
</script>
<style lang="scss" scoped>
.custom-count-down {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #f0883a;
  border-radius: 2px;
}

.custom-count-down-colon {
  display: inline-block;
  margin: 0 4px;
  color: #f0883a;
}
</style>
