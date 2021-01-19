import {Page} from 'playwright';

export class PipelinePage {
    private page: Page
    private pageText = 'text=General pipelines';
    private expandVariablesButton = '#js-cicd-variables-settings > div.settings-header > button';
    private addVariableButton = '#js-cicd-variables-settings > div.settings-content > div > div > div > div > button';
    private variableInput = 'id=token-input-2';
    private valueInput = 'id=ci-variable-value';
    private addVariableSelector = '#add-ci-variable___BV_modal_footer_ > button.btn.btn-success.btn-md.gl-button > span';
    private editVariableIcon = 'button[data-qa-selector="edit_ci_variable_button"]';
    private variableKey = '#__BVID__10 > tbody > tr > td.text-plain > div > div'
    private deleteVariableButton = '#add-ci-variable___BV_modal_footer_ > button.btn.btn-danger.btn-md.gl-button.btn-danger-secondary';
    private noVariablesText = '.text-center.empty-variables.text-plain'

    constructor(page: Page) {
        this.page = page
    }

    private async waitForPageLoad() {
        await this.page.waitForSelector(this.pageText);
    }

    private async expandVariables() {
        await this.page.click(this.expandVariablesButton);
    }

    async scrollDownMenuBar() {
        await this.page.$eval(this.addVariableButton, (element) => {
            element.scrollIntoView(false);
        });
    }

    private async createVariable(variable: string, value: string) {
        await this.page.click(this.addVariableButton);
        await this.page.click(this.variableInput);
        await this.page.fill(this.variableInput, variable);
        await this.page.click(this.valueInput);
        await this.page.fill(this.valueInput, value);
        await this.page.click(this.addVariableSelector);
    }

    async getVariable() {
        await this.page.waitForTimeout(1000);
        return this.page.innerText(this.variableKey);
    }

    async deleteVariable() {
        await this.page.click(this.editVariableIcon);
        await this.page.click(this.deleteVariableButton);
    }

    async getNoVariablesText() {
        return await this.page.innerText(this.noVariablesText);
    }

    async addVariable(key: string, value: string) {
        await this.expandVariables()
        await this.createVariable(key, value)
    }
}