import { browser, element, by, ElementFinder } from 'protractor';

// dummy test case, not an example

describe('Example E2E Test', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('the home tab is displayed by default', () => {
    // Grab the title of the selected tab
    expect(element(by.css('[aria-selected=true] .tab-button-text'))
      .getAttribute('innerHTML')) // Get the text content
      .toContain('Home'); // Check if it contains the text "Home"

  });

  it('browse to the contact tab and view the ionic twitter handle', () => {

    // Click the 'About' tab
    element(by.css('[aria-controls=tabpanel-t0-2]')).click().then(() => {

      // Wait for the page transition
      browser.driver.sleep(1000);

      // Grab the label of the list item
      // Get the text content
      // Check if it contains the text "@ionicframework"
      expect(element(by.css('ion-list ion-item ion-label'))
        .getAttribute('innerHTML'))
        .toContain('@ionicframework');
    });

  });

});
