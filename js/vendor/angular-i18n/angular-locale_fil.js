angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");return-1==r?0:e.length-r-1}function M(e,M){var a=M;void 0===a&&(a=Math.min(r(e),3));var n=Math.pow(10,a),o=(e*n|0)%n;return{v:a,f:o}}var a={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Linggo","Lunes","Martes","Miyerkules","Huwebes","Biyernes","Sabado"],MONTH:["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],SHORTDAY:["Lin","Lun","Mar","Miy","Huw","Biy","Sab"],SHORTMONTH:["Ene","Peb","Mar","Abr","May","Hun","Hul","Ago","Set","Okt","Nob","Dis"],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₱",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"fil",pluralCat:function(e,r){var n=0|e,o=M(e,r);return 0==o.v&&(1==n||2==n||3==n)||0==o.v&&n%10!=4&&n%10!=6&&n%10!=9||0!=o.v&&o.f%10!=4&&o.f%10!=6&&o.f%10!=9?a.ONE:a.OTHER}})}]);