import{d as n}from"./index-0.0.0-dataease2.js";const o=async(a,t,e)=>n.post({url:`/chart/listByDQ/${a}/${t}`,data:e}).then(r=>r==null?void 0:r.data),c=async(a,t)=>n.post({url:`/chart/copyField/${a}/${t}`,data:{}}).then(e=>e==null?void 0:e.data),d=async a=>n.post({url:`/chart/deleteField/${a}`,data:{}}).then(t=>t==null?void 0:t.data),u=async a=>(delete a.data,n.post({url:"/chartData/getData",data:a}).then(t=>t.code===0?t==null?void 0:t.data:t)),i=async a=>n.post({url:"/chartData/innerExportDetails",method:"post",data:a,loading:!0,responseType:"blob"}),s=async({fieldId:a,fieldType:t,data:e})=>(delete e.data,n.post({url:`/chartData/getFieldData/${a}/${t}`,data:e}).then(r=>r)),h=async({fieldId:a,data:t})=>(delete t.data,n.post({url:`/chartData/getDrillFieldData/${a}`,data:t}).then(e=>e));export{u as a,h as b,c,d,s as e,o as g,i};
