<!--
 * @Author: weisheng
 * @Date: 2025-03-31 11:23:58
 * @LastEditTime: 2025-04-02 20:11:32
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: /ht-ui-uni/src/pages/divider/Index.vue
 * 记得注释
-->
<template>
  <page-wraper>
    <demo-block :title="$t('jiBenYongFa')" transparent>
      <ht-divider></ht-divider>
    </demo-block>

    <demo-block :title="$t('zhan-shi-wen-ben')" transparent>
      <ht-divider>{{ $t('zhan-shi-wen-ben-0') }}</ht-divider>
    </demo-block>

    <demo-block :title="$t('zi-ding-yi-xuan-ran-nei-rong')" transparent>
      <ht-divider>
        <ht-icon name="arrow-down" size="20" />
      </ht-divider>
    </demo-block>

    <demo-block :title="$t('nei-rong-wei-zhi')" transparent>
      <ht-divider>{{ $t('zhong-jian') }}</ht-divider>
      <ht-divider content-position="left">{{ $t('zuo-ce') }}</ht-divider>
      <ht-divider content-position="right">{{ $t('you-ce') }}</ht-divider>
    </demo-block>

    <demo-block :title="$t('xu-xian')" transparent>
      <ht-divider dashed>{{ $t('xu-xian-fen-ge') }}</ht-divider>
    </demo-block>

    <demo-block :title="$t('zi-ding-yi-yan-se')" transparent>
      <ht-divider color="#4D80F0">{{ $t('zi-ding-yi-yan-se-0') }}</ht-divider>
    </demo-block>

    <demo-block :title="$t('chui-zhi-fen-ge-xian')" transparent>
      <view class="content">
        {{ $t('wen-ben') }}
        <ht-divider vertical />
        {{ $t('wen-ben') }}
        <ht-divider vertical dashed />
        {{ $t('wen-ben') }}
        <ht-divider vertical :hairline="false" />
        {{ $t('wen-ben') }}
        <ht-divider vertical color="#1989fa" />
        {{ $t('wen-ben') }}
      </view>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.content {
  padding: 12rpx 15px;
}
</style>
