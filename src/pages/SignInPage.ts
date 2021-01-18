
export class SignInPage {
    private userName = 'id=user_login';
    private password = 'id=user_password';
  

    async signIn(userName: any, password: any) {
        await page.waitForSelector(this.userName);
        await page.type(this.userName, userName);
        await page.type(this.password, password)
        await page.keyboard.press('Enter')
    }
}
