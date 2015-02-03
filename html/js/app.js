define(['angularAMD', 'angular-route'], function(angularAMD) {
  var app;
  app = angular.module('angularTest', ['ngRoute']);
  app.config(function($routeProvider) {
    return $routeProvider.when("/", angularAMD.route({
      templateUrl: 'views/home.html',
      controller: ['testCtrl', 'loginCtrl']
    })).otherwise({
      redirectTo: '/'
    });
  });
  return angularAMD.bootstrap(app);
});
