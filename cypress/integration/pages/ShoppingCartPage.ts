export default class BasketPage {

    private changePaymentHyperlink = ':nth-child(2) > .box > .box-header > p > a';
    private creditCardModal = '#credit-card';
    private cardNumber = '#form-card-number';
    private expiredDate = '#form-expires';
    private ccvCode = '#form-ccv';
    private updateBtn = '.text-right > .btn';
    private proceedToCheckoutBtn = '#orderButton';
    private socksname = '.item > :nth-child(3) > a';
    private priceItem = '#cartTotal';
    private validatrionAlert = '.alert';
    private updateBasketBtn = '.pull-right > .btn-default';
    private quantityInput = '#cart-list input.form-control';



    public checkIfBasketPageIsDisplayed(){
        cy.url().should('include', '/basket', { timeout: 20000 })
        cy.wait(1000)
    }

    public changeShippingAddress(){
        
    }
    public clickChangePaymentMethod(){
        cy.get(this.changePaymentHyperlink).click()
        return this;
    }

    public creditCardModalIsDisplayed(){
        cy.get(this.creditCardModal).should('be.visible')
        return this;
    }

    public addPaymentDetails(cardNumber: string, expires: string, ccv: string){
        cy.get(this.cardNumber).type(cardNumber, {force: true})
        cy.get(this.expiredDate).type(expires)
        cy.get(this.ccvCode).type(ccv)
        return this;
    }

    public clickUpdate(){
        cy.get(this.updateBtn, { timeout: 20000 }).click()
        return this.updateBtn;
    }

    public clickProceedToCheckoutBtn(){
        cy.get(this.proceedToCheckoutBtn, {timeout: 3000}).click({multiple:true})
        return this;
    }

    public checkIfProceedToCheckouBtnIsDisable(){
        cy.get(this.proceedToCheckoutBtn).should('be.disabled')
        return this;
    }

    public getSocksName(text: string){
        cy.get(this.socksname).should('have.text', text)
        return this;
    }

    public checkPriceItem(text: string){
        cy.get(this.priceItem).should('have.text', text)
        return this;
    }

    public getValidationAlert(text: string){
        cy.get(this.validatrionAlert).should('have.text', text)
        return this;
    }
    
    public clickUpdateBasket(){
        cy.get(this.updateBasketBtn).click()
        return this;
    }

    public checkQuantityInputNumber(quantity: string){
        cy.get(this.quantityInput).should('have.value', quantity)
        return this;
    }

}