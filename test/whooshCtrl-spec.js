/* 
* @Author: UnS
* @Date:   2015-03-10 10:26:54
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-11 14:46:35
*/

define(['app', 'angularAMD',  'whooshCtrl', 'constants', 'whoosh'], function(app, angularAMD) {

	/* ------ {{ injections }} ------------------------------------ */
	var $scope, $resource, $httpBackend, ctrl, WHOOSH;
	angularAMD.inject(function ($rootScope, $controller) {
	    $scope = $rootScope.$new();
	    ctrl = $controller('whooshCtrl', {
	        $scope: $scope,
	    });
	});

	describe('Whoosh controller unit testing', function() {
		beforeEach(module('angularTest'));
		beforeEach(inject(function(_$resource_, _$httpBackend_, $injector, _WHOOSH_, _whooshResource_) {
			$resource = _$resource_;
			$httpBackend = _$httpBackend_;
			WHOOSH = _WHOOSH_;
			whooshResource = _whooshResource_;

			// can either use any injecting method. Below is "$injector" service
			// $resource = $injector.get('$resource');
			// $httpBackend = $injector.get('$httpBackend');
			// WHOOSH = $injector.get('WHOOSH');
		}));
		it('constants should have loaded', function() {
			expect($scope.WHOOSH.APIurl).toEqual('http://localhost:3000');
		});

		it('data should have fetched', function() {
			$httpBackend.expectGET('http://localhost:3000/posts').respond([
				{post: 'test'},
				{post: 'test2'}
			]);
			$scope.whoosh = whooshResource;

			$scope.data	= $scope.whoosh.getArray(function(res) {
				$scope.display = res;
			});

			$httpBackend.flush();
			expect($scope.display.length).toEqual(2);
		});
	});
});