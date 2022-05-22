import Integration from '../../../page-objects/integration';
import Login from '../../../page-objects/login';

const { faker } = require('@faker-js/faker');
const login = new Login();
const integration = new Integration();

let name;

describe('Should login and create a integration successfully', () => {
    before(() => {
        name = faker.datatype.string(192);
        login.go();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
    });

    it('should not create a integration', () => {
        integration
            .visit()
            .wait(1000)
            .clickNewIntegration()
            .wait(1000)
            .setName(name)
            .save();
    });

    it('integration should not be on integration list', () => {
        integration.visit();
        cy.contains(name).should('not.exist').wait(3000);
    });
});
