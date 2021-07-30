import HomePage from '../pages/HomePage';
import ModalWindowPage from '../pages/ModalWindowPage';
import { Utils } from '../../support/utils';


const homePage = new HomePage();
const modalWindowPage = new ModalWindowPage();

let randomNumber = Utils.generateString(3)

const username = 'Test' + randomNumber
const firstName = 'Firstname'
const lastName = 'Lastname'

describe('Register test account', () => {​​​​​
    before(() => {
        homePage.visitHomePage();
      })

    it('User is able to register with valid credentials', () => {​​​​​
        homePage.clickRegisterHyperlink();
        modalWindowPage.getRegisterModalHeader("Register");
        modalWindowPage.setregisterUsername(username);
        modalWindowPage.setregisterFirstName(firstName);
        modalWindowPage.setregisterLastName(lastName);
        modalWindowPage.setEmail('test' + randomNumber + '@test.pl');
        modalWindowPage.setPassword('Password1');
        modalWindowPage.clickRegisterBtn();
        homePage.checkIfUserIsLoggedIn('Logged in as '+ firstName + ' ' + lastName);
    })

})