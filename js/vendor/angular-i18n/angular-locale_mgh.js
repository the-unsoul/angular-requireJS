angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return-1==e?0:a.length-e-1}function n(a,n){var i=n;void 0===i&&(i=Math.min(e(a),3));var M=Math.pow(10,i),r=(a*M|0)%M;return{v:i,f:r}}var i={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["wichishu","mchochil’l"],DAY:["Sabato","Jumatatu","Jumanne","Jumatano","Arahamisi","Ijumaa","Jumamosi"],MONTH:["Mweri wo kwanza","Mweri wo unayeli","Mweri wo uneraru","Mweri wo unecheshe","Mweri wo unethanu","Mweri wo thanu na mocha","Mweri wo saba","Mweri wo nane","Mweri wo tisa","Mweri wo kumi","Mweri wo kumi na moja","Mweri wo kumi na yel’li"],SHORTDAY:["Sab","Jtt","Jnn","Jtn","Ara","Iju","Jmo"],SHORTMONTH:["Kwa","Una","Rar","Che","Tha","Moc","Sab","Nan","Tis","Kum","Moj","Yel"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"MTn",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"mgh",pluralCat:function(a,e){var M=0|a,r=n(a,e);return 1==M&&0==r.v?i.ONE:i.OTHER}})}]);