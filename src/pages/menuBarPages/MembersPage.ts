import {Page} from "playwright";

export class MembersPage {
    constructor(page: Page) {
        this.page = page;
    }

    private page: Page;
    private memberInputText = 'id=s2id_autogen1';
    private selectRolePermission = 'select#access_level'
    private inviteButton = '#invite-member-pane > div > div > form > input.btn.btn-success'
    private messageForInviting = 'xpath=//*[@id="content-body"]/div[1]/div/span'

    private async addMemberViaEmail(email: string) {
        await this.page.type(this.memberInputText, email);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('Enter');
    }

    private async selectRole() {
        await this.page.selectOption(this.selectRolePermission, '30') //value for developer is 30
    }

    private async clickInvite() {
        await this.page.click(this.inviteButton);
    }

    public async addProjectMember(email: string) {
        await this.addMemberViaEmail(email)
        await this.selectRole()
        await this.clickInvite()
    }

    public async getMessageForInviting() {
        await this.page.waitForTimeout(1000);
        return this.page.innerText(this.messageForInviting);
    }
}