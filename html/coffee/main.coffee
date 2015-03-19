requirejs.config
	baseUrl: "js/vendor"
	paths: 
		# deps
		async               : 'requirejs/async'
		jquery              : 'jquery-1.11.1.min'
		angular             : 'angular/angular.min'
		angularAMD          : 'requirejs/angularAMD.min'
		underscore          : 'underscore-min'
		'angular-route'     : 'angular/angular-route.min'
		'ui-grid'           : 'uigrid/ui-grid.min'
		foundation          : '../foundation.min'
		app                 : '../app'
		ngload              : 'requirejs/ngload.min'
		'ng-map'            : 'angular-google-maps/angular-google-maps.min'
		'lodash'            : 'angular-google-maps/lodash.min'
		'angular-resource'  : 'angular-resource/angular-resource.min'
		'bootstrap-tpls'    : 'angular-bootstrap/ui-bootstrap-tpls.min'
		'ng-animate'        : 'angular/angular-animate'
		'locale'            : 'angular-i18n/angular-locale_en'
		'angular-translate' : 'angular-translate/angular-translate.min'
		'dynamic-locale'    : 'angular-dynamic-locale/tmhDynamicLocale'
		'ng-token-auth'     : 'ng-token-auth/dist/ng-token-auth.min'
		'angular-cookie'    : 'angular-cookie/angular-cookie.min'

		# controllers
		testCtrl   : '../controllers/testCtrl'
		loginCtrl  : '../controllers/loginCtrl'
		gridCtrl   : '../controllers/gridCtrl'
		mapCtrl    : '../controllers/mapCtrl'
		whooshCtrl : '../controllers/whooshCtrl'
		tabCtrl    : '../controllers/tabCtrl'

		# services
		constants : '../services/constants',
		auth      : '../services/auth',
		map       : '../services/map',
		whoosh    : '../services/whoosh',
		grid      : '../services/grid',
		translations: '../services/translations'

	shim:
		# foundation         : ['jquery']
		angular            : ['underscore']
		angularAMD          : ['angular']
		'angular-route'     : ['angular']
		'ui-grid'           : ['angular']
		'angular-resource'  : ['angular']
		bootstrap           : ['angular']
		'bootstrap-tpls'    : ['angular']
		'ng-animate'        : ['angular']
		'angular-translate' : ['angular']
		'dynamic-locale'    : ['angular']
		'ng-map'            : ['lodash', 'angular']
		'ng-token-auth'     : ['angular']
		'angular-cookie'    : ['angular']
		'locale'            : ['angular']

		jquery:
			exports: '$'
		underscore:
			exports: '_'
	# kick start app
	deps: ['app', 'locale']

# require ['foundation'], (foundation) ->
# 	$(document).foundation()


