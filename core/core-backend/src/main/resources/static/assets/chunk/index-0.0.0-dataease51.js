import"./index-0.0.0-dataease.js";import{E as h}from"./el-col-0.0.0-dataease.js";import{E as $}from"./el-row-0.0.0-dataease.js";import{j as A,w as D,y as O,n as B}from"./index-0.0.0-dataease2.js";import"./el-form-0.0.0-dataease.js";import{E as P}from"./el-input-number-0.0.0-dataease.js";import{E as R}from"./el-radio-button-0.0.0-dataease.js";import"./el-radio-0.0.0-dataease.js";import"./el-radio-group-0.0.0-dataease.js";import"./el-tag-0.0.0-dataease.js";import{E as J,a as M}from"./el-select-0.0.0-dataease.js";import"./el-popper-0.0.0-dataease.js";import{E as j}from"./el-checkbox-0.0.0-dataease.js";import{a as T,E as W}from"./el-form-item-0.0.0-dataease.js";import{E as X}from"./el-switch-0.0.0-dataease.js";import{_ as Z,o as q,f as G,M as H,N as p,k as t,i as o,j as n,a6 as s,a7 as k,U as K,X as Q,Z as Y}from"./vue-0.0.0-dataease.js";import{a as F,w as ee}from"./watermark-0.0.0-dataease.js";import{personInfoApi as ae}from"./user-0.0.0-dataease2.js";import{g,w as te}from"./watermark-0.0.0-dataease2.js";import re from"./ParamsTips-0.0.0-dataease.js";import{_ as oe}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./lodash-0.0.0-dataease.js";import"./row-0.0.0-dataease.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./index-0.0.0-dataease15.js";import"./index-0.0.0-dataease4.js";import"./position-0.0.0-dataease.js";import"./index-0.0.0-dataease5.js";import"./index-0.0.0-dataease14.js";import"./strings-0.0.0-dataease.js";import"./dvMain-0.0.0-dataease.js";import"./chart-0.0.0-dataease.js";import"./formatter-0.0.0-dataease.js";import"./dataVisualization-0.0.0-dataease2.js";import"./util-0.0.0-dataease.js";import"./util-0.0.0-dataease2.js";import"./chart-0.0.0-dataease2.js";import"./app-0.0.0-dataease.js";import"./antv-0.0.0-dataease.js";import"./extends-0.0.0-dataease.js";import"./sysParameter-0.0.0-dataease.js";import"./TableTooltip-0.0.0-dataease.js";import"./_commonjs-dynamic-modules-0.0.0-dataease.js";import"./appearance-0.0.0-dataease.js";import"./font-0.0.0-dataease.js";import"./el-tooltip-0.0.0-dataease.js";const me=""+new URL("../png/watermark-demo-light-0.0.0-dataease.png",import.meta.url).href,le=""+new URL("../png/watermark-demo-dark-0.0.0-dataease.png",import.meta.url).href;const ne={__name:"index",setup(ie){const{t:m}=A(),e=Z({userLoginInfo:{username:"",nickName:"",ip:""},cmOption:{tabSize:2,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"text/x-textile",theme:"solarized",hintOptions:{completeSingle:!1}},watermarkFormSource:null,predefineColors:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","#999999","#000000","#FFFFFF"],watermarkForm:{enable:!1,enablePanelCustom:!1,type:"userName",content:"${time}-${ip}-${nickName}",watermark_color:"#999999",watermark_x_space:100,watermark_y_space:100,watermark_fontsize:20}}),x=()=>{w()},y=()=>{w()},V=()=>{e.watermarkForm={...e.watermarkFormSource};const r={settingContent:JSON.stringify(e.watermarkForm)};F(r).then(()=>{}),w()},v=()=>{const r={settingContent:JSON.stringify(e.watermarkForm)};F(r).then(()=>{D.success("保存成功")})},E=r=>{ee().then(a=>{r(a)})},z=r=>{ae().then(a=>{r(a)})},C=()=>{E(r=>{e.watermarkForm=JSON.parse(r.data.settingContent),e.watermarkFormSource={...e.watermarkForm},w()})},w=()=>{let r,a=120;e.watermarkForm.type==="custom"?(r=e.watermarkForm.content,r=r.replaceAll("${ip}",e.userLoginInfo.ip),r=r.replaceAll("${username}",e.userLoginInfo.name),r=r.replaceAll("${nickName}",e.userLoginInfo.account),r=r.replaceAll("${time}",g()),a=r.length*e.watermarkForm.watermark_fontsize*.75,a=a>350?350:a):e.watermarkForm.type==="nickName"?r=e.userLoginInfo.account:e.watermarkForm.type==="ip"?(r=e.userLoginInfo.ip,a=r.length*e.watermarkForm.watermark_fontsize+30):e.watermarkForm.type==="time"?(r=g(),a=200):r=e.userLoginInfo.name;const u={watermark_enable:e.watermarkForm.enable,watermark_txt:r,watermark_width:a,watermark_color:e.watermarkForm.watermark_color,watermark_x_space:e.watermarkForm.watermark_x_space,watermark_y_space:e.watermarkForm.watermark_y_space,watermark_fontsize:e.watermarkForm.watermark_fontsize+"px"},i=document.getElementById("de-watermark-server");i&&i.remove(),e.watermarkForm.enable&&te(u,"watermark-demo")};return q(()=>{z(r=>{e.userLoginInfo=r.data,C()})}),(r,a)=>{const u=X,i=T,N=j,d=J,I=M,S=O,U=R,_=P,L=W,f=B,c=$,b=h;return G(),H(Y,null,[a[12]||(a[12]=p("p",{class:"router-title"},"水印管理",-1)),t(c,{class:"watermark-table__content"},{default:o(()=>[t(c,{class:"watermark-main-outer"},{default:o(()=>[t(b,{class:"main-col-left",span:12},{default:o(()=>[t(L,{ref:"watermarkForm",model:e.watermarkForm,"label-width":"120px",size:"middle"},{default:o(()=>[t(i,{label:n(m)("watermark.enable"),style:{"text-align":"left"}},{default:o(()=>[t(u,{size:"middle",modelValue:e.watermarkForm.enable,"onUpdate:modelValue":a[0]||(a[0]=l=>e.watermarkForm.enable=l),onChange:x},null,8,["modelValue"])]),_:1},8,["label"]),t(i,{label:"",style:{"text-align":"left"}},{default:o(()=>[t(N,{disabled:!e.watermarkForm.enable,modelValue:e.watermarkForm.enablePanelCustom,"onUpdate:modelValue":a[1]||(a[1]=l=>e.watermarkForm.enablePanelCustom=l)},null,8,["disabled","modelValue"]),s(" "+k(n(m)("watermark.enable_panel_custom")),1)]),_:1}),t(i,{label:n(m)("watermark.content"),style:{"text-align":"left"}},{default:o(()=>[t(I,{disabled:!e.watermarkForm.enable,modelValue:e.watermarkForm.type,"onUpdate:modelValue":a[2]||(a[2]=l=>e.watermarkForm.type=l)},{default:o(()=>[t(d,{label:n(m)("watermark.custom_content"),value:"custom"},null,8,["label"]),t(d,{label:n(m)("watermark.account"),value:"userName"},null,8,["label"]),t(d,{label:n(m)("watermark.nick_name"),value:"nickName"},null,8,["label"]),t(d,{label:n(m)("watermark.ip"),value:"ip"},null,8,["label"]),t(d,{label:n(m)("watermark.now"),value:"time"},null,8,["label"])]),_:1},8,["disabled","modelValue"])]),_:1},8,["label"]),K(t(i,{label:"",style:{"text-align":"left"}},{default:o(()=>[t(re),t(S,{disabled:!e.watermarkForm.enable,modelValue:e.watermarkForm.content,"onUpdate:modelValue":a[3]||(a[3]=l=>e.watermarkForm.content=l),type:"textarea",autosize:{minRows:4,maxRows:4}},null,8,["disabled","modelValue"])]),_:1},512),[[Q,e.watermarkForm.type==="custom"]]),t(i,{label:n(m)("watermark.watermark_color"),style:{"text-align":"left"}},{default:o(()=>[t(U,{disabled:!e.watermarkForm.enable,modelValue:e.watermarkForm.watermark_color,"onUpdate:modelValue":a[4]||(a[4]=l=>e.watermarkForm.watermark_color=l),predefine:e.predefineColors,size:"middle"},null,8,["disabled","modelValue","predefine"])]),_:1},8,["label"]),t(i,{label:n(m)("watermark.watermark_font_size"),style:{"text-align":"left"}},{default:o(()=>[t(_,{disabled:!e.watermarkForm.enable,modelValue:e.watermarkForm.watermark_fontsize,"onUpdate:modelValue":a[5]||(a[5]=l=>e.watermarkForm.watermark_fontsize=l),min:12,max:32,size:"middle"},null,8,["disabled","modelValue"]),a[8]||(a[8]=s(" px "))]),_:1},8,["label"]),t(i,{label:n(m)("watermark.horizontal"),style:{"text-align":"left"}},{default:o(()=>[t(_,{disabled:!e.watermarkForm.enable,modelValue:e.watermarkForm.watermark_x_space,"onUpdate:modelValue":a[6]||(a[6]=l=>e.watermarkForm.watermark_x_space=l),min:10,max:400},null,8,["disabled","modelValue"]),a[9]||(a[9]=s(" px "))]),_:1},8,["label"]),t(i,{label:n(m)("watermark.vertical"),style:{"text-align":"left"}},{default:o(()=>[t(_,{disabled:!e.watermarkForm.enable,modelValue:e.watermarkForm.watermark_y_space,"onUpdate:modelValue":a[7]||(a[7]=l=>e.watermarkForm.watermark_y_space=l),min:10,max:400},null,8,["disabled","modelValue"]),a[10]||(a[10]=s(" px "))]),_:1},8,["label"])]),_:1},8,["model"]),t(c,{style:{"margin-left":"53px","text-align":"left"}},{default:o(()=>[t(f,{size:"middle",type:"i",onClick:V},{default:o(()=>[s(k(n(m)("watermark.reset")),1)]),_:1}),t(f,{size:"middle",type:"info",onClick:y},{default:o(()=>[s(k(n(m)("watermark.preview")),1)]),_:1}),t(f,{type:"primary",size:"middle",onClick:v},{default:o(()=>[s(k(n(m)("watermark.save")),1)]),_:1})]),_:1})]),_:1}),t(b,{span:12,style:{height:"100%"}},{default:o(()=>a[11]||(a[11]=[p("div",{id:"watermark-demo",style:{position:"relative",width:"100%",height:"100%",padding:"20px"}},[p("div",{class:"demo-preview"},[p("img",{style:{height:"100%"},src:me})]),p("div",{class:"demo-preview",style:{"margin-top":"15px"}},[p("img",{style:{height:"100%"},src:le})])],-1)])),_:1})]),_:1})]),_:1})],64)}}},ma=oe(ne,[["__scopeId","data-v-8195af0a"]]);export{ma as default};
