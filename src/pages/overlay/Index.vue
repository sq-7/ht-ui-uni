<template>
  <page-meta :page-style="`overflow:${show ? 'hidden' : 'visible'};`"></page-meta>
  <view>
    <page-wraper>
      <demo-block :title="$t('ji-chu-yong-fa-0')">
        <ht-button type="primary" @click="show = true">{{ $t('xian-shi-zhe-zhao-ceng') }}</ht-button>
      </demo-block>

      <demo-block :title="$t('qian-ru-nei-rong')">
        <ht-button type="primary" @click="show1 = true">{{ $t('qian-ru-nei-rong-0') }}</ht-button>
      </demo-block>
    </page-wraper>
    <ht-overlay :show="show" @click="show = false" />

    <ht-overlay :show="show1" @click="show1 = false">
      <view class="wrapper">
        <view class="block" @click.stop="" />
      </view>
    </ht-overlay>
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const show = ref<boolean>(false)
const show1 = ref<boolean>(false)
</script>
<style lang="scss" scoped>
.ht-theme-dark {
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
