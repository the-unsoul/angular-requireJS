/* 
* @Author: UnS
* @Date:   2015-02-10 14:52:21
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-11 15:07:34
*/

define(['app', 'grid'], function(app) {
	app.controller('gridCtrl', ['$scope', 'gridService', function ($scope, gridService) {
		$scope.gridOptions = {
			enableHorizontalScrollbar : 0,
			enableVerticalScrollbar   : 2,
			enableSorting             : true,	
			columnDefs                :[
				{field: "firstName"},
				{field: "lastName"},
				{field: "company"},
				{field: "employed"}
			]
		};
		
		gridService.getData()
		.then(function(res) {
			console.log(res);
			$scope.gridOptions.data = res;
		}, gridService.errorHandler);
		
	}]);
});