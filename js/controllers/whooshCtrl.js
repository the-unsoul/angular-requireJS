define(["app","constants","whoosh"],function(o){o.controller("whooshCtrl",["$scope","$http","whooshResource","WHOOSH",function(o,h,t,n){o.whoosh=t,o.data=o.whoosh.getArray(function(h){o.display=h}),o.WHOOSH=n}])});