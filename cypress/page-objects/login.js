export default class Login {
    visit() {
        cy.visit(Cypress.env('url') + '/ghost/#/signin');
        return this;
    }

    setEmail() {
        cy.get('[name=identification]').type(Cypress.env('username'));
        return this;
    }

    setPassword() {
        cy.get('[name=password]').type(Cypress.env('password'));
        return this;
    }

    clickLogin() {
        cy.get('.js-login-button').click();
    }

    go() {
        this.visit();
        this.setEmail();
        this.setPassword();
        this.clickLogin();
    }
}
