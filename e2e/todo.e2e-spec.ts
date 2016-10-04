import {browser, element, by} from 'protractor/globals';

describe('todos list', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should show two items', () => {
    expect(element.all(by.css('li')).count()).toBe(2);
  });

  it('should show item count', () => {
    expect(element.all(by.css('p')).get(1).getText()).toContain('Todo item count: 2');
  });

  it('should add a todo', () => {
    element(by.css('input[type=text]')).sendKeys('New item');
    element(by.css('button')).click();
    expect(element.all(by.css('li')).count()).toBe(3);
  });
});
