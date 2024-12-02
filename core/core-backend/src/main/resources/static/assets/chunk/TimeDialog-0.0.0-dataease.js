import"./index-0.0.0-dataease.js";import"./el-form-0.0.0-dataease.js";import{E as D}from"./el-time-picker-0.0.0-dataease.js";import{j as Y}from"./index-0.0.0-dataease2.js";import"./el-popper-0.0.0-dataease.js";import{E as F}from"./el-input-number-0.0.0-dataease.js";import{a as L,E as U}from"./el-form-item-0.0.0-dataease.js";import"./el-tag-0.0.0-dataease.js";import{E as O,a as I}from"./el-select-0.0.0-dataease.js";import{E as j}from"./el-date-picker-0.0.0-dataease.js";import{g as P,a as $,b as z,c as R,d as S,e as Z,f as q,h as A,i as H}from"./time-format-0.0.0-dataease.js";import{d as B,r as E,t as J,m as h,w as K,al as Q,f as u,g as p,j as k,i,k as o,M as g,aa as T,Z as C,N as W,a0 as x,V as X}from"./vue-0.0.0-dataease.js";import{_ as ee}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./lodash-0.0.0-dataease.js";import"./dayjs.min-0.0.0-dataease.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./index-0.0.0-dataease15.js";import"./index-0.0.0-dataease4.js";import"./index-0.0.0-dataease14.js";import"./strings-0.0.0-dataease.js";import"./index-0.0.0-dataease5.js";import"./arrays-0.0.0-dataease.js";const ae=B({__name:"DynamicTimeForViewFilter",props:{config:{type:Object,default:()=>({relativeToCurrent:"custom",timeNum:0,relativeToCurrentType:"year",around:"f",arbitraryTime:new Date,timeGranularity:"year"})}},setup(w){const V=w,r=E(),{config:d}=J(V),e=h(()=>{const{relativeToCurrent:m,timeNum:n,relativeToCurrentType:s,around:v,arbitraryTime:y,timeGranularity:l}=d.value;return{relativeToCurrent:m,timeNum:n,relativeToCurrentType:s,around:v,arbitraryTime:y,timeGranularity:l}});K(()=>e.value,()=>{c()},{deep:!0});const c=()=>{const{relativeToCurrent:m,timeNum:n,relativeToCurrentType:s,around:v,arbitraryTime:y,timeGranularity:l}=e.value;if(m==="custom")r.value=P(n,s,l,v,l==="datetime"?y:null);else switch(m){case"thisYear":r.value=H();break;case"lastYear":r.value=A();break;case"thisMonth":r.value=q();break;case"lastMonth":r.value=Z();break;case"today":r.value=S();break;case"yesterday":r.value=R();break;case"monthBeginning":r.value=z();break;case"yearBeginning":r.value=$();break}};return Q(()=>{c()}),(m,n)=>{const s=j;return u(),p(s,{disabled:"",class:"date-editor_granularity",key:k(d).timeGranularity,modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=v=>r.value=v),type:k(d).timeGranularity,placeholder:m.$t("commons.date.select_date_time")},null,8,["modelValue","type","placeholder"])}}});const le=B({__name:"TimeDialog",setup(w,{expose:V}){const{t:r}=Y(),d={relativeToCurrent:"custom",timeGranularity:"year",timeNum:0,relativeToCurrentType:"year",around:"b",arbitraryTime:new Date},e=E({...d}),c=l=>{e.value={...d,...l}},m=[{label:"前",value:"f"},{label:"后",value:"b"}],n=h(()=>{let l=[];if(!e.value)return l;switch(e.value.timeGranularity){case"year":l=[{label:"今年",value:"thisYear"},{label:"去年",value:"lastYear"}];break;case"month":l=[{label:"本月",value:"thisMonth"},{label:"上月",value:"lastMonth"}];break;case"date":l=[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"月初",value:"monthBeginning"},{label:"年初",value:"yearBeginning"}];break;case"datetime":l=[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"月初",value:"monthBeginning"},{label:"年初",value:"yearBeginning"}];break}return[...l,{label:"自定义",value:"custom"}]}),s=h(()=>{if(!e.value)return[];let l=["year","month","date","datetime"].indexOf(e.value.timeGranularity)+1;return[{label:"年",value:"year"},{label:"月",value:"month"},{label:"日",value:"date"}].slice(0,l)}),v=l=>{var t;["year","month","date","datetime"].indexOf(l)<["year","month","date"].indexOf(e.value.relativeToCurrentType)&&(e.value.relativeToCurrentType="year"),e.value.relativeToCurrent!=="custom"&&(e.value.relativeToCurrent=(t=n.value[0])==null?void 0:t.value)},y=[{label:"年",value:"year"},{label:"年月",value:"month"},{label:"年月日",value:"date"},{label:"年月日时分秒",value:"datetime"}];return V({init:c,curComponent:e}),(l,t)=>{const b=O,_=I,f=L,G=F,N=D,M=U;return u(),p(M,{"label-position":"top"},{default:i(()=>[o(f,{label:"时间粒度"},{default:i(()=>[o(_,{onChange:v,style:{width:"100%"},placeholder:"请选择时间粒度",modelValue:e.value.timeGranularity,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value.timeGranularity=a)},{default:i(()=>[(u(),g(C,null,T(y,a=>o(b,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(f,{label:"相对当前"},{default:i(()=>[o(_,{style:{width:"100%"},modelValue:e.value.relativeToCurrent,"onUpdate:modelValue":t[1]||(t[1]=a=>e.value.relativeToCurrent=a)},{default:i(()=>[(u(!0),g(C,null,T(n.value,a=>(u(),p(b,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e.value.relativeToCurrent==="custom"?(u(),p(f,{key:0},{default:i(()=>[W("div",{style:{width:"100%"},class:X(["no-with-date",e.value.timeGranularity==="datetime"&&"with-date"])},[o(G,{modelValue:e.value.timeNum,"onUpdate:modelValue":t[2]||(t[2]=a=>e.value.timeNum=a),min:0,"controls-position":"right"},null,8,["modelValue"]),o(_,{modelValue:e.value.relativeToCurrentType,"onUpdate:modelValue":t[3]||(t[3]=a=>e.value.relativeToCurrentType=a)},{default:i(()=>[(u(!0),g(C,null,T(s.value,a=>(u(),p(b,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(_,{modelValue:e.value.around,"onUpdate:modelValue":t[4]||(t[4]=a=>e.value.around=a)},{default:i(()=>[(u(),g(C,null,T(m,a=>o(b,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),e.value.timeGranularity==="datetime"?(u(),p(N,{key:0,style:{width:"108px","margin-left":"8px"},modelValue:e.value.arbitraryTime,"onUpdate:modelValue":t[5]||(t[5]=a=>e.value.arbitraryTime=a)},null,8,["modelValue"])):x("",!0)],2)]),_:1})):x("",!0),o(f,{label:k(r)("template_manage.preview")},{default:i(()=>[o(ae,{style:{width:"100%"},config:e.value,isConfig:""},null,8,["config"])]),_:1},8,["label"])]),_:1})}}});const Ge=ee(le,[["__scopeId","data-v-02becde4"]]);export{Ge as default};
