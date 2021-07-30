
export default class ModalWindowPage {
    
    private modalLoginHeader = '#login-modal #Login'
    private username = '#username-modal'
    private password = '#password-modal'
    private loginModalBtn = '#login-modal  .btn'
    private validationAlert = '.alert'

    private registerModalHeader = '#register-modal  #Login'
    private registerUsername = '#register-username-modal'
    private registerFirstName = '#register-first-modal'
    private registerLastName = '#register-last-modal'
    private registerEmail = '#register-email-modal'
    private registerPassword = '#register-password-modal'
    private registerBtn = '#register-modal .btn'

    public getModalHeader(textHeader: string){
        cy.get(this.modalLoginHeader, {timeout: 2000}).should('have.text', textHeader )
        return this;
    }

    public typeUsername(username: string){
        cy.get(this.username).clear().type(username, {delay: 15});
        cy.writeFile('fixture/user-data.json', {username: username})
        return this; 
    }

    public typePassword(password: string){
        cy.get(this.password).clear().type(password, {delay: 15});
        return this; 
    }

    public clickLoginModalBtn(){
        cy.get(this.loginModalBtn).click()
        return this;
    }

    public getValidationAlert(text:string){
        cy.get(this.validationAlert, {timeout: 1000}).should('have.text', text)
        return this;
    }

    public getRegisterModalHeader(registerModalHeader:string){
        cy.get(this.registerModalHeader, {timeout: 2000}).should('have.text', registerModalHeader)
        return this;
    }

    public setregisterUsername(registerUsername:string){
        cy.get(this.registerUsername).type(registerUsername, {delay: 15})
        return this;
    }

    public setregisterFirstName(registerFirstName:string){
        cy.get(this.registerFirstName).type(registerFirstName, {delay: 15})
        return this;
    }

    public setregisterLastName(registerLastName:string){
        cy.get(this.registerLastName).type(registerLastName, {delay: 15})
        return this;
    }

    public setEmail(registerEmail:string){
        cy.get(this.registerEmail).type(registerEmail)
        return this;
    }

    public setPassword(registerPassword:string){
        cy.get(this.registerPassword).type(registerPassword)
        return this;
    }

    public clickRegisterBtn(){
        cy.get(this.registerBtn).click()
        return this;
    }

    public loginUser(username: string, password: string){
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLoginModalBtn();
    }
    

}