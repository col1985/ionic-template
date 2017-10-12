import { browser, element, by, ElementFinder } from 'protractor';

// dummy test case, not an example

describe('dummy test case, not an example', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Home');
  });
});
