<template>
  <ht-toast></ht-toast>

  <page-wraper>
    <demo-block :title="$t('jiBenYongFa')" transparent>
      <ht-cell-group border>
        <ht-cell :title="$t('mo-ren-jian-pan')" is-link @click="showKeyBoard(1)" />
        <ht-cell :title="$t('dai-you-ce-lan-de-jian-pan')" is-link @click="showKeyBoard(2)" />
        <ht-cell :title="$t('shen-fen-zheng-jian-pan')" is-link @click="showKeyBoard(3)" />
        <ht-cell :title="$t('dai-biao-ti-de-jian-pan')" is-link @click="showKeyBoard(4)" />
        <ht-cell :title="$t('slot-zi-ding-yi-biao-ti')" is-link @click="showKeyBoard(9)" />
        <ht-cell :title="$t('duo-geewai-an-jian')" is-link @click="showKeyBoard(5)" />
        <ht-cell :title="$t('sui-ji-shu-zi-jian-pan')" is-link @click="showKeyBoard(6)" />
        <ht-cell :title="$t('shuang-xiang-bang-ding')" clickable :value="value1" @click="showKeyBoard(7)" />
        <ht-cell :title="$t('zhan-shi-meng-ceng')" clickable @click="showKeyBoard(8)" />
      </ht-cell-group>
    </demo-block>

    <ht-number-keyboard v-model:visible="visible1" @input="onInput" @delete="onDelete"></ht-number-keyboard>
    <ht-number-keyboard
      v-model:visible="visible2"
      mode="custom"
      extra-key="."
      :close-text="$t('wan-cheng')"
      @input="onInput"
      @delete="onDelete"
    ></ht-number-keyboard>
    <ht-number-keyboard v-model:visible="visible3" extra-key="X" :close-text="$t('wan-cheng')" @input="onInput" @delete="onDelete" />
    <ht-number-keyboard
      v-model:visible="visible4"
      :title="$t('shu-ru-mi-ma')"
      extra-key="."
      :close-text="$t('wan-cheng')"
      @input="onInput"
      @delete="onDelete"
    ></ht-number-keyboard>
    <ht-number-keyboard v-model:visible="visible9" extra-key="." :close-text="$t('wan-cheng')" @input="onInput" @delete="onDelete">
      <template #title>
        <text style="color: red">{{ $t('zi-ding-yi-biao-ti') }}</text>
      </template>
    </ht-number-keyboard>

    <ht-number-keyboard
      v-model:visible="visible5"
      mode="custom"
      :extra-key="['00', '.']"
      :close-text="$t('wan-cheng')"
      @input="onInput"
      @delete="onDelete"
    />

    <ht-number-keyboard v-model:visible="visible6" random-key-order @input="onInput" @delete="onDelete" />

    <ht-number-keyboard
      v-model="value1"
      :maxlength="6"
      v-model:visible="visible7"
      :title="$t('jian-pan-biao-ti')"
      extra-key="."
      :close-text="$t('wan-cheng')"
      @input="onInput"
      @delete="onDelete"
    ></ht-number-keyboard>

    <ht-number-keyboard :modal="true" v-model:visible="visible8" @input="onInput" @delete="onDelete" />
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/ht-ui-uni'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { show: showToast } = useToast()
const visible1 = ref<boolean>(false)
const visible2 = ref<boolean>(false)
const visible3 = ref<boolean>(false)
const visible4 = ref<boolean>(false)
const visible5 = ref<boolean>(false)
const visible6 = ref<boolean>(false)
const visible7 = ref<boolean>(false)
const visible8 = ref<boolean>(false)
const visible9 = ref<boolean>(false)

const visibleArr = [visible1, visible2, visible3, visible4, visible5, visible6, visible7, visible8, visible9]

const value1 = ref<string>('')

function showKeyBoard(index: number) {
  visibleArr.forEach((item, i) => (i === index - 1 ? (item.value = true) : (item.value = false)))
}

const onInput = (value: string) => showToast(`${value}`)
const onDelete = () => showToast(t('shan-chu'))
</script>
<style lang="scss" scoped></style>
