/* 
* @Author: UnS
* @Date:   2015-02-23 11:32:43
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-19 18:23:32
*/

define(['app', 'constants', 'whoosh'], function(app) {
	app.controller('whooshCtrl', ['$scope', '$http', 'whooshResource', 'WHOOSH', function($scope, $http, whooshResource, WHOOSH){
		// var url = 'https://api-integration.parkeon.whooshstore.com/tm/whooshstore.com/PSP/';
		// var url = 'https://api-integration-europe.parkeon.whooshstore.com/tm/whooshstore.com/customer/v1/eliuser4email/';
		// var url = 'https://api.twitter.com/1.1/search/tweets.json';
		
		var url = 'http://localhost:3000/posts';

		$scope.whoosh = whooshResource;
		$scope.data = $scope.whoosh.getArray(function(res) {
			$scope.display = res;
		});

		$scope.WHOOSH = WHOOSH;
	}]);
});