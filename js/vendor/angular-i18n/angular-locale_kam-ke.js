angular.module("ngLocale",[],["$provide",function(a){function n(a){a+="";var n=a.indexOf(".");return-1==n?0:a.length-n-1}function M(a,M){var e=M;void 0===e&&(e=Math.min(n(a),3));var t=Math.pow(10,e),i=(a*t|0)%t;return{v:e,f:i}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Ĩyakwakya","Ĩyawĩoo"],DAY:["Wa kyumwa","Wa kwambĩlĩlya","Wa kelĩ","Wa katatũ","Wa kana","Wa katano","Wa thanthatũ"],MONTH:["Mwai wa mbee","Mwai wa kelĩ","Mwai wa katatũ","Mwai wa kana","Mwai wa katano","Mwai wa thanthatũ","Mwai wa muonza","Mwai wa nyaanya","Mwai wa kenda","Mwai wa ĩkumi","Mwai wa ĩkumi na ĩmwe","Mwai wa ĩkumi na ilĩ"],SHORTDAY:["Wky","Wkw","Wkl","Wtũ","Wkn","Wtn","Wth"],SHORTMONTH:["Mbe","Kel","Ktũ","Kan","Ktn","Tha","Moo","Nya","Knd","Ĩku","Ĩkm","Ĩkl"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"kam-ke",pluralCat:function(a,n){var t=0|a,i=M(a,n);return 1==t&&0==i.v?e.ONE:e.OTHER}})}]);