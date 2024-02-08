"use strict";
const common_vendor = require("../../../common/vendor.js");
require("../../../stores/index.js");
const services_cart = require("../../../services/cart.js");
const stores_modules_member = require("../../../stores/modules/member.js");
require("../../../utils/http.js");
if (!Array) {
  const _easycom_vk_data_input_number_box2 = common_vendor.resolveComponent("vk-data-input-number-box");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_vk_data_input_number_box2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_vk_data_input_number_box = () => "../../../components/vk-data-input-number-box/vk-data-input-number-box.js";
const _easycom_uni_swipe_action_item = () => "../../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_vk_data_input_number_box + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + XtxGuess)();
}
const XtxGuess = () => "../../../components/XtxGuess.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "CartMain",
  setup(__props) {
    const memberStore = stores_modules_member.useMemberStore();
    const cartList = common_vendor.ref();
    const getMemberCartData = async () => {
      const res = await services_cart.getMemberCartAPI();
      cartList.value = res.result;
    };
    common_vendor.onShow(() => {
      if (memberStore.profile) {
        getMemberCartData();
      }
    });
    const onDeleteMemberCart = async (skuId) => {
      common_vendor.index.showModal({
        title: "是否删除",
        success: async ({ confirm, cancel }) => {
          if (confirm) {
            await services_cart.deleteMemberCartAPI({ ids: [skuId] });
            getMemberCartData();
          }
        }
      });
    };
    const onChangeCount = (ev) => {
      services_cart.putMemberCartBySkuIdAPI(ev.index, { count: ev.value });
    };
    const onChangeSelected = (item) => {
      item.selected = !item.selected;
      services_cart.putMemberCartBySkuIdAPI(item.skuId, { selected: item.selected });
    };
    const isAllSelected = common_vendor.computed(() => {
      var _a;
      return ((_a = cartList.value) == null ? void 0 : _a.length) && cartList.value.every((v) => v.selected);
    });
    const onChangeSelectedAll = () => {
      var _a;
      const _isSelectedAll = !isAllSelected.value;
      (_a = cartList.value) == null ? void 0 : _a.forEach((v) => {
        v.selected = _isSelectedAll;
      });
      services_cart.putMemberCartSelectedAPI({ selected: _isSelectedAll });
    };
    const selectedCartList = common_vendor.computed(() => {
      var _a;
      return (_a = cartList.value) == null ? void 0 : _a.filter((v) => v.selected);
    });
    const selectedCartCount = common_vendor.computed(() => {
      var _a;
      return (_a = selectedCartList.value) == null ? void 0 : _a.reduce((sum, item) => sum + item.count, 0);
    });
    const selectedCartPrice = common_vendor.computed(() => {
      var _a;
      return (_a = selectedCartList.value) == null ? void 0 : _a.reduce((sum, item) => sum + item.count * item.nowPrice, 0);
    });
    const gotoPay = () => {
      if (selectedCartCount.value === 0) {
        return common_vendor.index.showToast({
          //中断后面操作
          title: "未选中商品",
          icon: "none"
        });
      }
      common_vendor.index.showToast({
        title: "等待下一步操作"
      });
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_vendor.unref(memberStore).profile
      }, common_vendor.unref(memberStore).profile ? common_vendor.e({
        b: (_a = cartList.value) == null ? void 0 : _a.length
      }, ((_b = cartList.value) == null ? void 0 : _b.length) ? {
        c: common_vendor.f(cartList.value, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => onChangeSelected(item), item.skuId),
            b: item.selected ? 1 : "",
            c: item.picture,
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.attrsText),
            f: common_vendor.t(item.nowPrice),
            g: `/pages/goods/goods?id=${item.id}`,
            h: common_vendor.o(onChangeCount, item.skuId),
            i: "031998c2-2-" + i0 + "," + ("031998c2-1-" + i0),
            j: common_vendor.o(($event) => item.count = $event, item.skuId),
            k: common_vendor.p({
              min: 1,
              max: item.stock,
              index: item.skuId,
              modelValue: item.count
            }),
            l: common_vendor.o(($event) => onDeleteMemberCart(item.skuId), item.skuId),
            m: item.skuId,
            n: "031998c2-1-" + i0 + ",031998c2-0"
          };
        })
      } : {}, {
        d: common_vendor.o(onChangeSelectedAll),
        e: common_vendor.unref(isAllSelected) ? 1 : "",
        f: common_vendor.t(common_vendor.unref(selectedCartPrice)),
        g: common_vendor.t(common_vendor.unref(selectedCartCount)),
        h: common_vendor.o(gotoPay),
        i: common_vendor.unref(selectedCartCount) === 0 ? 1 : ""
      }) : {}, {
        j: common_vendor.sr("guessRef", "031998c2-3")
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Programs/heima-shop/src/pages/cart/components/CartMain.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=CartMain.js.map
