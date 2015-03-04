/* 
* @Author: UnS
* @Date:   2015-02-24 16:51:16
* @Last Modified by:   UnS
* @Last Modified time: 2015-02-24 18:20:34
*/

define(['app'], function(app) {
	app.controller('tabCtrl', ['$scope', '$window', function($scope, $window) {
		$scope.tabs = [
		    { title:'Dynamic Title 1', content:'Dynamic content 1' },
		    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
	  	];
	}]);
});
