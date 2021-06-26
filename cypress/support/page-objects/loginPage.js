class LoginPage {
    constructor() {
        this.userNameInputId = '#userName'
        this.passwordInputId = '#password'
        this.loginFormId = '#userForm'
        this.loginButtonId = '#login'
    }

    getLoginForm(username, password){
        cy.get(this.loginFormId).should('be.visible')
        cy.get(this.userNameInputId).should('be.visible').type(username)
        cy.get(this.passwordInputId).should('be.visible').type(password)
        cy.get(this.loginButtonId).click()
    }
}

export const loginPage = new LoginPage()