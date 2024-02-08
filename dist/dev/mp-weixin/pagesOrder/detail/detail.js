"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_index = require("../../composables/index.js");
if (!Array) {
  const _component_XtxGuess = common_vendor.resolveComponent("XtxGuess");
  const _component_PageSkeleton = common_vendor.resolveComponent("PageSkeleton");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_component_XtxGuess + _component_PageSkeleton + _easycom_uni_popup2)();
}
const _easycom_uni_popup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
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
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return common_vendor.e({
        a: common_vendor.unref(pages).length > 1
      }, common_vendor.unref(pages).length > 1 ? {} : {}, {
        b: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px"
      }, common_vendor.e({}, {
        d: common_vendor.unref(safeAreaInsets).top + 20 + "px",
        e: common_vendor.f(1, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        f: common_vendor.f(2, (item, k0, i0) => {
          return {
            a: item,
            b: `/pages/goods/goods?id=${item}`
          };
        })
      }, {}, {
        g: common_vendor.t(query.id),
        h: common_vendor.o(($event) => onCopy(query.id)),
        i: common_vendor.sr(guessRef, "4555165b-0", {
          "k": "guessRef"
        }),
        j: ((_b = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _b.bottom) + "px"
      }, {
        k: common_vendor.o(($event) => {
          var _a2, _b2;
          return (_b2 = (_a2 = popup.value) == null ? void 0 : _a2.open) == null ? void 0 : _b2.call(_a2);
        })
      }, {
        m: ((_c = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _c.bottom) + "px"
      }), {
        n: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        ),
        o: common_vendor.f(reasonList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item === reason.value ? 1 : "",
            c: item,
            d: common_vendor.o(($event) => reason.value = item, item)
          };
        }),
        p: common_vendor.o(($event) => {
          var _a2, _b2;
          return (_b2 = (_a2 = popup.value) == null ? void 0 : _a2.close) == null ? void 0 : _b2.call(_a2);
        }),
        q: common_vendor.sr(popup, "4555165b-2", {
          "k": "popup"
        }),
        r: common_vendor.p({
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
