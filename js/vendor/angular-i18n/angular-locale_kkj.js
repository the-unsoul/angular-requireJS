angular.module("ngLocale",[],["$provide",function(n){function a(n){n+="";var a=n.indexOf(".");return-1==a?0:n.length-a-1}function i(n,i){var m=i;void 0===m&&(m=Math.min(a(n),3));var e=Math.pow(10,m),d=(n*e|0)%e;return{v:m,f:d}}var m={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};n.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["sɔndi","lundi","mardi","mɛrkɛrɛdi","yedi","vaŋdɛrɛdi","mɔnɔ sɔndi"],MONTH:["pamba","wanja","mbiyɔ mɛndoŋgɔ","Nyɔlɔmbɔŋgɔ","Mɔnɔ ŋgbanja","Nyaŋgwɛ ŋgbanja","kuŋgwɛ","fɛ","njapi","nyukul","11","ɓulɓusɛ"],SHORTDAY:["sɔndi","lundi","mardi","mɛrkɛrɛdi","yedi","vaŋdɛrɛdi","mɔnɔ sɔndi"],SHORTMONTH:["pamba","wanja","mbiyɔ mɛndoŋgɔ","Nyɔlɔmbɔŋgɔ","Mɔnɔ ŋgbanja","Nyaŋgwɛ ŋgbanja","kuŋgwɛ","fɛ","njapi","nyukul","11","ɓulɓusɛ"],fullDate:"EEEE dd MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM y HH:mm",shortDate:"dd/MM y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"kkj",pluralCat:function(n,a){var e=0|n,d=i(n,a);return 1==e&&0==d.v?m.ONE:m.OTHER}})}]);