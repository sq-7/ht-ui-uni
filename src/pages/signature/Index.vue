<!--
 * @Author: 810505339
 * @Date: 2025-02-11 21:17:21
 * @LastEditors: weisheng
 * @LastEditTime: 2025-03-30 21:43:38
 * @FilePath: /ht-ui-uni/src/pages/signature/Index.vue
 * 记得注释
-->
<template>
  <page-wraper>
    <demo-block :title="$t('ji-chu-yong-fa-0')">
      <ht-signature @confirm="confirm" @clear="clear" :export-scale="2" background-color="#ffffff" />
    </demo-block>

    <demo-block :title="$t('li-shi-ji-lu')">
      <ht-signature enable-history background-color="#f5f5f5" />
    </demo-block>

    <demo-block :title="$t('bi-feng-mo-shi-ji-chu')">
      <ht-signature pressure :height="300" />
    </demo-block>

    <demo-block :title="$t('bi-feng-mo-shi-zi-ding-yi')">
      <ht-signature pressure :height="300" :min-width="1" :max-width="6" :min-speed="1.5" background-color="#f5f5f5" />
      <view class="tip-text">{{ $t('kuai-su-shu-xie-chan-sheng-xi-xian-tiao-man-su-shu-xie-chan-sheng-cu-xian-tiao') }}</view>
    </demo-block>

    <demo-block :title="$t('bi-feng-mo-shi-li-shi-ji-lu')">
      <ht-signature pressure enable-history :height="300" :min-width="1" :max-width="6" background-color="#f5f5f5" />
      <view class="tip-text">{{ $t('jie-he-li-shi-ji-lu-zhi-chi-bi-feng-xiao-guo-de-che-xiao-yu-hui-fu') }}</view>
    </demo-block>

    <demo-block :title="$t('zi-ding-yi-an-niu')">
      <ht-signature :disabled="disabled" enable-history :step="3">
        <template #footer="{ clear, confirm, currentStep, restore, revoke, historyList }">
          <ht-button block @click="changeDisabled" v-if="disabled">{{ $t('kai-shi-qian-ming') }}</ht-button>
          <block v-if="!disabled">
            <ht-button size="small" plain @click="revoke" :disabled="currentStep <= 0">{{ $t('che-hui') }}</ht-button>
            <ht-button size="small" plain @click="restore" :disabled="currentStep >= historyList.length">{{ $t('hui-fu') }}</ht-button>
            <ht-button size="small" plain @click="clear">{{ $t('qing-chu') }}</ht-button>
            <ht-button size="small" @click="confirm">{{ $t('que-ding') }}</ht-button>
          </block>
        </template>
      </ht-signature>
    </demo-block>

    <demo-block :title="$t('zi-ding-yi-hua-bi')">
      <ht-signature pen-color="#0083ff" :line-width="4" />
    </demo-block>

    <demo-block :title="$t('dan-chuang-zhong-shi-yong')">
      <ht-button type="primary" @click="showPopup = true">{{ $t('da-kai-qian-ming-ban') }}</ht-button>

      <ht-popup
        v-model="showPopup"
        closable
        safe-area-inset-bottom
        position="bottom"
        custom-style="padding: 48px 20px 20px 20px; border-radius: 16px 16px 0 0;"
        @after-enter="signatureRef?.init()"
      >
        <ht-signature ref="signatureRef" :height="300" enable-history pressure background-color="#f5f5f5" @confirm="handlePopupConfirm" />
      </ht-popup>
    </demo-block>

    <demo-block :title="$t('heng-ping-qian-ming')">
      <ht-button type="primary" @click="toSignatureLandscape">{{ $t('shi-yong-heng-ping-qian-ming') }}</ht-button>
    </demo-block>
  </page-wraper>
</template>

<script lang="ts" setup>
import type { SignatureInstance, SignatureResult } from '@/uni_modules/ht-ui-uni/components/ht-signature/types'
import { ref } from 'vue'

const img = ref<Partial<SignatureResult>>({})

const disabled = ref(true)

function confirm(result: SignatureResult) {
  debugger
  if (result.success) {
    uni.previewImage({
      urls: [result.tempFilePath]
    })
  }
}

function clear() {
  img.value = {}
}

function changeDisabled() {
  disabled.value = false
}

const showPopup = ref(false)
const signatureRef = ref<SignatureInstance>()

function handlePopupConfirm(result: SignatureResult) {
  showPopup.value = false
  if (result.success) {
    uni.previewImage({
      urls: [result.tempFilePath]
    })
  }
}

function toSignatureLandscape() {
  console.log(232)

  uni.navigateTo({
    url: '/pages/signature/Landscape'
  })
}
</script>

<style lang="scss" scoped>
.tip-text {
  font-size: 12px;
  color: #999;
  margin-top: 8px;
  text-align: center;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;

  .button-row {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
}

.popup-footer {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
