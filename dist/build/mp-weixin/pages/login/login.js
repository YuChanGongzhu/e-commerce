"use strict";const e=require("../../common/vendor.js"),t=require("../../services/login.js");require("../../stores/index.js");const s=require("../../stores/modules/member.js");require("../../utils/http.js");const o=e.defineComponent({__name:"login",setup(o){let i="";e.onLoad((async()=>{const t=await e.wx$1.login();i=t.code}));const n=async e=>{const s=e.detail.encryptedData,o=e.detail.iv,n=await t.postLoginWeixinAPI({code:i,encryptedData:s,iv:o});console.log("登录",n)},r=async()=>{const e=await t.postLoginWeixinSimpleAPI("13123456789");a(e.result)},a=t=>{s.useMemberStore().setProfile(t),e.index.showToast({title:"登录成功",icon:"success"}),setTimeout((()=>{e.index.navigateBack()}),1e3)};return(t,s)=>({a:e.o(n),b:e.o(r)})}});wx.createPage(o);