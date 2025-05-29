<template>
  <ht-watermark :image="image" :width="130" :height="140" :image-width="38" content="ht-ui-uni" :image-height="38" :opacity="0.5"></ht-watermark>
  <view>
    <page-wraper>
      <demo-block :title="$t('ji-chu-yong-fa-0')">
        <ht-button @click="doSetImage(false)" plain>{{ $t('wen-zi-shui-yin') }}</ht-button>
        <ht-button @click="doSetImage(true)" plain>{{ $t('tu-pian-shui-yin') }}</ht-button>
      </demo-block>

      <demo-block :title="$t('zhan-shi-xiao-guo')">
        <ht-badge custom-class="badge" :modelValue="200" :max="99">
          <ht-button :round="false" type="info" size="small">{{ $t('pingLun') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="200" :max="10">
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-0') }}</ht-button>
        </ht-badge>
      </demo-block>
      <demo-block :title="$t('ju-bu-shui-yin')">
        <ht-watermark :opacity="0.8" image="https://ht-ui-uni.cn/logo.png" :image-width="38" :image-height="38" :full-screen="false"></ht-watermark>
        <ht-badge custom-class="badge" :modelValue="12">
          <ht-button :round="false" type="info" size="small">{{ $t('pingLun') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="3" bg-color="pink">
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-0') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="1" type="primary">
          <ht-button :round="false" type="info" size="small">{{ $t('pingLun') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="2" type="warning">
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-0') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="1" type="success">
          <ht-button :round="false" type="info" size="small">{{ $t('pingLun') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="2" type="info">
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-0') }}</ht-button>
        </ht-badge>
        <ht-cell-group border>
          <ht-cell size="large" :title="$t('biao-ti-wen-zi-10')" value="内容" />
          <ht-cell :title="$t('biao-ti-wen-zi-10')" value="内容" size="large" icon="setting" is-link />
          <ht-cell size="large" :title="$t('biao-ti-wen-zi-10')" :label="$t('miaoShuXinXi-0')" value="内容" />
          <ht-cell size="large" :title="$t('biao-ti-wen-zi-10')" value="内容" />
          <ht-cell :title="$t('biao-ti-wen-zi-10')" value="内容" size="large" icon="setting" is-link />
          <ht-cell size="large" :title="$t('biao-ti-wen-zi-10')" :label="$t('miaoShuXinXi-0')" value="内容" />
        </ht-cell-group>
      </demo-block>

      <demo-block :title="$t('zhan-shi-xiao-guo-0')">
        <ht-badge custom-class="badge" modelValue="new">
          <ht-button :round="false" type="info" size="small">{{ $t('pingLun') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" modelValue="hot">
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-0') }}</ht-button>
        </ht-badge>
      </demo-block>

      <demo-block :title="$t('zhan-shi-xiao-guo-1')">
        <ht-badge custom-class="badge" is-dot>{{ $t('shuJuChaXun') }}</ht-badge>
        <ht-badge custom-class="badge" is-dot>
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-0') }}</ht-button>
        </ht-badge>
      </demo-block>
    </page-wraper>
  </view>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
const showImage = ref(false) // 是否展示图片

const image = computed(() => {
  return showImage.value ? 'https://ht-ui-uni.cn/logo.png' : ''
})

function doSetImage(show: boolean) {
  showImage.value = show
}
</script>
<style lang="scss" scoped>
:deep(.badge) {
  margin: 0 30px 20px 0;
  display: inline-block;
}
</style>
