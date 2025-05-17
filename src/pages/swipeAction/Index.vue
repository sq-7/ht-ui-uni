<template>
  <page-wraper>
    <ht-toast />

    <view @click.stop="closeOutside">
      <demo-block transparent :title="$t('jiBenYongFa')">
        <ht-swipe-action>
          <ht-cell :title="$t('biao-ti-wen-zi-10')" value="内容" />
          <template #right>
            <view class="action">
              <view class="button" style="background: #fa4350" @click="handleAction('操作1')">{{ $t('cao-zuo-1') }}</view>
              <view class="button" style="background: #f0883a" @click="handleAction('操作2')">{{ $t('cao-zuo-2') }}</view>
              <view class="button" style="background: #4d80f0" @click="handleAction('操作3')">{{ $t('cao-zuo-3') }}</view>
            </view>
          </template>
        </ht-swipe-action>
      </demo-block>

      <demo-block transparent :title="$t('zuo-you-hua-dong')">
        <ht-swipe-action>
          <template #left>
            <view class="action">
              <view class="button" style="background: #fa4350">{{ $t('cao-zuo-1-0') }}</view>
              <view class="button" style="background: #f0883a">{{ $t('cao-zuo-2-0') }}</view>
              <view class="button" style="background: #4d80f0">{{ $t('cao-zuo-3-0') }}</view>
            </view>
          </template>

          <ht-cell :title="$t('biao-ti-wen-zi-10')" value="内容" />

          <template #right>
            <view class="action">
              <view class="button" style="background: #fa4350">{{ $t('cao-zuo-4') }}</view>
              <view class="button" style="background: #f0883a">{{ $t('cao-zuo-5') }}</view>
              <view class="button" style="background: #4d80f0">{{ $t('cao-zuo-6') }}</view>
            </view>
          </template>
        </ht-swipe-action>
      </demo-block>

      <demo-block transparent :title="$t('qie-huan-an-niu')">
        <ht-swipe-action v-model="value" :before-close="beforeClose">
          <template #left>
            <view class="action">
              <view class="button" style="background: #fa4350">{{ $t('cao-zuo-1-1') }}</view>
              <view class="button" style="background: #f0883a">{{ $t('cao-zuo-2-1') }}</view>
              <view class="button" style="background: #4d80f0">{{ $t('cao-zuo-3-1') }}</view>
            </view>
          </template>

          <ht-cell :title="$t('biao-ti-wen-zi-10')" value="内容" />

          <template #right>
            <view class="action">
              <view class="button" style="background: #fa4350">{{ $t('cao-zuo-4-0') }}</view>
              <view class="button" style="background: #f0883a">{{ $t('cao-zuo-5-0') }}</view>
              <view class="button" style="background: #4d80f0">{{ $t('cao-zuo-6-0') }}</view>
            </view>
          </template>
        </ht-swipe-action>
      </demo-block>
      <view class="button-group">
        <view @click.stop="noop">
          <ht-button size="small" @click="changeState('left')">{{ $t('da-kai-zuo-bian') }}</ht-button>
        </view>
        <view @click.stop="noop">
          <ht-button size="small" @click="changeState('close')">{{ $t('guan-bi-suo-you') }}</ht-button>
        </view>
        <view @click.stop="noop">
          <ht-button size="small" @click="changeState('right')">{{ $t('da-kai-you-bian') }}</ht-button>
        </view>
      </view>

      <demo-block transparent :title="$t('dian-ji-shi-jian')">
        <ht-swipe-action @click="handleClick">
          <ht-cell :title="$t('biao-ti-wen-zi-10')" value="内容" />

          <template #right>
            <view class="action">
              <view class="button" style="background: #fa4350">{{ $t('cao-zuo-1-2') }}</view>
              <view class="button" style="background: #f0883a">{{ $t('cao-zuo-2-2') }}</view>
              <view class="button" style="background: #4d80f0">{{ $t('cao-zuo-3-2') }}</view>
            </view>
          </template>
        </ht-swipe-action>
      </demo-block>

      <demo-block transparent :title="$t('jin-yong-hua-dong-an-niu')">
        <ht-swipe-action disabled>
          <ht-cell :title="$t('biao-ti-wen-zi-10')" value="内容" />

          <template #right>
            <view class="action">
              <view class="button" style="background: #fa4350">{{ $t('cao-zuo-1-3') }}</view>
              <view class="button" style="background: #f0883a">{{ $t('cao-zuo-2-3') }}</view>
              <view class="button" style="background: #4d80f0">{{ $t('cao-zuo-3-3') }}</view>
            </view>
          </template>
        </ht-swipe-action>
      </demo-block>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast, useQueue } from '@/uni_modules/ht-ui-uni'
import type { SwipeActionBeforeClose, SwipeActionStatus } from '@/uni_modules/ht-ui-uni/components/ht-swipe-action/types'
const { t } = useI18n()
const { closeOutside } = useQueue()

import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const toast = useToast()
const value = ref<SwipeActionStatus>('close')

const beforeClose: SwipeActionBeforeClose = (reason, position) => {
  if (reason === 'click') {
    toast.show(t('reason-position-dao-zhi-hua-dong-an-niu-guan-bi', [reason, position]))
  } else {
    toast.show(t('reason-dao-zhi-position-hua-dong-an-niu-guan-bi', [reason, position]))
  }
}

function changeState(position: SwipeActionStatus) {
  value.value = position
}
function handleClick({ value }: any) {
  toast.show(t('dian-ji-value-guan-bi-cao-zuo-an-niu', [value]))
}
function handleAction(action: string) {
  toast.show(t('dian-ji-le-action') + action)
}

function noop() {}
</script>
<style lang="scss" scoped>
.ht-theme-dark {
  .button-group {
    background: $-dark-background2;
  }
}
.action {
  height: 100%;
}
.button {
  display: inline-block;
  padding: 0 15px;
  height: 100%;
  color: white;
  line-height: 46px;
}
.button-group {
  padding: 10px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
