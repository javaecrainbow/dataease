import{a as ma,u as pa}from"./index-0.0.0-dataease.js";import{E as ga}from"./el-drawer-0.0.0-dataease.js";import{j as ha,e as xe,_ as me,k as _a,w as q,x as ke,y as ya,n as Ca}from"./index-0.0.0-dataease2.js";import{E as wa}from"./el-tree-0.0.0-dataease.js";import"./el-checkbox-0.0.0-dataease.js";import{E as Ta}from"./el-divider-0.0.0-dataease.js";import{E as Da,a as xa}from"./ApiHttpRequestDraw.vue_vue_type_style_index_0_lang-0.0.0-dataease.js";import{d as ka,r as y,a9 as Sa,_ as pe,w as Se,m as be,ab as ba,f as A,M as Q,k as C,i as x,N as S,a7 as R,j as k,a0 as J,U as z,Z as Ne,V as oe,aa as Na,g as j,q as Ea,X as ne,a6 as le,n as ue}from"./vue-0.0.0-dataease.js";import{i as Aa}from"./icon_close_outlined-0.0.0-dataease.js";import{i as Ua}from"./icon_search-outline_outlined-0.0.0-dataease.js";import Fa from"./CreatDsGroup-0.0.0-dataease2.js";import Pa from"./DsTypeList-0.0.0-dataease.js";import La from"./EditorDetail-0.0.0-dataease.js";import{_ as Ia}from"./ExcelDetail.vue_vue_type_style_index_0_lang-0.0.0-dataease.js";import{f as Ra,i as Ma,v as Oa,a as Va,b as $a,u as Ba}from"./datasource-0.0.0-dataease.js";import{g as ge}from"./base64-0.0.0-dataease.js";import{t as he,n as Ze,d as Ja}from"./option-0.0.0-dataease.js";import ja from"./FinishPage-0.0.0-dataease.js";import{_ as Ha}from"./PluginComponent.vue_vue_type_script_setup_true_lang-0.0.0-dataease.js";import{i as Xa}from"./datasource-list-0.0.0-dataease.js";import{d as re}from"./lodash-0.0.0-dataease.js";var _e,qa=new Uint8Array(16);function Ke(){if(!_e&&(_e=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!_e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return _e(qa)}const Za=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ye(a){return typeof a=="string"&&Za.test(a)}var b=[];for(var Ee=0;Ee<256;++Ee)b.push((Ee+256).toString(16).substr(1));function Le(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=(b[a[l+0]]+b[a[l+1]]+b[a[l+2]]+b[a[l+3]]+"-"+b[a[l+4]]+b[a[l+5]]+"-"+b[a[l+6]]+b[a[l+7]]+"-"+b[a[l+8]]+b[a[l+9]]+"-"+b[a[l+10]]+b[a[l+11]]+b[a[l+12]]+b[a[l+13]]+b[a[l+14]]+b[a[l+15]]).toLowerCase();if(!Ye(e))throw TypeError("Stringified UUID is invalid");return e}var Ge,Ae,Ue=0,Fe=0;function Ga(a,l,e){var t=l&&e||0,n=l||new Array(16);a=a||{};var r=a.node||Ge,o=a.clockseq!==void 0?a.clockseq:Ae;if(r==null||o==null){var d=a.random||(a.rng||Ke)();r==null&&(r=Ge=[d[0]|1,d[1],d[2],d[3],d[4],d[5]]),o==null&&(o=Ae=(d[6]<<8|d[7])&16383)}var p=a.msecs!==void 0?a.msecs:Date.now(),w=a.nsecs!==void 0?a.nsecs:Fe+1,N=p-Ue+(w-Fe)/1e4;if(N<0&&a.clockseq===void 0&&(o=o+1&16383),(N<0||p>Ue)&&a.nsecs===void 0&&(w=0),w>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Ue=p,Fe=w,Ae=o,p+=122192928e5;var V=((p&268435455)*1e4+w)%4294967296;n[t++]=V>>>24&255,n[t++]=V>>>16&255,n[t++]=V>>>8&255,n[t++]=V&255;var I=p/4294967296*1e4&268435455;n[t++]=I>>>8&255,n[t++]=I&255,n[t++]=I>>>24&15|16,n[t++]=I>>>16&255,n[t++]=o>>>8|128,n[t++]=o&255;for(var c=0;c<6;++c)n[t+c]=r[c];return l||Le(n)}function Ka(a){if(!Ye(a))throw TypeError("Invalid UUID");var l,e=new Uint8Array(16);return e[0]=(l=parseInt(a.slice(0,8),16))>>>24,e[1]=l>>>16&255,e[2]=l>>>8&255,e[3]=l&255,e[4]=(l=parseInt(a.slice(9,13),16))>>>8,e[5]=l&255,e[6]=(l=parseInt(a.slice(14,18),16))>>>8,e[7]=l&255,e[8]=(l=parseInt(a.slice(19,23),16))>>>8,e[9]=l&255,e[10]=(l=parseInt(a.slice(24,36),16))/1099511627776&255,e[11]=l/4294967296&255,e[12]=l>>>24&255,e[13]=l>>>16&255,e[14]=l>>>8&255,e[15]=l&255,e}function Ya(a){a=unescape(encodeURIComponent(a));for(var l=[],e=0;e<a.length;++e)l.push(a.charCodeAt(e));return l}var Qa="6ba7b810-9dad-11d1-80b4-00c04fd430c8",za="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function Qe(a,l,e){function t(n,r,o,d){if(typeof n=="string"&&(n=Ya(n)),typeof r=="string"&&(r=Ka(r)),r.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var p=new Uint8Array(16+n.length);if(p.set(r),p.set(n,r.length),p=e(p),p[6]=p[6]&15|l,p[8]=p[8]&63|128,o){d=d||0;for(var w=0;w<16;++w)o[d+w]=p[w];return o}return Le(p)}try{t.name=a}catch{}return t.DNS=Qa,t.URL=za,t}function Wa(a){if(typeof a=="string"){var l=unescape(encodeURIComponent(a));a=new Uint8Array(l.length);for(var e=0;e<l.length;++e)a[e]=l.charCodeAt(e)}return et(at(tt(a),a.length*8))}function et(a){for(var l=[],e=a.length*32,t="0123456789abcdef",n=0;n<e;n+=8){var r=a[n>>5]>>>n%32&255,o=parseInt(t.charAt(r>>>4&15)+t.charAt(r&15),16);l.push(o)}return l}function ze(a){return(a+64>>>9<<4)+14+1}function at(a,l){a[l>>5]|=128<<l%32,a[ze(l)-1]=l;for(var e=1732584193,t=-271733879,n=-1732584194,r=271733878,o=0;o<a.length;o+=16){var d=e,p=t,w=n,N=r;e=U(e,t,n,r,a[o],7,-680876936),r=U(r,e,t,n,a[o+1],12,-389564586),n=U(n,r,e,t,a[o+2],17,606105819),t=U(t,n,r,e,a[o+3],22,-1044525330),e=U(e,t,n,r,a[o+4],7,-176418897),r=U(r,e,t,n,a[o+5],12,1200080426),n=U(n,r,e,t,a[o+6],17,-1473231341),t=U(t,n,r,e,a[o+7],22,-45705983),e=U(e,t,n,r,a[o+8],7,1770035416),r=U(r,e,t,n,a[o+9],12,-1958414417),n=U(n,r,e,t,a[o+10],17,-42063),t=U(t,n,r,e,a[o+11],22,-1990404162),e=U(e,t,n,r,a[o+12],7,1804603682),r=U(r,e,t,n,a[o+13],12,-40341101),n=U(n,r,e,t,a[o+14],17,-1502002290),t=U(t,n,r,e,a[o+15],22,1236535329),e=F(e,t,n,r,a[o+1],5,-165796510),r=F(r,e,t,n,a[o+6],9,-1069501632),n=F(n,r,e,t,a[o+11],14,643717713),t=F(t,n,r,e,a[o],20,-373897302),e=F(e,t,n,r,a[o+5],5,-701558691),r=F(r,e,t,n,a[o+10],9,38016083),n=F(n,r,e,t,a[o+15],14,-660478335),t=F(t,n,r,e,a[o+4],20,-405537848),e=F(e,t,n,r,a[o+9],5,568446438),r=F(r,e,t,n,a[o+14],9,-1019803690),n=F(n,r,e,t,a[o+3],14,-187363961),t=F(t,n,r,e,a[o+8],20,1163531501),e=F(e,t,n,r,a[o+13],5,-1444681467),r=F(r,e,t,n,a[o+2],9,-51403784),n=F(n,r,e,t,a[o+7],14,1735328473),t=F(t,n,r,e,a[o+12],20,-1926607734),e=P(e,t,n,r,a[o+5],4,-378558),r=P(r,e,t,n,a[o+8],11,-2022574463),n=P(n,r,e,t,a[o+11],16,1839030562),t=P(t,n,r,e,a[o+14],23,-35309556),e=P(e,t,n,r,a[o+1],4,-1530992060),r=P(r,e,t,n,a[o+4],11,1272893353),n=P(n,r,e,t,a[o+7],16,-155497632),t=P(t,n,r,e,a[o+10],23,-1094730640),e=P(e,t,n,r,a[o+13],4,681279174),r=P(r,e,t,n,a[o],11,-358537222),n=P(n,r,e,t,a[o+3],16,-722521979),t=P(t,n,r,e,a[o+6],23,76029189),e=P(e,t,n,r,a[o+9],4,-640364487),r=P(r,e,t,n,a[o+12],11,-421815835),n=P(n,r,e,t,a[o+15],16,530742520),t=P(t,n,r,e,a[o+2],23,-995338651),e=L(e,t,n,r,a[o],6,-198630844),r=L(r,e,t,n,a[o+7],10,1126891415),n=L(n,r,e,t,a[o+14],15,-1416354905),t=L(t,n,r,e,a[o+5],21,-57434055),e=L(e,t,n,r,a[o+12],6,1700485571),r=L(r,e,t,n,a[o+3],10,-1894986606),n=L(n,r,e,t,a[o+10],15,-1051523),t=L(t,n,r,e,a[o+1],21,-2054922799),e=L(e,t,n,r,a[o+8],6,1873313359),r=L(r,e,t,n,a[o+15],10,-30611744),n=L(n,r,e,t,a[o+6],15,-1560198380),t=L(t,n,r,e,a[o+13],21,1309151649),e=L(e,t,n,r,a[o+4],6,-145523070),r=L(r,e,t,n,a[o+11],10,-1120210379),n=L(n,r,e,t,a[o+2],15,718787259),t=L(t,n,r,e,a[o+9],21,-343485551),e=Z(e,d),t=Z(t,p),n=Z(n,w),r=Z(r,N)}return[e,t,n,r]}function tt(a){if(a.length===0)return[];for(var l=a.length*8,e=new Uint32Array(ze(l)),t=0;t<l;t+=8)e[t>>5]|=(a[t/8]&255)<<t%32;return e}function Z(a,l){var e=(a&65535)+(l&65535),t=(a>>16)+(l>>16)+(e>>16);return t<<16|e&65535}function nt(a,l){return a<<l|a>>>32-l}function ye(a,l,e,t,n,r){return Z(nt(Z(Z(l,a),Z(t,r)),n),e)}function U(a,l,e,t,n,r,o){return ye(l&e|~l&t,a,l,n,r,o)}function F(a,l,e,t,n,r,o){return ye(l&t|e&~t,a,l,n,r,o)}function P(a,l,e,t,n,r,o){return ye(l^e^t,a,l,n,r,o)}function L(a,l,e,t,n,r,o){return ye(e^(l|~t),a,l,n,r,o)}var rt=Qe("v3",48,Wa);const st=rt;function ot(a,l,e){a=a||{};var t=a.random||(a.rng||Ke)();if(t[6]=t[6]&15|64,t[8]=t[8]&63|128,l){e=e||0;for(var n=0;n<16;++n)l[e+n]=t[n];return l}return Le(t)}function lt(a,l,e,t){switch(a){case 0:return l&e^~l&t;case 1:return l^e^t;case 2:return l&e^l&t^e&t;case 3:return l^e^t}}function Pe(a,l){return a<<l|a>>>32-l}function ut(a){var l=[1518500249,1859775393,2400959708,3395469782],e=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof a=="string"){var t=unescape(encodeURIComponent(a));a=[];for(var n=0;n<t.length;++n)a.push(t.charCodeAt(n))}else Array.isArray(a)||(a=Array.prototype.slice.call(a));a.push(128);for(var r=a.length/4+2,o=Math.ceil(r/16),d=new Array(o),p=0;p<o;++p){for(var w=new Uint32Array(16),N=0;N<16;++N)w[N]=a[p*64+N*4]<<24|a[p*64+N*4+1]<<16|a[p*64+N*4+2]<<8|a[p*64+N*4+3];d[p]=w}d[o-1][14]=(a.length-1)*8/Math.pow(2,32),d[o-1][14]=Math.floor(d[o-1][14]),d[o-1][15]=(a.length-1)*8&4294967295;for(var V=0;V<o;++V){for(var I=new Uint32Array(80),c=0;c<16;++c)I[c]=d[V][c];for(var h=16;h<80;++h)I[h]=Pe(I[h-3]^I[h-8]^I[h-14]^I[h-16],1);for(var T=e[0],M=e[1],G=e[2],$=e[3],H=e[4],v=0;v<80;++v){var W=Math.floor(v/20),Ce=Pe(T,5)+lt(W,M,G,$)+H+l[W]+I[v]>>>0;H=$,$=G,G=Pe(M,30)>>>0,M=T,T=Ce}e[0]=e[0]+T>>>0,e[1]=e[1]+M>>>0,e[2]=e[2]+G>>>0,e[3]=e[3]+$>>>0,e[4]=e[4]+H>>>0}return[e[0]>>24&255,e[0]>>16&255,e[0]>>8&255,e[0]&255,e[1]>>24&255,e[1]>>16&255,e[1]>>8&255,e[1]&255,e[2]>>24&255,e[2]>>16&255,e[2]>>8&255,e[2]&255,e[3]>>24&255,e[3]>>16&255,e[3]>>8&255,e[3]&255,e[4]>>24&255,e[4]>>16&255,e[4]>>8&255,e[4]&255]}var it=Qe("v5",80,ut);const ct=it;var ft={v1:Ga,v3:st,v4:ot,v5:ct};const vt={key:0,class:"editor-step flex-center"},dt={class:"step-icon"},mt={class:"icon"},pt={class:"title"},gt={class:"step-icon"},ht={class:"icon"},_t={class:"title"},yt={class:"datasource"},Ct={key:0,class:"ds-type-select"},wt={class:"title"},Tt=["onClick"],Dt=["title"],xt={class:"custom-tree-node flex-align-center"},kt=["title"],St={class:"editor-footer"},Yt=ka({__name:"index",emits:["refresh"],setup(a,{expose:l,emit:e}){const{t}=ha(),n=y(),r=Sa(),{wsCache:o}=ma(),d=y(!1);let p=!1,w=!1,N=!1;const V=s=>{N=s},I=pe({datasourceTree:[]});I.datasourceTree=he.map(s=>({name:Ze[s],type:s}));const c=y(0),h=y(),T=y(),M=y(),G=y([]),$=y("OLTP"),H=y(""),v=y(""),W=e,{emitter:Ce}=pa(),X=y(!1),Ie=s=>{v.value=s,c.value=1,O.value=1,ue(()=>{var u,i;(u=h==null?void 0:h.value)!=null&&u.initForm(s)||((i=T==null?void 0:T.value)==null||i.invokeMethod({methodName:"initForm",args:s})),ie.value&&Re.value.map(f=>f.dbList).flat().some(f=>f.type===v.value?(ie.value.setCurrentNode(f),X.value=f.isPlugin,!0):!1)})},We=s=>{s.type&&(Ie(s.type),X.value=s.isPlugin)},we=s=>{$.value=s.type};Se(H,s=>{c.value===1&&ie.value.filter(s.toLocaleLowerCase())});const ie=y(),ea={children:"dbList",label:"name"},aa=(s,u)=>s?u.name.toLowerCase().includes(s):!0,ce=y([]),Re=be(()=>he.map((s,u)=>({name:Ze[s],dbList:ce.value[u]})));(()=>{const s=[[],[],[],[],[]];Ja.forEach(u=>{const i=he.findIndex(f=>f===u.catalog);i!==-1&&s[i].push(u)}),ce.value=s.map(u=>u.sort((i,f)=>i.name.toLowerCase().charCodeAt(0)-f.name.toLowerCase().charCodeAt(0)))})();const Te=y(""),Me=y([]),ta=s=>{Me.value=s,s.forEach(u=>{const{name:i,category:f,type:m,icon:g,extraParams:K,staticMap:Y}=u,ve={name:i,catalog:f,type:m,icon:g,extraParams:K,isPlugin:!0,staticMap:Y},de=he.findIndex(D=>D===ve.catalog);de!==-1&&ce.value[de].push(ve)})},na=s=>{var i;const u=Me.value.filter(f=>f.type===s);return Te.value?Te.value:u&&u.length>0?(i=u[0].staticMap)==null?void 0:i.index:null};(()=>{Ra({}).then(s=>{G.value=s.data})})();const O=y(0),Oe=()=>{O.value=c.value+1,!(v.value==="API"&&c.value===1)&&(c.value=c.value+1)},ra=()=>{var s;if(v.value===""){q.error(t("datasource.select_type"));return}if(((s=_.apiConfiguration)==null?void 0:s.length)===0&&v.value==="API"&&c.value!==2){q.error(t("data_source.cannot_be_empty_table"));return}if(v.value==="API"&&c.value!==2){h.value.submitForm()(i=>{i&&Oe()});return}Oe()},Ve=(s,u,i)=>{M.value.saveExcelDs(s,()=>{te.value=s.pid,u()},i)},ee=y(!1),De=pe({name:"",id:""}),sa=()=>{r.push({path:"/dataset-form",query:{datasourceId:De.id}})},oa=()=>{B.value=!1,W("refresh"),ee.value=!1},la=()=>{ee.value=!1,Xe(null,te.value)},fe=({id:s,name:u,pid:i})=>{Ma().then(f=>{if(E.value||!f.data){W("refresh"),B.value=!1;return}else ee.value=!0,Object.assign(De,{id:s,name:u})}).finally(()=>{i.value=i})};Ce.on("showFinishPage",fe);const ua=()=>{v.value==="API"&&O.value===1||c.value===1?ke.confirm(t("data_source.the_previous_step"),{confirmButtonType:"primary",type:"warning",autofocus:!1,showClose:!1}).then(()=>{$e()}):$e()},$e=()=>{if(v.value==="API"&&O.value===2){O.value=1,c.value=1;return}c.value===1&&(v.value=""),c.value=c.value-1},ia=s=>{const u=s.validate;s.eventName==="saveDs"?u(i=>{i&&Je(s.args)}):u(i=>{i&&Be(s.args)})},ca=()=>{var u,i;const s=JSON.parse(JSON.stringify(_));if(v.value==="API"){if(_.apiConfiguration.length===0){q.error(t("data_source.add_data_table"));return}let f=[];f=f.concat(s.apiConfiguration),f=f.concat(s.paramsConfiguration),s.configuration=ge.encode(JSON.stringify(f)),s.syncSetting.startTime=new Date(s.syncSetting.startTime).getTime(),s.syncSetting.endTime=new Date(s.syncSetting.endTime).getTime()}else s.configuration=ge.encode(JSON.stringify(s.configuration));X.value?(u=T==null?void 0:T.value)==null||u.invokeMethod({methodName:"submitForm",args:[{eventName:"validateDs",args:s}]}):((i=h==null?void 0:h.value)==null?void 0:i.submitForm())(m=>{m&&Be(s)})},Be=s=>{d.value=!0,Oa(s).then(u=>{if(u.data.type==="API"){let i=0;const f=JSON.parse(u.data.status);for(let m=0;m<f.length;m++){f[m].status==="Error"&&i++;for(let g=0;g<_.apiConfiguration.length;g++)f[m].name===_.apiConfiguration[g].name&&(_.apiConfiguration[g].status=f[m].status)}i===0?q.success(t("datasource.validate_success")):q.error(t("data_source.verification_failed"))}else q.success(t("datasource.validate_success"))}).finally(()=>{d.value=!1})},fa=be(()=>{if(!v.value)return"";let s="";return ce.value.some(u=>u.some(i=>i.type===v.value?(s=i.name,!0):!1)),s}),va=()=>{var u,i,f;N=!1;const s=JSON.parse(JSON.stringify(_));if(v.value==="Excel"){if(M.value.uploadStatus(!1),!((u=M.value.sheetFile)!=null&&u.name)){M.value.uploadStatus(!0);return}M.value.submitForm()(g=>{g&&(E.value?Ve(null,null,null):n.value.createInit("datasource",{id:te.value},"",ae.name))});return}else if(v.value==="API"){for(let g=0;g<s.apiConfiguration.length;g++){(s.apiConfiguration[g].deTableName===""||s.apiConfiguration[g].deTableName===void 0||s.apiConfiguration[g].deTableName===null)&&(s.apiConfiguration[g].deTableName="api_"+s.apiConfiguration[g].name+"_"+ft.v1().replaceAll("-","").substring(0,10)),s.apiConfiguration[g].jsonFields=[];for(let K=0;K<s.apiConfiguration[g].fields.length;K++)s.apiConfiguration[g].fields[K].value=[]}let m=[];m=m.concat(s.apiConfiguration),m=m.concat(s.paramsConfiguration),s.configuration=ge.encode(JSON.stringify(m)),s.syncSetting.startTime=new Date(s.syncSetting.startTime).getTime(),s.syncSetting.endTime=new Date(s.syncSetting.endTime).getTime()}else s.configuration=ge.encode(JSON.stringify(s.configuration));if(X.value)(i=T==null?void 0:T.value)==null||i.invokeMethod({methodName:"submitForm",args:[{eventName:"saveDs",args:s}]});else{const m=(f=h==null?void 0:h.value)==null?void 0:f.submitForm();s.apiConfiguration="",m(g=>{g&&Je(s)})}},Je=s=>{if(E.value&&_.id){let u={confirmButtonType:"danger",type:"warning",autofocus:!1,showClose:!1,tip:""};Va(s).then(i=>{let f=s.id===""?$a:Ba;if(i)ke.confirm(t("datasource.has_same_ds"),u).then(()=>{d.value!==!0&&(d.value=!0,f(s).then(m=>{m!==void 0&&(fe({id:m.id,name:m.name}),q.success(t("data_source.source_saved_successfully")))}).finally(()=>{d.value=!1}))});else{if(d.value===!0)return;d.value=!0,f(s).then(m=>{m!==void 0&&(fe({id:m.id,name:m.name}),q.success(t("data_source.source_saved_successfully")))}).finally(()=>{d.value=!1})}})}else n.value.createInit("datasource",{id:te.value,request:s},"",_.name)},je={id:"",name:"",description:"",type:"API",apiConfiguration:[],paramsConfiguration:[],enableDataFill:!1},_=pe(re(je)),He={type:"",id:"0",editType:0,name:"",creator:""},ae=pe(re(He)),B=y(!1),E=y(!1),te=y("0");Se(()=>_,()=>{p&&V(!0)},{deep:!0}),Se(()=>ae,()=>{w&&V(!0)},{deep:!0});const Xe=(s,u,i)=>{var f;X.value=s==null?void 0:s.isPlugin,Te.value=X.value?(f=s==null?void 0:s.staticMap)==null?void 0:f.index:null,E.value=!!s,ee.value=!1,s?(s.type=="Excel"?Object.assign(ae,re(s)):(Object.assign(_,re(s)),_.hasOwnProperty("configuration")&&_.configuration.urlType==null&&(_.configuration.urlType="hostName"),_.hasOwnProperty("configuration")&&_.configuration.sshType==null&&(_.configuration.sshType="password")),te.value=s.pid||"0"):(Object.assign(ae,re(He)),Object.assign(_,re(je)),te.value=u||"0"),c.value=Number(E.value),O.value=c.value,B.value=!0,ue(()=>{w=!0,p=!0}),s&&ue(()=>{v.value=s.type,c.value=1,O.value=c.value,i&&ue(()=>{M.value.appendReplaceExcel(i)}),ue(()=>{var m,g;(m=h==null?void 0:h.value)==null||m.clearForm(),(g=T==null?void 0:T.value)==null||g.invokeMethod({methodName:"clearForm",args:[]})})})},da=be(()=>{const{id:s,editType:u,creator:i}=ae;return i&&s&&v.value=="Excel"?t(u===1?"data_source.append_data":"data_source.replace_data"):E.value?_.id?t("datasource.modify"):t("data_source.copy_data_source"):t("data_source.create_data_source")}),qe=()=>{o.get("ds-new-success")&&(W("refresh"),o.set("ds-new-success",!1)),!ee.value&&(!E.value&&c.value!==0||N)?ke.confirm(t("data_source.want_to_exit"),{confirmButtonText:t("dataset.confirm"),cancelButtonText:t("common.cancel"),showCancelButton:!0,confirmButtonType:"primary",type:"warning",autofocus:!1,showClose:!1}).then(()=>{B.value=!1}):B.value=!1};return l({init:Xe}),(s,u)=>{const i=Da,f=xa,m=ya,g=Ta,K=wa,Y=Ca,ve=ga,de=ba("loading");return A(),Q(Ne,null,[C(ve,{"close-on-click-modal":!1,size:"calc(100% - 100px)","modal-class":"datasource-drawer-fullscreen",direction:"btt","before-close":qe,"show-close":!1,modelValue:B.value,"onUpdate:modelValue":u[3]||(u[3]=D=>B.value=D)},{header:x(({close:D})=>[S("span",null,R(da.value),1),E.value?J("",!0):(A(),Q("div",vt,[C(f,{space:"150px",active:c.value,"align-center":""},{default:x(()=>[C(i,null,{icon:x(()=>[S("div",dt,[S("span",mt,R(c.value<=0?"1":""),1),S("span",pt,R(k(t)("deDataset.select_data_source")),1)])]),_:1}),C(i,null,{icon:x(()=>[S("div",gt,[S("span",ht,R(c.value<=1?"2":""),1),S("span",_t,R(k(t)("data_source.configuration_information")),1)])]),_:1})]),_:1},8,["active"])])),C(k(xe),{onClick:D,class:"datasource-close"},{default:x(()=>[C(me,{name:"icon_close_outlined"},{default:x(()=>[C(k(Aa),{class:"svg-icon"})]),_:1})]),_:2},1032,["onClick"])]),default:x(()=>[z((A(),Q("div",yt,[E.value?J("",!0):(A(),Q("div",Ct,[S("div",wt,[C(m,{placeholder:k(t)("chart.search"),class:"m24 w100",modelValue:H.value,"onUpdate:modelValue":u[0]||(u[0]=D=>H.value=D),clearable:""},{prefix:x(()=>[C(k(xe),null,{default:x(()=>[C(me,{name:"icon_search-outline_outlined"},{default:x(()=>[C(k(Ua),{class:"svg-icon"})]),_:1})]),_:1})]),_:1},8,["placeholder","modelValue"])]),c.value===0?(A(),Q(Ne,{key:0},[S("p",{class:oe([$.value==="latestUse"&&"active","list-item_primary"]),onClick:u[1]||(u[1]=D=>we({type:"latestUse",name:"latestUse",id:"latestUse"}))},R(k(t)("data_source.recently_created")),3),C(g),S("p",{class:oe([$.value==="all"&&"active","list-item_primary"]),onClick:u[2]||(u[2]=D=>we({type:"all",name:"all",id:"all"}))},R(k(t)("data_source.all")),3),(A(!0),Q(Ne,null,Na(I.datasourceTree,D=>(A(),Q("div",{key:D.name,onClick:se=>we(D),class:oe(["list-item_primary",$.value===D.type&&"active"])},[S("span",{title:D.name,class:"label"},R(D.name),9,Dt)],10,Tt))),128))],64)):J("",!0),c.value>0?(A(),j(K,{key:1,"expand-on-click-node":!1,menu:"",ref_key:"dsTree",ref:ie,data:Re.value,nodeKey:"name",props:ea,"filter-node-method":aa,onNodeClick:We},{default:x(({node:D,data:se})=>[S("span",xt,[se.catalog?(A(),j(k(xe),{key:0,class:"icon-border",style:{width:"18px",height:"18px"}},{default:x(()=>[se.isPlugin?(A(),j(me,{key:0,"static-content":se.icon},null,8,["static-content"])):(A(),j(me,{key:1},{default:x(()=>[(A(),j(Ea(k(Xa)[se.type]),{class:"svg-icon"}))]),_:2},1024))]),_:2},1024)):J("",!0),S("span",{title:D.label,class:"label-tooltip"},R(D.label),9,kt)])]),_:1},8,["data"])):J("",!0)])),S("div",{class:oe(["ds-editor",E.value&&"edit-ds"])},[z(S("div",{class:"ds-type-title"},R(fa.value),513),[[ne,c.value!==0&&!E.value]]),S("div",{class:oe(["editor-content",(c.value===0||E.value)&&"type-title"])},[z(C(Pa,{"filter-text":H.value.toLocaleLowerCase(),onSelectDsType:Ie,"current-type":$.value,"latest-use-types":G.value},null,8,["filter-text","current-type","latest-use-types"]),[[ne,c.value===0]]),c.value!==0&&v.value&&v.value!=="Excel"&&B.value&&!X.value?(A(),j(La,{key:0,ref_key:"detail",ref:h,form:_,editDs:E.value,"active-step":O.value},null,8,["form","editDs","active-step"])):J("",!0),c.value!==0&&v.value&&v.value!=="Excel"&&B.value&&X.value?(A(),j(k(Ha),{key:1,jsname:na(v.value),ref_key:"xpack",ref:T,form:_,editDs:E.value,"active-step":O.value,onSubmitForm:ia},null,8,["jsname","form","editDs","active-step"])):J("",!0),c.value!==0&&v.value=="Excel"?(A(),j(Ia,{key:2,editDs:E.value,ref_key:"excel",ref:M,param:ae},null,8,["editDs","param"])):J("",!0)],2)],2),S("div",St,[C(Y,{secondary:"",onClick:qe},{default:x(()=>[le(R(k(t)("common.cancel")),1)]),_:1}),z(C(Y,{secondary:"",onClick:ua},{default:x(()=>[le(R(k(t)("common.prev")),1)]),_:1},512),[[ne,!(c.value===0||E.value&&O.value<=1)]]),z(C(Y,{secondary:"",onClick:ca},{default:x(()=>[le(R(k(t)("datasource.validate")),1)]),_:1},512),[[ne,c.value===1&&v.value!=="Excel"]]),z(C(Y,{type:"primary",onClick:ra},{default:x(()=>[le(R(k(t)("common.next")),1)]),_:1},512),[[ne,c.value===0&&v.value!=="API"||O.value!==2&&v.value==="API"]]),z(C(Y,{type:"primary",onClick:va},{default:x(()=>[le(R(k(t)("common.save")),1)]),_:1},512),[[ne,c.value===1&&v.value!=="API"||O.value===2&&v.value==="API"]])]),ee.value?(A(),j(ja,{key:1,onContinueCreating:la,onBackToDatasourceList:oa,onCreateDataset:sa,name:De.name},null,8,["name"])):J("",!0),C(k(_a),{jsname:"L2NvbXBvbmVudC9wbHVnaW5zLWhhbmRsZXIvRHNDYXRlZ29yeUhhbmRsZXI=",onLoadDsPlugin:ta})])),[[de,d.value]])]),_:1},8,["modelValue"]),C(Fa,{onHandleShowFinishPage:fe,onFinish:Ve,ref_key:"creatDsFolder",ref:n},null,512)],64)}}});export{Yt as _};
