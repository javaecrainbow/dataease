import{d as l,t as w,_ as y,o as _,ak as h,f as c,M as i,N as D,a7 as k,W as v,j as g,k as I}from"./vue-0.0.0-dataease.js";const W=l({__name:"TimeDefault",props:{element:{type:Object}},setup(n){const a=n,{element:t}=w(a),e=y({nowDate:"",nowWeek:"",timer:null}),f=()=>{e.timer=setInterval(u,500)},u=()=>{const s=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];let o=t.value.formatInfo.timeFormat;const d=t.value.formatInfo.showWeek,p=t.value.formatInfo.showDate,r=t.value.formatInfo.dateFormat||"yyyy-MM-dd";p&&r&&(o=r+" "+o);const m=new Date;e.nowDate=m.format(o),d&&(e.nowWeek=s[m.getDay()],e.nowDate=e.nowDate+" "+e.nowWeek)};return _(()=>{f()}),h(()=>{e.timer&&clearInterval(e.timer)}),(s,o)=>(c(),i("div",{style:v([{width:"100%",height:"100%",display:"flex","align-items":"center"},{"justify-content":g(t).style.textAlign}])},[D("p",null,k(e.nowDate),1)],4))}}),x={style:{height:"100%"}},F=l({__name:"Component",props:{element:{type:Object}},setup(n){return(a,t)=>(c(),i("div",x,[I(W,{ref:n.element.id,element:n.element},null,8,["element"])]))}});export{F as _};
