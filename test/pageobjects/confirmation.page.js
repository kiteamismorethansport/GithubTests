class ConfirmationPage {
    
    get headerConfirmation () { return $('.Primer_Brand__Heading-module__Heading___IVpmp.Primer_Brand__Heading-module__Heading--1___Ufc7G.Primer_Brand__Hero-module__Hero-heading___QuVBH')}
    
    
    async checkHeaderText() {
        await expect (this.headerConfirmation).toHaveText('Thanks for subscribing!')
    }
    
}
export default new ConfirmationPage()