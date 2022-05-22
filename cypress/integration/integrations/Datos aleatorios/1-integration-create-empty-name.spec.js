import Integration from '../../../page-objects/integration'
import Login from '../../../page-objects/login';

const login       = new Login();
const integration = new Integration();

describe('Should login and create a integration without a name', () => {
    before(() => {
        login.go();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
    });

    it('should not create a integration', () => {
        integration
            .visit()
            .wait(2000)
            .clickNewIntegration()
            .wait(1000)
            .save()

        cy.contains('Retry').should('exist');
    });
});
