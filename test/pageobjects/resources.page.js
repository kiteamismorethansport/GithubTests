class ResourcesPage {
    
    get headerName () { return $('#hero-section-brand-heading')}
    get emailInputField () { return $('.Primer_Brand__TextInput-module__TextInput___EtKj3.TextInput.Primer_Brand__TextInput-module__TextInput--medium___kJrew.Primer_Brand__TextInput-module__TextInput--fullWidth___rbllM')}
    get countryInputField () { return $('.Primer_Brand__Select-module__Select___Jqn1f.Primer_Brand__Select-module__Select--medium___kckBr.Select')}
    get checkBox () { return $('.flex-shrink-0.mr-3.mt-2.flex-self-start')}
    get subscribeButton () {return $('.Primer_Brand__Button-module__Button___lDruK.Primer_Brand__Button-module__Button--primary___xIC7G.Primer_Brand__Button-module__Button--size-medium___EyCyw.mt-4')}
    get inputCredentialsBlock () { return $('.Primer_Brand__Stack-module__Stack___tASKe.Primer_Brand__Stack-module__Stack--vertical___CFzE7.Primer_Brand__Stack-module__Stack--gap-normal___JEO7_.Primer_Brand__Stack-module__Stack--padding-condensed___mo7Aq')}
    get country () { return $('[value="UA"]')}
    get cookiesAcceptButton () {return $('._1XuCi2WhiqeWRUVp3pnFG3.erL690_8JwUW-R4bJRcfl')}
    get credentialsBlock () {return $('.mx-auto.d-flex.flex-column.flex-items-stretch')}
    
    async scrollToInput() {
        await this.credentialsBlock.scrollIntoView({ block: 'center', inline: 'center' })
    }
    async clickOnEmailInputField() {
        await this.emailInputField.click()
    }
    async insertEmail() {
        await this.emailInputField.addValue("accountgitHUBster@gmail.com")
    }
    async clickOnCountryField(){
        await this.countryInputField.click()
    }
    async scrollIntoCountry(){
        await this.country.scrollIntoView()
    }
    async chooseCountry() {
        await this.country.click()
    }
    
    async clickCheck () {
        await this.checkBox.click()
    }
    async clickSubscribe () {
        await this.subscribeButton.click()
    }
    async acceptCookies() {
        await this.cookiesAcceptButton.click()
    }

}
export default new ResourcesPage()