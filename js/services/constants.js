define(["app"],function(t){t.constant("AUTH_EVENTS",{loginSuccess:"auth-login-success",loginFailed:"auth-login-failed",logoutSuccess:"auth-logout-success",sessionTimeout:"auth-session-timeout",notAuthenticated:"auth-not-authenticated",notAuthorized:"auth-not-authorized"}),t.constant("USER_ROLES",{all:"*",admin:"admin",editor:"editor",guest:"guest"}),t.constant("WHOOSH",{APIurl:"http://localhost:3000",parkeonUrl:"https://api-integration-europe.parkeon.whooshstore.com/tm/whooshstore.com/customer/v1/eliuser4email/",twitterUrl:"https://api.twitter.com/1.1/search/tweets.json",methods:{getArray:{method:"GET",isArray:!0},get:{method:"GET",isArray:!1},jsonp:{method:"JSONP",headers:{Authorization:"Basic ZWxpbmV4dDpXd3N3YnJpMjAxNSE="}},post:{method:"POST"},update:{method:"PUT"}},actions:{posts:"posts",comments:"comments"}})});