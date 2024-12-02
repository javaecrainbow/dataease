import{a as fe,u as P,I as me}from"./index-0.0.0-dataease.js";import{E as ve}from"./el-dialog-0.0.0-dataease.js";import{j as xe,L as ge,n as v,_ as S,w as y,P as U,x as V,e as Se}from"./index-0.0.0-dataease2.js";import{E as he}from"./el-drawer-0.0.0-dataease.js";import{a as we,E as Ee}from"./el-table-column-0.0.0-dataease.js";import"./el-checkbox-0.0.0-dataease.js";import"./el-tag-0.0.0-dataease.js";import"./el-tooltip-0.0.0-dataease.js";import"./el-popper-0.0.0-dataease.js";import{E as Ce}from"./el-progress-0.0.0-dataease.js";import{f as d,M as g,N as m,d as ke,r as f,ak as be,m as Le,ab as ye,U as z,g as x,i as l,k as o,Z as J,aa as Ne,j as s,a6 as E,a7 as u,a0 as p,X as De,V as Ie,h as N}from"./vue-0.0.0-dataease.js";import{d as R}from"./dv-preview-download-0.0.0-dataease.js";import{d as B}from"./de-delete-0.0.0-dataease.js";import{i as Ae}from"./icon_refresh_outlined-0.0.0-dataease.js";import{E as Fe}from"./EmptyBackground-0.0.0-dataease.js";import{E as Te,a as $e}from"./el-tabs-0.0.0-dataease.js";import{q as Z,r as Pe,t as Ue,u as Ve,v as Re}from"./dataset-0.0.0-dataease.js";import{useAppStoreWithOut as Be}from"./app-0.0.0-dataease.js";import{E as Oe}from"./index-0.0.0-dataease4.js";const Ge={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function He(j,C){return d(),g("svg",Ge,C[0]||(C[0]=[m("path",{d:"M4 2.5C4 1.94772 4.44772 1.5 5 1.5H14.7929C14.9255 1.5 15.0527 1.55268 15.1464 1.64645L19.8536 6.35355C19.9473 6.44732 20 6.5745 20 6.70711V21.5C20 22.0523 19.5523 22.5 19 22.5H5C4.44772 22.5 4 22.0523 4 21.5V2.5Z",fill:"#34C724"},null,-1),m("path",{d:"M15 1.54492C15.054 1.56949 15.1037 1.6037 15.1464 1.64646L19.8536 6.35357C19.8963 6.39632 19.9305 6.44602 19.9551 6.50001H16C15.4477 6.50001 15 6.0523 15 5.50001V1.54492Z",fill:"#2EA121"},null,-1),m("path",{d:"M11.308 13.5956L8.33203 17.9996H9.60403L11.98 14.4596L14.284 17.9996H15.676L12.664 13.5956L15.496 9.43164H14.224L11.992 12.7796L9.85603 9.43164H8.48803L11.308 13.5956Z",fill:"white"},null,-1)]))}const Me={render:He},ze={class:"name-excel"},Je={class:"name-content"},Ze={class:"fileName"},je=["onClick"],We={key:1,class:"success"},qe={key:0,class:"red-line"},Xe={key:0},Ke={key:1},Qe={key:2},Ye={class:"dialog-footer"},St=ke({__name:"ExportExcel",setup(j,{expose:C}){const{t}=xe(),h=f([]),D=f(!1),k=f(!1),b=f(!1),I=f("");f(!1);const c=f("ALL"),_=f([]),L=f(t("data_set.no_tasks_yet")),A=f([{label:t("data_set.exporting")+"(0)",name:"IN_PROGRESS"},{label:t("data_set.success")+"(0)",name:"SUCCESS"},{label:t("data_set.fail")+"(0)",name:"FAILED"},{label:t("data_set.waiting")+"(0)",name:"PENDING"},{label:t("data_set.all")+"(0)",name:"ALL"}]);let F;const W=()=>{k.value=!1,clearInterval(F)},{wsCache:q}=fe(),X=q.get("xpack-model-distributed");be(()=>{clearInterval(F)});const w=e=>{e&&(c.value=e.paneName),c.value==="ALL"?L.value=t("data_export.no_file"):c.value==="FAILED"?L.value=t("data_export.no_failed_file"):L.value=t("data_export.no_task"),D.value=!0,Z(c.value).then(r=>{A.value.forEach(a=>{a.name==="ALL"&&(a.label=t("data_set.all")+"("+r.data.length+")"),a.name==="IN_PROGRESS"&&(a.label=t("data_set.exporting")+"("+r.data.filter(i=>i.exportStatus==="IN_PROGRESS").length+")"),a.name==="SUCCESS"&&(a.label=t("data_set.success")+"("+r.data.filter(i=>i.exportStatus==="SUCCESS").length+")"),a.name==="FAILED"&&(a.label=t("data_set.fail")+"("+r.data.filter(i=>i.exportStatus==="FAILED").length+")"),a.name==="PENDING"&&(a.label=t("data_set.waiting")+"("+r.data.filter(i=>i.exportStatus==="PENDING").length+")")}),c.value==="ALL"?h.value=r.data:h.value=r.data.filter(a=>a.exportStatus===c.value)}).finally(()=>{D.value=!1})},K=e=>{k.value=!0,e&&e.activeName!==void 0&&(c.value=e.activeName),w(),F=setInterval(()=>{c.value==="IN_PROGRESS"&&Z(c.value).then(r=>{A.value.forEach(a=>{a.name==="ALL"&&(a.label=t("data_set.all")+"("+r.data.length+")"),a.name==="IN_PROGRESS"&&(a.label=t("data_set.exporting")+"("+r.data.filter(i=>i.exportStatus==="IN_PROGRESS").length+")"),a.name==="SUCCESS"&&(a.label=t("data_set.success")+"("+r.data.filter(i=>i.exportStatus==="SUCCESS").length+")"),a.name==="FAILED"&&(a.label=t("data_set.fail")+"("+r.data.filter(i=>i.exportStatus==="FAILED").length+")"),a.name==="PENDING"&&(a.label=t("data_set.waiting")+"("+r.data.filter(i=>i.exportStatus==="PENDING").length+")")}),c.value==="ALL"?h.value=r.data:h.value=r.data.filter(a=>a.exportStatus===c.value)})},5e3)},Q=ge(),O=Be(),Y=Le(()=>O.getIsDataEaseBi),ee=e=>{if(!Q.getLinkToken&&!Y.value&&!O.getIsIframe){if(JSON.parse(e).exportStatus==="SUCCESS"){G(JSON.parse(e).exportFromName+` ${t("data_set.successful_go_to")}`,"success",ae);return}JSON.parse(e).exportStatus==="FAILED"&&G(JSON.parse(e).exportFromName+` ${t("data_set.failed_go_to")}`,"error",te)}},G=(e,r="success",a)=>{const i=`de-message-${r||"success"} de-message-export`;y({message:N("p",null,[N("span",{title:t(e),class:"ellipsis m50-export"},t(e)),N(v,{text:!0,size:"small",class:"btn-text",onClick:()=>{a()}},t("data_export.export_center"))]),icon:r==="loading"?N(me):"",type:r,showClose:!0,customClass:i})},te=()=>{P().emitter.emit("data-export-center",{activeName:"FAILED"})},ae=()=>{P().emitter.emit("data-export-center",{activeName:"SUCCESS"})},H=()=>{if(_.value.length===0){h.value.forEach(e=>{window.open(U+"/exportCenter/download/"+e.id)});return}_.value.map(e=>{window.open(U+"/exportCenter/download/"+e.id)})},le=e=>{I.value="",I.value=e.msg,b.value=!0},oe=e=>e?new Date(e).toLocaleString():"-",ne=e=>{window.open(U+"/exportCenter/download/"+e.id)},se=e=>{Pe(e.id).then(()=>{w()})},re=e=>{V.confirm(t("data_export.sure_del"),{confirmButtonType:"danger",type:"warning",autofocus:!1,showClose:!1}).then(()=>{Ue(e.id).then(()=>{y.success(t("commons.delete_success")),w()})}).catch(()=>{})},ie=e=>{_.value=e},M=()=>{if(_.value.length===0){V.confirm(t("data_export.sure_del_all"),{confirmButtonType:"danger",type:"warning",autofocus:!1,showClose:!1}).then(()=>{Ve(c.value,_.value.map(e=>e.id)).then(()=>{y.success(t("commons.delete_success")),w()})}).catch(()=>{});return}V.confirm(t("data_export.sure_del"),{confirmButtonType:"danger",type:"warning",autofocus:!1,showClose:!1}).then(()=>{Re(_.value.map(e=>e.id)).then(()=>{y.success(t("commons.delete_success")),w()})}).catch(()=>{})};return P({name:"task-export-topic-call",callback:ee}),C({init:K}),(e,r)=>{const a=we,i=Se,de=Ce,T=Oe,ce=Ee,ue=he,pe=ve,_e=ye("loading");return d(),g(J,null,[z((d(),x(ue,{"custom-class":"de-export-excel",title:e.$t("data_export.export_center"),modelValue:k.value,"onUpdate:modelValue":r[1]||(r[1]=n=>k.value=n),direction:"rtl",size:"1000px","append-to-body":"","before-close":W},{default:l(()=>[o(s($e),{modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=n=>c.value=n),onTabClick:w},{default:l(()=>[(d(!0),g(J,null,Ne(A.value,n=>(d(),x(s(Te),{key:n.name,label:n.label,name:n.name},null,8,["label","name"]))),128))]),_:1},8,["modelValue"]),c.value==="SUCCESS"&&_.value.length===0?(d(),x(s(v),{key:0,secondary:"",onClick:H},{icon:l(()=>[o(S,{name:"dv-preview-download"},{default:l(()=>[o(s(R),{class:"svg-icon"})]),_:1})]),default:l(()=>[E(" "+u(e.$t("data_export.download_all")),1)]),_:1})):p("",!0),c.value==="SUCCESS"&&_.value.length!==0?(d(),x(s(v),{key:1,secondary:"",onClick:H},{icon:l(()=>[o(S,{name:"dv-preview-download"},{default:l(()=>[o(s(R),{class:"svg-icon"})]),_:1})]),default:l(()=>[E(" "+u(e.$t("data_export.download")),1)]),_:1})):p("",!0),_.value.length===0?(d(),x(s(v),{key:2,secondary:"",onClick:M},{icon:l(()=>[o(S,{name:"de-delete"},{default:l(()=>[o(s(B),{class:"svg-icon"})]),_:1})]),default:l(()=>[E(u(e.$t("data_export.del_all")),1)]),_:1})):p("",!0),_.value.length!==0?(d(),x(s(v),{key:3,secondary:"",onClick:M},{icon:l(()=>[o(S,{name:"de-delete"},{default:l(()=>[o(s(B),{class:"svg-icon"})]),_:1})]),default:l(()=>[E(u(e.$t("commons.delete")),1)]),_:1})):p("",!0),m("div",{class:Ie(["table-container",!h.value.length&&"hidden-bottom"])},[o(ce,{ref:"multipleTable",data:h.value,height:"100%",style:{width:"100%"},onSelectionChange:ie},{empty:l(()=>[o(s(Fe),{description:L.value,"img-type":"noneWhite"},null,8,["description"])]),default:l(()=>[o(a,{type:"selection",width:"50"}),o(a,{prop:"fileName",label:e.$t("driver.file_name"),width:"332"},{default:l(n=>[m("div",ze,[o(i,{style:{"font-size":"24px"}},{default:l(()=>[o(S,{name:"icon_file-excel_colorful"},{default:l(()=>[o(s(Me),{class:"svg-icon"})]),_:1})]),_:1}),m("div",Je,[m("div",Ze,u(n.row.fileName),1),n.row.exportStatus==="FAILED"?(d(),g("div",{key:0,class:"failed",onClick:$=>le(n.row)},u(e.$t("data_export.export_failed")),9,je)):p("",!0),n.row.exportStatus==="SUCCESS"?(d(),g("div",We,u(n.row.fileSize)+u(n.row.fileSizeUnit),1)):p("",!0)])]),n.row.exportStatus==="FAILED"?(d(),g("div",qe)):p("",!0),n.row.exportStatus==="IN_PROGRESS"?(d(),x(de,{key:1,percentage:+n.row.exportProgress},null,8,["percentage"])):p("",!0)]),_:1},8,["label"]),o(a,{prop:"exportFromName",label:e.$t("data_export.export_obj"),width:"200"},null,8,["label"]),o(a,{prop:"exportTime",width:"180",label:e.$t("data_export.export_time")},{default:l(n=>[m("span",null,u(oe(n.row.exportTime)),1)]),_:1},8,["label"]),o(a,{prop:"exportFromType",width:"120",label:e.$t("data_export.export_from")},{default:l(n=>[n.row.exportFromType==="dataset"?(d(),g("span",Xe,u(s(t)("data_set.data_set")),1)):p("",!0),n.row.exportFromType==="chart"?(d(),g("span",Ke,u(s(t)("data_set.view")),1)):p("",!0),n.row.exportFromType==="data_filling"?(d(),g("span",Qe,u(s(t)("data_fill.data_fill")),1)):p("",!0)]),_:1},8,["label"]),z(o(a,{prop:"orgName",label:s(t)("data_set.organization"),width:"200"},null,8,["label"]),[[De,s(X)]]),o(a,{fixed:"right",prop:"operate",width:"90",label:e.$t("commons.operating")},{default:l(n=>[o(T,{effect:"dark",content:s(t)("data_set.download"),placement:"top"},{default:l(()=>[n.row.exportStatus==="SUCCESS"?(d(),x(s(v),{key:0,text:"",onClick:$=>ne(n.row)},{icon:l(()=>[o(i,null,{default:l(()=>[o(S,{name:"dv-preview-download"},{default:l(()=>[o(s(R),{class:"svg-icon"})]),_:1})]),_:1})]),_:2},1032,["onClick"])):p("",!0)]),_:2},1032,["content"]),o(T,{effect:"dark",content:s(t)("data_set.re_export"),placement:"top"},{default:l(()=>[n.row.exportStatus==="FAILED"?(d(),x(s(v),{key:0,text:"",onClick:$=>se(n.row)},{icon:l(()=>[o(S,{name:"icon_refresh_outlined"},{default:l(()=>[o(s(Ae),{class:"svg-icon"})]),_:1})]),_:2},1032,["onClick"])):p("",!0)]),_:2},1032,["content"]),o(T,{effect:"dark",content:s(t)("data_set.delete"),placement:"top"},{default:l(()=>[o(s(v),{text:"",onClick:$=>re(n.row)},{icon:l(()=>[o(S,{name:"de-delete"},{default:l(()=>[o(s(B),{class:"svg-icon"})]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["content"])]),_:1},8,["label"])]),_:1},8,["data"])],2)]),_:1},8,["title","modelValue"])),[[_e,D.value]]),o(pe,{title:s(t)("data_set.reason_for_failure"),modelValue:b.value,"onUpdate:modelValue":r[3]||(r[3]=n=>b.value=n),width:"30%"},{footer:l(()=>[m("span",Ye,[o(s(v),{type:"primary",onClick:r[2]||(r[2]=n=>b.value=!1)},{default:l(()=>[E(u(s(t)("data_set.closure")),1)]),_:1})])]),default:l(()=>[m("span",null,u(I.value),1)]),_:1},8,["title","modelValue"])],64)}}});export{St as _};
