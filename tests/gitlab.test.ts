import data from '../src/data/config.json';
import { Utils } from '../src/utils/utils';
import { HomePage } from '../src/pages/HomePage';
import { NewProjectPage } from '../src/pages/projectCreationPages/NewPojectPage';
import { BlankProjectPage } from '../src/pages/projectCreationPages/BlankProjectPage';
import { ProjectPage } from '../src/pages/ProjectPage';
import { ProjectEditpage } from '../src/pages/menuBarPages/ProJectEditPage';
import { MembersPage } from '../src/pages/menuBarPages/MembersPage';
import { PipelinePage } from '../src/pages/menuBarPages/PipelinePage';

describe('Gitlab tests', () => {
  let homePage = new HomePage;
  let newProjectPage= new NewProjectPage;
  let utils = new Utils();

  const createProject = async (projectName:string) => {
    await homePage.createNewProjectByClickingPlus();
    // await newProjectPage.waitForPageLoad();
    await newProjectPage.clickOnBlankProject();
    let blankProjectPage = new BlankProjectPage();
    // await blankProjectPage.waitForPageLoad();
    await blankProjectPage.enterProjectName(projectName);
    await blankProjectPage.submitCreateButton();
  }

  it('An existing user is able to signin into gitlab', async () => {
    await homePage.waitForPageLoad();
    expect(await page.title()).toBe('Projects · Dashboard · GitLab');
  })

  it('An existing user is able to create a new private project on gitlab', async () => {
    let projectName = utils.getRandomString();
    await createProject(projectName);
    let projectPage = new ProjectPage();
    // await projectPage.waitForPageLoad();
    const projectSuccessText = await projectPage.projectSuccessMessage();
    if (projectSuccessText != null)
    {
      expect(projectSuccessText.trim()).toBe('The repository for this project is empty');
    }

    //add member
    await projectPage.scrollDownMenuBar();
    await projectPage.clicksMembersIcon();

    let membersPage = new MembersPage();
    // await membersPage.waitForPageLoad();
    await membersPage.addDeveloper(data.developer);
    await membersPage.addRoleDeveloper();
    await membersPage.clickInvite();
    const addMemberSuccesstext = await membersPage.getSucessMessageForAddMember();
    expect(addMemberSuccesstext).toBe('Users were successfully added.');

    //add variable
    await projectPage.scrollDownMenuBar();
    await projectPage.selectCiCd(projectName);
    let pipelinePage = new PipelinePage();
    await pipelinePage.waitForPageLoad();
    await pipelinePage.expandVariables();
    await pipelinePage.scrollDownMenuBar();
    await pipelinePage.expandVariables();
    let variable = "env";
    let value = 'integration';
    await pipelinePage.addVariables(variable,value);
    let addedVariable = await pipelinePage.getVariable();
    expect(addedVariable).toBe(variable);

    // delete variable
    await pipelinePage.deleteVariable();
    let noVariablesText = await pipelinePage.getNoVariablesText();
    expect(noVariablesText).toBe('There are no variables yet.');

    //delete project
    await projectPage.scrollDownMenuBar();
    await projectPage.clickSettingsIcon();
    await projectPage.gotoProjectEdit(projectName);

    let projectEditPage = new ProjectEditpage();
    await projectEditPage.waitForPageLoad();
    await projectEditPage.clickAdvancedSettings();
    await projectEditPage.clickDeleteProject();
    await projectEditPage.deleteProject('test');
  })


})

