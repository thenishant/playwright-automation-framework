import {Page} from "playwright";

export class BlankProjectPage {
    private projectNameTextBox = 'id=project_name'
    private createProjectButton = '//*[@id="new_project"]/input[3]'
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private async enterProjectName(projectName: string) {
        await this.page.fill(this.projectNameTextBox, projectName);
    }

    private async clickOnCreateButton() {
        await this.page.click(this.createProjectButton);
    }

    async createProject(projectName: string) {
        await this.enterProjectName(projectName)
        await this.clickOnCreateButton()
    }
}
