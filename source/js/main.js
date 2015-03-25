requirejs.config({
    baseUrl: "js",
    paths: {
        // deps
        async               : 'vendor/requirejs/async',
        jquery              : 'vendor/jquery-1.11.1.min',
        angular             : 'vendor/angular/angular.min',
        angularAMD          : 'vendor/requirejs/angularAMD.min',
        underscore          : 'vendor/underscore-min',
        'angular-route'     : 'vendor/angular/angular-route.min',
        'ui-grid'           : 'vendor/uigrid/ui-grid.min',
        foundation          : 'vendor/../foundation.min',
        app                 : 'vendor/../app',
        ngload              : 'vendor/requirejs/ngload.min',
        'ng-map'            : 'vendor/angular-google-maps/angular-google-maps.min',
        'lodash'            : 'vendor/angular-google-maps/lodash.min',
        'angular-resource'  : 'vendor/angular/angular-resource',
        'bootstrap-tpls'    : 'vendor/angular-bootstrap/ui-bootstrap-tpls.min',
        'ng-animate'        : 'vendor/angular/angular-animate',
        'locale'            : 'vendor/angular-i18n/angular-locale_en',
        'angular-translate' : 'vendor/angular-translate/angular-translate.min',
        'dynamic-locale'    : 'vendor/angular-dynamic-locale/tmhDynamicLocale',
        'ng-token-auth'     : 'vendor/ng-token-auth/dist/ng-token-auth.min',
        'angular-cookie'    : 'vendor/angular/angular-cookies',

        // controllers
        testCtrl            : 'controllers/testCtrl',
        loginCtrl           : 'controllers/loginCtrl',
        gridCtrl            : 'controllers/gridCtrl',
        mapCtrl             : 'controllers/mapCtrl',
        whooshCtrl          : 'controllers/whooshCtrl',
        tabCtrl             : 'controllers/tabCtrl',

        // services
        constants           : 'services/constants',
        auth                : 'services/auth',
        map                 : 'services/map',
        whoosh              : 'services/whoosh',
        grid                : 'services/grid',
        translations        : 'services/translations'
    },
    shim: {
        angular             : ['underscore'],
        angularAMD          : ['angular'],
        'angular-route'     : ['angular'],
        'ui-grid'           : ['angular'],
        'angular-resource'  : ['angular'],
        bootstrap           : ['angular'],
        'bootstrap-tpls'    : ['angular'],
        'ng-animate'        : ['angular'],
        'angular-translate' : ['angular'],
        'dynamic-locale'    : ['angular'],
        'ng-map'            : ['lodash', 'angular'],
        'angular-cookie'    : ['angular'],
        'ng-token-auth'     : ['angular-cookie'],
        'locale'            : ['angular'],

        // export
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        }
    },

    // kick start app
    deps: ['app', 'locale']
});
