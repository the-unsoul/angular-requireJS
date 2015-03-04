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
    'angularAMD'    : 'test/libs/angularAMD',
    'ngload'        : 'test/libs/ngload',
    'app'           : 'test/app',
  },
  shim: {
    'angularAMD': ['angular']       
  },

  // dynamically load all test files 
  // deps: allTestFiles,
  deps: ['test/test'],
  
  // start test run, once Require.js is done
  callback: window.__karma__.start
});



