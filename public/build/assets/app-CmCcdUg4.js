function au(n,t){return function(){return n.apply(t,arguments)}}const{toString:gd}=Object.prototype,{getPrototypeOf:Ui}=Object,{iterator:fs,toStringTag:cu}=Symbol,ps=(n=>t=>{const e=gd.call(t);return n[e]||(n[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),Xt=n=>(n=n.toLowerCase(),t=>ps(t)===n),ms=n=>t=>typeof t===n,{isArray:wn}=Array,fn=ms("undefined");function fr(n){return n!==null&&!fn(n)&&n.constructor!==null&&!fn(n.constructor)&&jt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const uu=Xt("ArrayBuffer");function _d(n){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(n):t=n&&n.buffer&&uu(n.buffer),t}const yd=ms("string"),jt=ms("function"),lu=ms("number"),pr=n=>n!==null&&typeof n=="object",Ed=n=>n===!0||n===!1,$r=n=>{if(ps(n)!=="object")return!1;const t=Ui(n);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(cu in n)&&!(fs in n)},Td=n=>{if(!pr(n)||fr(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},wd=Xt("Date"),Ad=Xt("File"),Id=Xt("Blob"),vd=Xt("FileList"),Rd=n=>pr(n)&&jt(n.pipe),bd=n=>{let t;return n&&(typeof FormData=="function"&&n instanceof FormData||jt(n.append)&&((t=ps(n))==="formdata"||t==="object"&&jt(n.toString)&&n.toString()==="[object FormData]"))},Sd=Xt("URLSearchParams"),[Cd,Pd,Vd,Dd]=["ReadableStream","Request","Response","Headers"].map(Xt),Nd=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mr(n,t,{allOwnKeys:e=!1}={}){if(n===null||typeof n>"u")return;let r,s;if(typeof n!="object"&&(n=[n]),wn(n))for(r=0,s=n.length;r<s;r++)t.call(null,n[r],r,n);else{if(fr(n))return;const o=e?Object.getOwnPropertyNames(n):Object.keys(n),a=o.length;let u;for(r=0;r<a;r++)u=o[r],t.call(null,n[u],u,n)}}function hu(n,t){if(fr(n))return null;t=t.toLowerCase();const e=Object.keys(n);let r=e.length,s;for(;r-- >0;)if(s=e[r],t===s.toLowerCase())return s;return null}const Be=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,du=n=>!fn(n)&&n!==Be;function hi(){const{caseless:n,skipUndefined:t}=du(this)&&this||{},e={},r=(s,o)=>{const a=n&&hu(e,o)||o;$r(e[a])&&$r(s)?e[a]=hi(e[a],s):$r(s)?e[a]=hi({},s):wn(s)?e[a]=s.slice():(!t||!fn(s))&&(e[a]=s)};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&mr(arguments[s],r);return e}const kd=(n,t,e,{allOwnKeys:r}={})=>(mr(t,(s,o)=>{e&&jt(s)?n[o]=au(s,e):n[o]=s},{allOwnKeys:r}),n),Od=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),xd=(n,t,e,r)=>{n.prototype=Object.create(t.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:t.prototype}),e&&Object.assign(n.prototype,e)},Ld=(n,t,e,r)=>{let s,o,a;const u={};if(t=t||{},n==null)return t;do{for(s=Object.getOwnPropertyNames(n),o=s.length;o-- >0;)a=s[o],(!r||r(a,n,t))&&!u[a]&&(t[a]=n[a],u[a]=!0);n=e!==!1&&Ui(n)}while(n&&(!e||e(n,t))&&n!==Object.prototype);return t},Md=(n,t,e)=>{n=String(n),(e===void 0||e>n.length)&&(e=n.length),e-=t.length;const r=n.indexOf(t,e);return r!==-1&&r===e},Fd=n=>{if(!n)return null;if(wn(n))return n;let t=n.length;if(!lu(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=n[t];return e},Ud=(n=>t=>n&&t instanceof n)(typeof Uint8Array<"u"&&Ui(Uint8Array)),Bd=(n,t)=>{const r=(n&&n[fs]).call(n);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(n,o[0],o[1])}},jd=(n,t)=>{let e;const r=[];for(;(e=n.exec(t))!==null;)r.push(e);return r},qd=Xt("HTMLFormElement"),$d=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,r,s){return r.toUpperCase()+s}),Ca=(({hasOwnProperty:n})=>(t,e)=>n.call(t,e))(Object.prototype),zd=Xt("RegExp"),fu=(n,t)=>{const e=Object.getOwnPropertyDescriptors(n),r={};mr(e,(s,o)=>{let a;(a=t(s,o,n))!==!1&&(r[o]=a||s)}),Object.defineProperties(n,r)},Hd=n=>{fu(n,(t,e)=>{if(jt(n)&&["arguments","caller","callee"].indexOf(e)!==-1)return!1;const r=n[e];if(jt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},Gd=(n,t)=>{const e={},r=s=>{s.forEach(o=>{e[o]=!0})};return wn(n)?r(n):r(String(n).split(t)),e},Wd=()=>{},Kd=(n,t)=>n!=null&&Number.isFinite(n=+n)?n:t;function Qd(n){return!!(n&&jt(n.append)&&n[cu]==="FormData"&&n[fs])}const Xd=n=>{const t=new Array(10),e=(r,s)=>{if(pr(r)){if(t.indexOf(r)>=0)return;if(fr(r))return r;if(!("toJSON"in r)){t[s]=r;const o=wn(r)?[]:{};return mr(r,(a,u)=>{const h=e(a,s+1);!fn(h)&&(o[u]=h)}),t[s]=void 0,o}}return r};return e(n,0)},Jd=Xt("AsyncFunction"),Yd=n=>n&&(pr(n)||jt(n))&&jt(n.then)&&jt(n.catch),pu=((n,t)=>n?setImmediate:t?((e,r)=>(Be.addEventListener("message",({source:s,data:o})=>{s===Be&&o===e&&r.length&&r.shift()()},!1),s=>{r.push(s),Be.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate=="function",jt(Be.postMessage)),Zd=typeof queueMicrotask<"u"?queueMicrotask.bind(Be):typeof process<"u"&&process.nextTick||pu,tf=n=>n!=null&&jt(n[fs]),S={isArray:wn,isArrayBuffer:uu,isBuffer:fr,isFormData:bd,isArrayBufferView:_d,isString:yd,isNumber:lu,isBoolean:Ed,isObject:pr,isPlainObject:$r,isEmptyObject:Td,isReadableStream:Cd,isRequest:Pd,isResponse:Vd,isHeaders:Dd,isUndefined:fn,isDate:wd,isFile:Ad,isBlob:Id,isRegExp:zd,isFunction:jt,isStream:Rd,isURLSearchParams:Sd,isTypedArray:Ud,isFileList:vd,forEach:mr,merge:hi,extend:kd,trim:Nd,stripBOM:Od,inherits:xd,toFlatObject:Ld,kindOf:ps,kindOfTest:Xt,endsWith:Md,toArray:Fd,forEachEntry:Bd,matchAll:jd,isHTMLForm:qd,hasOwnProperty:Ca,hasOwnProp:Ca,reduceDescriptors:fu,freezeMethods:Hd,toObjectSet:Gd,toCamelCase:$d,noop:Wd,toFiniteNumber:Kd,findKey:hu,global:Be,isContextDefined:du,isSpecCompliantForm:Qd,toJSONObject:Xd,isAsyncFn:Jd,isThenable:Yd,setImmediate:pu,asap:Zd,isIterable:tf};function H(n,t,e,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",t&&(this.code=t),e&&(this.config=e),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}S.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.status}}});const mu=H.prototype,gu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{gu[n]={value:n}});Object.defineProperties(H,gu);Object.defineProperty(mu,"isAxiosError",{value:!0});H.from=(n,t,e,r,s,o)=>{const a=Object.create(mu);S.toFlatObject(n,a,function(f){return f!==Error.prototype},d=>d!=="isAxiosError");const u=n&&n.message?n.message:"Error",h=t==null&&n?n.code:t;return H.call(a,u,h,e,r,s),n&&a.cause==null&&Object.defineProperty(a,"cause",{value:n,configurable:!0}),a.name=n&&n.name||"Error",o&&Object.assign(a,o),a};const ef=null;function di(n){return S.isPlainObject(n)||S.isArray(n)}function _u(n){return S.endsWith(n,"[]")?n.slice(0,-2):n}function Pa(n,t,e){return n?n.concat(t).map(function(s,o){return s=_u(s),!e&&o?"["+s+"]":s}).join(e?".":""):t}function nf(n){return S.isArray(n)&&!n.some(di)}const rf=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function gs(n,t,e){if(!S.isObject(n))throw new TypeError("target must be an object");t=t||new FormData,e=S.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(V,b){return!S.isUndefined(b[V])});const r=e.metaTokens,s=e.visitor||f,o=e.dots,a=e.indexes,h=(e.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(t);if(!S.isFunction(s))throw new TypeError("visitor must be a function");function d(R){if(R===null)return"";if(S.isDate(R))return R.toISOString();if(S.isBoolean(R))return R.toString();if(!h&&S.isBlob(R))throw new H("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(R)||S.isTypedArray(R)?h&&typeof Blob=="function"?new Blob([R]):Buffer.from(R):R}function f(R,V,b){let x=R;if(R&&!b&&typeof R=="object"){if(S.endsWith(V,"{}"))V=r?V:V.slice(0,-2),R=JSON.stringify(R);else if(S.isArray(R)&&nf(R)||(S.isFileList(R)||S.endsWith(V,"[]"))&&(x=S.toArray(R)))return V=_u(V),x.forEach(function(M,B){!(S.isUndefined(M)||M===null)&&t.append(a===!0?Pa([V],B,o):a===null?V:V+"[]",d(M))}),!1}return di(R)?!0:(t.append(Pa(b,V,o),d(R)),!1)}const m=[],A=Object.assign(rf,{defaultVisitor:f,convertValue:d,isVisitable:di});function P(R,V){if(!S.isUndefined(R)){if(m.indexOf(R)!==-1)throw Error("Circular reference detected in "+V.join("."));m.push(R),S.forEach(R,function(x,F){(!(S.isUndefined(x)||x===null)&&s.call(t,x,S.isString(F)?F.trim():F,V,A))===!0&&P(x,V?V.concat(F):[F])}),m.pop()}}if(!S.isObject(n))throw new TypeError("data must be an object");return P(n),t}function Va(n){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Bi(n,t){this._pairs=[],n&&gs(n,this,t)}const yu=Bi.prototype;yu.append=function(t,e){this._pairs.push([t,e])};yu.toString=function(t){const e=t?function(r){return t.call(this,r,Va)}:Va;return this._pairs.map(function(s){return e(s[0])+"="+e(s[1])},"").join("&")};function sf(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Eu(n,t,e){if(!t)return n;const r=e&&e.encode||sf;S.isFunction(e)&&(e={serialize:e});const s=e&&e.serialize;let o;if(s?o=s(t,e):o=S.isURLSearchParams(t)?t.toString():new Bi(t,e).toString(r),o){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class Da{constructor(){this.handlers=[]}use(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Tu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},of=typeof URLSearchParams<"u"?URLSearchParams:Bi,af=typeof FormData<"u"?FormData:null,cf=typeof Blob<"u"?Blob:null,uf={isBrowser:!0,classes:{URLSearchParams:of,FormData:af,Blob:cf},protocols:["http","https","file","blob","url","data"]},ji=typeof window<"u"&&typeof document<"u",fi=typeof navigator=="object"&&navigator||void 0,lf=ji&&(!fi||["ReactNative","NativeScript","NS"].indexOf(fi.product)<0),hf=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",df=ji&&window.location.href||"http://localhost",ff=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ji,hasStandardBrowserEnv:lf,hasStandardBrowserWebWorkerEnv:hf,navigator:fi,origin:df},Symbol.toStringTag,{value:"Module"})),Lt={...ff,...uf};function pf(n,t){return gs(n,new Lt.classes.URLSearchParams,{visitor:function(e,r,s,o){return Lt.isNode&&S.isBuffer(e)?(this.append(r,e.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function mf(n){return S.matchAll(/\w+|\[(\w*)]/g,n).map(t=>t[0]==="[]"?"":t[1]||t[0])}function gf(n){const t={},e=Object.keys(n);let r;const s=e.length;let o;for(r=0;r<s;r++)o=e[r],t[o]=n[o];return t}function wu(n){function t(e,r,s,o){let a=e[o++];if(a==="__proto__")return!0;const u=Number.isFinite(+a),h=o>=e.length;return a=!a&&S.isArray(s)?s.length:a,h?(S.hasOwnProp(s,a)?s[a]=[s[a],r]:s[a]=r,!u):((!s[a]||!S.isObject(s[a]))&&(s[a]=[]),t(e,r,s[a],o)&&S.isArray(s[a])&&(s[a]=gf(s[a])),!u)}if(S.isFormData(n)&&S.isFunction(n.entries)){const e={};return S.forEachEntry(n,(r,s)=>{t(mf(r),s,e,0)}),e}return null}function _f(n,t,e){if(S.isString(n))try{return(t||JSON.parse)(n),S.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(e||JSON.stringify)(n)}const gr={transitional:Tu,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const r=e.getContentType()||"",s=r.indexOf("application/json")>-1,o=S.isObject(t);if(o&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return s?JSON.stringify(wu(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t)||S.isReadableStream(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return pf(t,this.formSerializer).toString();if((u=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return gs(u?{"files[]":t}:t,h&&new h,this.formSerializer)}}return o||s?(e.setContentType("application/json",!1),_f(t)):t}],transformResponse:[function(t){const e=this.transitional||gr.transitional,r=e&&e.forcedJSONParsing,s=this.responseType==="json";if(S.isResponse(t)||S.isReadableStream(t))return t;if(t&&S.isString(t)&&(r&&!this.responseType||s)){const a=!(e&&e.silentJSONParsing)&&s;try{return JSON.parse(t,this.parseReviver)}catch(u){if(a)throw u.name==="SyntaxError"?H.from(u,H.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Lt.classes.FormData,Blob:Lt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],n=>{gr.headers[n]={}});const yf=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ef=n=>{const t={};let e,r,s;return n&&n.split(`
`).forEach(function(a){s=a.indexOf(":"),e=a.substring(0,s).trim().toLowerCase(),r=a.substring(s+1).trim(),!(!e||t[e]&&yf[e])&&(e==="set-cookie"?t[e]?t[e].push(r):t[e]=[r]:t[e]=t[e]?t[e]+", "+r:r)}),t},Na=Symbol("internals");function zn(n){return n&&String(n).trim().toLowerCase()}function zr(n){return n===!1||n==null?n:S.isArray(n)?n.map(zr):String(n)}function Tf(n){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=e.exec(n);)t[r[1]]=r[2];return t}const wf=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Js(n,t,e,r,s){if(S.isFunction(r))return r.call(this,t,e);if(s&&(t=e),!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function Af(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r)}function If(n,t){const e=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+e,{value:function(s,o,a){return this[r].call(this,t,s,o,a)},configurable:!0})})}let qt=class{constructor(t){t&&this.set(t)}set(t,e,r){const s=this;function o(u,h,d){const f=zn(h);if(!f)throw new Error("header name must be a non-empty string");const m=S.findKey(s,f);(!m||s[m]===void 0||d===!0||d===void 0&&s[m]!==!1)&&(s[m||h]=zr(u))}const a=(u,h)=>S.forEach(u,(d,f)=>o(d,f,h));if(S.isPlainObject(t)||t instanceof this.constructor)a(t,e);else if(S.isString(t)&&(t=t.trim())&&!wf(t))a(Ef(t),e);else if(S.isObject(t)&&S.isIterable(t)){let u={},h,d;for(const f of t){if(!S.isArray(f))throw TypeError("Object iterator must return a key-value pair");u[d=f[0]]=(h=u[d])?S.isArray(h)?[...h,f[1]]:[h,f[1]]:f[1]}a(u,e)}else t!=null&&o(e,t,r);return this}get(t,e){if(t=zn(t),t){const r=S.findKey(this,t);if(r){const s=this[r];if(!e)return s;if(e===!0)return Tf(s);if(S.isFunction(e))return e.call(this,s,r);if(S.isRegExp(e))return e.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=zn(t),t){const r=S.findKey(this,t);return!!(r&&this[r]!==void 0&&(!e||Js(this,this[r],r,e)))}return!1}delete(t,e){const r=this;let s=!1;function o(a){if(a=zn(a),a){const u=S.findKey(r,a);u&&(!e||Js(r,r[u],u,e))&&(delete r[u],s=!0)}}return S.isArray(t)?t.forEach(o):o(t),s}clear(t){const e=Object.keys(this);let r=e.length,s=!1;for(;r--;){const o=e[r];(!t||Js(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const e=this,r={};return S.forEach(this,(s,o)=>{const a=S.findKey(r,o);if(a){e[a]=zr(s),delete e[o];return}const u=t?Af(o):String(o).trim();u!==o&&delete e[o],e[u]=zr(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return S.forEach(this,(r,s)=>{r!=null&&r!==!1&&(e[s]=t&&S.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const r=new this(t);return e.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Na]=this[Na]={accessors:{}}).accessors,s=this.prototype;function o(a){const u=zn(a);r[u]||(If(s,a),r[u]=!0)}return S.isArray(t)?t.forEach(o):o(t),this}};qt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(qt.prototype,({value:n},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(r){this[e]=r}}});S.freezeMethods(qt);function Ys(n,t){const e=this||gr,r=t||e,s=qt.from(r.headers);let o=r.data;return S.forEach(n,function(u){o=u.call(e,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Au(n){return!!(n&&n.__CANCEL__)}function An(n,t,e){H.call(this,n??"canceled",H.ERR_CANCELED,t,e),this.name="CanceledError"}S.inherits(An,H,{__CANCEL__:!0});function Iu(n,t,e){const r=e.config.validateStatus;!e.status||!r||r(e.status)?n(e):t(new H("Request failed with status code "+e.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(e.status/100)-4],e.config,e.request,e))}function vf(n){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return t&&t[1]||""}function Rf(n,t){n=n||10;const e=new Array(n),r=new Array(n);let s=0,o=0,a;return t=t!==void 0?t:1e3,function(h){const d=Date.now(),f=r[o];a||(a=d),e[s]=h,r[s]=d;let m=o,A=0;for(;m!==s;)A+=e[m++],m=m%n;if(s=(s+1)%n,s===o&&(o=(o+1)%n),d-a<t)return;const P=f&&d-f;return P?Math.round(A*1e3/P):void 0}}function bf(n,t){let e=0,r=1e3/t,s,o;const a=(d,f=Date.now())=>{e=f,s=null,o&&(clearTimeout(o),o=null),n(...d)};return[(...d)=>{const f=Date.now(),m=f-e;m>=r?a(d,f):(s=d,o||(o=setTimeout(()=>{o=null,a(s)},r-m)))},()=>s&&a(s)]}const Yr=(n,t,e=3)=>{let r=0;const s=Rf(50,250);return bf(o=>{const a=o.loaded,u=o.lengthComputable?o.total:void 0,h=a-r,d=s(h),f=a<=u;r=a;const m={loaded:a,total:u,progress:u?a/u:void 0,bytes:h,rate:d||void 0,estimated:d&&u&&f?(u-a)/d:void 0,event:o,lengthComputable:u!=null,[t?"download":"upload"]:!0};n(m)},e)},ka=(n,t)=>{const e=n!=null;return[r=>t[0]({lengthComputable:e,total:n,loaded:r}),t[1]]},Oa=n=>(...t)=>S.asap(()=>n(...t)),Sf=Lt.hasStandardBrowserEnv?((n,t)=>e=>(e=new URL(e,Lt.origin),n.protocol===e.protocol&&n.host===e.host&&(t||n.port===e.port)))(new URL(Lt.origin),Lt.navigator&&/(msie|trident)/i.test(Lt.navigator.userAgent)):()=>!0,Cf=Lt.hasStandardBrowserEnv?{write(n,t,e,r,s,o){const a=[n+"="+encodeURIComponent(t)];S.isNumber(e)&&a.push("expires="+new Date(e).toGMTString()),S.isString(r)&&a.push("path="+r),S.isString(s)&&a.push("domain="+s),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(n){const t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Pf(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Vf(n,t){return t?n.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):n}function vu(n,t,e){let r=!Pf(t);return n&&(r||e==!1)?Vf(n,t):t}const xa=n=>n instanceof qt?{...n}:n;function Ge(n,t){t=t||{};const e={};function r(d,f,m,A){return S.isPlainObject(d)&&S.isPlainObject(f)?S.merge.call({caseless:A},d,f):S.isPlainObject(f)?S.merge({},f):S.isArray(f)?f.slice():f}function s(d,f,m,A){if(S.isUndefined(f)){if(!S.isUndefined(d))return r(void 0,d,m,A)}else return r(d,f,m,A)}function o(d,f){if(!S.isUndefined(f))return r(void 0,f)}function a(d,f){if(S.isUndefined(f)){if(!S.isUndefined(d))return r(void 0,d)}else return r(void 0,f)}function u(d,f,m){if(m in t)return r(d,f);if(m in n)return r(void 0,d)}const h={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u,headers:(d,f,m)=>s(xa(d),xa(f),m,!0)};return S.forEach(Object.keys({...n,...t}),function(f){const m=h[f]||s,A=m(n[f],t[f],f);S.isUndefined(A)&&m!==u||(e[f]=A)}),e}const Ru=n=>{const t=Ge({},n);let{data:e,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:a,auth:u}=t;if(t.headers=a=qt.from(a),t.url=Eu(vu(t.baseURL,t.url,t.allowAbsoluteUrls),n.params,n.paramsSerializer),u&&a.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),S.isFormData(e)){if(Lt.hasStandardBrowserEnv||Lt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(S.isFunction(e.getHeaders)){const h=e.getHeaders(),d=["content-type","content-length"];Object.entries(h).forEach(([f,m])=>{d.includes(f.toLowerCase())&&a.set(f,m)})}}if(Lt.hasStandardBrowserEnv&&(r&&S.isFunction(r)&&(r=r(t)),r||r!==!1&&Sf(t.url))){const h=s&&o&&Cf.read(o);h&&a.set(s,h)}return t},Df=typeof XMLHttpRequest<"u",Nf=Df&&function(n){return new Promise(function(e,r){const s=Ru(n);let o=s.data;const a=qt.from(s.headers).normalize();let{responseType:u,onUploadProgress:h,onDownloadProgress:d}=s,f,m,A,P,R;function V(){P&&P(),R&&R(),s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let b=new XMLHttpRequest;b.open(s.method.toUpperCase(),s.url,!0),b.timeout=s.timeout;function x(){if(!b)return;const M=qt.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),J={data:!u||u==="text"||u==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:M,config:n,request:b};Iu(function(E){e(E),V()},function(E){r(E),V()},J),b=null}"onloadend"in b?b.onloadend=x:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(x)},b.onabort=function(){b&&(r(new H("Request aborted",H.ECONNABORTED,n,b)),b=null)},b.onerror=function(B){const J=B&&B.message?B.message:"Network Error",et=new H(J,H.ERR_NETWORK,n,b);et.event=B||null,r(et),b=null},b.ontimeout=function(){let B=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const J=s.transitional||Tu;s.timeoutErrorMessage&&(B=s.timeoutErrorMessage),r(new H(B,J.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,n,b)),b=null},o===void 0&&a.setContentType(null),"setRequestHeader"in b&&S.forEach(a.toJSON(),function(B,J){b.setRequestHeader(J,B)}),S.isUndefined(s.withCredentials)||(b.withCredentials=!!s.withCredentials),u&&u!=="json"&&(b.responseType=s.responseType),d&&([A,R]=Yr(d,!0),b.addEventListener("progress",A)),h&&b.upload&&([m,P]=Yr(h),b.upload.addEventListener("progress",m),b.upload.addEventListener("loadend",P)),(s.cancelToken||s.signal)&&(f=M=>{b&&(r(!M||M.type?new An(null,n,b):M),b.abort(),b=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const F=vf(s.url);if(F&&Lt.protocols.indexOf(F)===-1){r(new H("Unsupported protocol "+F+":",H.ERR_BAD_REQUEST,n));return}b.send(o||null)})},kf=(n,t)=>{const{length:e}=n=n?n.filter(Boolean):[];if(t||e){let r=new AbortController,s;const o=function(d){if(!s){s=!0,u();const f=d instanceof Error?d:this.reason;r.abort(f instanceof H?f:new An(f instanceof Error?f.message:f))}};let a=t&&setTimeout(()=>{a=null,o(new H(`timeout ${t} of ms exceeded`,H.ETIMEDOUT))},t);const u=()=>{n&&(a&&clearTimeout(a),a=null,n.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),n=null)};n.forEach(d=>d.addEventListener("abort",o));const{signal:h}=r;return h.unsubscribe=()=>S.asap(u),h}},Of=function*(n,t){let e=n.byteLength;if(e<t){yield n;return}let r=0,s;for(;r<e;)s=r+t,yield n.slice(r,s),r=s},xf=async function*(n,t){for await(const e of Lf(n))yield*Of(e,t)},Lf=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const t=n.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},La=(n,t,e,r)=>{const s=xf(n,t);let o=0,a,u=h=>{a||(a=!0,r&&r(h))};return new ReadableStream({async pull(h){try{const{done:d,value:f}=await s.next();if(d){u(),h.close();return}let m=f.byteLength;if(e){let A=o+=m;e(A)}h.enqueue(new Uint8Array(f))}catch(d){throw u(d),d}},cancel(h){return u(h),s.return()}},{highWaterMark:2})},Ma=64*1024,{isFunction:xr}=S,Mf=(({Request:n,Response:t})=>({Request:n,Response:t}))(S.global),{ReadableStream:Fa,TextEncoder:Ua}=S.global,Ba=(n,...t)=>{try{return!!n(...t)}catch{return!1}},Ff=n=>{n=S.merge.call({skipUndefined:!0},Mf,n);const{fetch:t,Request:e,Response:r}=n,s=t?xr(t):typeof fetch=="function",o=xr(e),a=xr(r);if(!s)return!1;const u=s&&xr(Fa),h=s&&(typeof Ua=="function"?(R=>V=>R.encode(V))(new Ua):async R=>new Uint8Array(await new e(R).arrayBuffer())),d=o&&u&&Ba(()=>{let R=!1;const V=new e(Lt.origin,{body:new Fa,method:"POST",get duplex(){return R=!0,"half"}}).headers.has("Content-Type");return R&&!V}),f=a&&u&&Ba(()=>S.isReadableStream(new r("").body)),m={stream:f&&(R=>R.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(R=>{!m[R]&&(m[R]=(V,b)=>{let x=V&&V[R];if(x)return x.call(V);throw new H(`Response type '${R}' is not supported`,H.ERR_NOT_SUPPORT,b)})});const A=async R=>{if(R==null)return 0;if(S.isBlob(R))return R.size;if(S.isSpecCompliantForm(R))return(await new e(Lt.origin,{method:"POST",body:R}).arrayBuffer()).byteLength;if(S.isArrayBufferView(R)||S.isArrayBuffer(R))return R.byteLength;if(S.isURLSearchParams(R)&&(R=R+""),S.isString(R))return(await h(R)).byteLength},P=async(R,V)=>{const b=S.toFiniteNumber(R.getContentLength());return b??A(V)};return async R=>{let{url:V,method:b,data:x,signal:F,cancelToken:M,timeout:B,onDownloadProgress:J,onUploadProgress:et,responseType:E,headers:g,withCredentials:y="same-origin",fetchOptions:w}=Ru(R),T=t||fetch;E=E?(E+"").toLowerCase():"text";let I=kf([F,M&&M.toAbortSignal()],B),_=null;const at=I&&I.unsubscribe&&(()=>{I.unsubscribe()});let q;try{if(et&&d&&b!=="get"&&b!=="head"&&(q=await P(g,x))!==0){let ut=new e(V,{method:"POST",body:x,duplex:"half"}),Dt;if(S.isFormData(x)&&(Dt=ut.headers.get("content-type"))&&g.setContentType(Dt),ut.body){const[Rt,bt]=ka(q,Yr(Oa(et)));x=La(ut.body,Ma,Rt,bt)}}S.isString(y)||(y=y?"include":"omit");const Y=o&&"credentials"in e.prototype,K={...w,signal:I,method:b.toUpperCase(),headers:g.normalize().toJSON(),body:x,duplex:"half",credentials:Y?y:void 0};_=o&&new e(V,K);let G=await(o?T(_,w):T(V,K));const ct=f&&(E==="stream"||E==="response");if(f&&(J||ct&&at)){const ut={};["status","statusText","headers"].forEach(ht=>{ut[ht]=G[ht]});const Dt=S.toFiniteNumber(G.headers.get("content-length")),[Rt,bt]=J&&ka(Dt,Yr(Oa(J),!0))||[];G=new r(La(G.body,Ma,Rt,()=>{bt&&bt(),at&&at()}),ut)}E=E||"text";let Vt=await m[S.findKey(m,E)||"text"](G,R);return!ct&&at&&at(),await new Promise((ut,Dt)=>{Iu(ut,Dt,{data:Vt,headers:qt.from(G.headers),status:G.status,statusText:G.statusText,config:R,request:_})})}catch(Y){throw at&&at(),Y&&Y.name==="TypeError"&&/Load failed|fetch/i.test(Y.message)?Object.assign(new H("Network Error",H.ERR_NETWORK,R,_),{cause:Y.cause||Y}):H.from(Y,Y&&Y.code,R,_)}}},Uf=new Map,bu=n=>{let t=n?n.env:{};const{fetch:e,Request:r,Response:s}=t,o=[r,s,e];let a=o.length,u=a,h,d,f=Uf;for(;u--;)h=o[u],d=f.get(h),d===void 0&&f.set(h,d=u?new Map:Ff(t)),f=d;return d};bu();const pi={http:ef,xhr:Nf,fetch:{get:bu}};S.forEach(pi,(n,t)=>{if(n){try{Object.defineProperty(n,"name",{value:t})}catch{}Object.defineProperty(n,"adapterName",{value:t})}});const ja=n=>`- ${n}`,Bf=n=>S.isFunction(n)||n===null||n===!1,Su={getAdapter:(n,t)=>{n=S.isArray(n)?n:[n];const{length:e}=n;let r,s;const o={};for(let a=0;a<e;a++){r=n[a];let u;if(s=r,!Bf(r)&&(s=pi[(u=String(r)).toLowerCase()],s===void 0))throw new H(`Unknown adapter '${u}'`);if(s&&(S.isFunction(s)||(s=s.get(t))))break;o[u||"#"+a]=s}if(!s){const a=Object.entries(o).map(([h,d])=>`adapter ${h} `+(d===!1?"is not supported by the environment":"is not available in the build"));let u=e?a.length>1?`since :
`+a.map(ja).join(`
`):" "+ja(a[0]):"as no adapter specified";throw new H("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return s},adapters:pi};function Zs(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new An(null,n)}function qa(n){return Zs(n),n.headers=qt.from(n.headers),n.data=Ys.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Su.getAdapter(n.adapter||gr.adapter,n)(n).then(function(r){return Zs(n),r.data=Ys.call(n,n.transformResponse,r),r.headers=qt.from(r.headers),r},function(r){return Au(r)||(Zs(n),r&&r.response&&(r.response.data=Ys.call(n,n.transformResponse,r.response),r.response.headers=qt.from(r.response.headers))),Promise.reject(r)})}const Cu="1.12.2",_s={};["object","boolean","number","function","string","symbol"].forEach((n,t)=>{_s[n]=function(r){return typeof r===n||"a"+(t<1?"n ":" ")+n}});const $a={};_s.transitional=function(t,e,r){function s(o,a){return"[Axios v"+Cu+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,u)=>{if(t===!1)throw new H(s(a," has been removed"+(e?" in "+e:"")),H.ERR_DEPRECATED);return e&&!$a[a]&&($a[a]=!0,console.warn(s(a," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(o,a,u):!0}};_s.spelling=function(t){return(e,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function jf(n,t,e){if(typeof n!="object")throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let s=r.length;for(;s-- >0;){const o=r[s],a=t[o];if(a){const u=n[o],h=u===void 0||a(u,o,n);if(h!==!0)throw new H("option "+o+" must be "+h,H.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new H("Unknown option "+o,H.ERR_BAD_OPTION)}}const Hr={assertOptions:jf,validators:_s},ee=Hr.validators;let qe=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Da,response:new Da}}async request(t,e){try{return await this._request(t,e)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=Ge(this.defaults,e);const{transitional:r,paramsSerializer:s,headers:o}=e;r!==void 0&&Hr.assertOptions(r,{silentJSONParsing:ee.transitional(ee.boolean),forcedJSONParsing:ee.transitional(ee.boolean),clarifyTimeoutError:ee.transitional(ee.boolean)},!1),s!=null&&(S.isFunction(s)?e.paramsSerializer={serialize:s}:Hr.assertOptions(s,{encode:ee.function,serialize:ee.function},!0)),e.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),Hr.assertOptions(e,{baseUrl:ee.spelling("baseURL"),withXsrfToken:ee.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let a=o&&S.merge(o.common,o[e.method]);o&&S.forEach(["delete","get","head","post","put","patch","common"],R=>{delete o[R]}),e.headers=qt.concat(a,o);const u=[];let h=!0;this.interceptors.request.forEach(function(V){typeof V.runWhen=="function"&&V.runWhen(e)===!1||(h=h&&V.synchronous,u.unshift(V.fulfilled,V.rejected))});const d=[];this.interceptors.response.forEach(function(V){d.push(V.fulfilled,V.rejected)});let f,m=0,A;if(!h){const R=[qa.bind(this),void 0];for(R.unshift(...u),R.push(...d),A=R.length,f=Promise.resolve(e);m<A;)f=f.then(R[m++],R[m++]);return f}A=u.length;let P=e;for(;m<A;){const R=u[m++],V=u[m++];try{P=R(P)}catch(b){V.call(this,b);break}}try{f=qa.call(this,P)}catch(R){return Promise.reject(R)}for(m=0,A=d.length;m<A;)f=f.then(d[m++],d[m++]);return f}getUri(t){t=Ge(this.defaults,t);const e=vu(t.baseURL,t.url,t.allowAbsoluteUrls);return Eu(e,t.params,t.paramsSerializer)}};S.forEach(["delete","get","head","options"],function(t){qe.prototype[t]=function(e,r){return this.request(Ge(r||{},{method:t,url:e,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function e(r){return function(o,a,u){return this.request(Ge(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}qe.prototype[t]=e(),qe.prototype[t+"Form"]=e(!0)});let qf=class Pu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(o){e=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const a=new Promise(u=>{r.subscribe(u),o=u}).then(s);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,u){r.reason||(r.reason=new An(o,a,u),e(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=r=>{t.abort(r)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;return{token:new Pu(function(s){t=s}),cancel:t}}};function $f(n){return function(e){return n.apply(null,e)}}function zf(n){return S.isObject(n)&&n.isAxiosError===!0}const mi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(mi).forEach(([n,t])=>{mi[t]=n});function Vu(n){const t=new qe(n),e=au(qe.prototype.request,t);return S.extend(e,qe.prototype,t,{allOwnKeys:!0}),S.extend(e,t,null,{allOwnKeys:!0}),e.create=function(s){return Vu(Ge(n,s))},e}const gt=Vu(gr);gt.Axios=qe;gt.CanceledError=An;gt.CancelToken=qf;gt.isCancel=Au;gt.VERSION=Cu;gt.toFormData=gs;gt.AxiosError=H;gt.Cancel=gt.CanceledError;gt.all=function(t){return Promise.all(t)};gt.spread=$f;gt.isAxiosError=zf;gt.mergeConfig=Ge;gt.AxiosHeaders=qt;gt.formToJSON=n=>wu(S.isHTMLForm(n)?new FormData(n):n);gt.getAdapter=Su.getAdapter;gt.HttpStatusCode=mi;gt.default=gt;const{Axios:pT,AxiosError:mT,CanceledError:gT,isCancel:_T,CancelToken:yT,VERSION:ET,all:TT,Cancel:wT,isAxiosError:AT,spread:IT,toFormData:vT,AxiosHeaders:RT,HttpStatusCode:bT,formToJSON:ST,getAdapter:CT,mergeConfig:PT}=gt;window.axios=gt;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const Hf=()=>{};var za={};/**
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
 */const Du=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Gf=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,f=o>>2,m=(o&3)<<4|u>>4;let A=(u&15)<<2|d>>6,P=d&63;h||(P=64,a||(A=64)),r.push(e[f],e[m],e[A],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Du(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Gf(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const m=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||m==null)throw new Wf;const A=o<<2|u>>4;if(r.push(A),d!==64){const P=u<<4&240|d>>2;if(r.push(P),m!==64){const R=d<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Wf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kf=function(n){const t=Du(n);return Nu.encodeByteArray(t,!0)},Zr=function(n){return Kf(n).replace(/\./g,"")},Qf=function(n){try{return Nu.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Xf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jf=()=>Xf().__FIREBASE_DEFAULTS__,Yf=()=>{if(typeof process>"u"||typeof za>"u")return;const n=za.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Qf(n[1]);return t&&JSON.parse(t)},qi=()=>{try{return Hf()||Jf()||Yf()||Zf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tp=n=>qi()?.emulatorHosts?.[n],ku=n=>{const t=tp(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ou=()=>qi()?.config;/**
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
 */class ep{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function _r(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Lu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Zr(JSON.stringify(e)),Zr(JSON.stringify(a)),""].join(".")}const Xn={};function np(){const n={prod:[],emulator:[]};for(const t of Object.keys(Xn))Xn[t]?n.emulator.push(t):n.prod.push(t);return n}function rp(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Ha=!1;function Mu(n,t){if(typeof window>"u"||typeof document>"u"||!_r(window.location.host)||Xn[n]===t||Xn[n]||Ha)return;Xn[n]=t;function e(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=np().prod.length>0;function a(){const A=document.getElementById(r);A&&A.remove()}function u(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,P){A.setAttribute("width","24"),A.setAttribute("id",P),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function d(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Ha=!0,a()},A}function f(A,P){A.setAttribute("id",P),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function m(){const A=rp(r),P=e("text"),R=document.getElementById(P)||document.createElement("span"),V=e("learnmore"),b=document.getElementById(V)||document.createElement("a"),x=e("preprendIcon"),F=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const M=A.element;u(M),f(b,V);const B=d();h(F,x),M.append(F,R,b,B),document.body.appendChild(M)}o?(R.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function sp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ip(){const n=qi()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function op(){return!ip()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ap(){try{return typeof indexedDB=="object"}catch{return!1}}function cp(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(e){t(e)}})}/**
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
 */const up="FirebaseError";class Xe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=up,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fu.prototype.create)}}class Fu{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?lp(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Xe(s,u,r)}}function lp(n,t){return n.replace(hp,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const hp=/\{\$([^}]+)}/g;function ts(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Ga(o)&&Ga(a)){if(!ts(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ga(n){return n!==null&&typeof n=="object"}/**
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
 */function Kt(n){return n&&n._delegate?n._delegate:n}class pn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ue="[DEFAULT]";/**
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
 */class dp{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ep;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pp(t))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ue){return this.instances.has(t)}getOptions(t=Ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fp(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ue){return this.component?this.component.multipleInstances?t:Ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fp(n){return n===Ue?void 0:n}function pp(n){return n.instantiationMode==="EAGER"}/**
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
 */class mp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new dp(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var tt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(tt||(tt={}));const gp={debug:tt.DEBUG,verbose:tt.VERBOSE,info:tt.INFO,warn:tt.WARN,error:tt.ERROR,silent:tt.SILENT},_p=tt.INFO,yp={[tt.DEBUG]:"log",[tt.VERBOSE]:"log",[tt.INFO]:"info",[tt.WARN]:"warn",[tt.ERROR]:"error"},Ep=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=yp[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Uu{constructor(t){this.name=t,this._logLevel=_p,this._logHandler=Ep,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in tt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,tt.DEBUG,...t),this._logHandler(this,tt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,tt.VERBOSE,...t),this._logHandler(this,tt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,tt.INFO,...t),this._logHandler(this,tt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,tt.WARN,...t),this._logHandler(this,tt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,tt.ERROR,...t),this._logHandler(this,tt.ERROR,...t)}}const Tp=(n,t)=>t.some(e=>n instanceof e);let Wa,Ka;function wp(){return Wa||(Wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ap(){return Ka||(Ka=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bu=new WeakMap,gi=new WeakMap,ju=new WeakMap,ti=new WeakMap,$i=new WeakMap;function Ip(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Ie(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Bu.set(e,n)}).catch(()=>{}),$i.set(t,n),t}function vp(n){if(gi.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});gi.set(n,t)}let _i={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return gi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ju.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ie(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Rp(n){_i=n(_i)}function bp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ei(this),t,...e);return ju.set(r,t.sort?t.sort():[t]),Ie(r)}:Ap().includes(n)?function(...t){return n.apply(ei(this),t),Ie(Bu.get(this))}:function(...t){return Ie(n.apply(ei(this),t))}}function Sp(n){return typeof n=="function"?bp(n):(n instanceof IDBTransaction&&vp(n),Tp(n,wp())?new Proxy(n,_i):n)}function Ie(n){if(n instanceof IDBRequest)return Ip(n);if(ti.has(n))return ti.get(n);const t=Sp(n);return t!==n&&(ti.set(n,t),$i.set(t,n)),t}const ei=n=>$i.get(n);function Cp(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=Ie(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Ie(a.result),h.oldVersion,h.newVersion,Ie(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Pp=["get","getKey","getAll","getAllKeys","count"],Vp=["put","add","delete","clear"],ni=new Map;function Qa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ni.get(t))return ni.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Vp.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Pp.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return ni.set(t,o),o}Rp(n=>({...n,get:(t,e,r)=>Qa(t,e)||n.get(t,e,r),has:(t,e)=>!!Qa(t,e)||n.has(t,e)}));/**
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
 */class Dp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Np(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Np(n){return n.getComponent()?.type==="VERSION"}const yi="@firebase/app",Xa="0.14.3";/**
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
 */const de=new Uu("@firebase/app"),kp="@firebase/app-compat",Op="@firebase/analytics-compat",xp="@firebase/analytics",Lp="@firebase/app-check-compat",Mp="@firebase/app-check",Fp="@firebase/auth",Up="@firebase/auth-compat",Bp="@firebase/database",jp="@firebase/data-connect",qp="@firebase/database-compat",$p="@firebase/functions",zp="@firebase/functions-compat",Hp="@firebase/installations",Gp="@firebase/installations-compat",Wp="@firebase/messaging",Kp="@firebase/messaging-compat",Qp="@firebase/performance",Xp="@firebase/performance-compat",Jp="@firebase/remote-config",Yp="@firebase/remote-config-compat",Zp="@firebase/storage",tm="@firebase/storage-compat",em="@firebase/firestore",nm="@firebase/ai",rm="@firebase/firestore-compat",sm="firebase",im="12.3.0";/**
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
 */const Ei="[DEFAULT]",om={[yi]:"fire-core",[kp]:"fire-core-compat",[xp]:"fire-analytics",[Op]:"fire-analytics-compat",[Mp]:"fire-app-check",[Lp]:"fire-app-check-compat",[Fp]:"fire-auth",[Up]:"fire-auth-compat",[Bp]:"fire-rtdb",[jp]:"fire-data-connect",[qp]:"fire-rtdb-compat",[$p]:"fire-fn",[zp]:"fire-fn-compat",[Hp]:"fire-iid",[Gp]:"fire-iid-compat",[Wp]:"fire-fcm",[Kp]:"fire-fcm-compat",[Qp]:"fire-perf",[Xp]:"fire-perf-compat",[Jp]:"fire-rc",[Yp]:"fire-rc-compat",[Zp]:"fire-gcs",[tm]:"fire-gcs-compat",[em]:"fire-fst",[rm]:"fire-fst-compat",[nm]:"fire-vertex","fire-js":"fire-js",[sm]:"fire-js-all"};/**
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
 */const es=new Map,am=new Map,Ti=new Map;function Ja(n,t){try{n.container.addComponent(t)}catch(e){de.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function rr(n){const t=n.name;if(Ti.has(t))return de.debug(`There were multiple attempts to register component ${t}.`),!1;Ti.set(t,n);for(const e of es.values())Ja(e,n);for(const e of am.values())Ja(e,n);return!0}function qu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function $u(n){return n==null?!1:n.settings!==void 0}/**
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
 */const cm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ve=new Fu("app","Firebase",cm);/**
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
 */class um{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}/**
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
 */const zu=im;function Hu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Ei,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw ve.create("bad-app-name",{appName:String(s)});if(e||(e=Ou()),!e)throw ve.create("no-options");const o=es.get(s);if(o){if(ts(e,o.options)&&ts(r,o.config))return o;throw ve.create("duplicate-app",{appName:s})}const a=new mp(s);for(const h of Ti.values())a.addComponent(h);const u=new um(e,r,a);return es.set(s,u),u}function Gu(n=Ei){const t=es.get(n);if(!t&&n===Ei&&Ou())return Hu();if(!t)throw ve.create("no-app",{appName:n});return t}function Re(n,t,e){let r=om[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),de.warn(a.join(" "));return}rr(new pn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const lm="firebase-heartbeat-database",hm=1,sr="firebase-heartbeat-store";let ri=null;function Wu(){return ri||(ri=Cp(lm,hm,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(sr)}catch(e){console.warn(e)}}}}).catch(n=>{throw ve.create("idb-open",{originalErrorMessage:n.message})})),ri}async function dm(n){try{const e=(await Wu()).transaction(sr),r=await e.objectStore(sr).get(Ku(n));return await e.done,r}catch(t){if(t instanceof Xe)de.warn(t.message);else{const e=ve.create("idb-get",{originalErrorMessage:t?.message});de.warn(e.message)}}}async function Ya(n,t){try{const r=(await Wu()).transaction(sr,"readwrite");await r.objectStore(sr).put(t,Ku(n)),await r.done}catch(e){if(e instanceof Xe)de.warn(e.message);else{const r=ve.create("idb-set",{originalErrorMessage:e?.message});de.warn(r.message)}}}function Ku(n){return`${n.name}!${n.options.appId}`}/**
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
 */const fm=1024,pm=30;class mm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new _m(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Za();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>pm){const s=ym(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){de.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Za(),{heartbeatsToSend:e,unsentEntries:r}=gm(this._heartbeatsCache.heartbeats),s=Zr(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return de.warn(t),""}}}function Za(){return new Date().toISOString().substring(0,10)}function gm(n,t=fm){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),tc(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),tc(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class _m{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ap()?cp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await dm(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ya(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ya(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function tc(n){return Zr(JSON.stringify({version:2,heartbeats:n})).length}function ym(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Em(n){rr(new pn("platform-logger",t=>new Dp(t),"PRIVATE")),rr(new pn("heartbeat",t=>new mm(t),"PRIVATE")),Re(yi,Xa,n),Re(yi,Xa,"esm2020"),Re("fire-js","")}Em("");var Tm="firebase",wm="12.3.0";/**
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
 */Re(Tm,wm,"app");var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var be,Qu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,g){function y(){}y.prototype=g.prototype,E.F=g.prototype,E.prototype=new y,E.prototype.constructor=E,E.D=function(w,T,I){for(var _=Array(arguments.length-2),at=2;at<arguments.length;at++)_[at-2]=arguments[at];return g.prototype[T].apply(w,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,y){y||(y=0);const w=Array(16);if(typeof g=="string")for(var T=0;T<16;++T)w[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;T<16;++T)w[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=E.g[0],y=E.g[1],T=E.g[2];let I=E.g[3],_;_=g+(I^y&(T^I))+w[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(T^g&(y^T))+w[1]+3905402710&4294967295,I=g+(_<<12&4294967295|_>>>20),_=T+(y^I&(g^y))+w[2]+606105819&4294967295,T=I+(_<<17&4294967295|_>>>15),_=y+(g^T&(I^g))+w[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(I^y&(T^I))+w[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(T^g&(y^T))+w[5]+1200080426&4294967295,I=g+(_<<12&4294967295|_>>>20),_=T+(y^I&(g^y))+w[6]+2821735955&4294967295,T=I+(_<<17&4294967295|_>>>15),_=y+(g^T&(I^g))+w[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(I^y&(T^I))+w[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(T^g&(y^T))+w[9]+2336552879&4294967295,I=g+(_<<12&4294967295|_>>>20),_=T+(y^I&(g^y))+w[10]+4294925233&4294967295,T=I+(_<<17&4294967295|_>>>15),_=y+(g^T&(I^g))+w[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(I^y&(T^I))+w[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(T^g&(y^T))+w[13]+4254626195&4294967295,I=g+(_<<12&4294967295|_>>>20),_=T+(y^I&(g^y))+w[14]+2792965006&4294967295,T=I+(_<<17&4294967295|_>>>15),_=y+(g^T&(I^g))+w[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(T^I&(y^T))+w[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^T&(g^y))+w[6]+3225465664&4294967295,I=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(I^g))+w[11]+643717713&4294967295,T=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(T^I))+w[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^I&(y^T))+w[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^T&(g^y))+w[10]+38016083&4294967295,I=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(I^g))+w[15]+3634488961&4294967295,T=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(T^I))+w[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^I&(y^T))+w[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^T&(g^y))+w[14]+3275163606&4294967295,I=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(I^g))+w[3]+4107603335&4294967295,T=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(T^I))+w[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^I&(y^T))+w[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^T&(g^y))+w[2]+4243563512&4294967295,I=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(I^g))+w[7]+1735328473&4294967295,T=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(T^I))+w[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(y^T^I)+w[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^T)+w[8]+2272392833&4294967295,I=g+(_<<11&4294967295|_>>>21),_=T+(I^g^y)+w[11]+1839030562&4294967295,T=I+(_<<16&4294967295|_>>>16),_=y+(T^I^g)+w[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^I)+w[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^T)+w[4]+1272893353&4294967295,I=g+(_<<11&4294967295|_>>>21),_=T+(I^g^y)+w[7]+4139469664&4294967295,T=I+(_<<16&4294967295|_>>>16),_=y+(T^I^g)+w[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^I)+w[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^T)+w[0]+3936430074&4294967295,I=g+(_<<11&4294967295|_>>>21),_=T+(I^g^y)+w[3]+3572445317&4294967295,T=I+(_<<16&4294967295|_>>>16),_=y+(T^I^g)+w[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^I)+w[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^T)+w[12]+3873151461&4294967295,I=g+(_<<11&4294967295|_>>>21),_=T+(I^g^y)+w[15]+530742520&4294967295,T=I+(_<<16&4294967295|_>>>16),_=y+(T^I^g)+w[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(T^(y|~I))+w[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~T))+w[7]+1126891415&4294967295,I=g+(_<<10&4294967295|_>>>22),_=T+(g^(I|~y))+w[14]+2878612391&4294967295,T=I+(_<<15&4294967295|_>>>17),_=y+(I^(T|~g))+w[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~I))+w[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~T))+w[3]+2399980690&4294967295,I=g+(_<<10&4294967295|_>>>22),_=T+(g^(I|~y))+w[10]+4293915773&4294967295,T=I+(_<<15&4294967295|_>>>17),_=y+(I^(T|~g))+w[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~I))+w[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~T))+w[15]+4264355552&4294967295,I=g+(_<<10&4294967295|_>>>22),_=T+(g^(I|~y))+w[6]+2734768916&4294967295,T=I+(_<<15&4294967295|_>>>17),_=y+(I^(T|~g))+w[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~I))+w[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~T))+w[11]+3174756917&4294967295,I=g+(_<<10&4294967295|_>>>22),_=T+(g^(I|~y))+w[2]+718787259&4294967295,T=I+(_<<15&4294967295|_>>>17),_=y+(I^(T|~g))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.v=function(E,g){g===void 0&&(g=E.length);const y=g-this.blockSize,w=this.C;let T=this.h,I=0;for(;I<g;){if(T==0)for(;I<=y;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<g;)if(w[T++]=E.charCodeAt(I++),T==this.blockSize){s(this,w),T=0;break}}else for(;I<g;)if(w[T++]=E[I++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=g},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;g=this.o*8;for(var y=E.length-8;y<E.length;++y)E[y]=g&255,g/=256;for(this.v(E),E=Array(16),g=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)E[g++]=this.g[y]>>>w&255;return E};function o(E,g){var y=u;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=g(E)}function a(E,g){this.h=g;const y=[];let w=!0;for(let T=E.length-1;T>=0;T--){const I=E[T]|0;w&&I==g||(y[T]=I,w=!1)}this.g=y}var u={};function h(E){return-128<=E&&E<128?o(E,function(g){return new a([g|0],g<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return b(d(-E));const g=[];let y=1;for(let w=0;E>=y;w++)g[w]=E/y|0,y*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return b(f(E.substring(1),g));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let w=m;for(let I=0;I<E.length;I+=8){var T=Math.min(8,E.length-I);const _=parseInt(E.substring(I,I+T),g);T<8?(T=d(Math.pow(g,T)),w=w.j(T).add(d(_))):(w=w.j(y),w=w.add(d(_)))}return w}var m=h(0),A=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(V(this))return-b(this).m();let E=0,g=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);E+=(w>=0?w:4294967296+w)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(V(this))return"-"+b(this).toString(E);const g=d(Math.pow(E,6));var y=this;let w="";for(;;){const T=B(y,g).g;y=x(y,T.j(g));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(E);if(y=T,R(y))return I+w;for(;I.length<6;)I="0"+I;w=I+w}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function V(E){return E.h==-1}n.l=function(E){return E=x(this,E),V(E)?-1:R(E)?0:1};function b(E){const g=E.g.length,y=[];for(let w=0;w<g;w++)y[w]=~E.g[w];return new a(y,~E.h).add(A)}n.abs=function(){return V(this)?b(this):this},n.add=function(E){const g=Math.max(this.g.length,E.g.length),y=[];let w=0;for(let T=0;T<=g;T++){let I=w+(this.i(T)&65535)+(E.i(T)&65535),_=(I>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=_>>>16,I&=65535,_&=65535,y[T]=_<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function x(E,g){return E.add(b(g))}n.j=function(E){if(R(this)||R(E))return m;if(V(this))return V(E)?b(this).j(b(E)):b(b(this).j(E));if(V(E))return b(this.j(b(E)));if(this.l(P)<0&&E.l(P)<0)return d(this.m()*E.m());const g=this.g.length+E.g.length,y=[];for(var w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let T=0;T<E.g.length;T++){const I=this.i(w)>>>16,_=this.i(w)&65535,at=E.i(T)>>>16,q=E.i(T)&65535;y[2*w+2*T]+=_*q,F(y,2*w+2*T),y[2*w+2*T+1]+=I*q,F(y,2*w+2*T+1),y[2*w+2*T+1]+=_*at,F(y,2*w+2*T+1),y[2*w+2*T+2]+=I*at,F(y,2*w+2*T+2)}for(E=0;E<g;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=g;E<2*g;E++)y[E]=0;return new a(y,0)};function F(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function M(E,g){this.g=E,this.h=g}function B(E,g){if(R(g))throw Error("division by zero");if(R(E))return new M(m,m);if(V(E))return g=B(b(E),g),new M(b(g.g),b(g.h));if(V(g))return g=B(E,b(g)),new M(b(g.g),g.h);if(E.g.length>30){if(V(E)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var y=A,w=g;w.l(E)<=0;)y=J(y),w=J(w);var T=et(y,1),I=et(w,1);for(w=et(w,2),y=et(y,2);!R(w);){var _=I.add(w);_.l(E)<=0&&(T=T.add(y),I=_),w=et(w,1),y=et(y,1)}return g=x(E,T.j(g)),new M(T,g)}for(T=m;E.l(g)>=0;){for(y=Math.max(1,Math.floor(E.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),I=d(y),_=I.j(g);V(_)||_.l(E)>0;)y-=w,I=d(y),_=I.j(g);R(I)&&(I=A),T=T.add(I),E=x(E,_)}return new M(T,E)}n.B=function(E){return B(this,E).h},n.and=function(E){const g=Math.max(this.g.length,E.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)&E.i(w);return new a(y,this.h&E.h)},n.or=function(E){const g=Math.max(this.g.length,E.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)|E.i(w);return new a(y,this.h|E.h)},n.xor=function(E){const g=Math.max(this.g.length,E.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)^E.i(w);return new a(y,this.h^E.h)};function J(E){const g=E.g.length+1,y=[];for(let w=0;w<g;w++)y[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(y,E.h)}function et(E,g){const y=g>>5;g%=32;const w=E.g.length-y,T=[];for(let I=0;I<w;I++)T[I]=g>0?E.i(I+y)>>>g|E.i(I+y+1)<<32-g:E.i(I+y);return new a(T,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Qu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,be=a}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});var Lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xu,Gn,Ju,Gr,wi,Yu,Zu,tl;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lr=="object"&&Lr];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var l=r;i=i.split(".");for(var p=0;p<i.length-1;p++){var v=i[p];if(!(v in l))break t;l=l[v]}i=i[i.length-1],p=l[i],c=c(p),c!=p&&c!=null&&t(l,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var l=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&l.push([p,c[p]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,l){return i.call.apply(i.bind,arguments)}function d(i,c,l){return d=h,d.apply(null,arguments)}function f(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var p=l.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function m(i,c){function l(){}l.prototype=c.prototype,i.Z=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(p,v,C){for(var k=Array(arguments.length-2),W=2;W<arguments.length;W++)k[W-2]=arguments[W];return c.prototype[v].apply(p,k)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function P(i){const c=i.length;if(c>0){const l=Array(c);for(let p=0;p<c;p++)l[p]=i[p];return l}return[]}function R(i,c){for(let p=1;p<arguments.length;p++){const v=arguments[p];var l=typeof v;if(l=l!="object"?l:v?Array.isArray(v)?"array":l:"null",l=="array"||l=="object"&&typeof v.length=="number"){l=i.length||0;const C=v.length||0;i.length=l+C;for(let k=0;k<C;k++)i[l+k]=v[k]}else i.push(v)}}class V{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function b(i){a.setTimeout(()=>{throw i},0)}function x(){var i=E;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class F{constructor(){this.h=this.g=null}add(c,l){const p=M.get();p.set(c,l),this.h?this.h.next=p:this.g=p,this.h=p}}var M=new V(()=>new B,i=>i.reset());class B{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let J,et=!1,E=new F,g=()=>{const i=Promise.resolve(void 0);J=()=>{i.then(y)}};function y(){for(var i;i=x();){try{i.h.call(i.g)}catch(l){b(l)}var c=M;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}et=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return i})();function _(i){return/^[\s\xa0]*$/.test(i)}function at(i,c){T.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}m(at,T),at.prototype.init=function(i,c){const l=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&at.Z.h.call(this)},at.prototype.h=function(){at.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var q="closure_listenable_"+(Math.random()*1e6|0),Y=0;function K(i,c,l,p,v){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!p,this.ha=v,this.key=++Y,this.da=this.fa=!1}function G(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ct(i,c,l){for(const p in i)c.call(l,i[p],p,i)}function Vt(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function ut(i){const c={};for(const l in i)c[l]=i[l];return c}const Dt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rt(i,c){let l,p;for(let v=1;v<arguments.length;v++){p=arguments[v];for(l in p)i[l]=p[l];for(let C=0;C<Dt.length;C++)l=Dt[C],Object.prototype.hasOwnProperty.call(p,l)&&(i[l]=p[l])}}function bt(i){this.src=i,this.g={},this.h=0}bt.prototype.add=function(i,c,l,p,v){const C=i.toString();i=this.g[C],i||(i=this.g[C]=[],this.h++);const k=Jt(i,c,p,v);return k>-1?(c=i[k],l||(c.fa=!1)):(c=new K(c,this.src,C,!!p,v),c.fa=l,i.push(c)),c};function ht(i,c){const l=c.type;if(l in i.g){var p=i.g[l],v=Array.prototype.indexOf.call(p,c,void 0),C;(C=v>=0)&&Array.prototype.splice.call(p,v,1),C&&(G(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Jt(i,c,l,p){for(let v=0;v<i.length;++v){const C=i[v];if(!C.da&&C.listener==c&&C.capture==!!l&&C.ha==p)return v}return-1}var nn="closure_lm_"+(Math.random()*1e6|0),ue={};function le(i,c,l,p,v){if(Array.isArray(c)){for(let C=0;C<c.length;C++)le(i,c[C],l,p,v);return null}return l=ko(l),i&&i[q]?i.J(c,l,u(p)?!!p.capture:!1,v):Yt(i,c,l,!1,p,v)}function Yt(i,c,l,p,v,C){if(!c)throw Error("Invalid event type");const k=u(v)?!!v.capture:!!v;let W=Ns(i);if(W||(i[nn]=W=new bt(i)),l=W.add(c,l,p,k,C),l.proxy)return l;if(p=qh(),l.proxy=p,p.src=i,p.listener=l,i.addEventListener)I||(v=k),v===void 0&&(v=!1),i.addEventListener(c.toString(),p,v);else if(i.attachEvent)i.attachEvent(No(c.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return l}function qh(){function i(l){return c.call(i.src,i.listener,l)}const c=$h;return i}function Do(i,c,l,p,v){if(Array.isArray(c))for(var C=0;C<c.length;C++)Do(i,c[C],l,p,v);else p=u(p)?!!p.capture:!!p,l=ko(l),i&&i[q]?(i=i.i,C=String(c).toString(),C in i.g&&(c=i.g[C],l=Jt(c,l,p,v),l>-1&&(G(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete i.g[C],i.h--)))):i&&(i=Ns(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Jt(c,l,p,v)),(l=i>-1?c[i]:null)&&Ds(l))}function Ds(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[q])ht(c.i,i);else{var l=i.type,p=i.proxy;c.removeEventListener?c.removeEventListener(l,p,i.capture):c.detachEvent?c.detachEvent(No(l),p):c.addListener&&c.removeListener&&c.removeListener(p),(l=Ns(c))?(ht(l,i),l.h==0&&(l.src=null,c[nn]=null)):G(i)}}}function No(i){return i in ue?ue[i]:ue[i]="on"+i}function $h(i,c){if(i.da)i=!0;else{c=new at(c,this);const l=i.listener,p=i.ha||i.src;i.fa&&Ds(i),i=l.call(p,c)}return i}function Ns(i){return i=i[nn],i instanceof bt?i:null}var ks="__closure_events_fn_"+(Math.random()*1e9>>>0);function ko(i){return typeof i=="function"?i:(i[ks]||(i[ks]=function(c){return i.handleEvent(c)}),i[ks])}function Nt(){w.call(this),this.i=new bt(this),this.M=this,this.G=null}m(Nt,w),Nt.prototype[q]=!0,Nt.prototype.removeEventListener=function(i,c,l,p){Do(this,i,c,l,p)};function Mt(i,c){var l,p=i.G;if(p)for(l=[];p;p=p.G)l.push(p);if(i=i.M,p=c.type||c,typeof c=="string")c=new T(c,i);else if(c instanceof T)c.target=c.target||i;else{var v=c;c=new T(p,i),Rt(c,v)}v=!0;let C,k;if(l)for(k=l.length-1;k>=0;k--)C=c.g=l[k],v=Ir(C,p,!0,c)&&v;if(C=c.g=i,v=Ir(C,p,!0,c)&&v,v=Ir(C,p,!1,c)&&v,l)for(k=0;k<l.length;k++)C=c.g=l[k],v=Ir(C,p,!1,c)&&v}Nt.prototype.N=function(){if(Nt.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const l=i.g[c];for(let p=0;p<l.length;p++)G(l[p]);delete i.g[c],i.h--}}this.G=null},Nt.prototype.J=function(i,c,l,p){return this.i.add(String(i),c,!1,l,p)},Nt.prototype.K=function(i,c,l,p){return this.i.add(String(i),c,!0,l,p)};function Ir(i,c,l,p){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let v=!0;for(let C=0;C<c.length;++C){const k=c[C];if(k&&!k.da&&k.capture==l){const W=k.listener,Tt=k.ha||k.src;k.fa&&ht(i.i,k),v=W.call(Tt,p)!==!1&&v}}return v&&!p.defaultPrevented}function zh(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function Oo(i){i.g=zh(()=>{i.g=null,i.i&&(i.i=!1,Oo(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Hh extends w{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Oo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cn(i){w.call(this),this.h=i,this.g={}}m(Cn,w);var xo=[];function Lo(i){ct(i.g,function(c,l){this.g.hasOwnProperty(l)&&Ds(c)},i),i.g={}}Cn.prototype.N=function(){Cn.Z.N.call(this),Lo(this)},Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Os=a.JSON.stringify,Gh=a.JSON.parse,Wh=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Mo(){}function Fo(){}var Pn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function xs(){T.call(this,"d")}m(xs,T);function Ls(){T.call(this,"c")}m(Ls,T);var Oe={},Uo=null;function vr(){return Uo=Uo||new Nt}Oe.Ia="serverreachability";function Bo(i){T.call(this,Oe.Ia,i)}m(Bo,T);function Vn(i){const c=vr();Mt(c,new Bo(c))}Oe.STAT_EVENT="statevent";function jo(i,c){T.call(this,Oe.STAT_EVENT,i),this.stat=c}m(jo,T);function Ft(i){const c=vr();Mt(c,new jo(c,i))}Oe.Ja="timingevent";function qo(i,c){T.call(this,Oe.Ja,i),this.size=c}m(qo,T);function Dn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Nn(){this.g=!0}Nn.prototype.ua=function(){this.g=!1};function Kh(i,c,l,p,v,C){i.info(function(){if(i.g)if(C){var k="",W=C.split("&");for(let rt=0;rt<W.length;rt++){var Tt=W[rt].split("=");if(Tt.length>1){const It=Tt[0];Tt=Tt[1];const te=It.split("_");k=te.length>=2&&te[1]=="type"?k+(It+"="+Tt+"&"):k+(It+"=redacted&")}}}else k=null;else k=C;return"XMLHTTP REQ ("+p+") [attempt "+v+"]: "+c+`
`+l+`
`+k})}function Qh(i,c,l,p,v,C,k){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+v+"]: "+c+`
`+l+`
`+C+" "+k})}function rn(i,c,l,p){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Jh(i,l)+(p?" "+p:"")})}function Xh(i,c){i.info(function(){return"TIMEOUT: "+c})}Nn.prototype.info=function(){};function Jh(i,c){if(!i.g)return c;if(!c)return null;try{const C=JSON.parse(c);if(C){for(i=0;i<C.length;i++)if(Array.isArray(C[i])){var l=C[i];if(!(l.length<2)){var p=l[1];if(Array.isArray(p)&&!(p.length<1)){var v=p[0];if(v!="noop"&&v!="stop"&&v!="close")for(let k=1;k<p.length;k++)p[k]=""}}}}return Os(C)}catch{return c}}var Rr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$o={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},zo;function Ms(){}m(Ms,Mo),Ms.prototype.g=function(){return new XMLHttpRequest},zo=new Ms;function kn(i){return encodeURIComponent(String(i))}function Yh(i){var c=1;i=i.split(":");const l=[];for(;c>0&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function me(i,c,l,p){this.j=i,this.i=c,this.l=l,this.S=p||1,this.V=new Cn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ho}function Ho(){this.i=null,this.g="",this.h=!1}var Go={},Fs={};function Us(i,c,l){i.M=1,i.A=Sr(Zt(c)),i.u=l,i.R=!0,Wo(i,null)}function Wo(i,c){i.F=Date.now(),br(i),i.B=Zt(i.A);var l=i.B,p=i.S;Array.isArray(p)||(p=[String(p)]),oa(l.i,"t",p),i.C=0,l=i.j.L,i.h=new Ho,i.g=va(i.j,l?c:null,!i.u),i.P>0&&(i.O=new Hh(d(i.Y,i,i.g),i.P)),c=i.V,l=i.g,p=i.ba;var v="readystatechange";Array.isArray(v)||(v&&(xo[0]=v.toString()),v=xo);for(let C=0;C<v.length;C++){const k=le(l,v[C],p||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=i.J?ut(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Vn(),Kh(i.i,i.v,i.B,i.l,i.S,i.u)}me.prototype.ba=function(i){i=i.target;const c=this.O;c&&ye(i)==3?c.j():this.Y(i)},me.prototype.Y=function(i){try{if(i==this.g)t:{const W=ye(this.g),Tt=this.g.ya(),rt=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||fa(this.g)))){this.K||W!=4||Tt==7||(Tt==8||rt<=0?Vn(3):Vn(2)),Bs(this);var c=this.g.ca();this.X=c;var l=Zh(this);if(this.o=c==200,Qh(this.i,this.v,this.B,this.l,this.S,W,c),this.o){if(this.U&&!this.L){e:{if(this.g){var p,v=this.g;if((p=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var C=p;break e}}C=null}if(i=C)rn(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,js(this,i);else{this.o=!1,this.m=3,Ft(12),xe(this),On(this);break t}}if(this.R){i=!0;let It;for(;!this.K&&this.C<l.length;)if(It=td(this,l),It==Fs){W==4&&(this.m=4,Ft(14),i=!1),rn(this.i,this.l,null,"[Incomplete Response]");break}else if(It==Go){this.m=4,Ft(15),rn(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else rn(this.i,this.l,It,null),js(this,It);if(Ko(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||l.length!=0||this.h.h||(this.m=1,Ft(16),i=!1),this.o=this.o&&i,!i)rn(this.i,this.l,l,"[Invalid Chunked Response]"),xe(this),On(this);else if(l.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),Qs(k),k.P=!0,Ft(11))}}else rn(this.i,this.l,l,null),js(this,l);W==4&&xe(this),this.o&&!this.K&&(W==4?Ta(this.j,this):(this.o=!1,br(this)))}else pd(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,Ft(12)):(this.m=0,Ft(13)),xe(this),On(this)}}}catch{}finally{}};function Zh(i){if(!Ko(i))return i.g.la();const c=fa(i.g);if(c==="")return"";let l="";const p=c.length,v=ye(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return xe(i),On(i),"";i.h.i=new a.TextDecoder}for(let C=0;C<p;C++)i.h.h=!0,l+=i.h.i.decode(c[C],{stream:!(v&&C==p-1)});return c.length=0,i.h.g+=l,i.C=0,i.h.g}function Ko(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function td(i,c){var l=i.C,p=c.indexOf(`
`,l);return p==-1?Fs:(l=Number(c.substring(l,p)),isNaN(l)?Go:(p+=1,p+l>c.length?Fs:(c=c.slice(p,p+l),i.C=p+l,c)))}me.prototype.cancel=function(){this.K=!0,xe(this)};function br(i){i.T=Date.now()+i.H,Qo(i,i.H)}function Qo(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Dn(d(i.aa,i),c)}function Bs(i){i.D&&(a.clearTimeout(i.D),i.D=null)}me.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Xh(this.i,this.B),this.M!=2&&(Vn(),Ft(17)),xe(this),this.m=2,On(this)):Qo(this,this.T-i)};function On(i){i.j.I==0||i.K||Ta(i.j,i)}function xe(i){Bs(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Lo(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function js(i,c){try{var l=i.j;if(l.I!=0&&(l.g==i||qs(l.h,i))){if(!i.L&&qs(l.h,i)&&l.I==3){try{var p=l.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var v=p;if(v[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)Nr(l),Vr(l);else break t;Ks(l),Ft(18)}}else l.xa=v[1],0<l.xa-l.K&&v[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=Dn(d(l.Va,l),6e3));Yo(l.h)<=1&&l.ta&&(l.ta=void 0)}else Me(l,11)}else if((i.L||l.g==i)&&Nr(l),!_(c))for(v=l.Ba.g.parse(c),c=0;c<v.length;c++){let rt=v[c];const It=rt[0];if(!(It<=l.K))if(l.K=It,rt=rt[1],l.I==2)if(rt[0]=="c"){l.M=rt[1],l.ba=rt[2];const te=rt[3];te!=null&&(l.ka=te,l.j.info("VER="+l.ka));const Fe=rt[4];Fe!=null&&(l.za=Fe,l.j.info("SVER="+l.za));const Ee=rt[5];Ee!=null&&typeof Ee=="number"&&Ee>0&&(p=1.5*Ee,l.O=p,l.j.info("backChannelRequestTimeoutMs_="+p)),p=l;const Te=i.g;if(Te){const Or=Te.g?Te.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Or){var C=p.h;C.g||Or.indexOf("spdy")==-1&&Or.indexOf("quic")==-1&&Or.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&($s(C,C.h),C.h=null))}if(p.G){const Xs=Te.g?Te.g.getResponseHeader("X-HTTP-Session-Id"):null;Xs&&(p.wa=Xs,it(p.J,p.G,Xs))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),p=l;var k=i;if(p.na=Ia(p,p.L?p.ba:null,p.W),k.L){Zo(p.h,k);var W=k,Tt=p.O;Tt&&(W.H=Tt),W.D&&(Bs(W),br(W)),p.g=k}else ya(p);l.i.length>0&&Dr(l)}else rt[0]!="stop"&&rt[0]!="close"||Me(l,7);else l.I==3&&(rt[0]=="stop"||rt[0]=="close"?rt[0]=="stop"?Me(l,7):Ws(l):rt[0]!="noop"&&l.l&&l.l.qa(rt),l.A=0)}}Vn(4)}catch{}}var ed=class{constructor(i,c){this.g=i,this.map=c}};function Xo(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Jo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Yo(i){return i.h?1:i.g?i.g.size:0}function qs(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function $s(i,c){i.g?i.g.add(c):i.h=c}function Zo(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Xo.prototype.cancel=function(){if(this.i=ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ta(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.G);return c}return P(i.i)}var ea=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nd(i,c){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const p=i[l].indexOf("=");let v,C=null;p>=0?(v=i[l].substring(0,p),C=i[l].substring(p+1)):v=i[l],c(v,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function ge(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof ge?(this.l=i.l,xn(this,i.j),this.o=i.o,this.g=i.g,Ln(this,i.u),this.h=i.h,zs(this,aa(i.i)),this.m=i.m):i&&(c=String(i).match(ea))?(this.l=!1,xn(this,c[1]||"",!0),this.o=Mn(c[2]||""),this.g=Mn(c[3]||"",!0),Ln(this,c[4]),this.h=Mn(c[5]||"",!0),zs(this,c[6]||"",!0),this.m=Mn(c[7]||"")):(this.l=!1,this.i=new Un(null,this.l))}ge.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Fn(c,na,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Fn(c,na,!0),"@"),i.push(kn(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Fn(l,l.charAt(0)=="/"?id:sd,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Fn(l,ad)),i.join("")},ge.prototype.resolve=function(i){const c=Zt(this);let l=!!i.j;l?xn(c,i.j):l=!!i.o,l?c.o=i.o:l=!!i.g,l?c.g=i.g:l=i.u!=null;var p=i.h;if(l)Ln(c,i.u);else if(l=!!i.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var v=c.h.lastIndexOf("/");v!=-1&&(p=c.h.slice(0,v+1)+p)}if(v=p,v==".."||v==".")p="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){p=v.lastIndexOf("/",0)==0,v=v.split("/");const C=[];for(let k=0;k<v.length;){const W=v[k++];W=="."?p&&k==v.length&&C.push(""):W==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),p&&k==v.length&&C.push("")):(C.push(W),p=!0)}p=C.join("/")}else p=v}return l?c.h=p:l=i.i.toString()!=="",l?zs(c,aa(i.i)):l=!!i.m,l&&(c.m=i.m),c};function Zt(i){return new ge(i)}function xn(i,c,l){i.j=l?Mn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Ln(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function zs(i,c,l){c instanceof Un?(i.i=c,cd(i.i,i.l)):(l||(c=Fn(c,od)),i.i=new Un(c,i.l))}function it(i,c,l){i.i.set(c,l)}function Sr(i){return it(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Mn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Fn(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,rd),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function rd(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var na=/[#\/\?@]/g,sd=/[#\?:]/g,id=/[#\?]/g,od=/[#\?@]/g,ad=/#/g;function Un(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Le(i){i.g||(i.g=new Map,i.h=0,i.i&&nd(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Un.prototype,n.add=function(i,c){Le(this),this.i=null,i=sn(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function ra(i,c){Le(i),c=sn(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function sa(i,c){return Le(i),c=sn(i,c),i.g.has(c)}n.forEach=function(i,c){Le(this),this.g.forEach(function(l,p){l.forEach(function(v){i.call(c,v,p,this)},this)},this)};function ia(i,c){Le(i);let l=[];if(typeof c=="string")sa(i,c)&&(l=l.concat(i.g.get(sn(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)l=l.concat(i[c]);return l}n.set=function(i,c){return Le(this),this.i=null,i=sn(this,i),sa(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=ia(this,i),i.length>0?String(i[0]):c):c};function oa(i,c,l){ra(i,c),l.length>0&&(i.i=null,i.g.set(sn(i,c),P(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var l=c[p];const v=kn(l);l=ia(this,l);for(let C=0;C<l.length;C++){let k=v;l[C]!==""&&(k+="="+kn(l[C])),i.push(k)}}return this.i=i.join("&")};function aa(i){const c=new Un;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function sn(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function cd(i,c){c&&!i.j&&(Le(i),i.i=null,i.g.forEach(function(l,p){const v=p.toLowerCase();p!=v&&(ra(this,p),oa(this,v,l))},i)),i.j=c}function ud(i,c){const l=new Nn;if(a.Image){const p=new Image;p.onload=f(_e,l,"TestLoadImage: loaded",!0,c,p),p.onerror=f(_e,l,"TestLoadImage: error",!1,c,p),p.onabort=f(_e,l,"TestLoadImage: abort",!1,c,p),p.ontimeout=f(_e,l,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else c(!1)}function ld(i,c){const l=new Nn,p=new AbortController,v=setTimeout(()=>{p.abort(),_e(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:p.signal}).then(C=>{clearTimeout(v),C.ok?_e(l,"TestPingServer: ok",!0,c):_e(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(v),_e(l,"TestPingServer: error",!1,c)})}function _e(i,c,l,p,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),p(l)}catch{}}function hd(){this.g=new Wh}function Hs(i){this.i=i.Sb||null,this.h=i.ab||!1}m(Hs,Mo),Hs.prototype.g=function(){return new Cr(this.i,this.h)};function Cr(i,c){Nt.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Cr,Nt),n=Cr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,jn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ca(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function ca(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Bn(this):jn(this),this.readyState==3&&ca(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Bn(this))},n.Na=function(i){this.g&&(this.response=i,Bn(this))},n.ga=function(){this.g&&Bn(this)};function Bn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,jn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function jn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ua(i){let c="";return ct(i,function(l,p){c+=p,c+=":",c+=l,c+=`\r
`}),c}function Gs(i,c,l){t:{for(p in l){var p=!1;break t}p=!0}p||(l=ua(l),typeof i=="string"?l!=null&&kn(l):it(i,c,l))}function dt(i){Nt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(dt,Nt);var dd=/^https?$/i,fd=["POST","PUT"];n=dt.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,l,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():zo.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(C){la(this,C);return}if(i=l||"",l=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var v in p)l.set(v,p[v]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())l.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(l.keys()).find(C=>C.toLowerCase()=="content-type"),v=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(fd,c,void 0)>=0)||p||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,k]of l)this.g.setRequestHeader(C,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(C){la(this,C)}};function la(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,ha(i),Pr(i)}function ha(i){i.A||(i.A=!0,Mt(i,"complete"),Mt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Mt(this,"complete"),Mt(this,"abort"),Pr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pr(this,!0)),dt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?da(this):this.Xa())},n.Xa=function(){da(this)};function da(i){if(i.h&&typeof o<"u"){if(i.v&&ye(i)==4)setTimeout(i.Ca.bind(i),0);else if(Mt(i,"readystatechange"),ye(i)==4){i.h=!1;try{const C=i.ca();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var p;if(p=C===0){let k=String(i.D).match(ea)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),p=!dd.test(k?k.toLowerCase():"")}l=p}if(l)Mt(i,"complete"),Mt(i,"success");else{i.o=6;try{var v=ye(i)>2?i.g.statusText:""}catch{v=""}i.l=v+" ["+i.ca()+"]",ha(i)}}finally{Pr(i)}}}}function Pr(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,c||Mt(i,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ye(i){return i.g?i.g.readyState:0}n.ca=function(){try{return ye(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Gh(c)}};function fa(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function pd(i){const c={};i=(i.g&&ye(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(_(i[p]))continue;var l=Yh(i[p]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const C=c[v]||[];c[v]=C,C.push(l)}Vt(c,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function pa(i){this.za=0,this.i=[],this.j=new Nn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qn("baseRetryDelayMs",5e3,i),this.Za=qn("retryDelaySeedMs",1e4,i),this.Ta=qn("forwardChannelMaxRetries",2,i),this.va=qn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Xo(i&&i.concurrentRequestLimit),this.Ba=new hd,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=pa.prototype,n.ka=8,n.I=1,n.connect=function(i,c,l,p){Ft(0),this.W=i,this.H=c||{},l&&p!==void 0&&(this.H.OSID=l,this.H.OAID=p),this.F=this.X,this.J=Ia(this,null,this.W),Dr(this)};function Ws(i){if(ma(i),i.I==3){var c=i.V++,l=Zt(i.J);if(it(l,"SID",i.M),it(l,"RID",c),it(l,"TYPE","terminate"),$n(i,l),c=new me(i,i.j,c),c.M=2,c.A=Sr(Zt(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=va(c.j,null),c.g.ea(c.A)),c.F=Date.now(),br(c)}Aa(i)}function Vr(i){i.g&&(Qs(i),i.g.cancel(),i.g=null)}function ma(i){Vr(i),i.v&&(a.clearTimeout(i.v),i.v=null),Nr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Dr(i){if(!Jo(i.h)&&!i.m){i.m=!0;var c=i.Ea;J||g(),et||(J(),et=!0),E.add(c,i),i.D=0}}function md(i,c){return Yo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Dn(d(i.Ea,i,c),wa(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const v=new me(this,this.j,i);let C=this.o;if(this.U&&(C?(C=ut(C),Rt(C,this.U)):C=this.U),this.u!==null||this.R||(v.J=C,C=null),this.S)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var p=this.i[l];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=_a(this,v,c),l=Zt(this.J),it(l,"RID",i),it(l,"CVER",22),this.G&&it(l,"X-HTTP-Session-Id",this.G),$n(this,l),C&&(this.R?c="headers="+kn(ua(C))+"&"+c:this.u&&Gs(l,this.u,C)),$s(this.h,v),this.Ra&&it(l,"TYPE","init"),this.S?(it(l,"$req",c),it(l,"SID","null"),v.U=!0,Us(v,l,null)):Us(v,l,c),this.I=2}}else this.I==3&&(i?ga(this,i):this.i.length==0||Jo(this.h)||ga(this))};function ga(i,c){var l;c?l=c.l:l=i.V++;const p=Zt(i.J);it(p,"SID",i.M),it(p,"RID",l),it(p,"AID",i.K),$n(i,p),i.u&&i.o&&Gs(p,i.u,i.o),l=new me(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),c&&(i.i=c.G.concat(i.i)),c=_a(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),$s(i.h,l),Us(l,p,c)}function $n(i,c){i.H&&ct(i.H,function(l,p){it(c,p,l)}),i.l&&ct({},function(l,p){it(c,p,l)})}function _a(i,c,l){l=Math.min(i.i.length,l);const p=i.l?d(i.l.Ka,i.l,i):null;t:{var v=i.i;let W=-1;for(;;){const Tt=["count="+l];W==-1?l>0?(W=v[0].g,Tt.push("ofs="+W)):W=0:Tt.push("ofs="+W);let rt=!0;for(let It=0;It<l;It++){var C=v[It].g;const te=v[It].map;if(C-=W,C<0)W=Math.max(0,v[It].g-100),rt=!1;else try{C="req"+C+"_"||"";try{var k=te instanceof Map?te:Object.entries(te);for(const[Fe,Ee]of k){let Te=Ee;u(Ee)&&(Te=Os(Ee)),Tt.push(C+Fe+"="+encodeURIComponent(Te))}}catch(Fe){throw Tt.push(C+"type="+encodeURIComponent("_badmap")),Fe}}catch{p&&p(te)}}if(rt){k=Tt.join("&");break t}}k=void 0}return i=i.i.splice(0,l),c.G=i,k}function ya(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;J||g(),et||(J(),et=!0),E.add(c,i),i.A=0}}function Ks(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Dn(d(i.Da,i),wa(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Ea(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Dn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ft(10),Vr(this),Ea(this))};function Qs(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Ea(i){i.g=new me(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Zt(i.na);it(c,"RID","rpc"),it(c,"SID",i.M),it(c,"AID",i.K),it(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&it(c,"TO",i.ia),it(c,"TYPE","xmlhttp"),$n(i,c),i.u&&i.o&&Gs(c,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=Sr(Zt(c)),l.u=null,l.R=!0,Wo(l,i)}n.Va=function(){this.C!=null&&(this.C=null,Vr(this),Ks(this),Ft(19))};function Nr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Ta(i,c){var l=null;if(i.g==c){Nr(i),Qs(i),i.g=null;var p=2}else if(qs(i.h,c))l=c.G,Zo(i.h,c),p=1;else return;if(i.I!=0){if(c.o)if(p==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var v=i.D;p=vr(),Mt(p,new qo(p,l)),Dr(i)}else ya(i);else if(v=c.m,v==3||v==0&&c.X>0||!(p==1&&md(i,c)||p==2&&Ks(i)))switch(l&&l.length>0&&(c=i.h,c.i=c.i.concat(l)),v){case 1:Me(i,5);break;case 4:Me(i,10);break;case 3:Me(i,6);break;default:Me(i,2)}}}function wa(i,c){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*c}function Me(i,c){if(i.j.info("Error code "+c),c==2){var l=d(i.bb,i),p=i.Ua;const v=!p;p=new ge(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||xn(p,"https"),Sr(p),v?ud(p.toString(),l):ld(p.toString(),l)}else Ft(2);i.I=0,i.l&&i.l.pa(c),Aa(i),ma(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function Aa(i){if(i.I=0,i.ja=[],i.l){const c=ta(i.h);(c.length!=0||i.i.length!=0)&&(R(i.ja,c),R(i.ja,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.oa()}}function Ia(i,c,l){var p=l instanceof ge?Zt(l):new ge(l);if(p.g!="")c&&(p.g=c+"."+p.g),Ln(p,p.u);else{var v=a.location;p=v.protocol,c=c?c+"."+v.hostname:v.hostname,v=+v.port;const C=new ge(null);p&&xn(C,p),c&&(C.g=c),v&&Ln(C,v),l&&(C.h=l),p=C}return l=i.G,c=i.wa,l&&c&&it(p,l,c),it(p,"VER",i.ka),$n(i,p),p}function va(i,c,l){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new dt(new Hs({ab:l})):new dt(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ra(){}n=Ra.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function kr(){}kr.prototype.g=function(i,c){return new $t(i,c)};function $t(i,c){Nt.call(this),this.g=new pa(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!_(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new on(this)}m($t,Nt),$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Ws(this.g)},$t.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=Os(i),i=l);c.i.push(new ed(c.Ya++,i)),c.I==3&&Dr(c)},$t.prototype.N=function(){this.g.l=null,delete this.j,Ws(this.g),delete this.g,$t.Z.N.call(this)};function ba(i){xs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const l in c){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}m(ba,xs);function Sa(){Ls.call(this),this.status=1}m(Sa,Ls);function on(i){this.g=i}m(on,Ra),on.prototype.ra=function(){Mt(this.g,"a")},on.prototype.qa=function(i){Mt(this.g,new ba(i))},on.prototype.pa=function(i){Mt(this.g,new Sa)},on.prototype.oa=function(){Mt(this.g,"b")},kr.prototype.createWebChannel=kr.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,tl=function(){return new kr},Zu=function(){return vr()},Yu=Oe,wi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Rr.NO_ERROR=0,Rr.TIMEOUT=8,Rr.HTTP_ERROR=6,Gr=Rr,$o.COMPLETE="complete",Ju=$o,Fo.EventType=Pn,Pn.OPEN="a",Pn.CLOSE="b",Pn.ERROR="c",Pn.MESSAGE="d",Nt.prototype.listen=Nt.prototype.J,Gn=Fo,dt.prototype.listenOnce=dt.prototype.K,dt.prototype.getLastError=dt.prototype.Ha,dt.prototype.getLastErrorCode=dt.prototype.ya,dt.prototype.getStatus=dt.prototype.ca,dt.prototype.getResponseJson=dt.prototype.La,dt.prototype.getResponseText=dt.prototype.la,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Fa,Xu=dt}).apply(typeof Lr<"u"?Lr:typeof self<"u"?self:typeof window<"u"?window:{});const nc="@firebase/firestore",rc="4.9.2";/**
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
 */class Ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
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
 */let In="12.3.0";/**
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
 */const We=new Uu("@firebase/firestore");function an(){return We.logLevel}function L(n,...t){if(We.logLevel<=tt.DEBUG){const e=t.map(zi);We.debug(`Firestore (${In}): ${n}`,...e)}}function fe(n,...t){if(We.logLevel<=tt.ERROR){const e=t.map(zi);We.error(`Firestore (${In}): ${n}`,...e)}}function mn(n,...t){if(We.logLevel<=tt.WARN){const e=t.map(zi);We.warn(`Firestore (${In}): ${n}`,...e)}}function zi(n){if(typeof n=="string")return n;try{/**
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
 */function j(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,el(n,r,e)}function el(n,t,e){let r=`FIRESTORE (${In}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw fe(r),new Error(r)}function nt(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||el(t,s,r)}function z(n,t){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Xe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $e{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class nl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Am{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ot.UNAUTHENTICATED)))}shutdown(){}}class Im{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class vm{constructor(t){this.t=t,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){nt(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new $e;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new $e,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},u=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>u(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new $e)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string",31837,{l:r}),new nl(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string",2055,{h:t}),new Ot(t)}}class Rm{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class bm{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Rm(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class sc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sm{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$u(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){nt(this.o===void 0,3512);const r=o=>{o.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new sc(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(nt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new sc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Cm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Hi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Cm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function Q(n,t){return n<t?-1:n>t?1:0}function Ai(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return si(s)===si(o)?Q(s,o):si(s)?1:-1}return Q(n.length,t.length)}const Pm=55296,Vm=57343;function si(n){const t=n.charCodeAt(0);return t>=Pm&&t<=Vm}function gn(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
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
 */const ic="__name__";class ne{constructor(t,e,r){e===void 0?e=0:e>t.length&&j(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&j(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ne.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ne?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=ne.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return Q(t.length,e.length)}static compareSegments(t,e){const r=ne.isNumericId(t),s=ne.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?ne.extractNumericId(t).compare(ne.extractNumericId(e)):Ai(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return be.fromString(t.substring(4,t.length-2))}}class st extends ne{construct(t,e,r){return new st(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new st(e)}static emptyPath(){return new st([])}}const Dm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends ne{construct(t,e,r){return new Ct(t,e,r)}static isValidIdentifier(t){return Dm.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ic}static keyField(){return new Ct([ic])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new O(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new O(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ct(e)}static emptyPath(){return new Ct([])}}/**
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
 */function rl(n,t,e){if(!e)throw new O(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Nm(n,t,e,r){if(t===!0&&r===!0)throw new O(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function oc(n){if(!U.isDocumentKey(n))throw new O(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ac(n){if(U.isDocumentKey(n))throw new O(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sl(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ys(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function Jn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ys(n);throw new O(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function Et(n,t){const e={typeString:n};return t&&(e.value=t),e}function yr(n,t){if(!sl(n))throw new O(D.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new O(D.INVALID_ARGUMENT,e);return!0}/**
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
 */const cc=-62135596800,uc=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*uc);return new ot(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<cc)throw new O(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uc}_compareTo(t){return this.seconds===t.seconds?Q(this.nanoseconds,t.nanoseconds):Q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ot._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(yr(t,ot._jsonSchema))return new ot(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-cc;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ot._jsonSchemaVersion="firestore/timestamp/1.0",ot._jsonSchema={type:Et("string",ot._jsonSchemaVersion),seconds:Et("number"),nanoseconds:Et("number")};/**
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
 */class ${static fromTimestamp(t){return new $(t)}static min(){return new $(new ot(0,0))}static max(){return new $(new ot(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ir=-1;function km(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new Ce(s,U.empty(),t)}function Om(n){return new Ce(n.readTime,n.key,ir)}class Ce{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ce($.min(),U.empty(),ir)}static max(){return new Ce($.max(),U.empty(),ir)}}function xm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=U.comparator(n.documentKey,t.documentKey),e!==0?e:Q(n.largestBatchId,t.largestBatchId))}/**
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
 */const Lm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function vn(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Lm)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new N(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof N?e:N.resolve(e)}catch(e){return N.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):N.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):N.reject(e)}static resolve(t){return new N(((e,r)=>{e(t)}))}static reject(t){return new N(((e,r)=>{r(t)}))}static waitFor(t){return new N(((e,r)=>{let s=0,o=0,a=!1;t.forEach((u=>{++s,u.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=N.resolve(!1);for(const r of t)e=e.next((s=>s?N.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new N(((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((f=>{a[d]=f,++u,u===o&&r(a)}),(f=>s(f)))}}))}static doWhile(t,e){return new N(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function Fm(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Rn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Es{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Es.ce=-1;/**
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
 */const Gi=-1;function Ts(n){return n==null}function ns(n){return n===0&&1/n==-1/0}function Um(n){return typeof n=="number"&&Number.isInteger(n)&&!ns(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const il="";function Bm(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=lc(t)),t=jm(n.get(e),t);return lc(t)}function jm(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case il:e+="";break;default:e+=o}}return e}function lc(n){return n+il+""}/**
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
 */function hc(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Je(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ol(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class lt{constructor(t,e){this.comparator=t,this.root=e||St.EMPTY}insert(t,e){return new lt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,St.BLACK,null,null))}remove(t){return new lt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,St.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Mr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Mr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Mr(this.root,t,this.comparator,!0)}}class Mr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class St{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??St.RED,this.left=s??St.EMPTY,this.right=o??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new St(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return St.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw j(27949);return t+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new St(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class At{constructor(t){this.comparator=t,this.data=new lt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new dc(this.data.getIterator())}getIteratorFrom(t){return new dc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof At)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new At(this.comparator);return e.data=t,e}}class dc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(t){this.fields=t,t.sort(Ct.comparator)}static empty(){return new Wt([])}unionWith(t){let e=new At(Ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return gn(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class al extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new al("Invalid base64 string: "+o):o}})(t);return new Pt(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new Pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const qm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pe(n){if(nt(!!n,39018),typeof n=="string"){let t=0;const e=qm.exec(n);if(nt(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ve(n){return typeof n=="string"?Pt.fromBase64String(n):Pt.fromUint8Array(n)}/**
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
 */const cl="server_timestamp",ul="__type__",ll="__previous_value__",hl="__local_write_time__";function Wi(n){return(n?.mapValue?.fields||{})[ul]?.stringValue===cl}function ws(n){const t=n.mapValue.fields[ll];return Wi(t)?ws(t):t}function or(n){const t=Pe(n.mapValue.fields[hl].timestampValue);return new ot(t.seconds,t.nanos)}/**
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
 */class $m{constructor(t,e,r,s,o,a,u,h,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=f}}const rs="(default)";class ar{constructor(t,e){this.projectId=t,this.database=e||rs}static empty(){return new ar("","")}get isDefaultDatabase(){return this.database===rs}isEqual(t){return t instanceof ar&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const dl="__type__",zm="__max__",Fr={mapValue:{}},fl="__vector__",ss="value";function De(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wi(n)?4:Gm(n)?9007199254740991:Hm(n)?10:11:j(28295,{value:n})}function ce(n,t){if(n===t)return!0;const e=De(n);if(e!==De(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return or(n).isEqual(or(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Pe(s.timestampValue),u=Pe(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return Ve(s.bytesValue).isEqual(Ve(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return mt(s.geoPointValue.latitude)===mt(o.geoPointValue.latitude)&&mt(s.geoPointValue.longitude)===mt(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return mt(s.integerValue)===mt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=mt(s.doubleValue),u=mt(o.doubleValue);return a===u?ns(a)===ns(u):isNaN(a)&&isNaN(u)}return!1})(n,t);case 9:return gn(n.arrayValue.values||[],t.arrayValue.values||[],ce);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(hc(a)!==hc(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!ce(a[h],u[h])))return!1;return!0})(n,t);default:return j(52216,{left:n})}}function cr(n,t){return(n.values||[]).find((e=>ce(e,t)))!==void 0}function _n(n,t){if(n===t)return 0;const e=De(n),r=De(t);if(e!==r)return Q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const u=mt(o.integerValue||o.doubleValue),h=mt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1})(n,t);case 3:return fc(n.timestampValue,t.timestampValue);case 4:return fc(or(n),or(t));case 5:return Ai(n.stringValue,t.stringValue);case 6:return(function(o,a){const u=Ve(o),h=Ve(a);return u.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const f=Q(u[d],h[d]);if(f!==0)return f}return Q(u.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const u=Q(mt(o.latitude),mt(a.latitude));return u!==0?u:Q(mt(o.longitude),mt(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return pc(n.arrayValue,t.arrayValue);case 10:return(function(o,a){const u=o.fields||{},h=a.fields||{},d=u[ss]?.arrayValue,f=h[ss]?.arrayValue,m=Q(d?.values?.length||0,f?.values?.length||0);return m!==0?m:pc(d,f)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Fr.mapValue&&a===Fr.mapValue)return 0;if(o===Fr.mapValue)return 1;if(a===Fr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},f=Object.keys(d);h.sort(),f.sort();for(let m=0;m<h.length&&m<f.length;++m){const A=Ai(h[m],f[m]);if(A!==0)return A;const P=_n(u[h[m]],d[f[m]]);if(P!==0)return P}return Q(h.length,f.length)})(n.mapValue,t.mapValue);default:throw j(23264,{he:e})}}function fc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Q(n,t);const e=Pe(n),r=Pe(t),s=Q(e.seconds,r.seconds);return s!==0?s:Q(e.nanos,r.nanos)}function pc(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=_n(e[s],r[s]);if(o)return o}return Q(e.length,r.length)}function yn(n){return Ii(n)}function Ii(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Pe(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Ve(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return U.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ii(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ii(e.fields[a])}`;return s+"}"})(n.mapValue):j(61005,{value:n})}function Wr(n){switch(De(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ws(n);return t?16+Wr(t):16;case 5:return 2*n.stringValue.length;case 6:return Ve(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+Wr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Je(r.fields,((o,a)=>{s+=o.length+Wr(a)})),s})(n.mapValue);default:throw j(13486,{value:n})}}function mc(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function vi(n){return!!n&&"integerValue"in n}function Ki(n){return!!n&&"arrayValue"in n}function gc(n){return!!n&&"nullValue"in n}function _c(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Kr(n){return!!n&&"mapValue"in n}function Hm(n){return(n?.mapValue?.fields||{})[dl]?.stringValue===fl}function Yn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Je(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Yn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Yn(n.arrayValue.values[e]);return t}return{...n}}function Gm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===zm}/**
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
 */class Ht{constructor(t){this.value=t}static empty(){return new Ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Kr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Yn(e)}setAll(t){let e=Ct.emptyPath(),r={},s=[];t.forEach(((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=Yn(a):s.push(u.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Kr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ce(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Kr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Je(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new Ht(Yn(this.value))}}function pl(n){const t=[];return Je(n.fields,((e,r)=>{const s=new Ct([e]);if(Kr(r)){const o=pl(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Wt(t)}/**
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
 */class xt{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new xt(t,0,$.min(),$.min(),$.min(),Ht.empty(),0)}static newFoundDocument(t,e,r,s){return new xt(t,1,e,$.min(),r,s,0)}static newNoDocument(t,e){return new xt(t,2,e,$.min(),$.min(),Ht.empty(),0)}static newUnknownDocument(t,e){return new xt(t,3,e,$.min(),$.min(),Ht.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class is{constructor(t,e){this.position=t,this.inclusive=e}}function yc(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),e.key):r=_n(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ec(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ce(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ur{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ml{}class yt extends ml{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Qm(t,e,r):e==="array-contains"?new Ym(t,r):e==="in"?new Zm(t,r):e==="not-in"?new tg(t,r):e==="array-contains-any"?new eg(t,r):new yt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Xm(t,r):new Jm(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(_n(e,this.value)):e!==null&&De(this.value)===De(e)&&this.matchesComparison(_n(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends ml{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Qt(t,e)}matches(t){return gl(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gl(n){return n.op==="and"}function _l(n){return Km(n)&&gl(n)}function Km(n){for(const t of n.filters)if(t instanceof Qt)return!1;return!0}function Ri(n){if(n instanceof yt)return n.field.canonicalString()+n.op.toString()+yn(n.value);if(_l(n))return n.filters.map((t=>Ri(t))).join(",");{const t=n.filters.map((e=>Ri(e))).join(",");return`${n.op}(${t})`}}function yl(n,t){return n instanceof yt?(function(r,s){return s instanceof yt&&r.op===s.op&&r.field.isEqual(s.field)&&ce(r.value,s.value)})(n,t):n instanceof Qt?(function(r,s){return s instanceof Qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,u)=>o&&yl(a,s.filters[u])),!0):!1})(n,t):void j(19439)}function El(n){return n instanceof yt?(function(e){return`${e.field.canonicalString()} ${e.op} ${yn(e.value)}`})(n):n instanceof Qt?(function(e){return e.op.toString()+" {"+e.getFilters().map(El).join(" ,")+"}"})(n):"Filter"}class Qm extends yt{constructor(t,e,r){super(t,e,r),this.key=U.fromName(r.referenceValue)}matches(t){const e=U.comparator(t.key,this.key);return this.matchesComparison(e)}}class Xm extends yt{constructor(t,e){super(t,"in",e),this.keys=Tl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Jm extends yt{constructor(t,e){super(t,"not-in",e),this.keys=Tl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Tl(n,t){return(t.arrayValue?.values||[]).map((e=>U.fromName(e.referenceValue)))}class Ym extends yt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ki(e)&&cr(e.arrayValue,this.value)}}class Zm extends yt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&cr(this.value.arrayValue,e)}}class tg extends yt{constructor(t,e){super(t,"not-in",e)}matches(t){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!cr(this.value.arrayValue,e)}}class eg extends yt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ki(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>cr(this.value.arrayValue,r)))}}/**
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
 */class ng{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function Tc(n,t=null,e=[],r=[],s=null,o=null,a=null){return new ng(n,t,e,r,s,o,a)}function Qi(n){const t=z(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Ri(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Ts(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>yn(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>yn(r))).join(",")),t.Te=e}return t.Te}function Xi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Wm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!yl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ec(n.startAt,t.startAt)&&Ec(n.endAt,t.endAt)}function bi(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class bn{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function rg(n,t,e,r,s,o,a,u){return new bn(n,t,e,r,s,o,a,u)}function Ji(n){return new bn(n)}function wc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wl(n){return n.collectionGroup!==null}function Zn(n){const t=z(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new At(Ct.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new ur(o,r))})),e.has(Ct.keyField().canonicalString())||t.Ie.push(new ur(Ct.keyField(),r))}return t.Ie}function se(n){const t=z(n);return t.Ee||(t.Ee=sg(t,Zn(n))),t.Ee}function sg(n,t){if(n.limitType==="F")return Tc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new ur(s.field,o)}));const e=n.endAt?new is(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new is(n.startAt.position,n.startAt.inclusive):null;return Tc(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Si(n,t){const e=n.filters.concat([t]);return new bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ci(n,t,e){return new bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function As(n,t){return Xi(se(n),se(t))&&n.limitType===t.limitType}function Al(n){return`${Qi(se(n))}|lt:${n.limitType}`}function cn(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>El(s))).join(", ")}]`),Ts(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>yn(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>yn(s))).join(",")),`Target(${r})`})(se(n))}; limitType=${n.limitType})`}function Is(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):U.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of Zn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,u,h){const d=yc(a,u,h);return a.inclusive?d<=0:d<0})(r.startAt,Zn(r),s)||r.endAt&&!(function(a,u,h){const d=yc(a,u,h);return a.inclusive?d>=0:d>0})(r.endAt,Zn(r),s))})(n,t)}function ig(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Il(n){return(t,e)=>{let r=!1;for(const s of Zn(n)){const o=og(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function og(n,t,e){const r=n.field.isKeyField()?U.comparator(t.key,e.key):(function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?_n(h,d):j(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j(19790,{direction:n.dir})}}/**
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
 */class Ye{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Je(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return ol(this.inner)}size(){return this.innerSize}}/**
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
 */const ag=new lt(U.comparator);function pe(){return ag}const vl=new lt(U.comparator);function Wn(...n){let t=vl;for(const e of n)t=t.insert(e.key,e);return t}function Rl(n){let t=vl;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function je(){return tr()}function bl(){return tr()}function tr(){return new Ye((n=>n.toString()),((n,t)=>n.isEqual(t)))}const cg=new lt(U.comparator),ug=new At(U.comparator);function X(...n){let t=ug;for(const e of n)t=t.add(e);return t}const lg=new At(Q);function hg(){return lg}/**
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
 */function Yi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ns(t)?"-0":t}}function Sl(n){return{integerValue:""+n}}function dg(n,t){return Um(t)?Sl(t):Yi(n,t)}/**
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
 */class vs{constructor(){this._=void 0}}function fg(n,t,e){return n instanceof lr?(function(s,o){const a={fields:{[ul]:{stringValue:cl},[hl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Wi(o)&&(o=ws(o)),o&&(a.fields[ll]=o),{mapValue:a}})(e,t):n instanceof hr?Pl(n,t):n instanceof dr?Vl(n,t):(function(s,o){const a=Cl(s,o),u=Ac(a)+Ac(s.Ae);return vi(a)&&vi(s.Ae)?Sl(u):Yi(s.serializer,u)})(n,t)}function pg(n,t,e){return n instanceof hr?Pl(n,t):n instanceof dr?Vl(n,t):e}function Cl(n,t){return n instanceof os?(function(r){return vi(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class lr extends vs{}class hr extends vs{constructor(t){super(),this.elements=t}}function Pl(n,t){const e=Dl(t);for(const r of n.elements)e.some((s=>ce(s,r)))||e.push(r);return{arrayValue:{values:e}}}class dr extends vs{constructor(t){super(),this.elements=t}}function Vl(n,t){let e=Dl(t);for(const r of n.elements)e=e.filter((s=>!ce(s,r)));return{arrayValue:{values:e}}}class os extends vs{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Ac(n){return mt(n.integerValue||n.doubleValue)}function Dl(n){return Ki(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class mg{constructor(t,e){this.field=t,this.transform=e}}function gg(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof hr&&s instanceof hr||r instanceof dr&&s instanceof dr?gn(r.elements,s.elements,ce):r instanceof os&&s instanceof os?ce(r.Ae,s.Ae):r instanceof lr&&s instanceof lr})(n.transform,t.transform)}class _g{constructor(t,e){this.version=t,this.transformResults=e}}class he{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new he}static exists(t){return new he(void 0,t)}static updateTime(t){return new he(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Qr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Rs{}function Nl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ol(n.key,he.none()):new Er(n.key,n.data,he.none());{const e=n.data,r=Ht.empty();let s=new At(Ct.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ze(n.key,r,new Wt(s.toArray()),he.none())}}function yg(n,t,e){n instanceof Er?(function(s,o,a){const u=s.value.clone(),h=vc(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,t,e):n instanceof Ze?(function(s,o,a){if(!Qr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=vc(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(kl(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function er(n,t,e,r){return n instanceof Er?(function(o,a,u,h){if(!Qr(o.precondition,a))return u;const d=o.value.clone(),f=Rc(o.fieldTransforms,h,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof Ze?(function(o,a,u,h){if(!Qr(o.precondition,a))return u;const d=Rc(o.fieldTransforms,h,a),f=a.data;return f.setAll(kl(o)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((m=>m.field)))})(n,t,e,r):(function(o,a,u){return Qr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(n,t,e)}function Eg(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Cl(r.transform,s||null);o!=null&&(e===null&&(e=Ht.empty()),e.set(r.field,o))}return e||null}function Ic(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gn(r,s,((o,a)=>gg(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Er extends Rs{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ze extends Rs{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function kl(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function vc(n,t,e){const r=new Map;nt(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,pg(a,u,e[s]))}return r}function Rc(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,fg(o,a,t))}return r}class Ol extends Rs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tg extends Rs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wg{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&yg(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=er(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=er(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=bl();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Nl(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument($.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),X())}isEqual(t){return this.batchId===t.batchId&&gn(this.mutations,t.mutations,((e,r)=>Ic(e,r)))&&gn(this.baseMutations,t.baseMutations,((e,r)=>Ic(e,r)))}}class Zi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){nt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return cg})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Zi(t,e,r,s)}}/**
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
 */class Ag{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ig{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var _t,Z;function vg(n){switch(n){case D.OK:return j(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function xl(n){if(n===void 0)return fe("GRPC error has no .code"),D.UNKNOWN;switch(n){case _t.OK:return D.OK;case _t.CANCELLED:return D.CANCELLED;case _t.UNKNOWN:return D.UNKNOWN;case _t.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case _t.INTERNAL:return D.INTERNAL;case _t.UNAVAILABLE:return D.UNAVAILABLE;case _t.UNAUTHENTICATED:return D.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case _t.NOT_FOUND:return D.NOT_FOUND;case _t.ALREADY_EXISTS:return D.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return D.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case _t.ABORTED:return D.ABORTED;case _t.OUT_OF_RANGE:return D.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return D.UNIMPLEMENTED;case _t.DATA_LOSS:return D.DATA_LOSS;default:return j(39323,{code:n})}}(Z=_t||(_t={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Rg(){return new TextEncoder}/**
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
 */const bg=new be([4294967295,4294967295],0);function bc(n){const t=Rg().encode(n),e=new Qu;return e.update(t),new Uint8Array(e.digest())}function Sc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new be([e,r],0),new be([s,o],0)]}class to{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Kn(`Invalid padding: ${e}`);if(r<0)throw new Kn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Kn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Kn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=be.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(be.fromNumber(r)));return s.compare(bg)===1&&(s=new be([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=bc(t),[r,s]=Sc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new to(o,s,e);return r.forEach((u=>a.insert(u))),a}insert(t){if(this.ge===0)return;const e=bc(t),[r,s]=Sc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class bs{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Tr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new bs($.min(),s,new lt(Q),pe(),X())}}class Tr{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Tr(r,e,X(),X(),X())}}/**
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
 */class Xr{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Ll{constructor(t,e){this.targetId=t,this.Ce=e}}class Ml{constructor(t,e,r=Pt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Cc{constructor(){this.ve=0,this.Fe=Pc(),this.Me=Pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=X(),e=X(),r=X();return this.Fe.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:j(38017,{changeType:o})}})),new Tr(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Pc()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,nt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Sg{constructor(t){this.Ge=t,this.ze=new Map,this.je=pe(),this.Je=Ur(),this.He=Ur(),this.Ye=new lt(Q)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:j(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(bi(o))if(r===0){const a=new U(o.path);this.et(e,a,xt.newNoDocument(a,$.min()))}else nt(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const u=this.ut(t),h=u?this.ct(u,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=Ve(r).toUint8Array()}catch(h){if(h instanceof al)return mn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new to(a,s,o)}catch(h){return mn(h instanceof Kn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.et(e,o,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const u=this.ot(a);if(u){if(o.current&&bi(u.target)){const h=new U(u.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,xt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}}));let r=X();this.He.forEach(((o,a)=>{let u=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const s=new bs(t,e,this.Ye,this.je,r);return this.je=pe(),this.Je=Ur(),this.He=Ur(),this.Ye=new lt(Q),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Cc,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new At(Q),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new At(Q),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||L("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Cc),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Ur(){return new lt(U.comparator)}function Pc(){return new lt(U.comparator)}const Cg={asc:"ASCENDING",desc:"DESCENDING"},Pg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vg={and:"AND",or:"OR"};class Dg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Pi(n,t){return n.useProto3Json||Ts(t)?t:{value:t}}function as(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ng(n,t){return as(n,t.toTimestamp())}function ie(n){return nt(!!n,49232),$.fromTimestamp((function(e){const r=Pe(e);return new ot(r.seconds,r.nanos)})(n))}function eo(n,t){return Vi(n,t).canonicalString()}function Vi(n,t){const e=(function(s){return new st(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Ul(n){const t=st.fromString(n);return nt(zl(t),10190,{key:t.toString()}),t}function Di(n,t){return eo(n.databaseId,t.path)}function ii(n,t){const e=Ul(t);if(e.get(1)!==n.databaseId.projectId)throw new O(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new U(jl(e))}function Bl(n,t){return eo(n.databaseId,t)}function kg(n){const t=Ul(n);return t.length===4?st.emptyPath():jl(t)}function Ni(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function jl(n){return nt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Vc(n,t,e){return{name:Di(n,t),fields:e.value.mapValue.fields}}function Og(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,f){return d.useProto3Json?(nt(f===void 0||typeof f=="string",58123),Pt.fromBase64String(f||"")):(nt(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Pt.fromUint8Array(f||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&(function(d){const f=d.code===void 0?D.UNKNOWN:xl(d.code);return new O(f,d.message||"")})(a);e=new Ml(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ii(n,r.document.name),o=ie(r.document.updateTime),a=r.document.createTime?ie(r.document.createTime):$.min(),u=new Ht({mapValue:{fields:r.document.fields}}),h=xt.newFoundDocument(s,o,a,u),d=r.targetIds||[],f=r.removedTargetIds||[];e=new Xr(d,f,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ii(n,r.document),o=r.readTime?ie(r.readTime):$.min(),a=xt.newNoDocument(s,o),u=r.removedTargetIds||[];e=new Xr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ii(n,r.document),o=r.removedTargetIds||[];e=new Xr([],o,s,null)}else{if(!("filter"in t))return j(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Ig(s,o),u=r.targetId;e=new Ll(u,a)}}return e}function xg(n,t){let e;if(t instanceof Er)e={update:Vc(n,t.key,t.value)};else if(t instanceof Ol)e={delete:Di(n,t.key)};else if(t instanceof Ze)e={update:Vc(n,t.key,t.data),updateMask:zg(t.fieldMask)};else{if(!(t instanceof Tg))return j(16599,{Vt:t.type});e={verify:Di(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const u=a.transform;if(u instanceof lr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof hr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof dr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof os)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw j(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:Ng(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:j(27497)})(n,t.precondition)),e}function Lg(n,t){return n&&n.length>0?(nt(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?ie(s.updateTime):ie(o);return a.isEqual($.min())&&(a=ie(o)),new _g(a,s.transformResults||[])})(e,t)))):[]}function Mg(n,t){return{documents:[Bl(n,t.path)]}}function Fg(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Bl(n,s);const o=(function(d){if(d.length!==0)return $l(Qt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((f=>(function(A){return{field:un(A.field),direction:jg(A.dir)}})(f)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Pi(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:s}}function Ug(n){let t=kg(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){nt(r===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let o=[];e.where&&(o=(function(m){const A=ql(m);return A instanceof Qt&&_l(A)?A.getFilters():[A]})(e.where));let a=[];e.orderBy&&(a=(function(m){return m.map((A=>(function(R){return new ur(ln(R.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(A)))})(e.orderBy));let u=null;e.limit&&(u=(function(m){let A;return A=typeof m=="object"?m.value:m,Ts(A)?null:A})(e.limit));let h=null;e.startAt&&(h=(function(m){const A=!!m.before,P=m.values||[];return new is(P,A)})(e.startAt));let d=null;return e.endAt&&(d=(function(m){const A=!m.before,P=m.values||[];return new is(P,A)})(e.endAt)),rg(t,s,a,o,u,"F",h,d)}function Bg(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ql(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ln(e.unaryFilter.field);return yt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ln(e.unaryFilter.field);return yt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ln(e.unaryFilter.field);return yt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ln(e.unaryFilter.field);return yt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}})(n):n.fieldFilter!==void 0?(function(e){return yt.create(ln(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Qt.create(e.compositeFilter.filters.map((r=>ql(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j(1026)}})(e.compositeFilter.op))})(n):j(30097,{filter:n})}function jg(n){return Cg[n]}function qg(n){return Pg[n]}function $g(n){return Vg[n]}function un(n){return{fieldPath:n.canonicalString()}}function ln(n){return Ct.fromServerFormat(n.fieldPath)}function $l(n){return n instanceof yt?(function(e){if(e.op==="=="){if(_c(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NAN"}};if(gc(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(_c(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NOT_NAN"}};if(gc(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(e.field),op:qg(e.op),value:e.value}}})(n):n instanceof Qt?(function(e){const r=e.getFilters().map((s=>$l(s)));return r.length===1?r[0]:{compositeFilter:{op:$g(e.op),filters:r}}})(n):j(54877,{filter:n})}function zg(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function zl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ae{constructor(t,e,r,s,o=$.min(),a=$.min(),u=Pt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new Ae(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ae(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Hg{constructor(t){this.yt=t}}function Gg(n){const t=Ug({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ci(t,t.limit,"L"):t}/**
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
 */class Wg{constructor(){this.Cn=new Kg}addToCollectionParentIndex(t,e){return this.Cn.add(e),N.resolve()}getCollectionParents(t,e){return N.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return N.resolve()}deleteFieldIndex(t,e){return N.resolve()}deleteAllFieldIndexes(t){return N.resolve()}createTargetIndexes(t,e){return N.resolve()}getDocumentsMatchingTarget(t,e){return N.resolve(null)}getIndexType(t,e){return N.resolve(0)}getFieldIndexes(t,e){return N.resolve([])}getNextCollectionGroupToUpdate(t){return N.resolve(null)}getMinOffset(t,e){return N.resolve(Ce.min())}getMinOffsetFromCollectionGroup(t,e){return N.resolve(Ce.min())}updateCollectionGroup(t,e,r){return N.resolve()}updateIndexEntries(t,e){return N.resolve()}}class Kg{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new At(st.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new At(st.comparator)).toArray()}}/**
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
 */const Dc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hl=41943040;class Bt{static withCacheSize(t){return new Bt(t,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Bt.DEFAULT_COLLECTION_PERCENTILE=10,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bt.DEFAULT=new Bt(Hl,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bt.DISABLED=new Bt(-1,0,0);/**
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
 */class En{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new En(0)}static cr(){return new En(-1)}}/**
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
 */const Nc="LruGarbageCollector",Qg=1048576;function kc([n,t],[e,r]){const s=Q(n,e);return s===0?Q(t,r):s}class Xg{constructor(t){this.Ir=t,this.buffer=new At(kc),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();kc(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Jg{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){L(Nc,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Rn(e)?L(Nc,"Ignoring IndexedDB error during garbage collection: ",e):await vn(e)}await this.Vr(3e5)}))}}class Yg{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return N.resolve(Es.ce);const r=new Xg(e);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Dc)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dc):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,o,a,u,h,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(t,s)))).next((m=>(r=m,u=Date.now(),this.removeTargets(t,r,e)))).next((m=>(o=m,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((m=>(d=Date.now(),an()<=tt.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${m} documents in `+(d-h)+`ms
Total Duration: ${d-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:m}))))}}function Zg(n,t){return new Yg(n,t)}/**
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
 */class t_{constructor(){this.changes=new Ye((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?N.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class e_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class n_{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&er(r.mutation,s,Wt.empty(),ot.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,X()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=X()){const s=je();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=Wn();return o.forEach(((u,h)=>{a=a.insert(u,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=je();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,X())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,u)=>{e.set(a,u)}))}))}computeViews(t,e,r,s){let o=pe();const a=tr(),u=(function(){return tr()})();return e.forEach(((h,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Ze)?o=o.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),er(f.mutation,d,f.mutation.getFieldMask(),ot.now())):a.set(d.key,Wt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,f)=>a.set(d,f))),e.forEach(((d,f)=>u.set(d,new e_(f,a.get(d)??null)))),u)))}recalculateAndSaveOverlays(t,e){const r=tr();let s=new lt(((a,u)=>a-u)),o=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const u of a)u.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let f=r.get(h)||Wt.empty();f=u.applyToLocalView(d,f),r.set(h,f);const m=(s.get(u.batchId)||X()).add(h);s=s.insert(u.batchId,m)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,f=h.value,m=bl();f.forEach((A=>{if(!o.has(A)){const P=Nl(e.get(A),r.get(A));P!==null&&m.set(A,P),o=o.add(A)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,m))}return N.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):wl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):N.resolve(je());let u=ir,h=o;return a.next((d=>N.forEach(d,((f,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),o.get(f)?N.resolve():this.remoteDocumentCache.getEntry(t,f).next((A=>{h=h.insert(f,A)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,X()))).next((f=>({batchId:u,changes:Rl(f)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new U(e)).next((r=>{let s=Wn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Wn();return this.indexManager.getCollectionParents(t,o).next((u=>N.forEach(u,(h=>{const d=(function(m,A){return new bn(A,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((f=>{f.forEach(((m,A)=>{a=a.insert(m,A)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,xt.newInvalidDocument(f)))}));let u=Wn();return a.forEach(((h,d)=>{const f=o.get(h);f!==void 0&&er(f.mutation,d,Wt.empty(),ot.now()),Is(e,d)&&(u=u.insert(h,d))})),u}))}}/**
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
 */class r_{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return N.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:ie(s.createTime)}})(e)),N.resolve()}getNamedQuery(t,e){return N.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(s){return{name:s.name,query:Gg(s.bundledQuery),readTime:ie(s.readTime)}})(e)),N.resolve()}}/**
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
 */class s_{constructor(){this.overlays=new lt(U.comparator),this.qr=new Map}getOverlay(t,e){return N.resolve(this.overlays.get(e))}getOverlays(t,e){const r=je();return N.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.St(t,e,o)})),N.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),N.resolve()}getOverlaysForCollection(t,e,r){const s=je(),o=e.length+1,a=new U(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return N.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new lt(((d,f)=>d-f));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=je(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=je(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,f)=>u.set(d,f))),!(u.size()>=s)););return N.resolve(u)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ag(e,r));let o=this.qr.get(e);o===void 0&&(o=X(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
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
 */class i_{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(t){return N.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,N.resolve()}}/**
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
 */class no{constructor(){this.Qr=new At(vt.$r),this.Ur=new At(vt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new vt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new vt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new U(new st([])),r=new vt(e,t),s=new vt(e,t+1),o=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new U(new st([])),r=new vt(e,t),s=new vt(e,t+1);let o=X();return this.Ur.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new vt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class vt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return U.comparator(t.key,e.key)||Q(t.Yr,e.Yr)}static Kr(t,e){return Q(t.Yr,e.Yr)||U.comparator(t.key,e.key)}}/**
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
 */class o_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new At(vt.$r)}checkEmpty(t){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wg(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Zr=this.Zr.add(new vt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return N.resolve(a)}lookupMutationBatch(t,e){return N.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),o=s<0?0:s;return N.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Gi:this.tr-1)}getAllMutationBatches(t){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new vt(e,0),s=new vt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],(a=>{const u=this.Xr(a.Yr);o.push(u)})),N.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new At(Q);return e.forEach((s=>{const o=new vt(s,0),a=new vt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(u=>{r=r.add(u.Yr)}))})),N.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;U.isDocumentKey(o)||(o=o.child(""));const a=new vt(new U(o),0);let u=new At(Q);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Yr)),!0)}),a),N.resolve(this.ti(u))}ti(t){const e=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){nt(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return N.forEach(e.mutations,(s=>{const o=new vt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new vt(e,0),s=this.Zr.firstAfterOrEqual(r);return N.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,N.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class a_{constructor(t){this.ri=t,this.docs=(function(){return new lt(U.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return N.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(e))}getEntries(t,e){let r=pe();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():xt.newInvalidDocument(s))})),N.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=pe();const a=e.path,u=new U(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:f}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||xm(Om(f),r)<=0||(s.has(f.key)||Is(e,f))&&(o=o.insert(f.key,f.mutableCopy()))}return N.resolve(o)}getAllFromCollectionGroup(t,e,r,s){j(9500)}ii(t,e){return N.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new c_(this)}getSize(t){return N.resolve(this.size)}}class c_ extends t_{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),N.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class u_{constructor(t){this.persistence=t,this.si=new Ye((e=>Qi(e)),Xi),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.oi=0,this._i=new no,this.targetCount=0,this.ai=En.ur()}forEachTarget(t,e){return this.si.forEach(((r,s)=>e(s))),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),N.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new En(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,N.resolve()}updateTargetData(t,e){return this.Pr(e),N.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.si.forEach(((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)})),N.waitFor(o).next((()=>s))}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return N.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),N.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),N.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),N.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return N.resolve(r)}containsKey(t,e){return N.resolve(this._i.containsKey(e))}}/**
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
 */class Gl{constructor(t,e){this.ui={},this.overlays={},this.ci=new Es(0),this.li=!1,this.li=!0,this.hi=new i_,this.referenceDelegate=t(this),this.Pi=new u_(this),this.indexManager=new Wg,this.remoteDocumentCache=(function(s){return new a_(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Hg(e),this.Ii=new r_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new s_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new o_(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){L("MemoryPersistence","Starting transaction:",t);const s=new l_(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ai(t,e){return N.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class l_ extends Mm{constructor(t){super(),this.currentSequenceNumber=t}}class ro{constructor(t){this.persistence=t,this.Ri=new no,this.Vi=null}static mi(t){return new ro(t)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),N.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),N.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.fi,(r=>{const s=U.fromPath(r);return this.gi(t,s).next((o=>{o||e.removeEntry(s,$.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return N.or([()=>N.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class cs{constructor(t,e){this.persistence=t,this.pi=new Ye((r=>Bm(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Zg(this,e)}static mi(t,e){return new cs(t,e)}Ei(){}di(t){return N.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return N.forEach(this.pi,((r,s)=>this.br(t,r,s).next((o=>o?N.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,e).next((u=>{u||(r++,o.removeEntry(a,$.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),N.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),N.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),N.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),N.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Wr(t.data.value)),e}br(t,e,r){return N.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class so{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=X(),s=X();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new so(t,e.fromCache,r,s)}}/**
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
 */class h_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class d_{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return op()?8:Fm(sp())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ys(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new h_;return this.Ss(t,e,a).next((u=>{if(o.result=u,this.Vs)return this.bs(t,e,a,u.size)}))})).next((()=>o.result))}bs(t,e,r,s){return r.documentReadCount<this.fs?(an()<=tt.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",cn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),N.resolve()):(an()<=tt.DEBUG&&L("QueryEngine","Query:",cn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(an()<=tt.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",cn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,se(e))):N.resolve())}ys(t,e){if(wc(e))return N.resolve(null);let r=se(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Ci(e,null,"F"),r=se(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=X(...o);return this.ps.getDocuments(t,a).next((u=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.Ds(e,u);return this.Cs(e,d,a,h.readTime)?this.ys(t,Ci(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ws(t,e,r,s){return wc(e)||s.isEqual($.min())?N.resolve(null):this.ps.getDocuments(t,r).next((o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,s)?N.resolve(null):(an()<=tt.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cn(e)),this.vs(t,a,e,km(s,ir)).next((u=>u)))}))}Ds(t,e){let r=new At(Il(t));return e.forEach(((s,o)=>{Is(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return an()<=tt.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",cn(e)),this.ps.getDocumentsMatchingQuery(t,e,Ce.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const io="LocalStore",f_=3e8;class p_{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new lt(Q),this.xs=new Ye((o=>Qi(o)),Xi),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new n_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function m_(n,t,e,r){return new p_(n,t,e,r)}async function Wl(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],u=[];let h=X();for(const d of s){a.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of o){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function g_(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(u,h,d,f){const m=d.batch,A=m.keys();let P=N.resolve();return A.forEach((R=>{P=P.next((()=>f.getEntry(h,R))).next((V=>{const b=d.docVersions.get(R);nt(b!==null,48541),V.version.compareTo(b)<0&&(m.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),f.addEntry(V)))}))})),P.next((()=>u.mutationQueue.removeMutationBatch(h,m)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(u){let h=X();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Kl(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function __(n,t){const e=z(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const u=[];t.targetChanges.forEach(((f,m)=>{const A=s.get(m);if(!A)return;u.push(e.Pi.removeMatchingKeys(o,f.removedDocuments,m).next((()=>e.Pi.addMatchingKeys(o,f.addedDocuments,m))));let P=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(m)!==null?P=P.withResumeToken(Pt.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,r)),s=s.insert(m,P),(function(V,b,x){return V.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=f_?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(A,P,f)&&u.push(e.Pi.updateTargetData(o,P))}));let h=pe(),d=X();if(t.documentUpdates.forEach((f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,f))})),u.push(y_(o,a,t.documentUpdates).next((f=>{h=f.ks,d=f.qs}))),!r.isEqual($.min())){const f=e.Pi.getLastRemoteSnapshotVersion(o).next((m=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));u.push(f)}return N.waitFor(u).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Ms=s,o)))}function y_(n,t,e){let r=X(),s=X();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=pe();return e.forEach(((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual($.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):L(io,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)})),{ks:a,qs:s}}))}function E_(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Gi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function T_(n,t){const e=z(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.Pi.getTargetData(r,t).next((o=>o?(s=o,N.resolve(s)):e.Pi.allocateTargetId(r).next((a=>(s=new Ae(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function ki(n,t,e){const r=z(n),s=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Rn(a))throw a;L(io,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function Oc(n,t,e){const r=z(n);let s=$.min(),o=X();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,f){const m=z(h),A=m.xs.get(f);return A!==void 0?N.resolve(m.Ms.get(A)):m.Pi.getTargetData(d,f)})(r,a,se(t)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,u.targetId).next((h=>{o=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:$.min(),e?o:X()))).next((u=>(w_(r,ig(t),u),{documents:u,Qs:o})))))}function w_(n,t,e){let r=n.Os.get(t)||$.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(t,r)}class xc{constructor(){this.activeTargetIds=hg()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class A_{constructor(){this.Mo=new xc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new xc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class I_{Oo(t){}shutdown(){}}/**
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
 */const Lc="ConnectivityMonitor";class Mc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){L(Lc,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){L(Lc,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Br=null;function Oi(){return Br===null?Br=(function(){return 268435456+Math.round(2147483648*Math.random())})():Br++,"0x"+Br.toString(16)}/**
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
 */const oi="RestConnection",v_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class R_{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===rs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,o){const a=Oi(),u=this.zo(t,e.toUriEncodedString());L(oi,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(u),f=_r(d);return this.Jo(t,u,h,r,f).then((m=>(L(oi,`Received RPC '${t}' ${a}: `,m),m)),(m=>{throw mn(oi,`RPC '${t}' ${a} failed with error: `,m,"url: ",u,"request:",r),m}))}Ho(t,e,r,s,o,a){return this.Go(t,e,r,s,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+In})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}zo(t,e){const r=v_[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
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
 */class b_{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const kt="WebChannelConnection";class S_ extends R_{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=Oi();return new Promise(((u,h)=>{const d=new Xu;d.setWithCredentials(!0),d.listenOnce(Ju.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Gr.NO_ERROR:const m=d.getResponseJson();L(kt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(m)),u(m);break;case Gr.TIMEOUT:L(kt,`RPC '${t}' ${a} timed out`),h(new O(D.DEADLINE_EXCEEDED,"Request time out"));break;case Gr.HTTP_ERROR:const A=d.getStatus();if(L(kt,`RPC '${t}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const R=P?.error;if(R&&R.status&&R.message){const V=(function(x){const F=x.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(F)>=0?F:D.UNKNOWN})(R.status);h(new O(V,R.message))}else h(new O(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new O(D.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{L(kt,`RPC '${t}' ${a} completed.`)}}));const f=JSON.stringify(s);L(kt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",f,r,15)}))}T_(t,e,r){const s=Oi(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=tl(),u=Zu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const f=o.join("");L(kt,`Creating RPC '${t}' stream ${s}: ${f}`,h);const m=a.createWebChannel(f,h);this.I_(m);let A=!1,P=!1;const R=new b_({Yo:b=>{P?L(kt,`Not sending because RPC '${t}' stream ${s} is closed:`,b):(A||(L(kt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),A=!0),L(kt,`RPC '${t}' stream ${s} sending:`,b),m.send(b))},Zo:()=>m.close()}),V=(b,x,F)=>{b.listen(x,(M=>{try{F(M)}catch(B){setTimeout((()=>{throw B}),0)}}))};return V(m,Gn.EventType.OPEN,(()=>{P||(L(kt,`RPC '${t}' stream ${s} transport opened.`),R.o_())})),V(m,Gn.EventType.CLOSE,(()=>{P||(P=!0,L(kt,`RPC '${t}' stream ${s} transport closed`),R.a_(),this.E_(m))})),V(m,Gn.EventType.ERROR,(b=>{P||(P=!0,mn(kt,`RPC '${t}' stream ${s} transport errored. Name:`,b.name,"Message:",b.message),R.a_(new O(D.UNAVAILABLE,"The operation could not be completed")))})),V(m,Gn.EventType.MESSAGE,(b=>{if(!P){const x=b.data[0];nt(!!x,16349);const F=x,M=F?.error||F[0]?.error;if(M){L(kt,`RPC '${t}' stream ${s} received error:`,M);const B=M.status;let J=(function(g){const y=_t[g];if(y!==void 0)return xl(y)})(B),et=M.message;J===void 0&&(J=D.INTERNAL,et="Unknown error status: "+B+" with message "+M.message),P=!0,R.a_(new O(J,et)),m.close()}else L(kt,`RPC '${t}' stream ${s} received:`,x),R.u_(x)}})),V(u,Yu.STAT_EVENT,(b=>{b.stat===wi.PROXY?L(kt,`RPC '${t}' stream ${s} detected buffering proxy`):b.stat===wi.NOPROXY&&L(kt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{R.__()}),0),R}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function ai(){return typeof document<"u"?document:null}/**
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
 */function Ss(n){return new Dg(n,!0)}/**
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
 */class Ql{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Fc="PersistentStream";class Xl{constructor(t,e,r,s,o,a,u,h){this.Mi=t,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ql(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(fe(e.toString()),fe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new O(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return L(Fc,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(L(Fc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class C_ extends Xl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Og(this.serializer,t),r=(function(o){if(!("targetChange"in o))return $.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?ie(a.readTime):$.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=Ni(this.serializer),e.addTarget=(function(o,a){let u;const h=a.target;if(u=bi(h)?{documents:Mg(o,h)}:{query:Fg(o,h).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Fl(o,a.resumeToken);const d=Pi(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo($.min())>0){u.readTime=as(o,a.snapshotVersion.toTimestamp());const d=Pi(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,t);const r=Bg(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=Ni(this.serializer),e.removeTarget=t,this.q_(e)}}class P_ extends Xl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return nt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,nt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){nt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Lg(t.writeResults,t.commitTime),r=ie(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Ni(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>xg(this.serializer,r)))};this.q_(e)}}/**
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
 */class V_{}class D_ extends V_{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(t,Vi(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(D.UNKNOWN,o.toString())}))}Ho(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Ho(t,Vi(e,r),s,a,u,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(D.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class N_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(fe(e),this.aa=!1):L("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ke="RemoteStore";class k_{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{tn(this)&&(L(Ke,"Restarting streams for network reachability change."),await(async function(h){const d=z(h);d.Ea.add(4),await wr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Cs(d)})(this))}))})),this.Ra=new N_(r,s)}}async function Cs(n){if(tn(n))for(const t of n.da)await t(!0)}async function wr(n){for(const t of n.da)await t(!1)}function Jl(n,t){const e=z(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),uo(e)?co(e):Sn(e).O_()&&ao(e,t))}function oo(n,t){const e=z(n),r=Sn(e);e.Ia.delete(t),r.O_()&&Yl(e,t),e.Ia.size===0&&(r.O_()?r.L_():tn(e)&&e.Ra.set("Unknown"))}function ao(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Sn(n).Y_(t)}function Yl(n,t){n.Va.Ue(t),Sn(n).Z_(t)}function co(n){n.Va=new Sg({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Sn(n).start(),n.Ra.ua()}function uo(n){return tn(n)&&!Sn(n).x_()&&n.Ia.size>0}function tn(n){return z(n).Ea.size===0}function Zl(n){n.Va=void 0}async function O_(n){n.Ra.set("Online")}async function x_(n){n.Ia.forEach(((t,e)=>{ao(n,t)}))}async function L_(n,t){Zl(n),uo(n)?(n.Ra.ha(t),co(n)):n.Ra.set("Unknown")}async function M_(n,t,e){if(n.Ra.set("Online"),t instanceof Ml&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.Va.removeTarget(u))})(n,t)}catch(r){L(Ke,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await us(n,r)}else if(t instanceof Xr?n.Va.Ze(t):t instanceof Ll?n.Va.st(t):n.Va.tt(t),!e.isEqual($.min()))try{const r=await Kl(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const u=o.Va.Tt(a);return u.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const f=o.Ia.get(d);f&&o.Ia.set(d,f.withResumeToken(h.resumeToken,a))}})),u.targetMismatches.forEach(((h,d)=>{const f=o.Ia.get(h);if(!f)return;o.Ia.set(h,f.withResumeToken(Pt.EMPTY_BYTE_STRING,f.snapshotVersion)),Yl(o,h);const m=new Ae(f.target,h,d,f.sequenceNumber);ao(o,m)})),o.remoteSyncer.applyRemoteEvent(u)})(n,e)}catch(r){L(Ke,"Failed to raise snapshot:",r),await us(n,r)}}async function us(n,t,e){if(!Rn(t))throw t;n.Ea.add(1),await wr(n),n.Ra.set("Offline"),e||(e=()=>Kl(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(Ke,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Cs(n)}))}function th(n,t){return t().catch((e=>us(n,e,t)))}async function Ps(n){const t=z(n),e=Ne(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Gi;for(;F_(t);)try{const s=await E_(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,U_(t,s)}catch(s){await us(t,s)}eh(t)&&nh(t)}function F_(n){return tn(n)&&n.Ta.length<10}function U_(n,t){n.Ta.push(t);const e=Ne(n);e.O_()&&e.X_&&e.ea(t.mutations)}function eh(n){return tn(n)&&!Ne(n).x_()&&n.Ta.length>0}function nh(n){Ne(n).start()}async function B_(n){Ne(n).ra()}async function j_(n){const t=Ne(n);for(const e of n.Ta)t.ea(e.mutations)}async function q_(n,t,e){const r=n.Ta.shift(),s=Zi.from(r,t,e);await th(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Ps(n)}async function $_(n,t){t&&Ne(n).X_&&await(async function(r,s){if((function(a){return vg(a)&&a!==D.ABORTED})(s.code)){const o=r.Ta.shift();Ne(r).B_(),await th(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Ps(r)}})(n,t),eh(n)&&nh(n)}async function Uc(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),L(Ke,"RemoteStore received new credentials");const r=tn(e);e.Ea.add(3),await wr(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Cs(e)}async function z_(n,t){const e=z(n);t?(e.Ea.delete(2),await Cs(e)):t||(e.Ea.add(2),await wr(e),e.Ra.set("Unknown"))}function Sn(n){return n.ma||(n.ma=(function(e,r,s){const o=z(e);return o.sa(),new C_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:O_.bind(null,n),t_:x_.bind(null,n),r_:L_.bind(null,n),H_:M_.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),uo(n)?co(n):n.Ra.set("Unknown")):(await n.ma.stop(),Zl(n))}))),n.ma}function Ne(n){return n.fa||(n.fa=(function(e,r,s){const o=z(e);return o.sa(),new P_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:B_.bind(null,n),r_:$_.bind(null,n),ta:j_.bind(null,n),na:q_.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Ps(n)):(await n.fa.stop(),n.Ta.length>0&&(L(Ke,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class lo{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new $e,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new lo(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ho(n,t){if(fe("AsyncQueue",`${t}: ${n}`),Rn(n))return new O(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class hn{static emptySet(t){return new hn(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||U.comparator(e.key,r.key):(e,r)=>U.comparator(e.key,r.key),this.keyedMap=Wn(),this.sortedSet=new lt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof hn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new hn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Bc{constructor(){this.ga=new lt(U.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):j(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Tn{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((u=>{a.push({type:0,doc:u})})),new Tn(t,e,hn.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&As(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class H_{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class G_{constructor(){this.queries=jc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=z(e),o=s.queries;s.queries=jc(),o.forEach(((a,u)=>{for(const h of u.Sa)h.onError(r)}))})(this,new O(D.ABORTED,"Firestore shutting down"))}}function jc(){return new Ye((n=>Al(n)),As)}async function W_(n,t){const e=z(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(r=2):(o=new H_,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=ho(a,`Initialization of query '${cn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&fo(e)}async function K_(n,t){const e=z(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Q_(n,t){const e=z(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.Sa)u.Fa(s)&&(r=!0);a.wa=s}}r&&fo(e)}function X_(n,t,e){const r=z(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function fo(n){n.Ca.forEach((t=>{t.next()}))}var xi,qc;(qc=xi||(xi={})).Ma="default",qc.Cache="cache";class J_{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Tn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Tn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==xi.Cache}}/**
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
 */class rh{constructor(t){this.key=t}}class sh{constructor(t){this.key=t}}class Y_{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=X(),this.mutatedKeys=X(),this.eu=Il(t),this.tu=new hn(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new Bc,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((f,m)=>{const A=s.get(f),P=Is(this.query,m)?m:null,R=!!A&&this.mutatedKeys.has(A.key),V=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let b=!1;A&&P?A.data.isEqual(P.data)?R!==V&&(r.track({type:3,doc:P}),b=!0):this.su(A,P)||(r.track({type:2,doc:P}),b=!0,(h&&this.eu(P,h)>0||d&&this.eu(P,d)<0)&&(u=!0)):!A&&P?(r.track({type:0,doc:P}),b=!0):A&&!P&&(r.track({type:1,doc:A}),b=!0,(h||d)&&(u=!0)),b&&(P?(a=a.add(P),o=V?o.add(f):o.delete(f)):(a=a.delete(f),o=o.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:u,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((f,m)=>(function(P,R){const V=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Rt:b})}};return V(P)-V(R)})(f.type,m.type)||this.eu(f.doc,m.doc))),this.ou(r),s=s??!1;const u=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new Tn(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=X(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new sh(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new rh(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=X();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Tn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const po="SyncEngine";class Z_{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class ty{constructor(t){this.key=t,this.hu=!1}}class ey{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ye((u=>Al(u)),As),this.Iu=new Map,this.Eu=new Set,this.du=new lt(U.comparator),this.Au=new Map,this.Ru=new no,this.Vu={},this.mu=new Map,this.fu=En.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ny(n,t,e=!0){const r=lh(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await ih(r,t,e,!0),s}async function ry(n,t){const e=lh(n);await ih(e,t,!0,!1)}async function ih(n,t,e,r){const s=await T_(n.localStore,se(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await sy(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Jl(n.remoteStore,s),u}async function sy(n,t,e,r,s){n.pu=(m,A,P)=>(async function(V,b,x,F){let M=b.view.ru(x);M.Cs&&(M=await Oc(V.localStore,b.query,!1).then((({documents:E})=>b.view.ru(E,M))));const B=F&&F.targetChanges.get(b.targetId),J=F&&F.targetMismatches.get(b.targetId)!=null,et=b.view.applyChanges(M,V.isPrimaryClient,B,J);return zc(V,b.targetId,et.au),et.snapshot})(n,m,A,P);const o=await Oc(n.localStore,t,!0),a=new Y_(t,o.Qs),u=a.ru(o.documents),h=Tr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);zc(n,e,d.au);const f=new Z_(t,e,a);return n.Tu.set(t,f),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function iy(n,t,e){const r=z(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!As(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ki(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&oo(r.remoteStore,s.targetId),Li(r,s.targetId)})).catch(vn)):(Li(r,s.targetId),await ki(r.localStore,s.targetId,!0))}async function oy(n,t){const e=z(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),oo(e.remoteStore,r.targetId))}async function ay(n,t,e){const r=py(n);try{const s=await(function(a,u){const h=z(a),d=ot.now(),f=u.reduce(((P,R)=>P.add(R.key)),X());let m,A;return h.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let R=pe(),V=X();return h.Ns.getEntries(P,f).next((b=>{R=b,R.forEach(((x,F)=>{F.isValidDocument()||(V=V.add(x))}))})).next((()=>h.localDocuments.getOverlayedDocuments(P,R))).next((b=>{m=b;const x=[];for(const F of u){const M=Eg(F,m.get(F.key).overlayedDocument);M!=null&&x.push(new Ze(F.key,M,pl(M.value.mapValue),he.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,x,u)})).next((b=>{A=b;const x=b.applyToLocalDocumentSet(m,V);return h.documentOverlayCache.saveOverlays(P,b.batchId,x)}))})).then((()=>({batchId:A.batchId,changes:Rl(m)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,u,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new lt(Q)),d=d.insert(u,h),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,e),await Ar(r,s.changes),await Ps(r.remoteStore)}catch(s){const o=ho(s,"Failed to persist write");e.reject(o)}}async function oh(n,t){const e=z(n);try{const r=await __(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Au.get(o);a&&(nt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?nt(a.hu,14607):s.removedDocuments.size>0&&(nt(a.hu,42227),a.hu=!1))})),await Ar(e,r,t)}catch(r){await vn(r)}}function $c(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((o,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const h=z(a);h.onlineState=u;let d=!1;h.queries.forEach(((f,m)=>{for(const A of m.Sa)A.va(u)&&(d=!0)})),d&&fo(h)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function cy(n,t,e){const r=z(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new lt(U.comparator);a=a.insert(o,xt.newNoDocument(o,$.min()));const u=X().add(o),h=new bs($.min(),new Map,new lt(Q),a,u);await oh(r,h),r.du=r.du.remove(o),r.Au.delete(t),mo(r)}else await ki(r.localStore,t,!1).then((()=>Li(r,t,e))).catch(vn)}async function uy(n,t){const e=z(n),r=t.batch.batchId;try{const s=await g_(e.localStore,t);ch(e,r,null),ah(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Ar(e,s)}catch(s){await vn(s)}}async function ly(n,t,e){const r=z(n);try{const s=await(function(a,u){const h=z(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return h.mutationQueue.lookupMutationBatch(d,u).next((m=>(nt(m!==null,37113),f=m.keys(),h.mutationQueue.removeMutationBatch(d,m)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,f,u))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>h.localDocuments.getDocuments(d,f)))}))})(r.localStore,t);ch(r,t,e),ah(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Ar(r,s)}catch(s){await vn(s)}}function ah(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function ch(n,t,e){const r=z(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function Li(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||uh(n,r)}))}function uh(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(oo(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),mo(n))}function zc(n,t,e){for(const r of e)r instanceof rh?(n.Ru.addReference(r.key,t),hy(n,r)):r instanceof sh?(L(po,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||uh(n,r.key)):j(19791,{wu:r})}function hy(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(L(po,"New document in limbo: "+e),n.Eu.add(r),mo(n))}function mo(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new U(st.fromString(t)),r=n.fu.next();n.Au.set(r,new ty(e)),n.du=n.du.insert(e,r),Jl(n.remoteStore,new Ae(se(Ji(e.path)),r,"TargetPurposeLimboResolution",Es.ce))}}async function Ar(n,t,e){const r=z(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((u,h)=>{a.push(r.pu(h,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const f=d?!d.fromCache:e?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,f?"current":"not-current")}if(d){s.push(d);const f=so.As(h.targetId,d);o.push(f)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(h,d){const f=z(h);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>N.forEach(d,(A=>N.forEach(A.Es,(P=>f.persistence.referenceDelegate.addReference(m,A.targetId,P))).next((()=>N.forEach(A.ds,(P=>f.persistence.referenceDelegate.removeReference(m,A.targetId,P)))))))))}catch(m){if(!Rn(m))throw m;L(io,"Failed to update sequence numbers: "+m)}for(const m of d){const A=m.targetId;if(!m.fromCache){const P=f.Ms.get(A),R=P.snapshotVersion,V=P.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(A,V)}}})(r.localStore,o))}async function dy(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){L(po,"User change. New user:",t.toKey());const r=await Wl(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((u=>{u.forEach((h=>{h.reject(new O(D.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ar(e,r.Ls)}}function fy(n,t){const e=z(n),r=e.Au.get(t);if(r&&r.hu)return X().add(r.key);{let s=X();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const u=e.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function lh(n){const t=z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=oh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cy.bind(null,t),t.Pu.H_=Q_.bind(null,t.eventManager),t.Pu.yu=X_.bind(null,t.eventManager),t}function py(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=uy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ly.bind(null,t),t}class ls{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ss(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return m_(this.persistence,new d_,t.initialUser,this.serializer)}Cu(t){return new Gl(ro.mi,this.serializer)}Du(t){return new A_}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ls.provider={build:()=>new ls};class my extends ls{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){nt(this.persistence.referenceDelegate instanceof cs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Jg(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Bt.withCacheSize(this.cacheSizeBytes):Bt.DEFAULT;return new Gl((r=>cs.mi(r,e)),this.serializer)}}class Mi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$c(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dy.bind(null,this.syncEngine),await z_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new G_})()}createDatastore(t){const e=Ss(t.databaseInfo.databaseId),r=(function(o){return new S_(o)})(t.databaseInfo);return(function(o,a,u,h){return new D_(o,a,u,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,u){return new k_(r,s,o,a,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>$c(this.syncEngine,e,0)),(function(){return Mc.v()?new Mc:new I_})())}createSyncEngine(t,e){return(function(s,o,a,u,h,d,f){const m=new ey(s,o,a,u,h,d);return f&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=z(e);L(Ke,"RemoteStore shutting down."),r.Ea.add(5),await wr(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Mi.provider={build:()=>new Mi};/**
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
 */class gy{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):fe("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const ke="FirestoreClient";class _y{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Ot.UNAUTHENTICATED,this.clientId=Hi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{L(ke,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(L(ke,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $e;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ho(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function ci(n,t){n.asyncQueue.verifyOperationInProgress(),L(ke,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Wl(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Hc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await yy(n);L(ke,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Uc(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Uc(t.remoteStore,s))),n._onlineComponents=t}async function yy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(ke,"Using user provided OfflineComponentProvider");try{await ci(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;mn("Error using user provided cache. Falling back to memory cache: "+e),await ci(n,new ls)}}else L(ke,"Using default OfflineComponentProvider"),await ci(n,new my(void 0));return n._offlineComponents}async function hh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(ke,"Using user provided OnlineComponentProvider"),await Hc(n,n._uninitializedComponentsProvider._online)):(L(ke,"Using default OnlineComponentProvider"),await Hc(n,new Mi))),n._onlineComponents}function Ey(n){return hh(n).then((t=>t.syncEngine))}async function Gc(n){const t=await hh(n),e=t.eventManager;return e.onListen=ny.bind(null,t.syncEngine),e.onUnlisten=iy.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ry.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=oy.bind(null,t.syncEngine),e}/**
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
 */function dh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Wc=new Map;/**
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
 */const fh="firestore.googleapis.com",Kc=!0;class Qc{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new O(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fh,this.ssl=Kc}else this.host=t.host,this.ssl=t.ssl??Kc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Hl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Qg)throw new O(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Nm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dh(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Vs{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Am;switch(r.type){case"firstParty":return new bm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Wc.get(e);r&&(L("ComponentProvider","Removing Datastore"),Wc.delete(e),r.terminate())})(this),Promise.resolve()}}function Ty(n,t,e,r={}){n=Jn(n,Vs);const s=_r(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;s&&(xu(`https://${u}`),Mu("Firestore",!0)),o.host!==fh&&o.host!==u&&mn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:r};if(!ts(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Ot.MOCK_USER;else{d=Lu(r.mockUserToken,n._app?.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new O(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ot(m)}n._authCredentials=new Im(new nl(d,f))}}/**
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
 */class en{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new en(this.firestore,t,this._query)}}class wt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Se(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}toJSON(){return{type:wt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(yr(e,wt._jsonSchema))return new wt(t,r||null,new U(st.fromString(e.referencePath)))}}wt._jsonSchemaVersion="firestore/documentReference/1.0",wt._jsonSchema={type:Et("string",wt._jsonSchemaVersion),referencePath:Et("string")};class Se extends en{constructor(t,e,r){super(t,e,Ji(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new U(t))}withConverter(t){return new Se(this.firestore,t,this._path)}}function wy(n,t,...e){if(n=Kt(n),rl("collection","path",t),n instanceof Vs){const r=st.fromString(t,...e);return ac(r),new Se(n,null,r)}{if(!(n instanceof wt||n instanceof Se))throw new O(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(st.fromString(t,...e));return ac(r),new Se(n.firestore,null,r)}}function Ay(n,t,...e){if(n=Kt(n),arguments.length===1&&(t=Hi.newId()),rl("doc","path",t),n instanceof Vs){const r=st.fromString(t,...e);return oc(r),new wt(n,null,new U(r))}{if(!(n instanceof wt||n instanceof Se))throw new O(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(st.fromString(t,...e));return oc(r),new wt(n.firestore,n instanceof Se?n.converter:null,new U(r))}}/**
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
 */const Xc="AsyncQueue";class Jc{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ql(this,"async_queue_retry"),this._c=()=>{const r=ai();r&&L(Xc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=ai();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ai();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new $e;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Rn(t))throw t;L(Xc,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,fe("INTERNAL UNHANDLED ERROR: ",Yc(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=lo.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&j(47125,{Pc:Yc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Yc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Zc(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}class hs extends Vs{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Jc,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Jc(t),this._firestoreClient=void 0,await t}}}function Iy(n,t){const e=typeof n=="object"?n:Gu(),r=typeof n=="string"?n:rs,s=qu(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=ku("firestore");o&&Ty(s,...o)}return s}function ph(n){if(n._terminated)throw new O(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vy(n),n._firestoreClient}function vy(n){const t=n._freezeSettings(),e=(function(s,o,a,u){return new $m(s,o,a,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,dh(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new _y(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(s){const o=s?._online.build();return{_offline:s?._offline.build(o),_online:o}})(n._componentsProvider))}/**
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
 */class Gt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Gt(Pt.fromBase64String(t))}catch(e){throw new O(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Gt(Pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(yr(t,Gt._jsonSchema))return Gt.fromBase64String(t.bytes)}}Gt._jsonSchemaVersion="firestore/bytes/1.0",Gt._jsonSchema={type:Et("string",Gt._jsonSchemaVersion),bytes:Et("string")};/**
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
 */class go{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class _o{constructor(t){this._methodName=t}}/**
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
 */class oe{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Q(this._lat,t._lat)||Q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:oe._jsonSchemaVersion}}static fromJSON(t){if(yr(t,oe._jsonSchema))return new oe(t.latitude,t.longitude)}}oe._jsonSchemaVersion="firestore/geoPoint/1.0",oe._jsonSchema={type:Et("string",oe._jsonSchemaVersion),latitude:Et("number"),longitude:Et("number")};/**
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
 */class ae{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:ae._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(yr(t,ae._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new ae(t.vectorValues);throw new O(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ae._jsonSchemaVersion="firestore/vectorValue/1.0",ae._jsonSchema={type:Et("string",ae._jsonSchemaVersion),vectorValues:Et("object")};/**
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
 */const Ry=/^__.*__$/;class by{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ze(t,this.data,this.fieldMask,e,this.fieldTransforms):new Er(t,this.data,e,this.fieldTransforms)}}function mh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:n})}}class yo{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new yo({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ds(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(mh(this.Ac)&&Ry.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Sy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Ss(t)}Cc(t,e,r,s=!1){return new yo({Ac:t,methodName:e,Dc:r,path:Ct.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gh(n){const t=n._freezeSettings(),e=Ss(n._databaseId);return new Sy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Cy(n,t,e,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,t,e,s);Eh("Data must be an object, but it was:",a,r);const u=_h(r,a);let h,d;if(o.merge)h=new Wt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const f=[];for(const m of o.mergeFields){const A=Vy(t,m,e);if(!a.contains(A))throw new O(D.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Ny(f,A)||f.push(A)}h=new Wt(f),d=a.fieldTransforms.filter((m=>h.covers(m.field)))}else h=null,d=a.fieldTransforms;return new by(new Ht(u),h,d)}class Eo extends _o{_toFieldTransform(t){return new mg(t.path,new lr)}isEqual(t){return t instanceof Eo}}function Py(n,t,e,r=!1){return To(e,n.Cc(r?4:3,t))}function To(n,t){if(yh(n=Kt(n)))return Eh("Unsupported field value:",t,n),_h(n,t);if(n instanceof _o)return(function(r,s){if(!mh(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const u of r){let h=To(u,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=Kt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:as(s.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:as(s.serializer,o)}}if(r instanceof oe)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gt)return{bytesValue:Fl(s.serializer,r._byteString)};if(r instanceof wt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:eo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ae)return(function(a,u){return{mapValue:{fields:{[dl]:{stringValue:fl},[ss]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return Yi(u.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${ys(r)}`)})(n,t)}function _h(n,t){const e={};return ol(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Je(n,((r,s)=>{const o=To(s,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function yh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof oe||n instanceof Gt||n instanceof wt||n instanceof _o||n instanceof ae)}function Eh(n,t,e){if(!yh(e)||!sl(e)){const r=ys(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function Vy(n,t,e){if((t=Kt(t))instanceof go)return t._internalPath;if(typeof t=="string")return Th(n,t);throw ds("Field path arguments must be of type string or ",n,!1,void 0,e)}const Dy=new RegExp("[~\\*/\\[\\]]");function Th(n,t,e){if(t.search(Dy)>=0)throw ds(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new go(...t.split("."))._internalPath}catch{throw ds(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ds(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new O(D.INVALID_ARGUMENT,u+n+h)}function Ny(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class wh{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ky(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(wo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ky extends wh{data(){return super.data()}}function wo(n,t){return typeof t=="string"?Th(n,t):t instanceof go?t._internalPath:t._delegate._internalPath}/**
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
 */function Oy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ao{}class Ah extends Ao{}function xy(n,t,...e){let r=[];t instanceof Ao&&r.push(t),r=r.concat(e),(function(o){const a=o.filter((h=>h instanceof vo)).length,u=o.filter((h=>h instanceof Io)).length;if(a>1||a>0&&u>0)throw new O(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Io extends Ah{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Io(t,e,r)}_apply(t){const e=this._parse(t);return Ih(t._query,e),new en(t.firestore,t.converter,Si(t._query,e))}_parse(t){const e=gh(t.firestore);return(function(o,a,u,h,d,f,m){let A;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){eu(m,f);const R=[];for(const V of m)R.push(tu(h,o,V));A={arrayValue:{values:R}}}else A=tu(h,o,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||eu(m,f),A=Py(u,a,m,f==="in"||f==="not-in");return yt.create(d,f,A)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class vo extends Ao{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new vo(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:Qt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Ih(a,h),a=Si(a,h)})(t._query,e),new en(t.firestore,t.converter,Si(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ro extends Ah{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ro(t,e)}_apply(t){const e=(function(s,o,a){if(s.startAt!==null)throw new O(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ur(o,a)})(t._query,this._field,this._direction);return new en(t.firestore,t.converter,(function(s,o){const a=s.explicitOrderBy.concat([o]);return new bn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Ly(n,t="asc"){const e=t,r=wo("orderBy",n);return Ro._create(r,e)}function tu(n,t,e){if(typeof(e=Kt(e))=="string"){if(e==="")throw new O(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wl(t)&&e.indexOf("/")!==-1)throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(st.fromString(e));if(!U.isDocumentKey(r))throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mc(n,new U(r))}if(e instanceof wt)return mc(n,e._key);throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ys(e)}.`)}function eu(n,t){if(!Array.isArray(n)||n.length===0)throw new O(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ih(n,t){const e=(function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new O(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class My{convertValue(t,e="none"){switch(De(t)){case 0:return null;case 1:return t.booleanValue;case 2:return mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ve(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw j(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Je(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){const e=t.fields?.[ss].arrayValue?.values?.map((r=>mt(r.doubleValue)));return new ae(e)}convertGeoPoint(t){return new oe(mt(t.latitude),mt(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ws(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(or(t));default:return null}}convertTimestamp(t){const e=Pe(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=st.fromString(t);nt(zl(r),9688,{name:t});const s=new ar(r.get(1),r.get(3)),o=new U(r.popFirst(5));return s.isEqual(e)||fe(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Fy(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Qn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ze extends wh{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Jr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(wo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ze._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ze._jsonSchemaVersion="firestore/documentSnapshot/1.0",ze._jsonSchema={type:Et("string",ze._jsonSchemaVersion),bundleSource:Et("string","DocumentSnapshot"),bundleName:Et("string"),bundle:Et("string")};class Jr extends ze{data(t={}){return super.data(t)}}class dn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Qn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Jr(this._firestore,this._userDataWriter,r.key,r,new Qn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const h=new Jr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Qn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const h=new Jr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Qn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:Uy(u.type),doc:h,oldIndex:d,newIndex:f}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=dn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Hi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Uy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}dn._jsonSchemaVersion="firestore/querySnapshot/1.0",dn._jsonSchema={type:Et("string",dn._jsonSchemaVersion),bundleSource:Et("string","QuerySnapshot"),bundleName:Et("string"),bundle:Et("string")};class vh extends My{constructor(t){super(),this.firestore=t}convertBytes(t){return new Gt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function By(n,t){const e=Jn(n.firestore,hs),r=Ay(n),s=Fy(n.converter,t);return qy(e,[Cy(gh(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,he.exists(!1))]).then((()=>r))}function jy(n,...t){n=Kt(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Zc(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Zc(t[r])){const h=t[r];t[r]=h.next?.bind(h),t[r+1]=h.error?.bind(h),t[r+2]=h.complete?.bind(h)}let o,a,u;if(n instanceof wt)a=Jn(n.firestore,hs),u=Ji(n._key.path),o={next:h=>{t[r]&&t[r]($y(a,n,h))},error:t[r+1],complete:t[r+2]};else{const h=Jn(n,en);a=Jn(h.firestore,hs),u=h._query;const d=new vh(a);o={next:f=>{t[r]&&t[r](new dn(a,d,h,f))},error:t[r+1],complete:t[r+2]},Oy(n._query)}return(function(d,f,m,A){const P=new gy(A),R=new J_(f,P,m);return d.asyncQueue.enqueueAndForget((async()=>W_(await Gc(d),R))),()=>{P.Nu(),d.asyncQueue.enqueueAndForget((async()=>K_(await Gc(d),R)))}})(ph(a),u,s,o)}function qy(n,t){return(function(r,s){const o=new $e;return r.asyncQueue.enqueueAndForget((async()=>ay(await Ey(r),s,o))),o.promise})(ph(n),t)}function $y(n,t,e){const r=e.docs.get(t._key),s=new vh(n);return new ze(n,s,t._key,r,new Qn(e.hasPendingWrites,e.fromCache),t.converter)}function zy(){return new Eo("serverTimestamp")}(function(t,e=!0){(function(s){In=s})(zu),rr(new pn("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new hs(new vm(r.getProvider("auth-internal")),new Sm(a,r.getProvider("app-check-internal")),(function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ar(d.options.projectId,f)})(a,s),a);return o={useFetchStreams:e,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),Re(nc,rc,t),Re(nc,rc,"esm2020")})();/**
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
 */const Rh="firebasestorage.googleapis.com",bh="storageBucket",Hy=120*1e3,Gy=600*1e3;/**
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
 */class pt extends Xe{constructor(t,e,r=0){super(ui(t),`Firebase Storage: ${e} (${ui(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ui(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ft;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ft||(ft={}));function ui(n){return"storage/"+n}function bo(){const n="An unknown error occurred, please check the error payload for server response.";return new pt(ft.UNKNOWN,n)}function Wy(n){return new pt(ft.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Ky(n){return new pt(ft.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Qy(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pt(ft.UNAUTHENTICATED,n)}function Xy(){return new pt(ft.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Jy(n){return new pt(ft.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Yy(){return new pt(ft.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Zy(){return new pt(ft.CANCELED,"User canceled the upload/download.")}function tE(n){return new pt(ft.INVALID_URL,"Invalid URL '"+n+"'.")}function eE(n){return new pt(ft.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function nE(){return new pt(ft.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bh+"' property when initializing the app?")}function rE(){return new pt(ft.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sE(){return new pt(ft.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iE(n){return new pt(ft.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fi(n){return new pt(ft.INVALID_ARGUMENT,n)}function Sh(){return new pt(ft.APP_DELETED,"The Firebase app was deleted.")}function oE(n){return new pt(ft.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function nr(n,t){return new pt(ft.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function Hn(n){throw new pt(ft.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class zt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=zt.makeFromUrl(t,e)}catch{return new zt(t,"")}if(r.path==="")return r;throw eE(t)}static makeFromUrl(t,e){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+s+a,"i"),h={bucket:1,path:3};function d(B){B.path_=decodeURIComponent(B.path)}const f="v[A-Za-z0-9_]+",m=e.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",P=new RegExp(`^https?://${m}/${f}/b/${s}/o${A}`,"i"),R={bucket:1,path:3},V=e===Rh?"(?:storage.googleapis.com|storage.cloud.google.com)":e,b="([^?#]*)",x=new RegExp(`^https?://${V}/${s}/${b}`,"i"),M=[{regex:u,indices:h,postModify:o},{regex:P,indices:R,postModify:d},{regex:x,indices:{bucket:1,path:2},postModify:d}];for(let B=0;B<M.length;B++){const J=M[B],et=J.regex.exec(t);if(et){const E=et[J.indices.bucket];let g=et[J.indices.path];g||(g=""),r=new zt(E,g),J.postModify(r);break}}if(r==null)throw tE(t);return r}}class aE{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function cE(n,t,e){let r=1,s=null,o=null,a=!1,u=0;function h(){return u===2}let d=!1;function f(...b){d||(d=!0,t.apply(null,b))}function m(b){s=setTimeout(()=>{s=null,n(P,h())},b)}function A(){o&&clearTimeout(o)}function P(b,...x){if(d){A();return}if(b){A(),f.call(null,b,...x);return}if(h()||a){A(),f.call(null,b,...x);return}r<64&&(r*=2);let M;u===1?(u=2,M=0):M=(r+Math.random())*1e3,m(M)}let R=!1;function V(b){R||(R=!0,A(),!d&&(s!==null?(b||(u=2),clearTimeout(s),m(0)):b||(u=1)))}return m(0),o=setTimeout(()=>{a=!0,V(!0)},e),V}function uE(n){n(!1)}/**
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
 */function lE(n){return n!==void 0}function hE(n){return typeof n=="object"&&!Array.isArray(n)}function So(n){return typeof n=="string"||n instanceof String}function nu(n){return Co()&&n instanceof Blob}function Co(){return typeof Blob<"u"}function ru(n,t,e,r){if(r<t)throw Fi(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Fi(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
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
 */function Po(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function Ch(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const s=t(r)+"="+t(n[r]);e=e+s+"&"}return e=e.slice(0,-1),e}var He;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(He||(He={}));/**
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
 */function dE(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||s||o}/**
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
 */class fE{constructor(t,e,r,s,o,a,u,h,d,f,m,A=!0,P=!1){this.url_=t,this.method_=e,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=A,this.isUsingEmulator=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,V)=>{this.resolve_=R,this.reject_=V,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new jr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=u=>{const h=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const u=o.getErrorCode()===He.NO_ERROR,h=o.getStatus();if(!u||dE(h,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===He.ABORT;r(!1,new jr(!1,null,f));return}const d=this.successCodes_.indexOf(h)!==-1;r(!0,new jr(d,o))})},e=(r,s)=>{const o=this.resolve_,a=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const h=this.callback_(u,u.getResponse());lE(h)?o(h):o()}catch(h){a(h)}else if(u!==null){const h=bo();h.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,h)):a(h)}else if(s.canceled){const h=this.appDelete_?Sh():Zy();a(h)}else{const h=Yy();a(h)}};this.canceled_?e(!1,new jr(!1,null,!0)):this.backoffId_=cE(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&uE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class jr{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function pE(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function mE(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function gE(n,t){t&&(n["X-Firebase-GMPID"]=t)}function _E(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function yE(n,t,e,r,s,o,a=!0,u=!1){const h=Ch(n.urlParams),d=n.url+h,f=Object.assign({},n.headers);return gE(f,t),pE(f,e),mE(f,o),_E(f,r),new fE(d,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,u)}/**
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
 */function EE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function TE(...n){const t=EE();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(Co())return new Blob(n);throw new pt(ft.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wE(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function AE(n){if(typeof atob>"u")throw iE("base-64");return atob(n)}/**
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
 */const re={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class li{constructor(t,e){this.data=t,this.contentType=e||null}}function IE(n,t){switch(n){case re.RAW:return new li(Ph(t));case re.BASE64:case re.BASE64URL:return new li(Vh(n,t));case re.DATA_URL:return new li(RE(t),bE(t))}throw bo()}function Ph(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=r,a=n.charCodeAt(++e);r=65536|(o&1023)<<10|a&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function vE(n){let t;try{t=decodeURIComponent(n)}catch{throw nr(re.DATA_URL,"Malformed data URL.")}return Ph(t)}function Vh(n,t){switch(n){case re.BASE64:{const s=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(s||o)throw nr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case re.BASE64URL:{const s=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(s||o)throw nr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=AE(t)}catch(s){throw s.message.includes("polyfill")?s:nr(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}class Dh{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw nr(re.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=SE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function RE(n){const t=new Dh(n);return t.base64?Vh(re.BASE64,t.rest):vE(t.rest)}function bE(n){return new Dh(n).contentType}function SE(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
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
 */class we{constructor(t,e){let r=0,s="";nu(t)?(this.data_=t,r=t.size,s=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,e){if(nu(this.data_)){const r=this.data_,s=wE(r,t,e);return s===null?null:new we(s)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new we(r,!0)}}static getBlob(...t){if(Co()){const e=t.map(r=>r instanceof we?r.data_:r);return new we(TE.apply(null,e))}else{const e=t.map(a=>So(a)?IE(re.RAW,a).data:a.data_);let r=0;e.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return e.forEach(a=>{for(let u=0;u<a.length;u++)s[o++]=a[u]}),new we(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Nh(n){let t;try{t=JSON.parse(n)}catch{return null}return hE(t)?t:null}/**
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
 */function CE(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function PE(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function kh(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
 */function VE(n,t){return t}class Ut{constructor(t,e,r,s){this.server=t,this.local=e||t,this.writable=!!r,this.xform=s||VE}}let qr=null;function DE(n){return!So(n)||n.length<2?n:kh(n)}function Oh(){if(qr)return qr;const n=[];n.push(new Ut("bucket")),n.push(new Ut("generation")),n.push(new Ut("metageneration")),n.push(new Ut("name","fullPath",!0));function t(o,a){return DE(a)}const e=new Ut("name");e.xform=t,n.push(e);function r(o,a){return a!==void 0?Number(a):a}const s=new Ut("size");return s.xform=r,n.push(s),n.push(new Ut("timeCreated")),n.push(new Ut("updated")),n.push(new Ut("md5Hash",null,!0)),n.push(new Ut("cacheControl",null,!0)),n.push(new Ut("contentDisposition",null,!0)),n.push(new Ut("contentEncoding",null,!0)),n.push(new Ut("contentLanguage",null,!0)),n.push(new Ut("contentType",null,!0)),n.push(new Ut("metadata","customMetadata",!0)),qr=n,qr}function NE(n,t){function e(){const r=n.bucket,s=n.fullPath,o=new zt(r,s);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function kE(n,t,e){const r={};r.type="file";const s=e.length;for(let o=0;o<s;o++){const a=e[o];r[a.local]=a.xform(r,t[a.server])}return NE(r,n),r}function xh(n,t,e){const r=Nh(t);return r===null?null:kE(n,r,e)}function OE(n,t,e,r){const s=Nh(t);if(s===null||!So(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(d=>{const f=n.bucket,m=n.fullPath,A="/b/"+a(f)+"/o/"+a(m),P=Po(A,e,r),R=Ch({alt:"media",token:d});return P+R})[0]}function xE(n,t){const e={},r=t.length;for(let s=0;s<r;s++){const o=t[s];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}class Lh{constructor(t,e,r,s){this.url=t,this.method=e,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Mh(n){if(!n)throw bo()}function LE(n,t){function e(r,s){const o=xh(n,s,t);return Mh(o!==null),o}return e}function ME(n,t){function e(r,s){const o=xh(n,s,t);return Mh(o!==null),OE(o,s,n.host,n._protocol)}return e}function Fh(n){function t(e,r){let s;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?s=Xy():s=Qy():e.getStatus()===402?s=Ky(n.bucket):e.getStatus()===403?s=Jy(n.path):s=r,s.status=e.getStatus(),s.serverResponse=r.serverResponse,s}return t}function FE(n){const t=Fh(n);function e(r,s){let o=t(r,s);return r.getStatus()===404&&(o=Wy(n.path)),o.serverResponse=s.serverResponse,o}return e}function UE(n,t,e){const r=t.fullServerUrl(),s=Po(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,u=new Lh(s,o,ME(n,e),a);return u.errorHandler=FE(t),u}function BE(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function jE(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=BE(null,t)),r}function qE(n,t,e,r,s){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let M="";for(let B=0;B<2;B++)M=M+Math.random().toString().slice(2);return M}const h=u();a["Content-Type"]="multipart/related; boundary="+h;const d=jE(t,r,s),f=xE(d,e),m="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+h+`\r
Content-Type: `+d.contentType+`\r
\r
`,A=`\r
--`+h+"--",P=we.getBlob(m,r,A);if(P===null)throw rE();const R={name:d.fullPath},V=Po(o,n.host,n._protocol),b="POST",x=n.maxUploadRetryTime,F=new Lh(V,b,LE(n,e),x);return F.urlParams=R,F.headers=a,F.body=P.uploadData(),F.errorHandler=Fh(t),F}class $E{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=He.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=He.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=He.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,s,o){if(this.sent_)throw Hn("cannot .send() more than once");if(_r(t)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(e,t,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Hn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Hn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Hn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Hn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class zE extends $E{initXhr(){this.xhr_.responseType="text"}}function Uh(){return new zE}/**
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
 */class Qe{constructor(t,e){this._service=t,e instanceof zt?this._location=e:this._location=zt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Qe(t,e)}get root(){const t=new zt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kh(this._location.path)}get storage(){return this._service}get parent(){const t=CE(this._location.path);if(t===null)return null;const e=new zt(this._location.bucket,t);return new Qe(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw oE(t)}}function HE(n,t,e){n._throwIfRoot("uploadBytes");const r=qE(n.storage,n._location,Oh(),new we(t,!0),e);return n.storage.makeRequestWithTokens(r,Uh).then(s=>({metadata:s,ref:n}))}function GE(n){n._throwIfRoot("getDownloadURL");const t=UE(n.storage,n._location,Oh());return n.storage.makeRequestWithTokens(t,Uh).then(e=>{if(e===null)throw sE();return e})}function WE(n,t){const e=PE(n._location.path,t),r=new zt(n._location.bucket,e);return new Qe(n.storage,r)}/**
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
 */function KE(n){return/^[A-Za-z]+:\/\//.test(n)}function QE(n,t){return new Qe(n,t)}function Bh(n,t){if(n instanceof Vo){const e=n;if(e._bucket==null)throw nE();const r=new Qe(e,e._bucket);return t!=null?Bh(r,t):r}else return t!==void 0?WE(n,t):n}function XE(n,t){if(t&&KE(t)){if(n instanceof Vo)return QE(n,t);throw Fi("To use ref(service, url), the first argument must be a Storage instance.")}else return Bh(n,t)}function su(n,t){const e=t?.[bh];return e==null?null:zt.makeFromBucketSpec(e,n)}function JE(n,t,e,r={}){n.host=`${t}:${e}`;const s=_r(t);s&&(xu(`https://${n.host}/b`),Mu("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:Lu(o,n.app.options.projectId))}class Vo{constructor(t,e,r,s,o,a=!1){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=Rh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Hy,this._maxUploadRetryTime=Gy,this._requests=new Set,s!=null?this._bucket=zt.makeFromBucketSpec(s,this._host):this._bucket=su(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=zt.makeFromBucketSpec(this._url,t):this._bucket=su(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ru("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ru("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if($u(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Qe(this,t)}_makeRequest(t,e,r,s,o=!0){if(this._deleted)return new aE(Sh());{const a=yE(t,this._appId,r,s,e,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,s).getPromise()}}const iu="@firebase/storage",ou="0.14.0";/**
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
 */const jh="storage";function YE(n,t,e){return n=Kt(n),HE(n,t,e)}function ZE(n){return n=Kt(n),GE(n)}function tT(n,t){return n=Kt(n),XE(n,t)}function eT(n=Gu(),t){n=Kt(n);const r=qu(n,jh).getImmediate({identifier:t}),s=ku("storage");return s&&nT(r,...s),r}function nT(n,t,e,r={}){JE(n,t,e,r)}function rT(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Vo(e,r,s,t,zu)}function sT(){rr(new pn(jh,rT,"PUBLIC").setMultipleInstances(!0)),Re(iu,ou,""),Re(iu,ou,"esm2020")}sT();function iT(){return{apiKey:"AIzaSyBPDYniKMdsGrESHpBz8OQvE3Jr2dfJDfM",authDomain:"alsaleem-call-center.firebaseapp.com",projectId:"alsaleem-call-center",storageBucket:"alsaleem-call-center.firebasestorage.app",messagingSenderId:"5278467167",appId:"1:5278467167:web:90fced71223e2a5ee6c7ea"}}function oT(n){return n&&n.apiKey&&n.projectId&&n.storageBucket&&n.appId}async function aT(n,t,e){const r=`conversations/${t}/${Date.now()}-${e.name}`,s=tT(n,r);return await YE(s,e),await ZE(s)}function cT(n){if(!n)return null;const t=n.type;return t.startsWith("audio/")?"voice":t.startsWith("image/")?"image":t.startsWith("video/")?"video":"document"}function uT(n){if(!n)return null;const t=n.toLowerCase();return t.match(/\.(mp3|m4a|aac|wav|ogg|webm)(\?|$)/)?"voice":t.match(/\.(mp4|mov|webm)(\?|$)/)?"video":t.match(/\.(png|jpg|jpeg|gif|webp)(\?|$)/)?"image":"document"}function lT(n){const t=(n||"").toLowerCase();return t.includes(".mp3")?"audio/mpeg":t.includes(".m4a")||t.includes(".aac")?"audio/mp4":t.includes(".wav")?"audio/wav":t.includes(".ogg")?"audio/ogg":t.includes(".webm")?"audio/webm":"audio/*"}function hT(n){const t=n.getAttribute("data-conversation"),e=n.getAttribute("data-title")||"Chat",r=iT();if(!oT(r)){n.innerHTML='<div class="border p-3 bg-yellow-50 rounded">Firebase is not configured. Set VITE_FIREBASE_* in .env.</div>';return}const s=Hu(r),o=Iy(s),a=eT(s);n.innerHTML=`
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
    `;const u=n.querySelector("#messages"),h=n.querySelector("#textInput"),d=n.querySelector("#fileInput"),f=n.querySelector("#filePreview"),m=n.querySelector("#recordBtn"),A=n.querySelector("#recTimer"),P=n.querySelector("#sendBtn"),R=P?P.textContent:"Send";function V(q){P&&(P.disabled=!!q,P.textContent=q?"Sending…":R,q?P.classList.add("opacity-60","cursor-not-allowed"):P.classList.remove("opacity-60","cursor-not-allowed"))}let b=null,x=null,F=[],M=null,B=null;function J(){f&&(f.innerHTML="",f.classList.add("hidden"))}function et(q){if(!q||!f)return J();const Y=URL.createObjectURL(q);let K="";const G="inline-flex items-center gap-2 px-3 py-2 border rounded bg-gray-50";q.type.startsWith("image/")?K=`<div class="${G}"><img src="${Y}" class="h-16 w-auto rounded" /><div class="text-sm">${q.name}</div><button type="button" id="removeFile" class="ml-2 text-red-600 text-sm">Remove</button></div>`:q.type.startsWith("video/")?K=`<div class="${G}"><video src="${Y}" class="h-16 w-24" muted loop></video><div class="text-sm">${q.name}</div><button type="button" id="removeFile" class="ml-2 text-red-600 text-sm">Remove</button></div>`:q.type.startsWith("audio/")?K=`<div class="${G}"><audio src="${Y}" controls class="h-8"></audio><div class="text-sm">${q.name}</div><button type="button" id="removeFile" class="ml-2 text-red-600 text-sm">Remove</button></div>`:K=`<div class="${G}"><span class="text-sm">${q.name}</span><button type="button" id="removeFile" class="ml-2 text-red-600 text-sm">Remove</button></div>`,f.innerHTML=K,f.classList.remove("hidden");const ct=f.querySelector("#removeFile");ct&&ct.addEventListener("click",()=>{URL.revokeObjectURL(Y),d.value="",b=null,J()})}d.addEventListener("change",()=>{b=d.files&&d.files[0]||null,et(b)});function E(){if(!M||!A)return;const q=Math.floor((Date.now()-M)/1e3),Y=String(Math.floor(q/60)).padStart(2,"0"),K=String(q%60).padStart(2,"0");A.textContent=`${Y}:${K}`}async function g(q){try{const Y=new(window.AudioContext||window.webkitAudioContext),K=await q.arrayBuffer(),G=await Y.decodeAudioData(K),ct=y(G);return new Blob([ct],{type:"audio/mp3"})}catch(Y){return console.error("Error converting to MP3:",Y),new Blob([q],{type:"audio/mp3"})}}function y(q){const Y=q.length,K=q.sampleRate,G=q.numberOfChannels,Vt=G*2,ut=K*Vt,Dt=Y*Vt,Rt=44+Dt,bt=new ArrayBuffer(Rt),ht=new DataView(bt),Jt=(ue,le)=>{for(let Yt=0;Yt<le.length;Yt++)ht.setUint8(ue+Yt,le.charCodeAt(Yt))};Jt(0,"RIFF"),ht.setUint32(4,Rt-8,!0),Jt(8,"WAVE"),Jt(12,"fmt "),ht.setUint32(16,16,!0),ht.setUint16(20,1,!0),ht.setUint16(22,G,!0),ht.setUint32(24,K,!0),ht.setUint32(28,ut,!0),ht.setUint16(32,Vt,!0),ht.setUint16(34,16,!0),Jt(36,"data"),ht.setUint32(40,Dt,!0);let nn=44;for(let ue=0;ue<Y;ue++)for(let le=0;le<G;le++){const Yt=Math.max(-1,Math.min(1,q.getChannelData(le)[ue]));ht.setInt16(nn,Yt<0?Yt*32768:Yt*32767,!0),nn+=2}return bt}async function w(){try{const q=await navigator.mediaDevices.getUserMedia({audio:!0});F=[];const Y=["audio/mp4;codecs=mp4a","audio/mp4","audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/ogg"];let K="";for(const G of Y)if(window.MediaRecorder&&MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(G)){K=G;break}x=new MediaRecorder(q,K?{mimeType:K}:void 0),x.ondataavailable=G=>{G.data&&G.data.size>0&&F.push(G.data)},x.onstop=async()=>{const G=K||"audio/webm",ct=new Blob(F,{type:G});let Vt;G.includes("mp4")?Vt=new Blob([ct],{type:"audio/mp3"}):Vt=await g(ct),b=new File([Vt],`voice-${Date.now()}.mp3`,{type:"audio/mp3"}),et(b),q.getTracks().forEach(ut=>ut.stop())},x.start(),M=Date.now(),A.classList.remove("hidden"),E(),B=setInterval(E,500),m.innerHTML=`
              <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path>
              </svg>`}catch{alert("Microphone permission denied or not available.")}}function T(){x&&x.state!=="inactive"&&x.stop(),B&&clearInterval(B),B=null,A.classList.add("hidden"),m.innerHTML=`
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
          </svg>`}m&&m.addEventListener("click",()=>{!x||x.state==="inactive"?w():T()});const I=wy(o,"conversations",String(t),"messages"),_=()=>{u&&(u.scrollTop=u.scrollHeight)},at=xy(I,Ly("createdAt"));jy(at,q=>{u.innerHTML="",q.forEach(Y=>{const K=Y.data(),G=K.senderType==="agent",ct=document.createElement("div");ct.className=`flex ${G?"justify-end":"justify-start"}`;const Vt=document.createElement("div");Vt.className=`max-w-[75%] rounded-2xl px-4 py-2 shadow ${G?"bg-blue-600 text-white rounded-br-md":"bg-gray-100 text-gray-900 rounded-bl-md"}`;let ut="";K.body&&(ut+=`<div class="whitespace-pre-wrap">${K.body}</div>`);const Dt=K.attachment||{},Rt=K.attachmentUrl||K.attachment_url||K.attachmentPath||K.attachment_path||K.url||K.fileUrl||K.file_url||Dt.url||Dt.path||null,bt=K.attachmentType||K.attachment_type||Dt.type||uT(Rt);if(Rt)if(bt==="image")ut+=`<img src="${Rt}" class="mt-2 rounded-lg max-w-full" />`;else if(bt==="video")ut+=`<video src="${Rt}" controls preload="metadata" class="mt-2 rounded-lg max-w-full"></video>`;else if(bt==="voice"){const Jt=lT(Rt);console.log("audio messages"),ut+=`<audio controls style="height: 40px;width: 500px;" preload="metadata" class="mt-2 w-full" controls>
                    <source src="${Rt}" type="${Jt}">Your browser does not support the audio element.</audio>`}else ut+=`<a class="mt-2 underline block" href="${Rt}" target="_blank">Attachment</a>`;else bt==="voice"&&(ut+='<div class="mt-1 italic opacity-80">Voice message (no URL)</div>');Vt.innerHTML=ut,ct.appendChild(Vt),u.appendChild(ct);const ht=Vt.querySelector("img,video");ht&&(ht.addEventListener("load",()=>setTimeout(_,10),{once:!0}),ht.addEventListener("loadeddata",()=>setTimeout(_,10),{once:!0}))}),_(),setTimeout(_,50)}),P.addEventListener("click",async()=>{const q=h.value.trim(),Y=b||d.files&&d.files[0];if(!q&&!Y)return;let K=null,G=null;V(!0);try{Y&&(K=await aT(a,t,Y),G=cT(Y)),await By(I,{body:q||null,attachmentUrl:K,attachmentType:G,senderType:"agent",createdAt:zy()});try{await fetch(`/api/activity/conversation/${t}`,{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify({body:q,sender_type:"agent"})})}catch{}h.value="",d.value&&(d.value=""),b=null,J(),_()}catch(ct){console.error("Failed to send message",ct),alert("Failed to send message. Please try again.")}finally{V(!1)}})}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("chat-app");n&&hT(n)});
