<template>
  <page-wraper>
    <demo-block :title="$t('jiBenYongFa')" transparent>
      <ht-pagination v-model="page1" :total="total1" @change="handleChange1"></ht-pagination>
    </demo-block>
    <demo-block :title="$t('icon-tu-biao-0')" transparent>
      <ht-pagination v-model="page2" :total="total2" show-icon @change="handleChange2"></ht-pagination>
    </demo-block>
    <demo-block :title="$t('wen-zi-ti-shi')" transparent>
      <ht-pagination v-model="page3" :total="total3" :page-size="pageSize3" @change="handleChange3" show-icon show-message></ht-pagination>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const page1 = ref<number>(1)
const total1 = ref<number>(190)
const page2 = ref<number>(1)
const total2 = ref<number>(19)
const page3 = ref<number>(1)
const total3 = ref<number>(160)
const pageSize3 = ref<number>(20)

function handleChange1({ value }: any) {
  console.log(value)
}
function handleChange2({ value }: any) {
  console.log(value)
}
function handleChange3({ value }: any) {
  console.log(value)
}
</script>
<style lang="scss" scoped>
.button-block {
  margin-right: 0;
}
</style>
