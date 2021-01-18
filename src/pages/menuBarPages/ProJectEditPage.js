"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectEditpage = void 0;
class ProjectEditpage {
    constructor() {
        this.loadText = 'text=Naming, topics, avatar';
        this.advancedSettings = 'id=js-project-advanced-settings';
        // private deleteProjectText = 'text=Delete project';
        this.deleteProjectButton = 'xpath=//*[@id="js-project-advanced-settings"]/div[2]/div[6]/form/button';
        this.deleteProjectWindowText = 'text=Delete project. Are you ABSOLUTELY SURE?';
        this.confirmProjectNameInput = 'id=confirm_name_input';
        this.deletProjectButton = '#delete-project-modal-1___BV_modal_footer_ > button.btn.js-modal-action-primary.btn-danger.btn-md.gl-button > span';
        this.projectText = '#delete-project-modal-1___BV_modal_body_ > div > p:nth-child(4) > code';
    }
    async waitForPageLoad() {
        await page.waitForSelector(this.loadText);
    }
    async clickAdvancedSettings() {
        await page.$eval(this.advancedSettings, (element) => {
            element.scrollIntoView(false);
        });
        await page.click(this.advancedSettings);
    }
    async clickDeleteProject() {
        await page.$eval(this.deleteProjectButton, (element) => {
            element.scrollIntoView(false);
        });
        await page.click(this.deleteProjectButton);
    }
    async deleteProject(projectName1) {
        let projectName = await page.innerText(this.projectText);
        await page.waitForTimeout(1000);
        await page.fill(this.confirmProjectNameInput, projectName);
        await page.click(this.deletProjectButton);
    }
}
exports.ProjectEditpage = ProjectEditpage;
