<template>
  <view>
    <page-wraper>
      <demo-block :title="$t('jiBenYongFa')">
        <ht-button @click="showToast">toast</ht-button>
        <ht-button @click="showLongToast">{{ $t('chang-wen-an') }}</ht-button>
      </demo-block>
      <demo-block :title="$t('lei-xing-toast')">
        <ht-button @click="showSuccessToast">{{ $t('cheng-gong-toast') }}</ht-button>
        <ht-button @click="showErrorToast">{{ $t('cuo-wu-toast') }}</ht-button>
        <ht-button @click="showWarnToast">{{ $t('jing-gao-toast') }}</ht-button>
        <ht-button @click="showNormalToast">{{ $t('chang-gui-toast') }}</ht-button>
      </demo-block>
      <demo-block :title="$t('shi-yong-tu-biao')">
        <ht-button @click="showInnerIconToast">{{ $t('nei-bu-tu-biao') }}</ht-button>
        <ht-button @click="showCustomIconToast">{{ $t('ziDingYiTuBiao') }}</ht-button>
      </demo-block>
      <demo-block :title="$t('ti-shi-wei-zhi')">
        <ht-button @click="showTopToast">{{ $t('ding-bu-toast') }}</ht-button>
        <ht-button @click="showMiddletoast">{{ $t('ju-zhong-toast') }}</ht-button>
        <ht-button @click="showBottomToast">{{ $t('di-bu-toast') }}</ht-button>
      </demo-block>
      <demo-block :title="$t('loading')">
        <ht-button @click="showLoadingToast">{{ $t('loading-jia-zai') }}</ht-button>
        <ht-button @click="showLoadingToast2">{{ $t('ring-lei-xing-loading') }}</ht-button>
        <ht-button @click="showLoadingToast3">{{ $t('zong-xiang-bu-ju-loading') }}</ht-button>
      </demo-block>
      <demo-block :title="$t('pai-ban-fang-xiang')">
        <ht-button @click="showHorizonToast">{{ $t('heng-xiang-pai-ban') }}</ht-button>
        <ht-button @click="showVerticalToast">{{ $t('zong-xiang-pai-ban') }}</ht-button>
      </demo-block>
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/ht-ui-uni'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const toast = useToast()

function showToast() {
  toast.show(t('ti-shi-xin-xi'))
}
function showSuccessToast() {
  toast.success(t('cao-zuo-cheng-gong'))
}
function showErrorToast() {
  toast.error(t('cuo-wu-ti-shi-cuo-wu-ti-shi'))
}
function showWarnToast() {
  toast.warning(t('ti-shi-xin-xi'))
}
function showNormalToast() {
  toast.info(t('chang-gui-ti-shi-chang-gui-ti-shi'))
}
function showTopToast() {
  toast.show({
    position: 'top',
    iconClass: 'star',
    msg: t('ti-shi-xin-xi'),
    closed() {
      console.log(232)
    },
    opened() {
      console.log(2323232)
    }
  })
}

function showMiddletoast() {
  toast.show({
    position: 'middle',
    iconClass: 'star',
    msg: t('ti-shi-xin-xi'),
    closed() {
      console.log(232)
    },
    opened() {
      console.log(2323232)
    }
  })
}

function showBottomToast() {
  toast.show({
    position: 'bottom',
    msg: t('ti-shi-xin-xi')
  })
}
function showLoadingToast() {
  toast.loading(t('3s-hou-tiao-yong-close-guan-bi'))
  setTimeout(() => {
    toast.close()
  }, 3000)
}
function showLoadingToast2() {
  toast.loading({
    msg: t('3s-hou-tiao-yong-close-guan-bi-0'),
    loadingType: 'ring',
    loadingColor: '#fff'
  })
  setTimeout(() => {
    toast.close()
  }, 3000)
}

function showLoadingToast3() {
  toast.loading({
    msg: '芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。',
    direction: 'vertical'
  })
  setTimeout(() => {
    toast.close()
  }, 3000)
}
function showLongToast() {
  toast.show(
    t(
      'zhe-shi-yi-duan-hen-chang-hen-chang-hen-chang-hen-chang-hen-chang-hen-chang-hen-chang-hen-chang-hen-chang-hen-chang-hen-chang-hen-chang-hen-chang-hen-chang-hen-chang-de-wen-an'
    )
  )
}

function showInnerIconToast() {
  toast.show({
    iconClass: 'star',
    msg: t('shi-yong-zu-jian-ku-nei-bu-tu-biao')
  })
}

function showCustomIconToast() {
  toast.show({
    iconClass: 'kehuishouwu',
    classPrefix: 'fish',
    msg: t('shi-yong-zi-ding-yi-tu-biao')
  })
}

function showHorizonToast() {
  toast.success(t('heng-xiang-pai-ban-0'))
}

function showVerticalToast() {
  toast.success({
    msg: '芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。',
    direction: 'vertical'
  })
}
</script>
<style lang="scss" scoped>
:deep(button) {
  margin: 0 10px 10px 0;
}
</style>
