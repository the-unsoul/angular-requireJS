! function() {

    var allTestFiles = [],
        TEST_REGEXP = /(spec|utest)\.js$/i,
        str = '',
        locale = 'vi-vn';

    Object.keys(window.__karma__.files).forEach(function(file) {
        if (TEST_REGEXP.test(file)) {
            allTestFiles.push(file);
        }
    });
    for(var i = 0; i< allTestFiles.length; i++){
        str += '\t'+allTestFiles[i]+'\n';
    }
    console.log('\nUnit testing specs:\n' + str);
    require.config({
        baseUrl: "/base",
        paths: {
            'angular'    : 'bower_components/angular/angular',
            'app'        : 'source/js/app',
            'angularAMD' : 'test/libs/angularAMD',
            'ngload'     : 'test/libs/ngload',
            'async'      : 'test/libs/async',

            // dev deps
            'angular-mocks'     : 'bower_components/angular-mocks/angular-mocks',
            'ng-animate'        : 'source/js/vendor/angular/angular-animate',
            underscore          : 'source/js/vendor/underscore-min',
            'angular-route'     : 'source/js/vendor/angular/angular-route.min',
            'ui-grid'           : 'source/js/vendor/uigrid/ui-grid.min',
            'ng-map'            : 'source/js/vendor/angular-google-maps/angular-google-maps.min',
            'lodash'            : 'source/js/vendor/angular-google-maps/lodash.min',
            'angular-resource'  : 'source/js/vendor/angular/angular-resource',
            'bootstrap-tpls'    : 'source/js/vendor/angular-bootstrap/ui-bootstrap-tpls.min',
            'locale'            : 'source/js/vendor/angular-i18n/angular-locale_vi-vn',
            'angular-translate' : 'source/js/vendor/angular-translate/angular-translate.min',
            'dynamic-locale'    : 'source/js/vendor/angular-dynamic-locale/tmhDynamicLocale',
            'ng-token-auth'     : 'source/js/vendor/ng-token-auth/dist/ng-token-auth.min',
            'angular-cookie'    : 'source/js/vendor/angular-cookie/angular-cookie.min',

            testCtrl   : 'source/js/controllers/testCtrl',
            loginCtrl  : 'source/js/controllers/loginCtrl',
            gridCtrl   : 'source/js/controllers/gridCtrl',
            mapCtrl    : 'source/js/controllers/mapCtrl',
            whooshCtrl : 'source/js/controllers/whooshCtrl',
            tabCtrl    : 'source/js/controllers/tabCtrl',

            constants    : 'source/js/services/constants',
            auth         : 'source/js/services/auth',
            map          : 'source/js/services/map',
            whoosh       : 'source/js/services/whoosh',
            grid         : 'source/js/services/grid',
            translations : 'source/js/services/translations',

            allTests: [
                'test/test'
            ]
        },
        shim: {
            'app'              : ['angular', 'angular-mocks'],
            'angular'          : ['underscore'],
            'angular-mocks'    : ['angular'],
            'angularAMD'       : ['angular'],
            'async'            : ['app'],
            'angular-route'    : ['angular'],
            'ui-grid'          : ['angular'],
            'angular-resource' : ['angular'],
            'bootstrap-tpls'   : ['angular'],
            'ng-animate'       : ['angular'],
            'ng-map'           : ['lodash', 'angular'],
            // 'locale'   : ['angular'],

            // Ctrl's dep is required for angularAMD/require/karma/jasmine (?) not cufused in setting up environment for testing
            testCtrl   : ['app'],
            loginCtrl  : ['app'],
            gridCtrl   : ['app'],
            mapCtrl    : ['app'],
            whooshCtrl : ['app'],
            tabCtrl    : ['app'],
            WHOOSH     : ['app'],
            

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
