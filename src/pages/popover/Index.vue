<template>
  <page-wraper>
    <ht-toast />

    <view @click="closeOutside" class="wrapper">
      <demo-block :title="$t('wei-zhi')">
        <ht-radio-group v-model="placement" inline shape="dot">
          <ht-radio value="bottom" custom-class="custom-radio">bottom</ht-radio>
          <ht-radio value="bottom-start" custom-class="custom-radio">bottom-start</ht-radio>
          <ht-radio value="bottom-end" custom-class="custom-radio">bottom-end</ht-radio>
          <ht-radio value="top" custom-class="custom-radio">top</ht-radio>
          <ht-radio value="top-start" custom-class="custom-radio">top-start</ht-radio>
          <ht-radio value="top-end" custom-class="custom-radio">top-end</ht-radio>
          <ht-radio value="left" custom-class="custom-radio">left</ht-radio>
          <ht-radio value="left-start" custom-class="custom-radio">left-start</ht-radio>
          <ht-radio value="left-end" custom-class="custom-radio">left-end</ht-radio>
          <ht-radio value="right" custom-class="custom-radio">right</ht-radio>
          <ht-radio value="right-start" custom-class="custom-radio">right-start</ht-radio>
          <ht-radio value="right-end" custom-class="custom-radio">right-end</ht-radio>
        </ht-radio-group>
      </demo-block>
      <demo-block custom-class="pop" :title="$t('jiBenYongFa')">
        <view class="center">
          <ht-popover id="pop1" :content="$t('zhe-shi-yi-duan-nei-rong')" :placement="placement" v-model="show1" @change="handleChange1">
            <ht-button data-id="pop1">{{ $t('dian-ji-zhan-shi') }}</ht-button>
          </ht-popover>
        </view>
      </demo-block>

      <demo-block custom-class="pop" :title="$t('qian-tao-xin-xi')">
        <view class="center list">
          <ht-popover v-model="show2" use-content-slot :placement="placement" @change="handleChange2">
            <template #content>
              <view class="pop-content">{{ $t('zhe-shi-yi-duan-zi-ding-yi-yang-shi-de-nei-rong') }}</view>
            </template>
            <ht-button>{{ $t('dian-ji-zhan-shi-0') }}</ht-button>
          </ht-popover>
        </view>
      </demo-block>

      <demo-block custom-class="pop" :title="$t('lie-biao-zhan-shi')">
        <view class="center list">
          <ht-popover v-model="show3" mode="menu" :placement="placement" :content="menu" @menuclick="link" @change="handleChange3">
            <ht-button>{{ $t('lie-biao') }}</ht-button>
          </ht-popover>
        </view>
      </demo-block>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/ht-ui-uni'
import { ref } from 'vue'
import { useQueue } from '@/uni_modules/ht-ui-uni'
import type { PlacementType } from '@/uni_modules/ht-ui-uni/components/ht-popover/types'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { closeOutside } = useQueue()
const toast = useToast()

const placement = ref<PlacementType>('bottom')

const show1 = ref<boolean>(false)
const show2 = ref<boolean>(false)
const show3 = ref<boolean>(false)

const menu = ref<Array<Record<string, any>>>([
  {
    iconClass: 'read',
    content: t('quan-bu-biao-ji-yi-du')
  },
  {
    iconClass: 'delete',
    content: t('qing-kong-zui-jin-hui-hua')
  },
  {
    iconClass: 'detection',
    content: t('xiao-xi-ding-yue-she-zhi')
  },
  {
    iconClass: 'subscribe',
    content: t('xiao-xi-yi-chang-jian-ce')
  }
])

function link(e: any) {
  toast.show(t('xuan-ze-le') + e.item.content)
}

function showPop(index: number) {
  // if (pop && pop.id !== id) {
  //   closeOtherPop()
  // }
  // pop = selectComponent('#' + id)
}

function handleChange1() {
  // show1.value = event.detail.show
}

function handleChange2() {
  // show2.value = event.detail.show
}
function handleChange3() {
  // show3.value = event.detail.show
}
</script>
<style lang="scss" scoped>
.center {
  text-align: center;
  padding-bottom: 20px;
}
:deep(.pop) {
  overflow: visible !important;
  padding: 10px;
}
:deep(.custom-radio) {
  height: 32px !important;
  line-height: 32px !important;
}
.wrapper {
  width: 100%;
  height: 100vh;
}
.pop-content {
  /* 必填 开始 */
  position: relative;
  z-index: 500;
  border-radius: 4px;
  /* 必填 结束 */
  background: #fff;
  color: #8268de;
  font-weight: bolder;
  padding: 10px;
  width: 150px;
}
</style>
