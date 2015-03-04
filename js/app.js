define(['angularAMD', 'ng-animate', 'angular-route', 'ui-grid', 'ng-map', 'angular-resource', 'bootstrap-tpls'], function(angularAMD) {
  var app;
  app = angular.module('angularTest', ['ngAnimate', 'ngRoute', 'ui.grid', 'uiGmapgoogle-maps', 'ngResource', 'ui.bootstrap']);
  app.config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when("/home", angularAMD.route({
        templateUrl: 'views/home.html',
        controller: 'testCtrl'
      })).when("/login", angularAMD.route({
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })).when("/grid", angularAMD.route({
        templateUrl: 'views/grid.html',
        controller: 'gridCtrl'
      })).when('/map', angularAMD.route({
        templateUrl: 'views/gmap.html',
        controller: 'mapCtrl'
      })).when('/whoosh', angularAMD.route({
        templateUrl: 'views/whoosh.html',
        controller: 'whooshCtrl'
      })).when('/ui-router', angularAMD.route({
        templateUrl: 'views/tab.html',
        controller: 'tabCtrl'
      })).otherwise({
        redirectTo: '/home'
      });
    }
  ]);
  app.factory('AppData', function() {
    var data;
    data = {
      currentUser: ''
    };
    return {
      getCurrentUser: function() {
        return data.currentUser;
      },
      setCurrentUser: function(newName) {
        return data.currentUser = newName;
      }
    };
  });
  app.controller('homeCtrl', [
    '$scope', '$location', 'AppData', function($scope, $location, AppData) {
      $scope.currentUser = AppData.getCurrentUser();
      $scope.loggedIn = false;
      $scope.loginButton = 'Login';
      $scope.isActive = function(path) {
        if ($location.path() === path) {
          return 'active';
        } else {

        }
      };
      $scope.$watch(function() {
        return AppData.getCurrentUser();
      }, function(newValue) {
        if (newValue) {
          return $scope.currentUser = newValue;
        }
      });
      $scope.$watch('currentUser', function(newValue) {
        if (newValue.length > 0) {
          return $scope.loggedIn = true;
        }
      });
      return $scope.$watch('loggedIn', function(newValue) {
        if (newValue) {
          return $scope.loginButton = 'Logout';
        }
      });
    }
  ]);
  var temp = angularAMD.bootstrap(app);
  console.log(temp);
  return temp;
});
