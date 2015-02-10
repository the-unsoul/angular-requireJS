/* 
* @Author: UnS
* @Date:   2015-02-03 10:26:25
* @Last Modified by:   UnS
* @Last Modified time: 2015-02-10 10:23:19
*/

define(['app'], function(app) {
	app.controller('testCtrl', ['$scope', function ($scope) {
		$scope.appName = 'requireJS + angularJS';
	 	$scope.todos = [{
	 		name: "try to upgrade new verson of Angular and RequireJS" ,
	 		done: true
	 	},{
	 		name: 'investigate the compatibility',
	 		done: true
	 	},{
	 		name: 'testing and decided to use it or not',
	 		done: true
	 	}];
	 	$scope.t_length =  function () {
	 		return $scope.todos.length;
	 	};
	 		

	 	$scope.newTodo = '';
	 	$scope.addTodo = function() {
	 		if ($scope.newTodo === '')
	 			return;
	 		$scope.todos.push({name: $scope.newTodo,done: false});
	 		$scope.newTodo = '';
	 	};
	 		

	 	$scope.removeDone = function() {
	 		$scope.todos = _.filter($scope.todos, function(todo) {
	 			return todo.done === false;
	 		});
	 		 
	 	};
	 		

	}]);
});