import data from '../src/data/config.json';
import {HomePage} from '../src/pages/HomePage';
import {NewProjectPage} from '../src/pages/projectCreationPages/NewPojectPage';
import {BlankProjectPage} from '../src/pages/projectCreationPages/BlankProjectPage';

const fs = require('fs');
import {BrowserContext, firefox, FirefoxBrowser, Page} from "playwright";
import {SignInPage} from "../src/pages/SignInPage";
import {MembersPage} from "../src/pages/menuBarPages/MembersPage";
import {ProjectPage} from "../src/pages/ProjectPage";
import {PipelinePage} from "../src/pages/menuBarPages/PipelinePage";
import {ProjectEditPage} from "../src/pages/menuBarPages/ProjectEditPage";
import {Utils} from "../src/utils/utils";

let page: Page
let firefoxBrowser: FirefoxBrowser
let firefoxContext: BrowserContext

describe('Gitlab tests', () => {
    beforeEach(async () => {
        firefoxBrowser = await firefox.launch({
            headless: true
        });
        firefoxContext = await firefoxBrowser.newContext();
        page = await firefoxContext.newPage();
        await page.goto(data.testUrl);
        let signInPage = new SignInPage(page);
        await signInPage.signIn(data.userName, data.password);
    })

    let projectName = new Utils().getRandomName();
    test('An existing user should be able to create and delete a project', async () => {
        await createProject(projectName)

        let projectEditPage = new ProjectEditPage(page);
        let projectPage = new ProjectPage(page);

        await projectPage.gotoProjectEdit(projectName);
        await projectEditPage.clickAdvancedSettings();
        await projectEditPage.clickDeleteProject();
        await projectEditPage.deleteProject();
    })

    test("User should be able add member to an existing project", async () => {
        let homePage = new HomePage(page);
        let projectPage = new ProjectPage(page);
        let memberPage = new MembersPage(page)

        await homePage.selectAnExistingProject()
        await projectPage.navigateToProjectMembers()
        await memberPage.addProjectMember(new Utils().getRandomEmailId())
        let messageForInvitingUser = await memberPage.getMessageForInviting();
        expect(messageForInvitingUser).toBe("Users were successfully added.");
    })

    // test("User should be able to add a new variable to an existing project", async () => {
    //     let pipelinePage = new PipelinePage(page);
    //     let projectPage = new ProjectPage(page);
    //     let homePage = new HomePage(page);
    //
    //     await homePage.selectAnExistingProject()
    //     await projectPage.selectCiCd(projectName);
    //     let key = "env";
    //     let value = 'integration';
    //     await pipelinePage.addVariable(key, value);
    //     let addedVariable = await pipelinePage.getVariable();
    //     expect(addedVariable).toBe(key);
    //
    //     await pipelinePage.deleteVariable();
    //     let noVariablesText = await pipelinePage.getNoVariablesText();
    //     expect(noVariablesText).toBe('There are no variables yet.');
    // })
    afterEach(async () => {
        await firefoxContext.close()
        await firefoxBrowser.close()
    })
    const createProject = async (projectName: string) => {
        let blankProjectPage = new BlankProjectPage(page);
        let newProjectPage = new NewProjectPage(page);
        let homePage = new HomePage(page);
        await homePage.createNewProject();
        await newProjectPage.clickBlankProject();
        await blankProjectPage.createProject(projectName);
    }
})

