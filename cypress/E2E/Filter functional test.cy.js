/// <reference types="cypress" />

describe('The Dims & payload column', () => {
    beforeEach(() => {
      cy.login().then(() => {
        cy.visit('/fleets/trucks');
      })
    })
  
    it('should have filter list of truck by type of it', () => {
      let Type = 'Semi truck (Sleeper)';
       
        cy.intercept('GET', '/api/v1/trucks?type=sts&page=1&page_size=10&archived=false').as('getType');
        cy.get('form').find('.v-row').children().contains('Main information');
        cy.get('[data-qa=truck-type]').find('label').contains('Type').should('be.visible');
        cy.get('[data-qa=truck-type]').click();
        cy.get('[class="v-overlay__content v-select__content"]');
        cy.get('[class="v-list-item-title"]').contains('Semi truck (Sleeper)').click();
        cy.get('[id="search--apply-btn"]').click();
        cy.wait('@getType').its('response.statusCode').should('eq', 200);
        cy.get('[data-qa="truck-type"]').each(($el) => {
          cy.wrap($el).should('contain.text', Type);
        })

       
        })
      })
    