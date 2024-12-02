import"./index-0.0.0-dataease.js";import{j as z,d as B,w as C,_ as N,e as P}from"./index-0.0.0-dataease2.js";import{i as S}from"./icon_down_outlined-1-0.0.0-dataease.js";import{i as V}from"./icon_down_outlined-0.0.0-dataease.js";import{_ as v}from"./InfoTemplate.vue_vue_type_style_index_0_scope_true_lang-0.0.0-dataease.js";import{d as $}from"./option-0.0.0-dataease.js";import{g as q}from"./datasource-0.0.0-dataease.js";import{d as b,r as o,f as i,M as D,k as r,j as l,N as k,a6 as M,a7 as j,i as T,g as f,q as L,a0 as F,Z as J,n as O}from"./vue-0.0.0-dataease.js";const Y=b({__name:"EngineInfoTemplate",emits:["edit"],setup(Z,{expose:x,emit:g}){const{t:s}=z(),h=$.reduce((t,a)=>(t[a.type]=a.name,t),{}),n=o(!0);let d;const m=o(),_=o(),c=o([]),y=o([]),u=()=>{q().then(t=>{let{id:a,type:p,configuration:e}=t.data;e&&(e=JSON.parse(e)),d=a,y.value=[{pkey:"datasource.initial_pool_size",pval:(e==null?void 0:e.initialPoolSize)||5,type:"",sort:0},{pkey:"datasource.min_pool_size",pval:(e==null?void 0:e.minPoolSize)||5,type:"",sort:0},{pkey:"datasource.max_pool_size",pval:(e==null?void 0:e.maxPoolSize)||5,type:"",sort:0},{pkey:"datasource.query_timeout",pval:`${(e==null?void 0:e.queryTimeout)||30}${s("common.second")}`,type:"",sort:0}],c.value=[{pkey:s("system.engine_type"),pval:h[p],type:"",sort:0},{pkey:"datasource.host",pval:e==null?void 0:e.host,type:"",sort:0},{pkey:"datasource.port",pval:e==null?void 0:e.port,type:"",sort:0},{pkey:"datasource.data_base",pval:e==null?void 0:e.dataBase,type:"",sort:0},{pkey:"datasource.user_name",pval:e==null?void 0:e.username,type:"",sort:0},{pkey:"datasource.extra_params",pval:e==null?void 0:e.extraParams,type:"",sort:0}],O(()=>{m.value.init(),_.value.init()})})};u(),x({getEngine:u});const E=g,I=()=>{E("edit")},w=async()=>{B.post({url:"/engine/validate/"+d}).then(t=>{t!==void 0&&C.success(s("datasource.validate_success"))})};return(t,a)=>{const p=N,e=P;return i(),D(J,null,[r(v,{ref_key:"infoTemplate",ref:m,"setting-key":"basic",showValidate:"",style:{"padding-bottom":"0"},"setting-title":l(s)("system.engine_settings"),"setting-data":c.value,onEdit:I,onCheck:w},null,8,["setting-title","setting-data"]),k("div",null,[k("span",{class:"de-expand-engine",onClick:a[0]||(a[0]=A=>n.value=!n.value)},[M(j(l(s)("datasource.priority"))+" ",1),r(e,null,{default:T(()=>[r(p,null,{default:T(()=>[(i(),f(L(n.value?l(V):l(S)),{class:"svg-icon"}))]),_:1})]),_:1})])]),n.value?(i(),f(v,{key:0,ref_key:"infoTemplateTime",ref:_,style:{"padding-top":"0"},"hide-head":"","setting-data":y.value},null,8,["setting-data"])):F("",!0)],64)}}});export{Y as _};
