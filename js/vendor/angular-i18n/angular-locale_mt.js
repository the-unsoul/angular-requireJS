angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Il-Ħadd","It-Tnejn","It-Tlieta","L-Erbgħa","Il-Ħamis","Il-Ġimgħa","Is-Sibt"],MONTH:["Jannar","Frar","Marzu","April","Mejju","Ġunju","Lulju","Awwissu","Settembru","Ottubru","Novembru","Diċembru"],SHORTDAY:["Ħad","Tne","Tli","Erb","Ħam","Ġim","Sib"],SHORTMONTH:["Jan","Fra","Mar","Apr","Mej","Ġun","Lul","Aww","Set","Ott","Nov","Diċ"],fullDate:"EEEE, d 'ta'’ MMMM y",longDate:"d 'ta'’ MMMM y",medium:"dd MMM y HH:mm:ss",mediumDate:"dd MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"mt",pluralCat:function(e){return 1==e?M.ONE:0==e||e%100>=2&&10>=e%100?M.FEW:e%100>=11&&19>=e%100?M.MANY:M.OTHER}})}]);