import{a6 as e,v as t,a7 as a,A as s,z as i}from"./index-bf3db433.js";const o={invoke(e){var a;e.url.startsWith("http")||(e.url="https://pcapi-xiaotuxian-front-devtest.itheima.net/"+e.url),e.timeout=1e4,e.header={...e.header,"source-client":"miniapp"};const s=null==(a=t().profile)?void 0:a.token;s&&(e.header.Authorization=s)}};e("request",o),e("uploadFile",o);const n=e=>new Promise(((o,n)=>{a({...e,success(e){if(e.statusCode>=200&&e.statusCode<300)o(e.data);else if(401===e.statusCode){t().clearProfile(),s({url:"/pages/login/login"}),n(e)}else i({title:e.data.msg||"请求错误",icon:"none"})},fail(e){i({title:"网络错误，换个网络",icon:"none"}),n(e)}})}));export{n as h};