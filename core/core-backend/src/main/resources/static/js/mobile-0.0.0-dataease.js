import{a as m,s as u,c,d as l,e as f}from"../assets/chunk/index-0.0.0-dataease.js";import{d,e as h,f as _,g,i as w,k as v,l as S}from"../assets/chunk/vue-0.0.0-dataease.js";import{_ as C,u as R,g as k,a as A,s as E}from"../assets/chunk/common-0.0.0-dataease.js";import{r as i,s as P}from"../assets/chunk/mobile-0.0.0-dataease.js";import{installDirective as I}from"../assets/chunk/index-0.0.0-dataease3.js";import{useUserStoreWithOut as O}from"../assets/chunk/user-0.0.0-dataease.js";import{u as W}from"../assets/chunk/index-0.0.0-dataease2.js";import{i as y}from"../assets/chunk/interactive-0.0.0-dataease.js";import{useAppearanceStoreWithOut as D}from"../assets/chunk/appearance-0.0.0-dataease.js";import"../assets/chunk/library-0.0.0-dataease.js";import"../assets/chunk/lodash-0.0.0-dataease.js";import"../assets/chunk/app-0.0.0-dataease.js";import"../assets/chunk/axios-0.0.0-dataease.js";import"../assets/chunk/echarts-0.0.0-dataease.js";import"../assets/chunk/tinymce-0.0.0-dataease.js";import"../assets/chunk/dataVisualization-0.0.0-dataease.js";import"../assets/chunk/dataset-0.0.0-dataease.js";import"../assets/chunk/datasource-0.0.0-dataease.js";import"../assets/chunk/font-0.0.0-dataease.js";import"../assets/chunk/antv-0.0.0-dataease.js";const U=d({__name:"App",setup(e){return(n,t)=>{const o=h("router-view");return _(),g(C,null,{default:w(()=>[v(o)]),_:1})}}}),b=D(),r=W(),{wsCache:B}=m(),a=O(),{start:L,done:N}=R(),V=y(),{loadStart:$,loadDone:j}=A(),q=["/login","/panel","/dvCanvas","/DashboardEmpty","/preview"];i.beforeEach(async(e,n,t)=>{if(L(),$(),await b.setAppearance(),e.name==="link")t();else if(B.get("user.token"))if(a.getUid||await a.setUser(),e.path==="/login")t({path:"/index"});else{const s=await k()||[];s.forEach(p=>p.top=!0),await r.generateRoutes(s),r.setIsAddRouters(!0),await V.initInteractive(!0),t()}else q.includes(e.path)||e.name==="link"?t():t("/login")});i.afterEach(()=>{N(),j()});const z=async()=>{const e=S(U);I(e),await u(e),c(e),P(e),l(e),E(e),f(e),e.mount("#app")};z();
