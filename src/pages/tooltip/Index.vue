<template>
  <page-wraper>
    <view style="overflow: hidden" class="page-tooltip" @click.stop="closeOutside">
      <demo-block :title="$t('jiBenYongFa')">
        <view class="top">
          <ht-tooltip placement="bottom-start" content="bottom-start 提示文字" @change="handleChange1">
            <ht-button :round="false">bottom-start</ht-button>
          </ht-tooltip>
          <ht-tooltip placement="bottom" content="bottom 提示文字" @change="handleChange2">
            <ht-button :round="false">bottom</ht-button>
          </ht-tooltip>
          <ht-tooltip placement="bottom-end" content="bottom-end 提示文字" @change="handleChange3">
            <ht-button :round="false">bottom-end</ht-button>
          </ht-tooltip>
        </view>
        <view class="left">
          <ht-tooltip placement="right-start" content="right-start 提示文字" @change="handleChange4">
            <ht-button :round="false">right-start</ht-button>
          </ht-tooltip>
          <ht-tooltip placement="right" content="right 提示文字" customStyle="margin: 20px 0" @change="handleChange5">
            <ht-button :round="false">right</ht-button>
          </ht-tooltip>
          <ht-tooltip placement="right-end" content="right-end 提示文字" @change="handleChange6">
            <ht-button :round="false">right-end</ht-button>
          </ht-tooltip>
        </view>
        <view class="right">
          <ht-tooltip placement="left-start" content="left-start 提示文字" @change="handleChange7">
            <ht-button :round="false">
              left-start
              <ht-icon name="setting" />
            </ht-button>
          </ht-tooltip>
          <ht-tooltip placement="left" content="left 提示文字" customStyle="margin: 20px 0" @change="handleChange8">
            <ht-button :round="false">left</ht-button>
          </ht-tooltip>
          <ht-tooltip placement="left-end" content="left-end 提示文字" @change="handleChange9">
            <ht-button :round="false">left-end</ht-button>
          </ht-tooltip>
        </view>
        <view class="bottom">
          <ht-tooltip placement="top-start" content="top-start 提示文字" @change="handleChange10">
            <ht-button :round="false">top-start</ht-button>
          </ht-tooltip>
          <ht-tooltip placement="top" content="top 提示文字" @change="handleChange11">
            <ht-button :round="false">top</ht-button>
          </ht-tooltip>
          <ht-tooltip placement="top-end" content="top-end 提示文字" @change="handleChange12">
            <ht-button :round="false">top-end</ht-button>
          </ht-tooltip>
        </view>
      </demo-block>
      <demo-block :title="$t('xian-shi-guan-bi-an-niu')">
        <view class="demo-left">
          <ht-tooltip content="显示关闭按钮" placement="right" show-close @change="handleChange13">
            <ht-button :round="false">{{ $t('xian-shi-guan-bi-an-niu-0') }}</ht-button>
          </ht-tooltip>
        </view>
      </demo-block>
      <demo-block :title="$t('duo-hang-wen-ben')">
        <view class="demo-left lines-demo">
          <ht-tooltip placement="right" use-content-slot @change="handleChange14">
            <ht-button :round="false">{{ $t('duo-hang-wen-ben-0') }}</ht-button>
            <template #content>
              <view class="lines-content">
                <view>{{ $t('duo-hang-wen-ben-1') }}</view>
                <view>{{ $t('duo-hang-wen-ben-2') }}</view>
                <view>{{ $t('duo-hang-wen-ben-3') }}</view>
              </view>
            </template>
          </ht-tooltip>
        </view>
      </demo-block>
      <demo-block :title="$t('kong-zhi-xian-yin')">
        <view @click.stop="control">
          <ht-button plain size="small" class="button-control">{{ show ? '关闭' : '打开' }}</ht-button>
        </view>
        <view class="demo-left demo-control">
          <ht-tooltip placement="top" content="控制显隐" v-model="show">
            <ht-button :round="false">top</ht-button>
          </ht-tooltip>
        </view>
      </demo-block>
      <demo-block :title="$t('bang-ding-change-shi-jian')">
        <view class="demo-left">
          <ht-tooltip placement="right-end" :content="content" @open="onShow" @close="onHide" @change="handleChange16">
            <ht-button :round="false">{{ $t('shi-jian-0') }}</ht-button>
          </ht-tooltip>
        </view>
      </demo-block>
      <demo-block :title="$t('jinYong')">
        <view class="demo-left">
          <ht-tooltip placement="right-end" content="禁用" disabled @change="handleChange17">
            <ht-button :round="false">{{ $t('jinYong') }}</ht-button>
          </ht-tooltip>
        </view>
      </demo-block>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast, useQueue } from '@/uni_modules/ht-ui-uni'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const show = ref<boolean>(false)
const content = ref<string>(t('xian-shi-nei-rong'))

const toast = useToast()

const { closeOutside } = useQueue()

function control() {
  show.value = !show.value
}
function onShow() {
  console.log('显示')
}
function onHide() {
  toast.show(t('wen-zi-ti-shi-guan-bi'))
}
function handleChange1(event: any) {
  console.log(event)
}
function handleChange2(event: any) {
  console.log(event)
}
function handleChange3(event: any) {
  console.log(event)
}
function handleChange4(event: any) {
  console.log(event)
}
function handleChange5(event: any) {
  console.log(event)
}
function handleChange6(event: any) {
  console.log(event)
}
function handleChange7(event: any) {
  console.log(event)
}
function handleChange8(event: any) {
  console.log(event)
}
function handleChange9(event: any) {
  console.log(event)
}
function handleChange10(event: any) {
  console.log(event)
}
function handleChange11(event: any) {
  console.log(event)
}
function handleChange12(event: any) {
  console.log(event)
}
function handleChange13(event: any) {
  console.log(event)
}
function handleChange14(event: any) {
  console.log(event)
}
function handleChange15(event: any) {
  console.log(event)
}
function handleChange16(event: any) {
  console.log(event)
}
function handleChange17(event: any) {
  console.log(event)
}
</script>
<style lang="scss" scoped>
.page-tooltip {
  :deep() {
    .ht-button {
      min-width: auto;
    }
  }
}
.position-wrap {
  position: relative;
}
.center {
  text-align: center;
}
.left {
  float: left;
  display: flex;
  flex-direction: column;
}
.right {
  float: right;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-bottom: 20px;
}
.top {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}
.bottom {
  clear: both;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.demo-left {
  text-align: left;
}
.button-control {
  float: left;
}
.demo-control {
  text-align: center;
  display: block;
  padding-top: 18px;
  clear: both;
  margin-bottom: 10px;
}
.lines-demo {
  padding: 30px 0;
}
.lines-content {
  color: #fff;
  padding: 5px;
  width: 90px;
}
</style>
