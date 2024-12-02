import{p as Z,b as ze,au as De}from"./index-0.0.0-dataease.js";import"./el-popper-0.0.0-dataease.js";import{E as Ae}from"./el-popover-0.0.0-dataease.js";import{E as Me}from"./el-divider-0.0.0-dataease.js";import{E as Be}from"./el-date-picker-0.0.0-dataease.js";import{j as He,d as $,w as y,_ as Le,n as Ne,y as je}from"./index-0.0.0-dataease2.js";import{E as Oe}from"./el-checkbox-0.0.0-dataease.js";import{E as Ze}from"./el-switch-0.0.0-dataease.js";import{d as We,r as _,_ as Fe,w as Ge,m as W,ab as Je,f as c,g as T,i as p,U as Ke,k as v,j as u,a6 as R,a7 as h,a0 as w,M as k,N as d,aw as Qe,V as M,ac as B,n as ue}from"./vue-0.0.0-dataease.js";import{u as Xe,i as Ye}from"./share-0.0.0-dataease.js";import{i as et}from"./icon_admin_outlined-0.0.0-dataease.js";import{a as tt,s as ot,S as at}from"./ShareTicket-0.0.0-dataease.js";import{u as st}from"./index-0.0.0-dataease16.js";import{_ as nt}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./lodash-0.0.0-dataease.js";import"./index-0.0.0-dataease4.js";import"./dropdown-0.0.0-dataease.js";import"./dayjs.min-0.0.0-dataease.js";import"./arrays-0.0.0-dataease.js";import"./index-0.0.0-dataease15.js";import"./index-0.0.0-dataease5.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./el-table-column-0.0.0-dataease.js";import"./el-tag-0.0.0-dataease.js";import"./el-tooltip-0.0.0-dataease.js";import"./icon_left_outlined-0.0.0-dataease.js";import"./de-copy-0.0.0-dataease.js";import"./icon_refresh_outlined-0.0.0-dataease.js";import"./dv-info-0.0.0-dataease.js";import"./icon_delete-trash_outlined-0.0.0-dataease.js";import"./icon_edit_outlined-0.0.0-dataease.js";import"./icon_add_outlined-0.0.0-dataease.js";const rt={class:"share-title share-padding"},lt={class:"open-share flex-align-center share-padding"},it={key:0,class:"custom-link-line share-padding"},dt={key:1,class:"exp-container share-padding"},ct={class:"checkbox-span"},ut={class:"inline-share-item-picker"},pt={key:1,class:"exp-error"},ht={key:2,class:"pwd-container share-padding"},mt={class:"checkbox-span"},ft={key:0,class:"auto-pwd-container"},_t={key:1,class:"inline-share-item"},vt={class:"share-pwd-opt"},wt={key:4,class:"share-foot share-padding"},kt={key:1,class:"share-container"},bt={class:"share-title share-padding"},gt={class:"open-share flex-align-center share-padding"},yt={key:2,class:"share-ticket-container"},xt=We({__name:"ShareVisualHead",props:{resourceId:Z.string.def(""),resourceType:Z.string.def(""),weight:Z.number.def(0)},setup(pe,{expose:he}){const F=Xe(),G=ze(),{toClipboard:J}=st(),{t:a}=He(),g=pe,E=_(!1),x=_(null),H=_(),L=_(),K=_(null),S=_(!1),b=_(!1),i=_(!1),Q=_(""),z=_(!1),q=_(!1),I=_(null),P=_(!1),s=Fe({detailInfo:{id:"",uuid:"",pwd:"",exp:0,autoPwd:!0}});Ge(()=>g.resourceId,()=>{E.value=!1});const X=async()=>{if(!i.value){E.value=!1;return}if(V.value&&!j())return;const e=ie(),t=await de();if(e&&t){E.value=!1;return}},me=e=>{!E.value||e.target.closest('[class*="share-popover"]')||X()},fe=()=>{E.value||(P.value=!1,E.value=!0)},_e=W(()=>`${a("work_branch.open_link_hint")}${g.resourceType==="dashboard"?a("work_branch.dashboard"):a("work_branch.big_data_screen")}`),Y=W(()=>F.getShareDisable),V=W(()=>F.getSharePeRequire),ve=async()=>{if(i.value)try{if(O("link-uuid-error-msg")){y.warning(a("work_branch.error_link_hint"));return}if(b.value&&!s.detailInfo.autoPwd&&O("link-pwd-error-msg")){y.warning(a("work_branch.error_password_hint"));return}if(V.value&&!j())return;te(),await J(Q.value),y.success(a("common.copy_success"))}catch{y.warning(a("common.copy_unsupported"))}else y.warning(a("common.copy_unsupported"));X()},we=e=>e.getTime()<new Date().getTime(),ke=()=>{K.value=De.service({target:".share-dialog-container"})},be=()=>{var e;(e=K.value)==null||e.close()},ee=()=>{D(j)},D=e=>{ke();const o=`/share/detail/${g.resourceId}`;$.get({url:o}).then(n=>{s.detailInfo={...n.data},ge()}).finally(()=>{be(),e&&e()})},ge=()=>{s.detailInfo.id&&s.detailInfo.uuid?(i.value=!0,te(),b.value=!!s.detailInfo.pwd,S.value=!!s.detailInfo.exp):(i.value=!1,b.value=!1,S.value=!1)},ye=()=>{const t=`/share/switcher/${g.resourceId}`;$.post({url:t}).then(()=>{D(null)})},te=()=>{Q.value=oe()+s.detailInfo.uuid},oe=()=>{let e="/";if(G.baseUrl)e=G.baseUrl+"#";else{const t=window.location.href;e=t.substring(0,t.indexOf("#")+1)}return(e.includes("oidcbi/")||e.includes("casbi/"))&&(e=e.replace("oidcbi/",""),e=e.replace("casbi/","")),e+tt},xe=e=>{let t=0;if(e){const o=new Date;o.setTime(o.getTime()+3600*1e3),t=o.getTime(),s.detailInfo.exp=t}re(),ae(t)},ae=e=>{if(S.value&&e<new Date().getTime()){z.value=!0;return}z.value=!1;const t=g.resourceId,o="/share/editExp",n={resourceId:t,exp:e};$.post({url:o,data:n}).then(()=>{D(null)})},Ie=e=>{let t="";e&&(t=ne()),le(),N(t,!0)},se=()=>{const e=ne();N(e,!0)},N=(e,t)=>{const o=g.resourceId,n="/share/editPwd",l={resourceId:o,pwd:e,autoPwd:t};$.post({url:n,data:l}).then(()=>{D(null)})},ne=()=>{const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";let o="";const n="!@#$%^&*()_+";let l=!1;for(let r=0;r<10;r++)r===0?o+=t.charAt(Math.floor(Math.random()*t.length)):!l&&r<10-2?(o+=n.charAt(Math.floor(Math.random()*n.length)),l=!0):o+=t.charAt(Math.floor(Math.random()*t.length));return o=o.split("").sort(()=>.5-Math.random()).join(""),o},j=()=>{if(i.value&&V.value){const e=re(),t=le();return e&&t}return!0},re=()=>!V.value||S.value?(A(null,H),!0):(A(a("common.required"),H),!1),le=()=>!V.value||b.value?(A(null,L),!0):(A(a("common.required"),L),!1),ie=()=>{if(!i.value||!b.value||s.detailInfo.autoPwd)return C(null,x),!0;const e=s.detailInfo.pwd;if(!e)return C(a("work_branch.password_null_hint"),x),!1;const t=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{4,10}$/;return new RegExp(t).test(e)?(C(null,x),N(e,!1),!0):(C(a("work_branch.password_hint"),x),!1)},A=(e,t,o)=>{if(!t.value)return;o=o||"checkbox-span-require";const n=`.${o}`,l=t.value.$el;if(e){l.style.color="red",l.children[0].children[1].style.borderColor="red";const r=l.children[1].children[0].querySelector(n);if(r)r.innerText=e;else{const m=document.createElement("span");m.className=o,m.innerText=e,l.children[1].children[0].appendChild(m)}}else{l.style=null,l.children[0].children[1].style.borderColor=null;const r=l.children[1].children[0].querySelector(n);r&&l.children[1].children[0].removeChild(r)}},C=(e,t,o)=>{o=o||"link-pwd-error-msg";const n=`.${o}`,l=t||x;if(!l.value)return;const r=l.value.input;if(e){r.style.color="red",r.style.borderColor="red",r.parentElement.style["box-shadow"]="0 0 0 1px red inset";const m=r.parentElement.querySelector(n);if(m)m.innerText=e;else{const U=document.createElement("div");U.className=o,U.innerText=e,r.parentElement.appendChild(U)}}else{r.style=null,r.style.borderColor=null;const m=r.parentElement.querySelector(n);m&&(r.parentElement.style=null,r.parentElement.removeChild(m))}},O=e=>{var t;return(t=document.getElementsByClassName(e))==null?void 0:t.length},Ce=e=>{e?(C(null,x),se()):(s.detailInfo.pwd="",ue(()=>{x.value.input.focus()}))},Ee=async()=>{if(i.value&&b.value){if(!s.detailInfo.autoPwd&&O("link-pwd-error-msg")){y.warning(a("work_branch.error_password_hint"));return}try{await J(s.detailInfo.pwd),y.success(a("common.copy_success"))}catch{y.warning(a("common.copy_unsupported"))}}else y.warning(a("common.copy_unsupported"))},Ve=()=>{q.value=!0,ue(()=>{I!=null&&I.value&&I.value.input.focus()})},de=async()=>{const e=s.detailInfo.uuid,t="link-uuid-error-msg";if(!e)return C(a("commons.cannot_be_null"),I,t),!1;const n=/^[a-zA-Z0-9]{8,16}$/.test(e);if(!n)C(a("work_branch.uuid_checker"),I,t);else{const l=await Se(e);return C(l,I,t),!l}return n},Se=async e=>{const t="/share/editUuid",o={resourceId:g.resourceId,uuid:e};return(await $.post({url:t,data:o})).data},ce=async()=>{const e=await de();q.value=!e},qe=()=>{P.value=!0},Pe=()=>{P.value=!1},Te=e=>{s.detailInfo.ticketRequire=e};return he({execute:()=>{ee()}}),(e,t)=>{const o=Le,n=Ne,l=Ze,r=je,m=Oe,U=Be,Re=Me,Ue=Ae,$e=Je("click-outside");return c(),T(Ue,{visible:E.value,title:"",width:"480",placement:"bottom-end","show-arrow":!1,"popper-class":`share-popover ${P.value?"share-ticket-popover":""}`,onShow:ee},{reference:p(()=>[g.weight>=7?Ke((c(),T(n,{key:0,secondary:"",onClick:fe},{icon:p(()=>[v(o,{name:"icon_share-label_outlined"},{default:p(()=>[v(u(Ye),{class:"svg-icon"})]),_:1})]),default:p(()=>[R(" "+h(u(a)("visualization.share")),1)]),_:1})),[[$e,me]]):w("",!0)]),default:p(()=>[Y.value?(c(),k("div",kt,[d("div",bt,h(u(a)("work_branch.public_link_share")),1),d("div",gt,[d("span",null,h(u(a)("work_branch.cannot_share_link")),1)])])):(c(),k("div",{key:0,class:M(["share-container",{"hidden-link-container":P.value}])},[d("div",rt,h(u(a)("work_branch.public_link_share")),1),d("div",lt,[v(l,{size:"small",modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=f=>i.value=f),onChange:ye},null,8,["modelValue"]),R(" "+h(_e.value),1)]),i.value?(c(),k("div",it,[v(r,{ref_key:"linkUuidRef",ref:I,placeholder:"",class:M(!q.value&&"maxW380"),modelValue:s.detailInfo.uuid,"onUpdate:modelValue":t[1]||(t[1]=f=>s.detailInfo.uuid=f),disabled:!q.value,onBlur:ce},Qe({_:2},[q.value?void 0:{name:"prefix",fn:p(()=>[R(h(oe()),1)]),key:"0"}]),1032,["class","modelValue","disabled"]),q.value?(c(),T(n,{key:0,text:"",onClick:B(ce,["stop"])},{default:p(()=>[R(h(u(a)("components.complete")),1)]),_:1})):(c(),T(n,{key:1,onClick:B(Ve,["stop"]),size:"default",plain:""},{icon:p(()=>[v(o,{name:"icon_admin_outlined"},{default:p(()=>[v(u(et),{class:"svg-icon"})]),_:1})]),_:1}))])):w("",!0),i.value?(c(),k("div",dt,[v(m,{ref_key:"expCheckbox",ref:H,disabled:!i.value,modelValue:S.value,"onUpdate:modelValue":t[2]||(t[2]=f=>S.value=f),onChange:xe},{default:p(()=>[d("div",ct,[d("span",null,h(u(a)("visualization.over_time")),1),d("span",{class:M(["pe-require",{"pe-tips-hidden":!V.value}])},t[7]||(t[7]=[d("span",null,"*",-1)]),2)])]),_:1},8,["disabled","modelValue"]),d("div",ut,[s.detailInfo.exp?(c(),T(U,{key:0,clearable:!1,size:"small",class:"share-exp-picker",modelValue:s.detailInfo.exp,"onUpdate:modelValue":t[3]||(t[3]=f=>s.detailInfo.exp=f),type:"datetime",teleported:!1,placeholder:"",shortcuts:u(ot),onChange:ae,"disabled-date":we,"value-format":"x"},null,8,["modelValue","shortcuts"])):w("",!0),z.value?(c(),k("span",pt,h(u(a)("work_branch.share_time_limit")),1)):w("",!0)])])):w("",!0),i.value?(c(),k("div",ht,[v(m,{ref_key:"pwdCheckbox",ref:L,disabled:!i.value,modelValue:b.value,"onUpdate:modelValue":t[4]||(t[4]=f=>b.value=f),onChange:Ie},{default:p(()=>[d("div",mt,[d("span",null,h(u(a)("visualization.passwd_protect")),1),d("span",{class:M(["pe-require",{"pe-tips-hidden":!V.value}])},t[8]||(t[8]=[d("span",null,"*",-1)]),2)])]),_:1},8,["disabled","modelValue"]),b.value?(c(),k("div",ft,[v(m,{disabled:!i.value,modelValue:s.detailInfo.autoPwd,"onUpdate:modelValue":t[5]||(t[5]=f=>s.detailInfo.autoPwd=f),onChange:Ce,label:u(a)("visualization.auto_pwd")},null,8,["disabled","modelValue","label"])])):w("",!0),b.value?(c(),k("div",_t,[v(r,{ref_key:"pwdRef",ref:x,modelValue:s.detailInfo.pwd,"onUpdate:modelValue":t[6]||(t[6]=f=>s.detailInfo.pwd=f),readonly:s.detailInfo.autoPwd,size:"small",onBlur:ie},{append:p(()=>[d("div",vt,[s.detailInfo.autoPwd?(c(),k("div",{key:0,onClick:B(se,["stop"]),class:"share-reset-container"},[d("span",null,h(u(a)("commons.reset")),1)])):w("",!0),d("div",{onClick:B(Ee,["stop"]),class:"share-reset-container"},[d("span",null,h(u(a)("commons.copy")),1)])])]),_:1},8,["modelValue","readonly"])])):w("",!0)])):w("",!0),i.value?(c(),T(Re,{key:3,class:"share-divider"})):w("",!0),i.value?(c(),k("div",wt,[v(n,{secondary:"",onClick:qe},{default:p(()=>[R(h(u(a)("work_branch.ticket_setting")),1)]),_:1}),v(n,{disabled:!i.value||z.value,type:"primary",onClick:ve},{default:p(()=>[R(h(u(a)("visualization.copy_link")),1)]),_:1},8,["disabled"])])):w("",!0)],2)),!Y.value&&i.value&&P.value?(c(),k("div",yt,[v(at,{uuid:s.detailInfo.uuid,"resource-id":g.resourceId,"ticket-require":s.detailInfo.ticketRequire,onRequireChange:Te,onClose:Pe},null,8,["uuid","resource-id","ticket-require"])])):w("",!0)]),_:1},8,["visible","popper-class"])}}});const lo=nt(xt,[["__scopeId","data-v-8b0b1d16"]]);export{lo as default};
