/* 
* @Author: UnS
* @Date:   2015-03-11 18:07:07
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-11 18:12:39
*/

define(['app', 'angularAMD', 'tabCtrl'], function(app, angularAMD) {
	/* ------ {{ injections }} ------------------------------------ */
	var $scope, ctrl;
	angularAMD.inject(function ($rootScope, $controller) {
	    $scope = $rootScope.$new();
	    ctrl = $controller('tabCtrl', {
	        $scope: $scope
	    });
	});

	describe('tabCtrl test --- ', function() {
		
		it('should have values', function() {
			expect($scope.tabs.length).toBeGreaterThan(0);
		});

		it('3rd tab of dynamic tabs should be disabled', function() {
			expect($scope.tabs[2].disabled).toBeTruthy();

		});
	});
});