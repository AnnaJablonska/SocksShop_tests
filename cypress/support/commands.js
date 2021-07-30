// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('registerUser', (username, firstname, lastname, email, password) => {
	cy.request({
		url: '/register',
		method: 'POST',
		body: {
            email: email,
            firstName: firstname,
            lastName: lastname,
            password: password,
            username: username,
		}
	})
});


Cypress.Commands.add('addAddressDetails', (city, country, number, postcode, street) => {
	cy.request({
		url: '/addresses',
		method: 'POST',
		body: {
			city: city,
			country: country,
			number: number,
			postcode: postcode,
			street: street,
        }
	});
});



