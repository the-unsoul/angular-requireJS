/* 
* @Author: UnS
* @Date:   2015-03-03 17:50:07
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-03 18:04:33
*/

define(['angularAMD'], function(angularAMD) {
	/**
	* ngUnitTest Module
	*
	* Unit testing with Karma - Jasmine
	*/
	var app = angular.module('ngUnitTest', []);
	app.appName = 'ngUnitTest';
	angularAMD.bootstrap(app);
	return app;
});