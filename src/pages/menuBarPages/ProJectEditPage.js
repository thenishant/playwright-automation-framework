"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectEditpage = void 0;
class ProjectEditpage {
    constructor(page) {
        this.loadText = 'text=Naming, topics, avatar';
        this.advancedSettings = 'id=js-project-advanced-settings';
        // private deleteProjectText = 'text=Delete project';
        this.deleteProjectButton = 'xpath=//*[@id="js-project-advanced-settings"]/div[2]/div[6]/form/button';
        this.deleteProjectWindowText = 'text=Delete project. Are you ABSOLUTELY SURE?';
        this.confirmProjectNameInput = 'xpath=//*[@id="confirm_name_input"]';
        this.deletProjectButton = '#delete-project-modal-1___BV_modal_footer_ > button.btn.js-modal-action-primary.btn-danger.btn-md.gl-button > span';
        this.page = page;
    }
    async waitForPageLoad() {
        await this.page.waitForSelector(this.loadText);
    }
    async clickAdvancedSettings() {
        await page.$eval(this.advancedSettings, (element) => {
            element.scrollIntoView(false);
        });
        await this.page.click(this.advancedSettings);
    }
    async clickDeleteProject() {
        await page.$eval(this.deleteProjectButton, (element) => {
            element.scrollIntoView(false);
        });
        // let x = 'xpath=//*[@id="js-project-advanced-settings"]/div[2]/div[6]/form/button';
        await this.page.click(this.deleteProjectButton);
    }
    async deletePopUpTitle() {
        await this.page.waitForSelector(this.deleteProjectWindowText);
        // await this.page.click('#delete-project-modal-1___BV_modal_footer_ > button.btn.js-modal-action-cancel.btn-default.btn-md.gl-button > span');
        await this.page.click(this.confirmProjectNameInput);
        await this.page.type(this.confirmProjectNameInput, 'test');
        // await this.page.click(this.deletProjectButton);
    }
}
exports.ProjectEditpage = ProjectEditpage;
