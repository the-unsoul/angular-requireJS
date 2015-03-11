define(['app', 'angularAMD', 'loginCtrl'], function(app, angularAMD, loginCtrl) {

	var $scope, ctrl;
	angularAMD.inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new();
		ctrl = $controller('loginCtrl', {
			$scope: $scope
		});
	});

	describe('basic', function() {
		it('angularAMD should be defined', function() {
			expect(angularAMD).toBeDefined();
		});
	});
	
	/* ------ {{ App init }} ------------------------------------ */
	describe('Testing init state of app\n', function() {
		it('---- {{App bootstraped}} ----', function() {
			expect(app.name).toEqual('angularTest');
		});
	});
	/* ------ {{ injections }} ------------------------------------ */

	/* ------ {{ loginCtrl testing }} ------------------------------------ */
	describe(' ------ loginCtrl functionalities\n\t', function() {
		it('testing username & password', function() {
			expect($scope.username).toEqual('admin');
		});
	});
});
