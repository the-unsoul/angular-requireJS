angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return-1==e?0:a.length-e-1}function m(a,m){var i=m;void 0===i&&(i=Math.min(e(a),3));var d=Math.pow(10,i),n=(a*d|0)%d;return{v:i,f:n}}var i={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["ŋdi","ɣetrɔ"],DAY:["kɔsiɖa","dzoɖa","blaɖa","kuɖa","yawoɖa","fiɖa","memleɖa"],MONTH:["dzove","dzodze","tedoxe","afɔfĩe","dama","masa","siamlɔm","deasiamime","anyɔnyɔ","kele","adeɛmekpɔxe","dzome"],SHORTDAY:["kɔs","dzo","bla","kuɖ","yaw","fiɖ","mem"],SHORTMONTH:["dzv","dzd","ted","afɔ","dam","mas","sia","dea","any","kel","ade","dzm"],fullDate:"EEEE, MMMM d 'lia' y",longDate:"MMMM d 'lia' y",medium:"MMM d 'lia', y a 'ga' h:mm:ss",mediumDate:"MMM d 'lia', y",mediumTime:"a 'ga' h:mm:ss","short":"M/d/yy a 'ga' h:mm",shortDate:"M/d/yy",shortTime:"a 'ga' h:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"GHS",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"ee",pluralCat:function(a,e){var d=0|a,n=m(a,e);return 1==d&&0==n.v?i.ONE:i.OTHER}})}]);