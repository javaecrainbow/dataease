import"./index-0.0.0-dataease.js";import"./el-form-0.0.0-dataease.js";import{E as R}from"./el-checkbox-0.0.0-dataease.js";import{j as L,y as U}from"./index-0.0.0-dataease2.js";import"./el-tag-0.0.0-dataease.js";import{E as j,a as B}from"./el-select-0.0.0-dataease.js";import"./el-popper-0.0.0-dataease.js";import{E as S}from"./el-input-number-0.0.0-dataease.js";import{a as O,E as T}from"./el-form-item-0.0.0-dataease.js";import"./el-radio-group-0.0.0-dataease.js";import{E as q,a as w}from"./el-radio-0.0.0-dataease.js";import{a as D,u as G,v as M}from"./formatter-0.0.0-dataease.js";import{d as Z,t as z,_ as A,f as n,M as i,k as r,i as m,j as e,Z as c,aa as g,g as f,a6 as H,a7 as _,a0 as C,N as d}from"./vue-0.0.0-dataease.js";import{_ as J}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./lodash-0.0.0-dataease.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./index-0.0.0-dataease4.js";import"./index-0.0.0-dataease14.js";import"./strings-0.0.0-dataease.js";import"./index-0.0.0-dataease5.js";import"./index-0.0.0-dataease15.js";const K={style:{"line-height":"22px"}},P={style:{color:"#646a73"}},Q={style:{"margin-left":"12px"}},W=Z({__name:"ValueFormatterEdit",props:{formatterItem:{type:Object,required:!0},chart:{type:Object,required:!0}},setup(h){const{t:a}=L(),v=h,{formatterItem:t}=z(v),p=A({typeList:D,unitList:G,exampleResult:"20000000"}),y=()=>{t.value.formatterCfg||(t.value.formatterCfg=t)},u=()=>{p.exampleResult=M(2e7,t.value.formatterCfg)};return y(),u(),(X,l)=>{const V=q,b=w,s=O,x=S,E=j,k=B,F=U,I=R,N=T;return n(),i("div",null,[r(N,{ref:"form",model:e(t).formatterCfg,class:"formatter-form","label-position":"top"},{default:m(()=>[r(s,{label:e(a)("chart.value_formatter_type")},{default:m(()=>[r(b,{modelValue:e(t).formatterCfg.type,"onUpdate:modelValue":l[0]||(l[0]=o=>e(t).formatterCfg.type=o),onChange:u},{default:m(()=>[(n(!0),i(c,null,g(p.typeList,o=>(n(),f(V,{key:o.value,label:o.value},{default:m(()=>[H(_(e(a)("chart."+o.name)),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(t).formatterCfg.type!=="auto"?(n(),f(s,{key:0,label:e(a)("chart.value_formatter_decimal_count")},{default:m(()=>[r(x,{"controls-position":"right",modelValue:e(t).formatterCfg.decimalCount,"onUpdate:modelValue":l[1]||(l[1]=o=>e(t).formatterCfg.decimalCount=o),min:0,max:10,onChange:u},null,8,["modelValue"])]),_:1},8,["label"])):C("",!0),e(t).formatterCfg.type!=="percent"?(n(),f(s,{key:1,label:e(a)("chart.value_formatter_unit")},{default:m(()=>[r(k,{modelValue:e(t).formatterCfg.unit,"onUpdate:modelValue":l[2]||(l[2]=o=>e(t).formatterCfg.unit=o),placeholder:e(a)("chart.pls_select_field"),onChange:u,style:{width:"100%"}},{default:m(()=>[(n(!0),i(c,null,g(p.unitList,o=>(n(),f(E,{key:o.value,label:e(a)("chart."+o.name),value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):C("",!0),r(s,{label:e(a)("chart.value_formatter_suffix")},{default:m(()=>[r(F,{modelValue:e(t).formatterCfg.suffix,"onUpdate:modelValue":l[3]||(l[3]=o=>e(t).formatterCfg.suffix=o),clearable:"",placeholder:e(a)("commons.input_content"),onChange:u},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(s,null,{default:m(()=>[r(I,{modelValue:e(t).formatterCfg.thousandSeparator,"onUpdate:modelValue":l[4]||(l[4]=o=>e(t).formatterCfg.thousandSeparator=o),onChange:u,label:e(a)("chart.value_formatter_thousand_separator")},null,8,["modelValue","label"])]),_:1}),d("div",K,[d("span",P,_(e(a)("chart.value_formatter_example")),1),d("span",Q,_(p.exampleResult),1)])]),_:1},8,["model"])])}}});const xe=J(W,[["__scopeId","data-v-5159ae3d"]]);export{xe as default};
