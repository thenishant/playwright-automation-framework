import {Page} from "playwright";

export class HomePage {
    constructor(page: Page) {
        this.page = page;
    }

    private page: Page;
    private welcomeText = 'text=Groups';
    private plusIcon = 'id=js-onboarding-new-project-link';
    private newProjectText = 'text=New project';
    private existingProjectName = '.project-name'
    private newProject = "a.gl-button.btn.btn-success"

    async createNewProject() {
        await this.page.click(this.newProject)
    }

    async selectAnExistingProject() {
        await this.page.click(this.existingProjectName)
    }

    // async createNewProject() {
    //     await this.page.click(this.newProject);
    //     await this.page.click(this.newProjectText);
    // }
}
