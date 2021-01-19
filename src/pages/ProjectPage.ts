import config from "../data/config.json"
import {Page} from "playwright";

export class ProjectPage {
    constructor(page: Page) {
        this.page = page;
    }

    private page: Page;
    // private loadText = 'text=The repository for this project is empty';
    private newRepoHeader = 'xpath=//*[@id="content-body"]/h4'
    private settingsIcon = 'data-testid=settings-icon';
    private membersIcon = 'id=js-onboarding-members-link';
    private projectDeletionText = '#content-body > div.flash-container.flash-container-page.sticky > div > span'

    async projectSuccessMessage() {
        const actual = await this.page.$eval(this.newRepoHeader,
            element => element.textContent);
        return actual;
    }

    private async scrollDownToSettings() {
        await this.page.waitForSelector(this.membersIcon)
        await this.page.$eval(this.settingsIcon, (element) => {
            element.scrollIntoView(false);
        });
    }

    private async clickSettingsIcon() {
        await this.page.waitForSelector(this.settingsIcon);
        await this.page.click(this.settingsIcon);
    }

    async gotoProjectEdit(projectName: String) {
        await this.page.goto(config.projectUrl + projectName + '/edit');
    }

    private async clickOnMembers() {
        await this.page.waitForSelector(this.membersIcon);
        await this.page.click(this.membersIcon);
    }

    async selectCiCd(projectName: string) {
        await this.page.goto(`${config.projectUrl + projectName}/-/settings/ci_cd`);
    }

    private async getProjectDeleteText() {
        return await this.page.innerText(this.projectDeletionText);
    }


    async navigateToProjectMembers() {
        await this.scrollDownToSettings()
        await this.clickOnMembers()
    }

}