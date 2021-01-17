import { throws } from "assert";
import { assert } from "console";
import { SelectorType } from "jest-playwright-preset";
import { Page } from "playwright";
import config from "../data/config.json"

export class ProjectPage {
    private page: Page
    private loadText = 'text=The repository for this project is empty';
    private newRepoInstruction = 'id=repo-command-line-instructions'
    private settingsIcon = 'data-testid=settings-icon';
    private membersIcon = 'id=js-onboarding-members-link';
    private projectDeletionText = '#content-body > div.flash-container.flash-container-page.sticky > div > span'

    constructor(page: Page) {
        this.page = page;
    }

    async waitForPageLoad() {
        await this.page.waitForSelector(this.loadText)
    }

    async projectSuccessMessage() {
        const actual = await this.page.$eval(this.newRepoInstruction,
            element => element.textContent);
        return actual;
    }

    async scrollDownMenuBar() {
        await page.$eval(this.settingsIcon, (element) => {
            element.scrollIntoView(false);
        });
    }

    async clickSettingsIcon()
    {
        await this.page.waitForSelector(this.settingsIcon);
        await this.page.click(this.settingsIcon);
    }

    async gotoProjectEdit()
    {
        await this.page.goto(config.editProjectUrl);
        // await this.page.waitForNavigation();
    }

    async clicksMembersIcon()
    {
        await this.page.waitForSelector(this.membersIcon);
        await this.page.click(this.membersIcon);
    }
    

    async getProjectDeleteText()
    {
        return await this.page.innerText(this.projectDeletionText);
    }

}