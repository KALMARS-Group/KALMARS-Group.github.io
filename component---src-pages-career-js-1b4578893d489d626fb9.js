(self.webpackChunkkalmars_website=self.webpackChunkkalmars_website||[]).push([[271],{6633:function(e,t,r){e.exports=r(2465)},3344:function(e,t,r){"use strict";var n=r(1599),o=r(7202),a=r(116),s=r(8710),i=r(3656),c=r(2306),u=r(778),l=r(1191);e.exports=function(e){return new Promise((function(t,r){var f=e.data,p=e.headers,d=e.responseType;n.isFormData(f)&&delete p["Content-Type"];var m=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+v)}var g=i(e.baseURL,e.url);function y(){if(m){var n="getAllResponseHeaders"in m?c(m.getAllResponseHeaders()):null,a={data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m};o(t,r,a),m=null}}if(m.open(e.method.toUpperCase(),s(g,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(y)},m.onabort=function(){m&&(r(l("Request aborted",e,"ECONNABORTED",m)),m=null)},m.onerror=function(){r(l("Network Error",e,null,m)),m=null},m.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",m)),m=null},n.isStandardBrowserEnv()){var b=(e.withCredentials||u(g))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;b&&(p[e.xsrfHeaderName]=b)}"setRequestHeader"in m&&n.forEach(p,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:m.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(m.withCredentials=!!e.withCredentials),d&&"json"!==d&&(m.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){m&&(m.abort(),r(e),m=null)})),f||(f=null),m.send(f)}))}},2465:function(e,t,r){"use strict";var n=r(1599),o=r(6013),a=r(2234),s=r(5469);function i(e){var t=new a(e),r=o(a.prototype.request,t);return n.extend(r,a.prototype,t),n.extend(r,t),r}var c=i(r(8943));c.Axios=a,c.create=function(e){return i(s(c.defaults,e))},c.Cancel=r(6114),c.CancelToken=r(4396),c.isCancel=r(7458),c.all=function(e){return Promise.all(e)},c.spread=r(2744),c.isAxiosError=r(6683),e.exports=c,e.exports.default=c},6114:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},4396:function(e,t,r){"use strict";var n=r(6114);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},7458:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},2234:function(e,t,r){"use strict";var n=r(1599),o=r(8710),a=r(5950),s=r(4126),i=r(5469),c=r(8260),u=c.validators;function l(e){this.defaults=e,this.interceptors={request:new a,response:new a}}l.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&c.assertOptions(t,{silentJSONParsing:u.transitional(u.boolean,"1.0.0"),forcedJSONParsing:u.transitional(u.boolean,"1.0.0"),clarifyTimeoutError:u.transitional(u.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var o,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!n){var l=[s,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(a),o=Promise.resolve(e);l.length;)o=o.then(l.shift(),l.shift());return o}for(var f=e;r.length;){var p=r.shift(),d=r.shift();try{f=p(f)}catch(m){d(m);break}}try{o=s(f)}catch(m){return Promise.reject(m)}for(;a.length;)o=o.then(a.shift(),a.shift());return o},l.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,r){return this.request(i(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,r,n){return this.request(i(n||{},{method:e,url:t,data:r}))}})),e.exports=l},5950:function(e,t,r){"use strict";var n=r(1599);function o(){this.handlers=[]}o.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},3656:function(e,t,r){"use strict";var n=r(789),o=r(7020);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},1191:function(e,t,r){"use strict";var n=r(7822);e.exports=function(e,t,r,o,a){var s=new Error(e);return n(s,t,r,o,a)}},4126:function(e,t,r){"use strict";var n=r(1599),o=r(7989),a=r(7458),s=r(8943);function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return i(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(i(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},7822:function(e){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},5469:function(e,t,r){"use strict";var n=r(1599);e.exports=function(e,t){t=t||{};var r={},o=["url","method","data"],a=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(e[o],t[o])}n.forEach(o,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(a,u),n.forEach(s,(function(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(void 0,t[o])})),n.forEach(i,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var l=o.concat(a).concat(s).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return n.forEach(f,u),r}},7202:function(e,t,r){"use strict";var n=r(1191);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},7989:function(e,t,r){"use strict";var n=r(1599),o=r(8943);e.exports=function(e,t,r){var a=this||o;return n.forEach(r,(function(r){e=r.call(a,e,t)})),e}},8943:function(e,t,r){"use strict";var n=r(1599),o=r(4188),a=r(7822),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=r(3344)),c),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)||t&&"application/json"===t["Content-Type"]?(i(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!r&&"json"===this.responseType;if(s||o&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(s){if("SyntaxError"===i.name)throw a(i,this,"E_JSON_PARSE");throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){u.headers[e]=n.merge(s)})),e.exports=u},6013:function(e){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},8710:function(e,t,r){"use strict";var n=r(1599);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(n.isURLSearchParams(t))a=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),a=s.join("&")}if(a){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},7020:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},116:function(e,t,r){"use strict";var n=r(1599);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,a,s){var i=[];i.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(o)&&i.push("path="+o),n.isString(a)&&i.push("domain="+a),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},789:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},6683:function(e){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},778:function(e,t,r){"use strict";var n=r(1599);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},4188:function(e,t,r){"use strict";var n=r(1599);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},2306:function(e,t,r){"use strict";var n=r(1599),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,s={};return e?(n.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},2744:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},8260:function(e,t,r){"use strict";var n=r(8593),o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var a={},s=n.version.split(".");function i(e,t){for(var r=t?t.split("."):s,n=e.split("."),o=0;o<3;o++){if(r[o]>n[o])return!0;if(r[o]<n[o])return!1}return!1}o.transitional=function(e,t,r){var o=t&&i(t);function s(e,t){return"[Axios v"+n.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,i){if(!1===e)throw new Error(s(n," has been removed in "+t));return o&&!a[n]&&(a[n]=!0,console.warn(s(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,i)}},e.exports={isOlderVersion:i,assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var a=n[o],s=t[a];if(s){var i=e[a],c=void 0===i||s(i,a,e);if(!0!==c)throw new TypeError("option "+a+" must be "+c)}else if(!0!==r)throw Error("Unknown option "+a)}},validators:o}},1599:function(e,t,r){"use strict";var n=r(6013),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function s(e){return void 0===e}function i(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isPlainObject:c,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return i(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):a(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},5381:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.direction,r=e.text,o="css--bottom";return"bottom"===t?o="css--bottom":"top"===t?o="css--top":"left"===t?o="css--left":"right"===t&&(o="css--right"),n.createElement("div",{className:"hidden md:block css--fadedtext "+o},r)}},6316:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return p},default:function(){return f}});r(2363);var n=r(7294),o=r(5381),a=r(7448),s=r(1707),i=r(6633),c=r.n(i),u=r(5019);var l=function(){var e=(0,u.$)().t,t=(0,n.useState)(!1),r=t[0],o=t[1],a=(0,n.useState)({name:"",email:"",phone:"",about:""}),s=a[0],i=a[1],l=function(){return function(e){var t=e.target.name;i((function(r){var n;return Object.assign({},r,((n={})[t]=e.target.files[0],n))}))}},f=function(){return function(e){var t=e.target.name,r=e.target.value;i((function(e){var n;return Object.assign({},e,((n={})[t]=r,n))}))}};return n.createElement("div",{className:"relative pt-5 justify-center "},n.createElement("div",{className:"md:container mx-auto px-4 h-full flex flex-col justify-center md:items-center pt-24"},n.createElement("h1",{className:"text-center text-3xl md:text-5xl glitch","data-glitch":e("work_for_us")},e("work_for_us")),n.createElement("div",{className:"flex flex-col-reverse lg:flex-row sm:pt-0 sm:-mx-4 md:py-4  w-full lg:w-2/4"},n.createElement("form",{method:"post",onSubmit:function(e){e.preventDefault();var t=new FormData;Object.entries(s).forEach((function(e){var r=e[0],n=e[1];t.append(r,n)})),c().post("https://getform.io/f/5854d559-b03a-450b-83c1-c5d1bae2de26",t,{headers:{Accept:"application/json"}}).then((function(e){o(!0),i({name:"",email:"",phone:"",about:""}),console.log(e)})).catch((function(e){console.log(e)}))},className:"w-full mb-20 sm:mb-0"},n.createElement("div",{className:"grid grid-cols-1 gap-4"},n.createElement("div",null,n.createElement("input",{className:"css--form-style",name:"name",value:s.name,type:"text",placeholder:e("your_name"),required:!0,autoComplete:"off",onChange:f()})),n.createElement("div",null,n.createElement("input",{className:"css--form-style",name:"email",value:s.email,type:"email",placeholder:e("email"),required:!0,autoComplete:"off",onChange:f()})),n.createElement("div",null,n.createElement("input",{className:"css--form-style",name:"phone",value:s.phone,type:"tel",placeholder:e("phone"),autoComplete:"off",onChange:f()}))),n.createElement("div",{className:"grid grid-cols-1 gap-4 pt-4"},n.createElement("textarea",{className:"css--form-style",name:"about",value:s.about,placeholder:e("about_yourself"),required:!0,onChange:f()})),n.createElement("div",{className:"grid grid-cols-1 gap-4 pt-4"},n.createElement("div",{className:"css--form-style"},n.createElement("label",{htmlFor:"CVUpload",className:"w-full flex"},n.createElement("img",{className:"w-3.5 mr-4",alt:"Upload Icon",src:"/images/icons/upload-icon.svg",height:"100%",width:"100%"})," ",e("your_cv")),n.createElement("input",{className:"hidden",id:"CVUpload",name:"cv",type:"file",placeholder:e("your_cv"),required:!0,autoComplete:"off",onChange:l()})),n.createElement("div",{className:"css--form-style"},n.createElement("label",{htmlFor:"mletter",className:"flex"},n.createElement("img",{className:"w-3.5 mr-4",alt:"Upload Icon",src:"/images/icons/upload-icon.svg",height:"100%",width:"100%"}),e("motivational_letter")),n.createElement("input",{className:"hidden",id:"mletter",name:"motivational",type:"file",placeholder:e("motivational_letter"),required:!0,autoComplete:"off",onChange:l()}))),r&&n.createElement("div",{className:"text-center my-4"},"Your message has been sent."),n.createElement("div",{className:"grid md:grid-cols-4 sm:grid-cols-1 my-4 text-center"},n.createElement("button",{className:"btn px-5",type:"submit"},e("submit")))))))};function f(){return n.createElement("main",{className:"main-wrapper"},n.createElement(a.Z,{pageNr:"2ET9W"}),n.createElement(o.Z,{text:"career@kalmars.lv",direction:"bottom"}),n.createElement("section",{className:"min-h-screen relative"},n.createElement(l,null)))}var p=function(){return n.createElement(s.H,{title:"Career",description:"KALMARS, a software development company, hires new developers. Work with us and get a well-paying job in a new and innovative company!",keywords:"software developer salary, web developer salary, how much developers earn"})}},8593:function(e){"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}}]);
//# sourceMappingURL=component---src-pages-career-js-1b4578893d489d626fb9.js.map