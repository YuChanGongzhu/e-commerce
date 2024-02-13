"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  OrderList();
}
const OrderList = () => "./components/OrderList.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list",
  props: {
    type: null
  },
  setup(__props) {
    const query = __props;
    const orderTabs = common_vendor.ref([
      { orderState: 0, title: "全部" },
      { orderState: 1, title: "待付款" },
      { orderState: 2, title: "待发货" },
      { orderState: 3, title: "待收货" },
      { orderState: 4, title: "待评价" }
    ]);
    const activeIdx = common_vendor.ref(orderTabs.value.findIndex((v) => v.orderState == Number(query.type)));
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(orderTabs.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.orderState,
            c: common_vendor.o(($event) => activeIdx.value = index, item.orderState)
          };
        }),
        b: activeIdx.value * 20 + "%",
        c: common_vendor.f(orderTabs.value, (item, k0, i0) => {
          return {
            a: "9ad1e00a-0-" + i0,
            b: common_vendor.p({
              orderState: item.orderState
            }),
            c: item.orderState
          };
        }),
        d: activeIdx.value,
        e: common_vendor.o(($event) => activeIdx.value = $event.detail.current)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Programs/heima-shop/src/pagesOrder/list/list.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=list.js.map
