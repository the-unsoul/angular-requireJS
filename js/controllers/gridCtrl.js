/* 
* @Author: UnS
* @Date:   2015-02-10 14:52:21
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-19 12:06:33
*/

define(['app', 'ngload!ui-grid', 'grid'], function(app) {
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