angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function t(e,t){var n=t;void 0===n&&(n=Math.min(a(e),3));var u=Math.pow(10,n),i=(e*u|0)%u;return{v:n,f:i}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["Beet","Kemo"],DAY:["Betutab tisap","Betut netai","Betutab aeng’","Betutab somok","Betutab ang’wan","Betutab mut","Betutab lo"],MONTH:["Mulgul","Ng’atyato","Kiptamo","Iwat kut","Ng’eiyet","Waki","Roptui","Kipkogaga","Buret","Epeso","Kipsunde netai","Kipsunde nebo aeng"],SHORTDAY:["Tis","Tai","Aen","Som","Ang","Mut","Loh"],SHORTMONTH:["Mul","Nga","Kip","Iwa","Nge","Wak","Rop","Kog","Bur","Epe","Tai","Aen"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"kln",pluralCat:function(e,a){var u=0|e,i=t(e,a);return 1==u&&0==i.v?n.ONE:n.OTHER}})}]);