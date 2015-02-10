requirejs.config({
  baseUrl: "js/vendor",
  paths: {
    jquery: 'jquery-1.11.1.min',
    angular: 'angular/angular',
    angularAMD: 'requirejs/angularAMD',
    underscore: 'underscore-min',
    'angular-route': 'angular/angular-route',
    'ui-grid': '../ui-grid/ui-grid.min',
    foundation: '../foundation.min',
    app: '../app',
    testCtrl: '../controllers/testCtrl',
    loginCtrl: '../controllers/loginCtrl'
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
