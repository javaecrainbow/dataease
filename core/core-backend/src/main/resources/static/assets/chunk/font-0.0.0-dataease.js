import{d as e}from"./index-0.0.0-dataease2.js";const u=(a={})=>e.post({url:"/typeface/listFont",data:a}).then(t=>t==null?void 0:t.data),o=(a={})=>e.post({url:"/typeface/edit",data:a}).then(t=>t==null?void 0:t.data),d=a=>e.post({url:"/typeface/delete/"+a,data:{}}).then(t=>t==null?void 0:t.data),l=()=>e.get({url:"/typeface/defaultFont"}).then(a=>a==null?void 0:a.data),r=async a=>e.post({url:"/typeface/uploadFile",data:a,loading:!0,headersType:"multipart/form-data;"}).then(t=>t);export{d as a,l as d,o as e,u as l,r as u};
