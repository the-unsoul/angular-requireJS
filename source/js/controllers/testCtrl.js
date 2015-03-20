/* 
* @Author: UnS
* @Date:   2015-02-03 10:26:25
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-18 15:10:37
*/

define(['app'], function(app) {
	app.controller('testCtrl', ['$scope', '$timeout' , function ($scope, $timeout) {
		$scope.appName = 'requireJS + angularJS';
	 	$scope.todos = [{
	 		name: "more security research",
	 		done: false
	 	},{
	 		name: "considering UI Bootstrap" ,
	 		done: true
	 	},{
	 		name: "try tests with nesting route",
	 		done: false
	 	},{
	 		name: 'try google map',
	 		done: true
	 	},{
	 		name: 'try chart.js',
	 		done: true
	 	},{
	 		name: 'testing and decided to use it or not',
	 		done: false
	 	},{
	 		name: 'settup Angular animation for all pages',
	 		done: true
	 	},{
 			name: 'learn github.com/lynndylanhurley/ng-token-auth#about-this-module',
 			done: false
	 	},{
	 		name: 'learn about karma',
 			done: true
	 	},{
	 		name: 'learn about protractor',
 			done: false
	 	},{
	 		name: 'learn angular forms',
	 		done: false
	 	},{
	 		name: 'learn more filter - ngFilter',
	 		done: false
	 	},{
	 		name: 'more directive',
	 		done: false
	 	}];
	 	$scope.date = new Date();
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