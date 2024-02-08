"use strict";
const utils_http = require("../utils/http.js");
const postLoginWeixinAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: "/login/wxMin",
    data
  });
};
const postLoginWeixinSimpleAPI = (phoneNumber) => {
  return utils_http.http({
    method: "POST",
    url: "/login/wxMin/simple",
    data: {
      phoneNumber
    }
  });
};
exports.postLoginWeixinAPI = postLoginWeixinAPI;
exports.postLoginWeixinSimpleAPI = postLoginWeixinSimpleAPI;
//# sourceMappingURL=login.js.map
