/* 
* @Author: UnS
* @Date:   2015-02-03 10:26:25
* @Last Modified by:   UnS
* @Last Modified time: 2015-02-03 10:35:21
*/

define(['app'], function(app) {
	app.controller('testCtrl', ['$scope', function ($scope) {
		$scope.username = 'requireJS + angularJS';
	 	$scope.todos = [{
	 		name: "testing with coffee script" ,
	 		done: true
	 	},{
	 		name: 'make a fine template engine',
	 		done: true
	 	},{
	 		name: 'make it run',
	 		done: true
	 	}];
	 	$scope.t_length =  function () {
	 		return $scope.todos.length;
	 	};
	 		

	 	$scope.newTodo = '';
	 	$scope.addTodo = function() {
	 		if ($scope.newTodo == '')
	 			return;
	 		$scope.todos.push({name: $scope.newTodo,done: false});
	 		$scope.newTodo = '';
	 	};
	 		

	 	$scope.removeDone = function() {
	 		$scope.todos = _.filter($scope.todos, function(todo) {
	 			return todo.done == false;
	 		});
	 		 
	 	}
	 		

	}]);
});