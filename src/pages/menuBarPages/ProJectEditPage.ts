import { Page } from 'playwright';

export class ProjectEditpage {
    private loadText = 'text=Naming, topics, avatar';
    private advancedSettings = 'id=js-project-advanced-settings';
    // private deleteProjectText = 'text=Delete project';
    private deleteProjectButton = 'xpath=//*[@id="js-project-advanced-settings"]/div[2]/div[6]/form/button';
    private deleteProjectWindowText = 'text=Delete project. Are you ABSOLUTELY SURE?';
    private confirmProjectNameInput = 'id=confirm_name_input';
    private deletProjectButton = '#delete-project-modal-1___BV_modal_footer_ > button.btn.js-modal-action-primary.btn-danger.btn-md.gl-button > span'
    private projectText = '#delete-project-modal-1___BV_modal_body_ > div > p:nth-child(4) > code';
    
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

    async deleteProject(projectName1: string) {
        let projectName = await page.innerText(this.projectText);
        await page.waitForTimeout(1000);
        await page.fill(this.confirmProjectNameInput, projectName);
        await page.click(this.deletProjectButton);
    }
}