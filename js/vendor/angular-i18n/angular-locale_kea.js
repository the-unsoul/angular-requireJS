angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function r(e,r){var u=r;void 0===u&&(u=Math.min(a(e),3));var n=Math.pow(10,u),i=(e*n|0)%n;return{v:u,f:i}}var u={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["am","pm"],DAY:["dumingu","sigunda-fera","tersa-fera","kuarta-fera","kinta-fera","sesta-fera","sabadu"],MONTH:["Janeru","Febreru","Marsu","Abril","Maiu","Junhu","Julhu","Agostu","Setenbru","Otubru","Nuvenbru","Dizenbru"],SHORTDAY:["dum","sig","ter","kua","kin","ses","sab"],SHORTMONTH:["Jan","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Otu","Nuv","Diz"],fullDate:"EEEE, d 'di' MMMM 'di' y",longDate:"d 'di' MMMM 'di' y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CVE",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"kea",pluralCat:function(e,a){var n=0|e,i=r(e,a);return 1==n&&0==i.v?u.ONE:u.OTHER}})}]);