import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root mat-toolbar span')).getText() as Promise<string>;
  }

  sidecard() {
    return element(by.css('app-sidecard'));
  }

  generateNumbers() {
    return this.sidecard().element(by.css('.generator')).click();
  }
}
