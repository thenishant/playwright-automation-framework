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

    async waitForPageLoad()
    {
        await page.waitForSelector(this.pageText);
    }

    async expandVariables()
    {
        await page.click(this.expandVariablesButton);
    }

    async scrollDownMenuBar() {
        await page.$eval(this.addVariableButton, (element) => {
            element.scrollIntoView(false);
        });
    }

    async addVariables(variable:string,value:string)
    {
        await page.click(this.addVariableButton);
        await page.click(this.variableInput);
        await page.fill(this.variableInput,variable);
        await page.click(this.valueInput);
        await page.fill(this.valueInput,value);
        await page.click(this.addVariable);
    }

    async getVariable()
    {
        await page.waitForTimeout(1000);
        return page.innerText(this.variableValue);
    }

    async deleteVariable()
    {
        await page.click(this.editVariableIcon);
        await page.click(this.deleteVariableButton);
    }

    async getNoVariablesText()
    {
        return await page.innerText(this.noVariablesText);
    }

    
}