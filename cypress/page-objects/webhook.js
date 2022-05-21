export default class Webhook {
    visit() {
        cy.visit(Cypress.env('url') + '/ghost/#/settings/integrations');
        return this;
    }

    clickAddWebhook() {
        cy.get('[href$="/webhooks/new/"]').click();
        return this;
    }

    setName(name) {
        cy.get('#webhook-name')
            .clear()
            .type(name, { force: true, parseSpecialCharSequences: false });
        return this;
    }

    setEvent() {
        cy.get('#webhook-event')
            .select('post.published')
            .should('have.value', 'post.published');
        return this;
    }

    setTargetUrl(url) {
        cy.get('#webhook-targetUrl').type(url);
        return this;
    }

    wait(time) {
        cy.wait(time);
        return this;
    }

    clickFirstWebhook() {
        cy.get(`.gh-list li:nth-child(3) > a:first-child`).click({
            force: true,
        });
        return this;
    }

    save() {
        cy.get('.modal-footer button:last-child').click({ force: true });
        return this;
    }

    retry() {
        cy.contains('Retry');
        return this;
    }
}
