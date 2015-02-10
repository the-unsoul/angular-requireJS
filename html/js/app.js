define(['angularAMD', 'angular-route'], function(angularAMD) {
  var app;
  app = angular.module('angularTest', ['ngRoute']);
  app.config(function($routeProvider) {
    return $routeProvider.when("/home", angularAMD.route({
      templateUrl: 'views/home.html',
      controller: 'testCtrl'
    })).when("/login", angularAMD.route({
      templateUrl: 'views/login.html',
      controller: 'loginCtrl'
    })).when("/grid", angularAMD.route({
      templateUrl: 'views/grid-ui.html',
      controller: 'gridCtrl'
    })).otherwise({
      redirectTo: '/home'
    });
  });
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
          $scope.loggedIn = true;
        }
        return console.log($scope.loggedIn);
      });
      return $scope.$watch('loggedIn', function(newValue) {
        if (newValue) {
          $scope.loginButton = 'Logout';
        }
        return console.log($scope.loginButton);
      });
    }
  ]);
  return angularAMD.bootstrap(app);
});
