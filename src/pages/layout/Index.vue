<template>
  <page-wraper>
    <demo-block :title="$t('ji-chu-yong-fa-0')">
      <ht-row>
        <ht-col :span="24"><view class="bg-dark1">span: 24</view></ht-col>
      </ht-row>
      <ht-row>
        <ht-col :span="12"><view class="bg-dark">span: 12</view></ht-col>
        <ht-col :span="12"><view class="bg-light">span: 12</view></ht-col>
      </ht-row>
      <ht-row>
        <ht-col :span="8"><view class="bg-dark">span: 8</view></ht-col>
        <ht-col :span="8"><view class="bg-light">span: 8</view></ht-col>
        <ht-col :span="8"><view class="bg-dark">span: 8</view></ht-col>
      </ht-row>
      <ht-row>
        <ht-col :span="6"><view class="bg-dark">span: 6</view></ht-col>
        <ht-col :span="6"><view class="bg-light">span: 6</view></ht-col>
        <ht-col :span="6"><view class="bg-dark">span: 6</view></ht-col>
        <ht-col :span="6"><view class="bg-light">span: 6</view></ht-col>
      </ht-row>
    </demo-block>
    <demo-block :title="$t('fen-lan-pian-yi')">
      <ht-row>
        <ht-col :span="4"><view class="bg-dark">span: 4</view></ht-col>
        <ht-col :span="8" :offset="4"><view class="bg-light">span: 8 offset: 4</view></ht-col>
      </ht-row>
      <ht-row>
        <ht-col :span="8" :offset="4"><view class="bg-dark">span: 8 offset: 4</view></ht-col>
        <ht-col :span="8" :offset="4"><view class="bg-light">span: 8 offset: 4</view></ht-col>
      </ht-row>
    </demo-block>
    <demo-block :title="$t('fen-lan-jian-ge')">
      <ht-row :gutter="20">
        <ht-col :span="8"><view class="bg-dark">span: 8</view></ht-col>
        <ht-col :span="8"><view class="bg-light">span: 8</view></ht-col>
        <ht-col :span="8"><view class="bg-dark">span: 8</view></ht-col>
      </ht-row>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.bg-dark1,
.bg-dark,
.bg-light {
  border-radius: 4px;
  min-height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.45);
}
.bg-dark1 {
  background: #99a9bf;
  color: #fff;
}
.bg-dark {
  background: #d3dce6;
}
.bg-light {
  background: #e5e9f2;
}
</style>
