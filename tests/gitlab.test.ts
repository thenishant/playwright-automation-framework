import data from '../src/data/config.json';
import { Utils } from '../src/utils/utils';
import { HomePage } from '../src/pages/HomePage';

describe('Gitlab tests', () => {
beforeEach(async () => {
    const deserializedCookies = new Utils().getCookies();
    await context.addCookies(deserializedCookies);
    await page.goto(data.testUrl);
  })

  it('An existing user is able to signin into gitlab', async () => {
    const homePage = new HomePage(page);
    await homePage.waitForHomePageLoading();
    expect(await page.title()).toBe('Projects · Dashboard · GitLab');
  })
})
