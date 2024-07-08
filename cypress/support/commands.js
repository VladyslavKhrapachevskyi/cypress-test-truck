
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
Cypress.Commands.add('login', () => {
    cy.visit('/login');
    cy.get('input[type=email]').type(Cypress.env('email'));
    cy.get('input[type=password]').type(Cypress.env('password'));
    cy.get('button[type=button]').click().then(() => {
        cy.get('button').find('span').contains('Test User').should('be.visible')
    })
});