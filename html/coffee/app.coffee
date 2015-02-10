define ['angularAMD', 'angular-route'],(angularAMD) ->
	
	# [A]ngular
	app = angular.module 'angularTest', ['ngRoute']

	app.config ($routeProvider)->
		$routeProvider
		.when "/home", angularAMD.route 
			templateUrl: 'views/home.html'
			controller: 'testCtrl'
		.when "/login", angularAMD.route
			templateUrl: 'views/login.html'
			controller: 'loginCtrl'
		.when "/grid", angularAMD.route
			templateUrl: 'views/grid-ui.html'
			controller: 'gridCtrl'
		.otherwise
			redirectTo: '/home'

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
			console.log($scope.loggedIn)
		$scope.$watch 'loggedIn', (newValue) ->
			if newValue
				$scope.loginButton = 'Logout'
			console.log($scope.loginButton)

	]

	angularAMD.bootstrap app



	# app.controller 'testCtrl', 
	# ['$scope', ($scope)->
	# 	$scope.username = 'requireJS + angularJS'
	# 	$scope.todos = [
	# 		name: "testing with coffee script" 
	# 		done: true	
	# 	,
	# 		name: 'make a fine template engine'
	# 		done: true
	# 	,
	# 		name: 'make it run'
	# 		done: true
	# 	]
	# 	$scope.t_length = ->
	# 		$scope.todos.length

	# 	$scope.newTodo = ''
	# 	$scope.addTodo = ->
	# 		if $scope.newTodo == '' 
	# 			return
	# 		$scope.todos.push(
	# 			name: $scope.newTodo
	# 			done: false
	# 		)
	# 		$scope.newTodo = ''

	# 	$scope.removeDone = ->
	# 		$scope.todos = _.filter $scope.todos, (todo)->
	# 			todo.done == false

	# ]