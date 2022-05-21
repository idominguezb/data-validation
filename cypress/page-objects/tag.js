export default class Tag {
    visit() {
        cy.visit(Cypress.env('url') + '/ghost/#/tags');
        return this;
    }

    clickNewTag() {
        cy.get('[href*="#/tags/new/"]').click();
        return this;
    }

    setName(name) {
        cy.get('[name=name]').clear().type(name, { force: true });
        return this;
    }

    setDesc(desc) {
        cy.get('[name=description]').type(desc);
        return this;
    }

    setSlug(slug) {
        cy.get('[name=slug]').type(slug);
        return this;
    }

    setColor(color) {
        cy.get('.input-color > [name=accent-color]').type(color);
        return this;
    }

    wait(time) {
        cy.wait(time);
        return this;
    }

    clickFirstTag() {
        cy.get(`.gh-list li:nth-child(3) > a:first-child`).click({
            force: true,
        });
        return this;
    }

    save() {
        cy.contains('Save').click();
        return this;
    }
}
