import"./index-0.0.0-dataease.js";import{j as y,n as w}from"./index-0.0.0-dataease2.js";import{E as b}from"./el-row-0.0.0-dataease.js";import{d as v,m as c,f as g,M as k,N as x,W as C,ac as E,k as a,i as r,a6 as i,a7 as l,U as N,X as T,j as u,V}from"./vue-0.0.0-dataease.js";import{i as A}from"./imgUtils-0.0.0-dataease.js";import{_ as I}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./lodash-0.0.0-dataease.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./row-0.0.0-dataease.js";import"./dvMain-0.0.0-dataease.js";import"./chart-0.0.0-dataease.js";import"./formatter-0.0.0-dataease.js";import"./dataVisualization-0.0.0-dataease2.js";import"./util-0.0.0-dataease.js";import"./util-0.0.0-dataease2.js";import"./chart-0.0.0-dataease2.js";import"./app-0.0.0-dataease.js";import"./antv-0.0.0-dataease.js";import"./extends-0.0.0-dataease.js";import"./sysParameter-0.0.0-dataease.js";import"./TableTooltip-0.0.0-dataease.js";import"./el-col-0.0.0-dataease.js";import"./_commonjs-dynamic-modules-0.0.0-dataease.js";import"./appearance-0.0.0-dataease.js";import"./font-0.0.0-dataease.js";const S={class:"testcase-template"},z=v({__name:"TemplateMarketV2Item",props:{template:{type:Object,default(){return{}}},curPosition:{type:String},baseUrl:{type:String},width:{type:Number},createAuth:{type:Object,default(){return{PANEL:!1,SCREEN:!1}}}},emits:["templateApply","templatePreview"],setup(e,{emit:d}){const{t:m}=y(),p=d,t=e,f=c(()=>({width:t.width+"px",height:t.width*.58+"px",background:`url(${A(h.value).replace(/\(/g,"%28").replace(/\)/g,"%29")}) no-repeat`,"background-size":"100% 100%"})),h=c(()=>t.template.thumbnail.indexOf("http")>-1||t.template.thumbnail.indexOf("static-resource")>-1?t.template.thumbnail:t.baseUrl+t.template.thumbnail),_=()=>{p("templateApply",t.template)},s=()=>{p("templatePreview",t.template.id)};return(B,M)=>{const o=b,n=w;return g(),k("div",S,[x("div",{class:"template-img",style:C(f.value),onClick:E(s,["stop"])},null,4),a(o,{class:"bottom-area"}),a(o,{class:V(["bottom-area-show",{"create-area":!e.createAuth[e.template.templateType]}])},{default:r(()=>[a(o,{class:"demonstration"},{default:r(()=>[i(l(e.template.title),1)]),_:1}),N(a(o,{class:"template-button"},{default:r(()=>[a(n,{secondary:"",style:{width:"calc(50% - 18px)"},onClick:s},{default:r(()=>[i(l(u(m)("visualization.preview")),1)]),_:1}),a(n,{style:{width:"calc(50% - 18px)"},type:"primary",onClick:_},{default:r(()=>[i(l(u(m)("visualization.apply")),1)]),_:1})]),_:1},512),[[T,e.createAuth[e.template.templateType]]])]),_:1},8,["class"])])}}});const nt=I(z,[["__scopeId","data-v-651ff1c3"]]);export{nt as default};
