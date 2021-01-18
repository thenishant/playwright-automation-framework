import data from "./src/data/config.json";
import { SignInPage } from "./src/pages/SignInPage";

beforeAll(async () => {
    await page.goto(data.testUrl);
    const signInPage = new SignInPage();
    signInPage.signIn(data.userName, data.password)
    await page.waitForNavigation();
    const cookies = await context.cookies();
    await context.addCookies(cookies);
})

afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
})
