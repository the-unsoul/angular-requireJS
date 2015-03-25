/* 
* @Author: UnS
* @Date:   2015-02-27 10:27:05
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-23 18:16:26
*/

define(['app'], function(app) {
	app.constant('AUTH_EVENTS', {
		loginSuccess: 'auth-login-success',
		loginFailed: 'auth-login-failed',
		logoutSuccess: 'auth-logout-success',
		sessionTimeout: 'auth-session-timeout',
		notAuthenticated: 'auth-not-authenticated',
		notAuthorized: 'auth-not-authorized'
	});

	app.constant('USER_ROLES', {
		all: '*',
		admin: 'admin',
		editor: 'editor',
		guest: 'guest'
	});

	app.constant('WHOOSH', {
		APIurl: 'http://localhost:3000',
		parkeonUrl: 'https://api-integration-europe.parkeon.whooshstore.com/tm/whooshstore.com/customer/v1/eliuser4email/',
		twitterUrl: 'https://api.twitter.com/1.1/search/tweets.json',
		methods: {
			getArray : {method: 'GET', isArray: true},
			get      : {
				method: 'GET', 
				isArray: false
				// headers: {'Authorization': 'Basic ZWxpbmV4dDpXd3N3YnJpMjAxNSE='}
			},
			jsonp    : {
				method: 'JSONP',
				headers: {'Authorization': 'Basic ZWxpbmV4dDpXd3N3YnJpMjAxNSE='}
			},
			post     : {method: 'POST'},
			update   : {method: 'PUT'}
		},
		actions: {
			posts: 'posts',
			comments: 'comments'
		}
	});
});