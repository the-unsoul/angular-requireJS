/* 
* @Author: UnS
* @Date:   2015-02-24 16:51:16
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-19 14:10:22
*/

define(['app'], function(app) {

	app.controller('tabCtrl', ['$scope', '$window', function($scope, $window) {
		$scope.tabs = [
		    { title:'Dynamic Title 1', disabled: false, content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam accusantium vero eum molestias ipsam eligendi, dicta sed odit asperiores officiis quisquam deleniti necessitatibus.' },
		    { title:'Dynamic Title 2', disabled: false, content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, cumque.'},
		    { title:'Dynamic Title 3', disabled: true, content:'Dynamic content 3'}
	  	];
	}]);
});
