import {Page} from 'playwright';

export class ProjectEditPage {

    private page: Page
    private loadText = 'text=Naming, topics, avatar';
    private advancedSettings = 'id=js-project-advanced-settings';
    // private deleteProjectText = 'text=Delete project';
    private deleteProjectButton = 'xpath=//*[@id="js-project-advanced-settings"]/div[2]/div[6]/form/button';
    private deleteProjectWindowText = 'text=Delete project. Are you ABSOLUTELY SURE?';
    private confirmProjectNameInput = 'input#confirm_name_input.gl-form-input.form-control';
    private deletProjectButton = '#delete-project-modal-1___BV_modal_footer_ > button.btn.js-modal-action-primary.btn-danger.btn-md.gl-button > span'
    private projectText = '#delete-project-modal-1___BV_modal_body_ > div > p:nth-child(4) > code';

    constructor(page: Page) {
        this.page = page;
    }

    async clickAdvancedSettings() {
        await this.page.$eval(this.advancedSettings, (element) => {
            element.scrollIntoView(false);
        });
        await this.page.click(this.advancedSettings);
    }

    async clickDeleteProject() {
        await this.page.$eval(this.deleteProjectButton, (element) => {
            element.scrollIntoView(false);
        });
        await this.page.click(this.deleteProjectButton);
    }

    async deleteProject() {
        let projectName = await this.page.innerText(this.projectText);
        await this.page.waitForTimeout(1000);
        await this.page.type(this.confirmProjectNameInput, projectName);
        await this.page.click(this.deletProjectButton);
    }
}