import{a as te}from"./index-0.0.0-dataease.js";import{y as ae,j as oe,_ as re,e as ne}from"./index-0.0.0-dataease2.js";import{E as se,a as le,b as ie}from"./el-dropdown-menu-0.0.0-dataease.js";import"./el-popper-0.0.0-dataease.js";import"./el-dropdown-item-0.0.0-dataease.js";import{d as ce}from"./dv-folder-0.0.0-dataease.js";import{i as de}from"./icon_dashboard-0.0.0-dataease.js";import{i as P}from"./icon_right_outlined-0.0.0-dataease.js";import{i as ue}from"./icon_search-outline_outlined-0.0.0-dataease.js";import{d as me,a as pe}from"./dv-sort-desc-0.0.0-dataease.js";import{d as ve,r as f,ai as _e,m as fe,w as he,ak as ge,o as be,f as i,M as m,k as r,i as s,j as d,N as x,a0 as g,Z as D,aa as S,V as M,a9 as ke,a7 as L,g as T,a6 as ye}from"./vue-0.0.0-dataease.js";import{d as we}from"./dvMain-0.0.0-dataease.js";import{t as Ce}from"./treeSortUtils-0.0.0-dataease.js";import{i as De}from"./interactive-0.0.0-dataease.js";import Te from"./DashboardCell-0.0.0-dataease.js";import{s as Ne}from"./index-0.0.0-dataease27.js";import{s as Ie}from"./index-0.0.0-dataease53.js";import"./index-0.0.0-dataease24.js";import"./index-0.0.0-dataease54.js";import{d as k}from"./lodash-0.0.0-dataease.js";import{_ as xe}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./index-0.0.0-dataease4.js";import"./dropdown-0.0.0-dataease.js";import"./refs-0.0.0-dataease.js";import"./chart-0.0.0-dataease.js";import"./formatter-0.0.0-dataease.js";import"./dataVisualization-0.0.0-dataease2.js";import"./util-0.0.0-dataease.js";import"./util-0.0.0-dataease2.js";import"./chart-0.0.0-dataease2.js";import"./app-0.0.0-dataease.js";import"./antv-0.0.0-dataease.js";import"./extends-0.0.0-dataease.js";import"./sysParameter-0.0.0-dataease.js";import"./TableTooltip-0.0.0-dataease.js";import"./el-col-0.0.0-dataease.js";import"./row-0.0.0-dataease.js";import"./el-row-0.0.0-dataease.js";import"./_commonjs-dynamic-modules-0.0.0-dataease.js";import"./appearance-0.0.0-dataease.js";import"./font-0.0.0-dataease.js";import"./dataVisualization-0.0.0-dataease.js";import"./dataset-0.0.0-dataease.js";import"./datasource-0.0.0-dataease.js";import"./index-0.0.0-dataease23.js";const Se={class:"mobile-dashboard"},Me={key:0,class:"direct-name-arr"},Le={class:"label primary-name"},Ve=["onClick"],Ee={key:0,class:"dashboard-cell-group_filter"},Be={key:0,class:"ed-dropdown-menu__item--divided"},Fe=ve({__name:"index",emits:["hiddenTabbar","setLoading"],setup(Oe,{emit:R}){const U=f(!1),W=f(!1),p=f([]),a=f([]),u=f([]),v=f(""),V=De(),E=we(),{dvInfo:N}=_e(E),{wsCache:l}=te("sessionStorage"),{t:y}=oe(),B=(e,o)=>{const t=e.shift();return o.reduce((c,_)=>{if(t&&_.id===t){if(!e.length)return _.children||[];c=B([...e],_.children||[])||[]}return c},[])};let b=[];const z=fe(()=>u.value.length?B([...u.value],p.value):p.value),F=R,A=()=>{a.value.pop(),v.value=a.value[a.value.length-1],u.value.pop(),a.value.length&&(p.value=k(b),F("hiddenTabbar",!1))},J=()=>{a.value=[],u.value=[],v.value=""},Z=ke(),G=e=>{l.set("directName",a.value),l.set("activeDirectName",v.value),l.set("activeTabbar","direct"),l.set("directId",u.value),Z.push({path:"/panel/mobile",query:{dvId:e.id}})},w=f(""),h=f("time_desc"),H=[{name:"按创建时间升序",value:"time_asc"},{name:"按创建时间降序",value:"time_desc",divided:!0},{name:"按照名称升序",value:"name_asc"},{name:"按照名称降序",value:"name_desc"}],O=e=>{p.value=Ce(k(b),e),h.value=e},$=(e,o)=>e.filter(t=>{var c,_;return(c=t.name)!=null&&c.toLocaleLowerCase().includes(o.toLocaleLowerCase())?!0:(_=t.children)!=null&&_.length?(t.children=$(t.children,o),!!t.children.length):!1});he(w,e=>{p.value=$(k(b),e)});const K=e=>{if(w.value="",e.leaf){F("hiddenTabbar",!0),G(e);return}a.value.push(e.name),v.value=e.name,u.value.push(e.id)},Q=e=>{e!==u.value.length-1&&(u.value=u.value.slice(0,e+1),a.value=a.value.slice(0,e+1),v.value=a.value[a.value.length-1])},I=e=>e.filter(o=>{var t,c;return(t=o.children)!=null&&t.length&&(o.children=I(o.children)),o.extraFlag===1||((c=o.children)==null?void 0:c.length)}),X=async()=>{const e={busiFlag:"dashboard"};await V.setInteractive(e);const o=V.getPanel,t=o.treeNodes;if(W.value=o.rootManage,U.value=o.anyManage,N.value&&N.value.id&&!JSON.stringify(t).includes(N.value.id)&&E.resetDvInfo(),t.length&&t[0].id==="0"&&t[0].name==="root"){p.value=I(t[0].children||[]),b=k(p.value),j();return}p.value=I(t),b=k(p.value),j()},j=()=>{const e=l.get("mobile-sort-type");O(e||h.value)};return ge(()=>{l.set("mobile-sort-type",h.value)}),be(()=>{X(),v.value=l.get("activeDirectName"),!(l.get("activeTabbar")!=="direct"||!v.value)&&(a.value=l.get("directName"),u.value=l.get("directId"),l.set("directName",[]),l.set("activeDirectName",""),l.set("directId",[]),l.set("activeTabbar",""))}),(e,o)=>{const t=re,c=ne,_=ae,q=le,Y=ie,ee=se;return i(),m("div",Se,[r(d(Ne),null,{default:s(()=>[r(d(Ie),{"safe-area-inset-top":"",title:v.value||d(y)("work_branch.dashboard"),"left-arrow":!!v.value,onClickLeft:A},null,8,["title","left-arrow"]),a.value.length?(i(),m("div",Me,[(i(),m("div",{onClick:J,key:d(y)("work_branch.dashboard")},[x("span",Le,L(d(y)("work_branch.dashboard")),1),r(c,null,{default:s(()=>[r(t,{name:"icon_right_outlined"},{default:s(()=>[r(d(P),{class:"svg-icon"})]),_:1})]),_:1})])),(i(!0),m(D,null,S([...a.value],(n,C)=>(i(),m("div",{onClick:$e=>Q(C),key:n},[x("span",{class:M(["label ellipsis",C!==a.value.length-1&&"primary-name"])},L(n),3),C!==a.value.length-1?(i(),T(c,{key:0},{default:s(()=>[r(t,{name:"icon_right_outlined"},{default:s(()=>[r(d(P),{class:"svg-icon"})]),_:1})]),_:1})):g("",!0)],8,Ve))),128))])):g("",!0)]),_:1}),x("div",{class:M([!!a.value.length&&"dashboard-cell-group-tab","dashboard-cell-group"])},[a.value.length?g("",!0):(i(),m("div",Ee,[r(_,{placeholder:d(y)("commons.search"),modelValue:w.value,"onUpdate:modelValue":o[0]||(o[0]=n=>w.value=n),clearable:"",class:"search-bar"},{prefix:s(()=>[r(c,null,{default:s(()=>[r(t,{name:"icon_search-outline_outlined"},{default:s(()=>[r(d(ue),{class:"svg-icon"})]),_:1})]),_:1})]),_:1},8,["placeholder","modelValue"]),r(ee,{onCommand:O,trigger:"click"},{dropdown:s(()=>[r(Y,{style:{width:"246px"}},{default:s(()=>[(i(),m(D,null,S(H,n=>(i(),m(D,{key:n.value},[r(q,{class:M(["ed-select-dropdown__item",n.value===h.value&&"selected"]),command:n.value},{default:s(()=>[ye(L(n.name),1)]),_:2},1032,["class","command"]),n.divided?(i(),m("li",Be)):g("",!0)],64))),64))]),_:1})]),default:s(()=>[r(c,{class:"filter-icon-span"},{default:s(()=>[h.value.includes("asc")?(i(),T(t,{key:0,name:"dv-sort-asc",class:"opt-icon"},{default:s(()=>[r(d(me),{class:"svg-icon opt-icon"})]),_:1})):g("",!0),h.value.includes("desc")?(i(),T(t,{key:1,name:"dv-sort-desc",class:"opt-icon"},{default:s(()=>[r(d(pe),{class:"svg-icon opt-icon"})]),_:1})):g("",!0)]),_:1})]),_:1})])),(i(!0),m(D,null,S(z.value,n=>(i(),T(Te,{key:n.id,onClick:C=>K(n),label:n.name,nextlevel:!n.leaf,"prefix-icon":n.leaf?d(de):d(ce)},null,8,["onClick","label","nextlevel","prefix-icon"]))),128))],2)])}}});const Bt=xe(Fe,[["__scopeId","data-v-70febf93"]]);export{Bt as default};
