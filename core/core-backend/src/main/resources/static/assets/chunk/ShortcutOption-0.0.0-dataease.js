var o=Object.defineProperty;var c=(s,t,a)=>t in s?o(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a;var r=(s,t,a)=>(c(s,typeof t!="symbol"?t+"":t,a),a);import{j as d,d as n}from"./index-0.0.0-dataease2.js";const{t:e}=d();class b{constructor(){r(this,"busiFlag");r(this,"busiRecordMap");this.busiFlag="recent",this.busiRecordMap={recent:{url:"/dataVisualization/findRecent",busiList:["panel","screen","dataset","datasource"],dataCache:[],columnList:[{field:"type",label:e("datasource.type")},{field:"creator",label:e("visualization.create_by")},{field:"lastEditor",label:e("work_branch.last_edited_by")},{field:"lastEditTime",label:e("work_branch.last_edit_time"),type:"time"}]},store:{url:"/store/query",busiList:["panel","screen"],dataCache:[],columnList:[{field:"type",label:e("datasource.type")},{field:"creator",label:e("visualization.create_by")},{field:"lastEditor",label:e("work_branch.last_edited_by")},{field:"lastEditTime",label:e("work_branch.last_edit_time"),type:"time"}]}}}getColmunList(){return this.busiRecordMap[this.busiFlag].columnList}loadData(t){var u;const a=this.busiRecordMap[this.busiFlag].url;return this.emptyParam(t)&&((u=this.getCacheData())!=null&&u.length)?new Promise(i=>{const l={code:200,data:this.getCacheData(),msg:null};return i(l)}):n.post({url:a,data:t}).then(i=>{const l=i.data;return this.emptyParam(t)&&(this.busiRecordMap[this.busiFlag].dataCache=l),i})}getCacheData(){return this.busiRecordMap[this.busiFlag].dataCache}emptyParam(t){return t.asc==null&&!t.keyword&&!t.type}setBusiFlag(t){this.busiFlag=t}getBusiList(){return["all_types",...this.busiRecordMap[this.busiFlag].busiList]}}const y=new b;export{y as s};
