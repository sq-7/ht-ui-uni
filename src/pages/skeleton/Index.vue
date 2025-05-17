<template>
  <page-wraper>
    <template :key="item.value" v-for="item in themeList">
      <demo-block :title="item.title">
        <ht-skeleton :theme="item.value" />
      </demo-block>
    </template>
    <demo-block :title="$t('gong-ge-gu-jia-ping')">
      <ht-skeleton :row-col="grid" />
    </demo-block>
    <demo-block :title="$t('dan-yuan-ge-gu-jia-ping')">
      <view style="display: flex">
        <ht-skeleton :row-col="[{ size: '48px', type: 'circle' }]" />
        <ht-skeleton :custom-style="{ width: '100%', marginLeft: '12px' }" :row-col="[{ width: '50%' }, { width: '100%' }]" />
      </view>
      <view style="display: flex; margin-top: 20px">
        <ht-skeleton :row-col="[{ size: '48px', type: 'rect' }]" />
        <ht-skeleton :custom-style="{ width: '100%', marginLeft: '12px' }" :row-col="[{ width: '50%' }, { width: '100%' }]" />
      </view>
    </demo-block>
    <demo-block :title="$t('tu-pian-zu-he-gu-jia-ping')">
      <ht-skeleton :row-col="imageGroup" />
      <ht-skeleton :custom-style="{ marginTop: '20px' }" :row-col="imageGroup" />
    </demo-block>
    <demo-block :title="$t('jian-bian-jia-zai-dong-hua')">
      <ht-skeleton animation="gradient" theme="paragraph" />
    </demo-block>
    <demo-block :title="$t('shan-shuo-jia-zai-dong-hua')">
      <view style="display: flex">
        <ht-skeleton :row-col="[{ size: '48px', type: 'circle' }]" />
        <ht-skeleton :custom-style="{ width: '100%', marginLeft: '12px' }" animation="flashed" theme="paragraph" />
      </view>
    </demo-block>
    <demo-block :title="$t('cha-cao-nei-rong')">
      <view style="margin-bottom: 10px">{{ $t('qie-huan-xian-shi') }}</view>
      <ht-switch v-model="showContent" />
      <view style="height: 20px"></view>
      <ht-skeleton :row-col="grid" :loading="showContent">
        <ht-grid>
          <ht-grid-item icon-size="32px" icon="picture" :text="$t('wen-zi-10')" />
          <ht-grid-item icon-size="32px" icon="picture" :text="$t('wen-zi-10')" />
          <ht-grid-item icon-size="32px" icon="picture" :text="$t('wen-zi-10')" />
          <ht-grid-item icon-size="32px" icon="picture" :text="$t('wen-zi-10')" />
          <ht-grid-item icon-size="32px" icon="picture" :text="$t('wen-zi-10')" />
        </ht-grid>
      </ht-skeleton>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { SkeletonRowCol, SkeletonProps } from '../../uni_modules/ht-ui-uni/components/ht-skeleton/types'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const themeList = [
  { title: t('tou-xiang-gu-jia-ping'), value: 'avatar' },
  { title: t('tu-pian-gu-jia-ping'), value: 'image' },
  { title: t('wen-ben-gu-jia-ping'), value: 'text' },
  { title: t('duan-la-gu-jia-ping'), value: 'paragraph' }
] as Array<{ title: string; value: SkeletonProps['theme'] }>
const grid = [
  [
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' }
  ],
  [
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' }
  ]
] as SkeletonRowCol[]
const imageGroup = [{ height: '171px' }, 1, { width: '107px' }, [{ width: '93px' }, { width: '32px', marginLeft: '41px' }]] as SkeletonRowCol[]

const showContent = ref(true)
</script>
