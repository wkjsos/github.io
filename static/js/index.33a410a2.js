(function(e){function n(n){for(var a,i,u=n[0],c=n[1],s=n[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(n);while(d.length)d.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(a=!1)}a&&(r.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},o={index:0},r=[];function i(e){return u.p+"static/js/"+({"pages-agreement-index":"pages-agreement-index","pages-constellation-agreement":"pages-constellation-agreement","pages-constellation-privacy":"pages-constellation-privacy","pages-dream-agreement-index":"pages-dream-agreement-index","pages-dream-privacy-index":"pages-dream-privacy-index","pages-privacy-index":"pages-privacy-index"}[e]||e)+"."+{"pages-agreement-index":"2a494f8f","pages-constellation-agreement":"730500a6","pages-constellation-privacy":"4297ef91","pages-dream-agreement-index":"4c5361b9","pages-dream-privacy-index":"fbd4d5b1","pages-privacy-index":"a9a9e662"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,a){t=o[e]=[n,a]}));n.push(t[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;r=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var p=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56cf")},"0d6f":function(e,n,t){var a=t("51c7");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=t("4f06").default;o("27552e70",a,!0,{sourceMap:!1,shadowMode:!1})},"1d33":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a}));var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},r=[]},"1fe6":function(e,n,t){"use strict";t.r(n);var a=t("9626"),o=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=o.a},"2c45":function(e,n,t){"use strict";var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.constellation=void 0;var o=a(t("a046")),r=function(e){return o.default.request({url:"astro/fortune",method:"GET",data:e})};n.constellation=r;var i={constellation:r};n.default=i},"4a47":function(e,n,t){"use strict";(function(e){var n=t("4ea4"),a=n(t("e143"));e["____A7EC099____"]=!0,delete e["____A7EC099____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"隐私策略",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.compilerVersion="3.1.15",e.__uniConfig.router={mode:"history",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,a.default.component("pages-agreement-index",(function(e){var n={component:t.e("pages-agreement-index").then(function(){return e(t("ef8f"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-privacy-index",(function(e){var n={component:t.e("pages-privacy-index").then(function(){return e(t("039a"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-dream-agreement-index",(function(e){var n={component:t.e("pages-dream-agreement-index").then(function(){return e(t("7495"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-dream-privacy-index",(function(e){var n={component:t.e("pages-dream-privacy-index").then(function(){return e(t("5e41"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-constellation-privacy",(function(e){var n={component:t.e("pages-constellation-privacy").then(function(){return e(t("663e"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-constellation-agreement",(function(e){var n={component:t.e("pages-constellation-agreement").then(function(){return e(t("4067"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/agreement/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"用户协议",navigationStyle:"custom"})},[e("pages-agreement-index",{slot:"page"})])}},meta:{id:1,name:"pages-agreement-index",isNVue:!1,maxWidth:0,pagePath:"pages/agreement/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/privacy/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"隐私政策",navigationStyle:"custom"})},[e("pages-privacy-index",{slot:"page"})])}},meta:{name:"pages-privacy-index",isNVue:!1,maxWidth:0,pagePath:"pages/privacy/index",windowTop:0}},{path:"/pages/dream/agreement/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"用户协议",navigationStyle:"custom"})},[e("pages-dream-agreement-index",{slot:"page"})])}},meta:{name:"pages-dream-agreement-index",isNVue:!1,maxWidth:0,pagePath:"pages/dream/agreement/index",windowTop:0}},{path:"/pages/dream/privacy/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"隐私政策",navigationStyle:"custom"})},[e("pages-dream-privacy-index",{slot:"page"})])}},meta:{name:"pages-dream-privacy-index",isNVue:!1,maxWidth:0,pagePath:"pages/dream/privacy/index",windowTop:0}},{path:"/pages/constellation/privacy",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"隐私政策",navigationStyle:"custom"})},[e("pages-constellation-privacy",{slot:"page"})])}},meta:{name:"pages-constellation-privacy",isNVue:!1,maxWidth:0,pagePath:"pages/constellation/privacy",windowTop:0}},{path:"/pages/constellation/agreement",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"用户协议",navigationStyle:"custom"})},[e("pages-constellation-agreement",{slot:"page"})])}},meta:{name:"pages-constellation-agreement",isNVue:!1,maxWidth:0,pagePath:"pages/constellation/agreement",windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},"51c7":function(e,n,t){var a=t("24fb");n=a(!1),n.push([e.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 页面A */uni-page[data-page="pages/privacy/index"] .uni-page-head-hd{display:none}\n',""]),e.exports=n},"559f":function(e,n,t){"use strict";t.r(n);var a=t("1d33"),o=t("1fe6");for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("9405");var i,u=t("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=c.exports},"56cf":function(e,n,t){"use strict";var a=t("4ea4"),o=a(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("4a47"),t("06b9");var r=a(t("e143")),i=a(t("559f")),u=t("bbf5"),c=a(t("2c45"));r.default.use(u.router),r.default.prototype.$api=c.default,r.default.config.productionTip=!1,i.default.mpType="app";var s=new r.default((0,o.default)({},i.default));(0,u.RouterMount)(s,u.router,"#app")},9405:function(e,n,t){"use strict";var a=t("0d6f"),o=t.n(a);o.a},9626:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){e.log("App Launch")},onShow:function(){e.log("App Show")},onHide:function(){e.log("App Hide")}};n.default=t}).call(this,t("5a52")["default"])},a046:function(e,n,t){"use strict";var a=t("4ea4");t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,r=a(t("ade3")),i={config:{baseUrl:"https://api.jisuapi.com/",header:(o={"Content-Type":"application/json;charset=UTF-8"},(0,r.default)(o,"Content-Type","application/x-www-form-urlencoded"),(0,r.default)(o,"Access-Control-Allow-Origin","*"),o),data:{},method:"GET",dataType:"json",responseType:"text",success:function(){},fail:function(){},complete:function(){}},interceptor:{request:null,response:null},request:function(e){var n=this;return e||(e={}),e.baseUrl=e.baseUrl||this.config.baseUrl,e.dataType=e.dataType||this.config.dataType,e.url=e.baseUrl+e.url,e.data=e.data||{},e.method=e.method||this.config.method,new Promise((function(t,a){var o=null;e.complete=function(e){var r=e.statusCode;if(e.config=o,n.interceptor.response){var i=n.interceptor.response(e);i&&(e=i)}c(e),200===r?t(e):a(e)},o=Object.assign({},n.config,e),o.requestId=(new Date).getTime(),n.interceptor.request&&n.interceptor.request(o),u(o),uni.request(o)}))},get:function(e,n,t){return t||(t={}),t.url=e,t.data=n,t.method="GET",this.request(t)},post:function(e,n,t){return t||(t={}),t.url=e,t.data=n,t.method="POST",this.request(t)},put:function(e,n,t){return t||(t={}),t.url=e,t.data=n,t.method="PUT",this.request(t)},delete:function(e,n,t){return t||(t={}),t.url=e,t.data=n,t.method="DELETE",this.request(t)}};function u(e){0}function c(e){var n=e.statusCode;switch(n){case 200:break;case 401:break;case 404:break;default:break}}n.default=i},bbf5:function(e,n,t){"use strict";(function(e){var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RouterMount",{enumerable:!0,get:function(){return r.RouterMount}}),n.router=void 0;var o=a(t("2909")),r=t("f74a"),i=(0,r.createRouter)({platform:"h5",routes:(0,o.default)([{path:"/pages/agreement/index",aliasPath:"/"},{path:"/pages/privacy/index",aliasPath:"/privacy"},{path:"/pages/dream/agreement/index",aliasPath:"/dream-agreement"},{path:"/pages/dream/privacy/index",aliasPath:"/dream-privacy"},{path:"/pages/constellation/privacy",aliasPath:"/constellation-privacy"},{path:"/pages/constellation/agreement",aliasPath:"/constellation-agreement"}])});n.router=i,i.beforeEach((function(e,n,t){t()})),i.afterEach((function(n,t){e.log("跳转结束")}))}).call(this,t("5a52")["default"])}});