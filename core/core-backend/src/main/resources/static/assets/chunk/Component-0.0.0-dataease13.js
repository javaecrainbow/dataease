import{k as E}from"./DeShortcutKey-0.0.0-dataease.js";import{e as z}from"./eventBus-0.0.0-dataease.js";import{d as N}from"./dvMain-0.0.0-dataease.js";import{d as $,r as n,t as j,ai as A,m as _,a as U,o as F,j as m,f as x,M as g,N as k,V as G,W as h,n as J}from"./vue-0.0.0-dataease.js";import{_ as Q}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./snapshot-0.0.0-dataease.js";import"./index-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./lodash-0.0.0-dataease.js";import"./index-0.0.0-dataease2.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./dataVisualization-0.0.0-dataease2.js";import"./chart-0.0.0-dataease.js";import"./formatter-0.0.0-dataease.js";import"./util-0.0.0-dataease.js";import"./canvasStyle-0.0.0-dataease.js";import"./translate-0.0.0-dataease.js";import"./style-0.0.0-dataease.js";import"./imgUtils-0.0.0-dataease.js";import"./util-0.0.0-dataease2.js";import"./chart-0.0.0-dataease2.js";import"./app-0.0.0-dataease.js";import"./canvasUtils-0.0.0-dataease.js";import"./dataVisualization-0.0.0-dataease.js";import"./antv-0.0.0-dataease.js";import"./extends-0.0.0-dataease.js";import"./sysParameter-0.0.0-dataease.js";import"./TableTooltip-0.0.0-dataease.js";import"./el-col-0.0.0-dataease.js";import"./row-0.0.0-dataease.js";import"./el-row-0.0.0-dataease.js";import"./_commonjs-dynamic-modules-0.0.0-dataease.js";import"./appearance-0.0.0-dataease.js";import"./font-0.0.0-dataease.js";const X=["contenteditable","innerHTML"],Y=["innerHTML"],Z=$({__name:"Component",props:{propValue:{type:String,required:!0,default:""},element:{type:Object,default(){return{id:null,propValue:""}}},showPosition:{required:!1,type:String,default:"preview"}},emits:["input"],setup(C,{emit:M}){const o=n(!1),v=n(17),i=n(!1),S=M,s=n(null),u=n(null),c=n("100%"),p=n("100%");let r=null;const d=n(200),T=C,{element:t,showPosition:f}=j(T),V=N(),{editMode:w,curComponent:L,canvasStyleData:ee}=A(V),B=()=>{L.value.id!==t.value.id&&(o.value=!1)},D=e=>{S("input",t.value,e.target.innerHTML)},H=e=>{o.value&&e.stopPropagation(),e.keyCode==v.value?i.value=!0:(i.value&&o.value&&E.includes(e.keyCode)||e.keyCode==46)&&e.stopPropagation()},I=e=>{o.value&&e.stopPropagation(),e.keyCode==v.value&&(i.value=!1)},P=e=>{o.value&&e.stopPropagation()},O=e=>{e.preventDefault();const l=e.clipboardData.getData("text/plain")||"";l!==""&&document.execCommand("insertText",!1,l)},b=e=>{t.value.propValue=e.target.innerHTML||"",e.target.innerHTML!==""?t.value.propValue=e.target.innerHTML:(t.value.propValue="",J(function(){t.value.propValue=""})),o.value=!1},W=_(()=>!o.value&&!t.value.resizing&&!t.value.dragging),q=()=>{["canvas","canvasDataV","edit"].includes(f.value)&&!t.value.isLock&&(o.value=!0,K(s.value))},K=e=>{const a=window.getSelection(),l=document.createRange();l.selectNodeContents(e),a.removeAllRanges(),a.addRange(l)};U(()=>{z.off("componentClick",B),r&&(clearInterval(r),r=null)});const y=_(()=>[{"--scroll-speed":`${t.value.style.scrollSpeed===0||!u.value?0:(d.value+s.value.clientWidth)/t.value.style.scrollSpeed}s`,"--scroll-scale0":`${c.value}`,"--scroll-scale100":`${p.value}`}]),R=()=>{r=setInterval(()=>{const e=["canvas","canvasDataV","edit"].includes(f.value)?"shape-id-"+t.value.id:"wrapper-outer-id-"+t.value.id,a=document.getElementById(e);if(a&&s.value){const l=s.value.clientWidth;d.value=a.clientWidth,c.value=d.value*100/l+"%",p.value="-100%"}else c.value="100%",p.value="-100%"},1e3)};return F(()=>{R()}),(e,a)=>m(w)=="edit"?(x(),g("div",{key:0,style:h(y.value),class:"v-text",ref_key:"textOut",ref:u,onKeydown:H,onKeyup:I,onDblclick:q},[k("div",{ref_key:"text",ref:s,contenteditable:o.value,class:G({"can-edit":o.value,"marquee-txt":W.value}),tabindex:"0",onPaste:O,onMousedown:P,onBlur:b,onInput:D,innerHTML:m(t).propValue},null,42,X)],36)):(x(),g("div",{key:1,class:"v-text preview",ref_key:"textOut",ref:u,style:h(y.value)},[k("div",{class:"marquee-txt",ref_key:"text",ref:s,innerHTML:m(t).propValue},null,8,Y)],4))}});const Ke=Q(Z,[["__scopeId","data-v-45d34e26"]]);export{Ke as default};
