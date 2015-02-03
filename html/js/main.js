requirejs.config({
  baseUrl: "js/vendor",
  paths: {
    jquery: 'jquery-1.11.1.min',
    angular: 'angular/angular',
    angularAMD: 'requirejs/angularAMD',
    underscore: 'underscore-min',
    'angular-route': 'angular/angular-route',
    foundation: '../foundation.min',
    app: '../app',
    testCtrl: '../controllers/testCtrl',
    HomeController: '../controllers/home-controller'
  },
  shim: {
    angular: {
      deps: ['underscore'],
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    },
    angularAMD: {
      deps: ['angular'],
      exports: 'angularAMD'
    },
    jquery: {
      exports: '$'
    },
    foundation: {
      deps: ['jquery'],
      exports: 'foundation'
    },
    underscore: {
      exports: '_'
    }
  },
  deps: ['app']
});
