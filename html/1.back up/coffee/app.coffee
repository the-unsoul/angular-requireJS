define ['angularAMD', 'ng_route'],(angularAMD) ->
	
	# [A]ngular
	app = angular.module 'angularTest', ['ngRoute']

	# app.init = () -> 
	# 	angularAMD.bootstrap app
	
	# app.config ($routeProvider)->
	# 	$routeProvider.when "/", angularAMD.route
	# 		templateUrl: 'views/home.html', controller: 'HomeController'



	app.controller 'testCtrl', 
	['$scope', ($scope)->
		$scope.username = 'requireJS + angularJS'
		$scope.todos = [
			name: "testing with coffee script" 
			done: true	
		,
			name: 'make a fine template engine'
			done: true
		,
			name: 'make it run'
			done: true
		]
		$scope.t_length = ->
			$scope.todos.length

		$scope.newTodo = ''
		$scope.addTodo = ->
			if $scope.newTodo == '' 
				return
			$scope.todos.push(
				name: $scope.newTodo
				done: false
			)
			$scope.newTodo = ''

		$scope.removeDone = ->
			$scope.todos = _.filter $scope.todos, (todo)->
				todo.done == false

	]
	angularAMD.bootstrap app







	
