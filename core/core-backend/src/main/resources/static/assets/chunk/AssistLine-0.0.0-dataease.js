import"./index-0.0.0-dataease.js";import{E as K}from"./el-dialog-0.0.0-dataease.js";import{j as U,e as N,w as h,_ as G,n as Q}from"./index-0.0.0-dataease2.js";import"./el-tooltip-0.0.0-dataease.js";import"./el-popper-0.0.0-dataease.js";import{E as R}from"./el-row-0.0.0-dataease.js";import{E as Z}from"./el-col-0.0.0-dataease.js";import{d as $,m as x,_ as H,w as P,o as W,f as l,M as m,N as c,V as g,a0 as y,k as r,i,j as o,Z as X,aa as Y,g as L,a7 as d,a6 as S,ac as F}from"./vue-0.0.0-dataease.js";import{i as ee}from"./icon_edit_outlined-0.0.0-dataease.js";import{i as te}from"./icon_info_outlined-0.0.0-dataease.js";import se from"./AssistLineEdit-0.0.0-dataease.js";import{N as ie}from"./chart-0.0.0-dataease.js";import{w as k,x as ae}from"./lodash-0.0.0-dataease.js";import{E as ne}from"./index-0.0.0-dataease4.js";import{_ as oe}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./use-dialog-0.0.0-dataease.js";import"./refs-0.0.0-dataease.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./row-0.0.0-dataease.js";import"./el-radio-button-0.0.0-dataease.js";import"./el-radio-0.0.0-dataease.js";import"./el-input-number-0.0.0-dataease.js";import"./index-0.0.0-dataease15.js";import"./position-0.0.0-dataease.js";import"./index-0.0.0-dataease5.js";import"./el-radio-group-0.0.0-dataease.js";import"./el-tag-0.0.0-dataease.js";import"./el-select-0.0.0-dataease.js";import"./index-0.0.0-dataease14.js";import"./strings-0.0.0-dataease.js";import"./icon_delete-trash_outlined-0.0.0-dataease.js";import"./icon_add_outlined-0.0.0-dataease.js";import"./attr-0.0.0-dataease20.js";import"./field-list-0.0.0-dataease.js";import"./formatter-0.0.0-dataease.js";const re={class:"inner-container"},le={class:"right-btns"},ce=["disabled"],de=["title"],ue=["title"],fe=["title"],me=["title"],pe=["title"],_e={key:1,style:{color:"red"}},he={class:"assist-line-cfg-header"},ge={class:"ed-dialog__title"},ye={class:"dialog-footer"},Le=$({__name:"AssistLine",props:{chart:{type:Object,required:!0},quotaData:{type:Array,required:!0},quotaExtData:{type:Array,required:!0},themes:{type:String,default:"dark"},propertyInner:{type:Array}},emits:["onAssistLineChange"],setup(C,{emit:w}){const{t:a}=U(),I=w,u=C,v=x(()=>u.quotaData.filter(s=>s.summary!==""&&s.id!=="-1")),E=x(()=>u.quotaExtData.filter(s=>s.summary!==""&&s.id!=="-1")),A=x(()=>u.chart.type.includes("chart-mix")),t=H({assistLineCfg:{enable:!1,assistLine:[]},editLineDialog:!1,lineArr:[],quotaFields:[]});P(()=>u.chart.senior.assistLineCfg,()=>{D()},{deep:!0});const O=()=>{const s=t.assistLineCfg.assistLine.findIndex(e=>e.field==="1")!==-1;I("onAssistLineChange",{data:t.assistLineCfg,requestData:s})},V=s=>{t.lineArr=s},J=()=>{t.editLineDialog=!0},q=()=>{t.editLineDialog=!1},B=()=>{for(let s=0;s<t.lineArr.length;s++){const e=t.lineArr[s];if(!e.name||e.name===""){h.error(a("chart.name_can_not_empty"));return}if(e.field==="0"){if(e.value===null||e.value===void 0||e.value===""){h.error(a("chart.value_can_not_empty"));return}if(parseFloat(e.value).toString()==="NaN"){h.error(a("chart.value_error"));return}}else{if(!e.fieldId||e.fieldId===""){h.error(a("chart.field_not_empty"));return}if(!e.summary||e.summary===""){h.error(a("chart.summary_not_empty"));return}}}t.assistLineCfg.assistLine=JSON.parse(JSON.stringify(t.lineArr)),O(),q()};function M(s){return A.value?!!k(v.value,e=>e.id===s.id)||!!k(E.value,e=>e.id===s.id):!!k(v.value,e=>e.id===s.id)}const D=()=>{var e;const s=JSON.parse(JSON.stringify(u.chart));if(s.senior){const p=s.senior;if((e=p.assistLineCfg)!=null&&e.assistLine){const f=p.assistLineCfg.assistLine;for(let _=0;_<f.length;_++)f[_].fontSize||(f[_].fontSize=10);t.assistLineCfg=ae(p.assistLineCfg,ie)}t.lineArr=JSON.parse(JSON.stringify(t.assistLineCfg.assistLine))}};return W(()=>{D()}),(s,e)=>{const p=G,f=Z,_=R,T=ne,b=Q,j=K;return l(),m("div",{onKeydown:e[1]||(e[1]=F(()=>{},["stop"])),onKeyup:e[2]||(e[2]=F(()=>{},["stop"])),class:"assist-line-container"},[c("div",re,[c("span",{class:g(["label","label-"+u.themes])},"辅助线设置",2),c("span",le,[t.assistLineCfg.assistLine.length>0?(l(),m("span",{key:0,class:g(["set-text-info",{"set-text-info-dark":C.themes==="dark"}])}," 已设置 ",2)):y("",!0),c("button",{class:g(["label-"+u.themes,"circle-button_icon"]),style:{marginLeft:"6px"},disabled:!t.assistLineCfg.enable,onClick:J},[r(o(N),null,{default:i(()=>[r(p,null,{default:i(()=>[r(o(ee),{class:g([t.assistLineCfg.enable&&"primary-color","svg-icon"])},null,8,["class"])]),_:1})]),_:1})],10,ce)])]),(l(!0),m(X,null,Y(t.assistLineCfg.assistLine,(n,z)=>(l(),L(_,{key:z,class:"line-style"},{default:i(()=>[r(f,{span:8,class:"line-style"},{default:i(()=>[c("span",{title:n.name},d(n.name),9,de)]),_:2},1024),r(f,{span:6},{default:i(()=>[n.field==="0"?(l(),m("span",{key:0,title:o(a)("chart.field_fixed")},d(o(a)("chart.field_fixed")),9,ue)):y("",!0),n.field==="1"?(l(),m("span",{key:1,title:o(a)("chart.field_dynamic")},d(o(a)("chart.field_dynamic")),9,fe)):y("",!0)]),_:2},1024),n.field==="0"?(l(),L(f,{key:0,span:10,class:"line-style"},{default:i(()=>[c("span",{title:n.value},d(n.value),9,me)]),_:2},1024)):n.field==="1"?(l(),L(f,{key:1,span:10,class:"line-style"},{default:i(()=>[M(n.curField)?(l(),m("span",{key:0,title:n.curField.name+"("+o(a)("chart."+n.summary)+")"},d(n.curField.name+"("+o(a)("chart."+n.summary)+")"),9,pe)):(l(),m("span",_e,"无效字段"))]),_:2},1024)):y("",!0)]),_:2},1024))),128)),t.editLineDialog?(l(),L(j,{key:0,modelValue:t.editLineDialog,"onUpdate:modelValue":e[0]||(e[0]=n=>t.editLineDialog=n),visible:t.editLineDialog,width:"1000px",class:"dialog-css"},{header:i(()=>[c("div",he,[c("span",ge,d(o(a)("chart.assist_line")),1),r(T,{class:"item",effect:"ndark",placement:"top"},{content:i(()=>[c("span",null,d(o(a)("chart.assist_line_tip")),1)]),default:i(()=>[r(o(N),{class:g(["hint-icon",{"hint-icon--dark":C.themes==="dark"}])},{default:i(()=>[r(p,{name:"icon_info_outlined"},{default:i(()=>[r(o(te),{class:"svg-icon"})]),_:1})]),_:1},8,["class"])]),_:1})])]),footer:i(()=>[c("div",ye,[r(b,{onClick:q},{default:i(()=>[S(d(o(a)("chart.cancel")),1)]),_:1}),r(b,{type:"primary",onClick:B},{default:i(()=>[S(d(o(a)("chart.confirm")),1)]),_:1})])]),default:i(()=>[r(se,{chart:u.chart,line:t.assistLineCfg.assistLine,"quota-fields":v.value,"quota-ext-fields":E.value,"use-quota-ext":A.value,onOnAssistLineChange:V},null,8,["chart","line","quota-fields","quota-ext-fields","use-quota-ext"])]),_:1},8,["modelValue","visible"])):y("",!0)],32)}}});const nt=oe(Le,[["__scopeId","data-v-d59d35f6"]]);export{nt as default};
