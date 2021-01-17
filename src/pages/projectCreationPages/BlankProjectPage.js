"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlankProjectPage = void 0;
class BlankProjectPage {
    constructor(page) {
        this.blankProjectText = 'text=Create blank project';
        this.projectNameTextBox = 'id=project_name';
        this.createProjectSelector = '#new_project > input.btn.btn-success.project-submit';
        this.page = page;
    }
    async waitForPageLoad() {
        await this.page.waitForSelector(this.blankProjectText);
    }
    async enterProjectName(projectName) {
        await this.page.fill(this.projectNameTextBox, projectName);
    }
    async submitCreateButton() {
        await this.page.click(this.createProjectSelector);
    }
}
exports.BlankProjectPage = BlankProjectPage;
