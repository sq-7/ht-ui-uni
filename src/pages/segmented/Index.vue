<template>
  <view>
    <ht-toast />
    <page-wraper>
      <demo-block :title="$t('da-xing-fen-duan-qi')" transparent>
        <view class="section">
          <ht-segmented :options="list" v-model:value="current" size="large" @change="handleChange"></ht-segmented>
        </view>
      </demo-block>
      <demo-block :title="$t('mo-ren-fen-duan-qi')" transparent>
        <view class="section">
          <ht-segmented :options="list" v-model:value="current1"></ht-segmented>
        </view>
      </demo-block>

      <demo-block :title="$t('xiao-xing-fen-duan-qi')" transparent>
        <view class="section">
          <ht-segmented :options="list" v-model:value="current2" size="small"></ht-segmented>
        </view>
      </demo-block>

      <demo-block :title="$t('dai-zhen-dong-xiao-guo-de-fen-duan-qi')" transparent>
        <view class="section">
          <ht-segmented :options="list" v-model:value="current3" :vibrate-short="true"></ht-segmented>
        </view>
      </demo-block>

      <demo-block :title="$t('jin-yong-fen-duan-qi')" transparent>
        <view class="section">
          <ht-segmented :options="list" v-model:value="current5" disabled></ht-segmented>
        </view>
      </demo-block>

      <demo-block :title="$t('zi-ding-yi-xuan-ran-fen-duan-qi-biao-qian')" transparent>
        <view class="section">
          <ht-segmented :options="list1" v-model:value="current4" :vibrate-short="true" @change="handleChange">
            <template #label="{ option }">
              <view class="section-slot">
                <image style="border-radius: 50%; width: 32px; height: 32px" :src="option.payload.avatar" />

                <view class="name">
                  {{ option.value }}
                </view>
              </view>
            </template>
          </ht-segmented>
        </view>
      </demo-block>

      <demo-block :title="$t('zai-dan-chu-kuang-zhong-shi-yong')" transparent>
        <view class="section">
          <ht-button @click="handleClick">{{ $t('da-kai-dan-chuang') }}</ht-button>
        </view>
      </demo-block>

      <ht-popup v-model="showPopup" position="bottom" @after-enter="handlePopupShow" closable custom-style="height: 200px;padding: 0 24rpx;">
        <view class="title">{{ $t('zai-dan-chu-kuang-zhong-shi-yong-0') }}</view>
        <ht-segmented :options="list" v-model:value="current6" @change="handleChange" ref="segmentedRef"></ht-segmented>
      </ht-popup>
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import type { SegmentedInstance, SegmentedOption } from '@/uni_modules/ht-ui-uni/components/ht-segmented/types'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const list = computed(() => [t('pingLun'), t('dian-zan'), t('gong-xian'), t('da-shang')])

const list1 = computed(() => [
  {
    value: t('li-lei'),
    disabled: false,
    payload: {
      avatar: 'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/redpanda.jpg'
    }
  },
  {
    value: t('han-mei-mei'),
    disabled: false,
    payload: {
      avatar: 'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/capybara.jpg'
    }
  },
  {
    value: t('lin-tao'),
    disabled: true,
    payload: {
      avatar: 'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/panda.jpg'
    }
  },
  {
    value: t('tom'),
    disabled: false,
    payload: {
      avatar: 'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/meng.jpg'
    }
  }
])

const current = ref(t('jian-jie'))

const current1 = ref(t('xiang-qing'))

const current2 = ref(t('pingLun'))

const current3 = ref(t('da-shang-0'))

const current4 = ref(t('han-mei-mei-0'))

const current5 = ref(t('pingLun'))

function handleChange(option: SegmentedOption) {
  console.log(option)
}

const current6 = ref(t('dian-zan'))
const segmentedRef = ref<SegmentedInstance>()
const showPopup = ref(false)
function handleClick() {
  showPopup.value = true
}
function handlePopupShow() {
  segmentedRef.value?.updateActiveStyle()
}
</script>
<style lang="scss" scoped>
.section {
  width: 100%;
  padding: 0 24rpx;
  box-sizing: border-box;
  &-slot {
    padding: 4px;
  }
}
.title {
  display: flex;
  font-size: 32rpx;
  align-items: center;
  justify-content: center;
  padding: 24rpx 0;
}
</style>
