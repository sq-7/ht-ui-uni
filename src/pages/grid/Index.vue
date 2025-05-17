<template>
  <view>
    <page-wraper>
      <ht-toast />
      <view class="grid">
        <demo-block :title="$t('jiBenYongFa')" transparent>
          <ht-grid clickable>
            <ht-grid-item icon="picture" :text="$t('wen-zi')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-0')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-1')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-2')" />
          </ht-grid>
        </demo-block>
        <demo-block :title="$t('zi-ding-yi-lie-shu')" transparent>
          <ht-grid :column="3">
            <ht-grid-item icon="picture" :text="$t('wen-zi-3')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-4')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-5')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-6')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-7')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-8')" />
          </ht-grid>
        </demo-block>
        <demo-block :title="$t('zi-ding-yi-bei-jing-yan-se')">
          <ht-grid bg-color="rgba(0, 0, 0, 0.02)">
            <ht-grid-item icon="picture" :text="$t('wen-zi-9')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-10')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-11')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-12')" />
          </ht-grid>
        </demo-block>
        <demo-block :title="$t('xian-shi-border')">
          <ht-grid :column="3" border>
            <ht-grid-item icon="picture" :text="$t('wen-zi-13')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-14')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-15')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-16')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-17')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-18')" />
          </ht-grid>
        </demo-block>
        <demo-block :title="$t('nei-rong-cha-cao')" transparent>
          <ht-grid>
            <ht-grid-item use-slot>
              <image class="img" :src="joy" />
            </ht-grid-item>
            <ht-grid-item use-slot>
              <image class="img" :src="joy" />
            </ht-grid-item>
            <ht-grid-item use-slot>
              <image class="img" :src="joy" />
            </ht-grid-item>
          </ht-grid>
        </demo-block>
        <demo-block :title="$t('tu-biao-cha-cao')" transparent>
          <ht-grid>
            <ht-grid-item use-icon-slot :text="$t('wen-zi-19')" icon-size="36px">
              <template #icon>
                <image class="slot-img" :src="img" />
              </template>
            </ht-grid-item>
            <ht-grid-item use-icon-slot :text="$t('wen-zi-20')" icon-size="36px">
              <template #icon>
                <image class="slot-img" :src="img" />
              </template>
            </ht-grid-item>
            <ht-grid-item use-icon-slot :text="$t('wen-zi-21')" icon-size="36px">
              <template #icon>
                <image class="slot-img" :src="img" />
              </template>
            </ht-grid-item>
          </ht-grid>
        </demo-block>
        <demo-block :title="$t('wen-zi-cha-cao')" transparent>
          <ht-grid>
            <ht-grid-item use-text-slot icon="picture">
              <template #text>
                <view class="text">{{ $t('zi-ding-yi-wen-zi-cha-cao') }}</view>
              </template>
            </ht-grid-item>
            <ht-grid-item use-text-slot icon="picture">
              <template #text>
                <view class="text">{{ $t('zi-ding-yi-wen-zi-cha-cao-0') }}</view>
              </template>
            </ht-grid-item>
            <ht-grid-item use-text-slot icon="picture">
              <template #text>
                <view class="text">{{ $t('zi-ding-yi-wen-zi-cha-cao-1') }}</view>
              </template>
            </ht-grid-item>
          </ht-grid>
        </demo-block>
        <demo-block :title="$t('ziDingYiYangShi')" transparent>
          <ht-grid>
            <ht-grid-item custom-class="custom-item" icon="search" :text="$t('ht-ui-yi-ge-gao-yan-zhi-qing-liang-hua-de-uniapp-zu-jian-ku')" />
            <ht-grid-item
              custom-class="custom-item"
              icon="setting"
              :text="$t('ji-yu-vue3ts-kai-fa-ti-gong-70-gao-zhi-liang-zu-jian-zhi-chi-an-hei-mo-shi-guo-ji-hua-he-zi-ding-yi-zhu-ti')"
            />
          </ht-grid>
        </demo-block>
        <demo-block :title="$t('zheng-fang-xing-ge-zi')" transparent>
          <ht-grid square :column="4" :gutter="10">
            <ht-grid-item icon="picture" :text="$t('wen-zi-22')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-23')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-24')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-25')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-26')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-27')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-28')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-29')" />
          </ht-grid>
        </demo-block>
        <demo-block :title="$t('she-ding-ge-jian-xi')" transparent>
          <ht-grid :gutter="10" :column="4">
            <ht-grid-item icon="picture" :text="$t('wen-zi-30')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-31')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-32')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-33')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-34')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-35')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-36')" />
            <ht-grid-item icon="picture" :text="$t('wen-zi-37')" />
          </ht-grid>
        </demo-block>
        <demo-block :title="$t('ye-mian-dao-hang')" transparent>
          <ht-grid clickable>
            <ht-grid-item link-type="redirectTo" url="/pages/button/Index" @itemclick="click" icon="edit-outline" :text="$t('redirect-to')" />
            <ht-grid-item link-type="navigateTo" url="/pages/button/Index" @itemclick="click" icon="edit-outline" :text="$t('navigate-to')" />
          </ht-grid>
        </demo-block>
        <demo-block :title="$t('ti-shi-xin-xi')" transparent>
          <ht-grid>
            <ht-grid-item is-dot icon="goods" :text="$t('wen-zi-38')" />
            <ht-grid-item :value="100" :max="99" icon="computer" :text="$t('wen-zi-39')" />
          </ht-grid>
        </demo-block>
      </view>
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/ht-ui-uni'
import { joy } from '../images/joy'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const img = ref<string>(joy)

const toast = useToast()
function click() {
  toast.show(t('cheng-gong-tiao-zhuan'))
}
</script>
<style lang="scss" scoped>
.ht-theme-dark {
  .grid {
    :deep(.custom-item) {
      color: #e2231a;
      background: $-dark-background2;
    }
  }
}

:deep(.custom-item) {
  height: 80px !important;
  color: #e2231a;
  text-align: left !important;
  padding: 0 10px;
  background: #fff;
}
.img {
  width: 100%;
  height: 90px;
  display: inline-block;
  background-size: cover;
  vertical-align: middle;
}
.slot-img {
  height: 36px;
  width: 36px;
  border-radius: 4px;
}
.text {
  color: #ffb300;
  margin-top: 8px;
}
</style>
