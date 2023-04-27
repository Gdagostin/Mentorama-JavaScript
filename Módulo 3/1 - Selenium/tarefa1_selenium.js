const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const service = () =>
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

async function run() {
    let navigation = await new Builder().forBrowser('chrome').build();
    await navigation.get('https://api.new.mentorama.com.br/storage/media-files/QA1/M1/pratica_1.html');

    const searchBar = await navigation.findElement(By.xpath('//*[@id="start-screen"]/div/form/input'));
    await searchBar.sendKeys("(48)999622273");
    await searchBar.sendKeys(Key.TAB);

    const redirectLink = await navigation.findElement(By.xpath('//*[@id="start-screen"]/div/form/button'));
    await redirectLink.click();

}

run();