/* 
* @Author: UnS
* @Date:   2015-02-10 14:52:21
* @Last Modified by:   UnS
* @Last Modified time: 2015-02-10 17:08:25
*/

define(['app'], function(app) {
	app.controller('gridCtrl', ['$scope', 'AppData', function ($scope, AppData) {
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
		
		data  = [
			{
				"firstName" : "Cox",
				"lastName"  : "Carney",
				"company"   : "Enormo",
				"employed"  : true
		    },
		    {
				"firstName" : "Lorraine",
				"lastName"  : "Wise",
				"company"   : "Comveyer",
				"employed"  : false
		    },
		    {
				"firstName" : "Nancy",
				"lastName"  : "Waters",
				"company"   : "Fuelton",
				"employed"  : false
		    },
		    {
				"firstName" : "Nancy",
				"lastName"  : "Waters",
				"company"   : "Fuelton",
				"employed"  : false
		    },
		    {
				"firstName" : "Nancy",
				"lastName"  : "Waters",
				"company"   : "Fuelton",
				"employed"  : false
		    },
		    {
				"firstName" : "Nancy",
				"lastName"  : "Waters",
				"company"   : "Fuelton",
				"employed"  : false
		    },
		    {
				"firstName" : "Nancy",
				"lastName"  : "Waters",
				"company"   : "Fuelton",
				"employed"  : false
		    },
		    {
				"firstName" : "Nancy",
				"lastName"  : "Waters",
				"company"   : "Fuelton",
				"employed"  : false
		    },
		    {
				"firstName" : "Nancy",
				"lastName"  : "Waters",
				"company"   : "Fuelton",
				"employed"  : false
		    },
		    {
				"firstName" : "Nancy",
				"lastName"  : "Waters",
				"company"   : "Fuelton",
				"employed"  : false
		    }
		];

		$scope.gridOptions.data = data;
	}]);
});