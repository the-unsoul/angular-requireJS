angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return-1==e?0:a.length-e-1}function n(a,n){var M=n;void 0===M&&(M=Math.min(e(a),3));var i=Math.pow(10,M),m=(a*i|0)%i;return{v:M,f:m}}var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AN","EW"],DAY:["Kwesida","Dwowda","Benada","Wukuda","Yawda","Fida","Memeneda"],MONTH:["Sanda-Ɔpɛpɔn","Kwakwar-Ɔgyefuo","Ebɔw-Ɔbenem","Ebɔbira-Oforisuo","Esusow Aketseaba-Kɔtɔnimba","Obirade-Ayɛwohomumu","Ayɛwoho-Kitawonsa","Difuu-Ɔsandaa","Fankwa-Ɛbɔ","Ɔbɛsɛ-Ahinime","Ɔberɛfɛw-Obubuo","Mumu-Ɔpɛnimba"],SHORTDAY:["Kwe","Dwo","Ben","Wuk","Yaw","Fia","Mem"],SHORTMONTH:["S-Ɔ","K-Ɔ","E-Ɔ","E-O","E-K","O-A","A-K","D-Ɔ","F-Ɛ","Ɔ-A","Ɔ-O","M-Ɔ"],fullDate:"EEEE, y MMMM dd",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"yy/MM/dd HH:mm",shortDate:"yy/MM/dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"GHS",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"ak",pluralCat:function(a,e){var i=0|a,m=n(a,e);return 1==i&&0==m.v?M.ONE:M.OTHER}})}]);