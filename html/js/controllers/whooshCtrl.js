/* 
* @Author: UnS
* @Date:   2015-02-23 11:32:43
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-02 14:37:09
*/

define(['app', '../services/constants'], function(app) {
	app.controller('whooshCtrl', ['$scope', '$http', '$resource', 'WHOOSH', function($scope, $http, $resource, WHOOSH){
		// var url = 'https://api-integration.parkeon.whooshstore.com/tm/whooshstore.com/PSP/';
		// var url = 'https://api-integration-europe.parkeon.whooshstore.com/tm/whooshstore.com/customer/v1/eliuser4email/';
		// var url = 'https://api.twitter.com/1.1/search/tweets.json';
		
		var url = 'http://localhost:3000/posts';

		$scope.whoosh = $resource(
			WHOOSH.APIurl + '/:action',
		 	{action: WHOOSH.actions.posts}, 
		 	WHOOSH.methods
	 	);
		$scope.data = $scope.whoosh.getArray(function(res) {
			$scope.display = res;
		});

		$scope.WHOOSH = WHOOSH;
	}]);
});