"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersPage = void 0;
class MembersPage {
    constructor(page) {
        this.pageText = 'text=Project members';
        this.memberInputText = 'id=s2id_autogen1';
        this.selectMember = 'select#select2-drop';
        this.selectRole = 'select#access_level';
        this.newProjectText = 'text=New project';
        this.inviteButton = '#invite-member-pane > div > div > form > input.btn.btn-success';
        this.page = page;
    }
    async waitForPageLoad() {
        await this.page.waitForSelector(this.pageText);
    }
    async addDeveloper(developerName) {
        await this.page.type(this.memberInputText, developerName);
        await this.page.selectOption(this.selectMember, developerName);
    }
    async addRoleDeveloper() {
        await this.page.selectOption(this.selectRole, '30'); //valur for developer is 30
    }
    async clickInvite() {
        await this.page.click(this.inviteButton);
    }
}
exports.MembersPage = MembersPage;
