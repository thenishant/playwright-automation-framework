import data from '../src/data/config.json';
import { Utils } from '../src/utils/utils';
import { HomePage } from '../src/pages/HomePage';
import { NewProjectPage } from '../src/pages/projectCreationPages/NewPojectPage';
import { BlankProjectPage } from '../src/pages/projectCreationPages/BlankProjectPage';
import { ProjectPage } from '../src/pages/ProjectPage';
import { ProjectEditpage } from '../src/pages/menuBarPages/ProJectEditPage';
import { MembersPage } from '../src/pages/menuBarPages/MembersPage';

describe('Gitlab tests', () => {
  let homePage: HomePage;
  let newProjectPage: NewProjectPage;

  beforeAll(async () => {
    const deserializedCookies = new Utils().getCookies();
    await context.addCookies(deserializedCookies);
    await page.goto(data.testUrl);
    homePage = new HomePage(page);
    newProjectPage = new NewProjectPage(page);
    await homePage.waitForPageLoad();
  })
  
  const createProject = async (projectName:string) => {
    await homePage.createNewProjectByClickingPlus();
    await newProjectPage.waitForPageLoad();
    await newProjectPage.clickOnBlankProject();
    let blankProjectPage = new BlankProjectPage(page);
    await blankProjectPage.waitForPageLoad();
    await blankProjectPage.enterProjectName(projectName);
    await blankProjectPage.submitCreateButton();
  }

  it('An existing user is able to signin into gitlab', async () => {
    expect(await page.title()).toBe('Projects · Dashboard · GitLab');
  })

  it('An existing user is able to create a new private project on gitlab', async () => {
    createProject('test');
    let projectPage = new ProjectPage(page);
    await projectPage.waitForPageLoad();
    const successText = await projectPage.projectSuccessMessage();
    if (successText != null)
    {
      expect(successText.trim()).toBe('Command line instructions');
    }
  })

  
})

