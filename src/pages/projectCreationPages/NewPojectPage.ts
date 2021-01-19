import {Page} from "playwright";

export class NewProjectPage {
    private createBlankProject = '.experiment-new-project-page-blank-state'
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    async clickBlankProject() {
        await this.page.click(this.createBlankProject);
    }
}
