import type { PageParams, PageResult } from "@/types/global"
import type { BannerItem, CategoryItem, GuessItem, HotItem, } from "@/types/home"
import { http } from "@/utils/http"
//广告区域
export const getHomeBannerAPI = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: 'GET',
        url: '/home/banner',
        data: {
            distributionSite,
        }
    })

}

export const getHomeCategoryAPI = () => {
    return http<CategoryItem[]>({
        method: "GET",
        url: '/home/category',

    })
}

export const getHomeHotAPI = () => {
    return http<HotItem[]>({
        method: 'GET',
        url: '/home/hot/mutli',
    })
}

export const GetHomeGoodsGuessLikeAPI = (data?: PageParams) => {
    return http<PageResult<GuessItem>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data
    })
}