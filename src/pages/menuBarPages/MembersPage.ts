import { Page } from 'playwright';

export class MembersPage {
    private pageText = 'text=Project members';
    private memberInputText = 'id=s2id_autogen1';
    private selectRole = 'select#access_level'
    private inviteButton = '#invite-member-pane > div > div > form > input.btn.btn-success'
    private memberAddSuccessText = 'xpath=//*[@id="content-body"]/div[1]/div/span'
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForPageLoad() {
        await this.page.waitForSelector(this.pageText);
    }

    async addDeveloper(developerName: string) {
        await this.page.type(this.memberInputText, developerName);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('Enter');
    }

    async addRoleDeveloper() {
        await this.page.selectOption(this.selectRole, '30') //value for developer is 30
    }

    async clickInvite() {
        await this.page.click(this.inviteButton);
    }

    async getSucessMessageForAddMember() {
        await this.page.waitForTimeout(1000);
        return await this.page.innerText(this.memberAddSuccessText);
    }

}