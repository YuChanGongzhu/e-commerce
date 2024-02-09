"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_index = require("../../composables/index.js");
const services_order = require("../../services/order.js");
const services_contants = require("../../services/contants.js");
const services_pay = require("../../services/pay.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _component_XtxGuess = common_vendor.resolveComponent("XtxGuess");
  const _component_PageSkeleton = common_vendor.resolveComponent("PageSkeleton");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_countdown2 + _component_XtxGuess + _component_PageSkeleton + _easycom_uni_popup2)();
}
const _easycom_uni_countdown = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.js";
const _easycom_uni_popup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_countdown + _easycom_uni_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "detail",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    const popup = common_vendor.ref();
    const reasonList = common_vendor.ref([
      "商品无货",
      "不想要了",
      "商品信息填错了",
      "地址信息填写错误",
      "商品降价",
      "其它"
    ]);
    const reason = common_vendor.ref("");
    const onCopy = (id) => {
      common_vendor.index.setClipboardData({ data: id });
    };
    const pages = getCurrentPages();
    const pageInstance = pages.at(-1);
    common_vendor.onReady(() => {
      pageInstance.animate(
        ".navbar",
        [{ backgroundColor: "transparent" }, { backgroundColor: "#f8f8f8" }],
        1e3,
        {
          scrollSource: "#myScroller",
          timeRange: 1e3,
          startScrollOffset: 0,
          endScrollOffset: 50
        }
      );
      pageInstance.animate(".navbar .title", [{ color: "transparent" }, { color: "#000" }], 1e3, {
        scrollSource: "#myScroller",
        timeRange: 1e3,
        startScrollOffset: 0,
        endScrollOffset: 50
      });
      pageInstance.animate(".navbar .back", [{ color: "#fff" }, { color: "#000" }], 1e3, {
        scrollSource: "#myScroller",
        timeRange: 1e3,
        startScrollOffset: 0,
        endScrollOffset: 50
      });
    });
    const order = common_vendor.ref();
    const getMemberOrderByIdData = async () => {
      const res = await services_order.getMemberOrderByIdAPI(query.id);
      order.value = res.result;
      if ([services_contants.OrderState.DaiShouHuo, services_contants.OrderState.DaiPingJia, services_contants.OrderState.YiWanCheng].includes(order.value.orderState)) {
        getMemberOrderLogisticsByIdData();
      }
    };
    common_vendor.onLoad(() => {
      getMemberOrderByIdData();
    });
    const logisticList = common_vendor.ref();
    const getMemberOrderLogisticsByIdData = async () => {
      const res = await services_order.getMemberOrderLogisticsByIdAPI(query.id);
      logisticList.value = res.result.list;
    };
    const onTimeup = () => {
      order.value.orderState = services_contants.OrderState.YiQuXiao;
    };
    const onOrderPay = async () => {
      {
        await services_pay.getPayMockAPI({ orderId: query.id });
      }
      common_vendor.index.redirectTo({ url: `/pagesOrder/payment/payment?id=${query.id}` });
    };
    const isDev = true;
    const onOrderSend = async () => {
      {
        await services_order.getMemberOrderConsignmentByIdAPI(query.id);
        common_vendor.index.showToast({
          title: "模拟发货完成",
          icon: "success",
          mask: true
        });
        order.value.orderState = services_contants.OrderState.DaiShouHuo;
        getMemberOrderByIdData();
      }
    };
    const onOrderComfirm = () => {
      common_vendor.index.showModal({
        title: "为保障您的权益，请在收到商品后再点击确认",
        success: async (success) => {
          if (success.confirm) {
            const res = await services_order.putMemberOrderReceiptByIdAPI(query.id);
            order.value = res.result;
          }
        }
      });
    };
    const onOrderDelete = () => {
      common_vendor.index.showModal({
        title: "是否删除订单",
        success: async (success) => {
          if (success.confirm) {
            await services_order.deleteMemberOrderAPI({ ids: [query.id] });
            debugger;
            common_vendor.index.redirectTo({ url: "/pagesOrders/list/list" });
          }
        }
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return common_vendor.e({
        a: common_vendor.unref(pages).length > 1
      }, common_vendor.unref(pages).length > 1 ? {} : {}, {
        b: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        c: order.value
      }, order.value ? common_vendor.e({
        d: ((_b = order.value) == null ? void 0 : _b.orderState) === common_vendor.unref(services_contants.OrderState).DaiFuKuan
      }, ((_c = order.value) == null ? void 0 : _c.orderState) === common_vendor.unref(services_contants.OrderState).DaiFuKuan ? {
        e: common_vendor.t(order.value.payMoney),
        f: common_vendor.o(onTimeup),
        g: common_vendor.p({
          second: order.value.countdown,
          color: "#fff",
          ["splitor-color"]: "#fff",
          ["show-day"]: false,
          ["show-colon"]: false
        }),
        h: common_vendor.o(onOrderPay)
      } : common_vendor.e({
        i: common_vendor.t(common_vendor.unref(services_contants.orderStateList)[order.value.orderState].text),
        j: `/pagesOrder/create/create?orderId=${query.id}`,
        k: common_vendor.unref(isDev) && order.value.orderState === common_vendor.unref(services_contants.OrderState).DaiFaHuo
      }, common_vendor.unref(isDev) && order.value.orderState === common_vendor.unref(services_contants.OrderState).DaiFaHuo ? {
        l: common_vendor.o(onOrderSend)
      } : {}, {
        m: order.value.orderState === common_vendor.unref(services_contants.OrderState).DaiShouHuo
      }, order.value.orderState === common_vendor.unref(services_contants.OrderState).DaiShouHuo ? {
        n: common_vendor.o(onOrderComfirm)
      } : {}), {
        o: common_vendor.unref(safeAreaInsets).top + 20 + "px",
        p: common_vendor.f(logisticList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: common_vendor.t(item.time),
            c: item.id
          };
        }),
        q: common_vendor.t(order.value.receiverContact),
        r: common_vendor.t(order.value.receiverMobile),
        s: common_vendor.t(order.value.receiverAddress),
        t: common_vendor.f(order.value.skus, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.attrsText),
            d: common_vendor.t(item.curPrice),
            e: common_vendor.t(item.quantity),
            f: item.spuId,
            g: `/pages/goods/goods?id=${item.spuId}`
          };
        })
      }, {}, {
        v: common_vendor.t(order.value.totalMoney),
        w: common_vendor.t(order.value.postFee),
        x: common_vendor.t(order.value.payMoney),
        y: common_vendor.t(query.id),
        z: common_vendor.o(($event) => onCopy(query.id)),
        A: common_vendor.t(order.value.createTime),
        B: common_vendor.sr(guessRef, "4555165b-1", {
          "k": "guessRef"
        }),
        C: ((_d = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _d.bottom) + "px",
        D: order.value.orderState === common_vendor.unref(services_contants.OrderState).DaiFuKuan
      }, order.value.orderState === common_vendor.unref(services_contants.OrderState).DaiFuKuan ? {
        E: common_vendor.o(($event) => {
          var _a2, _b2;
          return (_b2 = (_a2 = popup.value) == null ? void 0 : _a2.open) == null ? void 0 : _b2.call(_a2);
        })
      } : common_vendor.e({
        F: `/pagesOrder/create/create?orderId=${query.id}`,
        G: order.value.orderState === common_vendor.unref(services_contants.OrderState).DaiShouHuo
      }, order.value.orderState === common_vendor.unref(services_contants.OrderState).DaiShouHuo ? {
        H: common_vendor.o(onOrderComfirm)
      } : {}, {
        I: order.value.orderState === common_vendor.unref(services_contants.OrderState).DaiPingJia
      }, order.value.orderState === common_vendor.unref(services_contants.OrderState).DaiPingJia ? {} : {}, {
        J: order.value.orderState >= common_vendor.unref(services_contants.OrderState).DaiPingJia
      }, order.value.orderState >= common_vendor.unref(services_contants.OrderState).DaiPingJia ? {
        K: common_vendor.o(onOrderDelete)
      } : {}), {
        L: ((_e = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _e.bottom) + "px"
      }) : {}, {
        M: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        ),
        N: common_vendor.f(reasonList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item === reason.value ? 1 : "",
            c: item,
            d: common_vendor.o(($event) => reason.value = item, item)
          };
        }),
        O: common_vendor.o(($event) => {
          var _a2, _b2;
          return (_b2 = (_a2 = popup.value) == null ? void 0 : _a2.close) == null ? void 0 : _b2.call(_a2);
        }),
        P: common_vendor.sr(popup, "4555165b-3", {
          "k": "popup"
        }),
        Q: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Programs/heima-shop/src/pagesOrder/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=detail.js.map
