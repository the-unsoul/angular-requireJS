define([
    'angularAMD', 
    'translations', 
    'angular-cookie', 
    'ng-token-auth', 
    'ng-animate', 
    'angular-route', 
    'angular-resource', 
    'bootstrap-tpls', 
    'angular-translate', 
    'dynamic-locale'
    ], function(angularAMD, translations) {

    var app = angular.module('angularTest', [
        'ngAnimate', 
        'ngRoute', 
        'ngResource', 
        'ui.bootstrap', 
        'pascalprecht.translate', 
        'tmh.dynamicLocale',
        'ng-token-auth',
    ]);

    /* ------ {{ config }} ------------------------------------ */
    app.config([
        '$routeProvider', '$translateProvider',
        function($routeProvider, $translateProvider) {
            $routeProvider.when("/home", angularAMD.route({
                title: 'Home',
                templateUrl: 'views/home.html',
                controller: 'testCtrl'
            })).when("/login", angularAMD.route({
                title: 'Login',
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
            })).when("/grid", angularAMD.route({
                title: 'Grid',
                templateUrl: 'views/grid.html',
                controller: 'gridCtrl'
            })).when('/map', angularAMD.route({
                title: 'Map',
                templateUrl: 'views/gmap.html',
                controller: 'mapCtrl'
            })).when('/whoosh', angularAMD.route({
                title: 'Whoosh',
                templateUrl: 'views/whoosh.html',
                controller: 'whooshCtrl'
            })).when('/tab', angularAMD.route({
                title: 'Tab',
                templateUrl: 'views/tab.html',
                controller: 'tabCtrl'
            })).otherwise({
                redirectTo: '/home'
            });
            $translateProvider.translations('en', translations.en);
            $translateProvider.translations('vi', translations.vi);
            $translateProvider.preferredLanguage('en');
            return $translateProvider.fallbackLanguage('vi');
        }
    ]);

    /* ------ {{ fatory }} ------------------------------------ */
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

    /* ------ {{ controller }} ------------------------------------ */
    app.controller('homeCtrl', [
        '$scope', '$location', 'AppData', '$translate', 'tmhDynamicLocale',
        function($scope, $location, AppData, $translate, tmhDynamicLocale) {
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
            $scope.$watch('loggedIn', function(newValue) {
                if (newValue) {
                    return $scope.loginButton = 'Logout';
                }
            });
            return $scope.translate = function(langKey) {
                $translate.use(langKey);
                return tmhDynamicLocale.set(langKey);
            };
        }
    ]);

    return angularAMD.bootstrap(app);
});
