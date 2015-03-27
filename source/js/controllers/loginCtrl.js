/* 
* @Author: UnS
* @Date:   2015-02-03 11:08:24
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-27 11:31:00
*/

define(['app'], function(app) {
	app.controller('loginCtrl', 
		['$scope', '$timeout', '$location', 'AppData', 
		function ($scope, $timeout, $location, AppData) {
		$scope.currentUser = AppData.getCurrentUser();
		$scope.username = 'admin';
		$scope.password = '123';
		$scope.status = '';
		$scope.login = function() {
			if($scope.username == 'admin' && $scope.password == '123'){
				$scope.currentUser = $scope.username;
				AppData.setCurrentUser($scope.currentUser);
				$location.path("/");
			}
			else{
				$scope.status = 'wrong username or password';
				$timeout(function() {
					$scope.status = '';
				}, 2000);
			}
		};
	}]);
});