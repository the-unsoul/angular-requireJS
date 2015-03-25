/* 
* @Author: UnS
* @Date:   2015-02-27 11:31:01
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-23 18:16:23
*/

define(['app'], function(app) {
	app.factory('whooshResource', ['WHOOSH','$resource', function(WHOOSH, $resource){
		return $resource(
			WHOOSH.APIurl + '/:action',
		 	{action: WHOOSH.actions.posts}, 
		 	WHOOSH.methods
 		);	
	}]);
});