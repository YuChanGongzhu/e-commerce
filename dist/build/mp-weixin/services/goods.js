"use strict";const t=require("../utils/http.js");exports.getGoodsByIdAPI=s=>t.http({method:"GET",url:"/goods",data:{id:s}});
