angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function M(e,M){var n=M;void 0===n&&(n=Math.min(a(e),3));var i=Math.pow(10,n),u=(e*i|0)%i;return{v:n,f:u}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sāpate","Mōnite","Tūsite","Pulelulu","Tuʻapulelulu","Falaite","Tokonaki"],MONTH:["Sānuali","Fēpueli","Maʻasi","ʻEpeleli","Mē","Sune","Siulai","ʻAokosi","Sepitema","ʻOkatopa","Nōvema","Tīsema"],SHORTDAY:["Sāp","Mōn","Tūs","Pul","Tuʻa","Fal","Tok"],SHORTMONTH:["Sān","Fēp","Maʻa","ʻEpe","Mē","Sun","Siu","ʻAok","Sep","ʻOka","Nōv","Tīs"],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"d/M/yy h:mm a",shortDate:"d/M/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"T$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"to-to",pluralCat:function(e,a){var i=0|e,u=M(e,a);return 1==i&&0==u.v?n.ONE:n.OTHER}})}]);