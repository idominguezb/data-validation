export default class Integration {
    visit() {
        cy.visit(Cypress.env('url') + '/ghost/#/settings/integrations');
        return this;
    }

    clickNewIntegration() {
        cy.get('[href="#/settings/integrations/new/"]').click();
        return this;
    }

    setName(name) {
        cy.get('[name=integration-name]')
            .clear()
            .type(name, { force: true, parseSpecialCharSequences: false });
        return this;
    }

    editName(name) {
        cy.get('#integration_name')
            .clear()
            .type(name, { force: true, parseSpecialCharSequences: false });
        return this;
    }

    setDesc(desc) {
        cy.get('#integration_description').type(desc, {
            force: true,
            parseSpecialCharSequences: false,
        });
        return this;
    }

    wait(time) {
        cy.wait(time);
        return this;
    }

    clickFirstIntegration() {
        cy.get(
            `.gh-main-section:last-child .apps-grid-cell:first-child [href*="#/settings/integrations"]`
        ).click({
            force: true,
        });
        return this;
    }

    validateDescription(desc) {
        cy.get('#integration_description').should('have.value', desc);
    }

    save() {
        cy.get('.modal-footer button:last-child').click({ force: true });
        return this;
    }

    saveEdition() {
        cy.contains('Save').click();
        return this;
    }
}
