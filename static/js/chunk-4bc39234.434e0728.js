(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bc39234"],{7761:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("cadf"),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("551c"),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("097d"),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__),axios__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__["a"]={name:"ContactsPage",data:function(){return{phone:"",address:"",email:""}},computed:{map:{get:function(){return""},set:function set(value){eval("$('.ui.embed').embed({ url: '"+value+"' });")}}},beforeRouteEnter:function(_,e,t){axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/static/content/contacts.json",{responseType:"json"}).then(function(_){null!=_.data?t(function(e){return e.setData(_.data)}):t(new Error)}).catch(function(_){t(_)})},beforeRouteUpdate:function(_,e,t){axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/static/content/contacts.json",{responseType:"json"}).then(function(_){null!=_.data?t(function(e){return e.setData(_.data)}):t(new Error)}).catch(function(_){t(_)})},methods:{setData:function(_){this.phone=_.phone,this.address=_.address,this.email=_.email,this.map=_.map}}}},c93c:function(_,e,t){"use strict";t.r(e);var a=function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("div",{staticClass:"content"},[t("h1",[_._v("Контакты")]),t("div",[t("i",{staticClass:"phone icon"}),_._v("Телефон: "+_._s(_.phone))]),t("div",[t("i",{staticClass:"home icon"}),_._v("Адрес: "+_._s(_.address))]),t("div",[t("i",{staticClass:"mail icon"}),_._v("Электронный адрес:\n    "),t("a",{attrs:{href:"mailto:"+_.email}},[_._v(_._s(_.email))])]),t("h2",[_._v("Мы на карте")]),t("div",{staticClass:"ui embed"})])},s=[],o=t("7761"),n=o["a"],r=t("2877"),i=Object(r["a"])(n,a,s,!1,null,null,null);i.options.__file="Contacts.vue";e["default"]=i.exports}}]);