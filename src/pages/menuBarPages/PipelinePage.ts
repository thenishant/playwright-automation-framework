import { Page } from 'playwright';
export class PipelinePage {
    private pageText = 'text=General pipelines';
    private expandVariablesButton = '#js-cicd-variables-settings > div.settings-header > button';
    private addVariableButton = '#js-cicd-variables-settings > div.settings-content > div > div > div > div > button';
    private variableInput = 'id=token-input-2';
    private valueInput = 'id=ci-variable-value';
    private addVariable = '#add-ci-variable___BV_modal_footer_ > button.btn.btn-success.btn-md.gl-button > span';
    private editVariableIcon = '#__BVID__10 > tbody > tr > td.text-right > div';
    private variableValue = '#__BVID__10 > tbody > tr > td.text-plain > div > div'
    private deleteVariableButton = '#add-ci-variable___BV_modal_footer_ > button.btn.btn-danger.btn-md.gl-button.btn-danger-secondary';
    private noVariablesText = '#__BVID__10 > tbody > tr > td > div > div > p'

    private page: Page;

    constructor(page:Page)
    {
        this.page = page;
    }

    async waitForPageLoad()
    {
        await this.page.waitForSelector(this.pageText);
    }

    async expandVariables()
    {
        await this.page.click(this.expandVariablesButton);
    }

    async scrollDownMenuBar() {
        await page.$eval(this.addVariableButton, (element) => {
            element.scrollIntoView(false);
        });
    }

    async addVariables(variable:string,value:string)
    {
        await this.page.click(this.addVariableButton);
        await this.page.click(this.variableInput);
        await this.page.fill(this.variableInput,variable);
        await this.page.click(this.valueInput);
        await this.page.fill(this.valueInput,value);
        await this.page.click(this.addVariable);
    }

    async getVariable()
    {
        await this.page.waitForTimeout(1000);
        return this.page.innerText(this.variableValue);
    }

    async deleteVariable()
    {
        await this.page.click(this.editVariableIcon);
        await this.page.click(this.deleteVariableButton);
    }

    async getNoVariablesText()
    {
        return await this.page.innerText(this.noVariablesText);
    }

    
}