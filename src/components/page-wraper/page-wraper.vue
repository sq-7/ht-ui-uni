<template>
  <ht-config-provider :theme="theme" :theme-vars="isRed ? themeVars : {}">
    <view class="page-wraper" @click="closeOutside">
      <ht-cell :title="$t('qie-huan-an-hei')" title-width="240px" center v-if="showDarkMode">
        <ht-switch v-model="isDark" />
      </ht-cell>
      <ht-cell :title="$t('qie-huan-zhu-ti-se')" title-width="240px" center v-if="showDarkMode">
        <ht-switch v-model="isRed" />
      </ht-cell>
      <slot />

      <ht-gap height="0" v-if="safeAreaInsetBottom" safe-area-bottom></ht-gap>
    </view>
    <ht-notify />
    <ht-toast />
  </ht-config-provider>
</template>
<script lang="ts">
export default {
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>
<script lang="ts" setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import { setNotifyDefaultOptions, useQueue, type ConfigProviderThemeVars } from '@/uni_modules/ht-ui-uni'
import { useDark } from '../../store'

interface Props {
  showDarkMode?: boolean
  safeAreaInsetBottom?: boolean
  useWxAd?: boolean
  useRewardFab?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showDarkMode: false,
  safeAreaInsetBottom: true,
  useWxAd: process.env.NODE_ENV === 'development' ? false : true,
  useRewardFab: false
})

const enableRewardFab = computed(() => {
  return props.useRewardFab && (process.env.NODE_ENV === 'development' ? false : true)
})
const darkMode = useDark()
const { closeOutside } = useQueue()
const isDark = ref<boolean>(false)
const isRed = ref<boolean>(false)
// #ifdef MP-WEIXIN
const fabActive = ref<boolean>(false)
// #endif

const themeVars: ConfigProviderThemeVars = {
  colorTheme: 'red'
}

const theme = computed(() => {
  return darkMode.isDark.value || isDark.value ? 'dark' : 'light'
})

onMounted(() => {
  setNotifyDefaultOptions({
    onClick: (event) => console.log('onClick', event),
    onClosed: () => console.log('onClosed'),
    onOpened: () => console.log('onOpened')
  })
})
</script>
<style lang="scss" scoped>
.ht-theme-dark {
  .page-wraper {
    background: #000;
  }
}
.page-wraper {
  min-height: calc(100vh - var(--window-top));
  box-sizing: border-box;
}
</style>
