const puppeteer = require('puppeteer');

async function scrapeChannel(url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="form1"]/h1/span');
    const text = await el.getProperty('textContent');
    const name = await text.jsonValue();

    const [el2] = await page.$x('//*[@id="cphPrimaryContent_pnlCompany"]/div[1]/div[1]/div/div[1]/div/strong');
    const text2 = await el2.getProperty('textContent');
    const price = await text2.jsonValue();

    const [el3] = await page.$x('//*[@id="cphPrimaryContent_pnlCompany"]/div[1]/div[2]/div[3]/div[1]/strong');
    const text3 = await el3.getProperty('textContent');
    const ratio = await text3.jsonValue();

    const [el4] = await page.$x('//*[@id="carouselRank"]/div/div[1]/ul/li[1]/p/text()');
    const text4 = await el4.getProperty('textContent');
    const opinion = await text4.jsonValue();

    browser.close();

    return { name, price, ratio, opinion }

}

module.exports = {
    scrapeChannel
}