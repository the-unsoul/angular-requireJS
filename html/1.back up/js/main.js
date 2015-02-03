requirejs.config({
  baseUrl: "js/bower_components",
  paths: {
    jquery: 'jquery/dist/jquery.min',
    angular: 'angular/angular.min',
    angularAMD: 'angularAMD/angularAMD.min',
    underscore: 'underscore/underscore-min',
    ng_route: 'angular-route/angular-route',
    foundation: '../foundation.min',
    app: '../app',
    HomeController: '../controllers/home-controller.js'
  },
  shim: {
    angular: {
      deps: ['underscore'],
      exports: 'angular'
    },
    ng_route: {
      deps: ['angular'],
      exports: ['ng-route']
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
  }
});

require(['foundation', 'app'], function(foundation, app) {
  return $(document).foundation();
});
