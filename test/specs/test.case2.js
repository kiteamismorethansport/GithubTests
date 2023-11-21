
import MainPage from "../pageobjects/main.page.js"
import PlanPage from "../pageobjects/plan.page.js";
import signUpPage from "../pageobjects/sign.up.page.js";

describe('Github main page activity', () => {
   
    it('check if the header exist on the main page', async () =>{
        await browser.url('https://github.com');
        await browser.pause(2000)
        await MainPage.scrollToHeader()
        await MainPage.isHeaderDisplayed()
        await expect (MainPage.headerOnTheMain).toHaveText("Over 100 million developers call GitHub home3")
        await browser.pause(2000)
        
    });

    it ('check the plans page', async () =>{
        await MainPage.clickTrialLink()
        await expect(PlanPage.planPageHeader).toHaveText("Pick your trial plan")
        await PlanPage.clickCloudPlan()
        await browser.pause(2000)
    });

 });

