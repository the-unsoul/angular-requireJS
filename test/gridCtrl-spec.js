/* 
 * @Author: UnS
 * @Date:   2015-03-11 14:46:04
 * @Last Modified by:   UnS
 * @Last Modified time: 2015-03-11 15:23:07
 */

define(['app', 'angularAMD', 'gridCtrl', 'grid'], function(app, angularAMD) {
    /* ------ {{ injections }} ------------------------------------ */
    var $scope, $q, $httpBackend, ctrl, gridService;
    angularAMD.inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('gridCtrl', {
            $scope: $scope
        });
    });

    describe('Grid Controller', function() {
        beforeEach(module('angularTest'));
        beforeEach(inject(function(_$http_, _$q_, _gridService_, _$httpBackend_) {
            $http = _$http_;
            $q = _$q_;
            $httpBackend = _$httpBackend_;
            gridService = _gridService_;
        }));
        it('should fetched data', function() {
            $httpBackend.expectGET('http://localhost:3000/gridData')
            .respond([{
                "firstName": "Cox",
                "lastName": "Carney",
                "company": "Enormo",
                "employed": true
            }, {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            }]);

            gridService.getData()
            .then(function(res) {
            	$scope.gridOptions.data = res;
            }, gridService.errorHandler);

            // wait for asynchronus task finished before execute the test
            $httpBackend.flush();
        	expect($scope.gridOptions.data.length).toEqual(2);
        });
    });
});
