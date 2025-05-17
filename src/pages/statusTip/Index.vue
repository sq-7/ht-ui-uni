<template>
  <page-wraper>
    <demo-block :title="$t('sou-suo-wu-jie-guo')">
      <ht-status-tip image="search" tip="当前搜索无结果" />
    </demo-block>

    <demo-block :title="$t('404-ye-mian')">
      <ht-status-tip image="network" tip="当前网络不可用，请检查你的网络设置" />
    </demo-block>

    <demo-block :title="$t('ye-mian-zan-wu-nei-rong')">
      <ht-status-tip image="content" tip="暂无内容" />
    </demo-block>

    <demo-block :title="$t('wo-de-shou-cang-wei-kong')">
      <ht-status-tip image="collect" tip="暂无收藏" />
    </demo-block>

    <demo-block :title="$t('wo-de-ping-lun-wei-kong')">
      <ht-status-tip image="comment" tip="暂无评论" />
    </demo-block>

    <demo-block :title="$t('zhi-fu-shi-bai')">
      <ht-status-tip image="halo" tip="支付失败，请重新订购" />
    </demo-block>

    <demo-block :title="$t('yi-ding-yue-quan-bu-xiao-xi')">
      <ht-status-tip image="message" tip="已订阅全部消息" />
    </demo-block>

    <demo-block :title="$t('zi-ding-yi-da-xiao')">
      <ht-status-tip
        :image-size="{
          height: 200,
          width: 300
        }"
        image="search"
        :tip="$t('dang-qian-sou-suo-wu-jie-guo')"
      />
    </demo-block>

    <demo-block :title="$t('zi-ding-yi-tu-pian')">
      <ht-status-tip image="https://registry.npmmirror.com/ht-ui-uni-assets/*/files/panda.jpg" tip="查看我的头像" />
    </demo-block>

    <demo-block :title="$t('cha-cao-zi-ding-yi-tu-pian-nei-rong')">
      <ht-status-tip :tip="$t('cha-cao-zi-ding-yi-tu-pian-nei-rong')">
        <template #image>
          <ht-icon name="ie-filled" size="100px"></ht-icon>
        </template>
      </ht-status-tip>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped></style>
