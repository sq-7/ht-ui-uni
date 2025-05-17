<template>
  <view class="page-message-box">
    <page-wraper>
      <ht-message-box></ht-message-box>
      <ht-message-box selector="ht-message-box-slot">
        <ht-rate v-model="rate" />
      </ht-message-box>
      <demo-block title="alert">
        <ht-button @click="alert">alert</ht-button>
      </demo-block>

      <demo-block :title="$t('xian-shi-biao-ti')">
        <ht-button @click="alertWithTitle">alert</ht-button>
      </demo-block>

      <demo-block title="confirm">
        <ht-button @click="confirm">confirm</ht-button>
      </demo-block>

      <demo-block title="prompt">
        <ht-button @click="prompt">prompt</ht-button>
      </demo-block>

      <demo-block :title="$t('dang-wen-an-guo-chang-shi-dan-kuang-de-gao-du-bu-zai-zeng-jia-er-shi-jiang-wen-an-nei-rong-she-zhi-cheng-gun-dong')">
        <ht-button @click="alertWithLongChar">alert</ht-button>
      </demo-block>

      <demo-block :title="$t('shi-yong-wdmessagebox-zu-jian-tong-guo-slot-cha-ru-qi-ta-zu-jian-nei-rong')">
        <ht-button @click="withSlot">custom</ht-button>
      </demo-block>

      <demo-block :title="$t('shi-yong-beforeconfirm-gou-zi-zai-dan-kuang-que-ren-qian-ke-yi-jin-hang-yi-xie-cao-zuo')">
        <ht-button @click="beforeConfirm">beforeConfirm</ht-button>
      </demo-block>

      <demo-block :title="$t('tong-guo-buttonprops-zi-ding-yi-an-niu')">
        <ht-button @click="withButtonProps">withButtonProps</ht-button>
      </demo-block>
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import { useMessage, useToast } from '@/uni_modules/ht-ui-uni'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const rate = ref<number>(1)
const value1 = ref<string>('')

const toast = useToast()
const message = useMessage()
const message1 = useMessage('ht-message-box-slot')

function alert() {
  message.alert(t('cao-zuo-cheng-gong'))
}
function alertWithTitle() {
  message.alert({
    msg: t('ti-shi-wen-an'),
    title: t('biaoTi-0')
  })
}
function confirm() {
  message
    .confirm({
      msg: t('shi-fou-shan-chu'),
      title: t('ti-shi')
    })
    .catch((error) => {
      console.log(error)
    })
}
function prompt() {
  message
    .prompt({
      title: t('qing-shu-ru-you-xiang'),
      inputValue: value1.value,
      inputPattern: /.+@.+\..+/i
    })
    .then((resp) => {
      console.log(resp)
    })
    .catch((error) => {
      console.log(error)
    })
}
function alertWithLongChar() {
  message.alert({
    msg: t('yi-shang-wen-zi-shi-shi-yi'),
    title: t('biaoTi-0')
  })
}

function beforeConfirm() {
  message
    .confirm({
      msg: t('shi-fou-shan-chu-0'),
      title: t('ti-shi-0'),
      beforeConfirm: ({ resolve }) => {
        toast.loading(t('shan-chu-zhong'))
        setTimeout(() => {
          toast.close()
          resolve(true)
          toast.success(t('shan-chu-cheng-gong'))
        }, 3000)
      }
    })
    .then(() => {})
    .catch((error) => {
      console.log(error)
    })
}

function withButtonProps() {
  message
    .confirm({
      msg: t('zi-ding-yi-an-niu-yang-shi'),
      title: t('ti-shi-1'),
      cancelButtonProps: {
        round: false,
        type: 'error',
        customClass: 'custom-shadow'
      },
      confirmButtonProps: {
        round: false,
        type: 'success',
        customClass: 'custom-shadow'
      }
    })
    .then(() => {})
    .catch((error) => {
      console.log(error)
    })
}

function withSlot() {
  message1
    .confirm({
      title: t('ping-fen')
    })
    .then(() => {
      message.alert(t('ni-de-ping-fen-wei-ratevalue-fen', [rate.value]))
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>
<style lang="scss" scoped>
.page-message-box {
  :deep() {
    .custom-shadow {
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    }
  }
}
</style>
