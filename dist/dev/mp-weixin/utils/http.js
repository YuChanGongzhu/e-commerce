"use strict";
const common_vendor = require("../common/vendor.js");
require("../stores/index.js");
const stores_modules_member = require("../stores/modules/member.js");
new Proxy({}, {
  get(_, key) {
    throw new Error(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code.  See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
  }
});
const baseUrl = "https://pcapi-xiaotuxian-front-devtest.itheima.net/";
const httpInterceptor = {
  invoke(options) {
    var _a;
    if (!options.url.startsWith("http")) {
      options.url = baseUrl + options.url;
    }
    options.timeout = 1e4;
    options.header = {
      ...options.header,
      "source-client": "miniapp"
    };
    const memberStore = stores_modules_member.useMemberStore();
    const token = (_a = memberStore.profile) == null ? void 0 : _a.token;
    if (token) {
      options.header.Authorization = token;
    }
  }
};
common_vendor.index.addInterceptor("request", httpInterceptor);
common_vendor.index.addInterceptor("uploadFile", httpInterceptor);
const http = (options) => {
  return new Promise((resolve2, reject) => {
    common_vendor.index.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve2(res.data);
        } else if (res.statusCode === 401) {
          const memberStore = stores_modules_member.useMemberStore();
          memberStore.clearProfile();
          common_vendor.index.navigateTo({ url: "/pages/login/login" });
          reject(res);
        } else {
          common_vendor.index.showToast({
            title: res.data.msg || "请求错误",
            icon: "none"
          });
        }
      },
      fail(err) {
        common_vendor.index.showToast({
          title: "网络错误，换个网络",
          icon: "none"
        });
        reject(err);
      }
    });
  });
};
exports.http = http;
//# sourceMappingURL=http.js.map
