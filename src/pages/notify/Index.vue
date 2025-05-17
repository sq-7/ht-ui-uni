<template>
  <page-wraper>
    <demo-block :title="$t('jiBenYongFa')" transparent>
      <ht-cell-group>
        <ht-cell :title="$t('ji-chu-yong-fa-0')" is-link @click="showBasicNotify" />
      </ht-cell-group>
    </demo-block>
    <demo-block :title="$t('tong-zhi-lei-xing')" transparent>
      <ht-cell-group>
        <ht-cell :title="$t('zhu-yao-tong-zhi')" is-link @click="showType('primary')" />
        <ht-cell :title="$t('cheng-gong-tong-zhi')" is-link @click="showType('success')" />
        <ht-cell :title="$t('wei-xian-tong-zhi')" is-link @click="showType('danger')" />
        <ht-cell :title="$t('jing-gao-tong-zhi')" is-link @click="showType('warning')" />
      </ht-cell-group>
    </demo-block>
    <demo-block :title="$t('zi-ding-yi-pei-zhi')" transparent>
      <ht-cell-group>
        <ht-cell :title="$t('zi-ding-yi-yan-se-0')" is-link @click="showCustomColor" />
        <ht-cell :title="$t('zi-ding-yi-wei-zhi')" is-link @click="showCustomPosition" />
        <ht-cell :title="$t('zi-ding-yi-shi-chang')" is-link @click="showCustomDuration" />
      </ht-cell-group>
    </demo-block>
    <demo-block :title="$t('shi-yong-notify-zu-jian')" transparent>
      <ht-cell-group>
        <ht-cell :title="$t('shi-yong-notify-zu-jian-0')" is-link @click="showNotifyComponent" />
      </ht-cell-group>
    </demo-block>
    <ht-notify selector="visible" type="success" v-model:visible="visible">
      <ht-icon name="check-outline" size="inherit" color="inherit" />
      {{ $t('cheng-gong-tong-zhi-0') }}
    </ht-notify>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { NotifyType } from '@/uni_modules/ht-ui-uni/components/ht-notify/types'
import { useNotify } from '@/uni_modules/ht-ui-uni'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
let timer: ReturnType<typeof setTimeout>
const visible = ref(false)
const { showNotify } = useNotify()

const showType = (type: NotifyType) => {
  showNotify({
    message: t('tong-zhi-nei-rong'),
    type
  })
}
const showBasicNotify = () => showNotify(t('ce-shi'))
const showCustomColor = () => {
  showNotify({
    color: '#ad0000',
    message: t('zi-ding-yi-yan-se-0'),
    background: '#ffe1e1'
  })
}
const showCustomPosition = () => {
  showNotify({
    message: t('zi-ding-yi-wei-zhi-0'),
    position: 'bottom'
  })
}
const showCustomDuration = () => {
  showNotify({
    message: t('zi-ding-yi-shi-chang-0'),
    duration: 1000
  })
}
const showNotifyComponent = () => {
  visible.value = true
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    visible.value = false
  }, 2000)
}
</script>
