webpackJsonp([2],{DICR:function(n,e,t){"use strict";e.a={name:"app"}},GcYY:function(n,e){},M93x:function(n,e,t){"use strict";function a(n){t("GcYY")}var r=t("DICR"),o=t("l3DD"),u=t("46Yf"),c=a,i=u(r.a,o.a,!1,c,null,null);e.a=i.exports},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("MVSX"),r=t("M93x"),o=t("YaEn"),u=t("vWlk"),c=t("facN"),i=t.n(c),s=t("UhSw");t.n(s);a.default.config.productionTip=!1,a.default.use(i.a),a.default.use(u.a),new a.default({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},UhSw:function(n,e){},YaEn:function(n,e,t){"use strict";var a=t("MVSX"),r=t("cigS"),o=function(){return t.e(0).then(t.bind(null,"/URq"))};a.default.use(r.a),e.a=new r.a({routes:[{path:"/",redirect:"/father",component:o},{path:"/father",name:"Father",component:o}]})},l3DD:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o={render:a,staticRenderFns:r};e.a=o},vWlk:function(n,e,t){"use strict";var a=function(n){console.log(n);var e=function(n){return window.innerHeight>n.getBoundingClientRect().top},t=function(n,t){!n.src&&e(n)&&(console.log(n),n.src=n.dataset.src)},a=function(n,e,t,a){var r=null,o=new Date;return function(){var u=new Date;clearTimeout(r),u-o>t?(console.log("66666666666666"),n(a),o=u):r=setTimeout(function(){n(a)},e)}},r=function(n,e){t(n),window.addEventListener("scroll",a(t,1e3,2e3,n))};n.directive("lazy",{inserted:r,updated:r})};e.a=a}},["NHnr"]);
//# sourceMappingURL=app.fe50c28c295182fff182.js.map