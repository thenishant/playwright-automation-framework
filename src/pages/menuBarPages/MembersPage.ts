import { Page } from 'playwright';

export class MembersPage {
    private pageText = 'text=Project members';
    private memberInputText = 'id=s2id_autogen1';
    private selectMember = 'select#select2-drop';
    private selectRole = 'select#access_level'
    private newProjectText = 'text=New project';
    private inviteButton = '#invite-member-pane > div > div > form > input.btn.btn-success'
    private page: Page;

    constructor(page:Page)
    {
        this.page = page;
    }

    async waitForPageLoad()
    {
        await this.page.waitForSelector(this.pageText);
    }

    async addDeveloper(developerName:string)
    {
        await this.page.type(this.memberInputText,developerName);
        await this.page.selectOption(this.selectMember,developerName);
    }

    async addRoleDeveloper()
    {
        await this.page.selectOption(this.selectRole, '30') //valur for developer is 30
    }

    async clickInvite()
    {
        await this.page.click(this.inviteButton);
    }

}