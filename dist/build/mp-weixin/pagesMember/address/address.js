"use strict";const e=require("../../common/vendor.js"),s=require("../../services/address.js"),i=require("../../stores/modules/address.js");if(require("../../utils/http.js"),require("../../stores/index.js"),require("../../stores/modules/member.js"),!Array){(e.resolveComponent("uni-swipe-action-item")+e.resolveComponent("uni-swipe-action"))()}Math||((()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.js")+(()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.js"))();const o=e.defineComponent({__name:"address",setup(o){const r=e.ref([]),t=async()=>{const e=await s.getMemberAddressAPI();r.value=e.result};e.onShow((()=>{t()}));return(o,d)=>({a:e.f(r.value,((o,r,d)=>e.e({a:e.t(o.receiver),b:e.t(o.contact),c:1===o.isDefault},(o.isDefault,{}),{d:e.t(o.fullLocation),e:e.t(o.address),f:e.o((()=>{}),o.id),g:`/pagesMember/address-form/address-form?id=${o.id}`,h:e.o((s=>(s=>{i.useAddressStore().changeSelectedAddress(s),e.index.navigateBack()})(o)),o.id),i:e.o((i=>{return r=o.id,void e.index.showModal({content:"删除地址",showCancel:!0,success:async e=>{e.confirm&&(await s.deleteMemberAddressAPI(r),t())}});var r}),o.id),j:o.id,k:"053137e7-1-"+d+",053137e7-0"})))})}});wx.createPage(o);
