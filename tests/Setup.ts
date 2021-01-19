import data from '../src/data/config.json';
import {SignInPage} from '../src/pages/SignInPage';
import {firefox} from 'playwright';

const fs = require('fs');

module.exports = async () => {
    // const firefoxBrowser = await firefox.launch({
    //     headless: false
    // });
    // const firefoxContext = await firefoxBrowser.newContext();
    // const page = await firefoxContext.newPage();
    //
    // await page.goto(data.testUrl);
    // const signInPage = new SignInPage(page);
    // await signInPage.signIn(data.userName, data.password);
    //
    // const cookies = await firefoxContext.cookies();
    // const cookieJson = JSON.stringify(cookies);
    // fs.writeFileSync('cookies.json', cookieJson);
    // (global as any).__BROWSER__ = firefoxBrowser;
}
