(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d746"],{f820:function(t,n,a){"use strict";a.r(n);var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[a("h1",[t._v("О нас")]),a("img",{staticStyle:{width:"20rem","margin-left":"1rem"},attrs:{src:t.photo,align:"right"}}),t._l(t.paragraphs,function(n,o){return a("p",{key:o},[t._v(t._s(n))])})],2)},e=[],c=a("bc3a"),r=a.n(c),s={name:"AboutPage",data:function(){return{photo:"",paragraphs:[]}},beforeRouteEnter:function(t,n,a){r.a.get("./static/content/about.json").then(function(t){a(function(n){return n.setData(t.data)})}).catch(function(t){console.log(t),a("/404")})},beforeRouteUpdate:function(t,n,a){r.a.get("./static/content/about.json").then(function(t){a(function(n){return n.setData(t.data)})}).catch(function(t){console.log(t),a("/404")})},methods:{setData:function(t){this.photo=t.photo,this.paragraphs=t.paragraphs}}},u=s,i=a("2877"),h=Object(i["a"])(u,o,e,!1,null,null,null);h.options.__file="About.vue";n["default"]=h.exports}}]);