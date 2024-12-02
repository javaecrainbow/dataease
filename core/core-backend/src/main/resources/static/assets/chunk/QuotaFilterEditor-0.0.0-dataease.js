import"./index-0.0.0-dataease.js";import{j as Q,y as S,_ as T,e as K,n as M}from"./index-0.0.0-dataease2.js";import{E as $,a as D,b as G}from"./el-select-0.0.0-dataease.js";import"./el-tag-0.0.0-dataease.js";import"./el-popper-0.0.0-dataease.js";import{d as L,t as R,_ as W,f as o,M as n,j as e,N as u,a7 as d,k as a,i,a0 as p,a6 as w,Z as h,aa as b,g,W as Z,ac as C}from"./vue-0.0.0-dataease.js";import{i as A}from"./icon_delete-trash_outlined-0.0.0-dataease.js";import{i as H}from"./icon_add_outlined-0.0.0-dataease.js";import{_ as J}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./lodash-0.0.0-dataease.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./index-0.0.0-dataease4.js";import"./index-0.0.0-dataease14.js";import"./strings-0.0.0-dataease.js";import"./index-0.0.0-dataease5.js";const P={key:0,style:{display:"flex",padding:"10px 0","align-items":"center"}},X={key:1,style:{"max-height":"50vh","overflow-y":"auto"},class:"addition-style"},Y={class:"name-title"},ee={key:0},te={style:{width:"164px","margin-right":"8px"}},le={style:{flex:"1"}},oe=L({__name:"QuotaFilterEditor",props:{item:{type:Object,required:!0}},setup(q){const{t}=Q(),y=q,{item:l}=R(y),m=W({options:[{label:"",options:[{value:"eq",label:t("chart.filter_eq")},{value:"not_eq",label:t("chart.filter_not_eq")}]},{label:"",options:[{value:"lt",label:t("chart.filter_lt")},{value:"gt",label:t("chart.filter_gt")}]},{label:"",options:[{value:"le",label:t("chart.filter_le")},{value:"ge",label:t("chart.filter_ge")}]},{label:"",options:[{value:"not_null",label:t("chart.filter_not_null")}]}],logic:""}),F=()=>{m.logic=y.item.logic},B=()=>{l.value.filter.push({term:"eq",value:""})},I=_=>{l.value.filter.splice(_,1)},N=_=>{l.value.logic=_};return F(),(_,c)=>{const f=$,x=D,U=G,j=S,V=T,z=K,k=M;return o(),n("div",{onKeydown:c[1]||(c[1]=C(()=>{},["stop"])),onKeyup:c[2]||(c[2]=C(()=>{},["stop"]))},[e(l).filter&&e(l).filter.length>0?(o(),n("div",P,[u("span",null,d(e(t)("chart.conform_below")),1),a(x,{modelValue:m.logic,"onUpdate:modelValue":c[0]||(c[0]=s=>m.logic=s),onChange:N,size:"small",style:{width:"60px",margin:"0 6px"}},{default:i(()=>[a(f,{style:{"min-width":"80px"},label:e(t)("chart.logic_and"),value:"and"},null,8,["label"]),a(f,{style:{"min-width":"80px"},label:e(t)("chart.logic_or"),value:"or"},null,8,["label"])]),_:1},8,["modelValue"]),u("span",null,d(e(t)("chart.addition")),1)])):p("",!0),e(l).filter&&e(l).filter.length>0?(o(),n("div",X,[u("div",Y,[u("span",null,[w(d(e(l).name)+" ",1),e(l).summary&&e(l).summary!==""?(o(),n("span",ee," ("+d(e(t)("chart."+e(l).summary))+") ",1)):p("",!0)])]),(o(!0),n(h,null,b(e(l).filter,(s,E)=>(o(),n("div",{key:E,class:"filter-item"},[u("div",te,[a(x,{modelValue:s.term,"onUpdate:modelValue":r=>s.term=r},{default:i(()=>[(o(!0),n(h,null,b(m.options,(r,O)=>(o(),g(U,{key:O,label:r.label},{default:i(()=>[(o(!0),n(h,null,b(r.options,v=>(o(),g(f,{key:v.value,label:v.label,value:v.value},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),u("div",le,[s.term.includes("null")?p("",!0):(o(),g(j,{key:0,modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,class:"value-item",placeholder:e(t)("chart.condition"),clearable:""},null,8,["modelValue","onUpdate:modelValue","placeholder"]))]),a(k,{class:"m-del-icon-btn",text:"",onClick:r=>I(E)},{default:i(()=>[a(z,{size:"20px"},{default:i(()=>[a(V,{name:"icon_delete-trash_outlined"},{default:i(()=>[a(e(A),{class:"svg-icon"})]),_:1})]),_:1})]),_:2},1032,["onClick"])]))),128))])):p("",!0),a(k,{text:"",class:"circle-button",onClick:B,style:Z({marginTop:e(l).filter&&e(l).filter.length>0?"10px":0})},{default:i(()=>[a(V,{name:"icon_add_outlined"},{default:i(()=>[a(e(H),{class:"svg-icon",style:{width:"14px"}})]),_:1}),w(" "+d(e(t)("chart.add_addition")),1)]),_:1},8,["style"])],32)}}});const ke=J(oe,[["__scopeId","data-v-aabc2bb7"]]);export{ke as default};
