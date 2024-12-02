import"./index-0.0.0-dataease.js";import{E as w,a as C}from"./el-tabs-0.0.0-dataease.js";import"./el-tooltip-0.0.0-dataease.js";import"./el-popper-0.0.0-dataease.js";import{j as E}from"./index-0.0.0-dataease2.js";import{_ as k}from"./ApiKeyValue.vue_vue_type_style_index_0_lang-0.0.0-dataease.js";import I from"./ApiBody-0.0.0-dataease.js";import q from"./ApiVariable-0.0.0-dataease.js";import{_ as A}from"./ApiAuthConfig.vue_vue_type_style_index_0_lang-0.0.0-dataease.js";import{a as R}from"./ApiTestModel-0.0.0-dataease.js";import{E as S}from"./index-0.0.0-dataease4.js";import{d as B,r as d,t as x,al as M,w as V,f as L,M as N,k as t,i as r,j as a,N as T,a7 as D}from"./vue-0.0.0-dataease.js";import{_ as F}from"./_plugin-vue_export-helper-0.0.0-dataease.js";import"./library-0.0.0-dataease.js";import"./lodash-0.0.0-dataease.js";import"./strings-0.0.0-dataease.js";import"./axios-0.0.0-dataease.js";import"./echarts-0.0.0-dataease.js";import"./tinymce-0.0.0-dataease.js";import"./user-0.0.0-dataease.js";import"./el-row-0.0.0-dataease.js";import"./row-0.0.0-dataease.js";import"./el-tag-0.0.0-dataease.js";import"./el-select-0.0.0-dataease.js";import"./index-0.0.0-dataease14.js";import"./index-0.0.0-dataease5.js";import"./el-col-0.0.0-dataease.js";import"./icon_drag_outlined-0.0.0-dataease.js";import"./icon_delete-trash_outlined-0.0.0-dataease.js";import"./icon_add_outlined-0.0.0-dataease.js";import"./vuedraggable-es-0.0.0-dataease.js";import"./el-radio-group-0.0.0-dataease.js";import"./el-radio-0.0.0-dataease.js";import"./CodeEdit.vue_vue_type_script_setup_true_lang-0.0.0-dataease.js";import"./util-0.0.0-dataease.js";import"./el-form-0.0.0-dataease.js";import"./el-form-item-0.0.0-dataease.js";const O={class:"request-content"},H=B({__name:"ApiHttpRequestForm",props:{showScript:{type:Boolean,default:!0},valueList:{type:Array,default:()=>[]},request:{type:Object,default:()=>({changeId:"",authManager:{verification:"",username:"",password:""},headers:[],rest:[],arguments:[],body:{typeChange:"",kvs:[]}})},referenced:{type:Boolean,default:!1},isShowEnable:{type:Boolean,default:!1},isReadOnly:{type:Boolean,default:!1}},emits:["changeId"],setup(o,{emit:c}){const i=o,{t:s}=E(),p=d(21),n=d("headers"),v=[{value:"Accept"},{value:"Accept-Charset"},{value:"Accept-Language"},{value:"Accept-Datetime"},{value:"X-DE-TOKEN"},{value:"Cache-Control"},{value:"Connection"},{value:"Cookie"},{value:"Content-Length"},{value:"Content-MD5"},{value:"Content-Type"},{value:"Date"},{value:"Expect"},{value:"From"},{value:"Host"},{value:"If-Match"},{value:"If-Modified-Since"},{value:"If-None-Match"},{value:"If-Range"},{value:"If-Unmodified-Since"},{value:"Max-Forwards"},{value:"Origin"},{value:"Pragma"},{value:"Proxy-Authorization"},{value:"Range"},{value:"Referer"},{value:"TE"},{value:"User-Agent"},{value:"Upgrade"},{value:"Via"},{value:"Warning"}],f=d(),{request:e}=x(i);M(()=>{!i.referenced&&i.showScript?p.value=21:p.value=24,h()}),V(()=>e.value.changeId,()=>{var m,u,l;((m=e.value.headers)==null?void 0:m.length)>1&&(n.value="headers"),((u=e.value.rest)==null?void 0:u.length)>1&&(n.value="rest"),((l=e.value.arguments)==null?void 0:l.length)>1&&(n.value="parameters"),e.value.body&&(e.value.body.typeChange=e.value.changeId,y("changeId",e.value.changeId))});const h=()=>{e.value.body||(e.value.body=new R),e.value.body.kvs||(e.value.body.kvs=[]),e.value.rest||(e.value.rest=[]),e.value.arguments||(e.value.arguments=[])},y=c;return(m,u)=>{const l=w,b=S,g=C;return L(),N("div",O,[t(g,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=_=>n.value=_),class:"request-tabs"},{default:r(()=>[t(l,{label:a(s)("datasource.headers"),name:"headers",key:"headers"},{default:r(()=>[t(k,{"show-desc":!0,suggestions:v,items:a(e).headers,"value-list":o.valueList},null,8,["items","value-list"])]),_:1},8,["label"]),t(l,{key:"parameters",label:a(s)("datasource.query_param"),name:"parameters"},{default:r(()=>[t(q,{"is-read-only":o.isReadOnly,isShowEnable:o.isShowEnable,parameters:a(e).arguments,"value-list":o.valueList},null,8,["is-read-only","isShowEnable","parameters","value-list"])]),_:1},8,["label"]),t(l,{key:"body",label:a(s)("datasource.request_body"),name:"body",style:{overflow:"hidden"}},{default:r(()=>[t(I,{ref_key:"bodyRef",ref:f,headers:a(e).headers,body:a(e).body,"is-show-enable":o.isShowEnable,"value-list":o.valueList},null,8,["headers","body","is-show-enable","value-list"])]),_:1},8,["label"]),t(l,{key:"authConfig",label:a(s)("datasource.auth_config"),name:"authConfig"},{default:r(()=>[t(b,{class:"item-tabs",effect:"dark",content:a(s)("datasource.auth_config_info"),placement:"top-start"},{label:r(()=>[T("span",null,D(a(s)("datasource.auth_config")),1)]),_:1},8,["content"]),t(A,{request:a(e)},null,8,["request"])]),_:1},8,["label"])]),_:1},8,["modelValue"])])}}});const ke=F(H,[["__scopeId","data-v-52d90f7d"]]);export{ke as default};
