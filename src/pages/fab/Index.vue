<template>
  <ht-toast />
  <view class="fab" @click="closeOutside">
    <page-wraper>
      <demo-block :title="$t('xuan-fu-an-niu-zhu-ti-se')">
        <ht-radio-group v-model="type" inline shape="dot">
          <ht-radio value="primary" custom-class="custom-radio">{{ $t('zhu-yao-an-niu') }}</ht-radio>
          <ht-radio value="success" custom-class="custom-radio">{{ $t('cheng-gong-an-niu-0') }}</ht-radio>
          <ht-radio value="warning" custom-class="custom-radio">{{ $t('jing-gao-an-niu-0') }}</ht-radio>
          <ht-radio value="error" custom-class="custom-radio">{{ $t('wei-xian-an-niu') }}</ht-radio>
          <ht-radio value="info" custom-class="custom-radio">{{ $t('xin-xi-an-niu') }}</ht-radio>
        </ht-radio-group>
      </demo-block>
      <demo-block :title="$t('xuan-fu-an-niu-wei-zhi')">
        <ht-radio-group v-model="position" inline shape="dot">
          <ht-radio value="left-top" custom-class="custom-radio">{{ $t('zuo-shang') }}</ht-radio>
          <ht-radio value="right-top" custom-class="custom-radio">{{ $t('you-shang') }}</ht-radio>
          <ht-radio value="left-center" custom-class="custom-radio">{{ $t('zuo-zhong') }}</ht-radio>
          <ht-radio value="right-center" custom-class="custom-radio">{{ $t('you-zhong') }}</ht-radio>
          <ht-radio value="top-center" custom-class="custom-radio">{{ $t('shang-zhong') }}</ht-radio>
          <ht-radio value="bottom-center" custom-class="custom-radio">{{ $t('xia-zhong') }}</ht-radio>
          <ht-radio value="left-bottom" custom-class="custom-radio">{{ $t('zuo-xia') }}</ht-radio>
          <ht-radio value="right-bottom" custom-class="custom-radio">{{ $t('you-xia') }}</ht-radio>
        </ht-radio-group>
      </demo-block>
      <demo-block :title="$t('cai-dan-dan-chu-fang-xiang')">
        <ht-radio-group v-model="direction" inline shape="dot">
          <ht-radio value="top" custom-class="custom-radio">{{ $t('xiang-shang') }}</ht-radio>
          <ht-radio value="bottom" custom-class="custom-radio">{{ $t('xiang-xia') }}</ht-radio>
          <ht-radio value="right" custom-class="custom-radio">{{ $t('xiang-you') }}</ht-radio>
          <ht-radio value="left" custom-class="custom-radio">{{ $t('xiang-zuo') }}</ht-radio>
        </ht-radio-group>
      </demo-block>
      <demo-block :title="$t('jinYong')">
        <view @click.stop="">
          <ht-switch v-model="disabled" size="22px" />
        </view>
      </demo-block>
      <demo-block :title="$t('ke-tuo-dong')">
        <view @click.stop="">
          <ht-switch v-model="draggable" size="22px" />
        </view>
      </demo-block>

      <demo-block :title="$t('qie-huan-zhan-shi')">
        <view @click.stop="">
          <ht-button type="primary" @click="active = !active" round>{{ $t('qie-huan') }}</ht-button>
        </view>
      </demo-block>

      <demo-block :title="$t('zi-ding-yi-chu-fa-qi')">
        <view @click.stop="">
          <ht-switch v-model="useTriggerSlot" size="22px" />
        </view>
      </demo-block>
      <ht-fab
        v-if="!useTriggerSlot"
        v-model:active="active"
        :disabled="disabled"
        :type="type"
        :position="position"
        :direction="direction"
        :draggable="draggable"
        @click="showToast('我被点了')"
      >
        <ht-button @click="showToast('一键三连')" :disabled="disabled" custom-class="custom-button" type="primary" round>
          <ht-icon name="github-filled" size="22px"></ht-icon>
        </ht-button>
        <ht-button @click="showToast('我要收藏')" :disabled="disabled" custom-class="custom-button" type="success" round>
          <ht-icon name="star" size="22px"></ht-icon>
        </ht-button>

        <ht-button @click="showToast('我要投币')" :disabled="disabled" custom-class="custom-button" type="error" round>
          <ht-icon name="money-circle" size="22px"></ht-icon>
        </ht-button>
        <ht-button @click="showToast('我要点赞')" :disabled="disabled" custom-class="custom-button" type="warning" round>
          <ht-icon name="thumb-up" size="22px"></ht-icon>
        </ht-button>
      </ht-fab>

      <ht-fab v-else position="left-bottom" :draggable="draggable" :expandable="false">
        <template #trigger>
          <ht-button @click="handleCustomClick" icon="share" type="error">{{ $t('fen-xiang-gei-peng-you') }}</ht-button>
        </template>
      </ht-fab>
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import { useQueue, useToast } from '@/uni_modules/ht-ui-uni'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { show: showToast } = useToast()
const active = ref<boolean>(false)
const type = ref<'primary' | 'success' | 'info' | 'warning' | 'error' | 'default'>('primary')
const position = ref<'left-top' | 'right-top' | 'left-bottom' | 'right-bottom' | 'left-center' | 'right-center' | 'top-center' | 'bottom-center'>(
  'left-bottom'
)
const direction = ref<'top' | 'right' | 'bottom' | 'left'>('top')
const disabled = ref<boolean>(false)
const draggable = ref<boolean>(false)
const useTriggerSlot = ref<boolean>(false)

const { closeOutside } = useQueue()

function handleCustomClick() {
  showToast(t('fen-xiang-gei-peng-you-0'))
}
</script>
<style lang="scss" scoped>
.fab {
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 88rpx;
  :deep(.custom-button) {
    min-width: auto !important;
    box-sizing: border-box;
    width: 32px !important;
    height: 32px !important;
    border-radius: 16px !important;
    margin: 8rpx;
  }

  :deep(.custom-radio) {
    height: 32px !important;
    line-height: 32px !important;
  }
}
</style>
