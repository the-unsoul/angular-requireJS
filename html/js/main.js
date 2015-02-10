requirejs.config({
  baseUrl: "js/vendor",
  paths: {
    jquery: 'jquery-1.11.1.min',
    angular: 'angular/angular',
    angularAMD: 'requirejs/angularAMD.min',
    underscore: 'underscore-min',
    'angular-route': 'angular/angular-route.min',
    'ui-grid': 'uigrid/ui-grid.min',
    foundation: '../foundation.min',
    app: '../app',
    ngload: 'requirejs/ngload.min',
    testCtrl: '../controllers/testCtrl',
    loginCtrl: '../controllers/loginCtrl',
    gridCtrl: '../controllers/gridCtrl'
  },
  shim: {
    foundation: ['jquery'],
    angular: ['underscore'],
    angularAMD: ['angular'],
    'angular-route': ['angular'],
    'ui-grid': ['angular'],
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
