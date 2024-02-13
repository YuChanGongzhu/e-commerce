"use strict";const e=require("../../common/vendor.js"),o=require("../../services/address.js");if(require("../../utils/http.js"),require("../../stores/index.js"),require("../../stores/modules/member.js"),!Array){(e.resolveComponent("uni-forms-item")+e.resolveComponent("uni-forms"))()}Math||((()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-forms-item/uni-forms-item.js")+(()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-forms/uni-forms.js"))();const r=e.defineComponent({__name:"address-form",props:{id:null},setup(r){const a=r,s=e.ref({receiver:"",contact:"",fullLocation:"",provinceCode:"",cityCode:"",countyCode:"",address:"",isDefault:0});e.index.setNavigationBarTitle({title:"1"===a.id?"修改地址":"新建地址"});const i=e=>{s.value.fullLocation=e.detail.value.join(" ");const[o,r,a]=e.detail.code;Object.assign(s.value,{provinceCode:o,cityCode:r,countyCode:a})},t=e=>[s.value.isDefault=e.detail.value?1:0],l={receiver:{rules:[{required:!0,errorMessage:"请输入收货人姓名"}]},contact:{rules:[{required:!0,errorMessage:"请输入手机号"},{pattern:/^1[3-9]\d{9}$/,errorMessage:"手机号格式不正确"}]},fullLocation:{rules:[{required:!0,errorMessage:"请输入收货人地址"}]},address:{rules:[{required:!0,errorMessage:"请输入详细地址"}]}},u=e.ref(),d=async()=>{var r,i;try{await(null==(i=null==(r=u.value)?void 0:r.validate)?void 0:i.call(r)),a.id?n():await o.postMemberAddressAPI(s.value),e.index.showToast({icon:"success",title:a.id?"修改成功":"添加成功"}),setTimeout((()=>{e.index.navigateBack()}),1e3)}catch(t){e.index.showToast({title:"请正确填写信息",icon:"error"})}},n=async()=>{console.log("???",a.id,s.value),await o.putMemberAddressAPI(a.id,s.value)};return e.onLoad((()=>{(async()=>{if(a.id){const e=await o.getMemberAddressIdAPI(a.id);Object.assign(s.value,e.result)}})()})),(o,r)=>e.e({a:s.value.receiver,b:e.o((e=>s.value.receiver=e.detail.value)),c:e.p({name:"receiver"}),d:s.value.contact,e:e.o((e=>s.value.contact=e.detail.value)),f:e.p({name:"contact"}),g:s.value.fullLocation},s.value.fullLocation?{h:e.t(s.value.fullLocation)}:{},{i:e.o(i),j:s.value.fullLocation.split(" "),k:s.value.address,l:e.o((e=>s.value.address=e.detail.value)),m:e.p({name:"address"}),n:e.o(t),o:1===s.value.isDefault,p:e.sr(u,"6075855d-0",{k:"formRef"}),q:e.p({rules:l,model:s.value}),r:e.o(d)})}});wx.createPage(r);