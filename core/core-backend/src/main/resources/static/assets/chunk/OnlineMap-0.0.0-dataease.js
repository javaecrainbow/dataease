import"./index-0.0.0-dataease.js";import"./el-footer-0.0.0-dataease.js";import{a as N,b as A,c as T}from"./el-aside-0.0.0-dataease.js";import{j as D,w as K,y as L,n as O}from"./index-0.0.0-dataease2.js";import{E as S}from"./el-row-0.0.0-dataease.js";import{E as U}from"./el-col-0.0.0-dataease.js";import{d as j,_ as q,r as _,o as R,f as E,g,i as r,k as s,N as t,a7 as w,j as v,a6 as z,U as H,M as P,X as W,a0 as b,n as X}from"./vue-0.0.0-dataease.js";import{s as $,q as F}from"./sysParameter-0.0.0-dataease.js";import{E as G}from"./EmptyBackground-0.0.0-dataease.js";import{_ as J}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./lodash-0.0.0-dataease.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./row-0.0.0-dataease.js";import"./el-empty-0.0.0-dataease.js";import"./none-0.0.0-dataease.js";import"./nothing-tree-0.0.0-dataease.js";const Q={class:"geo-title"},Y={class:"online-form-item"},Z={class:"map-item"},ee={class:"map-item"},te={class:"map-item-label"},oe={class:"form-label"},ae={class:"map-item"},ne=["id"],se=j({__name:"OnlineMap",setup(le){const{t:d}=D(),o=q({key:"",securityCode:""}),l=_(null),y=_(!1),m=_("de-map-container"),f=_(!1),V=()=>{if(!o.key)return;const a=`https://webapi.amap.com/maps?v=2.0&key=${o.key}`;B(a).then(()=>{var n;if(l.value){(n=l.value)==null||n.destroy(),l.value=null,y.value=!0,setTimeout(()=>{m.value=m.value+"-de-",y.value=!1,X(()=>{M()})},1500);return}M()}).catch(n=>{l.value&&(l.value.destroy(),l.value=null),console.error(n)})},M=()=>{l.value=new window.AMap.Map(m.value,{viewMode:"2D",zoom:11,center:[116.397428,39.90923]}),f.value=!0},x=()=>{$(o).then(()=>{K.success(d("commons.save_success")),C()}).catch(e=>{console.error(e)})},C=()=>{F().then(e=>{o.key=e.data.key,o.securityCode=e.data.securityCode,V()}).catch(e=>{console.error(e)})},B=e=>new Promise(function(a,n){var u;const p="de-gaode-script-id";let i=document.getElementById(p);i&&((u=i.parentElement)==null||u.removeChild(i),i=null,window.AMap=null);var c=document.createElement("script");c.id=p,c.onload=function(){return a(null)},c.onerror=function(){return n(new Error("Load script from ".concat(e," failed")))},c.src=e;var h=document.head||document.getElementsByTagName("head")[0];(document.body||h).appendChild(c)});return R(()=>{C()}),(e,a)=>{const n=L,p=U,i=S,c=O,h=N,u=A,I=T;return E(),g(I,{class:"online-map-container"},{default:r(()=>[s(h,{width:"200px",class:"online-map-aside"},{default:r(()=>[t("div",Q,[t("span",null,w(v(d)("online_map.onlinemap")),1)]),s(i,null,{default:r(()=>[s(p,null,{default:r(()=>[t("div",Y,[a[2]||(a[2]=t("div",{class:"map-item"},[t("div",{class:"map-item-label"},[t("span",{class:"form-label"},"Key")])],-1)),t("div",Z,[s(n,{modelValue:o.key,"onUpdate:modelValue":a[0]||(a[0]=k=>o.key=k)},null,8,["modelValue"])]),t("div",ee,[t("div",te,[t("span",oe,w(v(d)("chart.security_code")),1)])]),t("div",ae,[s(n,{modelValue:o.securityCode,"onUpdate:modelValue":a[1]||(a[1]=k=>o.securityCode=k)},null,8,["modelValue"])])])]),_:1})]),_:1}),s(i,null,{default:r(()=>[s(c,{type:"primary",disabled:!o.key,onClick:x},{default:r(()=>[z(w(v(d)("commons.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1}),s(u,null,{default:r(()=>[y.value?b("",!0):H((E(),P("div",{key:0,class:"de-map-container",id:m.value},null,8,ne)),[[W,f.value]]),f.value?b("",!0):(E(),g(G,{key:1,"img-type":"noneWhite",description:v(d)("online_map.empty_desc")},null,8,["description"]))]),_:1})]),_:1})}}});const xe=J(se,[["__scopeId","data-v-8a34c957"]]);export{xe as default};
