class PricingPage {
    get pricingHeader () { return $('.p-responsive.container-xl.text-center.mt-7.mt-md-8.mt-lg-9.mb-5.mb-lg-9')}
    get compareFeaturesLink ()  { return $('.d-flex.flex-column.flex-items-center.flex-justify-center.h5-mktg')}
    get compareFeaturesHeader() {return $ ('.d-md-block.p-responsive.container-xl.text-center.my-8.my-md-9.js-compare-features-item')}
    
    async scrollToCompareFeaturesHeader () {
        await this.compareFeaturesHeader.scrollIntoView()
    }

    async checkTextCompareFeautersHeader () {
        await expect (this.compareFeaturesHeader).toHaveText('Compare features')
    }

    async isPricingHeaderVisible() {
        await this.pricingHeader.isDisplayed()
    }
    
    async scrollToCompareFeaturesLink () {
        await this.compareFeaturesLink.scrollIntoView()
    }

    async clickOnCompareFeaturesLink () {
        await this.compareFeaturesLink.click()
    }
}

export default new PricingPage()