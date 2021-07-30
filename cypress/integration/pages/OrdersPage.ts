export default class OrdersPage {

    public checkIfOrdersPageIsDisplayed(){
        cy.url().should('include', '/customer-orders', { timeout: 20000 });
    }
}