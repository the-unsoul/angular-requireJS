requirejs.config
	baseUrl: "js/vendor"
	paths: 
		# deps
		jquery          : 'jquery-1.11.1.min'
		angular         : 'angular/angular'
		angularAMD      : 'requirejs/angularAMD'
		underscore      : 'underscore-min'
		'angular-route' : 'angular/angular-route'
		'ui-grid'       : '../ui-grid/ui-grid.min'
		foundation      : '../foundation.min'
		app             : '../app'

		# controllers
		testCtrl        : '../controllers/testCtrl'
		loginCtrl       : '../controllers/loginCtrl'


	shim:
		foundation      : ['jquery']
		angular         : ['underscore']
		angularAMD      : ['angular']
		'angular-route' : ['angular']
		'ui-grid'       : ['angular']
		jquery:
			exports: '$'
		underscore:
			exports: '_'
	# kick start app
	deps: ['app']

# require ['foundation', 'app'], (foundation, app) ->
# 	$(document).foundation()


