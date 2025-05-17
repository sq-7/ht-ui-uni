<template>
  <page-wraper>
    <ht-form ref="form" :model="model" errorType="toast">
      <ht-cell-group border>
        <ht-input
          :label="$t('wai-bi-ba-bu')"
          label-width="100px"
          prop="value1"
          clearable
          v-model="model.value1"
          :placeholder="$t('qing-shu-ru-wai-bi-ba-bu')"
          :rules="[{ required: true, message: $t('qing-shu-ru-wai-bi-ba-bu') }]"
        />
        <ht-input
          :label="$t('sha-ka-la-ka')"
          label-width="100px"
          prop="value2"
          show-password
          clearable
          v-model="model.value2"
          :placeholder="$t('qing-shu-ru-sha-ka-la-ka')"
          :rules="[{ required: true, message: $t('qing-shu-ru-sha-ka-la-ka') }]"
        />
      </ht-cell-group>
      <view class="footer">
        <ht-button type="primary" size="large" @click="handleSubmit" block>{{ $t('ti-jiao') }}</ht-button>
      </view>
    </ht-form>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/ht-ui-uni'
import type { FormInstance } from '@/uni_modules/ht-ui-uni/components/ht-form/types'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { success: showSuccess } = useToast()
const model = reactive<{
  value1: string
  value2: string
}>({
  value1: '',
  value2: ''
})

const form = ref<FormInstance>()

function handleSubmit() {
  form
    .value!.validate()
    .then(({ valid, errors }) => {
      if (valid) {
        showSuccess({
          msg: t('xiao-yan-tong-guo')
        })
      }
    })
    .catch((error) => {
      console.log(error, 'error')
    })
}
</script>
