angular.module("ngLocale",[],["$provide",function(e){function i(e){e+="";var i=e.indexOf(".");return-1==i?0:e.length-i-1}function r(e,r){var a=r;void 0===a&&(a=Math.min(i(e),3));var n=Math.pow(10,a),o=(e*n|0)%n;return{v:a,f:o}}var a={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Dimingu","Chiposi","Chipiri","Chitatu","Chinai","Chishanu","Sabudu"],MONTH:["Janeiro","Fevreiro","Marco","Abril","Maio","Junho","Julho","Augusto","Setembro","Otubro","Novembro","Decembro"],SHORTDAY:["Dim","Pos","Pir","Tat","Nai","Sha","Sab"],SHORTMONTH:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Aug","Set","Otu","Nov","Dec"],fullDate:"EEEE, d 'de' MMMM 'de' y",longDate:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y HH:mm:ss",mediumDate:"d 'de' MMM 'de' y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"MTn",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"seh",pluralCat:function(e,i){var n=0|e,o=r(e,i);return 1==n&&0==o.v?a.ONE:a.OTHER}})}]);