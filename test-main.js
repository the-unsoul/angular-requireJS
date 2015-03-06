! function() {
    var allTestFiles = [],
        TEST_REGEXP = /(spec|utest)\.js$/i,
        str = '';

    Object.keys(window.__karma__.files).forEach(function(file) {
        if (TEST_REGEXP.test(file)) {
            allTestFiles.push(file);
        }
    });
    for(var i = 0; i< allTestFiles.length; i++){
        str += '\t'+allTestFiles[i]+'\n';
    }
    console.log('\nTesting files:\n' + str);
    require.config({
        baseUrl: "/base",
        paths: {
            'angular': 'bower_components/angular/angular',
            'app': 'html/js/app',
            'angularAMD': 'test/libs/angularAMD',
            'ngload': 'test/libs/ngload',

            // dev deps
            'angular-mocks': 'bower_components/angular-mocks/angular-mocks',
            'ng-animate': 'html/js/vendor/angular/angular-animate',
            underscore: 'html/js/vendor/underscore-min',
            'angular-route': 'html/js/vendor/angular/angular-route.min',
            'ui-grid': 'html/js/vendor/uigrid/ui-grid.min',
            'ng-map': 'html/js/vendor/angular-google-maps/angular-google-maps.min',
            'lodash': 'html/js/vendor/angular-google-maps/lodash.min',
            'angular-resource': 'html/js/vendor/angular-resource/angular-resource.min',
            'bootstrap-tpls': 'html/js/vendor/angular-bootstrap/ui-bootstrap-tpls.min',

            testCtrl: 'html/js/controllers/testCtrl',
            loginCtrl: 'html/js/controllers/loginCtrl',
            gridCtrl: 'html/js/controllers/gridCtrl',
            mapCtrl: 'html/js/controllers/mapCtrl',
            whooshCtrl: 'html/js/controllers/whooshCtrl',
            tabCtrl: 'html/js/controllers/tabCtrl',

            allTests: [
                'test/test'
            ]
        },
        shim: {
            app: ['angular'],
            angular: ['underscore'],
            'angular-mocks': ['angular'],
            angularAMD: ['angular'],
            'angular-route': ['angular'],
            'ui-grid': ['angular'],
            'angular-resource': ['angular'],
            'bootstrap-tpls': ['angular'],
            'ng-animate': ['angular'],
            'ng-map': ['lodash', 'angular'],

            // Ctrl dep is required for angularAMD/require/karma/jasmine (?) not cufused in setting up environment for testing
            testCtrl: ['app'],
            loginCtrl: ['app'],
            gridCtrl: ['app'],
            mapCtrl: ['app'],
            whooshCtrl: ['app'],
            tabCtrl: ['app'],

            jquery: {
                exports: '$'
            },
            underscore: {
                exports: '_'
            }
        },

        // dynamically load all test files 
        // deps: allTestFiles,
        deps: allTestFiles,

        // start test run, once Require.js is done
        callback: window.__karma__.start
    });
}();
