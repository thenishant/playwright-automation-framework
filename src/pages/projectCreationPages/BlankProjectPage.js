"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlankProjectPage = void 0;
class BlankProjectPage {
    constructor() {
        // private blankProjectText = 'text=Create blank project'
        this.projectNameTextBox = 'id=project_name';
        this.createProjectSelector = '#new_project > input.btn.btn-success.project-submit';
    }
    // async waitForPageLoad() {
    //     await page.waitForSelector(this.blankProjectText);
    // }
    async enterProjectName(projectName) {
        await page.fill(this.projectNameTextBox, projectName);
    }
    async submitCreateButton() {
        await page.click(this.createProjectSelector);
    }
}
exports.BlankProjectPage = BlankProjectPage;
