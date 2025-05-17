<template>
  <page-wraper>
    <demo-block :title="$t('jiBenYongFa')">
      <ht-checkbox v-model="check1">{{ $t('wo-te') }}</ht-checkbox>
    </demo-block>

    <demo-block :title="$t('xiu-gai-xing-zhuang-square')">
      <ht-checkbox v-model="check2" shape="square">{{ $t('wo-te') }}</ht-checkbox>
    </demo-block>

    <demo-block :title="$t('xiu-gai-xing-zhuang-button')">
      <ht-checkbox v-model="check3" shape="button">{{ $t('wo-te') }}</ht-checkbox>
    </demo-block>

    <demo-block :title="$t('xiu-gai-xuan-zhong-yan-se')">
      <ht-checkbox v-model="check4" checked-color="rgb(52, 209, 157)">{{ $t('wo-te') }}</ht-checkbox>
    </demo-block>

    <demo-block :title="$t('jin-yong-zhuang-tai')">
      <view style="margin-bottom: 10px">
        <ht-checkbox-group v-model="value1" disabled>
          <ht-checkbox :modelValue="1">{{ $t('wo-te') }}</ht-checkbox>
          <ht-checkbox :modelValue="2" :disabled="false">{{ $t('shang-jia-hou-tai') }}</ht-checkbox>
          <ht-checkbox :modelValue="3" shape="square">{{ $t('wo-te') }}</ht-checkbox>
          <ht-checkbox :modelValue="4" shape="square">{{ $t('shang-jia-hou-tai') }}</ht-checkbox>
        </ht-checkbox-group>
      </view>
      <ht-checkbox-group v-model="value2" disabled>
        <ht-checkbox :modelValue="1" shape="button">{{ $t('wo-te') }}</ht-checkbox>
        <ht-checkbox :modelValue="2" shape="button">{{ $t('shang-jia-hou-tai') }}</ht-checkbox>
      </ht-checkbox-group>
    </demo-block>

    <demo-block :title="$t('xiu-gai-truevalue-he-falsevalue-value3') + value3">
      <ht-checkbox v-model="value3" :true-value="$t('wo-te')" :false-value="$t('shang-jia-hou-tai')" @change="handleChange1">
        {{ $t('fu-xuan-kuang') }}
      </ht-checkbox>
    </demo-block>

    <demo-block :title="$t('tong-hang-zhan-shi')">
      <ht-checkbox-group v-model="value4" inline>
        <ht-checkbox :modelValue="1">{{ $t('wo-te') }}</ht-checkbox>
        <ht-checkbox :modelValue="2">{{ $t('shang-jia-hou-tai') }}</ht-checkbox>
      </ht-checkbox-group>
    </demo-block>

    <demo-block :title="$t('fu-xuan-kuang-zu')">
      <ht-checkbox-group v-model="value5">
        <ht-checkbox :modelValue="1">{{ $t('wo-te') }}</ht-checkbox>
        <ht-checkbox :modelValue="2">{{ $t('shang-jia-hou-tai') }}</ht-checkbox>
      </ht-checkbox-group>
    </demo-block>

    <demo-block :title="$t('biao-dan-mo-shi-fu-xuan-kuang-zu')" transparent>
      <ht-checkbox-group v-model="value6" cell>
        <ht-checkbox :modelValue="1">{{ $t('wo-te') }}</ht-checkbox>
        <ht-checkbox :modelValue="2">{{ $t('shang-jia-hou-tai') }}</ht-checkbox>
      </ht-checkbox-group>
    </demo-block>

    <demo-block :title="$t('biao-dan-mo-shi-fu-xuan-kuang-an-niu-zu')" transparent>
      <ht-checkbox-group v-model="value7" cell shape="button">
        <ht-checkbox :modelValue="1" disabled>{{ $t('xuan-xiang-yi') }}</ht-checkbox>
        <ht-checkbox :modelValue="2">{{ $t('xuan-xiang-er') }}</ht-checkbox>
        <ht-checkbox :modelValue="3">{{ $t('xuan-xiang-san') }}</ht-checkbox>
        <ht-checkbox :modelValue="4">{{ $t('xuan-xiang-si') }}</ht-checkbox>
        <ht-checkbox :modelValue="5">{{ $t('xuan-xiang-wu') }}</ht-checkbox>
        <ht-checkbox :modelValue="6">{{ $t('xuan-xiang-liu') }}</ht-checkbox>
        <ht-checkbox :modelValue="7">{{ $t('xuan-xiang-qi') }}</ht-checkbox>
      </ht-checkbox-group>
    </demo-block>

    <demo-block :title="$t('she-zhi-zui-xiao-xuan-zhong-shu-liang-he-zui-da-xuan-zhong-shu-liang')" transparent>
      <ht-checkbox-group v-model="value8" :min="1" :max="3" cell>
        <ht-checkbox :modelValue="1">{{ $t('jing-dong') }}</ht-checkbox>
        <ht-checkbox :modelValue="2">{{ $t('wo-te') }}</ht-checkbox>
        <ht-checkbox :modelValue="3">{{ $t('shang-jia-hou-tai') }}</ht-checkbox>
        <ht-checkbox :modelValue="4">{{ $t('ying-xiao-zhong-xin') }}</ht-checkbox>
      </ht-checkbox-group>
    </demo-block>

    <demo-block :title="$t('da-chi-cun')">
      <ht-checkbox-group v-model="value9" inline size="large">
        <ht-checkbox modelValue="jingmai">{{ $t('wo-te') }}</ht-checkbox>
        <ht-checkbox modelValue="shop">{{ $t('shang-jia-hou-tai') }}</ht-checkbox>
      </ht-checkbox-group>
      <ht-checkbox-group v-model="value10" size="large" class="group">
        <ht-checkbox modelValue="jingmai">{{ $t('wo-te') }}</ht-checkbox>
        <ht-checkbox modelValue="shop">{{ $t('shang-jia-hou-tai') }}</ht-checkbox>
      </ht-checkbox-group>
    </demo-block>

    <demo-block :title="$t('jie-he-cell-shi-yong')" transparent>
      <ht-cell-group border>
        <ht-checkbox-group v-model="value10" size="large">
          <ht-cell :title="$t('dian-zan')" center clickable @click="handleCheck1">
            <view @click.stop="noop">
              <ht-checkbox model-value="1" ref="checkBox1" custom-style="margin:0;"></ht-checkbox>
            </view>
          </ht-cell>
          <ht-cell :title="$t('tou-bi')" center clickable @click="handleCheck2">
            <view @click.stop="noop">
              <ht-checkbox model-value="2" ref="checkBox2" custom-style="margin:0;"></ht-checkbox>
            </view>
          </ht-cell>
          <ht-cell :title="$t('yi-jian-san-lian')" center clickable @click="handleCheck3">
            <view @click.stop="noop">
              <ht-checkbox model-value="3" ref="checkBox3" custom-style="margin:0;"></ht-checkbox>
            </view>
          </ht-cell>
        </ht-checkbox-group>
      </ht-cell-group>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import type { CheckboxInstance } from '@/uni_modules/ht-ui-uni/components/ht-checkbox/types'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const checkBox1 = ref<CheckboxInstance>()
const checkBox2 = ref<CheckboxInstance>()
const checkBox3 = ref<CheckboxInstance>()

function handleCheck1() {
  checkBox1.value && checkBox1.value.toggle()
}

function handleCheck2() {
  checkBox2.value && checkBox2.value.toggle()
}
function handleCheck3() {
  checkBox3.value && checkBox3.value.toggle()
}

function noop() {}

const check1 = ref<boolean>(true)
const check2 = ref<boolean>(true)
const check3 = ref<boolean>(true)
const check4 = ref<boolean>(true)
const check5 = ref<boolean>(true)
const check6 = ref<boolean>(true)

const value0 = ref<number[]>([1, 2, 3])

const value1 = ref<number[]>([1, 3])
const value2 = ref<number[]>([1])
const value3 = ref<string>(t('wo-te-12'))

const value4 = ref<number[]>([1])
const value5 = ref<number[]>([])

const value6 = ref<number[]>([1])
const value7 = ref<number[]>([1])
const value8 = ref<number[]>([1])
const value9 = ref<string[]>([])
const value10 = ref<string[]>([])

function handleChange1(e: any) {
  console.log(e)
}
</script>
<style lang="scss" scoped>
.group {
  display: block;
  margin-top: 10px;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
}
</style>
