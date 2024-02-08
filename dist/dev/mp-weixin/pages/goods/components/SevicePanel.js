"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "SevicePanel",
  emits: ["close"],
  setup(__props, { emit: e }) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => e("close"))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Programs/heima-shop/src/pages/goods/components/SevicePanel.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=SevicePanel.js.map
