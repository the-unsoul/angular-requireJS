/* 
 * @Author: UnS
 * @Date:   2015-02-12 18:33:16
 * @Last Modified by:   UnS
 * @Last Modified time: 2015-02-12 18:42:02
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
});
