/* 
* @Author: UnS
* @Date:   2015-02-12 17:11:22
* @Last Modified by:   UnS
* @Last Modified time: 2015-02-12 18:41:25
*/

define(['app', 'ng-map', '../services/map', 'async!http://maps.googleapis.com/maps/api/js?sensor=false'], function(app) {
	app.controller('mapCtrl', ['$scope', function($scope){
		$scope.map = {
			center: { latitude: 45, longitude: -73 },
			zoom: 8
		};
	}]);
});