import {Utils} from "./src/utils/utils";
import data from "./src/data/config.json";

beforeAll(async () => {
    const deserializedCookies = new Utils().getCookies();
    await context.addCookies(deserializedCookies);
    await page.goto(data.testUrl);
    // await homePage.waitForPageLoad();
})

afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
})
