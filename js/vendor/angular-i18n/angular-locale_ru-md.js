angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return-1==M?0:e.length-M-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(M(e),3));var m=Math.pow(10,r),a=(e*m|0)%m;return{v:r,f:a}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],MONTH:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],SHORTDAY:["вс","пн","вт","ср","чт","пт","сб"],SHORTMONTH:["янв.","февр.","марта","апр.","мая","июня","июля","авг.","сент.","окт.","нояб.","дек."],fullDate:"EEEE, d MMMM y 'г'.",longDate:"d MMMM y 'г'.",medium:"d MMM y 'г'. H:mm:ss",mediumDate:"d MMM y 'г'.",mediumTime:"H:mm:ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"MDL",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ru-md",pluralCat:function(e,M){var m=0|e,a=n(e,M);return 0==a.v&&m%10==1&&m%100!=11?r.ONE:0==a.v&&m%10>=2&&4>=m%10&&(12>m%100||m%100>14)?r.FEW:0==a.v&&m%10==0||0==a.v&&m%10>=5&&9>=m%10||0==a.v&&m%100>=11&&14>=m%100?r.MANY:r.OTHER}})}]);