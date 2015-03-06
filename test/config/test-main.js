var allTestFiles = [
    
    ];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  baseUrl: "/base",
  paths: {
    'angular'       : 'bower_components/angular/angular',
    'app'           : 'html/js/app',
    'angularAMD'    : 'test/libs/angularAMD',
    'ngload'        : 'test/libs/ngload',

    // dev deps
    'ng-animate': 'html/js/vendor/angular/angular-animate',
    underscore: 'html/js/vendor/underscore-min',
    'angular-route': 'html/js/vendor/angular/angular-route.min',
    'ui-grid': 'html/js/vendor/uigrid/ui-grid.min',
    'ng-map': 'html/js/vendor/angular-google-maps/angular-google-maps.min',
    'lodash': 'html/js/vendor/angular-google-maps/lodash.min',
    'angular-resource': 'html/js/vendor/angular-resource/angular-resource.min',
    'bootstrap-tpls': 'html/js/vendor/angular-bootstrap/ui-bootstrap-tpls.min',
    
    // testCtrl: 'html/js/vendor/../controllers/testCtrl',
    // loginCtrl: 'html/js/vendor/../controllers/loginCtrl',
    // gridCtrl: 'html/js/vendor/../controllers/gridCtrl',
    // mapCtrl: 'html/js/vendor/../controllers/mapCtrl',
    // whooshCtrl: 'html/js/vendor/../controllers/whooshCtrl',
    // tabCtrl: 'html/js/vendor/../controllers/tabCtrl'
  },
  shim: {
    angular: ['underscore'],
    angularAMD: ['angular'],
    'angular-route': ['angular'],
    'ui-grid': ['angular'],
    'angular-resource': ['angular'],
    bootstrap: ['angular'],
    'bootstrap-tpls': ['angular'],
    'ng-animate': ['angular'],
    'ng-map': ['lodash', 'angular'],
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    }    
  },

  // dynamically load all test files 
  // deps: allTestFiles,
  deps: ['test/test'],
  
  // start test run, once Require.js is done
  callback: window.__karma__.start
});



