"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipelinePage = void 0;
class PipelinePage {
    constructor() {
        this.pageText = 'text=General pipelines';
        this.expandVariablesButton = '#js-cicd-variables-settings > div.settings-header > button';
        this.addVariableButton = '#js-cicd-variables-settings > div.settings-content > div > div > div > div > button';
        this.variableInput = 'id=token-input-2';
        this.valueInput = 'id=ci-variable-value';
        this.addVariable = '#add-ci-variable___BV_modal_footer_ > button.btn.btn-success.btn-md.gl-button > span';
        this.editVariableIcon = '#__BVID__10 > tbody > tr > td.text-right > div';
        this.variableValue = '#__BVID__10 > tbody > tr > td.text-plain > div > div';
        this.deleteVariableButton = '#add-ci-variable___BV_modal_footer_ > button.btn.btn-danger.btn-md.gl-button.btn-danger-secondary';
        this.noVariablesText = '#__BVID__10 > tbody > tr > td > div > div > p';
    }
    async waitForPageLoad() {
        await page.waitForSelector(this.pageText);
    }
    async expandVariables() {
        await page.click(this.expandVariablesButton);
    }
    async scrollDownMenuBar() {
        await page.$eval(this.addVariableButton, (element) => {
            element.scrollIntoView(false);
        });
    }
    async addVariables(variable, value) {
        await page.click(this.addVariableButton);
        await page.click(this.variableInput);
        await page.fill(this.variableInput, variable);
        await page.click(this.valueInput);
        await page.fill(this.valueInput, value);
        await page.click(this.addVariable);
    }
    async getVariable() {
        await page.waitForTimeout(1000);
        return page.innerText(this.variableValue);
    }
    async deleteVariable() {
        await page.click(this.editVariableIcon);
        await page.click(this.deleteVariableButton);
    }
    async getNoVariablesText() {
        return await page.innerText(this.noVariablesText);
    }
}
exports.PipelinePage = PipelinePage;
