"use strict";
const utils_http = require("../utils/http.js");
const getHomeBannerAPI = (distributionSite = 1) => {
  return utils_http.http({
    method: "GET",
    url: "/home/banner",
    data: {
      distributionSite
    }
  });
};
const getHomeCategoryAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/home/category"
  });
};
const getHomeHotAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/home/hot/mutli"
  });
};
const GetHomeGoodsGuessLikeAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: "/home/goods/guessLike",
    data
  });
};
exports.GetHomeGoodsGuessLikeAPI = GetHomeGoodsGuessLikeAPI;
exports.getHomeBannerAPI = getHomeBannerAPI;
exports.getHomeCategoryAPI = getHomeCategoryAPI;
exports.getHomeHotAPI = getHomeHotAPI;
//# sourceMappingURL=home.js.map
