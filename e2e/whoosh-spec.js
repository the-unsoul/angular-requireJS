/* 
* @Author: UnS
* @Date:   2015-03-10 10:23:11
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-20 11:33:39
*/

describe('Whoosh page\'s functionalities', function() {

	it('counting results in json API', function() {
		browser.get('http://localhost:3030/#/whoosh');
		browser.waitForAngular();
		
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3030/#/whoosh');
		var data = element.all(by.repeater('value in data'));
		expect(data.count()).toBeGreaterThan(0);
		expect(data.count()).toEqual(2);
	});
});

console.log('whoosh-spec.js');