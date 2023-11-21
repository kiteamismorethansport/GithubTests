class SignUpPage {

    get welcomeText () {return $('.text-mono.text-gray-light-mktg')}
    get emailBlock () {return $('[class="m-4 p-4 f4 color-shadow-small bg-gray-800-mktg rounded-2 signup-content-container"]')}
    get emailInput () {return $('#email')}
    get confirmEmailButton () {return $('//button[@data-optimizely-event="click.signup_continue.email"]')}
    get passwordInput () {return $('#password')}
    get confirmPasswordButton () {return $('//button[@data-optimizely-event="click.signup_continue.password"]')}
    get userNameInput () {return $('#login')}
    get confirmUserNameButton () {return $('//button[@data-optimizely-event="click.signup_continue.username"]')}
    get yesOrNoInput() {return $('#opt_in')}
    get confirmYOrNoButton () {return $('//button[@data-optimizely-event="click.signup_continue.opt-in"]')}
    
    async isWelcomeTextVisible () {
      return (await this.welcomeText.isDisplayed())
    }
    async waitUntilInputDisplayed(){
        await this.emailBlock.waitForDisplayed({timeout:6000})
    }
    async insertEmail() {
        await this.emailInput.addValue("accountgitHUBster@gmail.com")
    }
    
    async confirmEmailBtn() {
        await this.confirmEmailButton.click()
    }

    async insertPassword() {
        await this.passwordInput.addValue("ASDklkjeiol1235423!")
    }

    async confirmPasswordBtn () {
        await this.confirmPasswordButton.click()
    }

    async insertUserName(){
        await this.userNameInput.addValue("WhatAWonderFullWorld")
    }

    async confirmUserNameBtn () {
        await this.confirmUserNameButton.click()
    }

    async insertYOrNO () {
        await this.yesOrNoInput.addValue("y")
    }

    async confirmYOrNoBtn () {
        await this.confirmYOrNoButton.click()
    }

}

export default new SignUpPage()