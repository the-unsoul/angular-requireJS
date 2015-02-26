/* 
 * @Author: UnS
 * @Date:   2015-02-12 18:33:16
 * @Last Modified by:   UnS
 * @Last Modified time: 2015-02-26 12:00:13
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
    			$http.get('/json/'+ action)
    				.success(function(data) {
				        d.resolve(data);
                        console.log('fetch successed!');
    				})
    				.error(function(msg, code) {
                        console.log('fetch failed!');
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
