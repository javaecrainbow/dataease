import"./index-0.0.0-dataease.js";import{E as ye}from"./el-radio-button-0.0.0-dataease.js";import{j as me,_ as he,e as be,n as ge,y as ve}from"./index-0.0.0-dataease2.js";import{E as xe}from"./el-input-number-0.0.0-dataease.js";import"./el-radio-0.0.0-dataease.js";import"./el-radio-group-0.0.0-dataease.js";import{E as Ve}from"./el-col-0.0.0-dataease.js";import{E as ke,a as Ce,b as Te}from"./el-select-0.0.0-dataease.js";import{E as Ne}from"./el-row-0.0.0-dataease.js";import{a as Se}from"./el-form-item-0.0.0-dataease.js";import"./el-tag-0.0.0-dataease.js";import"./el-popper-0.0.0-dataease.js";import{d as Je,_ as Ue,f as o,g as u,i as a,N as M,k as n,j as c,a7 as S,M as b,aa as v,Z as x,q,V as $,a6 as O,a0 as V,ac as Q}from"./vue-0.0.0-dataease.js";import{i as Ee}from"./icon_info_filled-0.0.0-dataease.js";import{i as W}from"./icon_delete-trash_outlined-0.0.0-dataease.js";import{i as X}from"./icon_add_outlined-0.0.0-dataease.js";import{C as Me}from"./chart-0.0.0-dataease.js";import{f as J}from"./attr-0.0.0-dataease20.js";import{i as j}from"./field-list-0.0.0-dataease.js";import{d as Oe}from"./lodash-0.0.0-dataease.js";import{_ as Ae}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./index-0.0.0-dataease4.js";import"./position-0.0.0-dataease.js";import"./index-0.0.0-dataease5.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./index-0.0.0-dataease15.js";import"./row-0.0.0-dataease.js";import"./index-0.0.0-dataease14.js";import"./strings-0.0.0-dataease.js";import"./formatter-0.0.0-dataease.js";const Fe={class:"tip"},Ie={style:{"padding-left":"10px"}},we={style:{margin:"0 -5px"}},qe={style:{margin:"0 -5px"}},$e={style:{display:"flex","align-items":"center","justify-content":"center"}},je=Je({__name:"TableThresholdEdit",props:{chart:{type:Object,required:!0},threshold:{type:Array,required:!0}},emits:["onTableThresholdChange"],setup(A,{emit:Y}){const{t:d}=me(),T=A,ee=Y,le={term:"eq",field:"0",value:"0",color:"#ff0000ff",backgroundColor:"#ffffff00",min:"0",max:"1",type:"fixed",dynamicField:{summary:"value"},dynamicMinField:{summary:"value"},dynamicMaxField:{summary:"value"}},ae=[{label:"",options:[{value:"eq",label:d("chart.filter_eq")},{value:"not_eq",label:d("chart.filter_not_eq")}]},{label:"",options:[{value:"like",label:d("chart.filter_like")},{value:"not like",label:d("chart.filter_not_like")}]},{label:"",options:[{value:"null",label:d("chart.filter_null")},{value:"not_null",label:d("chart.filter_not_null")}]}],ne=[{label:"",options:[{value:"eq",label:d("chart.filter_eq")},{value:"not_eq",label:d("chart.filter_not_eq")}]},{label:"",options:[{value:"lt",label:d("chart.filter_lt")},{value:"gt",label:d("chart.filter_gt")}]},{label:"",options:[{value:"le",label:d("chart.filter_le")},{value:"ge",label:d("chart.filter_ge")}]}],te=[{label:"",options:[{value:"eq",label:d("chart.filter_eq")},{value:"not_eq",label:d("chart.filter_not_eq")}]},{label:"",options:[{value:"lt",label:d("chart.filter_lt")},{value:"gt",label:d("chart.filter_gt")}]},{label:"",options:[{value:"le",label:d("chart.filter_le")},{value:"ge",label:d("chart.filter_ge")}]},{label:"",options:[{value:"between",label:d("chart.filter_between")}]}],P=Me,_=Ue({thresholdArr:[],fields:[],thresholdObj:{fieldId:"",field:{},conditions:[]}}),oe=()=>{_.thresholdArr=JSON.parse(JSON.stringify(T.threshold)),de()},I=(t,r)=>{r&&([0,5,7].includes(r.deType)?t.options=JSON.parse(JSON.stringify(ae)):r.deType===1?(t.options=JSON.parse(JSON.stringify(ne)),t.type="fixed"):t.options=JSON.parse(JSON.stringify(te)),t.conditions&&t.conditions.forEach(s=>{s.term=""}))},de=()=>{let t=[];if(T.chart.type==="table-info")t=JSON.parse(JSON.stringify(T.chart.xAxis));else if(T.chart.type==="table-pivot"){const s=JSON.parse(JSON.stringify(T.chart.xAxis)),f=JSON.parse(JSON.stringify(T.chart.xAxisExt)),i=JSON.parse(JSON.stringify(T.chart.yAxis));t=[...s,...f,...i]}else{const s=JSON.parse(JSON.stringify(T.chart.xAxis)),f=JSON.parse(JSON.stringify(T.chart.yAxis));t=[...s,...f]}_.fields.splice(0,_.fields.length,...t);let r=!1;_.thresholdArr.forEach(s=>{_.fields.filter(i=>i.id===s.fieldId).length===0&&(r=!0,s.fieldId=null)}),r&&m()},se=()=>{_.thresholdArr.push(JSON.parse(JSON.stringify(_.thresholdObj))),m()},re=t=>{_.thresholdArr.splice(t,1),m()},m=()=>{ee("onTableThresholdChange",_.thresholdArr)},ie=t=>{var f,i;const r=JSON.parse(JSON.stringify(le)),s=(i=(f=T.chart)==null?void 0:f.customAttr)==null?void 0:i.tableCell;s&&(r.backgroundColor=Oe(s.tableItemBgColor)),t.conditions.push(r),m()},ce=(t,r)=>{t.conditions.splice(r,1),m()},F=t=>{_.fields&&_.fields.length>0&&_.fields.forEach(r=>{var s,f,i;t.fieldId===r.id&&(t.field=JSON.parse(JSON.stringify(r)),I(t,t.field)),((s=t.dynamicField)==null?void 0:s.fieldId)===r.id&&(t.dynamicField.field=JSON.parse(JSON.stringify(r)),I(t,t.dynamicField.field)),((f=t.dynamicMinField)==null?void 0:f.fieldId)===r.id&&(t.dynamicMinField.field=JSON.parse(JSON.stringify(r)),I(t,t.dynamicMinField.field)),((i=t.dynamicMaxField)==null?void 0:i.fieldId)===r.id&&(t.dynamicMaxField.field=JSON.parse(JSON.stringify(r)),I(t,t.dynamicMaxField.field))}),m()},R=[{label:d("chart.field_fixed"),value:"fixed"},{label:d("chart.field_dynamic"),value:"dynamic"}],B=[{id:"value",name:d("chart.field")+d("chart.drag_block_label_value")},{id:"avg",name:d("chart.avg")+d("chart.drag_block_label_value")},{id:"max",name:d("chart.max")},{id:"min",name:d("chart.min")}],D=(t,r,s)=>{var y,U,E,w;const f=_.fields.filter(p=>p.id===t.fieldId);if(f.length===0||((y=f[0])==null?void 0:y.deType)===void 0||((U=f[0])==null?void 0:U.deType)===null)return t.fieldId=null,r.fieldId=null,s.fieldId=null,[];const i=(E=f[0])==null?void 0:E.deType,h=_.fields.filter(p=>[0,1,4,5].includes(i)?p.deType===i:[2,3].includes(i)?p.deType===2||p.deType===3:!1)??[];return h.find(p=>p.id===s.fieldId)||(s.fieldId=(w=h[0])==null?void 0:w.id,F(r)),h},z=t=>{var s,f;const r=(f=(s=_.fields.filter(i=>i.id===t))==null?void 0:s[0])==null?void 0:f.deType;return r===1?B.filter(i=>i.id!=="avg"):r===0||r===5?B.filter(i=>i.id==="value"):B},N=t=>!t.term.includes("null")&&!t.term.includes("empty"),k=t=>t.term==="between",C=t=>t.type==="dynamic",ue=t=>{t.type==="dynamic"&&(t.dynamicField.summary="value",t.dynamicMinField.summary="value",t.dynamicMaxField.summary="value")},fe=t=>{var s,f;return((f=(s=_.fields.filter(i=>i.id===t.fieldId))==null?void 0:s[0])==null?void 0:f.deType)===1?R.filter(i=>i.value==="fixed"):R};return oe(),(t,r)=>{const s=he,f=be,i=ke,h=Ce,y=Se,U=ge,E=Ne,w=Te,p=Ve,L=xe,pe=ve,G=ye;return o(),u(p,null,{default:a(()=>[M("div",Fe,[n(s,{name:"icon_info_filled",class:"icon-style"},{default:a(()=>[n(c(Ee),{class:"svg-icon icon-style"})]),_:1}),M("span",Ie,S(c(d)("chart.table_threshold_tip")),1)]),M("div",{onKeydown:r[0]||(r[0]=Q(()=>{},["stop"])),onKeyup:r[1]||(r[1]=Q(()=>{},["stop"])),style:{"max-height":"50vh","overflow-y":"auto"}},[(o(!0),b(x,null,v(_.thresholdArr,(g,Z)=>(o(),b("div",{key:Z,class:"field-item"},[n(E,{style:{"margin-top":"6px","align-items":"center","justify-content":"space-between"}},{default:a(()=>[n(y,{class:"form-item"},{default:a(()=>[n(h,{modelValue:g.fieldId,"onUpdate:modelValue":e=>g.fieldId=e,onChange:e=>F(g)},{default:a(()=>[(o(!0),b(x,null,v(_.fields,e=>(o(),u(i,{class:"series-select-option",key:e.id,label:e.name,value:e.id,disabled:A.chart.type==="table-info"&&e.deType===7},{default:a(()=>[n(f,{style:{"margin-right":"8px"}},{default:a(()=>[n(s,null,{default:a(()=>[(o(),u(q(c(j)[c(J)[e.deType]]),{class:$([`field-icon-${c(J)[[2,3].includes(e.deType)?2:0]}`,"svg-icon"])},null,8,["class"]))]),_:2},1024)]),_:2},1024),O(" "+S(e.name),1)]),_:2},1032,["label","value","disabled"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1024),n(U,{class:"circle-button m-icon-btn",text:"",style:{float:"right"},onClick:e=>re(Z)},{default:a(()=>[n(f,{size:"20px",style:{color:"#646a73"}},{default:a(()=>[n(s,{name:"icon_delete-trash_outlined"},{default:a(()=>[n(c(W),{class:"svg-icon"})]),_:1})]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),n(E,{style:{marginTop:"16px",borderTop:"1px solid #d5d6d8"}},{default:a(()=>[(o(!0),b(x,null,v(g.conditions,(e,H)=>(o(),u(E,{key:H,class:"line-item",gutter:12},{default:a(()=>[n(p,{span:3},{default:a(()=>[n(y,{class:"form-item"},{default:a(()=>[n(h,{modelValue:e.term,"onUpdate:modelValue":l=>e.term=l,onChange:m},{default:a(()=>[(o(!0),b(x,null,v(g.options,(l,_e)=>(o(),u(w,{key:_e,label:l.label},{default:a(()=>[(o(!0),b(x,null,v(l.options,K=>(o(),u(i,{key:K.value,label:K.label,value:K.value},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),N(e)?(o(),u(p,{key:0,span:2,style:{"padding-left":"0 !important"}},{default:a(()=>[n(y,{class:"form-item"},{default:a(()=>[n(h,{modelValue:e.type,"onUpdate:modelValue":l=>e.type=l,class:"select-item",onChange:l=>ue(e),style:{width:"100%"}},{default:a(()=>[(o(!0),b(x,null,v(fe(g),l=>(o(),u(i,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1024)]),_:2},1024)):V("",!0),N(e)&&!k(e)&&!C(e)?(o(),u(p,{key:1,span:12,style:{"text-align":"center"}},{default:a(()=>[n(y,{class:"form-item"},{default:a(()=>[[2,3].includes(g.field.deType)?(o(),u(L,{key:0,modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:c(d)("chart.drag_block_label_value"),"controls-position":"right",class:"value-item",clearable:"",onChange:m},null,8,["modelValue","onUpdate:modelValue","placeholder"])):(o(),u(pe,{key:1,modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:c(d)("chart.drag_block_label_value"),"controls-position":"right",clearable:"",onChange:m},null,8,["modelValue","onUpdate:modelValue","placeholder"]))]),_:2},1024)]),_:2},1024)):V("",!0),N(e)&&!k(e)&&C(e)?(o(),u(p,{key:2,span:6},{default:a(()=>[n(y,{class:"form-item"},{default:a(()=>[n(h,{modelValue:e.dynamicField.fieldId,"onUpdate:modelValue":l=>e.dynamicField.fieldId=l,onChange:l=>F(e),style:{width:"100%"}},{default:a(()=>[(o(!0),b(x,null,v(D(g,e,e.dynamicField),l=>(o(),u(i,{class:"series-select-option",key:l.id,label:l.name,value:l.id,disabled:A.chart.type==="table-info"&&l.deType===7},{default:a(()=>[n(f,{style:{"margin-right":"8px"}},{default:a(()=>[n(s,null,{default:a(()=>[(o(),u(q(c(j)[c(J)[l.deType]]),{class:$([`field-icon-${c(J)[[2,3].includes(l.deType)?2:0]}`,"svg-icon"])},null,8,["class"]))]),_:2},1024)]),_:2},1024),O(" "+S(l.name),1)]),_:2},1032,["label","value","disabled"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1024)]),_:2},1024)):V("",!0),N(e)&&!k(e)&&C(e)?(o(),u(p,{key:3,span:6,style:{"text-align":"center"}},{default:a(()=>[n(y,{class:"form-item"},{default:a(()=>[n(h,{placeholder:c(d)("chart.aggregation"),modelValue:e.dynamicField.summary,"onUpdate:modelValue":l=>e.dynamicField.summary=l,onChange:m,style:{width:"100%"}},{default:a(()=>[(o(!0),b(x,null,v(z(e.dynamicField.fieldId),l=>(o(),u(i,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:2},1032,["placeholder","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):V("",!0),N(e)&&k(e)&&!C(e)?(o(),u(p,{key:4,span:5,style:{"text-align":"center"}},{default:a(()=>[n(y,{class:"form-item"},{default:a(()=>[n(L,{modelValue:e.min,"onUpdate:modelValue":l=>e.min=l,"controls-position":"right",class:"between-item",placeholder:c(d)("chart.axis_value_min"),clearable:"",onChange:m},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1024)]),_:2},1024)):V("",!0),k(e)&&!C(e)?(o(),u(p,{key:5,span:2,style:{"margin-top":"4px","text-align":"center"}},{default:a(()=>[M("span",we," ≤ "+S(c(d)("chart.drag_block_label_value"))+" ≤ ",1)]),_:1})):V("",!0),N(e)&&k(e)&&!C(e)?(o(),u(p,{key:6,span:5,style:{"text-align":"center"}},{default:a(()=>[n(y,{class:"form-item"},{default:a(()=>[n(L,{modelValue:e.max,"onUpdate:modelValue":l=>e.max=l,"controls-position":"right",class:"between-item",placeholder:c(d)("chart.axis_value_max"),clearable:"",onChange:m},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1024)]),_:2},1024)):V("",!0),N(e)&&k(e)&&C(e)?(o(),u(p,{key:7,class:"minField",span:3},{default:a(()=>[n(y,{class:"form-item"},{default:a(()=>[n(h,{modelValue:e.dynamicMinField.fieldId,"onUpdate:modelValue":l=>e.dynamicMinField.fieldId=l,onChange:l=>F(e)},{default:a(()=>[(o(!0),b(x,null,v(D(g,e,e.dynamicMinField),l=>(o(),u(i,{class:"series-select-option",key:l.id,label:l.name,value:l.id,disabled:A.chart.type==="table-info"&&l.deType===7},{default:a(()=>[n(f,{style:{"margin-right":"8px"}},{default:a(()=>[n(s,null,{default:a(()=>[(o(),u(q(c(j)[c(J)[l.deType]]),{class:$([`field-icon-${c(J)[[2,3].includes(l.deType)?2:0]}`,"svg-icon"])},null,8,["class"]))]),_:2},1024)]),_:2},1024),O(" "+S(l.name),1)]),_:2},1032,["label","value","disabled"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1024)]),_:2},1024)):V("",!0),N(e)&&k(e)&&C(e)?(o(),u(p,{key:8,class:"minValue",span:2,style:{"padding-left":"0 !important"}},{default:a(()=>[n(y,{class:"form-item"},{default:a(()=>[n(h,{modelValue:e.dynamicMinField.summary,"onUpdate:modelValue":l=>e.dynamicMinField.summary=l,onChange:m},{default:a(()=>[(o(!0),b(x,null,v(z(e.dynamicMinField.fieldId),l=>(o(),u(i,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):V("",!0),k(e)&&C(e)?(o(),u(p,{key:9,class:"term",span:2,style:{"margin-top":"4px","text-align":"center"}},{default:a(()=>[M("span",qe," ≤ "+S(c(d)("chart.drag_block_label_value"))+" ≤ ",1)]),_:1})):V("",!0),N(e)&&k(e)&&C(e)?(o(),u(p,{key:10,class:"maxField",span:3},{default:a(()=>[n(y,{class:"form-item"},{default:a(()=>[n(h,{modelValue:e.dynamicMaxField.fieldId,"onUpdate:modelValue":l=>e.dynamicMaxField.fieldId=l,onChange:l=>F(e)},{default:a(()=>[(o(!0),b(x,null,v(D(g,e,e.dynamicMaxField),l=>(o(),u(i,{class:"series-select-option",key:l.id,label:l.name,value:l.id,disabled:A.chart.type==="table-info"&&l.deType===7},{default:a(()=>[n(f,{style:{"margin-right":"8px"}},{default:a(()=>[n(s,null,{default:a(()=>[(o(),u(q(c(j)[c(J)[l.deType]]),{class:$([`field-icon-${c(J)[[2,3].includes(l.deType)?2:0]}`,"svg-icon"])},null,8,["class"]))]),_:2},1024)]),_:2},1024),O(" "+S(l.name),1)]),_:2},1032,["label","value","disabled"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1024)]),_:2},1024)):V("",!0),N(e)&&k(e)&&C(e)?(o(),u(p,{key:11,class:"maxValue",span:2,style:{"padding-left":"0 !important"}},{default:a(()=>[n(y,{class:"form-item"},{default:a(()=>[n(h,{modelValue:e.dynamicMaxField.summary,"onUpdate:modelValue":l=>e.dynamicMaxField.summary=l,onChange:m},{default:a(()=>[(o(!0),b(x,null,v(z(e.dynamicMaxField.fieldId),l=>(o(),u(i,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):V("",!0),n(p,{span:3},{default:a(()=>[n(y,{class:"form-item",label:c(d)("chart.textColor")},{default:a(()=>[n(G,{"is-custom":"",size:"large",modelValue:e.color,"onUpdate:modelValue":l=>e.color=l,"show-alpha":"",class:"color-picker-style",predefine:c(P),onChange:m},null,8,["modelValue","onUpdate:modelValue","predefine"])]),_:2},1032,["label"])]),_:2},1024),n(p,{span:3},{default:a(()=>[n(y,{class:"form-item",label:c(d)("chart.backgroundColor")},{default:a(()=>[n(G,{"is-custom":"",size:"large",modelValue:e.backgroundColor,"onUpdate:modelValue":l=>e.backgroundColor=l,"show-alpha":"",class:"color-picker-style",predefine:c(P),onChange:m},null,8,["modelValue","onUpdate:modelValue","predefine"])]),_:2},1032,["label"])]),_:2},1024),n(p,{span:1},{default:a(()=>[M("div",$e,[n(U,{class:"circle-button m-icon-btn",text:"",onClick:l=>ce(g,H)},{default:a(()=>[n(f,{size:"20px",style:{color:"#646a73"}},{default:a(()=>[n(s,{name:"icon_delete-trash_outlined"},{default:a(()=>[n(c(W),{class:"svg-icon"})]),_:1})]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),n(U,{style:{"margin-top":"10px"},class:"circle-button",type:"primary",text:"",onClick:e=>ie(g)},{icon:a(()=>[n(s,{name:"icon_add_outlined"},{default:a(()=>[n(c(X),{class:"svg-icon"})]),_:1})]),default:a(()=>[O(" "+S(c(d)("chart.add_style")),1)]),_:2},1032,["onClick"])]))),128))],32),n(U,{class:"circle-button",text:"",type:"primary",style:{"margin-top":"10px"},onClick:se},{icon:a(()=>[n(s,{name:"icon_add_outlined"},{default:a(()=>[n(c(X),{class:"svg-icon"})]),_:1})]),default:a(()=>[O(" "+S(c(d)("chart.add_condition")),1)]),_:1})]),_:1})}}});const vl=Ae(je,[["__scopeId","data-v-c9f36a1b"]]);export{vl as default};
