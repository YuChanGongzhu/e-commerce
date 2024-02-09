"use strict";
const utils_http = require("../utils/http.js");
const getMemberOrderPreAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/member/order/pre"
  });
};
const getMemberOrderPreNowAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: "/member/order/pre/now",
    data
  });
};
const postMemberOrderAPI = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/member/order",
    data
  });
};
const getMemberOrderConsignmentByIdAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order/consignment/${id}`
  });
};
const putMemberOrderReceiptByIdAPI = (id) => {
  return utils_http.http({
    method: "PUT",
    url: `/member/order/${id}/receipt`
  });
};
const getMemberOrderByIdAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order/${id}`
  });
};
const getMemberOrderLogisticsByIdAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order/${id}/logistics`
  });
};
const deleteMemberOrderAPI = (data) => {
  return utils_http.http({
    method: "DELETE",
    url: `/member/order`,
    data
  });
};
exports.deleteMemberOrderAPI = deleteMemberOrderAPI;
exports.getMemberOrderByIdAPI = getMemberOrderByIdAPI;
exports.getMemberOrderConsignmentByIdAPI = getMemberOrderConsignmentByIdAPI;
exports.getMemberOrderLogisticsByIdAPI = getMemberOrderLogisticsByIdAPI;
exports.getMemberOrderPreAPI = getMemberOrderPreAPI;
exports.getMemberOrderPreNowAPI = getMemberOrderPreNowAPI;
exports.postMemberOrderAPI = postMemberOrderAPI;
exports.putMemberOrderReceiptByIdAPI = putMemberOrderReceiptByIdAPI;
//# sourceMappingURL=order.js.map
