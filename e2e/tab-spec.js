/* 
* @Author: UnS
* @Date:   2015-03-11 18:16:07
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-20 11:33:37
*/

describe('Tab tests', function() {
	
	it('should have 3 tabs', function() {
		browser.get('http://localhost:3030/#/tab');
		browser.waitForAngular();
		
		var tabs = element.all(by.repeater('tab in tabs'));
		expect(tabs.count()).toEqual(3*2);
	});
});

console.log('tab-spec.js');