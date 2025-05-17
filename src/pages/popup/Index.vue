<template>
  <page-meta :page-style="`overflow:${show10 ? 'hidden' : 'visible'};`"></page-meta>
  <view>
    <page-wraper>
      <demo-block :title="$t('ji-chu-yong-fa-0')" transparent>
        <ht-cell-group>
          <ht-cell :title="$t('dan-chu-ceng')" is-link @click="handleClick1" />
        </ht-cell-group>
      </demo-block>
      <demo-block :title="$t('dan-chu-wei-zhi')" transparent>
        <ht-cell-group border>
          <ht-cell :title="$t('ding-bu')" is-link @click="handleClick2" />
          <ht-cell :title="$t('you-ce')" is-link @click="handleClick3" />
          <ht-cell :title="$t('di-bu')" is-link @click="handleClick4" />
          <ht-cell :title="$t('zuo-ce')" is-link @click="handleClick5" />
        </ht-cell-group>
      </demo-block>
      <demo-block :title="$t('guan-bi-an-niu')" transparent>
        <ht-cell-group border>
          <ht-cell :title="$t('guan-bi-an-niu-0')" is-link @click="handleClick6" />
        </ht-cell-group>
      </demo-block>

      <demo-block :title="$t('suo-ding-gun-dong')" transparent>
        <ht-cell-group border>
          <ht-cell :title="$t('suo-ding-gun-dong-0')" is-link @click="handleClick10" />
        </ht-cell-group>
      </demo-block>

      <demo-block :title="$t('jin-yong-zhe-zhao-dian-ji')" transparent>
        <ht-cell-group border>
          <ht-cell :title="$t('jin-yong-zhe-zhao-dian-ji-0')" is-link @click="handleClick7" />
        </ht-cell-group>
      </demo-block>

      <demo-block :title="$t('jin-yong-zhe-zhao')" transparent>
        <ht-cell-group border>
          <ht-cell :title="$t('jin-yong-zhe-zhao-0')" is-link @click="handleClick8" />
        </ht-cell-group>
      </demo-block>

      <demo-block :title="$t('kai-qi-di-bu-an-quan-qu')" transparent>
        <ht-cell-group border>
          <ht-cell :title="$t('kai-qi-di-bu-an-quan-qu-0')" is-link @click="handleClick9" />
        </ht-cell-group>
      </demo-block>

      <ht-popup v-model="show1" @close="handleClose1" custom-style="border-radius:32rpx;">
        <text class="custom-txt">{{ $t('dan-dan-dan') }}</text>
      </ht-popup>
      <ht-popup v-model="show2" position="top" custom-style="height: 200px;" @close="handleClose2"></ht-popup>
      <ht-popup v-model="show3" position="right" custom-style="width: 200px;" @close="handleClose3"></ht-popup>
      <ht-popup v-model="show4" position="bottom" custom-style="height: 200px;" @close="handleClose4"></ht-popup>
      <ht-popup v-model="show5" position="left" custom-style="width: 200px;" @close="handleClose5"></ht-popup>
      <ht-popup v-model="show6" position="bottom" closable custom-style="height: 200px;" @close="handleClose6"></ht-popup>
      <ht-popup
        v-model="show7"
        position="bottom"
        :close-on-click-modal="false"
        closable
        custom-style="height: 200px;"
        @close="handleClose7"
      ></ht-popup>

      <ht-popup v-model="show8" position="bottom" :modal="false" closable custom-style="height: 200px;" @close="handleClose8"></ht-popup>
      <ht-popup v-model="show9" position="bottom" :safe-area-inset-bottom="true" custom-style="height: 200px;" @close="handleClose9"></ht-popup>
      <ht-popup
        v-model="show10"
        lock-scroll
        position="bottom"
        :safe-area-inset-bottom="true"
        custom-style="height: 200px;"
        @close="handleClose10"
      ></ht-popup>
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const show1 = ref<boolean>(false)
const show2 = ref<boolean>(false)
const show3 = ref<boolean>(false)
const show4 = ref<boolean>(false)
const show5 = ref<boolean>(false)
const show6 = ref<boolean>(false)
const show7 = ref<boolean>(false)

function handleClick1() {
  show1.value = true
}
function handleClose1() {
  show1.value = false
}
function handleClick2() {
  show2.value = true
}
function handleClose2() {
  show2.value = false
}
function handleClick3() {
  show3.value = true
}
function handleClose3() {
  show3.value = false
}
function handleClick4() {
  show4.value = true
}
function handleClose4() {
  show4.value = false
}
function handleClick5() {
  show5.value = true
}
function handleClose5() {
  show5.value = false
}
function handleClick6() {
  show6.value = true
}
function handleClose6() {
  show6.value = false
}

function handleClick7() {
  show7.value = true
}

function handleClose7() {
  show7.value = false
}

const show8 = ref<boolean>(false)

function handleClick8() {
  show8.value = true
}

function handleClose8() {
  show8.value = false
}

const show9 = ref<boolean>(false)

function handleClick9() {
  show9.value = true
}

function handleClose9() {
  show9.value = false
}

const show10 = ref<boolean>(false)

function handleClick10() {
  show10.value = true
}

function handleClose10() {
  show10.value = false
}
</script>
<style lang="scss" scoped>
.ht-theme-dark {
  .custom-txt {
    color: $-dark-color;
  }
}

.custom-txt {
  color: black;
  width: 400rpx;
  height: 400rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40rpx;
  border-radius: 32rpx;
}
</style>
