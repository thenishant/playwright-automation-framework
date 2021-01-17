import config from "../../data/config.json"

export class NewProjectPage {
    private newProjectText = 'text=Create new project';
    private blankProjectLink = config.newProjectUrl;
    
    async waitForPageLoad() {
        await page.waitForSelector(this.newProjectText);
    }

    async clickOnBlankProject() {
        await page.goto(this.blankProjectLink);
    }
}
