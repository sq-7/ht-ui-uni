<template>
  <view>
    <page-wraper>
      <demo-block :title="$t('zhanShiXiaoXiShuLiang')">
        <ht-badge custom-class="badge" :modelValue="12">
          <ht-button :round="false" type="info" size="small">{{ $t('pingLun') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="3" bg-color="pink">
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="1" type="primary">
          <ht-button :round="false" type="info" size="small">{{ $t('pingLun') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="2" type="warning">
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-0') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="1" type="success">
          <ht-button :round="false" type="info" size="small">{{ $t('pingLun-1') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="2" type="info">
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-1') }}</ht-button>
        </ht-badge>
      </demo-block>

      <demo-block :title="$t('keDingYiXiaoXiZuiDaZhi')">
        <ht-badge custom-class="badge" :modelValue="200" :max="99">
          <ht-button :round="false" type="info" size="small">{{ $t('pingLun-2') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="200" :max="10">
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-2') }}</ht-button>
        </ht-badge>
      </demo-block>

      <demo-block :title="$t('ziDingYiNeiRong')">
        <ht-badge custom-class="badge" modelValue="new">
          <ht-button :round="false" type="info" size="small">{{ $t('pingLun-3') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" modelValue="hot">
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-3') }}</ht-button>
        </ht-badge>
      </demo-block>

      <demo-block :title="$t('dianZhuangLeiXing')">
        <ht-badge custom-class="badge" is-dot>{{ $t('shuJuChaXun') }}</ht-badge>
        <ht-badge custom-class="badge" is-dot>
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-4') }}</ht-button>
        </ht-badge>
      </demo-block>

      <demo-block :title="$t('xianShi_0Zhi')">
        <ht-badge custom-class="badge" :modelValue="0" show-zero>
          <ht-button :round="false" type="info" size="small">{{ $t('pingLun-4') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="0">
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-5') }}</ht-button>
        </ht-badge>
        <ht-badge custom-class="badge" :modelValue="0" is-dot>
          <ht-button :round="false" type="info" size="small">{{ $t('huiFu-6') }}</ht-button>
        </ht-badge>
      </demo-block>
    </page-wraper>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
:deep(.badge) {
  margin: 0 30px 20px 0;
  display: inline-block;
}
</style>
