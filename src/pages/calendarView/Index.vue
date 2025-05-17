<template>
  <page-wraper>
    <demo-block :title="$t('dan-ge-ri-qi-xuan-ze')" :hor="0">
      <view style="margin: 0 15px 10px">
        <view style="margin-bottom: 10px; font-size: 13px">{{ $t('qie-huan-lei-xing') }}</view>
        <ht-radio-group v-model="type1" shape="button">
          <ht-radio value="date">date</ht-radio>
          <ht-radio value="week">week</ht-radio>
          <ht-radio value="month">month</ht-radio>
        </ht-radio-group>
      </view>
      <ht-calendar-view :type="type1" v-model="value1" @change="handleChange1"></ht-calendar-view>
    </demo-block>
    <demo-block :title="$t('duo-ge-ri-qi-xuan-ze')" :hor="0">
      <ht-calendar-view type="dates" v-model="value2" @change="handleChange2"></ht-calendar-view>
    </demo-block>
    <demo-block :title="$t('ri-qi-fan-wei-xuan-ze')" :hor="0">
      <view style="margin: 0 24rpx 20rpx">
        <view style="margin-bottom: 20rpx; font-size: 26rpx">{{ $t('qie-huan-lei-xing-0') }}</view>
        <ht-radio-group v-model="type2" shape="button" @change="handleTypeChange2">
          <ht-radio value="daterange">daterange</ht-radio>
          <ht-radio value="weekrange">weekrange</ht-radio>
          <ht-radio value="monthrange">monthrange</ht-radio>
        </ht-radio-group>
      </view>
      <ht-calendar-view :type="type2" allow-same-day v-model="value3" @change="handleChange3"></ht-calendar-view>
    </demo-block>
    <demo-block :title="$t('shi-jian-lei-xing')" :hor="0">
      <ht-calendar-view type="datetime" v-model="value4" :time-filter="timeFilter"></ht-calendar-view>
    </demo-block>
    <demo-block :title="$t('shi-jian-fan-wei-lei-xing')" :hor="0">
      <ht-calendar-view type="datetimerange" v-model="value5"></ht-calendar-view>
    </demo-block>
    <demo-block :title="$t('xian-zhi-zui-da-xuan-ze-fan-wei')" :hor="0">
      <ht-calendar-view type="daterange" :max-range="3" v-model="value7"></ht-calendar-view>
    </demo-block>
    <demo-block :title="$t('zi-ding-yi-ri-qi')" :hor="0">
      <ht-calendar-view type="daterange" allow-same-day v-model="value6" :formatter="formatter"></ht-calendar-view>
    </demo-block>
    <demo-block :title="$t('she-zhi-zhou-qi-shi-ri')" :hor="0">
      <ht-calendar-view :first-day-of-week="1" v-model="value8"></ht-calendar-view>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import type { CalendarFormatter } from '@/uni_modules/ht-ui-uni/components/ht-calendar-view/types'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const type1 = ref<any>('date')
const type2 = ref<any>('daterange')
const minDate = ref(Date.now())
const value1 = ref(Date.now())
const value2 = ref(null)
const value3 = ref([Date.now() - 24 * 60 * 60 * 1000 * 33, Date.now()])
const value4 = ref(Date.now())
const value5 = ref([Date.now() - 24 * 60 * 60 * 1000 * 3, Date.now() - 24 * 60 * 60 * 1000])
const value6 = ref([Date.now() - 24 * 60 * 60 * 1000 * 3, Date.now() - 24 * 60 * 60 * 1000])
const value7 = ref([Date.now() - 24 * 60 * 60 * 1000 * 3, Date.now() - 24 * 60 * 60 * 1000])
const value8 = ref([Date.now() - 24 * 60 * 60 * 1000 * 3, Date.now() - 24 * 60 * 60 * 1000])

const timeFilter = ({ type, values }: any) => {
  if (type === 'minute') {
    // 只展示 0,10,20,30,40,50 分钟选项
    return values.filter((item: any) => {
      return item.value % 10 === 0
    })
  }

  return values
}

const formatter: CalendarFormatter = (day) => {
  const date = new Date(day.date)
  const now = new Date()

  const year = date.getFullYear()
  const month = date.getMonth()
  const da = date.getDate()
  const nowYear = now.getFullYear()
  const nowMonth = now.getMonth()
  const nowDa = now.getDate()

  if (year === nowYear && month === nowMonth && da === nowDa) {
    day.topInfo = t('jin-tian')
  }

  if (month === 5 && da === 18) {
    day.topInfo = t('618-da-cu')
  }

  if (month === 10 && da === 11) {
    day.topInfo = t('jing-dong-shuang-11')
  }

  if (day.type === 'start') {
    day.bottomInfo = t('kai-shi')
  }

  if (day.type === 'end') {
    day.bottomInfo = t('jie-shu')
  }

  if (day.type === 'same') {
    day.bottomInfo = t('kai-shi-jie-shu')
  }

  return day
}

function handleTypeChange2({ value }: any) {
  type2.value = value
}
function handleChange1({ value }: any) {
  console.log(value)
  // value1.value = value
}
function handleChange2({ value }: any) {
  value2.value = value
}
function handleChange3({ value }: any) {
  value3.value = value
}
</script>
<style lang="scss" scoped></style>
