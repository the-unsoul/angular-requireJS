define [
	'angularAMD'
	'ng-animate'
	'angular-route'
	'ui-grid'
	'ng-map'
	'angular-resource'
	'bootstrap-tpls'

],(angularAMD) ->
	
	# [A]ngular
	app = angular.module 'angularTest', 
	[
		'ngAnimate'
		'ngRoute' 
		'ui.grid' 
		'uiGmapgoogle-maps' 
		'ngResource'
		'ui.bootstrap'
	]

	app.config ['$routeProvider', ($routeProvider)->
		$routeProvider
		.when "/home", angularAMD.route 
			templateUrl: 'views/home.html'
			controller: 'testCtrl'
		.when "/login", angularAMD.route
			templateUrl: 'views/login.html'
			controller: 'loginCtrl'
		.when "/grid", angularAMD.route
			templateUrl: 'views/grid.html'
			controller: 'gridCtrl'
		.when '/map', angularAMD.route
			templateUrl: 'views/gmap.html'
			controller: 'mapCtrl'
		.when '/whoosh', angularAMD.route
			templateUrl: 'views/whoosh.html'
			controller: 'whooshCtrl'
		.when '/ui-router', angularAMD.route
			templateUrl: 'views/tab.html'
			controller: 'tabCtrl'
		.otherwise
			redirectTo: '/home'
		
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
	app.controller 'homeCtrl', ['$scope' , '$location', 'AppData', ($scope, $location, AppData) ->
		
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

	]

	angularAMD.bootstrap app
