import Integration from '../../../page-objects/integration';
import Login from '../../../page-objects/login';

import Webhook from '../../../page-objects/webhook';

const { faker } = require('@faker-js/faker');
const login = new Login();
const integration = new Integration();
const webhook = new Webhook();

describe('Should login and create a integration successfully', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    before(() => {
        login.go();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
    });

    it('should not create a webhook', () => {
        integration
            .visit()
            .wait(1000)
            .clickFirstIntegration()
            .wait(1000)

        webhook.clickAddWebhook().wait(1000).save().wait(1000);
    });

    it('retry text should exists', () => {
        webhook.retry();
    });
});
