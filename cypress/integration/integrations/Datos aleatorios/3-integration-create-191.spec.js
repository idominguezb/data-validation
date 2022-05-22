import Integration from '../../../page-objects/integration';
import Login from '../../../page-objects/login';


const { faker } = require('@faker-js/faker');
const login = new Login();
const integration = new Integration();

let name;

describe('Should login and create a integration successfully', () => {
    before(() => {
        name = faker.datatype.string(191);
        login.go();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
    });

    it('should create a integration', () => {
        integration
            .visit()
            .wait(1000)
            .clickNewIntegration()
            .wait(1000)
            .setName(name)
            .save();
    });

    it('integration should be on integration list', () => {
        integration.visit();
        cy.contains(name).should('exist').wait(3000);
    });
});
