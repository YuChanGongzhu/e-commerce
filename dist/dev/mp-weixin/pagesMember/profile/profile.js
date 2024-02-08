"use strict";
const common_vendor = require("../../common/vendor.js");
const services_profile = require("../../services/profile.js");
require("../../stores/index.js");
const stores_modules_member = require("../../stores/modules/member.js");
require("../../utils/http.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "profile",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const memberProfile = common_vendor.ref({});
    const getMemberProfileData = async () => {
      const res = await services_profile.getMemberProfileAPI();
      memberProfile.value = res.result;
    };
    common_vendor.onLoad(() => {
      getMemberProfileData();
    });
    const memberStore = stores_modules_member.useMemberStore();
    const onAvatarChange = () => {
      common_vendor.index.chooseMedia({
        count: 1,
        mediaType: ["image"],
        success: (res) => {
          const { tempFilePath } = res.tempFiles[0];
          common_vendor.index.uploadFile({
            url: "/member/profile/avatar",
            name: "file",
            filePath: tempFilePath,
            success: (res2) => {
              {
                if (res2.statusCode === 200) {
                  console.log("成功成功");
                  const avatar = JSON.parse(res2.data).result.avatar;
                  memberProfile.value.avatar = avatar;
                  memberStore.profile.avatar = avatar;
                  common_vendor.index.showToast({
                    title: "更改头像成功",
                    icon: "success"
                  });
                  console.log("头像", memberStore.profile.avatar);
                } else {
                  common_vendor.index.showToast({
                    title: "出错了",
                    icon: "error"
                  });
                }
              }
            }
          });
        }
      });
    };
    const onSubmit = async () => {
      var _a;
      const { nickname, gender, birthday } = memberProfile.value;
      await services_profile.putMemberProfileAPI({
        nickname,
        gender,
        birthday,
        provinceCode: fullLocationCode[0],
        cityCode: fullLocationCode[1],
        countryCode: fullLocationCode[2]
      });
      memberStore.profile.nickname = (_a = memberProfile.value) == null ? void 0 : _a.nickname;
      common_vendor.index.showToast({
        title: "成功修改",
        icon: "success"
      });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 1e3);
    };
    const onChangeSex = (e) => {
      memberProfile.value.gender = e.detail.value;
    };
    const onBirthdayChange = (ev) => {
      memberProfile.value.birthday = ev.detail.value;
    };
    let fullLocationCode = ["", "", ""];
    const onFullLocationChange = (e) => {
      memberProfile.value.fullLocation = e.detail.value.join(" ");
      fullLocationCode = e.detail.code;
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      return common_vendor.e({
        a: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        b: (_b = memberProfile.value) == null ? void 0 : _b.avatar,
        c: common_vendor.o(onAvatarChange),
        d: common_vendor.t((_c = memberProfile.value) == null ? void 0 : _c.account),
        e: memberProfile.value.nickname,
        f: common_vendor.o(($event) => memberProfile.value.nickname = $event.detail.value),
        g: ((_d = memberProfile.value) == null ? void 0 : _d.gender) === "男",
        h: ((_e = memberProfile.value) == null ? void 0 : _e.gender) === "女",
        i: common_vendor.o(onChangeSex),
        j: (_f = memberProfile.value) == null ? void 0 : _f.birthday
      }, ((_g = memberProfile.value) == null ? void 0 : _g.birthday) ? {
        k: common_vendor.t((_h = memberProfile.value) == null ? void 0 : _h.birthday)
      } : {}, {
        l: common_vendor.o(onBirthdayChange),
        m: /* @__PURE__ */ new Date(),
        n: (_i = memberProfile.value) == null ? void 0 : _i.birthday,
        o: (_j = memberProfile.value) == null ? void 0 : _j.fullLocation
      }, ((_k = memberProfile.value) == null ? void 0 : _k.fullLocation) ? {
        p: common_vendor.t((_l = memberProfile.value) == null ? void 0 : _l.fullLocation)
      } : {}, {
        q: common_vendor.o(onFullLocationChange),
        r: (_n = (_m = memberProfile.value) == null ? void 0 : _m.fullLocation) == null ? void 0 : _n.split(" "),
        s: (_o = memberProfile.value) == null ? void 0 : _o.profession,
        t: common_vendor.o(onSubmit)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Programs/heima-shop/src/pagesMember/profile/profile.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=profile.js.map
