import{E,a5 as ae,n as ie,e as de,z as be,Z as Ie,R as Ee}from"./index-0.0.0-dataease2.js";import{d as D,E as he,O as Ce,w as re}from"./index-0.0.0-dataease4.js";import{l as _e,x as Z,h as G,K as ye,P as Te,m as $e,i as X,$ as Fe,w as ke,y as ue}from"./index-0.0.0-dataease.js";import{c as Re,E as Se,d as De,a as ce,C as Oe,b as Pe,e as Ne,f as Ke,g as Be,F as Me,L as Ge}from"./dropdown-0.0.0-dataease.js";import{d as A,r as _,R as C,m as y,S as V,H as Ae,T as U,j as S,w as Le,p as P,e as b,f as O,g as L,i as v,k,aH as ze,aI as Ue,n as He,M as J,aw as Ye,a5 as H,V as q,a0 as Q,D as pe,N as Ve,q as Je,Z as We,W as je}from"./vue-0.0.0-dataease.js";import{c as fe}from"./refs-0.0.0-dataease.js";const Ze=_e({style:{type:Z([String,Array,Object])},currentTabId:{type:Z(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:Z(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:qe,ElCollectionItem:Qe,COLLECTION_INJECTION_KEY:x,COLLECTION_ITEM_INJECTION_KEY:Xe}=Re("RovingFocusGroup"),ee=Symbol("elRovingFocusGroup"),me=Symbol("elRovingFocusGroupItem"),xe={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},eo=(e,o)=>{if(o!=="rtl")return e;switch(e){case E.right:return E.left;case E.left:return E.right;default:return e}},oo=(e,o,a)=>{const t=eo(e.key,a);if(!(o==="vertical"&&[E.left,E.right].includes(t))&&!(o==="horizontal"&&[E.up,E.down].includes(t)))return xe[t]},no=(e,o)=>e.map((a,t)=>e[(t+o)%e.length]),oe=e=>{const{activeElement:o}=document;for(const a of e)if(a===o||(a.focus(),o!==document.activeElement))return},se="currentTabIdChange",le="rovingFocusGroup.entryFocus",to={bubbles:!1,cancelable:!0},ro=A({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:Ze,emits:[se,"entryFocus"],setup(e,{emit:o}){var a;const t=_((a=e.currentTabId||e.defaultCurrentTabId)!=null?a:null),d=_(!1),c=_(!1),s=_(null),{getItems:r}=C(x,void 0),p=y(()=>[{outline:"none"},e.style]),g=l=>{o(se,l)},w=()=>{d.value=!0},I=D(l=>{var f;(f=e.onMousedown)==null||f.call(e,l)},()=>{c.value=!0}),h=D(l=>{var f;(f=e.onFocus)==null||f.call(e,l)},l=>{const f=!S(c),{target:N,currentTarget:T}=l;if(N===T&&f&&!S(d)){const K=new Event(le,to);if(T==null||T.dispatchEvent(K),!K.defaultPrevented){const m=r().filter(F=>F.focusable),R=m.find(F=>F.active),$=m.find(F=>F.id===S(t)),M=[R,$,...m].filter(Boolean).map(F=>F.ref);oe(M)}}c.value=!1}),n=D(l=>{var f;(f=e.onBlur)==null||f.call(e,l)},()=>{d.value=!1}),i=(...l)=>{o("entryFocus",...l)};V(ee,{currentTabbedId:Ae(t),loop:U(e,"loop"),tabIndex:y(()=>S(d)?-1:0),rovingFocusGroupRef:s,rovingFocusGroupRootStyle:p,orientation:U(e,"orientation"),dir:U(e,"dir"),onItemFocus:g,onItemShiftTab:w,onBlur:n,onFocus:h,onMousedown:I}),Le(()=>e.currentTabId,l=>{t.value=l??null}),ye(s,le,i)}});function so(e,o,a,t,d,c){return P(e.$slots,"default")}var lo=G(ro,[["render",so],["__file","/Users/st/Desktop/vue/nxx-ui/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const ao=A({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:qe,ElRovingFocusGroupImpl:lo}});function io(e,o,a,t,d,c){const s=b("el-roving-focus-group-impl"),r=b("el-focus-group-collection");return O(),L(r,null,{default:v(()=>[k(s,ze(Ue(e.$attrs)),{default:v(()=>[P(e.$slots,"default")]),_:3},16)]),_:3})}var uo=G(ao,[["render",io],["__file","/Users/st/Desktop/vue/nxx-ui/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const co=A({components:{ElRovingFocusCollectionItem:Qe},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:a,loop:t,onItemFocus:d,onItemShiftTab:c}=C(ee,void 0),{getItems:s}=C(x,void 0),r=ae(),p=_(null),g=D(n=>{o("mousedown",n)},n=>{e.focusable?d(S(r)):n.preventDefault()}),w=D(n=>{o("focus",n)},()=>{d(S(r))}),I=D(n=>{o("keydown",n)},n=>{const{key:i,shiftKey:l,target:f,currentTarget:N}=n;if(i===E.tab&&l){c();return}if(f!==N)return;const T=oo(n);if(T){n.preventDefault();let m=s().filter(R=>R.focusable).map(R=>R.ref);switch(T){case"last":{m.reverse();break}case"prev":case"next":{T==="prev"&&m.reverse();const R=m.indexOf(N);m=t.value?no(m,R+1):m.slice(R+1);break}}He(()=>{oe(m)})}}),h=y(()=>a.value===S(r));return V(me,{rovingFocusGroupItemRef:p,tabIndex:y(()=>S(h)?0:-1),handleMousedown:g,handleFocus:w,handleKeydown:I}),{id:r,handleKeydown:I,handleFocus:w,handleMousedown:g}}});function po(e,o,a,t,d,c){const s=b("el-roving-focus-collection-item");return O(),L(s,{id:e.id,focusable:e.focusable,active:e.active},{default:v(()=>[P(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var fo=G(co,[["render",po],["__file","/Users/st/Desktop/vue/nxx-ui/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const W=Symbol("elDropdown"),{ButtonGroup:mo}=ie,vo=A({name:"ElDropdown",components:{ElButton:ie,ElButtonGroup:mo,ElScrollbar:Te,ElDropdownCollection:Se,ElTooltip:he,ElRovingFocusGroup:uo,ElOnlyChild:Ce,ElIcon:de,ArrowDown:$e},props:De,emits:["visible-change","click","command"],setup(e,{emit:o}){const a=pe(),t=X("dropdown"),{t:d}=be(),c=_(),s=_(),r=_(null),p=_(null),g=_(null),w=_(null),I=_(!1),h=[E.enter,E.space,E.down],n=y(()=>({maxHeight:Fe(e.maxHeight)})),i=y(()=>[t.m(m.value)]),l=ae().value,f=y(()=>e.id||l);function N(){T()}function T(){var u;(u=r.value)==null||u.onClose()}function K(){var u;(u=r.value)==null||u.onOpen()}const m=Ie();function R(...u){o("command",...u)}function $(){}function B(){const u=S(p);u==null||u.focus(),w.value=null}function M(u){w.value=u}function F(u){I.value||(u.preventDefault(),u.stopImmediatePropagation())}function ne(){o("visible-change",!0)}function Y(u){(u==null?void 0:u.type)==="keydown"&&p.value.focus()}function z(){o("visible-change",!1)}return V(W,{contentRef:p,role:y(()=>e.role),triggerId:f,isUsingKeyboard:I,onItemEnter:$,onItemLeave:B}),V("elDropdown",{instance:a,dropdownSize:m,handleClick:N,commandHandler:R,trigger:U(e,"trigger"),hideOnClick:U(e,"hideOnClick")}),{t:d,ns:t,scrollbar:g,wrapStyle:n,dropdownTriggerKls:i,dropdownSize:m,triggerId:f,triggerKeys:h,currentTabId:w,handleCurrentTabIdChange:M,handlerMainButtonClick:u=>{o("click",u)},handleEntryFocus:F,handleClose:T,handleOpen:K,handleBeforeShowTooltip:ne,handleShowTooltip:Y,handleBeforeHideTooltip:z,onFocusAfterTrapped:u=>{var j,te;u.preventDefault(),(te=(j=p.value)==null?void 0:j.focus)==null||te.call(j,{preventScroll:!0})},popperRef:r,contentRef:p,triggeringElementRef:c,referenceElementRef:s}}});function go(e,o,a,t,d,c){var s;const r=b("el-dropdown-collection"),p=b("el-roving-focus-group"),g=b("el-scrollbar"),w=b("el-only-child"),I=b("el-tooltip"),h=b("el-button"),n=b("arrow-down"),i=b("el-icon"),l=b("el-button-group");return O(),J("div",{class:q([e.ns.b(),e.ns.is("disabled",e.disabled)])},[k(I,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(s=e.referenceElementRef)==null?void 0:s.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,"show-arrow":!1,pure:"",persistent:e.persistent,onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Ye({content:v(()=>[k(g,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:v(()=>[k(p,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:v(()=>[k(r,null,{default:v(()=>[P(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:v(()=>[k(w,{id:e.triggerId,role:"button",tabindex:e.tabindex},{default:v(()=>[P(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","persistent","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(O(),L(l,{key:0},{default:v(()=>[k(h,H({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:v(()=>[P(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),k(h,H({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:v(()=>[k(i,{class:q(e.ns.e("icon"))},{default:v(()=>[k(n)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):Q("v-if",!0)],2)}var wo=G(vo,[["render",go],["__file","/Users/st/Desktop/vue/nxx-ui/packages/components/dropdown/src/dropdown.vue"]]);const bo=A({name:"DropdownItemImpl",components:{ElIcon:de},props:ce,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const a=X("dropdown"),{role:t}=C(W,void 0),{collectionItemRef:d}=C(Oe,void 0),{collectionItemRef:c}=C(Xe,void 0),{rovingFocusGroupItemRef:s,tabIndex:r,handleFocus:p,handleKeydown:g,handleMousedown:w}=C(me,void 0),I=fe(d,c,s),h=y(()=>t.value==="menu"?"menuitem":t.value==="navigation"?"link":"button"),n=D(i=>{const{code:l}=i;if(l===E.enter||l===E.space)return i.preventDefault(),i.stopImmediatePropagation(),o("clickimpl",i),!0},g);return{ns:a,itemRef:I,dataset:{[Pe]:""},role:h,tabIndex:r,handleFocus:p,handleKeydown:n,handleMousedown:w}}}),Io=["aria-disabled","tabindex","role"];function Eo(e,o,a,t,d,c){const s=b("el-icon");return O(),J(We,null,[e.divided?(O(),J("li",H({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):Q("v-if",!0),Ve("li",H({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=r=>e.$emit("clickimpl",r)),onFocus:o[1]||(o[1]=(...r)=>e.handleFocus&&e.handleFocus(...r)),onKeydown:o[2]||(o[2]=(...r)=>e.handleKeydown&&e.handleKeydown(...r)),onMousedown:o[3]||(o[3]=(...r)=>e.handleMousedown&&e.handleMousedown(...r)),onPointermove:o[4]||(o[4]=r=>e.$emit("pointermove",r)),onPointerleave:o[5]||(o[5]=r=>e.$emit("pointerleave",r))}),[e.icon?(O(),L(s,{key:0},{default:v(()=>[(O(),L(Je(e.icon)))]),_:1})):Q("v-if",!0),P(e.$slots,"default")],16,Io)],64)}var ho=G(bo,[["render",Eo],["__file","/Users/st/Desktop/vue/nxx-ui/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const ve=()=>{const e=C("elDropdown",{}),o=y(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},Co=A({name:"ElDropdownItem",components:{ElDropdownCollectionItem:Ne,ElRovingFocusItem:fo,ElDropdownItemImpl:ho},inheritAttrs:!1,props:ce,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:a}){const{elDropdown:t}=ve(),d=pe(),c=_(null),s=y(()=>{var n,i;return(i=(n=S(c))==null?void 0:n.textContent)!=null?i:""}),{onItemEnter:r,onItemLeave:p}=C(W,void 0),g=D(n=>(o("pointermove",n),n.defaultPrevented),re(n=>{var i;e.disabled?p(n):(r(n),n.defaultPrevented||(i=n.currentTarget)==null||i.focus())})),w=D(n=>(o("pointerleave",n),n.defaultPrevented),re(n=>{p(n)})),I=D(n=>{if(!e.disabled)return o("click",n),n.type!=="keydown"&&n.defaultPrevented},n=>{var i,l,f;if(e.disabled){n.stopImmediatePropagation();return}(i=t==null?void 0:t.hideOnClick)!=null&&i.value&&((l=t.handleClick)==null||l.call(t)),(f=t.commandHandler)==null||f.call(t,e.command,d,n)}),h=y(()=>({...e,...a}));return{handleClick:I,handlePointerMove:g,handlePointerLeave:w,textContent:s,propsAndAttrs:h}}});function _o(e,o,a,t,d,c){var s;const r=b("el-dropdown-item-impl"),p=b("el-roving-focus-item"),g=b("el-dropdown-collection-item");return O(),L(g,{disabled:e.disabled,"text-value":(s=e.textValue)!=null?s:e.textContent},{default:v(()=>[k(p,{focusable:!e.disabled},{default:v(()=>[k(r,H(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:v(()=>[P(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var ge=G(Co,[["render",_o],["__file","/Users/st/Desktop/vue/nxx-ui/packages/components/dropdown/src/dropdown-item.vue"]]);const yo=A({name:"ElDropdownMenu",props:Ke,setup(e){const o=X("dropdown"),{_elDropdownSize:a}=ve(),t=a.value,{focusTrapRef:d,onKeydown:c}=C(Ee,void 0),{contentRef:s,role:r,triggerId:p}=C(W,void 0),{collectionRef:g,getItems:w}=C(Be,void 0),{rovingFocusGroupRef:I,rovingFocusGroupRootStyle:h,tabIndex:n,onBlur:i,onFocus:l,onMousedown:f}=C(ee,void 0),{collectionRef:N}=C(x,void 0),T=y(()=>[o.b("menu"),o.bm("menu",t==null?void 0:t.value),o.m(e.effect)]),K=fe(s,g,d,I,N),m=D($=>{var B;(B=e.onKeydown)==null||B.call(e,$)},$=>{const{currentTarget:B,code:M,target:F}=$;if(B.contains(F),E.tab===M&&$.stopImmediatePropagation(),$.preventDefault(),F!==S(s)||!Me.includes(M))return;const Y=w().filter(z=>!z.disabled).map(z=>z.ref);Ge.includes(M)&&Y.reverse(),oe(Y)});return{size:t,rovingFocusGroupRootStyle:h,tabIndex:n,dropdownKls:T,role:r,triggerId:p,dropdownListWrapperRef:K,handleKeydown:$=>{m($),c($)},onBlur:i,onFocus:l,onMousedown:f}}}),To=["role","aria-labelledby"];function $o(e,o,a,t,d,c){return O(),J("ul",{ref:e.dropdownListWrapperRef,class:q(e.dropdownKls),style:je(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...s)=>e.onBlur&&e.onBlur(...s)),onFocus:o[1]||(o[1]=(...s)=>e.onFocus&&e.onFocus(...s)),onKeydown:o[2]||(o[2]=(...s)=>e.handleKeydown&&e.handleKeydown(...s)),onMousedown:o[3]||(o[3]=(...s)=>e.onMousedown&&e.onMousedown(...s))},[P(e.$slots,"default")],46,To)}var we=G(yo,[["render",$o],["__file","/Users/st/Desktop/vue/nxx-ui/packages/components/dropdown/src/dropdown-menu.vue"]]);const Ko=ke(wo,{DropdownItem:ge,DropdownMenu:we}),Bo=ue(ge),Mo=ue(we);export{Ko as E,Bo as a,Mo as b};
