export default class DetailsPage {


    private addToCartBtn = '#buttonCart'

    public checkIfDetailPageIsDisplayed(){
        cy.wait(2000)
        cy.url().should('include', '/detail');
    }

    public addToCart(){
        cy.get(this.addToCartBtn).first().click({multiple: true,force: true})
        return this;
    }


}