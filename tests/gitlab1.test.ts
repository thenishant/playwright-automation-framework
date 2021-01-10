import { chromium, Browser, Page } from "playwright";

describe("Gitlabtests", () => {
    it("load gitlab", async () => {
        await page.goto("https://about.gitlab.com/");
        // await page.goto("https://www.google.com/");
    })
})
