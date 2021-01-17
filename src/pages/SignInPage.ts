import { Page } from 'playwright';

export class SignInPage {
    private userName = 'id=user_login';
    private password = 'id=user_password';
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async signIn(userName: any, password: any) {
        await this.page.waitForSelector(this.userName);
        await this.page.type(this.userName, userName);
        await this.page.type(this.password, password)
        await this.page.keyboard.press('Enter')
    }
}
