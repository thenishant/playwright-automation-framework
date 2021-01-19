import {Page} from "playwright";

export class SignInPage {
    constructor(page: Page) {
        this.page = page;
    }
    private page: Page;

    private userName = 'id=user_login';
    private password = 'id=user_password';

    async signIn(userName: any, password: any) {
        await this.page.waitForSelector(this.userName);
        await this.page.type(this.userName, userName);
        await this.page.type(this.password, password)
        await this.page.keyboard.press('Enter')
    }
}
