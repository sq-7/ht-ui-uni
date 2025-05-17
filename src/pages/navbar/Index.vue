<!--
 * @Author: weisheng
 * @Date: 2023-10-17 17:20:31
 * @LastEditTime: 2025-03-31 22:54:02
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: /ht-ui-uni/src/pages/navbar/Index.vue
 * 记得注释
-->
<template>
  <ht-toast></ht-toast>
  <page-wraper>
    <ht-navbar fixed placeholder :title="$t('navbar-dao-hang-tiao')" left-arrow safeAreaInsetTop @click-left="handleClickLeft"></ht-navbar>

    <demo-block :title="$t('ji-chu-yong-fa-0')" transparent>
      <ht-navbar :title="$t('biaoTi-0')"></ht-navbar>
    </demo-block>

    <demo-block :title="$t('fan-hui-shang-ji')" transparent>
      <ht-navbar :title="$t('biaoTi-0')" :left-text="$t('fan-hui')" left-arrow @click-left="handleClickLeft"></ht-navbar>
    </demo-block>

    <demo-block :title="$t('you-ce-an-niu')" transparent>
      <ht-navbar
        :title="$t('biaoTi-0')"
        :left-text="$t('fan-hui')"
        left-arrow
        :right-text="$t('an-niu')"
        @click-left="handleClickLeft"
        @click-right="handleClickRight"
      ></ht-navbar>
    </demo-block>

    <demo-block :title="$t('shi-yong-cha-cao')" transparent>
      <ht-navbar :title="$t('biaoTi-0')" @click-left="handleClickLeft">
        <template #left>
          <ht-icon name="arrow-left" size="24px" class="ht-navbar__arrow" />
        </template>
        <template #right>
          <ht-icon name="search" size="18" />
        </template>
      </ht-navbar>
    </demo-block>

    <demo-block :title="$t('jin-yong-an-niu')" transparent>
      <ht-navbar :title="$t('biaoTi-0')" :left-text="$t('fan-hui')" :right-text="$t('an-niu')" left-arrow left-disabled right-disabled></ht-navbar>
    </demo-block>

    <demo-block :title="$t('jiao-nang-yang-shi')" transparent>
      <ht-navbar :title="$t('biaoTi-0')" :left-text="$t('fan-hui')" :right-text="$t('she-zhi')" left-arrow>
        <template #capsule>
          <ht-navbar-capsule @back="handleBack" @back-home="handleBackHome"></ht-navbar-capsule>
        </template>
      </ht-navbar>
    </demo-block>

    <demo-block :title="$t('dai-sou-suo-lan')" transparent>
      <ht-navbar :left-text="$t('fan-hui')" :right-text="$t('she-zhi')" left-arrow>
        <template #title>
          <view class="search-box">
            <ht-search v-model="keyword" hide-cancel placeholder-left></ht-search>
          </view>
        </template>
      </ht-navbar>
    </demo-block>
    <view style="height: 500rpx"></view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/ht-ui-uni'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const keyword = ref('')
const { show: showToast } = useToast()

function handleClickLeft() {
  uni.navigateBack({})
}

function handleClickRight() {
  showToast(t('an-niu-0'))
}

function handleBack() {
  uni.navigateBack({})
}

function handleBackHome() {
  uni.reLaunch({ url: '/pages/index/Index' })
}
</script>
<style lang="scss" scoped>
.search-box {
  display: flex;
  height: 100%;
  align-items: center;
  --ht-search-padding: 0;
  --ht-search-side-padding: 0;
  :deep() {
    .ht-search {
      background: transparent;
    }
  }
}
</style>
