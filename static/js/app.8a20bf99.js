(function(e){function t(t){for(var r,o,a=t[0],i=t[1],l=t[2],s=0,f=[];s<a.length;s++)o=a[s],c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"d1549ec0","chunk-3131ce48":"00a52658","chunk-2d2261a6":"b7639b6f","chunk-2d22c114":"77f69fe4","chunk-2d22d746":"5eb16827","chunk-7e0478ae":"7efa768a","chunk-3d88f70f":"ea7c7a4b","chunk-4e7341c0":"80cf43b7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3d88f70f":1,"chunk-4e7341c0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"31d6cfe0","chunk-3131ce48":"31d6cfe0","chunk-2d2261a6":"31d6cfe0","chunk-2d22c114":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-7e0478ae":"31d6cfe0","chunk-3d88f70f":"b1605d0a","chunk-4e7341c0":"fd1f34a4"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){l=f[a],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){o[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=u);var l,s=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e),l=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}c[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,s.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("26b9"),c=n.n(o),u=n("1157"),a=n.n(u),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("vue-progress-bar")],1)},l=[],s={name:"App",data:function(){return{globalTitle:"Простое Решение"}},mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach(function(t,n,r){e.$Progress.start(),""===t.meta.title?document.title=e.globalTitle:document.title=t.meta.title+" | "+e.globalTitle,r()}),this.$router.afterEach(function(t,n){e.$Progress.finish()})}},f=s,d=n("2877"),h=Object(d["a"])(f,i,l,!1,null,null,null);h.options.__file="App.vue";var p=h.exports,m=n("8c4f"),b=function(){return n.e("chunk-3d88f70f").then(n.bind(null,"bb51"))},g=function(){return n.e("chunk-4e7341c0").then(n.bind(null,"8064"))},v=function(){return Promise.all([n.e("chunk-3131ce48"),n.e("chunk-2d22d746")]).then(n.bind(null,"f820"))},k=function(){return Promise.all([n.e("chunk-3131ce48"),n.e("chunk-2d22c114")]).then(n.bind(null,"f23e"))},y=function(){return Promise.all([n.e("chunk-3131ce48"),n.e("chunk-2d2261a6")]).then(n.bind(null,"e6dc"))},w=function(){return Promise.all([n.e("chunk-3131ce48"),n.e("chunk-7e0478ae")]).then(n.bind(null,"c93c"))},P=function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))};r["a"].use(m["a"]);var j=new m["a"]({routes:[{path:"/",name:"Home",component:b,meta:{title:""}},{path:"/",component:g,children:[{path:"about",name:"About",component:v,meta:{title:"О нас"}},{path:"services",name:"Services",component:k,meta:{title:"Услуги"}},{path:"products",name:"Products",component:y,meta:{title:"Товары"}},{path:"contacts",name:"Contacts",component:w,meta:{title:"Контакты"}}]},{path:"*",component:g,children:[{path:"",name:"NotFound",component:P,meta:{title:"Страница не найдена"}}]}],scrollBehavior:function(e,t,n){return{x:0,y:0}}}),T=j;window.$=window.jQuery=a.a,r["a"].config.productionTip=!1,r["a"].use(c.a,{color:"rgb(33, 133, 208)",failedColor:"red",height:"2px",transition:{speed:"1.5s",opacity:"0.6s",termination:400}}),new r["a"]({el:"#app",router:T,render:function(e){return e(p)}})}});