"use strict";
const common_vendor = require("../../common/vendor.js");
const services_home = require("../../services/home.js");
const composables_index = require("../../composables/index.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Math) {
  (PageSkeleton + CustomNavbar + XtxSwiper + CategoryPanel + HotPannel + XtxGuess)();
}
const XtxSwiper = () => "../../components/XtxSwiper.js";
const XtxGuess = () => "../../components/XtxGuess.js";
const CustomNavbar = () => "./component/CustomNavbar.js";
const CategoryPanel = () => "./component/CategoryPanel.js";
const HotPannel = () => "./component/HotPannel.js";
const PageSkeleton = () => "./component/PageSkeleton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const getHomeBannerData = async () => {
      const res = await services_home.getHomeBannerAPI();
      bannerList.value = res.result;
    };
    const categoryList = common_vendor.ref([]);
    const getHomeCategoryData = async () => {
      const res = await services_home.getHomeCategoryAPI();
      categoryList.value = res.result;
    };
    const hotList = common_vendor.ref([]);
    const getHomeHotData = async () => {
      const res = await services_home.getHomeHotAPI();
      hotList.value = res.result;
    };
    const isLoading = common_vendor.ref(false);
    common_vendor.onLoad(async () => {
      isLoading.value = true;
      await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()]);
      isLoading.value = false;
    });
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    const isTrigger = common_vendor.ref(false);
    const onRefresherrefresh = async () => {
      var _a, _b;
      isTrigger.value = true;
      (_a = guessRef.value) == null ? void 0 : _a.resetData();
      await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData(), (_b = guessRef.value) == null ? void 0 : _b.getMore()]);
      isTrigger.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isLoading.value
      }, isLoading.value ? {} : {
        b: common_vendor.p({
          list: bannerList.value
        }),
        c: common_vendor.p({
          list: categoryList.value
        }),
        d: common_vendor.p({
          list: hotList.value
        }),
        e: common_vendor.sr(guessRef, "22acc6e9-5", {
          "k": "guessRef"
        }),
        f: isTrigger.value,
        g: common_vendor.o(onRefresherrefresh),
        h: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        )
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Programs/heima-shop/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
