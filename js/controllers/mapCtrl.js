/* 
* @Author: UnS
* @Date:   2015-02-12 17:11:22
* @Last Modified by:   UnS
* @Last Modified time: 2015-02-26 18:40:42
*/

define(['app', 'ng-map', '../services/map', 'async!http://maps.googleapis.com/maps/api/js?sensor=false'], function(app) {
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
		
		var doneInitMaker = function(msg) {
			console.log(msg);	
			$scope.bounds = new google.maps.LatLngBounds();
			for(var i = 0; i < $scope.coords.length; i ++){
				$scope.bounds.extend($scope.coords[i]);
			}
			$scope.map.center = {latitude: $scope.bounds.getCenter().k, longitude: $scope.bounds.getCenter().D};
			$scope.fitBounds = {
				northeast: {latitude: $scope.bounds.va.j, longitude: $scope.bounds.va.k},
				southwest : {latitude: $scope.bounds.Ca.j, longitude: $scope.bounds.Ca.k}
			};
		};

		mapServices.getMarkers('markers.json')
			.then(addMarker, mapServices.errorHandler)
			.then(doneInitMaker, mapServices.errorHandler);

		$scope.$watch('markers', function(nv, ov) {
			if(nv != ov){
				console.log('watch: markers fetched');
			}
		});
	}]);
});