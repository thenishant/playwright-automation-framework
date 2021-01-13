import data from '../src/data/config.json';
import { SignInPage } from '../src/pages/SignInPage';
import { firefox } from 'playwright';
const fs = require('fs');

//user login into gitlab and store the cookies in a file so that it can be used across suits
module.exports = async () => {
    const firefoxBrowser = await firefox.launch();
    const firefoxContext = await firefoxBrowser.newContext();
    const page = await firefoxContext.newPage();

    await page.goto(data.testUrl);
    const signInPage = new SignInPage(page);
    await signInPage.signIn(data.userName, data.password);
    await page.waitForNavigation();

    const cookies = await firefoxContext.cookies();
    const cookieJson = JSON.stringify(cookies);
    fs.writeFileSync('cookies.json', cookieJson);
    (global as any).__BROWSER__ = firefoxBrowser;
}