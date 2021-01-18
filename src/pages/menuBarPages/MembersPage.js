"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersPage = void 0;
class MembersPage {
    constructor() {
        this.pageText = 'text=Project members';
        this.memberInputText = 'id=s2id_autogen1';
        this.selectRole = 'select#access_level';
        this.inviteButton = '#invite-member-pane > div > div > form > input.btn.btn-success';
        this.memberAddSuccessText = 'xpath=//*[@id="content-body"]/div[1]/div/span';
    }
    async waitForPageLoad() {
        await page.waitForSelector(this.pageText);
    }
    async addDeveloper(developerName) {
        await page.type(this.memberInputText, developerName);
        await page.waitForTimeout(1000);
        await page.keyboard.press('Enter');
    }
    async addRoleDeveloper() {
        await page.selectOption(this.selectRole, '30'); //value for developer is 30
    }
    async clickInvite() {
        await page.click(this.inviteButton);
    }
    async getSucessMessageForAddMember() {
        await page.waitForTimeout(1000);
        return await page.innerText(this.memberAddSuccessText);
    }
}
exports.MembersPage = MembersPage;
