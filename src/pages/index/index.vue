<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue';
import XtxGuess from '@/components/XtxGuess.vue';

import CustomNavbar from './component/CustomNavbar.vue'
import CategoryPanel from './component/CategoryPanel.vue';
import HotPannel from './component/HotPannel.vue';
import PageSkeleton from './component/PageSkeleton.vue';
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home';
import type { BannerItem, CategoryItem, HotItem } from "@/types/home"
import { ref } from "vue";
import { onLoad } from '@dcloudio/uni-app';
import { useGuessList } from '@/composables';

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  // console.log('广告轮播', res)
  bannerList.value = res.result
  // console.log("bannerlist：", bannerList.value)
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  // console.log('分类', res)
  categoryList.value = res.result
}

const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  // console.log("人气", res)
  hotList.value = res.result
}


const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})


const { guessRef, onScrolltolower } = useGuessList()

const isTrigger = ref(false)

const onRefresherrefresh = async () => {
  // console.log('下拉刷新')
  isTrigger.value = true
  // await (getHomeBannerData(), getHomeCategoryData(), getHomeHotData())
  guessRef.value?.resetData()
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData(), guessRef.value?.getMore()])
  isTrigger.value = false

}
</script>

<template>
  <PageSkeleton v-if="isLoading" />
  <template v-else>
    <custom-navbar></custom-navbar>
    <scroll-view refresher-enabled :refresher-triggered="isTrigger" @refresherrefresh="onRefresherrefresh"
      @scrolltolower="onScrolltolower" class="scroll-view" scroll-y>
      <XtxSwiper :list="bannerList"></XtxSwiper>
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <HotPannel :list="hotList"></HotPannel>
      <XtxGuess ref="guessRef" />
    </scroll-view>
  </template>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
