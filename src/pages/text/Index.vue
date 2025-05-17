<template>
  <page-wraper>
    <demo-block :title="$t('jiBenYongFa')">
      <ht-text :text="text"></ht-text>
    </demo-block>

    <demo-block :title="$t('she-zhi-zhu-ti')">
      <view style="display: flex">
        <ht-text type="primary" :text="$t('zhu-se')"></ht-text>
        <ht-text type="error" :text="$t('cuo-wu')"></ht-text>
        <ht-text type="success" :text="$t('cheng-gong')"></ht-text>
        <ht-text type="warning" :text="$t('jing-gao')"></ht-text>
        <ht-text :text="$t('mo-ren')"></ht-text>
      </view>
    </demo-block>

    <demo-block :title="$t('zi-ding-yi-zi-ti-yan-se')">
      <ht-text :text="text" color="#36B8C2"></ht-text>
    </demo-block>

    <demo-block :title="$t('shi-fou-cu-ti')">
      <ht-text :text="text" bold></ht-text>
    </demo-block>

    <demo-block :title="$t('zi-ti-da-xiao')">
      <ht-text :text="text" size="16px"></ht-text>
    </demo-block>

    <demo-block :title="$t('tuo-min')">
      <view style="display: flex; align-items: center">
        <ht-text :text="$t('zhang-chang-san')" mode="name" :format="true"></ht-text>
        <ht-text text="18888888888" mode="phone" :format="true"></ht-text>
      </view>
    </demo-block>

    <demo-block title="lines">
      <view>
        <ht-text :text="text" :lines="2" size="16px"></ht-text>
      </view>
    </demo-block>

    <demo-block title="lineHeight">
      <ht-text :text="text" :lines="2" lineHeight="20px"></ht-text>
    </demo-block>

    <demo-block title="mode">
      <view>
        <view><ht-text text="18888888888" mode="phone"></ht-text></view>
        <view><ht-text :text="$t('wang-san')" mode="name"></ht-text></view>
        <view><ht-text text="1719976636911" mode="date"></ht-text></view>
      </view>
    </demo-block>

    <demo-block :title="$t('qian-hou-cha-cao')">
      <view>
        <ht-text text="12345678901" mode="phone" format type="primary" prefix="Prefix" suffix="Suffix" />
        <br />
        <ht-text text="12345678901" mode="phone" format type="primary">
          <template #prefix>
            <text>{{ $t('prefix') }}</text>
          </template>
          <template #suffix>{{ $t('suffix') }}</template>
        </ht-text>
      </view>
    </demo-block>

    <demo-block :title="$t('jin-e')">
      <view>
        <ht-text text="16354.156" mode="price" type="success" decoration="line-through" prefix="￥" />
      </view>
    </demo-block>

    <demo-block :title="$t('wen-zi-zhuang-shi')">
      <view>
        <ht-text :text="text" type="warning" decoration="underline" />
      </view>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const text = ref<string>(
  '芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。'
)
function clickTest() {
  console.log(1)
}
</script>
<style lang="scss" scoped></style>
