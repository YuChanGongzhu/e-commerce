"use strict";const e=require("../../common/vendor.js"),r=require("../../services/category.js"),a=require("../../services/home.js");if(require("../../utils/http.js"),require("../../stores/index.js"),require("../../stores/modules/member.js"),!Array){e.resolveComponent("XtxSwiper")()}Math||t();const t=()=>"./components/PageSkeleton.js",s=e.defineComponent({__name:"category",setup(t){const s=e.ref([]),o=async()=>{const e=await a.getHomeBannerAPI(2);s.value=e.result},n=e.ref(0),i=e.ref([]),u=async()=>{const e=await r.getCategoryTopAPI();i.value=e.result},c=e.ref(!1);e.onLoad((async()=>{await Promise.all([o(),u()]),c.value=!0}));const l=e.computed((()=>{var e;return(null==(e=i.value[n.value])?void 0:e.children)||[]}));return(r,a)=>e.e({a:c.value},c.value?{b:e.f(i.value,((r,a,t)=>({a:e.t(r.name),b:r.id,c:a===n.value?1:"",d:e.o((e=>n.value=a),r.id)}))),c:e.p({list:s.value}),d:e.f(e.unref(l),((r,a,t)=>({a:e.t(r.name),b:e.f(r.goods,((r,a,t)=>({a:r.picture,b:e.t(r.name),c:e.t(r.price),d:r.id,e:`/pages/goods/goods?id=${r.id}`}))),c:r.id})))}:{})}});wx.createPage(s);