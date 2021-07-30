declare namespace Cypress {
	interface Chainable {
	
    /* Custom command for register new user */
	  registerUser(username: string, firstname: string, lastname: string, email: string, password: string): Chainable<any>


	/* Command to add address for ordering an item */
	addAddressDetails(city: string, country: string, number: string, postcode: string, street: string): Chainable<any>

    }

  }