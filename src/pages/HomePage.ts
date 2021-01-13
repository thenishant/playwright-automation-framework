import { Page } from 'playwright';

export class HomePage {

    private welcomeTitle = 'text=Welcome to GitLab';
    private page: Page;

    constructor(page:Page)
    {
        this.page = page;
    }

    async waitForHomePageLoading()
    {
        await this.page.waitForSelector(this.welcomeTitle);
    }
}