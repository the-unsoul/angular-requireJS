/* 
* @Author: UnS
* @Date:   2015-02-12 17:11:22
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-25 15:37:38
*/

define(['app', 'ng-map', 'map', 'async!http://maps.googleapis.com/maps/api/js?sensor=false'], function(app) {
	app.controller('mapCtrl', ['$scope', 'mapServices', function($scope, mapServices){
		$scope.map = {
			center: { latitude: 45, longitude: -73 },
			zoom: 8
		};
		$scope.markers = [];

		var addMarker = function(markers) {
			$scope.markers = markers;
			$scope.coords = _.map(markers, function(val, key) {
				return new google.maps.LatLng(val.longitude, val.latitude);
			});
			return "pushed: "+markers.length+ " markers to local strore";
		};
		
		var calcMaker = function(msg) {
			console.log(msg);	
			$scope.bounds = new google.maps.LatLngBounds();
			for(var i = 0; i < $scope.coords.length; i ++){
				$scope.bounds.extend($scope.coords[i]);
			}
			$scope.map.center = {latitude: $scope.bounds.getCenter().lat(), longitude: $scope.bounds.getCenter().lng()};
			$scope.fitBounds = {
				northeast: {latitude: $scope.bounds.getNorthEast().lat(), longitude: $scope.bounds.getNorthEast().lng()},
				southwest : {latitude: $scope.bounds.getSouthWest().lat(), longitude: $scope.bounds.getSouthWest().lng()}
			};
		};

		mapServices.getMarkers('markers')
			.then(addMarker, mapServices.errorHandler)
			.then(calcMaker, mapServices.errorHandler);

		$scope.$watch('markers', function(nv, ov) {
			if(nv != ov){
				console.log('$watch: \'$scope.markers\' fetched');
			}
		});
	}]);
});