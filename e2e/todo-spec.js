/* 
 * @Author: UnS
 * @Date:   2015-03-07 19:42:45
 * @Last Modified by:   UnS
 * @Last Modified time: 2015-03-10 15:05:52
 */

describe('angularjs homepage todo list', function() {
    browser.get('http://localhost:3030/#/home');
    browser.waitForAngular();
    
    it('should add a todo', function() {
        element(by.model('newTodo')).sendKeys('write a protractor test');
        element(by.buttonText('Add todo')).click();
        var $todos = element.all(by.repeater('(key, todo) in todos | filter:newTodo'));
        expect($todos.count()).toEqual(14);
        expect($todos.get(13).getText()).toEqual('write a protractor test');
    });

    it('should get filtered', function() {
        element(by.model('newTodo')).sendKeys('write a protractor test');
        var $todos = element.all(by.repeater('(key, todo) in todos | filter:newTodo'));
        expect($todos.count()).toEqual(1);
    });

    it('should be removed', function() {
    	element(by.model('newTodo')).clear();
		element.all(by.model('todo.done')).click();
		var $todos      = element.all(by.repeater('(key, todo) in todos | filter:newTodo')),
			todosBefore = $todos.count();
    	element(by.buttonText('remove Dones')).click();
		expect($todos.count()).toBeLessThan(todosBefore);
    });

    
});
