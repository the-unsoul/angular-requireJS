angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function r(e,r){var i=r;void 0===i&&(i=Math.min(a(e),3));var n=Math.pow(10,i),t=(e*n|0)%n;return{v:i,f:t}}var i={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["priekšpusdienā","pēcpusdienā"],DAY:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],MONTH:["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris"],SHORTDAY:["Sv","Pr","Ot","Tr","Ce","Pk","Se"],SHORTMONTH:["janv.","febr.","marts","apr.","maijs","jūn.","jūl.","aug.","sept.","okt.","nov.","dec."],fullDate:"EEEE, y. 'gada' d. MMMM",longDate:"y. 'gada' d. MMMM",medium:"y. 'gada' d. MMM HH:mm:ss",mediumDate:"y. 'gada' d. MMM",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:0,lgSize:0,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"lv",pluralCat:function(e,a){var n=r(e,a);return e%10==0||e%100>=11&&19>=e%100||2==n.v&&n.f%100>=11&&n.f%100<=19?i.ZERO:e%10==1&&e%100!=11||2==n.v&&n.f%10==1&&n.f%100!=11||2!=n.v&&n.f%10==1?i.ONE:i.OTHER}})}]);