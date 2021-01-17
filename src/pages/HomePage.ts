import { Page } from 'playwright';

export class HomePage {

    private welcomeText = 'text=Welcome to GitLab';
    private plusIcon = 'id=js-onboarding-new-project-link';
    private newProjectText = 'text=New project';
    private page: Page;

    constructor(page:Page)
    {
        this.page = page;
    }

    async waitForPageLoad()
    {
        await this.page.waitForSelector(this.welcomeText);
    }

    async createNewProjectByClickingPlus()
    {
        await this.page.click(this.plusIcon);
        await this.page.click(this.newProjectText);
    }

    
}