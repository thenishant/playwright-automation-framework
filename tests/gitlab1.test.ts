
describe("Gitlabtests", () => {
    it("load gitlab", async () => {
        await page.goto("https://gitlab.com/users/sign_in");
        await page.waitForSelector('id=user_login');
        expect(await page.title()).toBe("Sign in · GitLab")
    })
})
