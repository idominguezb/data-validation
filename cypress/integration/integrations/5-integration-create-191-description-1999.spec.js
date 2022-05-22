import Integration from '../../../page-objects/integration';
import Login from '../../../page-objects/login';

const { faker } = require('@faker-js/faker');
const login = new Login();
const integration = new Integration();

let name, description;

describe('Should login and create a integration successfully', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    before(() => {
        name        = faker.datatype.string(191);
        description = faker.datatype.string(1999);
        login.go();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
    });

    it('should create a description integration', () => {
        integration
            .visit()
            .wait(1000)
            .clickNewIntegration()
            .wait(1000)
            .setName(name)
            .save()
            .wait(1000)
            .setDesc(description)
            .saveEdition();
    });

    it('description should be equal to faker string', () => {
        cy.reload();
        integration.validateDescription(description);
    });
});
