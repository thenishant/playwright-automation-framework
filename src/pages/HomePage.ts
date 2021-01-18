export class HomePage {

    private welcomeText = 'text=Groups';
    private plusIcon = 'id=js-onboarding-new-project-link';
    private newProjectText = 'text=New project';

    async waitForPageLoad() {
        await page.waitForSelector(this.welcomeText);
    }

    async createNewProjectByClickingPlus() {
        await page.click(this.plusIcon);
        await page.click(this.newProjectText);
    }
}
