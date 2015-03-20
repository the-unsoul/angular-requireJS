/* 
* @Author: UnS
* @Date:   2015-03-11 14:52:19
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-11 15:06:47
*/

define(['app'], function(app) {
	app.factory('gridService', ['$http', '$q',function($http, $q){
		return{
			getData: function(){
				var d = $q.defer();
				$http.get('http://localhost:3000/gridData')
				.success(function(data) {
					d.resolve(data);
				}).error(function(msg, code) {
					d.reject(msg);
				});
				return d.promise;
			},
			errorHandler: function(error) {
				console.log(error);
			}
		};
	}]);
});