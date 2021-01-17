import { Page } from "playwright"

export class BlankProjectPage {
    private page: Page
    private blankProjectText = 'text=Create blank project'
    private projectNameTextBox = 'id=project_name'
    private createProjectSelector = '#new_project > input.btn.btn-success.project-submit'

    constructor(page: Page) {
        this.page = page;
    }

    async waitForPageLoad() {
        await this.page.waitForSelector(this.blankProjectText);
    }

    async enterProjectName(projectName: string) {
        await this.page.fill(this.projectNameTextBox, projectName);
    }

    async submitCreateButton() {
        await this.page.click(this.createProjectSelector);    
    }
}