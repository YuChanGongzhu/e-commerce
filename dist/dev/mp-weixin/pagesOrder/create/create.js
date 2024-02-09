"use strict";
const common_vendor = require("../../common/vendor.js");
const services_order = require("../../services/order.js");
const stores_modules_address = require("../../stores/modules/address.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "create",
  props: {
    skuId: null,
    count: null
  },
  setup(__props) {
    const query = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const buyerMessage = common_vendor.ref("");
    const deliveryList = common_vendor.ref([
      { type: 1, text: "时间不限 (周一至周日)" },
      { type: 2, text: "工作日送 (周一至周五)" },
      { type: 3, text: "周末配送 (周六至周日)" }
    ]);
    const activeIndex = common_vendor.ref(0);
    const activeDelivery = common_vendor.computed(() => deliveryList.value[activeIndex.value]);
    const onChangeDelivery = (ev) => {
      activeIndex.value = ev.detail.value;
    };
    const orderPre = common_vendor.ref();
    const getMemberOrderPreData = async () => {
      if (query.count && query.skuId) {
        const res = await services_order.getMemberOrderPreNowAPI({ skuId: query.skuId, count: query.count });
        orderPre.value = res.result;
      } else {
        const res = await services_order.getMemberOrderPreAPI();
        orderPre.value = res.result;
      }
    };
    common_vendor.onLoad(() => {
      getMemberOrderPreData();
    });
    const selectAdress = common_vendor.computed(() => {
      var _a;
      const addressStore = stores_modules_address.useAddressStore();
      return addressStore.selectedAddress || ((_a = orderPre.value) == null ? void 0 : _a.userAddresses.find((v) => v.isDefault));
    });
    const onOrderSubmit = async () => {
      var _a;
      if (!((_a = selectAdress.value) == null ? void 0 : _a.id)) {
        common_vendor.index.showToast({
          title: "请选择收货地址",
          icon: "none"
        });
      } else {
        const res = await services_order.postMemberOrderAPI({
          addressId: selectAdress.value.id,
          buyerMessage: buyerMessage.value,
          deliveryTimeType: activeDelivery.value.type,
          goods: orderPre.value.goods.map((v) => ({ count: Number(v.count), skuId: v.skuId })),
          payChannel: 2,
          payType: 1
        });
        common_vendor.index.redirectTo({ url: `/pagesOrder/detail/detail?id=${res.result.id}` });
      }
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return common_vendor.e({
        a: common_vendor.unref(selectAdress)
      }, common_vendor.unref(selectAdress) ? {
        b: common_vendor.t((_a = common_vendor.unref(selectAdress)) == null ? void 0 : _a.receiver),
        c: common_vendor.t(common_vendor.unref(selectAdress).contact),
        d: common_vendor.t(common_vendor.unref(selectAdress).fullLocation),
        e: common_vendor.t((_b = common_vendor.unref(selectAdress)) == null ? void 0 : _b.address)
      } : {}, {
        f: common_vendor.f((_c = orderPre.value) == null ? void 0 : _c.goods, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.attrsText),
            d: common_vendor.t(item.payPrice),
            e: common_vendor.t(item.price),
            f: common_vendor.t(item.count),
            g: item.skuId
          };
        }),
        g: `/pages/goods/goods?id=1`,
        h: common_vendor.t(common_vendor.unref(activeDelivery).text),
        i: deliveryList.value,
        j: common_vendor.o(onChangeDelivery),
        k: buyerMessage.value,
        l: common_vendor.o(($event) => buyerMessage.value = $event.detail.value),
        m: common_vendor.t((_d = orderPre.value) == null ? void 0 : _d.summary.totalPrice.toFixed(2)),
        n: common_vendor.t((_e = orderPre.value) == null ? void 0 : _e.summary.postFee.toFixed(2)),
        o: common_vendor.t((_f = orderPre.value) == null ? void 0 : _f.summary.totalPayPrice.toFixed(2)),
        p: !((_g = common_vendor.unref(selectAdress)) == null ? void 0 : _g.id) ? 1 : "",
        q: common_vendor.o(onOrderSubmit),
        r: ((_h = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _h.bottom) + "px"
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Programs/heima-shop/src/pagesOrder/create/create.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=create.js.map
