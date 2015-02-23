requirejs.config({
  baseUrl: "js/vendor",
  paths: {
    async: 'requirejs/async',
    jquery: 'jquery-1.11.1.min',
    angular: 'angular/angular',
    angularAMD: 'requirejs/angularAMD.min',
    underscore: 'underscore-min',
    'angular-route': 'angular/angular-route.min',
    'ui-grid': 'uigrid/ui-grid.min',
    foundation: '../foundation.min',
    app: '../app',
    ngload: 'requirejs/ngload.min',
    'ng-map': 'angular-google-maps/angular-google-maps.min',
    'lodash': 'angular-google-maps/lodash.min',
    testCtrl: '../controllers/testCtrl',
    loginCtrl: '../controllers/loginCtrl',
    gridCtrl: '../controllers/gridCtrl',
    mapCtrl: '../controllers/mapCtrl'
  },
  shim: {
    foundation: ['jquery'],
    angular: ['underscore'],
    angularAMD: ['angular'],
    'angular-route': ['angular'],
    'ui-grid': ['angular'],
    'ng-map': ['lodash', 'angular'],
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    }
  },
  deps: ['app']
});

require(['foundation'], function(foundation) {
  return $(document).foundation();
});
