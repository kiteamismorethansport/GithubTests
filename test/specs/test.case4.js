
import MainPage from "../pageobjects/main.page.js"
import RepositoriesPage from "../pageobjects/repositories.page.js";
describe('Search tests', () => {
   
    it('click on the search frame', async () =>{
        await browser.url('https://github.com');
        await MainPage.clickOnMenu()
        await browser.pause(2000)
        await MainPage.clickOnSearchFrame()
        await browser.pause(2000)
        await MainPage.typeSearchText()
        await browser.pause(2000)
        await MainPage.clickOnSearchBtn()
        await browser.pause(5000)
    });
    it('check search results page to have word "act" in one of search results', async () => {
        await RepositoriesPage.checkText()
    });

 });

