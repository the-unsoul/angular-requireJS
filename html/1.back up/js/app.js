define(['angularAMD', 'ng_route'], function(angularAMD) {
  var app;
  app = angular.module('angularTest', ['ngRoute']);
  app.controller('testCtrl', [
    '$scope', function($scope) {
      $scope.username = 'requireJS + angularJS';
      $scope.todos = [
        {
          name: "testing with coffee script",
          done: true
        }, {
          name: 'make a fine template engine',
          done: true
        }, {
          name: 'make it run',
          done: true
        }
      ];
      $scope.t_length = function() {
        return $scope.todos.length;
      };
      $scope.newTodo = '';
      $scope.addTodo = function() {
        if ($scope.newTodo === '') {
          return;
        }
        $scope.todos.push({
          name: $scope.newTodo,
          done: false
        });
        return $scope.newTodo = '';
      };
      return $scope.removeDone = function() {
        return $scope.todos = _.filter($scope.todos, function(todo) {
          return todo.done === false;
        });
      };
    }
  ]);
  return angularAMD.bootstrap(app);
});
