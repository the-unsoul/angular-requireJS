angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function m(e,m){var n=m;void 0===n&&(n=Math.min(a(e),3));var i=Math.pow(10,n),r=(e*i|0)%i;return{v:n,f:r}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["dimans","lindi","mardi","merkredi","zedi","vandredi","samdi"],MONTH:["zanvie","fevriye","mars","avril","me","zin","zilye","out","septam","oktob","novam","desam"],SHORTDAY:["dim","lin","mar","mer","ze","van","sam"],SHORTMONTH:["zan","fev","mar","avr","me","zin","zil","out","sep","okt","nov","des"],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"MURs",DECIMAL_SEP:".",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"mfe",pluralCat:function(e,a){var i=0|e,r=m(e,a);return 1==i&&0==r.v?n.ONE:n.OTHER}})}]);