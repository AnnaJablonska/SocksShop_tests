export default class CategoryPage {

    public checkIfCategoryPageIsDisplayed(){
        cy.url().should('include', '/category', { timeout: 20000 });
    }

    public goToProductDetails(number: string){
        cy.get(':nth-child('+ number + ') > .product > .text > .buttons > .btn-default').click();
    }

    public addItemToCart(number: string){
        cy.get(':nth-child(' + number + ') > .product > .text > .buttons > .btn-primary').click();
    }

    public getItemName(number: string){
        cy.get(':nth-child(' + number + ') > .product > .text > h3 > a')
        .invoke('text')
        .then((socksname) => {
            cy.readFile('cypress/fixtures/shopping-details.json').then((data) => {
                data.socksname = socksname;
                cy.writeFile('cypress/fixtures/shopping-details.json', data);
            });
        }); 
    };

    public getPriceItem(number: string){
        cy.get(':nth-child('+ number + ') > .product > .text > .price')
        .invoke('text')
        .then((priceitem) => {
            cy.readFile('cypress/fixtures/shopping-details.json').then((data) => {
                data.priceitem = priceitem;
                cy.writeFile('cypress/fixtures/shopping-details.json', data);
            });
        }); 
    };


}