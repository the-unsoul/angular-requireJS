angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return-1==e?0:a.length-e-1}function i(a,i){var M=i;void 0===M&&(M=Math.min(e(a),3));var m=Math.pow(10,M),r=(a*m|0)%m;return{v:M,f:r}}var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Ma/Mo","Mambia/Mog"],DAY:["Chumapiri","Chumatato","Chumaine","Chumatano","Aramisi","Ichuma","Esabato"],MONTH:["Chanuari","Feburari","Machi","Apiriri","Mei","Juni","Chulai","Agosti","Septemba","Okitoba","Nobemba","Disemba"],SHORTDAY:["Cpr","Ctt","Cmn","Cmt","Ars","Icm","Est"],SHORTMONTH:["Can","Feb","Mac","Apr","Mei","Jun","Cul","Agt","Sep","Okt","Nob","Dis"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"guz-ke",pluralCat:function(a,e){var m=0|a,r=i(a,e);return 1==m&&0==r.v?M.ONE:M.OTHER}})}]);