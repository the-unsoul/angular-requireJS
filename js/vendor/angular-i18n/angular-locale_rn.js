angular.module("ngLocale",[],["$provide",function(a){function u(a){a+="";var u=a.indexOf(".");return-1==u?0:a.length-u-1}function e(a,e){var n=e;void 0===n&&(n=Math.min(u(a),3));var r=Math.pow(10,n),M=(a*r|0)%r;return{v:n,f:M}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Z.MU.","Z.MW."],DAY:["Ku w’indwi","Ku wa mbere","Ku wa kabiri","Ku wa gatatu","Ku wa kane","Ku wa gatanu","Ku wa gatandatu"],MONTH:["Nzero","Ruhuhuma","Ntwarante","Ndamukiza","Rusama","Ruheshi","Mukakaro","Nyandagaro","Nyakanga","Gitugutu","Munyonyo","Kigarama"],SHORTDAY:["cu.","mbe.","kab.","gtu.","kan.","gnu.","gnd."],SHORTMONTH:["Mut.","Gas.","Wer.","Mat.","Gic.","Kam.","Nya.","Kan.","Nze.","Ukw.","Ugu.","Uku."],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FBu",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"rn",pluralCat:function(a,u){var r=0|a,M=e(a,u);return 1==r&&0==M.v?n.ONE:n.OTHER}})}]);