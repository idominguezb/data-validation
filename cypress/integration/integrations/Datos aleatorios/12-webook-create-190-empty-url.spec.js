import Integration from '../../../page-objects/integration';
import Login from '../../../page-objects/login';

import Webhook from '../../../page-objects/webhook';

const { faker } = require('@faker-js/faker');
const login = new Login();
const integration = new Integration();
const webhook = new Webhook();

let name;

describe('Should login and create a integration successfully', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    before(() => {
        name = faker.datatype.string(190);

        login.go();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
    });

    it('should create a webhook', () => {
        integration.visit().wait(1000).clickFirstIntegration().wait(1000);

        webhook
            .clickAddWebhook()
            .setName(name)
            .setEvent()
            .save()
            .wait(1000);
    });

    it('retry text should exists', () => {
        webhook.retry();
    });
});
