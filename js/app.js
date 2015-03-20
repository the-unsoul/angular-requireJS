define(["angularAMD","translations","ng-token-auth","angular-cookie","ng-animate","angular-route","angular-resource","bootstrap-tpls","angular-translate","dynamic-locale"],function(t,e){var r=angular.module("angularTest",["ngAnimate","ngRoute","ngResource","ui.bootstrap","pascalprecht.translate","tmh.dynamicLocale"]);return r.config(["$routeProvider","$translateProvider",function(r,n){return r.when("/home",t.route({title:"Home",templateUrl:"views/home.html",controller:"testCtrl"})).when("/login",t.route({title:"Login",templateUrl:"views/login.html",controller:"loginCtrl"})).when("/grid",t.route({title:"Grid",templateUrl:"views/grid.html",controller:"gridCtrl"})).when("/map",t.route({title:"Map",templateUrl:"views/gmap.html",controller:"mapCtrl"})).when("/whoosh",t.route({title:"Whoosh",templateUrl:"views/whoosh.html",controller:"whooshCtrl"})).when("/tab",t.route({title:"Tab",templateUrl:"views/tab.html",controller:"tabCtrl"})).otherwise({redirectTo:"/home"}),n.translations("en",e.en),n.translations("vi",e.vi),n.preferredLanguage("en"),n.fallbackLanguage("vi")}]),r.factory("AppData",function(){var t;return t={currentUser:""},{getCurrentUser:function(){return t.currentUser},setCurrentUser:function(e){return t.currentUser=e}}}),r.controller("homeCtrl",["$scope","$location","AppData","$translate","tmhDynamicLocale",function(t,e,r,n,o){return t.currentUser=r.getCurrentUser(),t.loggedIn=!1,t.loginButton="Login",t.isActive=function(t){return e.path()===t?"active":void 0},t.$watch(function(){return r.getCurrentUser()},function(e){return e?t.currentUser=e:void 0}),t.$watch("currentUser",function(e){return e.length>0?t.loggedIn=!0:void 0}),t.$watch("loggedIn",function(e){return e?t.loginButton="Logout":void 0}),t.translate=function(t){return n.use(t),o.set(t)}}]),t.bootstrap(r)});