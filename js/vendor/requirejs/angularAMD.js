/*!
 angularAMD v0.2.1
 (c) 2013-2014 Marcos Lin https://github.com/marcoslin/
 License: MIT
*/

define([],function(){function e(){if(!f)throw new Error("angularAMD not initialized.  Need to call angularAMD.bootstrap(app) first.")}function r(){if(p)throw new Error("setAlternateAngular can only be called once.");p={},e(),c.extend(p,c),p.module=function(e,r){if("undefined"==typeof r)return g.hasOwnProperty(e)?y[e]:c.module(e);var o=c.module.apply(null,arguments),n={name:e,module:o};return h.push(n),c.extend(o,s),g[e]=!0,y[e]=o,o},window.angular=p}function o(){}function n(e){return function(r,o){return f?s[e](r,o):v.push({recipe:e,name:r,constructor:o}),this}}var t,i,a,l,u,c,p,f=!1,d={},s={},v=[],y={},g={},h=[];return o.prototype.route=function(e){var r;if(e.hasOwnProperty("controllerUrl")?(r=e.controllerUrl,delete e.controllerUrl,"undefined"==typeof e.controller&&(e.controller=["$scope","__AAMDCtrl","$injector",function(e,r,o){"undefined"!=typeof r&&o.invoke(r,this,{$scope:e})}])):"string"==typeof e.controller&&(r=e.controller),r){var o=e.resolve||{};o.__AAMDCtrl=["$q","$rootScope",function(e,o){var n=e.defer();return require([r],function(e){n.resolve(e),o.$apply()}),n.promise}],e.resolve=o}return e},o.prototype.appname=function(){return e(),t},o.prototype.processQueue=function(){function r(e){l.invoke(e)}if(e(),"undefined"==typeof p)throw new Error("Alternate angular not set.  Make sure that `enable_ngload` option has been set when calling angularAMD.bootstrap");for(;h.length;){var o,n=h.shift(),t=n.module._invokeQueue;for(o=0;o<t.length;o+=1){var i=t[o],a=i[0],c=i[1],f=i[2];if(d.hasOwnProperty(a)){var s;s="$injector"===a&&"invoke"===c?u:d[a],s[c].apply(null,f)}else window.console&&window.console.error('"'+a+'" not found!!!')}if(n.module._configBlocks){var v=n.module._configBlocks;for(o=0;o<v.length;o+=1){var g=v[o],m=g[1],_=g[2];u[m].apply(null,_)}}n.module._runBlocks&&angular.forEach(n.module._runBlocks,r),y={}}},o.prototype.getCachedProvider=function(r){e();var o;switch(r){case"__orig_angular":o=c;break;case"__alt_angular":o=p;break;case"__orig_app":o=i;break;case"__alt_app":o=a;break;default:o=d[r]}return o},o.prototype.inject=function(){return e(),l.invoke.apply(null,arguments)},o.prototype.config=function(){return e(),u.invoke.apply(null,arguments)},o.prototype.reset=function(){"undefined"!=typeof c&&(window.angular=c,i=void 0,a=void 0,p=void 0,c=void 0,s={},v=[],h=[],t=void 0,l=void 0,u=void 0,d={},f=!1)},o.prototype.bootstrap=function(e,o,n){if(f)throw Error("bootstrap can only be called once.");if("undefined"==typeof o&&(o=!0),c=angular,i=e,a={},c.extend(a,i),n=n||document.documentElement,e.config(["$controllerProvider","$compileProvider","$filterProvider","$animateProvider","$provide","$injector",function(e,r,o,n,t,i){u=i,d={$controllerProvider:e,$compileProvider:r,$filterProvider:o,$animateProvider:n,$provide:t},angular.extend(s,{provider:function(e,r){return t.provider(e,r),this},controller:function(r,o){return e.register(r,o),this},directive:function(e,o){return r.directive(e,o),this},filter:function(e,r){return o.register(e,r),this},factory:function(e,r){return t.factory(e,r),this},service:function(e,r){return t.service(e,r),this},constant:function(e,r){return t.constant(e,r),this},value:function(e,r){return t.value(e,r),this},animation:angular.bind(n,n.register)}),angular.extend(a,s)}]),e.run(["$injector",function(e){l=e,d.$injector=l}]),t=e.name,v.length>0){for(var p=0;p<v.length;p+=1){var y=v[p];i[y.recipe](y.name,y.constructor)}v=[]}return i.register=s,c.element(document).ready(function(){c.bootstrap(n,[t]),f=!0,o&&r()}),a},o.prototype.provider=n("provider"),o.prototype.controller=n("controller"),o.prototype.directive=n("directive"),o.prototype.filter=n("filter"),o.prototype.factory=n("factory"),o.prototype.service=n("service"),o.prototype.constant=n("constant"),o.prototype.value=n("value"),o.prototype.animation=n("animation"),new o});