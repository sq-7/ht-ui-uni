<template>
  <page-wraper>
    <demo-block :title="$t('dian-zhuang-zhi-shi-qi')">
      <ht-swiper
        :list="swiperList"
        autoplay
        v-model:current="current"
        :indicator="{ type: 'dots' }"
        @click="handleClick"
        @change="onChange"
      ></ht-swiper>
    </demo-block>

    <demo-block :title="$t('dian-tiao-zhuang-zhi-shi-qi')">
      <ht-swiper
        :list="swiperList"
        autoplay
        v-model:current="current1"
        :indicator="{ type: 'dots-bar' }"
        @click="handleClick"
        @change="onChange"
      ></ht-swiper>
    </demo-block>

    <demo-block :title="$t('shu-zi-zhi-shi-qi')">
      <ht-swiper
        :list="swiperList"
        autoplay
        v-model:current="current2"
        :indicator="{ type: 'fraction' }"
        indicator-position="bottom-right"
        @click="handleClick"
        @change="onChange"
      ></ht-swiper>
    </demo-block>

    <!-- #ifdef MP-WEIXIN || H5 || MP-DINGTALK -->
    <demo-block :title="$t('shi-pin-lun-bo')">
      <ht-swiper
        :list="videoList"
        autoplay
        :indicator="{ type: 'fraction' }"
        indicator-position="top-right"
        @click="handleClick"
        @change="onChange"
      ></ht-swiper>
    </demo-block>

    <demo-block :title="$t('shou-dong-bo-fang-shi-pin')">
      <ht-swiper
        :list="videoList"
        autoplay
        :autoplayVideo="false"
        :indicator="{ type: 'fraction' }"
        indicator-position="top-right"
        @click="handleClick"
        @change="onChange"
      ></ht-swiper>
    </demo-block>

    <demo-block :title="$t('bo-fang-shi-pin-shi-ting-zhi-lun-bo')">
      <ht-swiper
        :list="videoList"
        autoplay
        stopAutoplayWhenVideoPlay
        :autoplayVideo="false"
        :indicator="{ type: 'fraction' }"
        indicator-position="top-right"
        @click="handleClick"
        @change="onChange"
      ></ht-swiper>
    </demo-block>
    <!-- #endif -->

    <demo-block :title="$t('shou-dong-qie-huan')">
      <ht-swiper
        :list="swiperList"
        :autoplay="false"
        v-model:current="current3"
        :indicator="{ showControls: true }"
        :loop="false"
        @click="handleClick"
        @change="onChange"
      ></ht-swiper>
    </demo-block>

    <demo-block :title="$t('ka-pian-yang-shi')">
      <view class="card-swiper">
        <ht-swiper
          autoplay
          v-model:current="current4"
          custom-indicator-class="custom-indicator-class"
          custom-image-class="custom-image"
          custom-next-image-class="custom-image-prev"
          custom-prev-image-class="custom-image-prev"
          :indicator="{ type: 'dots' }"
          :list="swiperList"
          previousMargin="24px"
          nextMargin="24px"
        ></ht-swiper>
      </view>
    </demo-block>

    <demo-block :title="$t('tong-shi-zhan-shi-2-ge-hua-kuai')">
      <view class="card-swiper">
        <ht-swiper
          autoplay
          v-model:current="current5"
          :display-multiple-items="2"
          custom-indicator-class="custom-indicator-class"
          custom-image-class="custom-image"
          custom-next-image-class="custom-image-prev"
          custom-prev-image-class="custom-image-prev"
          :indicator="{ type: 'dots' }"
          :list="swiperList"
          previousMargin="24px"
          nextMargin="24px"
        ></ht-swiper>
      </view>
    </demo-block>

    <demo-block :title="$t('chui-zhi-fang-xiang')">
      <ht-swiper
        :list="swiperList"
        direction="vertical"
        indicator-position="right"
        autoplay
        v-model:current="current6"
        :indicator="{ type: 'dots-bar' }"
        @click="handleClick"
        @change="onChange"
      ></ht-swiper>
    </demo-block>

    <demo-block :title="$t('zi-ding-yi-zhi-shi-qi')">
      <ht-swiper
        :list="swiperList"
        direction="vertical"
        indicator-position="right"
        autoplay
        v-model:current="current7"
        @click="handleClick"
        @change="onChange"
      >
        <template #indicator="{ current, total }">
          <view class="custom-indicator" style="position: absolute; bottom: 24rpx; right: 24rpx">{{ current + 1 }}/{{ total }}</view>
        </template>
      </ht-swiper>
    </demo-block>

    <demo-block :title="$t('zhi-ding-valuekey-he-textkey')">
      <ht-swiper
        value-key="url"
        text-key="title"
        :list="customSwiperList"
        autoplay
        v-model:current="current9"
        @click="handleClick"
        @change="onChange"
      ></ht-swiper>
    </demo-block>

    <demo-block :title="$t('shu-xing-kong-zhi-qie-huan')">
      <ht-swiper :loop="isLoop" :autoplay="false" :list="swiperList" v-model:current="current8" />
      <ht-gap />
      <ht-cell-group>
        <ht-cell title="loop">
          <ht-switch v-model="isLoop" size="24px" />
        </ht-cell>
        <ht-cell title="current" :value="current8.toString()" />
      </ht-cell-group>
      <view style="display: flex; justify-content: space-between">
        <ht-button @click="current8--">prev</ht-button>

        <ht-button type="success" @click="current8++">next</ht-button>
      </view>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const swiperList = ref([
  'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/meng.jpg'
])

const customSwiperList = ref([
  { url: 'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/redpanda.jpg', title: t('xiao-xiong-mao') },
  { url: 'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/capybara.jpg', title: t('ka-pi-ba-la') },
  { url: 'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/panda.jpg', title: t('da-xiong-mao') },
  { url: 'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/moon.jpg', title: t('shi-hua-zhong-guo') }
])

const videoList = ref([
  'https://unpkg.com/ht-ui-uni-assets@1.0.3/VID_115503.mp4',
  'https://unpkg.com/ht-ui-uni-assets@1.0.3/VID_150752.mp4',
  'https://unpkg.com/ht-ui-uni-assets@1.0.3/VID_155516.mp4',
  'https://registry.npmmirror.com/ht-ui-uni-assets/*/files/moon.jpg'
])

const current = ref<number>(0)
const current1 = ref<number>(1)
const current2 = ref<number>(2)
const current3 = ref<number>(3)
const current4 = ref<number>(4)
const current5 = ref<number>(0)
const current6 = ref<number>(0)
const current7 = ref<number>(0)
const current8 = ref<number>(0)
const current9 = ref<number>(0)

const isLoop = ref(false)

function handleClick(e: any) {
  console.log(e)
}
function onChange(e: any) {
  console.log(e)
}
</script>
<style lang="scss" scoped>
.card-swiper {
  --ht-swiper-radius: 0;
  --ht-swiper-item-padding: 0 24rpx;
  --ht-swiper-nav-dot-color: #e7e7e7;
  --ht-swiper-nav-dot-active-color: #4d80f0;
  padding-bottom: 24rpx;
  :deep(.custom-indicator-class) {
    bottom: -16px;
  }
  :deep(.custom-image) {
    border-radius: 12rpx;
  }
  :deep(.custom-image-prev) {
    height: 168px !important;
  }
}

.custom-slot-image {
  width: 100%;
  height: 100%;
}

.custom-indicator {
  padding: 0 12rpx;
  height: 48rpx;
  line-height: 48rpx;
  border-radius: 45%;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-size: 24rpx;
}
</style>
