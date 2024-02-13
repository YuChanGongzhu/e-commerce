"use strict";
const common_vendor = require("../../../common/vendor.js");
const services_contants = require("../../../services/contants.js");
const services_order = require("../../../services/order.js");
const services_pay = require("../../../services/pay.js");
require("../../../utils/http.js");
require("../../../stores/index.js");
require("../../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "OrderList",
  props: {
    orderState: null
  },
  setup(__props) {
    const props = __props;
    const queryParams = {
      page: 1,
      pageSize: 5,
      orderState: props.orderState
    };
    const orderList = common_vendor.ref([]);
    const getMemberOrderData = async () => {
      const res = await services_order.getMemberOrderAPI(queryParams);
      orderList.value = res.result.items;
    };
    const onOrderPay = async (id) => {
      {
        await services_pay.getPayMockAPI({ orderId: id });
      }
      common_vendor.index.showToast({ title: "支付成功" });
      const order = orderList.value.find((v) => v.id === id);
      order.orderState = services_contants.OrderState.DaiFaHuo;
      getMemberOrderData();
    };
    common_vendor.onMounted(() => {
      getMemberOrderData();
    });
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.f(orderList.value, (order, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(order.createTime),
            b: common_vendor.t(common_vendor.unref(services_contants.orderStateList)[order.orderState].text),
            c: order.orderState >= common_vendor.unref(services_contants.OrderState).DaiPingJia
          }, order.orderState >= common_vendor.unref(services_contants.OrderState).DaiPingJia ? {} : {}, {
            d: common_vendor.f(order.skus, (sku, k1, i1) => {
              return {
                a: sku.image,
                b: common_vendor.t(sku.name),
                c: common_vendor.t(sku.attrsText),
                d: sku.id
              };
            }),
            e: `/pagesOrder/detail/detail?id=${order.id}`,
            f: common_vendor.t(order.totalNum),
            g: common_vendor.t(order.totalMoney),
            h: order.orderState === common_vendor.unref(services_contants.OrderState).DaiFuKuan
          }, order.orderState === common_vendor.unref(services_contants.OrderState).DaiFuKuan ? {
            i: common_vendor.o(($event) => onOrderPay(order.id), order.id)
          } : common_vendor.e({
            j: `/pagesOrder/create/create?orderId=id`,
            k: order.orderState === common_vendor.unref(services_contants.OrderState).DaiShouHuo
          }, order.orderState === common_vendor.unref(services_contants.OrderState).DaiShouHuo ? {} : {}), {
            l: order.id
          });
        }),
        b: common_vendor.t("没有更多数据~"),
        c: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.bottom) + "px"
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Programs/heima-shop/src/pagesOrder/list/components/OrderList.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=OrderList.js.map