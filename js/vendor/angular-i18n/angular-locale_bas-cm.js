angular.module("ngLocale",[],["$provide",function(n){function e(n){n+="";var e=n.indexOf(".");return-1==e?0:n.length-e-1}function m(n,m){var a=m;void 0===a&&(a=Math.min(e(n),3));var M=Math.pow(10,a),i=(n*M|0)%M;return{v:a,f:i}}var a={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};n.value("$locale",{DATETIME_FORMATS:{AMPMS:["I bikɛ̂glà","I ɓugajɔp"],DAY:["ŋgwà nɔ̂y","ŋgwà njaŋgumba","ŋgwà ûm","ŋgwà ŋgê","ŋgwà mbɔk","ŋgwà kɔɔ","ŋgwà jôn"],MONTH:["Kɔndɔŋ","Màcɛ̂l","Màtùmb","Màtop","M̀puyɛ","Hìlòndɛ̀","Njèbà","Hìkaŋ","Dìpɔ̀s","Bìòôm","Màyɛsèp","Lìbuy li ńyèe"],SHORTDAY:["nɔy","nja","uum","ŋge","mbɔ","kɔɔ","jon"],SHORTMONTH:["kɔn","mac","mat","mto","mpu","hil","nje","hik","dip","bio","may","liɓ"],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"bas-cm",pluralCat:function(n,e){var M=0|n,i=m(n,e);return 1==M&&0==i.v?a.ONE:a.OTHER}})}]);