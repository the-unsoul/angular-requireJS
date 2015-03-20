/* 
 * @Author: UnS
 * @Date:   2015-02-12 18:33:16
 * @Last Modified by:   UnS
 * @Last Modified time: 2015-03-11 14:55:42
 */

/**
 * mapServices Module
 *
 * for configuration and services
 */

define(['app'], function(app) {
    app.config([function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }]);

    app.factory('mapServices', ['$http', '$q', function($http, $q){
    	return{
    		getMarkers: function(action) {
    			var d = $q.defer();
    			$http.get('http://localhost:3000/'+ action)
				.success(function(data) {
			        d.resolve(data);
				})
				.error(function(msg, code) {
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
