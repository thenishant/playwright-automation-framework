"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersPage = void 0;
class MembersPage {
    constructor(page) {
        this.pageText = 'text=Project members';
        this.memberInputText = 'id=s2id_autogen1';
        this.selectRole = 'select#access_level';
        this.inviteButton = '#invite-member-pane > div > div > form > input.btn.btn-success';
        this.memberAddSuccessText = 'xpath=//*[@id="content-body"]/div[1]/div/span';
        this.page = page;
    }
    async waitForPageLoad() {
        await this.page.waitForSelector(this.pageText);
    }
    async addDeveloper(developerName) {
        await this.page.type(this.memberInputText, developerName);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('Enter');
    }
    async addRoleDeveloper() {
        await this.page.selectOption(this.selectRole, '30'); //value for developer is 30
    }
    async clickInvite() {
        await this.page.click(this.inviteButton);
    }
    async getSucessMessageForAddMember() {
        await this.page.waitForTimeout(1000);
        return await this.page.innerText(this.memberAddSuccessText);
    }
}
exports.MembersPage = MembersPage;
