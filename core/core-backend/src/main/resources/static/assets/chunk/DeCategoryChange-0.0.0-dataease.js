import"./index-0.0.0-dataease.js";import{j as w,w as g,n as x}from"./index-0.0.0-dataease2.js";import{E as D}from"./el-row-0.0.0-dataease.js";import"./el-form-0.0.0-dataease.js";import{a as T,E as V}from"./el-form-item-0.0.0-dataease.js";import"./el-tag-0.0.0-dataease.js";import{E as F,a as q}from"./el-select-0.0.0-dataease.js";import"./el-popper-0.0.0-dataease.js";import{a as A,b as M}from"./template-0.0.0-dataease.js";import{d as R,_ as j,o as N,f as n,M as u,k as o,i as l,j as p,Z as S,aa as U,g as $,a6 as f,a7 as y}from"./vue-0.0.0-dataease.js";import{_ as L}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./lodash-0.0.0-dataease.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./row-0.0.0-dataease.js";import"./index-0.0.0-dataease4.js";import"./index-0.0.0-dataease14.js";import"./strings-0.0.0-dataease.js";import"./index-0.0.0-dataease5.js";const O={class:"template-import"},Z=R({__name:"DeCategoryChange",props:{templateCategories:{type:Array,required:!0},templateIds:{type:Array,required:!0}},emits:["closeBatchEditTemplateDialog","refresh"],setup(i,{emit:I}){const m=I,{t:s}=w(),c=i,t=j({templateInfo:{categories:[]},categories:[],templateInfoRules:{categories:[{required:!0,message:s("template_manage.please_select_catalog"),trigger:"change"}]}}),C=()=>{const r={templateArray:c.templateIds};A(r).then(e=>{t.templateInfo.categories=e.data})};N(()=>{C()});const E=()=>{m("closeBatchEditTemplateDialog")},h=()=>{const r={templateIds:c.templateIds,categories:t.templateInfo.categories};if(!t.templateInfo.categories.length)return g.warning(s("template_manage.please_select_catalog")),!1;M(r).then(()=>{g({message:s("template_manage.edit_success"),type:"success",showClose:!0}),m("refresh"),m("closeBatchEditTemplateDialog")})};return(r,e)=>{const b=F,v=q,B=T,k=V,_=D,d=x;return n(),u("div",O,[o(k,{ref:"templateImportForm",class:"de-form-item",model:t.templateInfo,rules:t.templateInfoRules,"label-position":"top"},{default:l(()=>[o(B,{label:p(s)("template_manage.select_catalog"),prop:"categories",style:{"margin-top":"16px"}},{default:l(()=>[o(v,{modelValue:t.templateInfo.categories,"onUpdate:modelValue":e[0]||(e[0]=a=>t.templateInfo.categories=a),multiple:"",style:{width:"100%"}},{default:l(()=>[(n(!0),u(S,null,U(i.templateCategories,a=>(n(),$(b,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"]),o(_),o(_,{class:"de-root-class"},{default:l(()=>[o(d,{secondary:"",onClick:e[1]||(e[1]=a=>E())},{default:l(()=>[f(y(p(s)("commons.cancel")),1)]),_:1}),o(d,{type:"primary",onClick:e[2]||(e[2]=a=>h())},{default:l(()=>[f(y(p(s)("commons.confirm")),1)]),_:1})]),_:1})])}}});const _e=L(Z,[["__scopeId","data-v-39cd774b"]]);export{_e as default};
