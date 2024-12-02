import{a as we}from"./chart-0.0.0-dataease2.js";import{d as Le,c as Ie,C as G}from"./dvMain-0.0.0-dataease.js";import{useAppStoreWithOut as xe}from"./app-0.0.0-dataease.js";import{V as Ce}from"./ViewTrackBar-0.0.0-dataease.js";import{d as Oe,ai as De,t as Ee,r as A,_ as Be,s as be,m as je,o as Fe,a as Ve,f as W,M as ie,k as Me,W as Ne,g as qe,n as Re}from"./vue-0.0.0-dataease.js";import{p as ze}from"./util-0.0.0-dataease2.js";import Je from"./ChartError-0.0.0-dataease.js";import{B as Ge}from"./chart-0.0.0-dataease.js";import{r as ne,d as We,e as He}from"./canvasStyle-0.0.0-dataease.js";import{J as Ue}from"./index-0.0.0-dataease2.js";import{J as Ze}from"./canvasUtils-0.0.0-dataease.js";import{u as Ke}from"./index-0.0.0-dataease.js";import{x as Qe,d as Xe}from"./lodash-0.0.0-dataease.js";import{_ as Ye}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./dataVisualization-0.0.0-dataease2.js";import"./util-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./formatter-0.0.0-dataease.js";import"./antv-0.0.0-dataease.js";import"./extends-0.0.0-dataease.js";import"./sysParameter-0.0.0-dataease.js";import"./TableTooltip-0.0.0-dataease.js";import"./el-col-0.0.0-dataease.js";import"./row-0.0.0-dataease.js";import"./el-row-0.0.0-dataease.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./_commonjs-dynamic-modules-0.0.0-dataease.js";import"./appearance-0.0.0-dataease.js";import"./font-0.0.0-dataease.js";import"./el-dropdown-menu-0.0.0-dataease.js";import"./index-0.0.0-dataease4.js";import"./dropdown-0.0.0-dataease.js";import"./refs-0.0.0-dataease.js";import"./el-popper-0.0.0-dataease.js";import"./el-dropdown-item-0.0.0-dataease.js";import"./translate-0.0.0-dataease.js";import"./eventBus-0.0.0-dataease.js";import"./dataVisualization-0.0.0-dataease.js";import"./snapshot-0.0.0-dataease.js";const $e={class:"canvas-area"},oe=.01,et=Oe({__name:"ChartComponentG2Plot",props:{element:{type:Object,default(){return{propValue:null}}},view:{type:Object,default(){return{propValue:null}}},showPosition:{type:String,required:!1,default:"canvas"},scale:{type:Number,required:!1,default:1},terminal:{type:String,default:"pc"},suffixId:{type:String,required:!1,default:"common"}},emits:["onPointClick","onChartClick","onDrillFilters","onJumpClick","resetLoading"],setup(re,{expose:le,emit:se}){const x=Le(),{nowPanelTrackInfo:F,nowPanelJumpInfo:b,mobileInPc:H,embeddedCallBack:ue,inMobile:U}=De(x),{emitter:L}=Ke(),C=re,T=se,ce=["bidirectional-bar"],de=["bar-range"],{view:l,showPosition:Z,scale:K,terminal:Q,suffixId:me}=Ee(C),V=A(!1),X=A(""),O=A(!1);A(!1);const n=Be({trackBarStyle:{position:"absolute",left:"50px",top:"50px"},linkageActiveParam:null,pointParam:null,data:{fields:[]}});let m=be({fields:[]});const D="container-"+Z.value+"-"+l.value.id+"-"+me.value,Y=A(null),fe=()=>{O.value=!1;try{t==null||t.setState("active",()=>!0,!1),t==null||t.setState("inactive",()=>!0,!1),t==null||t.setState("selected",()=>!0,!1)}catch{console.warn("clearLinkage error")}},pe=()=>{O.value=!1,t==null||t.render()},ve=()=>{O.value&&pe(),Re(()=>{$()})},$=()=>{O.value=!0,t==null||t.setState("active",e=>{if(Array.isArray(e))return!1;if(ee(e))return!0}),t==null||t.setState("inactive",e=>{if(Array.isArray(e))return!1;if(!ee(e))return!0})},ee=e=>ce.includes(l.value.type)?n.linkageActiveParam.name===e.field:(de.includes(l.value.type)||n.linkageActiveParam.name===e.name||n.linkageActiveParam.name==="NO_DATA"&&!e.name)&&n.linkageActiveParam.category===e.category,ge=async(e,a)=>{if(e.tableId||e.dataFrom==="template"){V.value=!1;const o=JSON.parse(JSON.stringify(e));we(o).then(async i=>{var r,u,p,v,h,k,y,P;i.code&&i.code!==0?(V.value=!0,X.value=i.msg,a==null||a()):(m.value=i==null?void 0:i.data,T("onDrillFilters",i==null?void 0:i.drillFilters),(r=i==null?void 0:i.drillFilters)!=null&&r.length?(f.value=((h=(v=(u=e.chartExtRequest)==null?void 0:u.drill)==null?void 0:v[((p=i==null?void 0:i.drillFilters)==null?void 0:p.length)-1].extra)==null?void 0:h.adcode)+"",(k=f.value)!=null&&k.startsWith(I.value)||(f.value=I.value+f.value)):f.value="",x.setViewDataDetails(e.id,i),!i.drill&&!((P=(y=i.chartExtRequest)==null?void 0:y.linkageFilters)!=null&&P.length)&&(x.setViewOriginData(e.id,m.value),L.emit("chart-data-change")),await j(i,a))}).catch(()=>{a==null||a()})}else["bubble-map","map","flow-map","heat-map"].includes(e.type)&&await j(e,a),a==null||a()};let c;const j=async(e,a)=>{if(!e)return;c=e;const o=Ue({...Qe(e,Xe(Ge)),data:m.value}),i=Ie.getChartView(e.render,e.type);switch(ne(We,o.customAttr,K.value,Q.value),ne(He,o.customStyle,K.value,Q.value),i.library){case G.L7_PLOT:await ke(o,i,a);break;case G.L7:await ye(o,i,a);break;case G.G2_PLOT:await he(o,i),a==null||a();break}};let t=null,M;const he=async(e,a)=>{M&&clearTimeout(M),M=setTimeout(async()=>{try{t==null||t.destroy(),t=await a.drawChart({chartObj:t,container:D,chart:e,scale:1,action:z,quadrantDefaultBaseline:Ae}),t==null||t.render(),O.value&&$()}catch(o){console.error("renderG2Plot error",o)}},300)},f=A(""),I=A("");xe();const N=A(null);let q;const ke=async(e,a,o)=>{let r=ze(e.customAttr).map.id;I.value=r.slice(0,3),f.value&&(I.value==="000"&&f.value.startsWith("000")?(I.value=f.value.slice(3),r=I.value):r=f.value),q&&clearTimeout(q),q=setTimeout(async()=>{t==null||t.destroy(),N.value&&(N.value.textContent=""),t=await a.drawChart({chartObj:t,container:D,chart:e,areaId:r,action:z}),o==null||o(),T("resetLoading")},500)};let R;const ye=async(e,a,o)=>{R&&clearTimeout(R),R=setTimeout(async()=>{t=await a.drawChart({chartObj:t,container:D,chart:e,action:z}),t==null||t.render(),o==null||o(),T("resetLoading")},500)},Pe=()=>{ue.value==="yes"&&J("pointClick")},Se=e=>{e.from==="map"&&L.emit("map-default-range",e),e.from==="word-cloud"&&L.emit("word-cloud-default-data-range",e),e.from==="gauge"&&L.emit("gauge-default-data",e),e.from==="liquid"&&L.emit("liquid-default-data",e)},z=e=>{if(e.from){Se(e);return}if(n.pointParam=e.data,Pe(),n.linkageActiveParam={category:n.pointParam.data.category?n.pointParam.data.category:"NO_DATA",name:n.pointParam.data.name?n.pointParam.data.name:"NO_DATA"},E.value.length<2)J(E.value[0]);else{const a={left:e.x-50,top:e.y+10};Ze(C.element,a,C.scale,E.value.length),n.trackBarStyle.left=a.left+"px",c.type==="symbolic-map"?n.trackBarStyle.top=e.y+10+"px":n.trackBarStyle.top=a.top+"px",Y.value.trackButtonClick()}},J=e=>{var h,k,y,P,_,w,S,d,te;const a=n.pointParam;if(!((h=a==null?void 0:a.data)!=null&&h.dimensionList))return;let o=n.pointParam.data.name;n.pointParam.data.dimensionList.length>1&&(o=n.pointParam.data.dimensionList[0].id);let i=n.pointParam.data.name;if(n.pointParam.data.dimensionList.length>1){const g=[];if(c.drill){const s=c.drillFields[c.drillFilters.length];g.push(s.id)}c.type.includes("chart-mix")?((P=(y=(k=m.value)==null?void 0:k.left)==null?void 0:y.fields)==null||P.forEach(s=>{g.includes(s.id)||g.push(s.id)}),(S=(w=(_=m.value)==null?void 0:_.right)==null?void 0:w.fields)==null||S.forEach(s=>{g.includes(s.id)||g.push(s.id)})):(te=(d=m.value)==null?void 0:d.fields)==null||te.forEach(s=>{g.includes(s.id)||g.push(s.id)});for(let s=0;s<g.length;s++){const ae=g[s],_e=l.value.id+"#"+ae;if(b.value[_e]){i=ae;break}}}let r=n.pointParam.data.quotaList;c.type==="bar-range"?r=n.pointParam.data.dimensionList:r[0].value=n.pointParam.data.value;const u={option:"linkage",name:o,viewId:l.value.id,dimensionList:n.pointParam.data.dimensionList,quotaList:r},p={option:"jump",name:i,viewId:l.value.id,dimensionList:n.pointParam.data.dimensionList,quotaList:r},v={option:"pointClick",name:o,viewId:l.value.id,dimensionList:n.pointParam.data.dimensionList,quotaList:r};switch(e){case"pointClick":T("onPointClick",v);break;case"linkageAndDrill":x.addViewTrackFilter(u),T("onChartClick",a);break;case"drill":T("onChartClick",a);break;case"linkage":ve(),x.addViewTrackFilter(u);break;case"jump":if(H.value&&!U.value)return;T("onJumpClick",p);break}},E=je(()=>{var a,o,i,r,u,p,v,h,k,y,P;let e=[];if(!["multiplexing","viewDialog"].includes(Z.value)){let _=0,w=0;(a=c==null?void 0:c.type)!=null&&a.includes("chart-mix")?((r=(i=(o=m.value)==null?void 0:o.left)==null?void 0:i.fields)==null||r.forEach(S=>{const d=l.value.id+"#"+S.id;F.value[d]&&_++,b.value[d]&&w++}),(v=(p=(u=m.value)==null?void 0:u.right)==null?void 0:p.fields)==null||v.forEach(S=>{const d=l.value.id+"#"+S.id;F.value[d]&&_++,b.value[d]&&w++})):(k=(h=m.value)==null?void 0:h.fields)==null||k.forEach(S=>{const d=l.value.id+"#"+S.id;F.value[d]&&_++,b.value[d]&&w++}),w&&((y=l.value)!=null&&y.jumpActive)&&(!H.value||U.value)&&e.push("jump"),_&&((P=l.value)!=null&&P.linkageActive)&&e.push("linkage"),l.value.drillFields.length&&e.push("drill"),e.length===3&&C.element.actionSelection.linkageActive==="auto"?e=["jump","linkageAndDrill"]:e.length===2&&C.element.actionSelection.linkageActive==="auto"&&!e.includes("jump")&&(e=["linkageAndDrill"])}return e}),Ae=e=>{L.emit("quadrant-default-baseline",e)};le({calcData:ge,renderChart:j,trackMenu:E,clearLinkage:fe});let B;const Te=["map","bubble-map","flow-map","heat-map"];return Fe(()=>{const e=document.getElementById(D),{offsetWidth:a,offsetHeight:o}=e,i=[a,o];B=new ResizeObserver(([r]=[])=>{if(!Te.includes(l.value.type))return;const[u]=r.borderBoxSize||[],p=(u.inlineSize-i[0])/i[0],v=(u.blockSize-i[1])/i[1];Math.abs(p)<oe&&Math.abs(v)<oe||(t&&i[1]>1&&j(c),i[0]=u.inlineSize,i[1]=u.blockSize)}),B.observe(e)}),Ve(()=>{try{t==null||t.destroy(),B==null||B.disconnect()}catch(e){console.warn(e)}}),(e,a)=>(W(),ie("div",$e,[Me(Ce,{ref_key:"viewTrack",ref:Y,"track-menu":E.value,class:"track-bar",style:Ne(n.trackBarStyle),onTrackClick:J},null,8,["track-menu","style"]),V.value?(W(),qe(Je,{key:1,"err-msg":X.value},null,8,["err-msg"])):(W(),ie("div",{key:0,ref_key:"chartContainer",ref:N,class:"canvas-content",id:D},null,512))]))}});const Jt=Ye(et,[["__scopeId","data-v-ab44fe78"]]);export{Jt as default};
