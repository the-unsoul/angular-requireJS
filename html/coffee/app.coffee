define [
	'angularAMD'
	'translations'
	'ng-animate'
	'angular-route'
	# 'ui-grid'
	# 'angular-resource'
	# 'bootstrap-tpls'
	'angular-translate'
	'dynamic-locale'

],(angularAMD, translations) ->
	# [A]ngular
	app = angular.module 'angularTest', 
	[
		'ngAnimate'
		'ngRoute' 
		# 'ui.grid' 
		# 'ngResource'
		# 'ui.bootstrap'
		'pascalprecht.translate'
		'tmh.dynamicLocale'
	]

	app.config ['$routeProvider', '$translateProvider', ($routeProvider, $translateProvider)->
		$routeProvider
		.when "/home", angularAMD.route 
			title: 'Home'
			templateUrl: 'views/home.html'
			controller: 'testCtrl'
		.when "/login", angularAMD.route
			title: 'Login'
			templateUrl: 'views/login.html'
			controller: 'loginCtrl'
		.when "/grid", angularAMD.route
			title: 'Grid'
			templateUrl: 'views/grid.html'
			controller: 'gridCtrl'
		.when '/map', angularAMD.route
			title: 'Map'
			templateUrl: 'views/gmap.html'
			controller: 'mapCtrl'
		.when '/whoosh', angularAMD.route
			title: 'Whoosh'
			templateUrl: 'views/whoosh.html'
			controller: 'whooshCtrl'
		.when '/tab', angularAMD.route
			title: 'Tab'
			templateUrl: 'views/tab.html'
			controller: 'tabCtrl'
		.otherwise
			redirectTo: '/home'
		
		
		$translateProvider.translations 'en', translations.en
		$translateProvider.translations 'vi', translations.vi
		$translateProvider.preferredLanguage 'en'
		$translateProvider.fallbackLanguage 'vi'

	]
	# Factory
	app.factory 'AppData', ->
		data = currentUser: ''
		return {
			getCurrentUser: ->
				data.currentUser
			setCurrentUser: (newName) ->
				data.currentUser = newName
		}

	# home controller
	app.controller 'homeCtrl', ['$scope' , '$location', 'AppData', '$translate', 'tmhDynamicLocale',  ($scope, $location, AppData, $translate, tmhDynamicLocale) ->
		
		# vars
		$scope.currentUser = AppData.getCurrentUser()
		$scope.loggedIn = false
		$scope.loginButton = 'Login'

		# menu activation handler
		$scope.isActive = (path)->
			if( $location.path() == path )
				return 'active';
			else
				return;

		## passing data inbetween 2 controllers by using factory and get/set
		$scope.$watch -> 
			AppData.getCurrentUser()
		, (newValue) -> 
			if newValue
				$scope.currentUser = newValue
		
		## if user loged in, the button login will be change
		$scope.$watch 'currentUser', (newValue) ->
			if newValue.length > 0
				$scope.loggedIn = true
		$scope.$watch 'loggedIn', (newValue) ->
			if newValue
				$scope.loginButton = 'Logout'

		# translate
		$scope.translate = (langKey)->
			$translate.use langKey
			tmhDynamicLocale.set langKey

			
	]
			

	angularAMD.bootstrap app
