export class BlankProjectPage {
    // private blankProjectText = 'text=Create blank project'
    private projectNameTextBox = 'id=project_name'
    private createProjectSelector = '#new_project > input.btn.btn-success.project-submit'

    // async waitForPageLoad() {
    //     await page.waitForSelector(this.blankProjectText);
    // }

    async enterProjectName(projectName: string) {
        await page.fill(this.projectNameTextBox, projectName);
    }

    async submitCreateButton() {
        await page.click(this.createProjectSelector);
    }
}
