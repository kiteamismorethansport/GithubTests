
import MainPage from "../pageobjects/main.page.js"
import ResourcesPage from "../pageobjects/resources.page.js"
import ConfirmationPage from "../pageobjects/confirmation.page.js";

describe('Resources github page activity', () => {
   
    it('check and click on subscribe button on github page', async () =>{
        await browser.url('https://github.com');
        await MainPage.scrollToSubscribe()
        await MainPage.isSubscribeClickable()
        await MainPage.clickOnSubscribeBtn()
    });
    it('check the header on subscribe page', async () =>{
        await expect(ResourcesPage.headerName).toHaveText("Subscribe to our developer newsletter")
        
    });
    
    it('accept cookies', async () =>{
        await ResourcesPage.acceptCookies()
        await browser.pause(2000)
    });

    it('scroll into input fields', async () =>{
        await ResourcesPage.scrollToInput()
        await browser.pause(2000)
    });

    

    it('insert email to input field email ', async () =>{
        await ResourcesPage.clickOnEmailInputField()
        await ResourcesPage.insertEmail()
        await browser.pause(2000)
    });

    it('choose the country in the pop up menu', async () =>{  
        await ResourcesPage.clickOnCountryField()
        await browser.pause(2000)
        await ResourcesPage.scrollIntoCountry()
        await ResourcesPage.chooseCountry()
        await browser.pause(3000)
    }); 
    
    it('click the checkbox', async () => {
        await ResourcesPage.clickCheck()
        await browser.pause(2000)
    });

    it('click subscribe button', async () =>{
        await ResourcesPage.clickSubscribe()
        await browser.pause(2000)

    });

    it('check header to have the given text', async () =>{
        await ConfirmationPage.checkHeaderText()
    });

 });

