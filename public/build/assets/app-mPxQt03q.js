function mu(n,t){return function(){return n.apply(t,arguments)}}const{toString:Id}=Object.prototype,{getPrototypeOf:$i}=Object,{iterator:us,toStringTag:gu}=Symbol,ls=(n=>t=>{const e=Id.call(t);return n[e]||(n[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),Wt=n=>(n=n.toLowerCase(),t=>ls(t)===n),hs=n=>t=>typeof t===n,{isArray:yn}=Array,un=hs("undefined");function ur(n){return n!==null&&!un(n)&&n.constructor!==null&&!un(n.constructor)&&Ft(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const _u=Wt("ArrayBuffer");function vd(n){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(n):t=n&&n.buffer&&_u(n.buffer),t}const Rd=hs("string"),Ft=hs("function"),yu=hs("number"),lr=n=>n!==null&&typeof n=="object",bd=n=>n===!0||n===!1,Br=n=>{if(ls(n)!=="object")return!1;const t=$i(n);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(gu in n)&&!(us in n)},Sd=n=>{if(!lr(n)||ur(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},Cd=Wt("Date"),Pd=Wt("File"),Vd=Wt("Blob"),Dd=Wt("FileList"),Nd=n=>lr(n)&&Ft(n.pipe),kd=n=>{let t;return n&&(typeof FormData=="function"&&n instanceof FormData||Ft(n.append)&&((t=ls(n))==="formdata"||t==="object"&&Ft(n.toString)&&n.toString()==="[object FormData]"))},Od=Wt("URLSearchParams"),[xd,Md,Ld,Fd]=["ReadableStream","Request","Response","Headers"].map(Wt),Ud=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hr(n,t,{allOwnKeys:e=!1}={}){if(n===null||typeof n>"u")return;let r,s;if(typeof n!="object"&&(n=[n]),yn(n))for(r=0,s=n.length;r<s;r++)t.call(null,n[r],r,n);else{if(ur(n))return;const o=e?Object.getOwnPropertyNames(n):Object.keys(n),a=o.length;let u;for(r=0;r<a;r++)u=o[r],t.call(null,n[u],u,n)}}function Eu(n,t){if(ur(n))return null;t=t.toLowerCase();const e=Object.keys(n);let r=e.length,s;for(;r-- >0;)if(s=e[r],t===s.toLowerCase())return s;return null}const Fe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Tu=n=>!un(n)&&n!==Fe;function fi(){const{caseless:n,skipUndefined:t}=Tu(this)&&this||{},e={},r=(s,o)=>{const a=n&&Eu(e,o)||o;Br(e[a])&&Br(s)?e[a]=fi(e[a],s):Br(s)?e[a]=fi({},s):yn(s)?e[a]=s.slice():(!t||!un(s))&&(e[a]=s)};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&hr(arguments[s],r);return e}const Bd=(n,t,e,{allOwnKeys:r}={})=>(hr(t,(s,o)=>{e&&Ft(s)?n[o]=mu(s,e):n[o]=s},{allOwnKeys:r}),n),jd=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),qd=(n,t,e,r)=>{n.prototype=Object.create(t.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:t.prototype}),e&&Object.assign(n.prototype,e)},$d=(n,t,e,r)=>{let s,o,a;const u={};if(t=t||{},n==null)return t;do{for(s=Object.getOwnPropertyNames(n),o=s.length;o-- >0;)a=s[o],(!r||r(a,n,t))&&!u[a]&&(t[a]=n[a],u[a]=!0);n=e!==!1&&$i(n)}while(n&&(!e||e(n,t))&&n!==Object.prototype);return t},zd=(n,t,e)=>{n=String(n),(e===void 0||e>n.length)&&(e=n.length),e-=t.length;const r=n.indexOf(t,e);return r!==-1&&r===e},Hd=n=>{if(!n)return null;if(yn(n))return n;let t=n.length;if(!yu(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=n[t];return e},Gd=(n=>t=>n&&t instanceof n)(typeof Uint8Array<"u"&&$i(Uint8Array)),Kd=(n,t)=>{const r=(n&&n[us]).call(n);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(n,o[0],o[1])}},Wd=(n,t)=>{let e;const r=[];for(;(e=n.exec(t))!==null;)r.push(e);return r},Qd=Wt("HTMLFormElement"),Xd=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,r,s){return r.toUpperCase()+s}),xa=(({hasOwnProperty:n})=>(t,e)=>n.call(t,e))(Object.prototype),Jd=Wt("RegExp"),wu=(n,t)=>{const e=Object.getOwnPropertyDescriptors(n),r={};hr(e,(s,o)=>{let a;(a=t(s,o,n))!==!1&&(r[o]=a||s)}),Object.defineProperties(n,r)},Yd=n=>{wu(n,(t,e)=>{if(Ft(n)&&["arguments","caller","callee"].indexOf(e)!==-1)return!1;const r=n[e];if(Ft(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},Zd=(n,t)=>{const e={},r=s=>{s.forEach(o=>{e[o]=!0})};return yn(n)?r(n):r(String(n).split(t)),e},tf=()=>{},ef=(n,t)=>n!=null&&Number.isFinite(n=+n)?n:t;function nf(n){return!!(n&&Ft(n.append)&&n[gu]==="FormData"&&n[us])}const rf=n=>{const t=new Array(10),e=(r,s)=>{if(lr(r)){if(t.indexOf(r)>=0)return;if(ur(r))return r;if(!("toJSON"in r)){t[s]=r;const o=yn(r)?[]:{};return hr(r,(a,u)=>{const h=e(a,s+1);!un(h)&&(o[u]=h)}),t[s]=void 0,o}}return r};return e(n,0)},sf=Wt("AsyncFunction"),of=n=>n&&(lr(n)||Ft(n))&&Ft(n.then)&&Ft(n.catch),Au=((n,t)=>n?setImmediate:t?((e,r)=>(Fe.addEventListener("message",({source:s,data:o})=>{s===Fe&&o===e&&r.length&&r.shift()()},!1),s=>{r.push(s),Fe.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate=="function",Ft(Fe.postMessage)),af=typeof queueMicrotask<"u"?queueMicrotask.bind(Fe):typeof process<"u"&&process.nextTick||Au,cf=n=>n!=null&&Ft(n[us]),S={isArray:yn,isArrayBuffer:_u,isBuffer:ur,isFormData:kd,isArrayBufferView:vd,isString:Rd,isNumber:yu,isBoolean:bd,isObject:lr,isPlainObject:Br,isEmptyObject:Sd,isReadableStream:xd,isRequest:Md,isResponse:Ld,isHeaders:Fd,isUndefined:un,isDate:Cd,isFile:Pd,isBlob:Vd,isRegExp:Jd,isFunction:Ft,isStream:Nd,isURLSearchParams:Od,isTypedArray:Gd,isFileList:Dd,forEach:hr,merge:fi,extend:Bd,trim:Ud,stripBOM:jd,inherits:qd,toFlatObject:$d,kindOf:ls,kindOfTest:Wt,endsWith:zd,toArray:Hd,forEachEntry:Kd,matchAll:Wd,isHTMLForm:Qd,hasOwnProperty:xa,hasOwnProp:xa,reduceDescriptors:wu,freezeMethods:Yd,toObjectSet:Zd,toCamelCase:Xd,noop:tf,toFiniteNumber:ef,findKey:Eu,global:Fe,isContextDefined:Tu,isSpecCompliantForm:nf,toJSONObject:rf,isAsyncFn:sf,isThenable:of,setImmediate:Au,asap:af,isIterable:cf};function G(n,t,e,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",t&&(this.code=t),e&&(this.config=e),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}S.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.status}}});const Iu=G.prototype,vu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{vu[n]={value:n}});Object.defineProperties(G,vu);Object.defineProperty(Iu,"isAxiosError",{value:!0});G.from=(n,t,e,r,s,o)=>{const a=Object.create(Iu);S.toFlatObject(n,a,function(f){return f!==Error.prototype},d=>d!=="isAxiosError");const u=n&&n.message?n.message:"Error",h=t==null&&n?n.code:t;return G.call(a,u,h,e,r,s),n&&a.cause==null&&Object.defineProperty(a,"cause",{value:n,configurable:!0}),a.name=n&&n.name||"Error",o&&Object.assign(a,o),a};const uf=null;function pi(n){return S.isPlainObject(n)||S.isArray(n)}function Ru(n){return S.endsWith(n,"[]")?n.slice(0,-2):n}function Ma(n,t,e){return n?n.concat(t).map(function(s,o){return s=Ru(s),!e&&o?"["+s+"]":s}).join(e?".":""):t}function lf(n){return S.isArray(n)&&!n.some(pi)}const hf=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function ds(n,t,e){if(!S.isObject(n))throw new TypeError("target must be an object");t=t||new FormData,e=S.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(V,b){return!S.isUndefined(b[V])});const r=e.metaTokens,s=e.visitor||f,o=e.dots,a=e.indexes,h=(e.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(t);if(!S.isFunction(s))throw new TypeError("visitor must be a function");function d(v){if(v===null)return"";if(S.isDate(v))return v.toISOString();if(S.isBoolean(v))return v.toString();if(!h&&S.isBlob(v))throw new G("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(v)||S.isTypedArray(v)?h&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,V,b){let x=v;if(v&&!b&&typeof v=="object"){if(S.endsWith(V,"{}"))V=r?V:V.slice(0,-2),v=JSON.stringify(v);else if(S.isArray(v)&&lf(v)||(S.isFileList(v)||S.endsWith(V,"[]"))&&(x=S.toArray(v)))return V=Ru(V),x.forEach(function(L,B){!(S.isUndefined(L)||L===null)&&t.append(a===!0?Ma([V],B,o):a===null?V:V+"[]",d(L))}),!1}return pi(v)?!0:(t.append(Ma(b,V,o),d(v)),!1)}const g=[],w=Object.assign(hf,{defaultVisitor:f,convertValue:d,isVisitable:pi});function P(v,V){if(!S.isUndefined(v)){if(g.indexOf(v)!==-1)throw Error("Circular reference detected in "+V.join("."));g.push(v),S.forEach(v,function(x,F){(!(S.isUndefined(x)||x===null)&&s.call(t,x,S.isString(F)?F.trim():F,V,w))===!0&&P(x,V?V.concat(F):[F])}),g.pop()}}if(!S.isObject(n))throw new TypeError("data must be an object");return P(n),t}function La(n){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function zi(n,t){this._pairs=[],n&&ds(n,this,t)}const bu=zi.prototype;bu.append=function(t,e){this._pairs.push([t,e])};bu.toString=function(t){const e=t?function(r){return t.call(this,r,La)}:La;return this._pairs.map(function(s){return e(s[0])+"="+e(s[1])},"").join("&")};function df(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Su(n,t,e){if(!t)return n;const r=e&&e.encode||df;S.isFunction(e)&&(e={serialize:e});const s=e&&e.serialize;let o;if(s?o=s(t,e):o=S.isURLSearchParams(t)?t.toString():new zi(t,e).toString(r),o){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class Fa{constructor(){this.handlers=[]}use(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Cu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ff=typeof URLSearchParams<"u"?URLSearchParams:zi,pf=typeof FormData<"u"?FormData:null,mf=typeof Blob<"u"?Blob:null,gf={isBrowser:!0,classes:{URLSearchParams:ff,FormData:pf,Blob:mf},protocols:["http","https","file","blob","url","data"]},Hi=typeof window<"u"&&typeof document<"u",mi=typeof navigator=="object"&&navigator||void 0,_f=Hi&&(!mi||["ReactNative","NativeScript","NS"].indexOf(mi.product)<0),yf=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ef=Hi&&window.location.href||"http://localhost",Tf=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Hi,hasStandardBrowserEnv:_f,hasStandardBrowserWebWorkerEnv:yf,navigator:mi,origin:Ef},Symbol.toStringTag,{value:"Module"})),Dt={...Tf,...gf};function wf(n,t){return ds(n,new Dt.classes.URLSearchParams,{visitor:function(e,r,s,o){return Dt.isNode&&S.isBuffer(e)?(this.append(r,e.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function Af(n){return S.matchAll(/\w+|\[(\w*)]/g,n).map(t=>t[0]==="[]"?"":t[1]||t[0])}function If(n){const t={},e=Object.keys(n);let r;const s=e.length;let o;for(r=0;r<s;r++)o=e[r],t[o]=n[o];return t}function Pu(n){function t(e,r,s,o){let a=e[o++];if(a==="__proto__")return!0;const u=Number.isFinite(+a),h=o>=e.length;return a=!a&&S.isArray(s)?s.length:a,h?(S.hasOwnProp(s,a)?s[a]=[s[a],r]:s[a]=r,!u):((!s[a]||!S.isObject(s[a]))&&(s[a]=[]),t(e,r,s[a],o)&&S.isArray(s[a])&&(s[a]=If(s[a])),!u)}if(S.isFormData(n)&&S.isFunction(n.entries)){const e={};return S.forEachEntry(n,(r,s)=>{t(Af(r),s,e,0)}),e}return null}function vf(n,t,e){if(S.isString(n))try{return(t||JSON.parse)(n),S.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(e||JSON.stringify)(n)}const dr={transitional:Cu,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const r=e.getContentType()||"",s=r.indexOf("application/json")>-1,o=S.isObject(t);if(o&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return s?JSON.stringify(Pu(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t)||S.isReadableStream(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return wf(t,this.formSerializer).toString();if((u=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return ds(u?{"files[]":t}:t,h&&new h,this.formSerializer)}}return o||s?(e.setContentType("application/json",!1),vf(t)):t}],transformResponse:[function(t){const e=this.transitional||dr.transitional,r=e&&e.forcedJSONParsing,s=this.responseType==="json";if(S.isResponse(t)||S.isReadableStream(t))return t;if(t&&S.isString(t)&&(r&&!this.responseType||s)){const a=!(e&&e.silentJSONParsing)&&s;try{return JSON.parse(t,this.parseReviver)}catch(u){if(a)throw u.name==="SyntaxError"?G.from(u,G.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],n=>{dr.headers[n]={}});const Rf=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bf=n=>{const t={};let e,r,s;return n&&n.split(`
`).forEach(function(a){s=a.indexOf(":"),e=a.substring(0,s).trim().toLowerCase(),r=a.substring(s+1).trim(),!(!e||t[e]&&Rf[e])&&(e==="set-cookie"?t[e]?t[e].push(r):t[e]=[r]:t[e]=t[e]?t[e]+", "+r:r)}),t},Ua=Symbol("internals");function jn(n){return n&&String(n).trim().toLowerCase()}function jr(n){return n===!1||n==null?n:S.isArray(n)?n.map(jr):String(n)}function Sf(n){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=e.exec(n);)t[r[1]]=r[2];return t}const Cf=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Zs(n,t,e,r,s){if(S.isFunction(r))return r.call(this,t,e);if(s&&(t=e),!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function Pf(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r)}function Vf(n,t){const e=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+e,{value:function(s,o,a){return this[r].call(this,t,s,o,a)},configurable:!0})})}let Ut=class{constructor(t){t&&this.set(t)}set(t,e,r){const s=this;function o(u,h,d){const f=jn(h);if(!f)throw new Error("header name must be a non-empty string");const g=S.findKey(s,f);(!g||s[g]===void 0||d===!0||d===void 0&&s[g]!==!1)&&(s[g||h]=jr(u))}const a=(u,h)=>S.forEach(u,(d,f)=>o(d,f,h));if(S.isPlainObject(t)||t instanceof this.constructor)a(t,e);else if(S.isString(t)&&(t=t.trim())&&!Cf(t))a(bf(t),e);else if(S.isObject(t)&&S.isIterable(t)){let u={},h,d;for(const f of t){if(!S.isArray(f))throw TypeError("Object iterator must return a key-value pair");u[d=f[0]]=(h=u[d])?S.isArray(h)?[...h,f[1]]:[h,f[1]]:f[1]}a(u,e)}else t!=null&&o(e,t,r);return this}get(t,e){if(t=jn(t),t){const r=S.findKey(this,t);if(r){const s=this[r];if(!e)return s;if(e===!0)return Sf(s);if(S.isFunction(e))return e.call(this,s,r);if(S.isRegExp(e))return e.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=jn(t),t){const r=S.findKey(this,t);return!!(r&&this[r]!==void 0&&(!e||Zs(this,this[r],r,e)))}return!1}delete(t,e){const r=this;let s=!1;function o(a){if(a=jn(a),a){const u=S.findKey(r,a);u&&(!e||Zs(r,r[u],u,e))&&(delete r[u],s=!0)}}return S.isArray(t)?t.forEach(o):o(t),s}clear(t){const e=Object.keys(this);let r=e.length,s=!1;for(;r--;){const o=e[r];(!t||Zs(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const e=this,r={};return S.forEach(this,(s,o)=>{const a=S.findKey(r,o);if(a){e[a]=jr(s),delete e[o];return}const u=t?Pf(o):String(o).trim();u!==o&&delete e[o],e[u]=jr(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return S.forEach(this,(r,s)=>{r!=null&&r!==!1&&(e[s]=t&&S.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const r=new this(t);return e.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ua]=this[Ua]={accessors:{}}).accessors,s=this.prototype;function o(a){const u=jn(a);r[u]||(Vf(s,a),r[u]=!0)}return S.isArray(t)?t.forEach(o):o(t),this}};Ut.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(Ut.prototype,({value:n},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(r){this[e]=r}}});S.freezeMethods(Ut);function ti(n,t){const e=this||dr,r=t||e,s=Ut.from(r.headers);let o=r.data;return S.forEach(n,function(u){o=u.call(e,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Vu(n){return!!(n&&n.__CANCEL__)}function En(n,t,e){G.call(this,n??"canceled",G.ERR_CANCELED,t,e),this.name="CanceledError"}S.inherits(En,G,{__CANCEL__:!0});function Du(n,t,e){const r=e.config.validateStatus;!e.status||!r||r(e.status)?n(e):t(new G("Request failed with status code "+e.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(e.status/100)-4],e.config,e.request,e))}function Df(n){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return t&&t[1]||""}function Nf(n,t){n=n||10;const e=new Array(n),r=new Array(n);let s=0,o=0,a;return t=t!==void 0?t:1e3,function(h){const d=Date.now(),f=r[o];a||(a=d),e[s]=h,r[s]=d;let g=o,w=0;for(;g!==s;)w+=e[g++],g=g%n;if(s=(s+1)%n,s===o&&(o=(o+1)%n),d-a<t)return;const P=f&&d-f;return P?Math.round(w*1e3/P):void 0}}function kf(n,t){let e=0,r=1e3/t,s,o;const a=(d,f=Date.now())=>{e=f,s=null,o&&(clearTimeout(o),o=null),n(...d)};return[(...d)=>{const f=Date.now(),g=f-e;g>=r?a(d,f):(s=d,o||(o=setTimeout(()=>{o=null,a(s)},r-g)))},()=>s&&a(s)]}const Qr=(n,t,e=3)=>{let r=0;const s=Nf(50,250);return kf(o=>{const a=o.loaded,u=o.lengthComputable?o.total:void 0,h=a-r,d=s(h),f=a<=u;r=a;const g={loaded:a,total:u,progress:u?a/u:void 0,bytes:h,rate:d||void 0,estimated:d&&u&&f?(u-a)/d:void 0,event:o,lengthComputable:u!=null,[t?"download":"upload"]:!0};n(g)},e)},Ba=(n,t)=>{const e=n!=null;return[r=>t[0]({lengthComputable:e,total:n,loaded:r}),t[1]]},ja=n=>(...t)=>S.asap(()=>n(...t)),Of=Dt.hasStandardBrowserEnv?((n,t)=>e=>(e=new URL(e,Dt.origin),n.protocol===e.protocol&&n.host===e.host&&(t||n.port===e.port)))(new URL(Dt.origin),Dt.navigator&&/(msie|trident)/i.test(Dt.navigator.userAgent)):()=>!0,xf=Dt.hasStandardBrowserEnv?{write(n,t,e,r,s,o){const a=[n+"="+encodeURIComponent(t)];S.isNumber(e)&&a.push("expires="+new Date(e).toGMTString()),S.isString(r)&&a.push("path="+r),S.isString(s)&&a.push("domain="+s),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(n){const t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Mf(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Lf(n,t){return t?n.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):n}function Nu(n,t,e){let r=!Mf(t);return n&&(r||e==!1)?Lf(n,t):t}const qa=n=>n instanceof Ut?{...n}:n;function ze(n,t){t=t||{};const e={};function r(d,f,g,w){return S.isPlainObject(d)&&S.isPlainObject(f)?S.merge.call({caseless:w},d,f):S.isPlainObject(f)?S.merge({},f):S.isArray(f)?f.slice():f}function s(d,f,g,w){if(S.isUndefined(f)){if(!S.isUndefined(d))return r(void 0,d,g,w)}else return r(d,f,g,w)}function o(d,f){if(!S.isUndefined(f))return r(void 0,f)}function a(d,f){if(S.isUndefined(f)){if(!S.isUndefined(d))return r(void 0,d)}else return r(void 0,f)}function u(d,f,g){if(g in t)return r(d,f);if(g in n)return r(void 0,d)}const h={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u,headers:(d,f,g)=>s(qa(d),qa(f),g,!0)};return S.forEach(Object.keys({...n,...t}),function(f){const g=h[f]||s,w=g(n[f],t[f],f);S.isUndefined(w)&&g!==u||(e[f]=w)}),e}const ku=n=>{const t=ze({},n);let{data:e,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:a,auth:u}=t;if(t.headers=a=Ut.from(a),t.url=Su(Nu(t.baseURL,t.url,t.allowAbsoluteUrls),n.params,n.paramsSerializer),u&&a.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),S.isFormData(e)){if(Dt.hasStandardBrowserEnv||Dt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(S.isFunction(e.getHeaders)){const h=e.getHeaders(),d=["content-type","content-length"];Object.entries(h).forEach(([f,g])=>{d.includes(f.toLowerCase())&&a.set(f,g)})}}if(Dt.hasStandardBrowserEnv&&(r&&S.isFunction(r)&&(r=r(t)),r||r!==!1&&Of(t.url))){const h=s&&o&&xf.read(o);h&&a.set(s,h)}return t},Ff=typeof XMLHttpRequest<"u",Uf=Ff&&function(n){return new Promise(function(e,r){const s=ku(n);let o=s.data;const a=Ut.from(s.headers).normalize();let{responseType:u,onUploadProgress:h,onDownloadProgress:d}=s,f,g,w,P,v;function V(){P&&P(),v&&v(),s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let b=new XMLHttpRequest;b.open(s.method.toUpperCase(),s.url,!0),b.timeout=s.timeout;function x(){if(!b)return;const L=Ut.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),J={data:!u||u==="text"||u==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:L,config:n,request:b};Du(function(E){e(E),V()},function(E){r(E),V()},J),b=null}"onloadend"in b?b.onloadend=x:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(x)},b.onabort=function(){b&&(r(new G("Request aborted",G.ECONNABORTED,n,b)),b=null)},b.onerror=function(B){const J=B&&B.message?B.message:"Network Error",tt=new G(J,G.ERR_NETWORK,n,b);tt.event=B||null,r(tt),b=null},b.ontimeout=function(){let B=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const J=s.transitional||Cu;s.timeoutErrorMessage&&(B=s.timeoutErrorMessage),r(new G(B,J.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,n,b)),b=null},o===void 0&&a.setContentType(null),"setRequestHeader"in b&&S.forEach(a.toJSON(),function(B,J){b.setRequestHeader(J,B)}),S.isUndefined(s.withCredentials)||(b.withCredentials=!!s.withCredentials),u&&u!=="json"&&(b.responseType=s.responseType),d&&([w,v]=Qr(d,!0),b.addEventListener("progress",w)),h&&b.upload&&([g,P]=Qr(h),b.upload.addEventListener("progress",g),b.upload.addEventListener("loadend",P)),(s.cancelToken||s.signal)&&(f=L=>{b&&(r(!L||L.type?new En(null,n,b):L),b.abort(),b=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const F=Df(s.url);if(F&&Dt.protocols.indexOf(F)===-1){r(new G("Unsupported protocol "+F+":",G.ERR_BAD_REQUEST,n));return}b.send(o||null)})},Bf=(n,t)=>{const{length:e}=n=n?n.filter(Boolean):[];if(t||e){let r=new AbortController,s;const o=function(d){if(!s){s=!0,u();const f=d instanceof Error?d:this.reason;r.abort(f instanceof G?f:new En(f instanceof Error?f.message:f))}};let a=t&&setTimeout(()=>{a=null,o(new G(`timeout ${t} of ms exceeded`,G.ETIMEDOUT))},t);const u=()=>{n&&(a&&clearTimeout(a),a=null,n.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),n=null)};n.forEach(d=>d.addEventListener("abort",o));const{signal:h}=r;return h.unsubscribe=()=>S.asap(u),h}},jf=function*(n,t){let e=n.byteLength;if(e<t){yield n;return}let r=0,s;for(;r<e;)s=r+t,yield n.slice(r,s),r=s},qf=async function*(n,t){for await(const e of $f(n))yield*jf(e,t)},$f=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const t=n.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},$a=(n,t,e,r)=>{const s=qf(n,t);let o=0,a,u=h=>{a||(a=!0,r&&r(h))};return new ReadableStream({async pull(h){try{const{done:d,value:f}=await s.next();if(d){u(),h.close();return}let g=f.byteLength;if(e){let w=o+=g;e(w)}h.enqueue(new Uint8Array(f))}catch(d){throw u(d),d}},cancel(h){return u(h),s.return()}},{highWaterMark:2})},za=64*1024,{isFunction:Nr}=S,zf=(({Request:n,Response:t})=>({Request:n,Response:t}))(S.global),{ReadableStream:Ha,TextEncoder:Ga}=S.global,Ka=(n,...t)=>{try{return!!n(...t)}catch{return!1}},Hf=n=>{n=S.merge.call({skipUndefined:!0},zf,n);const{fetch:t,Request:e,Response:r}=n,s=t?Nr(t):typeof fetch=="function",o=Nr(e),a=Nr(r);if(!s)return!1;const u=s&&Nr(Ha),h=s&&(typeof Ga=="function"?(v=>V=>v.encode(V))(new Ga):async v=>new Uint8Array(await new e(v).arrayBuffer())),d=o&&u&&Ka(()=>{let v=!1;const V=new e(Dt.origin,{body:new Ha,method:"POST",get duplex(){return v=!0,"half"}}).headers.has("Content-Type");return v&&!V}),f=a&&u&&Ka(()=>S.isReadableStream(new r("").body)),g={stream:f&&(v=>v.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(v=>{!g[v]&&(g[v]=(V,b)=>{let x=V&&V[v];if(x)return x.call(V);throw new G(`Response type '${v}' is not supported`,G.ERR_NOT_SUPPORT,b)})});const w=async v=>{if(v==null)return 0;if(S.isBlob(v))return v.size;if(S.isSpecCompliantForm(v))return(await new e(Dt.origin,{method:"POST",body:v}).arrayBuffer()).byteLength;if(S.isArrayBufferView(v)||S.isArrayBuffer(v))return v.byteLength;if(S.isURLSearchParams(v)&&(v=v+""),S.isString(v))return(await h(v)).byteLength},P=async(v,V)=>{const b=S.toFiniteNumber(v.getContentLength());return b??w(V)};return async v=>{let{url:V,method:b,data:x,signal:F,cancelToken:L,timeout:B,onDownloadProgress:J,onUploadProgress:tt,responseType:E,headers:_,withCredentials:y="same-origin",fetchOptions:A}=ku(v),T=t||fetch;E=E?(E+"").toLowerCase():"text";let I=Bf([F,L&&L.toAbortSignal()],B),m=null;const q=I&&I.unsubscribe&&(()=>{I.unsubscribe()});let $;try{if(tt&&d&&b!=="get"&&b!=="head"&&($=await P(_,x))!==0){let _t=new e(V,{method:"POST",body:x,duplex:"half"}),xt;if(S.isFormData(x)&&(xt=_t.headers.get("content-type"))&&_.setContentType(xt),_t.body){const[Qt,Ht]=Ba($,Qr(ja(tt)));x=$a(_t.body,za,Qt,Ht)}}S.isString(y)||(y=y?"include":"omit");const K=o&&"credentials"in e.prototype,Tt={...A,signal:I,method:b.toUpperCase(),headers:_.normalize().toJSON(),body:x,duplex:"half",credentials:K?y:void 0};m=o&&new e(V,Tt);let rt=await(o?T(m,A):T(V,Tt));const It=f&&(E==="stream"||E==="response");if(f&&(J||It&&q)){const _t={};["status","statusText","headers"].forEach(Ye=>{_t[Ye]=rt[Ye]});const xt=S.toFiniteNumber(rt.headers.get("content-length")),[Qt,Ht]=J&&Ba(xt,Qr(ja(J),!0))||[];rt=new r($a(rt.body,za,Qt,()=>{Ht&&Ht(),q&&q()}),_t)}E=E||"text";let De=await g[S.findKey(g,E)||"text"](rt,v);return!It&&q&&q(),await new Promise((_t,xt)=>{Du(_t,xt,{data:De,headers:Ut.from(rt.headers),status:rt.status,statusText:rt.statusText,config:v,request:m})})}catch(K){throw q&&q(),K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)?Object.assign(new G("Network Error",G.ERR_NETWORK,v,m),{cause:K.cause||K}):G.from(K,K&&K.code,v,m)}}},Gf=new Map,Ou=n=>{let t=n?n.env:{};const{fetch:e,Request:r,Response:s}=t,o=[r,s,e];let a=o.length,u=a,h,d,f=Gf;for(;u--;)h=o[u],d=f.get(h),d===void 0&&f.set(h,d=u?new Map:Hf(t)),f=d;return d};Ou();const gi={http:uf,xhr:Uf,fetch:{get:Ou}};S.forEach(gi,(n,t)=>{if(n){try{Object.defineProperty(n,"name",{value:t})}catch{}Object.defineProperty(n,"adapterName",{value:t})}});const Wa=n=>`- ${n}`,Kf=n=>S.isFunction(n)||n===null||n===!1,xu={getAdapter:(n,t)=>{n=S.isArray(n)?n:[n];const{length:e}=n;let r,s;const o={};for(let a=0;a<e;a++){r=n[a];let u;if(s=r,!Kf(r)&&(s=gi[(u=String(r)).toLowerCase()],s===void 0))throw new G(`Unknown adapter '${u}'`);if(s&&(S.isFunction(s)||(s=s.get(t))))break;o[u||"#"+a]=s}if(!s){const a=Object.entries(o).map(([h,d])=>`adapter ${h} `+(d===!1?"is not supported by the environment":"is not available in the build"));let u=e?a.length>1?`since :
`+a.map(Wa).join(`
`):" "+Wa(a[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return s},adapters:gi};function ei(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new En(null,n)}function Qa(n){return ei(n),n.headers=Ut.from(n.headers),n.data=ti.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),xu.getAdapter(n.adapter||dr.adapter,n)(n).then(function(r){return ei(n),r.data=ti.call(n,n.transformResponse,r),r.headers=Ut.from(r.headers),r},function(r){return Vu(r)||(ei(n),r&&r.response&&(r.response.data=ti.call(n,n.transformResponse,r.response),r.response.headers=Ut.from(r.response.headers))),Promise.reject(r)})}const Mu="1.12.2",fs={};["object","boolean","number","function","string","symbol"].forEach((n,t)=>{fs[n]=function(r){return typeof r===n||"a"+(t<1?"n ":" ")+n}});const Xa={};fs.transitional=function(t,e,r){function s(o,a){return"[Axios v"+Mu+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,u)=>{if(t===!1)throw new G(s(a," has been removed"+(e?" in "+e:"")),G.ERR_DEPRECATED);return e&&!Xa[a]&&(Xa[a]=!0,console.warn(s(a," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(o,a,u):!0}};fs.spelling=function(t){return(e,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Wf(n,t,e){if(typeof n!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let s=r.length;for(;s-- >0;){const o=r[s],a=t[o];if(a){const u=n[o],h=u===void 0||a(u,o,n);if(h!==!0)throw new G("option "+o+" must be "+h,G.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new G("Unknown option "+o,G.ERR_BAD_OPTION)}}const qr={assertOptions:Wf,validators:fs},Yt=qr.validators;let Be=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Fa,response:new Fa}}async request(t,e){try{return await this._request(t,e)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=ze(this.defaults,e);const{transitional:r,paramsSerializer:s,headers:o}=e;r!==void 0&&qr.assertOptions(r,{silentJSONParsing:Yt.transitional(Yt.boolean),forcedJSONParsing:Yt.transitional(Yt.boolean),clarifyTimeoutError:Yt.transitional(Yt.boolean)},!1),s!=null&&(S.isFunction(s)?e.paramsSerializer={serialize:s}:qr.assertOptions(s,{encode:Yt.function,serialize:Yt.function},!0)),e.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),qr.assertOptions(e,{baseUrl:Yt.spelling("baseURL"),withXsrfToken:Yt.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let a=o&&S.merge(o.common,o[e.method]);o&&S.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),e.headers=Ut.concat(a,o);const u=[];let h=!0;this.interceptors.request.forEach(function(V){typeof V.runWhen=="function"&&V.runWhen(e)===!1||(h=h&&V.synchronous,u.unshift(V.fulfilled,V.rejected))});const d=[];this.interceptors.response.forEach(function(V){d.push(V.fulfilled,V.rejected)});let f,g=0,w;if(!h){const v=[Qa.bind(this),void 0];for(v.unshift(...u),v.push(...d),w=v.length,f=Promise.resolve(e);g<w;)f=f.then(v[g++],v[g++]);return f}w=u.length;let P=e;for(;g<w;){const v=u[g++],V=u[g++];try{P=v(P)}catch(b){V.call(this,b);break}}try{f=Qa.call(this,P)}catch(v){return Promise.reject(v)}for(g=0,w=d.length;g<w;)f=f.then(d[g++],d[g++]);return f}getUri(t){t=ze(this.defaults,t);const e=Nu(t.baseURL,t.url,t.allowAbsoluteUrls);return Su(e,t.params,t.paramsSerializer)}};S.forEach(["delete","get","head","options"],function(t){Be.prototype[t]=function(e,r){return this.request(ze(r||{},{method:t,url:e,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function e(r){return function(o,a,u){return this.request(ze(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Be.prototype[t]=e(),Be.prototype[t+"Form"]=e(!0)});let Qf=class Lu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(o){e=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const a=new Promise(u=>{r.subscribe(u),o=u}).then(s);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,u){r.reason||(r.reason=new En(o,a,u),e(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=r=>{t.abort(r)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;return{token:new Lu(function(s){t=s}),cancel:t}}};function Xf(n){return function(e){return n.apply(null,e)}}function Jf(n){return S.isObject(n)&&n.isAxiosError===!0}const _i={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(_i).forEach(([n,t])=>{_i[t]=n});function Fu(n){const t=new Be(n),e=mu(Be.prototype.request,t);return S.extend(e,Be.prototype,t,{allOwnKeys:!0}),S.extend(e,t,null,{allOwnKeys:!0}),e.create=function(s){return Fu(ze(n,s))},e}const dt=Fu(dr);dt.Axios=Be;dt.CanceledError=En;dt.CancelToken=Qf;dt.isCancel=Vu;dt.VERSION=Mu;dt.toFormData=ds;dt.AxiosError=G;dt.Cancel=dt.CanceledError;dt.all=function(t){return Promise.all(t)};dt.spread=Xf;dt.isAxiosError=Jf;dt.mergeConfig=ze;dt.AxiosHeaders=Ut;dt.formToJSON=n=>Pu(S.isHTMLForm(n)?new FormData(n):n);dt.getAdapter=xu.getAdapter;dt.HttpStatusCode=_i;dt.default=dt;const{Axios:wT,AxiosError:AT,CanceledError:IT,isCancel:vT,CancelToken:RT,VERSION:bT,all:ST,Cancel:CT,isAxiosError:PT,spread:VT,toFormData:DT,AxiosHeaders:NT,HttpStatusCode:kT,formToJSON:OT,getAdapter:xT,mergeConfig:MT}=dt;window.axios=dt;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const Yf=()=>{};var Ja={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Zf=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Bu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,f=o>>2,g=(o&3)<<4|u>>4;let w=(u&15)<<2|d>>6,P=d&63;h||(P=64,a||(w=64)),r.push(e[f],e[g],e[w],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Uu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Zf(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const g=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||g==null)throw new tp;const w=o<<2|u>>4;if(r.push(w),d!==64){const P=u<<4&240|d>>2;if(r.push(P),g!==64){const v=d<<6&192|g;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ep=function(n){const t=Uu(n);return Bu.encodeByteArray(t,!0)},Xr=function(n){return ep(n).replace(/\./g,"")},np=function(n){try{return Bu.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=()=>rp().__FIREBASE_DEFAULTS__,ip=()=>{if(typeof process>"u"||typeof Ja>"u")return;const n=Ja.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},op=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&np(n[1]);return t&&JSON.parse(t)},Gi=()=>{try{return Yf()||sp()||ip()||op()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ap=n=>Gi()?.emulatorHosts?.[n],ju=n=>{const t=ap(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},qu=()=>Gi()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $u(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Xr(JSON.stringify(e)),Xr(JSON.stringify(a)),""].join(".")}const Kn={};function up(){const n={prod:[],emulator:[]};for(const t of Object.keys(Kn))Kn[t]?n.emulator.push(t):n.prod.push(t);return n}function lp(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Ya=!1;function Hu(n,t){if(typeof window>"u"||typeof document>"u"||!fr(window.location.host)||Kn[n]===t||Kn[n]||Ya)return;Kn[n]=t;function e(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=up().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function u(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Ya=!0,a()},w}function f(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=lp(r),P=e("text"),v=document.getElementById(P)||document.createElement("span"),V=e("learnmore"),b=document.getElementById(V)||document.createElement("a"),x=e("preprendIcon"),F=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const L=w.element;u(L),f(b,V);const B=d();h(F,x),L.append(F,v,b,B),document.body.appendChild(L)}o?(v.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dp(){const n=Gi()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fp(){return!dp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pp(){try{return typeof indexedDB=="object"}catch{return!1}}function mp(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="FirebaseError";class We extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=gp,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gu.prototype.create)}}class Gu{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?_p(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new We(s,u,r)}}function _p(n,t){return n.replace(yp,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const yp=/\{\$([^}]+)}/g;function Jr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Za(o)&&Za(a)){if(!Jr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Za(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(n){return n&&n._delegate?n._delegate:n}class ln{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new cp;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(wp(t))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Le){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Le){return this.instances.has(t)}getOptions(t=Le){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tp(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Le){return this.component?this.component.multipleInstances?t:Le:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tp(n){return n===Le?void 0:n}function wp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ep(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Ip={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},vp=Z.INFO,Rp={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},bp=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Rp[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ku{constructor(t){this.name=t,this._logLevel=vp,this._logHandler=bp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ip[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const Sp=(n,t)=>t.some(e=>n instanceof e);let tc,ec;function Cp(){return tc||(tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pp(){return ec||(ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wu=new WeakMap,yi=new WeakMap,Qu=new WeakMap,ni=new WeakMap,Ki=new WeakMap;function Vp(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(_e(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Wu.set(e,n)}).catch(()=>{}),Ki.set(t,n),t}function Dp(n){if(yi.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});yi.set(n,t)}let Ei={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return yi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Qu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return _e(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Np(n){Ei=n(Ei)}function kp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ri(this),t,...e);return Qu.set(r,t.sort?t.sort():[t]),_e(r)}:Pp().includes(n)?function(...t){return n.apply(ri(this),t),_e(Wu.get(this))}:function(...t){return _e(n.apply(ri(this),t))}}function Op(n){return typeof n=="function"?kp(n):(n instanceof IDBTransaction&&Dp(n),Sp(n,Cp())?new Proxy(n,Ei):n)}function _e(n){if(n instanceof IDBRequest)return Vp(n);if(ni.has(n))return ni.get(n);const t=Op(n);return t!==n&&(ni.set(n,t),Ki.set(t,n)),t}const ri=n=>Ki.get(n);function xp(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=_e(a);return r&&a.addEventListener("upgradeneeded",h=>{r(_e(a.result),h.oldVersion,h.newVersion,_e(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Mp=["get","getKey","getAll","getAllKeys","count"],Lp=["put","add","delete","clear"],si=new Map;function nc(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(si.get(t))return si.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Lp.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Mp.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return si.set(t,o),o}Np(n=>({...n,get:(t,e,r)=>nc(t,e)||n.get(t,e,r),has:(t,e)=>!!nc(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Up(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Up(n){return n.getComponent()?.type==="VERSION"}const Ti="@firebase/app",rc="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new Ku("@firebase/app"),Bp="@firebase/app-compat",jp="@firebase/analytics-compat",qp="@firebase/analytics",$p="@firebase/app-check-compat",zp="@firebase/app-check",Hp="@firebase/auth",Gp="@firebase/auth-compat",Kp="@firebase/database",Wp="@firebase/data-connect",Qp="@firebase/database-compat",Xp="@firebase/functions",Jp="@firebase/functions-compat",Yp="@firebase/installations",Zp="@firebase/installations-compat",tm="@firebase/messaging",em="@firebase/messaging-compat",nm="@firebase/performance",rm="@firebase/performance-compat",sm="@firebase/remote-config",im="@firebase/remote-config-compat",om="@firebase/storage",am="@firebase/storage-compat",cm="@firebase/firestore",um="@firebase/ai",lm="@firebase/firestore-compat",hm="firebase",dm="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]",fm={[Ti]:"fire-core",[Bp]:"fire-core-compat",[qp]:"fire-analytics",[jp]:"fire-analytics-compat",[zp]:"fire-app-check",[$p]:"fire-app-check-compat",[Hp]:"fire-auth",[Gp]:"fire-auth-compat",[Kp]:"fire-rtdb",[Wp]:"fire-data-connect",[Qp]:"fire-rtdb-compat",[Xp]:"fire-fn",[Jp]:"fire-fn-compat",[Yp]:"fire-iid",[Zp]:"fire-iid-compat",[tm]:"fire-fcm",[em]:"fire-fcm-compat",[nm]:"fire-perf",[rm]:"fire-perf-compat",[sm]:"fire-rc",[im]:"fire-rc-compat",[om]:"fire-gcs",[am]:"fire-gcs-compat",[cm]:"fire-fst",[lm]:"fire-fst-compat",[um]:"fire-vertex","fire-js":"fire-js",[hm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Map,pm=new Map,Ai=new Map;function sc(n,t){try{n.container.addComponent(t)}catch(e){oe.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Zn(n){const t=n.name;if(Ai.has(t))return oe.debug(`There were multiple attempts to register component ${t}.`),!1;Ai.set(t,n);for(const e of Yr.values())sc(e,n);for(const e of pm.values())sc(e,n);return!0}function Xu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Ju(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ye=new Gu("app","Firebase",mm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ye.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=dm;function Zu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:wi,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw ye.create("bad-app-name",{appName:String(s)});if(e||(e=qu()),!e)throw ye.create("no-options");const o=Yr.get(s);if(o){if(Jr(e,o.options)&&Jr(r,o.config))return o;throw ye.create("duplicate-app",{appName:s})}const a=new Ap(s);for(const h of Ai.values())a.addComponent(h);const u=new gm(e,r,a);return Yr.set(s,u),u}function tl(n=wi){const t=Yr.get(n);if(!t&&n===wi&&qu())return Zu();if(!t)throw ye.create("no-app",{appName:n});return t}function Ee(n,t,e){let r=fm[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),oe.warn(a.join(" "));return}Zn(new ln(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="firebase-heartbeat-database",ym=1,tr="firebase-heartbeat-store";let ii=null;function el(){return ii||(ii=xp(_m,ym,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(tr)}catch(e){console.warn(e)}}}}).catch(n=>{throw ye.create("idb-open",{originalErrorMessage:n.message})})),ii}async function Em(n){try{const e=(await el()).transaction(tr),r=await e.objectStore(tr).get(nl(n));return await e.done,r}catch(t){if(t instanceof We)oe.warn(t.message);else{const e=ye.create("idb-get",{originalErrorMessage:t?.message});oe.warn(e.message)}}}async function ic(n,t){try{const r=(await el()).transaction(tr,"readwrite");await r.objectStore(tr).put(t,nl(n)),await r.done}catch(e){if(e instanceof We)oe.warn(e.message);else{const r=ye.create("idb-set",{originalErrorMessage:e?.message});oe.warn(r.message)}}}function nl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=1024,wm=30;class Am{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new vm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>wm){const s=Rm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){oe.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oc(),{heartbeatsToSend:e,unsentEntries:r}=Im(this._heartbeatsCache.heartbeats),s=Xr(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return oe.warn(t),""}}}function oc(){return new Date().toISOString().substring(0,10)}function Im(n,t=Tm){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ac(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ac(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class vm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pp()?mp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Em(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ic(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ic(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ac(n){return Xr(JSON.stringify({version:2,heartbeats:n})).length}function Rm(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n){Zn(new ln("platform-logger",t=>new Fp(t),"PRIVATE")),Zn(new ln("heartbeat",t=>new Am(t),"PRIVATE")),Ee(Ti,rc,n),Ee(Ti,rc,"esm2020"),Ee("fire-js","")}bm("");var Sm="firebase",Cm="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee(Sm,Cm,"app");var cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Te,rl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,_){function y(){}y.prototype=_.prototype,E.F=_.prototype,E.prototype=new y,E.prototype.constructor=E,E.D=function(A,T,I){for(var m=Array(arguments.length-2),q=2;q<arguments.length;q++)m[q-2]=arguments[q];return _.prototype[T].apply(A,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,y){y||(y=0);const A=Array(16);if(typeof _=="string")for(var T=0;T<16;++T)A[T]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(T=0;T<16;++T)A[T]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=E.g[0],y=E.g[1],T=E.g[2];let I=E.g[3],m;m=_+(I^y&(T^I))+A[0]+3614090360&4294967295,_=y+(m<<7&4294967295|m>>>25),m=I+(T^_&(y^T))+A[1]+3905402710&4294967295,I=_+(m<<12&4294967295|m>>>20),m=T+(y^I&(_^y))+A[2]+606105819&4294967295,T=I+(m<<17&4294967295|m>>>15),m=y+(_^T&(I^_))+A[3]+3250441966&4294967295,y=T+(m<<22&4294967295|m>>>10),m=_+(I^y&(T^I))+A[4]+4118548399&4294967295,_=y+(m<<7&4294967295|m>>>25),m=I+(T^_&(y^T))+A[5]+1200080426&4294967295,I=_+(m<<12&4294967295|m>>>20),m=T+(y^I&(_^y))+A[6]+2821735955&4294967295,T=I+(m<<17&4294967295|m>>>15),m=y+(_^T&(I^_))+A[7]+4249261313&4294967295,y=T+(m<<22&4294967295|m>>>10),m=_+(I^y&(T^I))+A[8]+1770035416&4294967295,_=y+(m<<7&4294967295|m>>>25),m=I+(T^_&(y^T))+A[9]+2336552879&4294967295,I=_+(m<<12&4294967295|m>>>20),m=T+(y^I&(_^y))+A[10]+4294925233&4294967295,T=I+(m<<17&4294967295|m>>>15),m=y+(_^T&(I^_))+A[11]+2304563134&4294967295,y=T+(m<<22&4294967295|m>>>10),m=_+(I^y&(T^I))+A[12]+1804603682&4294967295,_=y+(m<<7&4294967295|m>>>25),m=I+(T^_&(y^T))+A[13]+4254626195&4294967295,I=_+(m<<12&4294967295|m>>>20),m=T+(y^I&(_^y))+A[14]+2792965006&4294967295,T=I+(m<<17&4294967295|m>>>15),m=y+(_^T&(I^_))+A[15]+1236535329&4294967295,y=T+(m<<22&4294967295|m>>>10),m=_+(T^I&(y^T))+A[1]+4129170786&4294967295,_=y+(m<<5&4294967295|m>>>27),m=I+(y^T&(_^y))+A[6]+3225465664&4294967295,I=_+(m<<9&4294967295|m>>>23),m=T+(_^y&(I^_))+A[11]+643717713&4294967295,T=I+(m<<14&4294967295|m>>>18),m=y+(I^_&(T^I))+A[0]+3921069994&4294967295,y=T+(m<<20&4294967295|m>>>12),m=_+(T^I&(y^T))+A[5]+3593408605&4294967295,_=y+(m<<5&4294967295|m>>>27),m=I+(y^T&(_^y))+A[10]+38016083&4294967295,I=_+(m<<9&4294967295|m>>>23),m=T+(_^y&(I^_))+A[15]+3634488961&4294967295,T=I+(m<<14&4294967295|m>>>18),m=y+(I^_&(T^I))+A[4]+3889429448&4294967295,y=T+(m<<20&4294967295|m>>>12),m=_+(T^I&(y^T))+A[9]+568446438&4294967295,_=y+(m<<5&4294967295|m>>>27),m=I+(y^T&(_^y))+A[14]+3275163606&4294967295,I=_+(m<<9&4294967295|m>>>23),m=T+(_^y&(I^_))+A[3]+4107603335&4294967295,T=I+(m<<14&4294967295|m>>>18),m=y+(I^_&(T^I))+A[8]+1163531501&4294967295,y=T+(m<<20&4294967295|m>>>12),m=_+(T^I&(y^T))+A[13]+2850285829&4294967295,_=y+(m<<5&4294967295|m>>>27),m=I+(y^T&(_^y))+A[2]+4243563512&4294967295,I=_+(m<<9&4294967295|m>>>23),m=T+(_^y&(I^_))+A[7]+1735328473&4294967295,T=I+(m<<14&4294967295|m>>>18),m=y+(I^_&(T^I))+A[12]+2368359562&4294967295,y=T+(m<<20&4294967295|m>>>12),m=_+(y^T^I)+A[5]+4294588738&4294967295,_=y+(m<<4&4294967295|m>>>28),m=I+(_^y^T)+A[8]+2272392833&4294967295,I=_+(m<<11&4294967295|m>>>21),m=T+(I^_^y)+A[11]+1839030562&4294967295,T=I+(m<<16&4294967295|m>>>16),m=y+(T^I^_)+A[14]+4259657740&4294967295,y=T+(m<<23&4294967295|m>>>9),m=_+(y^T^I)+A[1]+2763975236&4294967295,_=y+(m<<4&4294967295|m>>>28),m=I+(_^y^T)+A[4]+1272893353&4294967295,I=_+(m<<11&4294967295|m>>>21),m=T+(I^_^y)+A[7]+4139469664&4294967295,T=I+(m<<16&4294967295|m>>>16),m=y+(T^I^_)+A[10]+3200236656&4294967295,y=T+(m<<23&4294967295|m>>>9),m=_+(y^T^I)+A[13]+681279174&4294967295,_=y+(m<<4&4294967295|m>>>28),m=I+(_^y^T)+A[0]+3936430074&4294967295,I=_+(m<<11&4294967295|m>>>21),m=T+(I^_^y)+A[3]+3572445317&4294967295,T=I+(m<<16&4294967295|m>>>16),m=y+(T^I^_)+A[6]+76029189&4294967295,y=T+(m<<23&4294967295|m>>>9),m=_+(y^T^I)+A[9]+3654602809&4294967295,_=y+(m<<4&4294967295|m>>>28),m=I+(_^y^T)+A[12]+3873151461&4294967295,I=_+(m<<11&4294967295|m>>>21),m=T+(I^_^y)+A[15]+530742520&4294967295,T=I+(m<<16&4294967295|m>>>16),m=y+(T^I^_)+A[2]+3299628645&4294967295,y=T+(m<<23&4294967295|m>>>9),m=_+(T^(y|~I))+A[0]+4096336452&4294967295,_=y+(m<<6&4294967295|m>>>26),m=I+(y^(_|~T))+A[7]+1126891415&4294967295,I=_+(m<<10&4294967295|m>>>22),m=T+(_^(I|~y))+A[14]+2878612391&4294967295,T=I+(m<<15&4294967295|m>>>17),m=y+(I^(T|~_))+A[5]+4237533241&4294967295,y=T+(m<<21&4294967295|m>>>11),m=_+(T^(y|~I))+A[12]+1700485571&4294967295,_=y+(m<<6&4294967295|m>>>26),m=I+(y^(_|~T))+A[3]+2399980690&4294967295,I=_+(m<<10&4294967295|m>>>22),m=T+(_^(I|~y))+A[10]+4293915773&4294967295,T=I+(m<<15&4294967295|m>>>17),m=y+(I^(T|~_))+A[1]+2240044497&4294967295,y=T+(m<<21&4294967295|m>>>11),m=_+(T^(y|~I))+A[8]+1873313359&4294967295,_=y+(m<<6&4294967295|m>>>26),m=I+(y^(_|~T))+A[15]+4264355552&4294967295,I=_+(m<<10&4294967295|m>>>22),m=T+(_^(I|~y))+A[6]+2734768916&4294967295,T=I+(m<<15&4294967295|m>>>17),m=y+(I^(T|~_))+A[13]+1309151649&4294967295,y=T+(m<<21&4294967295|m>>>11),m=_+(T^(y|~I))+A[4]+4149444226&4294967295,_=y+(m<<6&4294967295|m>>>26),m=I+(y^(_|~T))+A[11]+3174756917&4294967295,I=_+(m<<10&4294967295|m>>>22),m=T+(_^(I|~y))+A[2]+718787259&4294967295,T=I+(m<<15&4294967295|m>>>17),m=y+(I^(T|~_))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(T+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const y=_-this.blockSize,A=this.C;let T=this.h,I=0;for(;I<_;){if(T==0)for(;I<=y;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<_;)if(A[T++]=E.charCodeAt(I++),T==this.blockSize){s(this,A),T=0;break}}else for(;I<_;)if(A[T++]=E[I++],T==this.blockSize){s(this,A),T=0;break}}this.h=T,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var y=E.length-8;y<E.length;++y)E[y]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,y=0;y<4;++y)for(let A=0;A<32;A+=8)E[_++]=this.g[y]>>>A&255;return E};function o(E,_){var y=u;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=_(E)}function a(E,_){this.h=_;const y=[];let A=!0;for(let T=E.length-1;T>=0;T--){const I=E[T]|0;A&&I==_||(y[T]=I,A=!1)}this.g=y}var u={};function h(E){return-128<=E&&E<128?o(E,function(_){return new a([_|0],_<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return g;if(E<0)return b(d(-E));const _=[];let y=1;for(let A=0;E>=y;A++)_[A]=E/y|0,y*=4294967296;return new a(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return b(f(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(_,8));let A=g;for(let I=0;I<E.length;I+=8){var T=Math.min(8,E.length-I);const m=parseInt(E.substring(I,I+T),_);T<8?(T=d(Math.pow(_,T)),A=A.j(T).add(d(m))):(A=A.j(y),A=A.add(d(m)))}return A}var g=h(0),w=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(V(this))return-b(this).m();let E=0,_=1;for(let y=0;y<this.g.length;y++){const A=this.i(y);E+=(A>=0?A:4294967296+A)*_,_*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(v(this))return"0";if(V(this))return"-"+b(this).toString(E);const _=d(Math.pow(E,6));var y=this;let A="";for(;;){const T=B(y,_).g;y=x(y,T.j(_));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(E);if(y=T,v(y))return I+A;for(;I.length<6;)I="0"+I;A=I+A}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function v(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function V(E){return E.h==-1}n.l=function(E){return E=x(this,E),V(E)?-1:v(E)?0:1};function b(E){const _=E.g.length,y=[];for(let A=0;A<_;A++)y[A]=~E.g[A];return new a(y,~E.h).add(w)}n.abs=function(){return V(this)?b(this):this},n.add=function(E){const _=Math.max(this.g.length,E.g.length),y=[];let A=0;for(let T=0;T<=_;T++){let I=A+(this.i(T)&65535)+(E.i(T)&65535),m=(I>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);A=m>>>16,I&=65535,m&=65535,y[T]=m<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function x(E,_){return E.add(b(_))}n.j=function(E){if(v(this)||v(E))return g;if(V(this))return V(E)?b(this).j(b(E)):b(b(this).j(E));if(V(E))return b(this.j(b(E)));if(this.l(P)<0&&E.l(P)<0)return d(this.m()*E.m());const _=this.g.length+E.g.length,y=[];for(var A=0;A<2*_;A++)y[A]=0;for(A=0;A<this.g.length;A++)for(let T=0;T<E.g.length;T++){const I=this.i(A)>>>16,m=this.i(A)&65535,q=E.i(T)>>>16,$=E.i(T)&65535;y[2*A+2*T]+=m*$,F(y,2*A+2*T),y[2*A+2*T+1]+=I*$,F(y,2*A+2*T+1),y[2*A+2*T+1]+=m*q,F(y,2*A+2*T+1),y[2*A+2*T+2]+=I*q,F(y,2*A+2*T+2)}for(E=0;E<_;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=_;E<2*_;E++)y[E]=0;return new a(y,0)};function F(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function L(E,_){this.g=E,this.h=_}function B(E,_){if(v(_))throw Error("division by zero");if(v(E))return new L(g,g);if(V(E))return _=B(b(E),_),new L(b(_.g),b(_.h));if(V(_))return _=B(E,b(_)),new L(b(_.g),_.h);if(E.g.length>30){if(V(E)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var y=w,A=_;A.l(E)<=0;)y=J(y),A=J(A);var T=tt(y,1),I=tt(A,1);for(A=tt(A,2),y=tt(y,2);!v(A);){var m=I.add(A);m.l(E)<=0&&(T=T.add(y),I=m),A=tt(A,1),y=tt(y,1)}return _=x(E,T.j(_)),new L(T,_)}for(T=g;E.l(_)>=0;){for(y=Math.max(1,Math.floor(E.m()/_.m())),A=Math.ceil(Math.log(y)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),I=d(y),m=I.j(_);V(m)||m.l(E)>0;)y-=A,I=d(y),m=I.j(_);v(I)&&(I=w),T=T.add(I),E=x(E,m)}return new L(T,E)}n.B=function(E){return B(this,E).h},n.and=function(E){const _=Math.max(this.g.length,E.g.length),y=[];for(let A=0;A<_;A++)y[A]=this.i(A)&E.i(A);return new a(y,this.h&E.h)},n.or=function(E){const _=Math.max(this.g.length,E.g.length),y=[];for(let A=0;A<_;A++)y[A]=this.i(A)|E.i(A);return new a(y,this.h|E.h)},n.xor=function(E){const _=Math.max(this.g.length,E.g.length),y=[];for(let A=0;A<_;A++)y[A]=this.i(A)^E.i(A);return new a(y,this.h^E.h)};function J(E){const _=E.g.length+1,y=[];for(let A=0;A<_;A++)y[A]=E.i(A)<<1|E.i(A-1)>>>31;return new a(y,E.h)}function tt(E,_){const y=_>>5;_%=32;const A=E.g.length-y,T=[];for(let I=0;I<A;I++)T[I]=_>0?E.i(I+y)>>>_|E.i(I+y+1)<<32-_:E.i(I+y);return new a(T,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,rl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Te=a}).apply(typeof cc<"u"?cc:typeof self<"u"?self:typeof window<"u"?window:{});var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sl,$n,il,$r,Ii,ol,al,cl;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof kr=="object"&&kr];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var l=r;i=i.split(".");for(var p=0;p<i.length-1;p++){var R=i[p];if(!(R in l))break t;l=l[R]}i=i[i.length-1],p=l[i],c=c(p),c!=p&&c!=null&&t(l,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var l=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&l.push([p,c[p]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,l){return i.call.apply(i.bind,arguments)}function d(i,c,l){return d=h,d.apply(null,arguments)}function f(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var p=l.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function g(i,c){function l(){}l.prototype=c.prototype,i.Z=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(p,R,C){for(var k=Array(arguments.length-2),W=2;W<arguments.length;W++)k[W-2]=arguments[W];return c.prototype[R].apply(p,k)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function P(i){const c=i.length;if(c>0){const l=Array(c);for(let p=0;p<c;p++)l[p]=i[p];return l}return[]}function v(i,c){for(let p=1;p<arguments.length;p++){const R=arguments[p];var l=typeof R;if(l=l!="object"?l:R?Array.isArray(R)?"array":l:"null",l=="array"||l=="object"&&typeof R.length=="number"){l=i.length||0;const C=R.length||0;i.length=l+C;for(let k=0;k<C;k++)i[l+k]=R[k]}else i.push(R)}}class V{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function b(i){a.setTimeout(()=>{throw i},0)}function x(){var i=E;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class F{constructor(){this.h=this.g=null}add(c,l){const p=L.get();p.set(c,l),this.h?this.h.next=p:this.g=p,this.h=p}}var L=new V(()=>new B,i=>i.reset());class B{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let J,tt=!1,E=new F,_=()=>{const i=Promise.resolve(void 0);J=()=>{i.then(y)}};function y(){for(var i;i=x();){try{i.h.call(i.g)}catch(l){b(l)}var c=L;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}tt=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return i})();function m(i){return/^[\s\xa0]*$/.test(i)}function q(i,c){T.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}g(q,T),q.prototype.init=function(i,c){const l=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&q.Z.h.call(this)},q.prototype.h=function(){q.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var $="closure_listenable_"+(Math.random()*1e6|0),K=0;function Tt(i,c,l,p,R){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!p,this.ha=R,this.key=++K,this.da=this.fa=!1}function rt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function It(i,c,l){for(const p in i)c.call(l,i[p],p,i)}function De(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function _t(i){const c={};for(const l in i)c[l]=i[l];return c}const xt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qt(i,c){let l,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(l in p)i[l]=p[l];for(let C=0;C<xt.length;C++)l=xt[C],Object.prototype.hasOwnProperty.call(p,l)&&(i[l]=p[l])}}function Ht(i){this.src=i,this.g={},this.h=0}Ht.prototype.add=function(i,c,l,p,R){const C=i.toString();i=this.g[C],i||(i=this.g[C]=[],this.h++);const k=Vs(i,c,p,R);return k>-1?(c=i[k],l||(c.fa=!1)):(c=new Tt(c,this.src,C,!!p,R),c.fa=l,i.push(c)),c};function Ye(i,c){const l=c.type;if(l in i.g){var p=i.g[l],R=Array.prototype.indexOf.call(p,c,void 0),C;(C=R>=0)&&Array.prototype.splice.call(p,R,1),C&&(rt(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Vs(i,c,l,p){for(let R=0;R<i.length;++R){const C=i[R];if(!C.da&&C.listener==c&&C.capture==!!l&&C.ha==p)return R}return-1}var Ds="closure_lm_"+(Math.random()*1e6|0),Ns={};function Lo(i,c,l,p,R){if(Array.isArray(c)){for(let C=0;C<c.length;C++)Lo(i,c[C],l,p,R);return null}return l=Bo(l),i&&i[$]?i.J(c,l,u(p)?!!p.capture:!1,R):Wh(i,c,l,!1,p,R)}function Wh(i,c,l,p,R,C){if(!c)throw Error("Invalid event type");const k=u(R)?!!R.capture:!!R;let W=Os(i);if(W||(i[Ds]=W=new Ht(i)),l=W.add(c,l,p,k,C),l.proxy)return l;if(p=Qh(),l.proxy=p,p.src=i,p.listener=l,i.addEventListener)I||(R=k),R===void 0&&(R=!1),i.addEventListener(c.toString(),p,R);else if(i.attachEvent)i.attachEvent(Uo(c.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Qh(){function i(l){return c.call(i.src,i.listener,l)}const c=Xh;return i}function Fo(i,c,l,p,R){if(Array.isArray(c))for(var C=0;C<c.length;C++)Fo(i,c[C],l,p,R);else p=u(p)?!!p.capture:!!p,l=Bo(l),i&&i[$]?(i=i.i,C=String(c).toString(),C in i.g&&(c=i.g[C],l=Vs(c,l,p,R),l>-1&&(rt(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete i.g[C],i.h--)))):i&&(i=Os(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Vs(c,l,p,R)),(l=i>-1?c[i]:null)&&ks(l))}function ks(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[$])Ye(c.i,i);else{var l=i.type,p=i.proxy;c.removeEventListener?c.removeEventListener(l,p,i.capture):c.detachEvent?c.detachEvent(Uo(l),p):c.addListener&&c.removeListener&&c.removeListener(p),(l=Os(c))?(Ye(l,i),l.h==0&&(l.src=null,c[Ds]=null)):rt(i)}}}function Uo(i){return i in Ns?Ns[i]:Ns[i]="on"+i}function Xh(i,c){if(i.da)i=!0;else{c=new q(c,this);const l=i.listener,p=i.ha||i.src;i.fa&&ks(i),i=l.call(p,c)}return i}function Os(i){return i=i[Ds],i instanceof Ht?i:null}var xs="__closure_events_fn_"+(Math.random()*1e9>>>0);function Bo(i){return typeof i=="function"?i:(i[xs]||(i[xs]=function(c){return i.handleEvent(c)}),i[xs])}function St(){A.call(this),this.i=new Ht(this),this.M=this,this.G=null}g(St,A),St.prototype[$]=!0,St.prototype.removeEventListener=function(i,c,l,p){Fo(this,i,c,l,p)};function Nt(i,c){var l,p=i.G;if(p)for(l=[];p;p=p.G)l.push(p);if(i=i.M,p=c.type||c,typeof c=="string")c=new T(c,i);else if(c instanceof T)c.target=c.target||i;else{var R=c;c=new T(p,i),Qt(c,R)}R=!0;let C,k;if(l)for(k=l.length-1;k>=0;k--)C=c.g=l[k],R=Tr(C,p,!0,c)&&R;if(C=c.g=i,R=Tr(C,p,!0,c)&&R,R=Tr(C,p,!1,c)&&R,l)for(k=0;k<l.length;k++)C=c.g=l[k],R=Tr(C,p,!1,c)&&R}St.prototype.N=function(){if(St.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const l=i.g[c];for(let p=0;p<l.length;p++)rt(l[p]);delete i.g[c],i.h--}}this.G=null},St.prototype.J=function(i,c,l,p){return this.i.add(String(i),c,!1,l,p)},St.prototype.K=function(i,c,l,p){return this.i.add(String(i),c,!0,l,p)};function Tr(i,c,l,p){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let C=0;C<c.length;++C){const k=c[C];if(k&&!k.da&&k.capture==l){const W=k.listener,yt=k.ha||k.src;k.fa&&Ye(i.i,k),R=W.call(yt,p)!==!1&&R}}return R&&!p.defaultPrevented}function Jh(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function jo(i){i.g=Jh(()=>{i.g=null,i.i&&(i.i=!1,jo(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Yh extends A{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:jo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rn(i){A.call(this),this.h=i,this.g={}}g(Rn,A);var qo=[];function $o(i){It(i.g,function(c,l){this.g.hasOwnProperty(l)&&ks(c)},i),i.g={}}Rn.prototype.N=function(){Rn.Z.N.call(this),$o(this)},Rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ms=a.JSON.stringify,Zh=a.JSON.parse,td=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function zo(){}function Ho(){}var bn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ls(){T.call(this,"d")}g(Ls,T);function Fs(){T.call(this,"c")}g(Fs,T);var Ne={},Go=null;function wr(){return Go=Go||new St}Ne.Ia="serverreachability";function Ko(i){T.call(this,Ne.Ia,i)}g(Ko,T);function Sn(i){const c=wr();Nt(c,new Ko(c))}Ne.STAT_EVENT="statevent";function Wo(i,c){T.call(this,Ne.STAT_EVENT,i),this.stat=c}g(Wo,T);function kt(i){const c=wr();Nt(c,new Wo(c,i))}Ne.Ja="timingevent";function Qo(i,c){T.call(this,Ne.Ja,i),this.size=c}g(Qo,T);function Cn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Pn(){this.g=!0}Pn.prototype.ua=function(){this.g=!1};function ed(i,c,l,p,R,C){i.info(function(){if(i.g)if(C){var k="",W=C.split("&");for(let nt=0;nt<W.length;nt++){var yt=W[nt].split("=");if(yt.length>1){const wt=yt[0];yt=yt[1];const Jt=wt.split("_");k=Jt.length>=2&&Jt[1]=="type"?k+(wt+"="+yt+"&"):k+(wt+"=redacted&")}}}else k=null;else k=C;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+l+`
`+k})}function nd(i,c,l,p,R,C,k){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+l+`
`+C+" "+k})}function Ze(i,c,l,p){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+sd(i,l)+(p?" "+p:"")})}function rd(i,c){i.info(function(){return"TIMEOUT: "+c})}Pn.prototype.info=function(){};function sd(i,c){if(!i.g)return c;if(!c)return null;try{const C=JSON.parse(c);if(C){for(i=0;i<C.length;i++)if(Array.isArray(C[i])){var l=C[i];if(!(l.length<2)){var p=l[1];if(Array.isArray(p)&&!(p.length<1)){var R=p[0];if(R!="noop"&&R!="stop"&&R!="close")for(let k=1;k<p.length;k++)p[k]=""}}}}return Ms(C)}catch{return c}}var Ar={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Jo;function Us(){}g(Us,zo),Us.prototype.g=function(){return new XMLHttpRequest},Jo=new Us;function Vn(i){return encodeURIComponent(String(i))}function id(i){var c=1;i=i.split(":");const l=[];for(;c>0&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function ue(i,c,l,p){this.j=i,this.i=c,this.l=l,this.S=p||1,this.V=new Rn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Yo}function Yo(){this.i=null,this.g="",this.h=!1}var Zo={},Bs={};function js(i,c,l){i.M=1,i.A=vr(Xt(c)),i.u=l,i.R=!0,ta(i,null)}function ta(i,c){i.F=Date.now(),Ir(i),i.B=Xt(i.A);var l=i.B,p=i.S;Array.isArray(p)||(p=[String(p)]),fa(l.i,"t",p),i.C=0,l=i.j.L,i.h=new Yo,i.g=Da(i.j,l?c:null,!i.u),i.P>0&&(i.O=new Yh(d(i.Y,i,i.g),i.P)),c=i.V,l=i.g,p=i.ba;var R="readystatechange";Array.isArray(R)||(R&&(qo[0]=R.toString()),R=qo);for(let C=0;C<R.length;C++){const k=Lo(l,R[C],p||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=i.J?_t(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Sn(),ed(i.i,i.v,i.B,i.l,i.S,i.u)}ue.prototype.ba=function(i){i=i.target;const c=this.O;c&&de(i)==3?c.j():this.Y(i)},ue.prototype.Y=function(i){try{if(i==this.g)t:{const W=de(this.g),yt=this.g.ya(),nt=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||Ta(this.g)))){this.K||W!=4||yt==7||(yt==8||nt<=0?Sn(3):Sn(2)),qs(this);var c=this.g.ca();this.X=c;var l=od(this);if(this.o=c==200,nd(this.i,this.v,this.B,this.l,this.S,W,c),this.o){if(this.U&&!this.L){e:{if(this.g){var p,R=this.g;if((p=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(p)){var C=p;break e}}C=null}if(i=C)Ze(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,$s(this,i);else{this.o=!1,this.m=3,kt(12),ke(this),Dn(this);break t}}if(this.R){i=!0;let wt;for(;!this.K&&this.C<l.length;)if(wt=ad(this,l),wt==Bs){W==4&&(this.m=4,kt(14),i=!1),Ze(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==Zo){this.m=4,kt(15),Ze(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else Ze(this.i,this.l,wt,null),$s(this,wt);if(ea(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||l.length!=0||this.h.h||(this.m=1,kt(16),i=!1),this.o=this.o&&i,!i)Ze(this.i,this.l,l,"[Invalid Chunked Response]"),ke(this),Dn(this);else if(l.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),Js(k),k.P=!0,kt(11))}}else Ze(this.i,this.l,l,null),$s(this,l);W==4&&ke(this),this.o&&!this.K&&(W==4?Sa(this.j,this):(this.o=!1,Ir(this)))}else wd(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,kt(12)):(this.m=0,kt(13)),ke(this),Dn(this)}}}catch{}finally{}};function od(i){if(!ea(i))return i.g.la();const c=Ta(i.g);if(c==="")return"";let l="";const p=c.length,R=de(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return ke(i),Dn(i),"";i.h.i=new a.TextDecoder}for(let C=0;C<p;C++)i.h.h=!0,l+=i.h.i.decode(c[C],{stream:!(R&&C==p-1)});return c.length=0,i.h.g+=l,i.C=0,i.h.g}function ea(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function ad(i,c){var l=i.C,p=c.indexOf(`
`,l);return p==-1?Bs:(l=Number(c.substring(l,p)),isNaN(l)?Zo:(p+=1,p+l>c.length?Bs:(c=c.slice(p,p+l),i.C=p+l,c)))}ue.prototype.cancel=function(){this.K=!0,ke(this)};function Ir(i){i.T=Date.now()+i.H,na(i,i.H)}function na(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Cn(d(i.aa,i),c)}function qs(i){i.D&&(a.clearTimeout(i.D),i.D=null)}ue.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(rd(this.i,this.B),this.M!=2&&(Sn(),kt(17)),ke(this),this.m=2,Dn(this)):na(this,this.T-i)};function Dn(i){i.j.I==0||i.K||Sa(i.j,i)}function ke(i){qs(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,$o(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function $s(i,c){try{var l=i.j;if(l.I!=0&&(l.g==i||zs(l.h,i))){if(!i.L&&zs(l.h,i)&&l.I==3){try{var p=l.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)Pr(l),Sr(l);else break t;Xs(l),kt(18)}}else l.xa=R[1],0<l.xa-l.K&&R[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=Cn(d(l.Va,l),6e3));ia(l.h)<=1&&l.ta&&(l.ta=void 0)}else xe(l,11)}else if((i.L||l.g==i)&&Pr(l),!m(c))for(R=l.Ba.g.parse(c),c=0;c<R.length;c++){let nt=R[c];const wt=nt[0];if(!(wt<=l.K))if(l.K=wt,nt=nt[1],l.I==2)if(nt[0]=="c"){l.M=nt[1],l.ba=nt[2];const Jt=nt[3];Jt!=null&&(l.ka=Jt,l.j.info("VER="+l.ka));const Me=nt[4];Me!=null&&(l.za=Me,l.j.info("SVER="+l.za));const fe=nt[5];fe!=null&&typeof fe=="number"&&fe>0&&(p=1.5*fe,l.O=p,l.j.info("backChannelRequestTimeoutMs_="+p)),p=l;const pe=i.g;if(pe){const Dr=pe.g?pe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dr){var C=p.h;C.g||Dr.indexOf("spdy")==-1&&Dr.indexOf("quic")==-1&&Dr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Hs(C,C.h),C.h=null))}if(p.G){const Ys=pe.g?pe.g.getResponseHeader("X-HTTP-Session-Id"):null;Ys&&(p.wa=Ys,it(p.J,p.G,Ys))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),p=l;var k=i;if(p.na=Va(p,p.L?p.ba:null,p.W),k.L){oa(p.h,k);var W=k,yt=p.O;yt&&(W.H=yt),W.D&&(qs(W),Ir(W)),p.g=k}else Ra(p);l.i.length>0&&Cr(l)}else nt[0]!="stop"&&nt[0]!="close"||xe(l,7);else l.I==3&&(nt[0]=="stop"||nt[0]=="close"?nt[0]=="stop"?xe(l,7):Qs(l):nt[0]!="noop"&&l.l&&l.l.qa(nt),l.A=0)}}Sn(4)}catch{}}var cd=class{constructor(i,c){this.g=i,this.map=c}};function ra(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function sa(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ia(i){return i.h?1:i.g?i.g.size:0}function zs(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Hs(i,c){i.g?i.g.add(c):i.h=c}function oa(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}ra.prototype.cancel=function(){if(this.i=aa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function aa(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.G);return c}return P(i.i)}var ca=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ud(i,c){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const p=i[l].indexOf("=");let R,C=null;p>=0?(R=i[l].substring(0,p),C=i[l].substring(p+1)):R=i[l],c(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function le(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof le?(this.l=i.l,Nn(this,i.j),this.o=i.o,this.g=i.g,kn(this,i.u),this.h=i.h,Gs(this,pa(i.i)),this.m=i.m):i&&(c=String(i).match(ca))?(this.l=!1,Nn(this,c[1]||"",!0),this.o=On(c[2]||""),this.g=On(c[3]||"",!0),kn(this,c[4]),this.h=On(c[5]||"",!0),Gs(this,c[6]||"",!0),this.m=On(c[7]||"")):(this.l=!1,this.i=new Mn(null,this.l))}le.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(xn(c,ua,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(xn(c,ua,!0),"@"),i.push(Vn(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(xn(l,l.charAt(0)=="/"?dd:hd,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",xn(l,pd)),i.join("")},le.prototype.resolve=function(i){const c=Xt(this);let l=!!i.j;l?Nn(c,i.j):l=!!i.o,l?c.o=i.o:l=!!i.g,l?c.g=i.g:l=i.u!=null;var p=i.h;if(l)kn(c,i.u);else if(l=!!i.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var R=c.h.lastIndexOf("/");R!=-1&&(p=c.h.slice(0,R+1)+p)}if(R=p,R==".."||R==".")p="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){p=R.lastIndexOf("/",0)==0,R=R.split("/");const C=[];for(let k=0;k<R.length;){const W=R[k++];W=="."?p&&k==R.length&&C.push(""):W==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),p&&k==R.length&&C.push("")):(C.push(W),p=!0)}p=C.join("/")}else p=R}return l?c.h=p:l=i.i.toString()!=="",l?Gs(c,pa(i.i)):l=!!i.m,l&&(c.m=i.m),c};function Xt(i){return new le(i)}function Nn(i,c,l){i.j=l?On(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function kn(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Gs(i,c,l){c instanceof Mn?(i.i=c,md(i.i,i.l)):(l||(c=xn(c,fd)),i.i=new Mn(c,i.l))}function it(i,c,l){i.i.set(c,l)}function vr(i){return it(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function On(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function xn(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,ld),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function ld(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ua=/[#\/\?@]/g,hd=/[#\?:]/g,dd=/[#\?]/g,fd=/[#\?@]/g,pd=/#/g;function Mn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Oe(i){i.g||(i.g=new Map,i.h=0,i.i&&ud(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Mn.prototype,n.add=function(i,c){Oe(this),this.i=null,i=tn(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function la(i,c){Oe(i),c=tn(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function ha(i,c){return Oe(i),c=tn(i,c),i.g.has(c)}n.forEach=function(i,c){Oe(this),this.g.forEach(function(l,p){l.forEach(function(R){i.call(c,R,p,this)},this)},this)};function da(i,c){Oe(i);let l=[];if(typeof c=="string")ha(i,c)&&(l=l.concat(i.g.get(tn(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)l=l.concat(i[c]);return l}n.set=function(i,c){return Oe(this),this.i=null,i=tn(this,i),ha(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=da(this,i),i.length>0?String(i[0]):c):c};function fa(i,c,l){la(i,c),l.length>0&&(i.i=null,i.g.set(tn(i,c),P(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var l=c[p];const R=Vn(l);l=da(this,l);for(let C=0;C<l.length;C++){let k=R;l[C]!==""&&(k+="="+Vn(l[C])),i.push(k)}}return this.i=i.join("&")};function pa(i){const c=new Mn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function tn(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function md(i,c){c&&!i.j&&(Oe(i),i.i=null,i.g.forEach(function(l,p){const R=p.toLowerCase();p!=R&&(la(this,p),fa(this,R,l))},i)),i.j=c}function gd(i,c){const l=new Pn;if(a.Image){const p=new Image;p.onload=f(he,l,"TestLoadImage: loaded",!0,c,p),p.onerror=f(he,l,"TestLoadImage: error",!1,c,p),p.onabort=f(he,l,"TestLoadImage: abort",!1,c,p),p.ontimeout=f(he,l,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else c(!1)}function _d(i,c){const l=new Pn,p=new AbortController,R=setTimeout(()=>{p.abort(),he(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:p.signal}).then(C=>{clearTimeout(R),C.ok?he(l,"TestPingServer: ok",!0,c):he(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),he(l,"TestPingServer: error",!1,c)})}function he(i,c,l,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(l)}catch{}}function yd(){this.g=new td}function Ks(i){this.i=i.Sb||null,this.h=i.ab||!1}g(Ks,zo),Ks.prototype.g=function(){return new Rr(this.i,this.h)};function Rr(i,c){St.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Rr,St),n=Rr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Fn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ln(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ma(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function ma(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Ln(this):Fn(this),this.readyState==3&&ma(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Ln(this))},n.Na=function(i){this.g&&(this.response=i,Ln(this))},n.ga=function(){this.g&&Ln(this)};function Ln(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Fn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function Fn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ga(i){let c="";return It(i,function(l,p){c+=p,c+=":",c+=l,c+=`\r
`}),c}function Ws(i,c,l){t:{for(p in l){var p=!1;break t}p=!0}p||(l=ga(l),typeof i=="string"?l!=null&&Vn(l):it(i,c,l))}function ct(i){St.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ct,St);var Ed=/^https?$/i,Td=["POST","PUT"];n=ct.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,l,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Jo.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(C){_a(this,C);return}if(i=l||"",l=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)l.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())l.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(l.keys()).find(C=>C.toLowerCase()=="content-type"),R=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Td,c,void 0)>=0)||p||R||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,k]of l)this.g.setRequestHeader(C,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(C){_a(this,C)}};function _a(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,ya(i),br(i)}function ya(i){i.A||(i.A=!0,Nt(i,"complete"),Nt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Nt(this,"complete"),Nt(this,"abort"),br(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),ct.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ea(this):this.Xa())},n.Xa=function(){Ea(this)};function Ea(i){if(i.h&&typeof o<"u"){if(i.v&&de(i)==4)setTimeout(i.Ca.bind(i),0);else if(Nt(i,"readystatechange"),de(i)==4){i.h=!1;try{const C=i.ca();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var p;if(p=C===0){let k=String(i.D).match(ca)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),p=!Ed.test(k?k.toLowerCase():"")}l=p}if(l)Nt(i,"complete"),Nt(i,"success");else{i.o=6;try{var R=de(i)>2?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.ca()+"]",ya(i)}}finally{br(i)}}}}function br(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,c||Nt(i,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function de(i){return i.g?i.g.readyState:0}n.ca=function(){try{return de(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Zh(c)}};function Ta(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function wd(i){const c={};i=(i.g&&de(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(m(i[p]))continue;var l=id(i[p]);const R=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const C=c[R]||[];c[R]=C,C.push(l)}De(c,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function wa(i){this.za=0,this.i=[],this.j=new Pn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Un("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Un("baseRetryDelayMs",5e3,i),this.Za=Un("retryDelaySeedMs",1e4,i),this.Ta=Un("forwardChannelMaxRetries",2,i),this.va=Un("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new ra(i&&i.concurrentRequestLimit),this.Ba=new yd,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=wa.prototype,n.ka=8,n.I=1,n.connect=function(i,c,l,p){kt(0),this.W=i,this.H=c||{},l&&p!==void 0&&(this.H.OSID=l,this.H.OAID=p),this.F=this.X,this.J=Va(this,null,this.W),Cr(this)};function Qs(i){if(Aa(i),i.I==3){var c=i.V++,l=Xt(i.J);if(it(l,"SID",i.M),it(l,"RID",c),it(l,"TYPE","terminate"),Bn(i,l),c=new ue(i,i.j,c),c.M=2,c.A=vr(Xt(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=Da(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ir(c)}Pa(i)}function Sr(i){i.g&&(Js(i),i.g.cancel(),i.g=null)}function Aa(i){Sr(i),i.v&&(a.clearTimeout(i.v),i.v=null),Pr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Cr(i){if(!sa(i.h)&&!i.m){i.m=!0;var c=i.Ea;J||_(),tt||(J(),tt=!0),E.add(c,i),i.D=0}}function Ad(i,c){return ia(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Cn(d(i.Ea,i,c),Ca(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const R=new ue(this,this.j,i);let C=this.o;if(this.U&&(C?(C=_t(C),Qt(C,this.U)):C=this.U),this.u!==null||this.R||(R.J=C,C=null),this.S)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var p=this.i[l];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=va(this,R,c),l=Xt(this.J),it(l,"RID",i),it(l,"CVER",22),this.G&&it(l,"X-HTTP-Session-Id",this.G),Bn(this,l),C&&(this.R?c="headers="+Vn(ga(C))+"&"+c:this.u&&Ws(l,this.u,C)),Hs(this.h,R),this.Ra&&it(l,"TYPE","init"),this.S?(it(l,"$req",c),it(l,"SID","null"),R.U=!0,js(R,l,null)):js(R,l,c),this.I=2}}else this.I==3&&(i?Ia(this,i):this.i.length==0||sa(this.h)||Ia(this))};function Ia(i,c){var l;c?l=c.l:l=i.V++;const p=Xt(i.J);it(p,"SID",i.M),it(p,"RID",l),it(p,"AID",i.K),Bn(i,p),i.u&&i.o&&Ws(p,i.u,i.o),l=new ue(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),c&&(i.i=c.G.concat(i.i)),c=va(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Hs(i.h,l),js(l,p,c)}function Bn(i,c){i.H&&It(i.H,function(l,p){it(c,p,l)}),i.l&&It({},function(l,p){it(c,p,l)})}function va(i,c,l){l=Math.min(i.i.length,l);const p=i.l?d(i.l.Ka,i.l,i):null;t:{var R=i.i;let W=-1;for(;;){const yt=["count="+l];W==-1?l>0?(W=R[0].g,yt.push("ofs="+W)):W=0:yt.push("ofs="+W);let nt=!0;for(let wt=0;wt<l;wt++){var C=R[wt].g;const Jt=R[wt].map;if(C-=W,C<0)W=Math.max(0,R[wt].g-100),nt=!1;else try{C="req"+C+"_"||"";try{var k=Jt instanceof Map?Jt:Object.entries(Jt);for(const[Me,fe]of k){let pe=fe;u(fe)&&(pe=Ms(fe)),yt.push(C+Me+"="+encodeURIComponent(pe))}}catch(Me){throw yt.push(C+"type="+encodeURIComponent("_badmap")),Me}}catch{p&&p(Jt)}}if(nt){k=yt.join("&");break t}}k=void 0}return i=i.i.splice(0,l),c.G=i,k}function Ra(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;J||_(),tt||(J(),tt=!0),E.add(c,i),i.A=0}}function Xs(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Cn(d(i.Da,i),Ca(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,ba(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Cn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,kt(10),Sr(this),ba(this))};function Js(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function ba(i){i.g=new ue(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Xt(i.na);it(c,"RID","rpc"),it(c,"SID",i.M),it(c,"AID",i.K),it(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&it(c,"TO",i.ia),it(c,"TYPE","xmlhttp"),Bn(i,c),i.u&&i.o&&Ws(c,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=vr(Xt(c)),l.u=null,l.R=!0,ta(l,i)}n.Va=function(){this.C!=null&&(this.C=null,Sr(this),Xs(this),kt(19))};function Pr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Sa(i,c){var l=null;if(i.g==c){Pr(i),Js(i),i.g=null;var p=2}else if(zs(i.h,c))l=c.G,oa(i.h,c),p=1;else return;if(i.I!=0){if(c.o)if(p==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var R=i.D;p=wr(),Nt(p,new Qo(p,l)),Cr(i)}else Ra(i);else if(R=c.m,R==3||R==0&&c.X>0||!(p==1&&Ad(i,c)||p==2&&Xs(i)))switch(l&&l.length>0&&(c=i.h,c.i=c.i.concat(l)),R){case 1:xe(i,5);break;case 4:xe(i,10);break;case 3:xe(i,6);break;default:xe(i,2)}}}function Ca(i,c){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*c}function xe(i,c){if(i.j.info("Error code "+c),c==2){var l=d(i.bb,i),p=i.Ua;const R=!p;p=new le(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Nn(p,"https"),vr(p),R?gd(p.toString(),l):_d(p.toString(),l)}else kt(2);i.I=0,i.l&&i.l.pa(c),Pa(i),Aa(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Pa(i){if(i.I=0,i.ja=[],i.l){const c=aa(i.h);(c.length!=0||i.i.length!=0)&&(v(i.ja,c),v(i.ja,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.oa()}}function Va(i,c,l){var p=l instanceof le?Xt(l):new le(l);if(p.g!="")c&&(p.g=c+"."+p.g),kn(p,p.u);else{var R=a.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const C=new le(null);p&&Nn(C,p),c&&(C.g=c),R&&kn(C,R),l&&(C.h=l),p=C}return l=i.G,c=i.wa,l&&c&&it(p,l,c),it(p,"VER",i.ka),Bn(i,p),p}function Da(i,c,l){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new ct(new Ks({ab:l})):new ct(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Na(){}n=Na.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Vr(){}Vr.prototype.g=function(i,c){return new jt(i,c)};function jt(i,c){St.call(this),this.g=new wa(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!m(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!m(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new en(this)}g(jt,St),jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Qs(this.g)},jt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=Ms(i),i=l);c.i.push(new cd(c.Ya++,i)),c.I==3&&Cr(c)},jt.prototype.N=function(){this.g.l=null,delete this.j,Qs(this.g),delete this.g,jt.Z.N.call(this)};function ka(i){Ls.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const l in c){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}g(ka,Ls);function Oa(){Fs.call(this),this.status=1}g(Oa,Fs);function en(i){this.g=i}g(en,Na),en.prototype.ra=function(){Nt(this.g,"a")},en.prototype.qa=function(i){Nt(this.g,new ka(i))},en.prototype.pa=function(i){Nt(this.g,new Oa)},en.prototype.oa=function(){Nt(this.g,"b")},Vr.prototype.createWebChannel=Vr.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,cl=function(){return new Vr},al=function(){return wr()},ol=Ne,Ii={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ar.NO_ERROR=0,Ar.TIMEOUT=8,Ar.HTTP_ERROR=6,$r=Ar,Xo.COMPLETE="complete",il=Xo,Ho.EventType=bn,bn.OPEN="a",bn.CLOSE="b",bn.ERROR="c",bn.MESSAGE="d",St.prototype.listen=St.prototype.J,$n=Ho,ct.prototype.listenOnce=ct.prototype.K,ct.prototype.getLastError=ct.prototype.Ha,ct.prototype.getLastErrorCode=ct.prototype.ya,ct.prototype.getStatus=ct.prototype.ca,ct.prototype.getResponseJson=ct.prototype.La,ct.prototype.getResponseText=ct.prototype.la,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Fa,sl=ct}).apply(typeof kr<"u"?kr:typeof self<"u"?self:typeof window<"u"?window:{});const uc="@firebase/firestore",lc="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Ku("@firebase/firestore");function nn(){return He.logLevel}function M(n,...t){if(He.logLevel<=Z.DEBUG){const e=t.map(Wi);He.debug(`Firestore (${Tn}): ${n}`,...e)}}function ae(n,...t){if(He.logLevel<=Z.ERROR){const e=t.map(Wi);He.error(`Firestore (${Tn}): ${n}`,...e)}}function hn(n,...t){if(He.logLevel<=Z.WARN){const e=t.map(Wi);He.warn(`Firestore (${Tn}): ${n}`,...e)}}function Wi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,ul(n,r,e)}function ul(n,t,e){let r=`FIRESTORE (${Tn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw ae(r),new Error(r)}function et(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||ul(t,s,r)}function H(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends We{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Pm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Pt.UNAUTHENTICATED)))}shutdown(){}}class Vm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Dm{constructor(t){this.t=t,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){et(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new je;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new je,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},u=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>u(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new je)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string",31837,{l:r}),new ll(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string",2055,{h:t}),new Pt(t)}}class Nm{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class km{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Nm(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Pt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class hc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Om{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ju(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){et(this.o===void 0,3512);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new hc(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(et(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new hc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=xm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function Q(n,t){return n<t?-1:n>t?1:0}function vi(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return oi(s)===oi(o)?Q(s,o):oi(s)?1:-1}return Q(n.length,t.length)}const Mm=55296,Lm=57343;function oi(n){const t=n.charCodeAt(0);return t>=Mm&&t<=Lm}function dn(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="__name__";class Zt{constructor(t,e,r){e===void 0?e=0:e>t.length&&j(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&j(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Zt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Zt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Zt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return Q(t.length,e.length)}static compareSegments(t,e){const r=Zt.isNumericId(t),s=Zt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Zt.extractNumericId(t).compare(Zt.extractNumericId(e)):vi(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Te.fromString(t.substring(4,t.length-2))}}class st extends Zt{construct(t,e,r){return new st(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new st(e)}static emptyPath(){return new st([])}}const Fm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Zt{construct(t,e,r){return new Rt(t,e,r)}static isValidIdentifier(t){return Fm.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dc}static keyField(){return new Rt([dc])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new O(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new O(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Rt(e)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.path=t}static fromPath(t){return new U(st.fromString(t))}static fromName(t){return new U(st.fromString(t).popFirst(5))}static empty(){return new U(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&st.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return st.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new st(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n,t,e){if(!e)throw new O(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Um(n,t,e,r){if(t===!0&&r===!0)throw new O(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function fc(n){if(!U.isDocumentKey(n))throw new O(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pc(n){if(U.isDocumentKey(n))throw new O(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function dl(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ps(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function we(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ps(n);throw new O(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n,t){const e={typeString:n};return t&&(e.value=t),e}function pr(n,t){if(!dl(n))throw new O(D.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new O(D.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=-62135596800,gc=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*gc);return new ot(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<mc)throw new O(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gc}_compareTo(t){return this.seconds===t.seconds?Q(this.nanoseconds,t.nanoseconds):Q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ot._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(pr(t,ot._jsonSchema))return new ot(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-mc;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ot._jsonSchemaVersion="firestore/timestamp/1.0",ot._jsonSchema={type:mt("string",ot._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(t){return new z(t)}static min(){return new z(new ot(0,0))}static max(){return new z(new ot(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=-1;function Bm(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new Ie(s,U.empty(),t)}function jm(n){return new Ie(n.readTime,n.key,er)}class Ie{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ie(z.min(),U.empty(),er)}static max(){return new Ie(z.max(),U.empty(),er)}}function qm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=U.comparator(n.documentKey,t.documentKey),e!==0?e:Q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==$m)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new N(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof N?e:N.resolve(e)}catch(e){return N.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):N.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):N.reject(e)}static resolve(t){return new N(((e,r)=>{e(t)}))}static reject(t){return new N(((e,r)=>{r(t)}))}static waitFor(t){return new N(((e,r)=>{let s=0,o=0,a=!1;t.forEach((u=>{++s,u.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=N.resolve(!1);for(const r of t)e=e.next((s=>s?N.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new N(((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((f=>{a[d]=f,++u,u===o&&r(a)}),(f=>s(f)))}}))}static doWhile(t,e){return new N(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function Hm(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function An(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ms.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=-1;function gs(n){return n==null}function Zr(n){return n===0&&1/n==-1/0}function Gm(n){return typeof n=="number"&&Number.isInteger(n)&&!Zr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="";function Km(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=_c(t)),t=Wm(n.get(e),t);return _c(t)}function Wm(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case fl:e+="";break;default:e+=o}}return e}function _c(n){return n+fl+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Pe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function pl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,e){this.comparator=t,this.root=e||vt.EMPTY}insert(t,e){return new at(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new at(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Or(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Or(this.root,t,this.comparator,!1)}getReverseIterator(){return new Or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Or(this.root,t,this.comparator,!0)}}class Or{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=o??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new vt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw j(27949);return t+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.comparator=t,this.data=new at(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ec(this.data.getIterator())}getIteratorFrom(t){return new Ec(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof Et)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Et(this.comparator);return e.data=t,e}}class Ec{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.fields=t,t.sort(Rt.comparator)}static empty(){return new qt([])}unionWith(t){let e=new Et(Rt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new qt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return dn(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ml("Invalid base64 string: "+o):o}})(t);return new bt(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const Qm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ve(n){if(et(!!n,39018),typeof n=="string"){let t=0;const e=Qm.exec(n);if(et(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ht(n.seconds),nanos:ht(n.nanos)}}function ht(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Re(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="server_timestamp",_l="__type__",yl="__previous_value__",El="__local_write_time__";function Ji(n){return(n?.mapValue?.fields||{})[_l]?.stringValue===gl}function _s(n){const t=n.mapValue.fields[yl];return Ji(t)?_s(t):t}function nr(n){const t=ve(n.mapValue.fields[El].timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(t,e,r,s,o,a,u,h,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=f}}const ts="(default)";class rr{constructor(t,e){this.projectId=t,this.database=e||ts}static empty(){return new rr("","")}get isDefaultDatabase(){return this.database===ts}isEqual(t){return t instanceof rr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="__type__",Jm="__max__",xr={mapValue:{}},wl="__vector__",es="value";function be(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ji(n)?4:Zm(n)?9007199254740991:Ym(n)?10:11:j(28295,{value:n})}function ie(n,t){if(n===t)return!0;const e=be(n);if(e!==be(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return nr(n).isEqual(nr(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ve(s.timestampValue),u=ve(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return Re(s.bytesValue).isEqual(Re(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return ht(s.geoPointValue.latitude)===ht(o.geoPointValue.latitude)&&ht(s.geoPointValue.longitude)===ht(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return ht(s.integerValue)===ht(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ht(s.doubleValue),u=ht(o.doubleValue);return a===u?Zr(a)===Zr(u):isNaN(a)&&isNaN(u)}return!1})(n,t);case 9:return dn(n.arrayValue.values||[],t.arrayValue.values||[],ie);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(yc(a)!==yc(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!ie(a[h],u[h])))return!1;return!0})(n,t);default:return j(52216,{left:n})}}function sr(n,t){return(n.values||[]).find((e=>ie(e,t)))!==void 0}function fn(n,t){if(n===t)return 0;const e=be(n),r=be(t);if(e!==r)return Q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const u=ht(o.integerValue||o.doubleValue),h=ht(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1})(n,t);case 3:return Tc(n.timestampValue,t.timestampValue);case 4:return Tc(nr(n),nr(t));case 5:return vi(n.stringValue,t.stringValue);case 6:return(function(o,a){const u=Re(o),h=Re(a);return u.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const f=Q(u[d],h[d]);if(f!==0)return f}return Q(u.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const u=Q(ht(o.latitude),ht(a.latitude));return u!==0?u:Q(ht(o.longitude),ht(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return wc(n.arrayValue,t.arrayValue);case 10:return(function(o,a){const u=o.fields||{},h=a.fields||{},d=u[es]?.arrayValue,f=h[es]?.arrayValue,g=Q(d?.values?.length||0,f?.values?.length||0);return g!==0?g:wc(d,f)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===xr.mapValue&&a===xr.mapValue)return 0;if(o===xr.mapValue)return 1;if(a===xr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},f=Object.keys(d);h.sort(),f.sort();for(let g=0;g<h.length&&g<f.length;++g){const w=vi(h[g],f[g]);if(w!==0)return w;const P=fn(u[h[g]],d[f[g]]);if(P!==0)return P}return Q(h.length,f.length)})(n.mapValue,t.mapValue);default:throw j(23264,{he:e})}}function Tc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Q(n,t);const e=ve(n),r=ve(t),s=Q(e.seconds,r.seconds);return s!==0?s:Q(e.nanos,r.nanos)}function wc(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=fn(e[s],r[s]);if(o)return o}return Q(e.length,r.length)}function pn(n){return Ri(n)}function Ri(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=ve(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Re(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return U.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ri(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ri(e.fields[a])}`;return s+"}"})(n.mapValue):j(61005,{value:n})}function zr(n){switch(be(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=_s(n);return t?16+zr(t):16;case 5:return 2*n.stringValue.length;case 6:return Re(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+zr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Pe(r.fields,((o,a)=>{s+=o.length+zr(a)})),s})(n.mapValue);default:throw j(13486,{value:n})}}function Ac(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function bi(n){return!!n&&"integerValue"in n}function Yi(n){return!!n&&"arrayValue"in n}function Ic(n){return!!n&&"nullValue"in n}function vc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hr(n){return!!n&&"mapValue"in n}function Ym(n){return(n?.mapValue?.fields||{})[Tl]?.stringValue===wl}function Wn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Pe(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Wn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Wn(n.arrayValue.values[e]);return t}return{...n}}function Zm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Jm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.value=t}static empty(){return new Lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Hr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Wn(e)}setAll(t){let e=Rt.emptyPath(),r={},s=[];t.forEach(((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=Wn(a):s.push(u.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Hr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ie(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Hr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Pe(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new Lt(Wn(this.value))}}function Al(n){const t=[];return Pe(n.fields,((e,r)=>{const s=new Rt([e]);if(Hr(r)){const o=Al(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new qt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Vt(t,0,z.min(),z.min(),z.min(),Lt.empty(),0)}static newFoundDocument(t,e,r,s){return new Vt(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new Vt(t,2,e,z.min(),z.min(),Lt.empty(),0)}static newUnknownDocument(t,e){return new Vt(t,3,e,z.min(),z.min(),Lt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e){this.position=t,this.inclusive=e}}function Rc(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),e.key):r=fn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function bc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ie(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e="asc"){this.field=t,this.dir=e}}function tg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{}class pt extends Il{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ng(t,e,r):e==="array-contains"?new ig(t,r):e==="in"?new og(t,r):e==="not-in"?new ag(t,r):e==="array-contains-any"?new cg(t,r):new pt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new rg(t,r):new sg(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(fn(e,this.value)):e!==null&&be(this.value)===be(e)&&this.matchesComparison(fn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Il{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Kt(t,e)}matches(t){return vl(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function vl(n){return n.op==="and"}function Rl(n){return eg(n)&&vl(n)}function eg(n){for(const t of n.filters)if(t instanceof Kt)return!1;return!0}function Si(n){if(n instanceof pt)return n.field.canonicalString()+n.op.toString()+pn(n.value);if(Rl(n))return n.filters.map((t=>Si(t))).join(",");{const t=n.filters.map((e=>Si(e))).join(",");return`${n.op}(${t})`}}function bl(n,t){return n instanceof pt?(function(r,s){return s instanceof pt&&r.op===s.op&&r.field.isEqual(s.field)&&ie(r.value,s.value)})(n,t):n instanceof Kt?(function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,u)=>o&&bl(a,s.filters[u])),!0):!1})(n,t):void j(19439)}function Sl(n){return n instanceof pt?(function(e){return`${e.field.canonicalString()} ${e.op} ${pn(e.value)}`})(n):n instanceof Kt?(function(e){return e.op.toString()+" {"+e.getFilters().map(Sl).join(" ,")+"}"})(n):"Filter"}class ng extends pt{constructor(t,e,r){super(t,e,r),this.key=U.fromName(r.referenceValue)}matches(t){const e=U.comparator(t.key,this.key);return this.matchesComparison(e)}}class rg extends pt{constructor(t,e){super(t,"in",e),this.keys=Cl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class sg extends pt{constructor(t,e){super(t,"not-in",e),this.keys=Cl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Cl(n,t){return(t.arrayValue?.values||[]).map((e=>U.fromName(e.referenceValue)))}class ig extends pt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yi(e)&&sr(e.arrayValue,this.value)}}class og extends pt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&sr(this.value.arrayValue,e)}}class ag extends pt{constructor(t,e){super(t,"not-in",e)}matches(t){if(sr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!sr(this.value.arrayValue,e)}}class cg extends pt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>sr(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function Sc(n,t=null,e=[],r=[],s=null,o=null,a=null){return new ug(n,t,e,r,s,o,a)}function Zi(n){const t=H(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Si(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),gs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>pn(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>pn(r))).join(",")),t.Te=e}return t.Te}function to(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!tg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!bl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!bc(n.startAt,t.startAt)&&bc(n.endAt,t.endAt)}function Ci(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function lg(n,t,e,r,s,o,a,u){return new In(n,t,e,r,s,o,a,u)}function eo(n){return new In(n)}function Cc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pl(n){return n.collectionGroup!==null}function Qn(n){const t=H(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Et(Rt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new ir(o,r))})),e.has(Rt.keyField().canonicalString())||t.Ie.push(new ir(Rt.keyField(),r))}return t.Ie}function ee(n){const t=H(n);return t.Ee||(t.Ee=hg(t,Qn(n))),t.Ee}function hg(n,t){if(n.limitType==="F")return Sc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new ir(s.field,o)}));const e=n.endAt?new ns(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ns(n.startAt.position,n.startAt.inclusive):null;return Sc(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Pi(n,t){const e=n.filters.concat([t]);return new In(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Vi(n,t,e){return new In(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ys(n,t){return to(ee(n),ee(t))&&n.limitType===t.limitType}function Vl(n){return`${Zi(ee(n))}|lt:${n.limitType}`}function rn(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>Sl(s))).join(", ")}]`),gs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>pn(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>pn(s))).join(",")),`Target(${r})`})(ee(n))}; limitType=${n.limitType})`}function Es(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):U.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of Qn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,u,h){const d=Rc(a,u,h);return a.inclusive?d<=0:d<0})(r.startAt,Qn(r),s)||r.endAt&&!(function(a,u,h){const d=Rc(a,u,h);return a.inclusive?d>=0:d>0})(r.endAt,Qn(r),s))})(n,t)}function dg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dl(n){return(t,e)=>{let r=!1;for(const s of Qn(n)){const o=fg(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function fg(n,t,e){const r=n.field.isKeyField()?U.comparator(t.key,e.key):(function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?fn(h,d):j(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Pe(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return pl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new at(U.comparator);function ce(){return pg}const Nl=new at(U.comparator);function zn(...n){let t=Nl;for(const e of n)t=t.insert(e.key,e);return t}function kl(n){let t=Nl;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function Ue(){return Xn()}function Ol(){return Xn()}function Xn(){return new Qe((n=>n.toString()),((n,t)=>n.isEqual(t)))}const mg=new at(U.comparator),gg=new Et(U.comparator);function X(...n){let t=gg;for(const e of n)t=t.add(e);return t}const _g=new Et(Q);function yg(){return _g}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zr(t)?"-0":t}}function xl(n){return{integerValue:""+n}}function Eg(n,t){return Gm(t)?xl(t):no(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this._=void 0}}function Tg(n,t,e){return n instanceof or?(function(s,o){const a={fields:{[_l]:{stringValue:gl},[El]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ji(o)&&(o=_s(o)),o&&(a.fields[yl]=o),{mapValue:a}})(e,t):n instanceof ar?Ll(n,t):n instanceof cr?Fl(n,t):(function(s,o){const a=Ml(s,o),u=Pc(a)+Pc(s.Ae);return bi(a)&&bi(s.Ae)?xl(u):no(s.serializer,u)})(n,t)}function wg(n,t,e){return n instanceof ar?Ll(n,t):n instanceof cr?Fl(n,t):e}function Ml(n,t){return n instanceof rs?(function(r){return bi(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class or extends Ts{}class ar extends Ts{constructor(t){super(),this.elements=t}}function Ll(n,t){const e=Ul(t);for(const r of n.elements)e.some((s=>ie(s,r)))||e.push(r);return{arrayValue:{values:e}}}class cr extends Ts{constructor(t){super(),this.elements=t}}function Fl(n,t){let e=Ul(t);for(const r of n.elements)e=e.filter((s=>!ie(s,r)));return{arrayValue:{values:e}}}class rs extends Ts{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Pc(n){return ht(n.integerValue||n.doubleValue)}function Ul(n){return Yi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(t,e){this.field=t,this.transform=e}}function Ig(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof ar&&s instanceof ar||r instanceof cr&&s instanceof cr?dn(r.elements,s.elements,ie):r instanceof rs&&s instanceof rs?ie(r.Ae,s.Ae):r instanceof or&&s instanceof or})(n.transform,t.transform)}class vg{constructor(t,e){this.version=t,this.transformResults=e}}class Gt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Gt}static exists(t){return new Gt(void 0,t)}static updateTime(t){return new Gt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ws{}function Bl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ro(n.key,Gt.none()):new mr(n.key,n.data,Gt.none());{const e=n.data,r=Lt.empty();let s=new Et(Rt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ve(n.key,r,new qt(s.toArray()),Gt.none())}}function Rg(n,t,e){n instanceof mr?(function(s,o,a){const u=s.value.clone(),h=Dc(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,t,e):n instanceof Ve?(function(s,o,a){if(!Gr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Dc(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(jl(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function Jn(n,t,e,r){return n instanceof mr?(function(o,a,u,h){if(!Gr(o.precondition,a))return u;const d=o.value.clone(),f=Nc(o.fieldTransforms,h,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof Ve?(function(o,a,u,h){if(!Gr(o.precondition,a))return u;const d=Nc(o.fieldTransforms,h,a),f=a.data;return f.setAll(jl(o)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((g=>g.field)))})(n,t,e,r):(function(o,a,u){return Gr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(n,t,e)}function bg(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Ml(r.transform,s||null);o!=null&&(e===null&&(e=Lt.empty()),e.set(r.field,o))}return e||null}function Vc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&dn(r,s,((o,a)=>Ig(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class mr extends ws{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ve extends ws{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function jl(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Dc(n,t,e){const r=new Map;et(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,wg(a,u,e[s]))}return r}function Nc(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Tg(o,a,t))}return r}class ro extends ws{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sg extends ws{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Rg(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Jn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Jn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ol();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Bl(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(z.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),X())}isEqual(t){return this.batchId===t.batchId&&dn(this.mutations,t.mutations,((e,r)=>Vc(e,r)))&&dn(this.baseMutations,t.baseMutations,((e,r)=>Vc(e,r)))}}class so{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){et(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return mg})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new so(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Y;function Dg(n){switch(n){case D.OK:return j(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function ql(n){if(n===void 0)return ae("GRPC error has no .code"),D.UNKNOWN;switch(n){case ft.OK:return D.OK;case ft.CANCELLED:return D.CANCELLED;case ft.UNKNOWN:return D.UNKNOWN;case ft.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ft.INTERNAL:return D.INTERNAL;case ft.UNAVAILABLE:return D.UNAVAILABLE;case ft.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ft.NOT_FOUND:return D.NOT_FOUND;case ft.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ft.ABORTED:return D.ABORTED;case ft.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ft.DATA_LOSS:return D.DATA_LOSS;default:return j(39323,{code:n})}}(Y=ft||(ft={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new Te([4294967295,4294967295],0);function kc(n){const t=Ng().encode(n),e=new rl;return e.update(t),new Uint8Array(e.digest())}function Oc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Te([e,r],0),new Te([s,o],0)]}class io{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Hn(`Invalid padding: ${e}`);if(r<0)throw new Hn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Hn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Hn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Te.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(Te.fromNumber(r)));return s.compare(kg)===1&&(s=new Te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=kc(t),[r,s]=Oc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new io(o,s,e);return r.forEach((u=>a.insert(u))),a}insert(t){if(this.ge===0)return;const e=kc(t),[r,s]=Oc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,gr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new As(z.min(),s,new at(Q),ce(),X())}}class gr{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new gr(r,e,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class $l{constructor(t,e){this.targetId=t,this.Ce=e}}class zl{constructor(t,e,r=bt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class xc{constructor(){this.ve=0,this.Fe=Mc(),this.Me=bt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=X(),e=X(),r=X();return this.Fe.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:j(38017,{changeType:o})}})),new gr(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Mc()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,et(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Og{constructor(t){this.Ge=t,this.ze=new Map,this.je=ce(),this.Je=Mr(),this.He=Mr(),this.Ye=new at(Q)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:j(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(Ci(o))if(r===0){const a=new U(o.path);this.et(e,a,Vt.newNoDocument(a,z.min()))}else et(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const u=this.ut(t),h=u?this.ct(u,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=Re(r).toUint8Array()}catch(h){if(h instanceof ml)return hn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new io(a,s,o)}catch(h){return hn(h instanceof Hn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.et(e,o,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const u=this.ot(a);if(u){if(o.current&&Ci(u.target)){const h=new U(u.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Vt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}}));let r=X();this.He.forEach(((o,a)=>{let u=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const s=new As(t,e,this.Ye,this.je,r);return this.je=ce(),this.Je=Mr(),this.He=Mr(),this.Ye=new at(Q),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new xc,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new Et(Q),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new Et(Q),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new xc),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Mr(){return new at(U.comparator)}function Mc(){return new at(U.comparator)}const xg={asc:"ASCENDING",desc:"DESCENDING"},Mg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lg={and:"AND",or:"OR"};class Fg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Di(n,t){return n.useProto3Json||gs(t)?t:{value:t}}function ss(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ug(n,t){return ss(n,t.toTimestamp())}function ne(n){return et(!!n,49232),z.fromTimestamp((function(e){const r=ve(e);return new ot(r.seconds,r.nanos)})(n))}function oo(n,t){return Ni(n,t).canonicalString()}function Ni(n,t){const e=(function(s){return new st(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Gl(n){const t=st.fromString(n);return et(Jl(t),10190,{key:t.toString()}),t}function ki(n,t){return oo(n.databaseId,t.path)}function ai(n,t){const e=Gl(t);if(e.get(1)!==n.databaseId.projectId)throw new O(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new U(Wl(e))}function Kl(n,t){return oo(n.databaseId,t)}function Bg(n){const t=Gl(n);return t.length===4?st.emptyPath():Wl(t)}function Oi(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wl(n){return et(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Lc(n,t,e){return{name:ki(n,t),fields:e.value.mapValue.fields}}function jg(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,f){return d.useProto3Json?(et(f===void 0||typeof f=="string",58123),bt.fromBase64String(f||"")):(et(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),bt.fromUint8Array(f||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&(function(d){const f=d.code===void 0?D.UNKNOWN:ql(d.code);return new O(f,d.message||"")})(a);e=new zl(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ai(n,r.document.name),o=ne(r.document.updateTime),a=r.document.createTime?ne(r.document.createTime):z.min(),u=new Lt({mapValue:{fields:r.document.fields}}),h=Vt.newFoundDocument(s,o,a,u),d=r.targetIds||[],f=r.removedTargetIds||[];e=new Kr(d,f,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ai(n,r.document),o=r.readTime?ne(r.readTime):z.min(),a=Vt.newNoDocument(s,o),u=r.removedTargetIds||[];e=new Kr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ai(n,r.document),o=r.removedTargetIds||[];e=new Kr([],o,s,null)}else{if(!("filter"in t))return j(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Vg(s,o),u=r.targetId;e=new $l(u,a)}}return e}function qg(n,t){let e;if(t instanceof mr)e={update:Lc(n,t.key,t.value)};else if(t instanceof ro)e={delete:ki(n,t.key)};else if(t instanceof Ve)e={update:Lc(n,t.key,t.data),updateMask:Jg(t.fieldMask)};else{if(!(t instanceof Sg))return j(16599,{Vt:t.type});e={verify:ki(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const u=a.transform;if(u instanceof or)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof ar)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof cr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof rs)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw j(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:Ug(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:j(27497)})(n,t.precondition)),e}function $g(n,t){return n&&n.length>0?(et(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?ne(s.updateTime):ne(o);return a.isEqual(z.min())&&(a=ne(o)),new vg(a,s.transformResults||[])})(e,t)))):[]}function zg(n,t){return{documents:[Kl(n,t.path)]}}function Hg(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Kl(n,s);const o=(function(d){if(d.length!==0)return Xl(Kt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((f=>(function(w){return{field:sn(w.field),direction:Wg(w.dir)}})(f)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Di(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:s}}function Gg(n){let t=Bg(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){et(r===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let o=[];e.where&&(o=(function(g){const w=Ql(g);return w instanceof Kt&&Rl(w)?w.getFilters():[w]})(e.where));let a=[];e.orderBy&&(a=(function(g){return g.map((w=>(function(v){return new ir(on(v.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(v.direction))})(w)))})(e.orderBy));let u=null;e.limit&&(u=(function(g){let w;return w=typeof g=="object"?g.value:g,gs(w)?null:w})(e.limit));let h=null;e.startAt&&(h=(function(g){const w=!!g.before,P=g.values||[];return new ns(P,w)})(e.startAt));let d=null;return e.endAt&&(d=(function(g){const w=!g.before,P=g.values||[];return new ns(P,w)})(e.endAt)),lg(t,s,a,o,u,"F",h,d)}function Kg(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ql(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=on(e.unaryFilter.field);return pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=on(e.unaryFilter.field);return pt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=on(e.unaryFilter.field);return pt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=on(e.unaryFilter.field);return pt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}})(n):n.fieldFilter!==void 0?(function(e){return pt.create(on(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Kt.create(e.compositeFilter.filters.map((r=>Ql(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j(1026)}})(e.compositeFilter.op))})(n):j(30097,{filter:n})}function Wg(n){return xg[n]}function Qg(n){return Mg[n]}function Xg(n){return Lg[n]}function sn(n){return{fieldPath:n.canonicalString()}}function on(n){return Rt.fromServerFormat(n.fieldPath)}function Xl(n){return n instanceof pt?(function(e){if(e.op==="=="){if(vc(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NAN"}};if(Ic(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vc(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NOT_NAN"}};if(Ic(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sn(e.field),op:Qg(e.op),value:e.value}}})(n):n instanceof Kt?(function(e){const r=e.getFilters().map((s=>Xl(s)));return r.length===1?r[0]:{compositeFilter:{op:Xg(e.op),filters:r}}})(n):j(54877,{filter:n})}function Jg(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Jl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,e,r,s,o=z.min(),a=z.min(),u=bt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new ge(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ge(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t){this.yt=t}}function Zg(n){const t=Gg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(){this.Cn=new e_}addToCollectionParentIndex(t,e){return this.Cn.add(e),N.resolve()}getCollectionParents(t,e){return N.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return N.resolve()}deleteFieldIndex(t,e){return N.resolve()}deleteAllFieldIndexes(t){return N.resolve()}createTargetIndexes(t,e){return N.resolve()}getDocumentsMatchingTarget(t,e){return N.resolve(null)}getIndexType(t,e){return N.resolve(0)}getFieldIndexes(t,e){return N.resolve([])}getNextCollectionGroupToUpdate(t){return N.resolve(null)}getMinOffset(t,e){return N.resolve(Ie.min())}getMinOffsetFromCollectionGroup(t,e){return N.resolve(Ie.min())}updateCollectionGroup(t,e,r){return N.resolve()}updateIndexEntries(t,e){return N.resolve()}}class e_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Et(st.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Et(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yl=41943040;class Mt{static withCacheSize(t){return new Mt(t,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(Yl,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new mn(0)}static cr(){return new mn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="LruGarbageCollector",n_=1048576;function Bc([n,t],[e,r]){const s=Q(n,e);return s===0?Q(t,r):s}class r_{constructor(t){this.Ir=t,this.buffer=new Et(Bc),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Bc(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class s_{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){M(Uc,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){An(e)?M(Uc,"Ignoring IndexedDB error during garbage collection: ",e):await wn(e)}await this.Vr(3e5)}))}}class i_{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return N.resolve(ms.ce);const r=new r_(e);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Fc)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fc):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,o,a,u,h,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s)))).next((g=>(r=g,u=Date.now(),this.removeTargets(t,r,e)))).next((g=>(o=g,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((g=>(d=Date.now(),nn()<=Z.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${g} documents in `+(d-h)+`ms
Total Duration: ${d-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:g}))))}}function o_(n,t){return new i_(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.changes=new Qe((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?N.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&Jn(r.mutation,s,qt.empty(),ot.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,X()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=X()){const s=Ue();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=zn();return o.forEach(((u,h)=>{a=a.insert(u,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=Ue();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,X())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,u)=>{e.set(a,u)}))}))}computeViews(t,e,r,s){let o=ce();const a=Xn(),u=(function(){return Xn()})();return e.forEach(((h,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Ve)?o=o.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Jn(f.mutation,d,f.mutation.getFieldMask(),ot.now())):a.set(d.key,qt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,f)=>a.set(d,f))),e.forEach(((d,f)=>u.set(d,new c_(f,a.get(d)??null)))),u)))}recalculateAndSaveOverlays(t,e){const r=Xn();let s=new at(((a,u)=>a-u)),o=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const u of a)u.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let f=r.get(h)||qt.empty();f=u.applyToLocalView(d,f),r.set(h,f);const g=(s.get(u.batchId)||X()).add(h);s=s.insert(u.batchId,g)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,f=h.value,g=Ol();f.forEach((w=>{if(!o.has(w)){const P=Bl(e.get(w),r.get(w));P!==null&&g.set(w,P),o=o.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return N.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Pl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):N.resolve(Ue());let u=er,h=o;return a.next((d=>N.forEach(d,((f,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),o.get(f)?N.resolve():this.remoteDocumentCache.getEntry(t,f).next((w=>{h=h.insert(f,w)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,X()))).next((f=>({batchId:u,changes:kl(f)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new U(e)).next((r=>{let s=zn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=zn();return this.indexManager.getCollectionParents(t,o).next((u=>N.forEach(u,(h=>{const d=(function(g,w){return new In(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((f=>{f.forEach(((g,w)=>{a=a.insert(g,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Vt.newInvalidDocument(f)))}));let u=zn();return a.forEach(((h,d)=>{const f=o.get(h);f!==void 0&&Jn(f.mutation,d,qt.empty(),ot.now()),Es(e,d)&&(u=u.insert(h,d))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return N.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:ne(s.createTime)}})(e)),N.resolve()}getNamedQuery(t,e){return N.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(s){return{name:s.name,query:Zg(s.bundledQuery),readTime:ne(s.readTime)}})(e)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.overlays=new at(U.comparator),this.qr=new Map}getOverlay(t,e){return N.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ue();return N.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.St(t,e,o)})),N.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),N.resolve()}getOverlaysForCollection(t,e,r){const s=Ue(),o=e.length+1,a=new U(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return N.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new at(((d,f)=>d-f));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=Ue(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=Ue(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,f)=>u.set(d,f))),!(u.size()>=s)););return N.resolve(u)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Pg(e,r));let o=this.qr.get(e);o===void 0&&(o=X(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(t){return N.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.Qr=new Et(At.$r),this.Ur=new Et(At.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new At(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new At(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new U(new st([])),r=new At(e,t),s=new At(e,t+1),o=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new U(new st([])),r=new At(e,t),s=new At(e,t+1);let o=X();return this.Ur.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new At(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class At{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return U.comparator(t.key,e.key)||Q(t.Yr,e.Yr)}static Kr(t,e){return Q(t.Yr,e.Yr)||U.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new Et(At.$r)}checkEmpty(t){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Cg(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Zr=this.Zr.add(new At(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return N.resolve(a)}lookupMutationBatch(t,e){return N.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),o=s<0?0:s;return N.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Xi:this.tr-1)}getAllMutationBatches(t){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new At(e,0),s=new At(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],(a=>{const u=this.Xr(a.Yr);o.push(u)})),N.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Et(Q);return e.forEach((s=>{const o=new At(s,0),a=new At(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(u=>{r=r.add(u.Yr)}))})),N.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;U.isDocumentKey(o)||(o=o.child(""));const a=new At(new U(o),0);let u=new Et(Q);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Yr)),!0)}),a),N.resolve(this.ti(u))}ti(t){const e=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){et(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return N.forEach(e.mutations,(s=>{const o=new At(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new At(e,0),s=this.Zr.firstAfterOrEqual(r);return N.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,N.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(t){this.ri=t,this.docs=(function(){return new at(U.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return N.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(e))}getEntries(t,e){let r=ce();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Vt.newInvalidDocument(s))})),N.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ce();const a=e.path,u=new U(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:f}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||qm(jm(f),r)<=0||(s.has(f.key)||Es(e,f))&&(o=o.insert(f.key,f.mutableCopy()))}return N.resolve(o)}getAllFromCollectionGroup(t,e,r,s){j(9500)}ii(t,e){return N.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new m_(this)}getSize(t){return N.resolve(this.size)}}class m_ extends a_{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),N.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(t){this.persistence=t,this.si=new Qe((e=>Zi(e)),to),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.oi=0,this._i=new ao,this.targetCount=0,this.ai=mn.ur()}forEachTarget(t,e){return this.si.forEach(((r,s)=>e(s))),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),N.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new mn(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,N.resolve()}updateTargetData(t,e){return this.Pr(e),N.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.si.forEach(((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)})),N.waitFor(o).next((()=>s))}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return N.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),N.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),N.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),N.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return N.resolve(r)}containsKey(t,e){return N.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,e){this.ui={},this.overlays={},this.ci=new ms(0),this.li=!1,this.li=!0,this.hi=new d_,this.referenceDelegate=t(this),this.Pi=new g_(this),this.indexManager=new t_,this.remoteDocumentCache=(function(s){return new p_(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Yg(e),this.Ii=new l_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new h_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new f_(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const s=new __(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ai(t,e){return N.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class __ extends zm{constructor(t){super(),this.currentSequenceNumber=t}}class co{constructor(t){this.persistence=t,this.Ri=new ao,this.Vi=null}static mi(t){return new co(t)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),N.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),N.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.fi,(r=>{const s=U.fromPath(r);return this.gi(t,s).next((o=>{o||e.removeEntry(s,z.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return N.or([()=>N.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class is{constructor(t,e){this.persistence=t,this.pi=new Qe((r=>Km(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=o_(this,e)}static mi(t,e){return new is(t,e)}Ei(){}di(t){return N.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return N.forEach(this.pi,((r,s)=>this.br(t,r,s).next((o=>o?N.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,e).next((u=>{u||(r++,o.removeEntry(a,z.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),N.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),N.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),N.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),N.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=zr(t.data.value)),e}br(t,e,r){return N.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=X(),s=X();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new uo(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return fp()?8:Hm(hp())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ys(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new y_;return this.Ss(t,e,a).next((u=>{if(o.result=u,this.Vs)return this.bs(t,e,a,u.size)}))})).next((()=>o.result))}bs(t,e,r,s){return r.documentReadCount<this.fs?(nn()<=Z.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",rn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),N.resolve()):(nn()<=Z.DEBUG&&M("QueryEngine","Query:",rn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(nn()<=Z.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",rn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ee(e))):N.resolve())}ys(t,e){if(Cc(e))return N.resolve(null);let r=ee(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Vi(e,null,"F"),r=ee(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=X(...o);return this.ps.getDocuments(t,a).next((u=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.Ds(e,u);return this.Cs(e,d,a,h.readTime)?this.ys(t,Vi(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ws(t,e,r,s){return Cc(e)||s.isEqual(z.min())?N.resolve(null):this.ps.getDocuments(t,r).next((o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,s)?N.resolve(null):(nn()<=Z.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rn(e)),this.vs(t,a,e,Bm(s,er)).next((u=>u)))}))}Ds(t,e){let r=new Et(Dl(t));return e.forEach(((s,o)=>{Es(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return nn()<=Z.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",rn(e)),this.ps.getDocumentsMatchingQuery(t,e,Ie.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="LocalStore",T_=3e8;class w_{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new at(Q),this.xs=new Qe((o=>Zi(o)),to),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new u_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function A_(n,t,e,r){return new w_(n,t,e,r)}async function th(n,t){const e=H(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],u=[];let h=X();for(const d of s){a.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of o){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function I_(n,t){const e=H(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(u,h,d,f){const g=d.batch,w=g.keys();let P=N.resolve();return w.forEach((v=>{P=P.next((()=>f.getEntry(h,v))).next((V=>{const b=d.docVersions.get(v);et(b!==null,48541),V.version.compareTo(b)<0&&(g.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),f.addEntry(V)))}))})),P.next((()=>u.mutationQueue.removeMutationBatch(h,g)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(u){let h=X();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function eh(n){const t=H(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function v_(n,t){const e=H(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const u=[];t.targetChanges.forEach(((f,g)=>{const w=s.get(g);if(!w)return;u.push(e.Pi.removeMatchingKeys(o,f.removedDocuments,g).next((()=>e.Pi.addMatchingKeys(o,f.addedDocuments,g))));let P=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(g)!==null?P=P.withResumeToken(bt.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,r)),s=s.insert(g,P),(function(V,b,x){return V.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=T_?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(w,P,f)&&u.push(e.Pi.updateTargetData(o,P))}));let h=ce(),d=X();if(t.documentUpdates.forEach((f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,f))})),u.push(R_(o,a,t.documentUpdates).next((f=>{h=f.ks,d=f.qs}))),!r.isEqual(z.min())){const f=e.Pi.getLastRemoteSnapshotVersion(o).next((g=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));u.push(f)}return N.waitFor(u).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Ms=s,o)))}function R_(n,t,e){let r=X(),s=X();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=ce();return e.forEach(((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(z.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):M(lo,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)})),{ks:a,qs:s}}))}function b_(n,t){const e=H(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Xi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function S_(n,t){const e=H(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.Pi.getTargetData(r,t).next((o=>o?(s=o,N.resolve(s)):e.Pi.allocateTargetId(r).next((a=>(s=new ge(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function xi(n,t,e){const r=H(n),s=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!An(a))throw a;M(lo,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function jc(n,t,e){const r=H(n);let s=z.min(),o=X();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,f){const g=H(h),w=g.xs.get(f);return w!==void 0?N.resolve(g.Ms.get(w)):g.Pi.getTargetData(d,f)})(r,a,ee(t)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,u.targetId).next((h=>{o=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:z.min(),e?o:X()))).next((u=>(C_(r,dg(t),u),{documents:u,Qs:o})))))}function C_(n,t,e){let r=n.Os.get(t)||z.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(t,r)}class qc{constructor(){this.activeTargetIds=yg()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class P_{constructor(){this.Mo=new qc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new qc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="ConnectivityMonitor";class zc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){M($c,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){M($c,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr=null;function Mi(){return Lr===null?Lr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Lr++,"0x"+Lr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="RestConnection",D_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class N_{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ts?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,o){const a=Mi(),u=this.zo(t,e.toUriEncodedString());M(ci,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(u),f=fr(d);return this.Jo(t,u,h,r,f).then((g=>(M(ci,`Received RPC '${t}' ${a}: `,g),g)),(g=>{throw hn(ci,`RPC '${t}' ${a} failed with error: `,g,"url: ",u,"request:",r),g}))}Ho(t,e,r,s,o,a){return this.Go(t,e,r,s,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Tn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}zo(t,e){const r=D_[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class O_ extends N_{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=Mi();return new Promise(((u,h)=>{const d=new sl;d.setWithCredentials(!0),d.listenOnce(il.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case $r.NO_ERROR:const g=d.getResponseJson();M(Ct,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),u(g);break;case $r.TIMEOUT:M(Ct,`RPC '${t}' ${a} timed out`),h(new O(D.DEADLINE_EXCEEDED,"Request time out"));break;case $r.HTTP_ERROR:const w=d.getStatus();if(M(Ct,`RPC '${t}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const v=P?.error;if(v&&v.status&&v.message){const V=(function(x){const F=x.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(F)>=0?F:D.UNKNOWN})(v.status);h(new O(V,v.message))}else h(new O(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new O(D.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(Ct,`RPC '${t}' ${a} completed.`)}}));const f=JSON.stringify(s);M(Ct,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",f,r,15)}))}T_(t,e,r){const s=Mi(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=cl(),u=al(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const f=o.join("");M(Ct,`Creating RPC '${t}' stream ${s}: ${f}`,h);const g=a.createWebChannel(f,h);this.I_(g);let w=!1,P=!1;const v=new k_({Yo:b=>{P?M(Ct,`Not sending because RPC '${t}' stream ${s} is closed:`,b):(w||(M(Ct,`Opening RPC '${t}' stream ${s} transport.`),g.open(),w=!0),M(Ct,`RPC '${t}' stream ${s} sending:`,b),g.send(b))},Zo:()=>g.close()}),V=(b,x,F)=>{b.listen(x,(L=>{try{F(L)}catch(B){setTimeout((()=>{throw B}),0)}}))};return V(g,$n.EventType.OPEN,(()=>{P||(M(Ct,`RPC '${t}' stream ${s} transport opened.`),v.o_())})),V(g,$n.EventType.CLOSE,(()=>{P||(P=!0,M(Ct,`RPC '${t}' stream ${s} transport closed`),v.a_(),this.E_(g))})),V(g,$n.EventType.ERROR,(b=>{P||(P=!0,hn(Ct,`RPC '${t}' stream ${s} transport errored. Name:`,b.name,"Message:",b.message),v.a_(new O(D.UNAVAILABLE,"The operation could not be completed")))})),V(g,$n.EventType.MESSAGE,(b=>{if(!P){const x=b.data[0];et(!!x,16349);const F=x,L=F?.error||F[0]?.error;if(L){M(Ct,`RPC '${t}' stream ${s} received error:`,L);const B=L.status;let J=(function(_){const y=ft[_];if(y!==void 0)return ql(y)})(B),tt=L.message;J===void 0&&(J=D.INTERNAL,tt="Unknown error status: "+B+" with message "+L.message),P=!0,v.a_(new O(J,tt)),g.close()}else M(Ct,`RPC '${t}' stream ${s} received:`,x),v.u_(x)}})),V(u,ol.STAT_EVENT,(b=>{b.stat===Ii.PROXY?M(Ct,`RPC '${t}' stream ${s} detected buffering proxy`):b.stat===Ii.NOPROXY&&M(Ct,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{v.__()}),0),v}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function ui(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n){return new Fg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="PersistentStream";class rh{constructor(t,e,r,s,o,a,u,h){this.Mi=t,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new nh(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(ae(e.toString()),ae("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new O(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return M(Hc,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(M(Hc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class x_ extends rh{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=jg(this.serializer,t),r=(function(o){if(!("targetChange"in o))return z.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?ne(a.readTime):z.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=Oi(this.serializer),e.addTarget=(function(o,a){let u;const h=a.target;if(u=Ci(h)?{documents:zg(o,h)}:{query:Hg(o,h).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Hl(o,a.resumeToken);const d=Di(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){u.readTime=ss(o,a.snapshotVersion.toTimestamp());const d=Di(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,t);const r=Kg(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=Oi(this.serializer),e.removeTarget=t,this.q_(e)}}class M_ extends rh{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return et(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,et(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){et(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=$g(t.writeResults,t.commitTime),r=ne(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Oi(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>qg(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{}class F_ extends L_{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(t,Ni(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(D.UNKNOWN,o.toString())}))}Ho(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Ho(t,Ni(e,r),s,a,u,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(D.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class U_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ae(e),this.aa=!1):M("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="RemoteStore";class B_{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Xe(this)&&(M(Ge,"Restarting streams for network reachability change."),await(async function(h){const d=H(h);d.Ea.add(4),await _r(d),d.Ra.set("Unknown"),d.Ea.delete(4),await vs(d)})(this))}))})),this.Ra=new U_(r,s)}}async function vs(n){if(Xe(n))for(const t of n.da)await t(!0)}async function _r(n){for(const t of n.da)await t(!1)}function sh(n,t){const e=H(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),mo(e)?po(e):vn(e).O_()&&fo(e,t))}function ho(n,t){const e=H(n),r=vn(e);e.Ia.delete(t),r.O_()&&ih(e,t),e.Ia.size===0&&(r.O_()?r.L_():Xe(e)&&e.Ra.set("Unknown"))}function fo(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}vn(n).Y_(t)}function ih(n,t){n.Va.Ue(t),vn(n).Z_(t)}function po(n){n.Va=new Og({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),vn(n).start(),n.Ra.ua()}function mo(n){return Xe(n)&&!vn(n).x_()&&n.Ia.size>0}function Xe(n){return H(n).Ea.size===0}function oh(n){n.Va=void 0}async function j_(n){n.Ra.set("Online")}async function q_(n){n.Ia.forEach(((t,e)=>{fo(n,t)}))}async function $_(n,t){oh(n),mo(n)?(n.Ra.ha(t),po(n)):n.Ra.set("Unknown")}async function z_(n,t,e){if(n.Ra.set("Online"),t instanceof zl&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.Va.removeTarget(u))})(n,t)}catch(r){M(Ge,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await os(n,r)}else if(t instanceof Kr?n.Va.Ze(t):t instanceof $l?n.Va.st(t):n.Va.tt(t),!e.isEqual(z.min()))try{const r=await eh(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const u=o.Va.Tt(a);return u.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const f=o.Ia.get(d);f&&o.Ia.set(d,f.withResumeToken(h.resumeToken,a))}})),u.targetMismatches.forEach(((h,d)=>{const f=o.Ia.get(h);if(!f)return;o.Ia.set(h,f.withResumeToken(bt.EMPTY_BYTE_STRING,f.snapshotVersion)),ih(o,h);const g=new ge(f.target,h,d,f.sequenceNumber);fo(o,g)})),o.remoteSyncer.applyRemoteEvent(u)})(n,e)}catch(r){M(Ge,"Failed to raise snapshot:",r),await os(n,r)}}async function os(n,t,e){if(!An(t))throw t;n.Ea.add(1),await _r(n),n.Ra.set("Offline"),e||(e=()=>eh(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(Ge,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await vs(n)}))}function ah(n,t){return t().catch((e=>os(n,e,t)))}async function Rs(n){const t=H(n),e=Se(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Xi;for(;H_(t);)try{const s=await b_(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,G_(t,s)}catch(s){await os(t,s)}ch(t)&&uh(t)}function H_(n){return Xe(n)&&n.Ta.length<10}function G_(n,t){n.Ta.push(t);const e=Se(n);e.O_()&&e.X_&&e.ea(t.mutations)}function ch(n){return Xe(n)&&!Se(n).x_()&&n.Ta.length>0}function uh(n){Se(n).start()}async function K_(n){Se(n).ra()}async function W_(n){const t=Se(n);for(const e of n.Ta)t.ea(e.mutations)}async function Q_(n,t,e){const r=n.Ta.shift(),s=so.from(r,t,e);await ah(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Rs(n)}async function X_(n,t){t&&Se(n).X_&&await(async function(r,s){if((function(a){return Dg(a)&&a!==D.ABORTED})(s.code)){const o=r.Ta.shift();Se(r).B_(),await ah(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Rs(r)}})(n,t),ch(n)&&uh(n)}async function Gc(n,t){const e=H(n);e.asyncQueue.verifyOperationInProgress(),M(Ge,"RemoteStore received new credentials");const r=Xe(e);e.Ea.add(3),await _r(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await vs(e)}async function J_(n,t){const e=H(n);t?(e.Ea.delete(2),await vs(e)):t||(e.Ea.add(2),await _r(e),e.Ra.set("Unknown"))}function vn(n){return n.ma||(n.ma=(function(e,r,s){const o=H(e);return o.sa(),new x_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:j_.bind(null,n),t_:q_.bind(null,n),r_:$_.bind(null,n),H_:z_.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),mo(n)?po(n):n.Ra.set("Unknown")):(await n.ma.stop(),oh(n))}))),n.ma}function Se(n){return n.fa||(n.fa=(function(e,r,s){const o=H(e);return o.sa(),new M_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:K_.bind(null,n),r_:X_.bind(null,n),ta:W_.bind(null,n),na:Q_.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Rs(n)):(await n.fa.stop(),n.Ta.length>0&&(M(Ge,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new go(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _o(n,t){if(ae("AsyncQueue",`${t}: ${n}`),An(n))return new O(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{static emptySet(t){return new an(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||U.comparator(e.key,r.key):(e,r)=>U.comparator(e.key,r.key),this.keyedMap=zn(),this.sortedSet=new at(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof an)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new an;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.ga=new at(U.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):j(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class gn{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((u=>{a.push({type:0,doc:u})})),new gn(t,e,an.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ys(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class Z_{constructor(){this.queries=Wc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=H(e),o=s.queries;s.queries=Wc(),o.forEach(((a,u)=>{for(const h of u.Sa)h.onError(r)}))})(this,new O(D.ABORTED,"Firestore shutting down"))}}function Wc(){return new Qe((n=>Vl(n)),ys)}async function ty(n,t){const e=H(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(r=2):(o=new Y_,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=_o(a,`Initialization of query '${rn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&yo(e)}async function ey(n,t){const e=H(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function ny(n,t){const e=H(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.Sa)u.Fa(s)&&(r=!0);a.wa=s}}r&&yo(e)}function ry(n,t,e){const r=H(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function yo(n){n.Ca.forEach((t=>{t.next()}))}var Li,Qc;(Qc=Li||(Li={})).Ma="default",Qc.Cache="cache";class sy{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new gn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=gn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Li.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.key=t}}class hh{constructor(t){this.key=t}}class iy{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=X(),this.mutatedKeys=X(),this.eu=Dl(t),this.tu=new an(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new Kc,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((f,g)=>{const w=s.get(f),P=Es(this.query,g)?g:null,v=!!w&&this.mutatedKeys.has(w.key),V=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let b=!1;w&&P?w.data.isEqual(P.data)?v!==V&&(r.track({type:3,doc:P}),b=!0):this.su(w,P)||(r.track({type:2,doc:P}),b=!0,(h&&this.eu(P,h)>0||d&&this.eu(P,d)<0)&&(u=!0)):!w&&P?(r.track({type:0,doc:P}),b=!0):w&&!P&&(r.track({type:1,doc:w}),b=!0,(h||d)&&(u=!0)),b&&(P?(a=a.add(P),o=V?o.add(f):o.delete(f)):(a=a.delete(f),o=o.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:u,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((f,g)=>(function(P,v){const V=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Rt:b})}};return V(P)-V(v)})(f.type,g.type)||this.eu(f.doc,g.doc))),this.ou(r),s=s??!1;const u=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new gn(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Kc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=X(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new hh(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new lh(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=X();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return gn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Eo="SyncEngine";class oy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class ay{constructor(t){this.key=t,this.hu=!1}}class cy{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Qe((u=>Vl(u)),ys),this.Iu=new Map,this.Eu=new Set,this.du=new at(U.comparator),this.Au=new Map,this.Ru=new ao,this.Vu={},this.mu=new Map,this.fu=mn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function uy(n,t,e=!0){const r=_h(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await dh(r,t,e,!0),s}async function ly(n,t){const e=_h(n);await dh(e,t,!0,!1)}async function dh(n,t,e,r){const s=await S_(n.localStore,ee(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await hy(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&sh(n.remoteStore,s),u}async function hy(n,t,e,r,s){n.pu=(g,w,P)=>(async function(V,b,x,F){let L=b.view.ru(x);L.Cs&&(L=await jc(V.localStore,b.query,!1).then((({documents:E})=>b.view.ru(E,L))));const B=F&&F.targetChanges.get(b.targetId),J=F&&F.targetMismatches.get(b.targetId)!=null,tt=b.view.applyChanges(L,V.isPrimaryClient,B,J);return Jc(V,b.targetId,tt.au),tt.snapshot})(n,g,w,P);const o=await jc(n.localStore,t,!0),a=new iy(t,o.Qs),u=a.ru(o.documents),h=gr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);Jc(n,e,d.au);const f=new oy(t,e,a);return n.Tu.set(t,f),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function dy(n,t,e){const r=H(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!ys(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xi(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ho(r.remoteStore,s.targetId),Fi(r,s.targetId)})).catch(wn)):(Fi(r,s.targetId),await xi(r.localStore,s.targetId,!0))}async function fy(n,t){const e=H(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ho(e.remoteStore,r.targetId))}async function py(n,t,e){const r=wy(n);try{const s=await(function(a,u){const h=H(a),d=ot.now(),f=u.reduce(((P,v)=>P.add(v.key)),X());let g,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let v=ce(),V=X();return h.Ns.getEntries(P,f).next((b=>{v=b,v.forEach(((x,F)=>{F.isValidDocument()||(V=V.add(x))}))})).next((()=>h.localDocuments.getOverlayedDocuments(P,v))).next((b=>{g=b;const x=[];for(const F of u){const L=bg(F,g.get(F.key).overlayedDocument);L!=null&&x.push(new Ve(F.key,L,Al(L.value.mapValue),Gt.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,x,u)})).next((b=>{w=b;const x=b.applyToLocalDocumentSet(g,V);return h.documentOverlayCache.saveOverlays(P,b.batchId,x)}))})).then((()=>({batchId:w.batchId,changes:kl(g)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,u,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new at(Q)),d=d.insert(u,h),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,e),await yr(r,s.changes),await Rs(r.remoteStore)}catch(s){const o=_o(s,"Failed to persist write");e.reject(o)}}async function fh(n,t){const e=H(n);try{const r=await v_(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Au.get(o);a&&(et(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?et(a.hu,14607):s.removedDocuments.size>0&&(et(a.hu,42227),a.hu=!1))})),await yr(e,r,t)}catch(r){await wn(r)}}function Xc(n,t,e){const r=H(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((o,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const h=H(a);h.onlineState=u;let d=!1;h.queries.forEach(((f,g)=>{for(const w of g.Sa)w.va(u)&&(d=!0)})),d&&yo(h)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function my(n,t,e){const r=H(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new at(U.comparator);a=a.insert(o,Vt.newNoDocument(o,z.min()));const u=X().add(o),h=new As(z.min(),new Map,new at(Q),a,u);await fh(r,h),r.du=r.du.remove(o),r.Au.delete(t),To(r)}else await xi(r.localStore,t,!1).then((()=>Fi(r,t,e))).catch(wn)}async function gy(n,t){const e=H(n),r=t.batch.batchId;try{const s=await I_(e.localStore,t);mh(e,r,null),ph(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await yr(e,s)}catch(s){await wn(s)}}async function _y(n,t,e){const r=H(n);try{const s=await(function(a,u){const h=H(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return h.mutationQueue.lookupMutationBatch(d,u).next((g=>(et(g!==null,37113),f=g.keys(),h.mutationQueue.removeMutationBatch(d,g)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,f,u))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>h.localDocuments.getDocuments(d,f)))}))})(r.localStore,t);mh(r,t,e),ph(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await yr(r,s)}catch(s){await wn(s)}}function ph(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function mh(n,t,e){const r=H(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function Fi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||gh(n,r)}))}function gh(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(ho(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),To(n))}function Jc(n,t,e){for(const r of e)r instanceof lh?(n.Ru.addReference(r.key,t),yy(n,r)):r instanceof hh?(M(Eo,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||gh(n,r.key)):j(19791,{wu:r})}function yy(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(M(Eo,"New document in limbo: "+e),n.Eu.add(r),To(n))}function To(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new U(st.fromString(t)),r=n.fu.next();n.Au.set(r,new ay(e)),n.du=n.du.insert(e,r),sh(n.remoteStore,new ge(ee(eo(e.path)),r,"TargetPurposeLimboResolution",ms.ce))}}async function yr(n,t,e){const r=H(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((u,h)=>{a.push(r.pu(h,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const f=d?!d.fromCache:e?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,f?"current":"not-current")}if(d){s.push(d);const f=uo.As(h.targetId,d);o.push(f)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(h,d){const f=H(h);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>N.forEach(d,(w=>N.forEach(w.Es,(P=>f.persistence.referenceDelegate.addReference(g,w.targetId,P))).next((()=>N.forEach(w.ds,(P=>f.persistence.referenceDelegate.removeReference(g,w.targetId,P)))))))))}catch(g){if(!An(g))throw g;M(lo,"Failed to update sequence numbers: "+g)}for(const g of d){const w=g.targetId;if(!g.fromCache){const P=f.Ms.get(w),v=P.snapshotVersion,V=P.withLastLimboFreeSnapshotVersion(v);f.Ms=f.Ms.insert(w,V)}}})(r.localStore,o))}async function Ey(n,t){const e=H(n);if(!e.currentUser.isEqual(t)){M(Eo,"User change. New user:",t.toKey());const r=await th(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((u=>{u.forEach((h=>{h.reject(new O(D.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await yr(e,r.Ls)}}function Ty(n,t){const e=H(n),r=e.Au.get(t);if(r&&r.hu)return X().add(r.key);{let s=X();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const u=e.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function _h(n){const t=H(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=fh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ty.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=my.bind(null,t),t.Pu.H_=ny.bind(null,t.eventManager),t.Pu.yu=ry.bind(null,t.eventManager),t}function wy(n){const t=H(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=gy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_y.bind(null,t),t}class as{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Is(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return A_(this.persistence,new E_,t.initialUser,this.serializer)}Cu(t){return new Zl(co.mi,this.serializer)}Du(t){return new P_}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}as.provider={build:()=>new as};class Ay extends as{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){et(this.persistence.referenceDelegate instanceof is,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new s_(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new Zl((r=>is.mi(r,e)),this.serializer)}}class Ui{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ey.bind(null,this.syncEngine),await J_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Z_})()}createDatastore(t){const e=Is(t.databaseInfo.databaseId),r=(function(o){return new O_(o)})(t.databaseInfo);return(function(o,a,u,h){return new F_(o,a,u,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,u){return new B_(r,s,o,a,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>Xc(this.syncEngine,e,0)),(function(){return zc.v()?new zc:new V_})())}createSyncEngine(t,e){return(function(s,o,a,u,h,d,f){const g=new cy(s,o,a,u,h,d);return f&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=H(e);M(Ge,"RemoteStore shutting down."),r.Ea.add(5),await _r(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ui.provider={build:()=>new Ui};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ae("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="FirestoreClient";class vy{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Pt.UNAUTHENTICATED,this.clientId=Qi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{M(Ce,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(M(Ce,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=_o(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function li(n,t){n.asyncQueue.verifyOperationInProgress(),M(Ce,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await th(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Yc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ry(n);M(Ce,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Gc(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Gc(t.remoteStore,s))),n._onlineComponents=t}async function Ry(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(Ce,"Using user provided OfflineComponentProvider");try{await li(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;hn("Error using user provided cache. Falling back to memory cache: "+e),await li(n,new as)}}else M(Ce,"Using default OfflineComponentProvider"),await li(n,new Ay(void 0));return n._offlineComponents}async function yh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(Ce,"Using user provided OnlineComponentProvider"),await Yc(n,n._uninitializedComponentsProvider._online)):(M(Ce,"Using default OnlineComponentProvider"),await Yc(n,new Ui))),n._onlineComponents}function by(n){return yh(n).then((t=>t.syncEngine))}async function Zc(n){const t=await yh(n),e=t.eventManager;return e.onListen=uy.bind(null,t.syncEngine),e.onUnlisten=dy.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ly.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=fy.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="firestore.googleapis.com",eu=!0;class nu{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new O(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Th,this.ssl=eu}else this.host=t.host,this.ssl=t.ssl??eu;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Yl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<n_)throw new O(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Um("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Eh(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class bs{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nu(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Pm;switch(r.type){case"firstParty":return new km(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=tu.get(e);r&&(M("ComponentProvider","Removing Datastore"),tu.delete(e),r.terminate())})(this),Promise.resolve()}}function Sy(n,t,e,r={}){n=we(n,bs);const s=fr(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;s&&($u(`https://${u}`),Hu("Firestore",!0)),o.host!==Th&&o.host!==u&&hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:r};if(!Jr(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Pt.MOCK_USER;else{d=zu(r.mockUserToken,n._app?.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new O(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Pt(g)}n._authCredentials=new Vm(new ll(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Je(this.firestore,t,this._query)}}class gt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gt(this.firestore,t,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(pr(e,gt._jsonSchema))return new gt(t,r||null,new U(st.fromString(e.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:mt("string",gt._jsonSchemaVersion),referencePath:mt("string")};class Ae extends Je{constructor(t,e,r){super(t,e,eo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gt(this.firestore,null,new U(t))}withConverter(t){return new Ae(this.firestore,t,this._path)}}function Cy(n,t,...e){if(n=Bt(n),hl("collection","path",t),n instanceof bs){const r=st.fromString(t,...e);return pc(r),new Ae(n,null,r)}{if(!(n instanceof gt||n instanceof Ae))throw new O(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(st.fromString(t,...e));return pc(r),new Ae(n.firestore,null,r)}}function Bi(n,t,...e){if(n=Bt(n),arguments.length===1&&(t=Qi.newId()),hl("doc","path",t),n instanceof bs){const r=st.fromString(t,...e);return fc(r),new gt(n,null,new U(r))}{if(!(n instanceof gt||n instanceof Ae))throw new O(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(st.fromString(t,...e));return fc(r),new gt(n.firestore,n instanceof Ae?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="AsyncQueue";class su{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new nh(this,"async_queue_retry"),this._c=()=>{const r=ui();r&&M(ru,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=ui();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ui();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new je;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!An(t))throw t;M(ru,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,ae("INTERNAL UNHANDLED ERROR: ",iu(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=go.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&j(47125,{Pc:iu(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function iu(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}class _n extends bs{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new su,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new su(t),this._firestoreClient=void 0,await t}}}function Py(n,t){const e=typeof n=="object"?n:tl(),r=typeof n=="string"?n:ts,s=Xu(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=ju("firestore");o&&Sy(s,...o)}return s}function wh(n){if(n._terminated)throw new O(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Vy(n),n._firestoreClient}function Vy(n){const t=n._freezeSettings(),e=(function(s,o,a,u){return new Xm(s,o,a,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Eh(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new vy(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(s){const o=s?._online.build();return{_offline:s?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zt(bt.fromBase64String(t))}catch(e){throw new O(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new zt(bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(pr(t,zt._jsonSchema))return zt.fromBase64String(t.bytes)}}zt._jsonSchemaVersion="firestore/bytes/1.0",zt._jsonSchema={type:mt("string",zt._jsonSchemaVersion),bytes:mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Q(this._lat,t._lat)||Q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:re._jsonSchemaVersion}}static fromJSON(t){if(pr(t,re._jsonSchema))return new re(t.latitude,t.longitude)}}re._jsonSchemaVersion="firestore/geoPoint/1.0",re._jsonSchema={type:mt("string",re._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:se._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(pr(t,se._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new se(t.vectorValues);throw new O(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}se._jsonSchemaVersion="firestore/vectorValue/1.0",se._jsonSchema={type:mt("string",se._jsonSchemaVersion),vectorValues:mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=/^__.*__$/;class Ny{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ve(t,this.data,this.fieldMask,e,this.fieldTransforms):new mr(t,this.data,e,this.fieldTransforms)}}class Ah{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ve(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ih(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:n})}}class wo{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new wo({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return cs(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Ih(this.Ac)&&Dy.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class ky{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Is(t)}Cc(t,e,r,s=!1){return new wo({Ac:t,methodName:e,Dc:r,path:Rt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ao(n){const t=n._freezeSettings(),e=Is(n._databaseId);return new ky(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Oy(n,t,e,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,t,e,s);vo("Data must be an object, but it was:",a,r);const u=vh(r,a);let h,d;if(o.merge)h=new qt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const f=[];for(const g of o.mergeFields){const w=ji(t,g,e);if(!a.contains(w))throw new O(D.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);bh(f,w)||f.push(w)}h=new qt(f),d=a.fieldTransforms.filter((g=>h.covers(g.field)))}else h=null,d=a.fieldTransforms;return new Ny(new Lt(u),h,d)}class Ps extends Cs{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ps}}class Io extends Cs{_toFieldTransform(t){return new Ag(t.path,new or)}isEqual(t){return t instanceof Io}}function xy(n,t,e,r){const s=n.Cc(1,t,e);vo("Data must be an object, but it was:",s,r);const o=[],a=Lt.empty();Pe(r,((h,d)=>{const f=Ro(t,h,e);d=Bt(d);const g=s.yc(f);if(d instanceof Ps)o.push(f);else{const w=Er(d,g);w!=null&&(o.push(f),a.set(f,w))}}));const u=new qt(o);return new Ah(a,u,s.fieldTransforms)}function My(n,t,e,r,s,o){const a=n.Cc(1,t,e),u=[ji(t,r,e)],h=[s];if(o.length%2!=0)throw new O(D.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)u.push(ji(t,o[w])),h.push(o[w+1]);const d=[],f=Lt.empty();for(let w=u.length-1;w>=0;--w)if(!bh(d,u[w])){const P=u[w];let v=h[w];v=Bt(v);const V=a.yc(P);if(v instanceof Ps)d.push(P);else{const b=Er(v,V);b!=null&&(d.push(P),f.set(P,b))}}const g=new qt(d);return new Ah(f,g,a.fieldTransforms)}function Ly(n,t,e,r=!1){return Er(e,n.Cc(r?4:3,t))}function Er(n,t){if(Rh(n=Bt(n)))return vo("Unsupported field value:",t,n),vh(n,t);if(n instanceof Cs)return(function(r,s){if(!Ih(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const u of r){let h=Er(u,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=Bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Eg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:ss(s.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ss(s.serializer,o)}}if(r instanceof re)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zt)return{bytesValue:Hl(s.serializer,r._byteString)};if(r instanceof gt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:oo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof se)return(function(a,u){return{mapValue:{fields:{[Tl]:{stringValue:wl},[es]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return no(u.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${ps(r)}`)})(n,t)}function vh(n,t){const e={};return pl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Pe(n,((r,s)=>{const o=Er(s,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Rh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof re||n instanceof zt||n instanceof gt||n instanceof Cs||n instanceof se)}function vo(n,t,e){if(!Rh(e)||!dl(e)){const r=ps(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function ji(n,t,e){if((t=Bt(t))instanceof Ss)return t._internalPath;if(typeof t=="string")return Ro(n,t);throw cs("Field path arguments must be of type string or ",n,!1,void 0,e)}const Fy=new RegExp("[~\\*/\\[\\]]");function Ro(n,t,e){if(t.search(Fy)>=0)throw cs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ss(...t.split("."))._internalPath}catch{throw cs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function cs(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new O(D.INVALID_ARGUMENT,u+n+h)}function bh(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Uy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(bo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Uy extends Sh{data(){return super.data()}}function bo(n,t){return typeof t=="string"?Ro(n,t):t instanceof Ss?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class So{}class Ch extends So{}function jy(n,t,...e){let r=[];t instanceof So&&r.push(t),r=r.concat(e),(function(o){const a=o.filter((h=>h instanceof Po)).length,u=o.filter((h=>h instanceof Co)).length;if(a>1||a>0&&u>0)throw new O(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Co extends Ch{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Co(t,e,r)}_apply(t){const e=this._parse(t);return Ph(t._query,e),new Je(t.firestore,t.converter,Pi(t._query,e))}_parse(t){const e=Ao(t.firestore);return(function(o,a,u,h,d,f,g){let w;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){cu(g,f);const v=[];for(const V of g)v.push(au(h,o,V));w={arrayValue:{values:v}}}else w=au(h,o,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||cu(g,f),w=Ly(u,a,g,f==="in"||f==="not-in");return pt.create(d,f,w)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Po extends So{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Po(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:Kt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Ph(a,h),a=Pi(a,h)})(t._query,e),new Je(t.firestore,t.converter,Pi(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Vo extends Ch{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Vo(t,e)}_apply(t){const e=(function(s,o,a){if(s.startAt!==null)throw new O(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ir(o,a)})(t._query,this._field,this._direction);return new Je(t.firestore,t.converter,(function(s,o){const a=s.explicitOrderBy.concat([o]);return new In(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function qy(n,t="asc"){const e=t,r=bo("orderBy",n);return Vo._create(r,e)}function au(n,t,e){if(typeof(e=Bt(e))=="string"){if(e==="")throw new O(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pl(t)&&e.indexOf("/")!==-1)throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(st.fromString(e));if(!U.isDocumentKey(r))throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ac(n,new U(r))}if(e instanceof gt)return Ac(n,e._key);throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ps(e)}.`)}function cu(n,t){if(!Array.isArray(n)||n.length===0)throw new O(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ph(n,t){const e=(function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new O(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class $y{convertValue(t,e="none"){switch(be(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ht(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw j(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Pe(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){const e=t.fields?.[es].arrayValue?.values?.map((r=>ht(r.doubleValue)));return new se(e)}convertGeoPoint(t){return new re(ht(t.latitude),ht(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=_s(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(nr(t));default:return null}}convertTimestamp(t){const e=ve(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=st.fromString(t);et(Jl(r),9688,{name:t});const s=new rr(r.get(1),r.get(3)),o=new U(r.popFirst(5));return s.isEqual(e)||ae(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Gn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qe extends Sh{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(bo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=qe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}qe._jsonSchemaVersion="firestore/documentSnapshot/1.0",qe._jsonSchema={type:mt("string",qe._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class Wr extends qe{data(t={}){return super.data(t)}}class cn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Gn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Wr(this._firestore,this._userDataWriter,r.key,r,new Gn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const h=new Wr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Gn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const h=new Wr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Gn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:Hy(u.type),doc:h,oldIndex:d,newIndex:f}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=cn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Qi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Hy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}cn._jsonSchemaVersion="firestore/querySnapshot/1.0",cn._jsonSchema={type:mt("string",cn._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class Vh extends $y{constructor(t){super(),this.firestore=t}convertBytes(t){return new zt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gt(this.firestore,null,e)}}function Gy(n,t,e,...r){n=we(n,gt);const s=we(n.firestore,_n),o=Ao(s);let a;return a=typeof(t=Bt(t))=="string"||t instanceof Ss?My(o,"updateDoc",n._key,t,e,r):xy(o,"updateDoc",n._key,t),Do(s,[a.toMutation(n._key,Gt.exists(!0))])}function Ky(n){return Do(we(n.firestore,_n),[new ro(n._key,Gt.none())])}function Wy(n,t){const e=we(n.firestore,_n),r=Bi(n),s=zy(n.converter,t);return Do(e,[Oy(Ao(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Gt.exists(!1))]).then((()=>r))}function Qy(n,...t){n=Bt(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||ou(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(ou(t[r])){const h=t[r];t[r]=h.next?.bind(h),t[r+1]=h.error?.bind(h),t[r+2]=h.complete?.bind(h)}let o,a,u;if(n instanceof gt)a=we(n.firestore,_n),u=eo(n._key.path),o={next:h=>{t[r]&&t[r](Xy(a,n,h))},error:t[r+1],complete:t[r+2]};else{const h=we(n,Je);a=we(h.firestore,_n),u=h._query;const d=new Vh(a);o={next:f=>{t[r]&&t[r](new cn(a,d,h,f))},error:t[r+1],complete:t[r+2]},By(n._query)}return(function(d,f,g,w){const P=new Iy(w),v=new sy(f,P,g);return d.asyncQueue.enqueueAndForget((async()=>ty(await Zc(d),v))),()=>{P.Nu(),d.asyncQueue.enqueueAndForget((async()=>ey(await Zc(d),v)))}})(wh(a),u,s,o)}function Do(n,t){return(function(r,s){const o=new je;return r.asyncQueue.enqueueAndForget((async()=>py(await by(r),s,o))),o.promise})(wh(n),t)}function Xy(n,t,e){const r=e.docs.get(t._key),s=new Vh(n);return new qe(n,s,t._key,r,new Gn(e.hasPendingWrites,e.fromCache),t.converter)}function uu(){return new Io("serverTimestamp")}(function(t,e=!0){(function(s){Tn=s})(Yu),Zn(new ln("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new _n(new Dm(r.getProvider("auth-internal")),new Om(a,r.getProvider("app-check-internal")),(function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rr(d.options.projectId,f)})(a,s),a);return o={useFetchStreams:e,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),Ee(uc,lc,t),Ee(uc,lc,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="firebasestorage.googleapis.com",Nh="storageBucket",Jy=120*1e3,Yy=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends We{constructor(t,e,r=0){super(hi(t),`Firebase Storage: ${e} (${hi(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return hi(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ut;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ut||(ut={}));function hi(n){return"storage/"+n}function No(){const n="An unknown error occurred, please check the error payload for server response.";return new lt(ut.UNKNOWN,n)}function Zy(n){return new lt(ut.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function tE(n){return new lt(ut.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new lt(ut.UNAUTHENTICATED,n)}function nE(){return new lt(ut.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rE(n){return new lt(ut.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function sE(){return new lt(ut.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iE(){return new lt(ut.CANCELED,"User canceled the upload/download.")}function oE(n){return new lt(ut.INVALID_URL,"Invalid URL '"+n+"'.")}function aE(n){return new lt(ut.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function cE(){return new lt(ut.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Nh+"' property when initializing the app?")}function uE(){return new lt(ut.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function lE(){return new lt(ut.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function hE(n){return new lt(ut.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qi(n){return new lt(ut.INVALID_ARGUMENT,n)}function kh(){return new lt(ut.APP_DELETED,"The Firebase app was deleted.")}function dE(n){return new lt(ut.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Yn(n,t){return new lt(ut.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function qn(n){throw new lt(ut.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=$t.makeFromUrl(t,e)}catch{return new $t(t,"")}if(r.path==="")return r;throw aE(t)}static makeFromUrl(t,e){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+s+a,"i"),h={bucket:1,path:3};function d(B){B.path_=decodeURIComponent(B.path)}const f="v[A-Za-z0-9_]+",g=e.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",P=new RegExp(`^https?://${g}/${f}/b/${s}/o${w}`,"i"),v={bucket:1,path:3},V=e===Dh?"(?:storage.googleapis.com|storage.cloud.google.com)":e,b="([^?#]*)",x=new RegExp(`^https?://${V}/${s}/${b}`,"i"),L=[{regex:u,indices:h,postModify:o},{regex:P,indices:v,postModify:d},{regex:x,indices:{bucket:1,path:2},postModify:d}];for(let B=0;B<L.length;B++){const J=L[B],tt=J.regex.exec(t);if(tt){const E=tt[J.indices.bucket];let _=tt[J.indices.path];_||(_=""),r=new $t(E,_),J.postModify(r);break}}if(r==null)throw oE(t);return r}}class fE{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n,t,e){let r=1,s=null,o=null,a=!1,u=0;function h(){return u===2}let d=!1;function f(...b){d||(d=!0,t.apply(null,b))}function g(b){s=setTimeout(()=>{s=null,n(P,h())},b)}function w(){o&&clearTimeout(o)}function P(b,...x){if(d){w();return}if(b){w(),f.call(null,b,...x);return}if(h()||a){w(),f.call(null,b,...x);return}r<64&&(r*=2);let L;u===1?(u=2,L=0):L=(r+Math.random())*1e3,g(L)}let v=!1;function V(b){v||(v=!0,w(),!d&&(s!==null?(b||(u=2),clearTimeout(s),g(0)):b||(u=1)))}return g(0),o=setTimeout(()=>{a=!0,V(!0)},e),V}function mE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(n){return n!==void 0}function _E(n){return typeof n=="object"&&!Array.isArray(n)}function ko(n){return typeof n=="string"||n instanceof String}function lu(n){return Oo()&&n instanceof Blob}function Oo(){return typeof Blob<"u"}function hu(n,t,e,r){if(r<t)throw qi(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw qi(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function Oh(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const s=t(r)+"="+t(n[r]);e=e+s+"&"}return e=e.slice(0,-1),e}var $e;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})($e||($e={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(t,e,r,s,o,a,u,h,d,f,g,w=!0,P=!1){this.url_=t,this.method_=e,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=g,this.retry=w,this.isUsingEmulator=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,V)=>{this.resolve_=v,this.reject_=V,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new Fr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=u=>{const h=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const u=o.getErrorCode()===$e.NO_ERROR,h=o.getStatus();if(!u||yE(h,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===$e.ABORT;r(!1,new Fr(!1,null,f));return}const d=this.successCodes_.indexOf(h)!==-1;r(!0,new Fr(d,o))})},e=(r,s)=>{const o=this.resolve_,a=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const h=this.callback_(u,u.getResponse());gE(h)?o(h):o()}catch(h){a(h)}else if(u!==null){const h=No();h.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,h)):a(h)}else if(s.canceled){const h=this.appDelete_?kh():iE();a(h)}else{const h=sE();a(h)}};this.canceled_?e(!1,new Fr(!1,null,!0)):this.backoffId_=pE(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&mE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fr{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function TE(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function wE(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function AE(n,t){t&&(n["X-Firebase-GMPID"]=t)}function IE(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function vE(n,t,e,r,s,o,a=!0,u=!1){const h=Oh(n.urlParams),d=n.url+h,f=Object.assign({},n.headers);return AE(f,t),TE(f,e),wE(f,o),IE(f,r),new EE(d,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bE(...n){const t=RE();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(Oo())return new Blob(n);throw new lt(ut.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function SE(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(n){if(typeof atob>"u")throw hE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class di{constructor(t,e){this.data=t,this.contentType=e||null}}function PE(n,t){switch(n){case te.RAW:return new di(xh(t));case te.BASE64:case te.BASE64URL:return new di(Mh(n,t));case te.DATA_URL:return new di(DE(t),NE(t))}throw No()}function xh(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=r,a=n.charCodeAt(++e);r=65536|(o&1023)<<10|a&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function VE(n){let t;try{t=decodeURIComponent(n)}catch{throw Yn(te.DATA_URL,"Malformed data URL.")}return xh(t)}function Mh(n,t){switch(n){case te.BASE64:{const s=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(s||o)throw Yn(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case te.BASE64URL:{const s=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(s||o)throw Yn(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=CE(t)}catch(s){throw s.message.includes("polyfill")?s:Yn(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}class Lh{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Yn(te.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=kE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function DE(n){const t=new Lh(n);return t.base64?Mh(te.BASE64,t.rest):VE(t.rest)}function NE(n){return new Lh(n).contentType}function kE(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){let r=0,s="";lu(t)?(this.data_=t,r=t.size,s=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,e){if(lu(this.data_)){const r=this.data_,s=SE(r,t,e);return s===null?null:new me(s)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new me(r,!0)}}static getBlob(...t){if(Oo()){const e=t.map(r=>r instanceof me?r.data_:r);return new me(bE.apply(null,e))}else{const e=t.map(a=>ko(a)?PE(te.RAW,a).data:a.data_);let r=0;e.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return e.forEach(a=>{for(let u=0;u<a.length;u++)s[o++]=a[u]}),new me(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(n){let t;try{t=JSON.parse(n)}catch{return null}return _E(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function xE(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function Uh(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n,t){return t}class Ot{constructor(t,e,r,s){this.server=t,this.local=e||t,this.writable=!!r,this.xform=s||ME}}let Ur=null;function LE(n){return!ko(n)||n.length<2?n:Uh(n)}function Bh(){if(Ur)return Ur;const n=[];n.push(new Ot("bucket")),n.push(new Ot("generation")),n.push(new Ot("metageneration")),n.push(new Ot("name","fullPath",!0));function t(o,a){return LE(a)}const e=new Ot("name");e.xform=t,n.push(e);function r(o,a){return a!==void 0?Number(a):a}const s=new Ot("size");return s.xform=r,n.push(s),n.push(new Ot("timeCreated")),n.push(new Ot("updated")),n.push(new Ot("md5Hash",null,!0)),n.push(new Ot("cacheControl",null,!0)),n.push(new Ot("contentDisposition",null,!0)),n.push(new Ot("contentEncoding",null,!0)),n.push(new Ot("contentLanguage",null,!0)),n.push(new Ot("contentType",null,!0)),n.push(new Ot("metadata","customMetadata",!0)),Ur=n,Ur}function FE(n,t){function e(){const r=n.bucket,s=n.fullPath,o=new $t(r,s);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function UE(n,t,e){const r={};r.type="file";const s=e.length;for(let o=0;o<s;o++){const a=e[o];r[a.local]=a.xform(r,t[a.server])}return FE(r,n),r}function jh(n,t,e){const r=Fh(t);return r===null?null:UE(n,r,e)}function BE(n,t,e,r){const s=Fh(t);if(s===null||!ko(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(d=>{const f=n.bucket,g=n.fullPath,w="/b/"+a(f)+"/o/"+a(g),P=xo(w,e,r),v=Oh({alt:"media",token:d});return P+v})[0]}function jE(n,t){const e={},r=t.length;for(let s=0;s<r;s++){const o=t[s];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}class qh{constructor(t,e,r,s){this.url=t,this.method=e,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n){if(!n)throw No()}function qE(n,t){function e(r,s){const o=jh(n,s,t);return $h(o!==null),o}return e}function $E(n,t){function e(r,s){const o=jh(n,s,t);return $h(o!==null),BE(o,s,n.host,n._protocol)}return e}function zh(n){function t(e,r){let s;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?s=nE():s=eE():e.getStatus()===402?s=tE(n.bucket):e.getStatus()===403?s=rE(n.path):s=r,s.status=e.getStatus(),s.serverResponse=r.serverResponse,s}return t}function zE(n){const t=zh(n);function e(r,s){let o=t(r,s);return r.getStatus()===404&&(o=Zy(n.path)),o.serverResponse=s.serverResponse,o}return e}function HE(n,t,e){const r=t.fullServerUrl(),s=xo(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,u=new qh(s,o,$E(n,e),a);return u.errorHandler=zE(t),u}function GE(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function KE(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=GE(null,t)),r}function WE(n,t,e,r,s){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let L="";for(let B=0;B<2;B++)L=L+Math.random().toString().slice(2);return L}const h=u();a["Content-Type"]="multipart/related; boundary="+h;const d=KE(t,r,s),f=jE(d,e),g="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+h+`\r
Content-Type: `+d.contentType+`\r
\r
`,w=`\r
--`+h+"--",P=me.getBlob(g,r,w);if(P===null)throw uE();const v={name:d.fullPath},V=xo(o,n.host,n._protocol),b="POST",x=n.maxUploadRetryTime,F=new qh(V,b,qE(n,e),x);return F.urlParams=v,F.headers=a,F.body=P.uploadData(),F.errorHandler=zh(t),F}class QE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$e.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$e.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$e.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,s,o){if(this.sent_)throw qn("cannot .send() more than once");if(fr(t)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(e,t,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class XE extends QE{initXhr(){this.xhr_.responseType="text"}}function Hh(){return new XE}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e){this._service=t,e instanceof $t?this._location=e:this._location=$t.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ke(t,e)}get root(){const t=new $t(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Uh(this._location.path)}get storage(){return this._service}get parent(){const t=OE(this._location.path);if(t===null)return null;const e=new $t(this._location.bucket,t);return new Ke(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw dE(t)}}function JE(n,t,e){n._throwIfRoot("uploadBytes");const r=WE(n.storage,n._location,Bh(),new me(t,!0),e);return n.storage.makeRequestWithTokens(r,Hh).then(s=>({metadata:s,ref:n}))}function YE(n){n._throwIfRoot("getDownloadURL");const t=HE(n.storage,n._location,Bh());return n.storage.makeRequestWithTokens(t,Hh).then(e=>{if(e===null)throw lE();return e})}function ZE(n,t){const e=xE(n._location.path,t),r=new $t(n._location.bucket,e);return new Ke(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(n){return/^[A-Za-z]+:\/\//.test(n)}function eT(n,t){return new Ke(n,t)}function Gh(n,t){if(n instanceof Mo){const e=n;if(e._bucket==null)throw cE();const r=new Ke(e,e._bucket);return t!=null?Gh(r,t):r}else return t!==void 0?ZE(n,t):n}function nT(n,t){if(t&&tT(t)){if(n instanceof Mo)return eT(n,t);throw qi("To use ref(service, url), the first argument must be a Storage instance.")}else return Gh(n,t)}function du(n,t){const e=t?.[Nh];return e==null?null:$t.makeFromBucketSpec(e,n)}function rT(n,t,e,r={}){n.host=`${t}:${e}`;const s=fr(t);s&&($u(`https://${n.host}/b`),Hu("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:zu(o,n.app.options.projectId))}class Mo{constructor(t,e,r,s,o,a=!1){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=Dh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Jy,this._maxUploadRetryTime=Yy,this._requests=new Set,s!=null?this._bucket=$t.makeFromBucketSpec(s,this._host):this._bucket=du(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,t):this._bucket=du(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){hu("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){hu("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(Ju(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ke(this,t)}_makeRequest(t,e,r,s,o=!0){if(this._deleted)return new fE(kh());{const a=vE(t,this._appId,r,s,e,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,s).getPromise()}}const fu="@firebase/storage",pu="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="storage";function sT(n,t,e){return n=Bt(n),JE(n,t,e)}function iT(n){return n=Bt(n),YE(n)}function oT(n,t){return n=Bt(n),nT(n,t)}function aT(n=tl(),t){n=Bt(n);const r=Xu(n,Kh).getImmediate({identifier:t}),s=ju("storage");return s&&cT(r,...s),r}function cT(n,t,e,r={}){rT(n,t,e,r)}function uT(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Mo(e,r,s,t,Yu)}function lT(){Zn(new ln(Kh,uT,"PUBLIC").setMultipleInstances(!0)),Ee(fu,pu,""),Ee(fu,pu,"esm2020")}lT();function hT(){return{apiKey:"AIzaSyBPDYniKMdsGrESHpBz8OQvE3Jr2dfJDfM",authDomain:"alsaleem-call-center.firebaseapp.com",projectId:"alsaleem-call-center",storageBucket:"alsaleem-call-center.firebasestorage.app",messagingSenderId:"5278467167",appId:"1:5278467167:web:90fced71223e2a5ee6c7ea"}}function dT(n){return n&&n.apiKey&&n.projectId&&n.storageBucket&&n.appId}async function fT(n,t,e){const r=`conversations/${t}/${Date.now()}-${e.name}`,s=oT(n,r);return await sT(s,e),await iT(s)}async function pT(n){const t=new FormData;t.append("file",n);const e=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content"),r=await fetch("/api/upload",{method:"POST",headers:{"X-CSRF-TOKEN":e||""},body:t});if(!r.ok){const o=await r.json().catch(()=>({message:"Upload failed"}));throw new Error(o.message||"Failed to upload file")}return(await r.json()).url}function mT(n){if(!n)return null;const t=n.type;return t.startsWith("audio/")?"voice":t.startsWith("image/")?"image":t.startsWith("video/")?"video":"document"}function gT(n){if(!n)return null;const t=n.toLowerCase();return t.match(/\.(mp3|m4a|aac|wav|ogg|webm)(\?|$)/)?"voice":t.match(/\.(mp4|mov|webm)(\?|$)/)?"video":t.match(/\.(png|jpg|jpeg|gif|webp)(\?|$)/)?"image":"document"}function _T(n){const t=(n||"").toLowerCase();return t.includes(".mp3")?"audio/mpeg":t.includes(".m4a")||t.includes(".aac")?"audio/mp4":t.includes(".wav")?"audio/wav":t.includes(".ogg")?"audio/ogg":t.includes(".webm")?"audio/webm":"audio/*"}function yT(n){const t=n.getAttribute("data-conversation"),e=n.getAttribute("data-title")||"Chat",r=hT();if(!dT(r)){n.innerHTML='<div class="border p-3 bg-yellow-50 rounded">Firebase is not configured. Set VITE_FIREBASE_* in .env.</div>';return}const s=Zu(r),o=Py(s),a=aT(s);n.innerHTML=`
      <div class="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div class="px-4 py-3 border-b bg-gray-50 font-medium">${e}</div>
        <div id="messages" class="h-[60vh] md:h-[70vh] overflow-y-auto px-4 py-3 space-y-2 bg-gradient-to-b from-white to-gray-50"></div>
        <div class="border-t p-3">
          <div id="filePreview" class="mb-2 hidden"></div>
          <div class="flex items-center gap-2">
            <input id="textInput" class="border rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-[#FE0003]" placeholder="Type a message" />
            <button id="recordBtn" type="button" class="px-3 py-2 border rounded-lg hover:bg-gray-50" title="Record Voice Message">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
            <span id="recTimer" class="text-sm text-gray-500 hidden">00:00</span>
            <label class="px-3 py-2 border rounded-lg cursor-pointer hover:bg-gray-50" title="Attach File">
              <input id="fileInput" type="file" class="hidden" />
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
              </svg>
            </label>
            <button id="sendBtn" class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded-lg">Send</button>
          </div>
        </div>
      </div>
    `;const u=n.querySelector("#messages"),h=n.querySelector("#textInput"),d=n.querySelector("#fileInput"),f=n.querySelector("#filePreview"),g=n.querySelector("#recordBtn"),w=n.querySelector("#recTimer"),P=n.querySelector("#sendBtn"),v=P?P.textContent:"Send";function V(m){P&&(P.disabled=!!m,P.textContent=m?"Sending…":v,m?P.classList.add("opacity-60","cursor-not-allowed"):P.classList.remove("opacity-60","cursor-not-allowed"))}let b=null,x=null,F=[],L=null,B=null;function J(){f&&(f.innerHTML="",f.classList.add("hidden"))}function tt(m){if(!m||!f)return J();const q=URL.createObjectURL(m);let $="";const K="inline-flex items-center gap-2 px-3 py-2 border rounded bg-gray-50";m.type.startsWith("image/")?$=`<div class="${K}"><img src="${q}" class="h-16 w-auto rounded" /><div class="text-sm">${m.name}</div><button type="button" id="removeFile" class="ml-2 text-red-600 text-sm">Remove</button></div>`:m.type.startsWith("video/")?$=`<div class="${K}"><video src="${q}" class="h-16 w-24" muted loop></video><div class="text-sm">${m.name}</div><button type="button" id="removeFile" class="ml-2 text-red-600 text-sm">Remove</button></div>`:m.type.startsWith("audio/")?$=`<div class="${K}"><audio src="${q}" controls class="h-8"></audio><div class="text-sm">${m.name}</div><button type="button" id="removeFile" class="ml-2 text-red-600 text-sm">Remove</button></div>`:$=`<div class="${K}"><span class="text-sm">${m.name}</span><button type="button" id="removeFile" class="ml-2 text-red-600 text-sm">Remove</button></div>`,f.innerHTML=$,f.classList.remove("hidden");const Tt=f.querySelector("#removeFile");Tt&&Tt.addEventListener("click",()=>{URL.revokeObjectURL(q),d.value="",b=null,J()})}d.addEventListener("change",()=>{b=d.files&&d.files[0]||null,tt(b)});function E(){if(!L||!w)return;const m=Math.floor((Date.now()-L)/1e3),q=String(Math.floor(m/60)).padStart(2,"0"),$=String(m%60).padStart(2,"0");w.textContent=`${q}:${$}`}async function _(){try{const m=await navigator.mediaDevices.getUserMedia({audio:!0});F=[];const q=["audio/mp4;codecs=mp4a","audio/mp4"];let $="";for(const K of q)if(window.MediaRecorder&&MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(K)){$=K;break}if(!$){m.getTracks().forEach(K=>K.stop()),alert("M4A audio recording is not supported in this browser. Please use a modern browser that supports MP4/AAC recording.");return}x=new MediaRecorder(m,{mimeType:$,audioBitsPerSecond:128e3}),x.ondataavailable=K=>{K.data&&K.data.size>0&&F.push(K.data)},x.onstop=async()=>{await new Promise(Tt=>setTimeout(Tt,100));const K=new Blob(F,{type:"audio/mp4"});b=new File([K],`voice-${Date.now()}.m4a`,{type:"audio/mp4",lastModified:Date.now()}),tt(b),m.getTracks().forEach(Tt=>Tt.stop())},x.start(),L=Date.now(),w.classList.remove("hidden"),E(),B=setInterval(E,500),g.innerHTML=`
              <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path>
              </svg>`}catch{alert("Microphone permission denied or not available.")}}function y(){x&&x.state!=="inactive"&&x.stop(),B&&clearInterval(B),B=null,w.classList.add("hidden"),g.innerHTML=`
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
          </svg>`}g&&g.addEventListener("click",()=>{!x||x.state==="inactive"?_():y()});const A=Cy(o,"conversations",String(t),"messages"),T=()=>{u&&(u.scrollTop=u.scrollHeight)},I=jy(A,qy("createdAt"));Qy(I,m=>{u.innerHTML="",m.forEach(q=>{const $=q.data(),K=$.senderType==="agent",Tt=document.createElement("div");Tt.className=`flex ${K?"justify-end":"justify-start"}`;const rt=document.createElement("div");rt.className=`max-w-[75%] rounded-2xl px-4 py-2 shadow ${K?"bg-blue-600 text-white rounded-br-md":"bg-gray-100 text-gray-900 rounded-bl-md"}`;let It="";$.body&&(It+=`<div class="whitespace-pre-wrap">${$.body}</div>`,$.edited&&(It+='<div class="text-xs opacity-70 mt-1">(edited)</div>')),K&&(It+=`<div class="mt-2 flex gap-1 justify-end">
                    <button onclick="editMessage('${q.id}', '${$.body?.replace(/'/g,"\\'")||""}')" class="text-xs px-2 py-1 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-colors" title="Edit">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                    </button>
                    <button onclick="deleteMessage('${q.id}')" class="text-xs px-2 py-1 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-colors" title="Delete">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                </div>`);const De=$.attachment||{},_t=$.attachmentUrl||$.attachment_url||$.attachmentPath||$.attachment_path||$.url||$.fileUrl||$.file_url||De.url||De.path||null,xt=$.attachmentType||$.attachment_type||De.type||gT(_t);if(_t)if(xt==="image")It+=`<img src="${_t}" class="mt-2 rounded-lg max-w-full" />`;else if(xt==="video")It+=`<video src="${_t}" controls preload="metadata" class="mt-2 rounded-lg max-w-full"></video>`;else if(xt==="voice"){const Ht=_T(_t);console.log("audio messages"),It+=`<audio controls style="height: 40px;width: 500px;" preload="metadata" class="mt-2 w-full" controls>
                    <source src="${_t}" type="${Ht}">Your browser does not support the audio element.</audio>`}else It+=`<a class="mt-2 underline block" href="${_t}" target="_blank">Attachment</a>`;else xt==="voice"&&(It+='<div class="mt-1 italic opacity-80">Voice message (no URL)</div>');rt.innerHTML=It,Tt.appendChild(rt),u.appendChild(Tt);const Qt=rt.querySelector("img,video");Qt&&(Qt.addEventListener("load",()=>setTimeout(T,10),{once:!0}),Qt.addEventListener("loadeddata",()=>setTimeout(T,10),{once:!0}))}),T(),setTimeout(T,50)}),P.addEventListener("click",async()=>{const m=h.value.trim(),q=b||d.files&&d.files[0];if(!m&&!q)return;let $=null,K=null,Tt=m;V(!0);try{if(q){const rt=mT(q);rt==="image"||rt==="voice"?($=await pT(q),K=rt):($=await fT(a,t,q),K=rt)}await Wy(A,{body:Tt||null,attachmentUrl:$,attachmentType:K,senderType:"agent",createdAt:uu()});try{await fetch(`/api/activity/conversation/${t}`,{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify({body:Tt,sender_type:"agent"})})}catch{}h.value="",d.value&&(d.value=""),b=null,J(),T()}catch(rt){console.error("Failed to send message",rt),alert("Failed to send message. Please try again.")}finally{V(!1)}}),window.editMessage=async function(m,q){const $=prompt("Edit message:",q);if($!==null&&$!==q)try{const K=Bi(o,"conversations",t,"messages",m);await Gy(K,{body:$,edited:!0,editedAt:uu()})}catch(K){console.error("Error editing message:",K),alert("Failed to edit message")}},window.deleteMessage=async function(m){if(confirm("Are you sure you want to delete this message?"))try{const q=Bi(o,"conversations",t,"messages",m);await Ky(q)}catch(q){console.error("Error deleting message:",q),alert("Failed to delete message")}}}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("chat-app");n&&yT(n)});
