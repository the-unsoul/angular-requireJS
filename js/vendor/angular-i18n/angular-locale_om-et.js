angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return-1==e?0:a.length-e-1}function i(a,i){var n=i;void 0===n&&(n=Math.min(e(a),3));var m=Math.pow(10,n),o=(a*m|0)%m;return{v:n,f:o}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["WD","WB"],DAY:["Dilbata","Wiixata","Qibxata","Roobii","Kamiisa","Jimaata","Sanbata"],MONTH:["Amajjii","Guraandhala","Bitooteessa","Elba","Caamsa","Waxabajjii","Adooleessa","Hagayya","Fuulbana","Onkololeessa","Sadaasa","Muddee"],SHORTDAY:["Dil","Wix","Qib","Rob","Kam","Jim","San"],SHORTMONTH:["Ama","Gur","Bit","Elb","Cam","Wax","Ado","Hag","Ful","Onk","Sad","Mud"],fullDate:"EEEE, MMMM d, y",longDate:"dd MMMM y",medium:"dd-MMM-y h:mm:ss a",mediumDate:"dd-MMM-y",mediumTime:"h:mm:ss a","short":"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Birr",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"om-et",pluralCat:function(a,e){var m=0|a,o=i(a,e);return 1==m&&0==o.v?n.ONE:n.OTHER}})}]);