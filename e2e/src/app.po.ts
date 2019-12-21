import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl);
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getDashboardLink(): ElementFinder {
    return element(by.css("#dashboardLink"));
  }
}
