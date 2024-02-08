"use strict";
const common_vendor = require("../../common/vendor.js");
const services_hot = require("../../services/hot.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "hot",
  props: {
    type: null
  },
  setup(__props) {
    const query = __props;
    const hotMap = [
      { type: "1", title: "特惠推荐", url: "/hot/preference" },
      { type: "2", title: "爆款推荐", url: "/hot/inVogue" },
      { type: "3", title: "一站买全", url: "/hot/oneStop" },
      { type: "4", title: "新鲜好物", url: "/hot/new" }
    ];
    const currUrlMap = hotMap.find((v) => v.type === query.type);
    common_vendor.index.setNavigationBarTitle({ title: currUrlMap.title });
    const activeIdx = common_vendor.ref(0);
    const getHotRecommendData = async () => {
      const res = await services_hot.getHotRecommendAPI(currUrlMap.url, {
        page: 30,
        pageSize: 10
      });
      bannerPic.value = res.result.bannerPicture;
      subType.value = res.result.subTypes;
    };
    const bannerPic = common_vendor.ref("");
    const subType = common_vendor.ref([]);
    const onScrolltolower = async () => {
      const curSubType = subType.value[activeIdx.value];
      if (curSubType.goodsItems.page < curSubType.goodsItems.pages) {
        curSubType.goodsItems.page++;
      } else {
        curSubType.finish = true;
        return common_vendor.index.showToast({
          icon: "none",
          title: "没有更多数据了~"
        });
      }
      const res = await services_hot.getHotRecommendAPI(currUrlMap.url, {
        subType: curSubType.id,
        //当前页的东西
        page: curSubType.goodsItems.page,
        pageSize: curSubType.goodsItems.pageSize
      });
      const newSubTypes = res.result.subTypes[activeIdx.value];
      curSubType.goodsItems.items.push(...newSubTypes.goodsItems.items);
    };
    common_vendor.onLoad(() => {
      getHotRecommendData();
    });
    return (_ctx, _cache) => {
      return {
        a: bannerPic.value,
        b: common_vendor.f(subType.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.id,
            c: index === activeIdx.value ? 1 : "",
            d: common_vendor.o(($event) => activeIdx.value = index, item.id)
          };
        }),
        c: common_vendor.f(subType.value, (item, idx, i0) => {
          return {
            a: common_vendor.f(item.goodsItems.items, (goods, k1, i1) => {
              return {
                a: goods.picture,
                b: common_vendor.t(goods.name),
                c: common_vendor.t(goods.price),
                d: goods.id,
                e: `/pages/goods/goods?id=${goods.id}`
              };
            }),
            b: common_vendor.t(item.finish ? "没有更多数据了~~~" : "正在加载..."),
            c: activeIdx.value === idx,
            d: item.id,
            e: common_vendor.o(onScrolltolower, item.id)
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Programs/heima-shop/src/pages/hot/hot.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=hot.js.map
