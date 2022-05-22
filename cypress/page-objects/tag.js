export default class Tag {
    visit() {
        cy.visit(Cypress.env('url') + '/ghost/#/tags');
        return this;
    }

    clickNewTag() {
        cy.get('.view-actions [href*="#/tags/new/"]').click();
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

    setMetaTitle(title) {
        cy.get('[name=metaTitle]').type(title);
        return this;
    }

    setMetaDescription(desc) {
        cy.get('[name=metaDescription]').type(desc);
        return this;
    }

    setCanonicalUrl(url) {
        cy.get('[name=canonicalUrl]').type(url);
        return this;
    }

    setValue(path, value) {
        cy.get(path).type(value);
        return this;
    }

    validateValue(path, value) {
        cy.get(path).should('have.value', value);
        return this;
    }

    wait(time) {
        cy.wait(time);
        return this;
    }

    toggleSection(index) {
        cy.get(`.gh-expandable-block:nth-child(${index}) button`).click();
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
