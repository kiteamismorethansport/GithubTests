class MainPage {

    get signUpButton() {return $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')}
    get headerOnTheMain() {return $('.h2-mktg.mb-5')}
    get startTrialLink() {return $('a[href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"]')}
    get subscribeButton() {return $('.btn-mktg.mb-4.btn-muted-mktg')}
    get searchInput() {return $('.header-search-button.placeholder.input-button.form-control.d-flex.flex-1.flex-self-stretch.flex-items-center.no-wrap.width-full.py-0.pl-2.pr-0.text-left.border-0.box-shadow-none')}
    get typeSearchFrame() {return $('.FormControl-input.QueryBuilder-Input.FormControl-medium')}
    get searchLink() {return $('.ActionListItem-description.QueryBuilder-ListItem-trailing')}
    get menuButton() {return $('.js-details-target.Button--link.Button--medium.Button.d-lg-none.color-fg-inherit.p-1')}
    get pricingLink()  {return $('.HeaderMenu-link.no-underline.px-0.px-lg-2.py-3.py-lg-2.d-block.d-lg-inline-block')}

    async clickOnPricingLink() {
        await this.pricingLink.click()
    }
    
    async clickOnMenu() {
        await this.menuButton.click()
    }
    
    async clickOnSearchFrame() {
        await this.searchInput.click()
    }

    async typeSearchText() {
        await this.typeSearchFrame.addValue("act")
    }

    async clickOnSearchBtn() {
        await this.searchLink.click()
    }
    
    async clickOnSignUpBtn () {
        await this.signUpButton.click()
    }

    async clickOnSubscribeBtn () {
        await this.subscribeButton.click()
    }
    async scrollToHeader () {
        await this.headerOnTheMain.scrollIntoView()
    }
    async scrollToSubscribe () {
        await this.subscribeButton.scrollIntoView()
    }
    async isSubscribeClickable () {
        await this.subscribeButton.isClickable()
    }
    async isHeaderDisplayed (){
        await this.headerOnTheMain.isDisplayed()
    }
    async clickTrialLink() {
        await this.startTrialLink.click()
    }
}

export default new MainPage()