<template>
  <page-wraper>
    <view>
      <demo-block :title="$t('ji-ben-shi-yong')" transparent>
        <ht-gap bg-color="#FFFFFF"></ht-gap>
      </demo-block>
      <demo-block :title="$t('zi-ding-yi-bei-jing-yan-se')" transparent>
        <ht-gap bg-color="#4D80F0"></ht-gap>
      </demo-block>
      <demo-block :title="$t('zi-ding-yi-gao-du')" transparent>
        <ht-gap bg-color="#4D80F0" height="120rpx"></ht-gap>
      </demo-block>
      <demo-block :title="$t('ziDingYiYangShi')" transparent>
        <ht-gap custom-class="custom-gap"></ht-gap>
      </demo-block>
      <demo-block custom-class="custom-safe-area-bottom" :title="$t('di-bu-an-quan-qu')" transparent>
        <ht-gap bg-color="#FFFFFF" safe-area-bottom height="120rpx"></ht-gap>
      </demo-block>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
:deep(.custom-safe-area-bottom) {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
:deep(.custom-gap) {
  padding-bottom: 120rpx;
  background: #34d19d !important;
}
</style>
