(function(e){function n(n){for(var r,c,a=n[0],i=n[1],l=n[2],d=0,f=[];d<a.length;d++)c=a[d],o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(f.length)f.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},o={app:0},u=[];function a(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0dd0ac":"54385535","chunk-2d0e5e97":"d1549ec0","chunk-3131ce48":"00a52658","chunk-2d217e3c":"6cf96f3e","chunk-2d2261a6":"913e5aa7","chunk-2d22c114":"b22512d4","chunk-2d22d746":"8a261618","chunk-acfc788e":"c383cfe4"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-acfc788e":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise(function(n,t){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-2d0dd0ac":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-3131ce48":"31d6cfe0","chunk-2d217e3c":"31d6cfe0","chunk-2d2261a6":"31d6cfe0","chunk-2d22c114":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-acfc788e":"db943fe7"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===o))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){l=f[a],d=l.getAttribute("data-href");if(d===r||d===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete c[e],h.parentNode.removeChild(h),t(u)},h.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(h)}).then(function(){c[e]=0}));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise(function(n,t){r=o[e]=[n,t]});n.push(r[2]=u);var l,d=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e),l=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+c+")");u.type=r,u.request=c,t[1](u)}o[e]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,d.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var h=d;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d"),t("c4ca");var r=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],u={name:"App"},a=u,i=t("2877"),l=Object(i["a"])(a,c,o,!1,null,null,null);l.options.__file="App.vue";var d=l.exports,f=(t("7f7f"),t("8c4f")),h=t("323e"),s=t.n(h);r["a"].use(f["a"]);var p=new f["a"]({routes:[{path:"/",name:"Home",component:function(){return t.e("chunk-acfc788e").then(t.bind(null,"bb51"))},meta:{title:""}},{path:"/",component:function(){return t.e("chunk-2d0dd0ac").then(t.bind(null,"8064"))},children:[{path:"about",name:"About",component:function(){return Promise.all([t.e("chunk-3131ce48"),t.e("chunk-2d22d746")]).then(t.bind(null,"f820"))},meta:{title:"О нас"}},{path:"services",name:"Service",component:function(){return Promise.all([t.e("chunk-3131ce48"),t.e("chunk-2d22c114")]).then(t.bind(null,"f23e"))},meta:{title:"Услуги"}},{path:"products",name:"Products",component:function(){return Promise.all([t.e("chunk-3131ce48"),t.e("chunk-2d2261a6")]).then(t.bind(null,"e6dc"))},meta:{title:"Товары"}},{path:"contacts",name:"Contacts",component:function(){return Promise.all([t.e("chunk-3131ce48"),t.e("chunk-2d217e3c")]).then(t.bind(null,"c93c"))},meta:{title:"Контакты"}}]},{path:"*",component:function(){return t.e("chunk-2d0dd0ac").then(t.bind(null,"8064"))},children:[{path:"",name:"NotFound",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))},meta:{title:"Страница не найдена"}}]}],scrollBehavior:function(e,n,t){return{x:0,y:0}}}),m="Простое Решение";p.beforeEach(function(e,n,t){""===e.meta.title?document.title=m:document.title=e.meta.title+" | "+m,t()}),p.beforeResolve(function(e,n,t){e.name&&s.a.start(),t()}),p.afterEach(function(e,n){s.a.done()});var v=p;r["a"].config.productionTip=!1,new r["a"]({router:v,render:function(e){return e(d)}}).$mount("#app")}});