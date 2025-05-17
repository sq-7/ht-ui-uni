<template>
  <view>
    <page-wraper>
      <demo-block :title="$t('jiBenYongFa')">
        <view>
          <ht-tag custom-class="space">{{ $t('biao-qian') }}</ht-tag>
          <ht-tag custom-class="space" type="primary">{{ $t('biao-qian-0') }}</ht-tag>
          <ht-tag custom-class="space" type="danger">{{ $t('biao-qian-6') }}</ht-tag>
          <ht-tag custom-class="space" type="warning">{{ $t('biao-qian-7') }}</ht-tag>
          <ht-tag custom-class="space" type="success">{{ $t('biao-qian-8') }}</ht-tag>
        </view>
      </demo-block>

      <demo-block :title="$t('you-ling-biao-qian')">
        <view>
          <ht-tag custom-class="space" plain>{{ $t('biao-qian-9') }}</ht-tag>
          <ht-tag custom-class="space" plain type="primary">{{ $t('biao-qian-10') }}</ht-tag>
          <ht-tag custom-class="space" plain type="danger">{{ $t('biao-qian-11') }}</ht-tag>
          <ht-tag custom-class="space" plain type="warning">{{ $t('biao-qian-12') }}</ht-tag>
          <ht-tag custom-class="space" plain type="success">{{ $t('biao-qian-13') }}</ht-tag>
        </view>
      </demo-block>

      <demo-block :title="$t('biao-ji-biao-qian')">
        <view>
          <ht-tag custom-class="space" mark>{{ $t('biao-qian-14') }}</ht-tag>
          <ht-tag custom-class="space" type="primary" mark>{{ $t('biao-qian-15') }}</ht-tag>
          <ht-tag custom-class="space" type="danger" mark>{{ $t('biao-qian-16') }}</ht-tag>
          <ht-tag custom-class="space" type="warning" mark>{{ $t('biao-qian-17') }}</ht-tag>
          <ht-tag custom-class="space" type="success" mark>{{ $t('biao-qian-18') }}</ht-tag>
        </view>
      </demo-block>

      <demo-block :title="$t('you-ling-biao-ji-biao-qian')">
        <view>
          <ht-tag custom-class="space" mark plain>{{ $t('biao-qian-19') }}</ht-tag>
          <ht-tag custom-class="space" type="primary" mark plain>{{ $t('biao-qian-20') }}</ht-tag>
          <ht-tag custom-class="space" type="danger" mark plain>{{ $t('biao-qian-21') }}</ht-tag>
          <ht-tag custom-class="space" type="warning" mark plain>{{ $t('biao-qian-22') }}</ht-tag>
          <ht-tag custom-class="space" type="success" mark plain>{{ $t('biao-qian-23') }}</ht-tag>
        </view>
      </demo-block>

      <demo-block :title="$t('yuan-jiao-biao-qian')">
        <view>
          <ht-tag custom-class="space" round>{{ $t('biao-qian-24') }}</ht-tag>
          <ht-tag custom-class="space" type="primary" round>{{ $t('biao-qian-25') }}</ht-tag>
          <ht-tag custom-class="space" type="danger" round>{{ $t('biao-qian-26') }}</ht-tag>
          <ht-tag custom-class="space" type="warning" round>{{ $t('biao-qian-27') }}</ht-tag>
          <ht-tag custom-class="space" type="success" round>{{ $t('biao-qian-28') }}</ht-tag>
        </view>
      </demo-block>

      <demo-block :title="$t('she-zhi-tu-biao')">
        <view>
          <ht-tag custom-class="space" icon="clock" mark>{{ $t('biao-qian-29') }}</ht-tag>
          <ht-tag custom-class="space" mark use-icon-slot>
            <text>{{ $t('cha-cao') }}</text>
            <template #icon>
              <ht-icon name="dong" />
            </template>
          </ht-tag>
        </view>
      </demo-block>

      <demo-block :title="$t('zi-ding-yi-yan-se-0')">
        <view>
          <ht-tag custom-class="space" color="#0083ff" bg-color="#d0e8ff">{{ $t('biao-qian-30') }}</ht-tag>
          <ht-tag custom-class="space" color="#FAA21E" bg-color="#FAA21E" plain>{{ $t('biao-qian-31') }}</ht-tag>
        </view>
      </demo-block>

      <demo-block :title="$t('ke-guan-bi')">
        <view>
          <ht-tag
            v-for="(tag, index) in tags"
            :key="index"
            custom-class="space"
            round
            closable
            @click="handleClick(index)"
            @close="handleClose(index)"
          >
            {{ tag.value }}
          </ht-tag>
        </view>
      </demo-block>
      <demo-block :title="$t('xin-zeng-biao-qian')">
        <view>
          <ht-tag v-for="(tag, index) in dynamicTags" :key="index" custom-class="space" round closable @close="handleClose1(index)">
            {{ tag }}
          </ht-tag>
          <ht-tag custom-class="space" round dynamic @confirm="handleConfirm"></ht-tag>
          <ht-tag custom-class="space" round dynamic @confirm="handleConfirm">
            <template #add>
              <ht-icon name="pin" size="12px"></ht-icon>
              <text style="margin-left: 4px">{{ $t('zi-ding-yi') }}</text>
            </template>
          </ht-tag>
        </view>
      </demo-block>
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const tags = ref([
  {
    plain: true,
    closable: true,
    type: 'primary',
    value: t('biao-qian-yi')
  },
  {
    plain: true,
    closable: true,
    type: 'primary',
    value: t('biao-qian-er')
  },
  {
    plain: true,
    closable: true,
    type: 'primary',
    value: t('biao-qian-san')
  }
])
const dynamicTags = ref([t('biao-qian-yi-0'), t('biao-qian-er-0')])

function handleClick(index: number) {
  console.log('click:index' + index)
}
function handleClose(order: number) {
  tags.value = tags.value.filter((value, index) => index !== order)
  console.log('close:index' + order)
}
function handleClose1(order: number) {
  dynamicTags.value = dynamicTags.value.filter((item, index) => {
    return index !== order
  })
}
function handleConfirm({ value }: any) {
  if (!value) return
  dynamicTags.value = [...dynamicTags.value, value]
}
</script>
<style lang="scss" scoped>
:deep(.space) {
  margin: 0 10px 10px;
}
</style>
