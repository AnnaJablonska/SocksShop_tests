export default class HomePage {

    private loginBtn = '#login'
    private registerBtn = '#register'
    private logout = '#logout'
    private loggedin = '#howdy > a'
    private catalogueTab = '#tabCatalogue'
    private itemCartBtn = '#numItemsInCart'

    public visitHomePage(){
        cy.visit(Cypress.env('homePageUrl'));
    }

    public clickLoginHyperlink(){
        cy.get(this.loginBtn).click();
        return this;
    }

    public clickRegisterHyperlink(){
        cy.get(this.registerBtn).click()
        return this;
    }

    public checkIfUserIsLoggedIn(text: string){
        cy.get(this.loggedin).should('have.text', text)
        return this;
    }

    public clickLogoutHyperlink(){
        cy.get(this.logout).click({timeout:2000})
        return this;
    }

    public checkLogoutSuccess(){
        cy.get(this.loginBtn).should('be.visible')
        return this;
    }

    goToCatalogue(){
        cy.get(this.catalogueTab).click({timeout: 1000})
        return this;
    }

    public clickShoppingCartBtn(){
        cy.get(this.itemCartBtn, { timeout: 20000 }).first().click()
        return this;
    }

    public checkItemsQuantityAddedToCart(itemQuantity: string){
        cy.get(this.itemCartBtn).should('have.text', itemQuantity + ' item(s) in cart')
        return this;
    };

}