import{_ as a}from"./lodash-0.0.0-dataease.js";function l(n,c){const e=a.cloneDeep(n);return i(e,c),e}function i(n,c){return r(n,c),a.forEach(n,e=>{e.children&&e.children.length>0&&i(e.children,c)}),n}const r=(n,c)=>{c==="name_desc"?n.sort((e,t)=>t.name.localeCompare(e.name,"zh-Hans-CN",{sensitivity:"accent"})):c==="name_asc"?n.sort((e,t)=>e.name.localeCompare(t.name,"zh-Hans-CN",{sensitivity:"accent"})):c==="time_asc"&&n.reverse()};export{l as t};
