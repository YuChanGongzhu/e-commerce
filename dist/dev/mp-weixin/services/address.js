"use strict";
const utils_http = require("../utils/http.js");
const postMemberAddressAPI = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/member/address",
    data
  });
};
const getMemberAddressAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/member/address"
  });
};
const getMemberAddressIdAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: `/member/address/${data}`
  });
};
const putMemberAddressAPI = (id, data) => {
  return utils_http.http({
    method: "PUT",
    url: `/member/address/${id}`,
    data
  });
};
const deleteMemberAddressAPI = (id) => {
  return utils_http.http({
    method: "DELETE",
    url: `/member/address/${id}`
  });
};
exports.deleteMemberAddressAPI = deleteMemberAddressAPI;
exports.getMemberAddressAPI = getMemberAddressAPI;
exports.getMemberAddressIdAPI = getMemberAddressIdAPI;
exports.postMemberAddressAPI = postMemberAddressAPI;
exports.putMemberAddressAPI = putMemberAddressAPI;
//# sourceMappingURL=address.js.map
