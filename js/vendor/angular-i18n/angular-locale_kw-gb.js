angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return-1==M?0:e.length-M-1}function r(e,r){var n=r;void 0===n&&(n=Math.min(M(e),3));var a=Math.pow(10,n),t=(e*a|0)%a;return{v:n,f:t}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],DAY:["De Sul","De Lun","De Merth","De Merher","De Yow","De Gwener","De Sadorn"],MONTH:["Mys Genver","Mys Whevrel","Mys Merth","Mys Ebrel","Mys Me","Mys Efan","Mys Gortheren","Mye Est","Mys Gwyngala","Mys Hedra","Mys Du","Mys Kevardhu"],SHORTDAY:["Sul","Lun","Mth","Mhr","Yow","Gwe","Sad"],SHORTMONTH:["Gen","Whe","Mer","Ebr","Me","Efn","Gor","Est","Gwn","Hed","Du","Kev"],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"£",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"kw-gb",pluralCat:function(e,M){var a=0|e,t=r(e,M);return 1==a&&0==t.v?n.ONE:n.OTHER}})}]);