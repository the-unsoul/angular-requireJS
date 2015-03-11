
define(['app', 'angularAMD', 'testCtrl'], function(app, angularAMD, testCtrl) {

    /* ------ {{ injections }} ------------------------------------ */
    var $scope, ctrl;
    angularAMD.inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('testCtrl', {$scope: $scope});
    });
    

    /* ------ {{ testCtrl testing }} ------------------------------------ */
    describe('----{{testCtrl functionalities}}----\n\t', function() { 
        it('t_length should return a number', function() {
            expect($scope.t_length()).toEqual(jasmine.any(Number));
        });

        it("loginButton should be equal 'Login'", function() {
            expect($scope.todos).toEqual(jasmine.any(Array));
        });
    });
});

