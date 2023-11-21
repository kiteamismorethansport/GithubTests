
import MainPage from "../pageobjects/main.page.js"
import PlanPage from "../pageobjects/plan.page.js";
import signUpPage from "../pageobjects/sign.up.page.js";

describe('Github sign up page activity', () => {
    it('click on signup button to be redirected to signup page', async () => {
     await browser.url('https://github.com');
     await MainPage.clickOnSignUpBtn()
     
    });

    it('check if email block is displayed, and welcome text is visible', async () =>{
        await signUpPage.waitUntilInputDisplayed()
        const welcomeIsVisble = await signUpPage.isWelcomeTextVisible()
        console.log("Welcome phrase on Sign up page is Visible: "+ welcomeIsVisble )
        await expect(signUpPage.welcomeText).toHaveText("Welcome to GitHub!\nLet’s begin the adventure") 
});

    it('insert credentials to input fields on sign up page', async ()=>{
       await signUpPage.insertEmail()
       await browser.pause(3000)
       await signUpPage.confirmEmailBtn()
       await signUpPage.insertPassword()
       await browser.pause(3000)
       await signUpPage.confirmPasswordBtn()
       await browser.pause(3000)
       await signUpPage.insertUserName()
       await browser.pause(3000)
       await signUpPage.confirmUserNameBtn()
       await browser.pause(3000)
       await signUpPage.insertYOrNO()
       await browser.pause(3000)
       await signUpPage.confirmYOrNoBtn()
       await browser.pause(3000)
    });
});


