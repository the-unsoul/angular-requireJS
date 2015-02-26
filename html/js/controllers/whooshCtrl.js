/* 
* @Author: UnS
* @Date:   2015-02-23 11:32:43
* @Last Modified by:   UnS
* @Last Modified time: 2015-02-24 10:40:16
*/

define(['app'], function(app) {
	app.controller('whooshCtrl', ['$scope', '$http', '$resource', function($scope, $http, $resource){
		var url = 'https://api-integration.parkeon.whooshstore.com/tm/whooshstore.com/PSP/';
		// var url = 'https://api-integration-europe.parkeon.whooshstore.com/tm/whooshstore.com/customer/v1/eliuser4email/';
		// var url = 'https://api.twitter.com/1.1/search/tweets.json';
		var configs = {
			headers: {
				Authorization: 'Basic ZWxpbmV4dDpXd3N3YnJpMjAxNSE=',
				Accept: '*/*',
			}
		};
		var temp = {};
		$http.jsonp(url, configs)
			.success(function(response, status, headers, config) {
				console.log('successful');
				temp = response;
				console.log(response);
			})
			.error(function(response, status, headers, config) {
				console.log('ERROR: ');
				console.log(status);
				console.log(response);
			});

		// $scope.whoosh = $resource(
		// 	url+'/',
			
		// 	{get: {method: 'JSONP'}}
		// 	);
		// $scope.whoosh.get();
	}]);
});