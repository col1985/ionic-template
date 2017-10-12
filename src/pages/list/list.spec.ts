import { browser, element, by, ElementFinder } from 'protractor';

// dummy test case, not an example

describe('List', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title - List', function() {
    expect(browser.getTitle()).toEqual('List');
  });
});
