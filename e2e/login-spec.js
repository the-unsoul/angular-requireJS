/* 
* @Author: UnS
* @Date:   2015-03-08 02:58:50
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-20 11:33:36
*/

describe('Log in test', function() {
	it('should login and redirect to home', function() {
		

		browser.get('http://localhost:3030/#/login');
		browser.waitForAngular();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3030/#/login');
	 	element(by.model('username')).clear().sendKeys('admin');
		element(by.model('password')).clear().sendKeys('123');

		element(by.buttonText('Login')).click();

		// browser.waitForAngular();
		// expect(browser.getCurrentUrl()).toEqual('http://localhost:3030/#/home');
		
		expect(element(by.css('.currentUser')).evaluate('currentUser')).toEqual('admin');
	});
	
});

console.log('login-spec.js');