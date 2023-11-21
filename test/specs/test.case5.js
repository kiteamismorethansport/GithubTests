
import MainPage from "../pageobjects/main.page.js"
import PricingPage from "../pageobjects/pricing.page.js";

describe('Pricing page', () => {
   
    it('click on Pricing button', async () =>{
        await browser.url('https://github.com');
        await MainPage.clickOnMenu()
        await MainPage.clickOnPricingLink()
    });
    
    it('check that pricing page header is visible', async () => {
        await PricingPage.isPricingHeaderVisible()
    });

    it('scroll to "compare features" link', async () => {
        await PricingPage.scrollToCompareFeaturesLink()
    })

    it('click on "compare features" link', async () => {
        await PricingPage.clickOnCompareFeaturesLink()
    })

    it('check if header on the scrolled down page has "Compare features" text', async () => {
       await PricingPage.scrollToCompareFeaturesHeader()
       await PricingPage.checkTextCompareFeautersHeader()
       await browser.pause(2000)
    })


 });

