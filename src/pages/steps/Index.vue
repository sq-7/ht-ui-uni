<template>
  <page-wraper>
    <demo-block :title="$t('jiBenYongFa')">
      <ht-steps :active="0">
        <ht-step></ht-step>
        <ht-step></ht-step>
        <ht-step></ht-step>
      </ht-steps>
    </demo-block>
    <demo-block :title="$t('shui-ping-ju-zhong')">
      <ht-steps :active="0" align-center>
        <ht-step></ht-step>
        <ht-step></ht-step>
        <ht-step></ht-step>
      </ht-steps>
    </demo-block>
    <demo-block :title="$t('biao-ti-he-miao-shu-xin-xi')">
      <ht-steps :active="active" align-center>
        <ht-step :title="$t('bu-zhou-1')" :description="$t('zhu-ce-1-ge-zhang-hao')" />
        <ht-step :title="$t('bu-zhou-2')" :description="$t('deng-lu-zhang-hao-bin-ding-shou-ji')" />
        <ht-step :title="$t('bu-zhou-3')" :description="$t('wan-shan-ge-ren-xin-xi')" />
      </ht-steps>
      <view style="margin-top: 15px; text-align: center">
        <ht-button size="small" @click="nextStep">{{ $t('xia-yi-bu') }}</ht-button>
      </view>
    </demo-block>
    <demo-block :title="$t('xiu-gai-tu-biao')">
      <ht-steps :active="1" align-center>
        <ht-step icon="setting" />
        <ht-step icon="list" />
        <ht-step icon="clock" />
      </ht-steps>
    </demo-block>
    <demo-block :title="$t('shu-xiang-bu-zhou-tiao')">
      <ht-steps :active="1" vertical>
        <ht-step :description="$t('zhu-ce-1-ge-zhang-hao')" />
        <ht-step :description="$t('deng-lu-zhang-hao-bing-bang-ding-shou-ji-hou-mian-shi-bi-ji-chang-wen-an')" />
        <ht-step :description="$t('wan-shan-ge-ren-xin-xi')" />
      </ht-steps>
    </demo-block>
    <demo-block :title="$t('dian-zhuang-bu-zhou-he-chui-zhi-fang-xiang')">
      <ht-steps :active="1" vertical dot>
        <ht-step :description="$t('zhu-ce-1-ge-zhang-hao')" />
        <ht-step :description="$t('deng-lu-zhang-hao-bin-ding-shou-ji')" />
        <ht-step :description="$t('wan-shan-ge-ren-xin-xi')" />
      </ht-steps>
    </demo-block>
    <demo-block :title="$t('xiu-gai-zhuang-tai')">
      <ht-steps :active="1" align-center>
        <ht-step :title="$t('bang-ding-shou-ji')" status="error" />
        <ht-step :title="$t('zhong-xin-bang-ding-shou-ji')" />
        <ht-step :title="$t('bu-zhou-3-0')" />
      </ht-steps>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const active = ref<number>(0)

function nextStep() {
  active.value = active.value + 1
}
</script>
<style lang="scss" scoped></style>
