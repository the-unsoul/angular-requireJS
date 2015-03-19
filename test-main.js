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
            'app'        : 'html/js/app',
            'angularAMD' : 'test/libs/angularAMD',
            'ngload'     : 'test/libs/ngload',
            'async'      : 'test/libs/async',

            // dev deps
            'angular-mocks'     : 'bower_components/angular-mocks/angular-mocks',
            'ng-animate'        : 'html/js/vendor/angular/angular-animate',
            underscore          : 'html/js/vendor/underscore-min',
            'angular-route'     : 'html/js/vendor/angular/angular-route.min',
            'ui-grid'           : 'html/js/vendor/uigrid/ui-grid.min',
            'ng-map'            : 'html/js/vendor/angular-google-maps/angular-google-maps.min',
            'lodash'            : 'html/js/vendor/angular-google-maps/lodash.min',
            'angular-resource'  : 'html/js/vendor/angular-resource/angular-resource.min',
            'bootstrap-tpls'    : 'html/js/vendor/angular-bootstrap/ui-bootstrap-tpls.min',
            'locale'            : 'html/js/vendor/angular-i18n/angular-locale_vi-vn',
            'angular-translate' : 'html/js/vendor/angular-translate/angular-translate.min',
            'dynamic-locale'    : 'html/js/vendor/angular-dynamic-locale/tmhDynamicLocale',
            'ng-token-auth'     : 'html/js/vendor/ng-token-auth/dist/ng-token-auth.min',
            'angular-cookie'    : 'html/js/vendor/angular-cookie/angular-cookie.min',

            testCtrl   : 'html/js/controllers/testCtrl',
            loginCtrl  : 'html/js/controllers/loginCtrl',
            gridCtrl   : 'html/js/controllers/gridCtrl',
            mapCtrl    : 'html/js/controllers/mapCtrl',
            whooshCtrl : 'html/js/controllers/whooshCtrl',
            tabCtrl    : 'html/js/controllers/tabCtrl',

            constants    : 'html/js/services/constants',
            auth         : 'html/js/services/auth',
            map          : 'html/js/services/map',
            whoosh       : 'html/js/services/whoosh',
            grid         : 'html/js/services/grid',
            translations : 'html/js/services/translations',

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
