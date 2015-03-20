/* 
* @Author: UnS
* @Date:   2015-03-10 10:12:04
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-20 11:33:35
*/

describe('Grid should have loaded', function() {	

	it('should behave...', function() {
		browser.get('http://localhost:3030/#/grid');
		browser.waitForAngular();

		expect(browser.getCurrentUrl()).toEqual('http://localhost:3030/#/grid');
		expect(element.all(by.css('.ui-grid-header-cell')).count()).toEqual(4);
	});
});

console.log('grid-spec.js');
