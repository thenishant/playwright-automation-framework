import { Page } from "playwright";
import config from "../../data/config.json"

export class NewProjectPage {
    private page;
    private newProjectText = 'text=Create new project';
    private blankProjectLink = config.newProjectUrl;


    constructor(page: Page) {
        this.page = page;
    }

    async waitForPageLoad() {
        await this.page.waitForSelector(this.newProjectText);
    }

    async clickOnBlankProject() {
        await this.page.goto(this.blankProjectLink);
    }
}