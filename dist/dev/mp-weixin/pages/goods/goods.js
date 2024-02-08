"use strict";
const common_vendor = require("../../common/vendor.js");
const services_goods = require("../../services/goods.js");
const services_cart = require("../../services/cart.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_vk_data_goods_sku_popup2 = common_vendor.resolveComponent("vk-data-goods-sku-popup");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_vk_data_goods_sku_popup2 + _easycom_uni_popup2)();
}
const _easycom_vk_data_goods_sku_popup = () => "../../components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.js";
const _easycom_uni_popup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_vk_data_goods_sku_popup + AddressPanel + ServicePanel + _easycom_uni_popup)();
}
const AddressPanel = () => "./components/AdressPanel.js";
const ServicePanel = () => "./components/SevicePanel.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "goods",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const goods = common_vendor.ref();
    const getGoodsByIdData = async () => {
      const res = await services_goods.getGoodsByIdAPI(query.id);
      goods.value = res.result;
      localdata.value = {
        _id: res.result.id,
        name: res.result.name,
        goods_thumb: res.result.mainPictures[0],
        spec_list: res.result.specs.map((v) => ({ name: v.name, list: v.values })),
        sku_list: res.result.skus.map((v) => ({
          _id: v.id,
          goods_id: res.result.id,
          goods_name: res.result.name,
          image: v.picture,
          price: v.price * 100,
          // 注意：需要乘以 100
          stock: v.inventory,
          sku_name_arr: v.specs.map((vv) => vv.valueName)
        }))
      };
    };
    common_vendor.onLoad(() => {
      getGoodsByIdData();
    });
    const avtiveIdx = common_vendor.ref(0);
    const onChange = (ev) => {
      avtiveIdx.value = ev.detail.current;
    };
    const onTapImg = (url) => {
      common_vendor.index.previewImage({
        current: url,
        urls: goods.value.mainPictures
      });
    };
    const popup = common_vendor.ref();
    const popName = common_vendor.ref();
    const openPop = (name) => {
      var _a;
      popName.value = name;
      (_a = popup.value) == null ? void 0 : _a.open();
    };
    const isShowSKU = common_vendor.ref(false);
    const localdata = common_vendor.ref({});
    const mode = common_vendor.ref(1);
    const onChangeSkuMode = (val) => {
      mode.value = val;
      isShowSKU.value = true;
    };
    const skuPopupRef = common_vendor.ref();
    const selectArrText = common_vendor.computed(() => {
      var _a, _b;
      return ((_b = (_a = skuPopupRef.value) == null ? void 0 : _a.selectArr) == null ? void 0 : _b.join(" ").trim()) || "请选择商品规格";
    });
    const onAddCart = async (ev) => {
      await services_cart.postMemberCartAPI({ skuId: ev._id, count: ev.buy_num });
      common_vendor.index.showToast({
        title: "加入购物车成功"
      });
      isShowSKU.value = false;
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return common_vendor.e({
        a: common_vendor.sr(skuPopupRef, "238d6cf1-0", {
          "k": "skuPopupRef"
        }),
        b: common_vendor.o(onAddCart),
        c: common_vendor.o(($event) => isShowSKU.value = $event),
        d: common_vendor.p({
          localdata: localdata.value,
          mode: mode.value,
          ["add-cart-background-color"]: "#FFA868",
          ["buy-now-background-color"]: "#27BA9B",
          ["actived-style"]: {
            color: "#27BA9B",
            borderColor: "#27BA9B",
            backgroundColor: "#E9F8F5"
          },
          modelValue: isShowSKU.value
        }),
        e: common_vendor.f(goods.value.mainPictures, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => onTapImg(item), item),
            b: item,
            c: item
          };
        }),
        f: common_vendor.o(onChange),
        g: common_vendor.t(avtiveIdx.value + 1),
        h: common_vendor.t((_a = goods.value) == null ? void 0 : _a.mainPictures.length),
        i: common_vendor.t((_b = goods.value) == null ? void 0 : _b.price),
        j: common_vendor.t((_c = goods.value) == null ? void 0 : _c.name),
        k: common_vendor.t((_d = goods.value) == null ? void 0 : _d.desc),
        l: common_vendor.t(common_vendor.unref(selectArrText)),
        m: common_vendor.o(($event) => onChangeSkuMode(
          1
          /* Both */
        )),
        n: common_vendor.o(($event) => openPop("address")),
        o: common_vendor.o(($event) => openPop("service")),
        p: common_vendor.f((_e = goods.value) == null ? void 0 : _e.details.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value)
          };
        }),
        q: common_vendor.f((_f = goods.value) == null ? void 0 : _f.details.pictures, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        r: common_vendor.f((_g = goods.value) == null ? void 0 : _g.similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        s: common_vendor.o(($event) => onChangeSkuMode(
          2
          /* Cart */
        )),
        t: common_vendor.o(($event) => onChangeSkuMode(
          3
          /* Buy */
        )),
        v: ((_h = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _h.bottom) + "px",
        w: popName.value === "address"
      }, popName.value === "address" ? {
        x: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        })
      } : {}, {
        y: popName.value === "service"
      }, popName.value === "service" ? {
        z: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        })
      } : {}, {
        A: common_vendor.sr(popup, "238d6cf1-1", {
          "k": "popup"
        }),
        B: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Programs/heima-shop/src/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=goods.js.map
