
import config from "../data/config.json"

export class ProjectPage {
    // private loadText = 'text=The repository for this project is empty';
    private newRepoHeader = 'xpath=//*[@id="content-body"]/h4'
    private settingsIcon = 'data-testid=settings-icon';
    private membersIcon = 'id=js-onboarding-members-link';
    private projectDeletionText = '#content-body > div.flash-container.flash-container-page.sticky > div > span'

    // async waitForPageLoad() {
    //     await page.waitForSelector(this.loadText)
    // }

    async projectSuccessMessage() {
        const actual = await page.$eval(this.newRepoHeader,
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
        await page.waitForSelector(this.settingsIcon);
        await page.click(this.settingsIcon);
    }

    async gotoProjectEdit(projectName:String)
    {
        await page.goto(config.projectUrl+projectName+'/edit');
        // await page.waitForNavigation();
    }

    async clicksMembersIcon()
    {
        await page.waitForSelector(this.membersIcon);
        await page.click(this.membersIcon);
    }
    
    async selectCiCd(projectName:string)
    {
        await page.hover(this.settingsIcon);
        await page.goto(config.projectUrl+projectName+'/-/settings/ci_cd');
    }

    async getProjectDeleteText()
    {
        return await page.innerText(this.projectDeletionText);
    }

}