import HomePage from '../pages/HomePage';
import CategoryPage from '../pages/CategoryPage'; 
import { Utils } from '../../support/utils';
import DetailsPage from '../pages/DetailsPage';
import ShoppingCartPage from '../pages/ShoppingCartPage'
import OrdersPage from '../pages/OrdersPage';

let randomNumber = Utils.generateString(3)
const homePage = new HomePage();
const categoryPage = new CategoryPage();
const detailPage = new DetailsPage();
const shoppingCartPage = new ShoppingCartPage();
const orderPage = new OrdersPage();

const username = 'Test' + randomNumber;
const firstName = 'Firstname';
const lastName = 'Lastname';
const email = 'email' + + randomNumber + '@test.com'
const password = 'password';
const city = 'city';
const country = 'country';
const number = 'wroclaw';
const postcode = '50439';
const street = 'teczowa';
const cardNumber = '11221122111221234';
const expires = '11/22';
const ccv = '123';


describe('Checkout flow test', () => {​​​​​
    before(() => {
        homePage.visitHomePage();
        cy.registerUser(username, firstName, lastName, email, password);
      });

    it('User is able to checkout chosen socks - complete buying flow', () => {​​​​​
        homePage.goToCatalogue();
        categoryPage.checkIfCategoryPageIsDisplayed();
        categoryPage.goToProductDetails('2');
        detailPage.checkIfDetailPageIsDisplayed();
        detailPage.addToCart();
        homePage.clickShoppingCartBtn();
        shoppingCartPage.checkIfBasketPageIsDisplayed();
        cy.addAddressDetails(city, country, number, postcode, street);
        shoppingCartPage.clickChangePaymentMethod();
        shoppingCartPage.creditCardModalIsDisplayed();
        shoppingCartPage.addPaymentDetails(cardNumber, expires, ccv);
        shoppingCartPage.clickUpdate();
        shoppingCartPage.clickProceedToCheckoutBtn();
        orderPage.checkIfOrdersPageIsDisplayed();
        homePage.goToCatalogue();
    });

    it('User is able add socks to the cart directly from category page', () => {
        categoryPage.addItemToCart('2');
        categoryPage.getItemName('2');
        categoryPage.getPriceItem('2');
        homePage.checkItemsQuantityAddedToCart('1');
        homePage.clickShoppingCartBtn();
        shoppingCartPage.checkIfBasketPageIsDisplayed();
        cy.readFile('cypress/fixtures/shopping-details.json').then((data) => {
        shoppingCartPage.getSocksName(data.socksname);
        });  
    });

    it('Item has correct name in the cart', () => {
      cy.readFile('cypress/fixtures/shopping-details.json').then((data) => {
      shoppingCartPage.getSocksName(data.socksname);
      });  
    });

    it('Item has correct price in cart', () => {
      cy.readFile('cypress/fixtures/shopping-details.json').then((data) => {
        shoppingCartPage.checkPriceItem(data.priceitem + '.00');
        });  
    });

    it('Check If quantity is correct', () => {
        shoppingCartPage.checkQuantityInputNumber('1');
         
    });
    

    it('User is not able to buy with empty address and payment details', () => {
        shoppingCartPage.clickProceedToCheckoutBtn();
        shoppingCartPage.getValidationAlert('× Could not place order. Missing shipping or payment information.')
    });
})