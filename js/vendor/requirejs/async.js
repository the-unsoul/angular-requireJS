/** @license
 * RequireJS plugin for async dependency load like JSONP and Google Maps
 * Author: Miller Medeiros
 * Version: 0.1.2 (2014/02/24)
 * Released under the MIT license
 */

define([],function(){function e(e){var n,t;n=document.createElement("script"),n.type="text/javascript",n.async=!0,n.src=e,t=document.getElementsByTagName("script")[0],t.parentNode.insertBefore(n,t)}function n(e,n){var t=/!(.+)/,c=e.replace(t,""),a=t.test(e)?e.replace(/.+!/,""):r;return c+=c.indexOf("?")<0?"?":"&",c+a+"="+n}function t(){return c+=1,"__async_req_"+c+"__"}var r="callback",c=0;return{load:function(r,c,a,i){if(i.isBuild)a(null);else{var l=t();window[l]=a,e(n(c.toUrl(r),l))}}}});