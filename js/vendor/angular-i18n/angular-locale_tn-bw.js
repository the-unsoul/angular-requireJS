angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function o(e,o){var M=o;void 0===M&&(M=Math.min(a(e),3));var n=Math.pow(10,M),t=(e*n|0)%n;return{v:M,f:t}}var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Tshipi","Mosopulogo","Labobedi","Laboraro","Labone","Labotlhano","Matlhatso"],MONTH:["Ferikgong","Tlhakole","Mopitlo","Moranang","Motsheganang","Seetebosigo","Phukwi","Phatwe","Lwetse","Diphalane","Ngwanatsele","Sedimonthole"],SHORTDAY:["Tsh","Mos","Bed","Rar","Ne","Tla","Mat"],SHORTMONTH:["Fer","Tlh","Mop","Mor","Mot","See","Phu","Pha","Lwe","Dip","Ngw","Sed"],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"P",DECIMAL_SEP:".",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"tn-bw",pluralCat:function(e,a){var n=0|e,t=o(e,a);return 1==n&&0==t.v?M.ONE:M.OTHER}})}]);