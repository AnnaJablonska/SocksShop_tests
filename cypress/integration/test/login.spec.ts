import HomePage from '../pages/HomePage';
import ModalWindowPage from '../pages/ModalWindowPage';
import { Utils } from '../../support/utils';

let randomNumber = Utils.generateString(3)
const homePage = new HomePage();
const modalWindowPage = new ModalWindowPage();
const invalidCredentailsAlert = 'Invalid login credentials.'
const username = 'Test' + randomNumber;
const firstName = 'Firstname';
const lastName = 'Lastname';
const email = 'email' + + randomNumber + '@test.com'
const password = 'password';

describe('Login to test account', () => {​​​​​
    before(() => {
        homePage.visitHomePage();
        cy.registerUser(username, firstName, lastName, email, password);

      })

    it('User is not able to log in when credentials are not exist', () => {​​​​​
        homePage.clickLoginHyperlink();
        modalWindowPage.getModalHeader("Customer login");
        modalWindowPage.typeUsername('Test');
        modalWindowPage.typePassword('PasswordTest');
        modalWindowPage.clickLoginModalBtn();
        modalWindowPage.getValidationAlert(invalidCredentailsAlert);
    })

    it('User is not able to log in when are incorrect', () => {​​​​​
        modalWindowPage.typeUsername('Anna');
        modalWindowPage.clickLoginModalBtn();
        modalWindowPage.getValidationAlert(invalidCredentailsAlert);
        modalWindowPage.typePassword('X');
        modalWindowPage.getValidationAlert(invalidCredentailsAlert);
    })

      it('User is able to log in successfully', () => {​​​​​
        modalWindowPage.typeUsername(username);
        modalWindowPage.typePassword(password);
        modalWindowPage.clickLoginModalBtn();
        homePage.checkIfUserIsLoggedIn('Logged in as ' + firstName + ' ' + lastName);
    })

    it('User is able to log out successfully', () => {​​​​​
        homePage.clickLogoutHyperlink();
        homePage.checkLogoutSuccess();
    })


})