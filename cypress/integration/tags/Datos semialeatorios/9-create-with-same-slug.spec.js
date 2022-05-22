import Login from '../../../page-objects/login';
import Tag from '../../../page-objects/tag';

const login = new Login();
const tag = new Tag();
let tagName;

describe('Should login and create a tag slug duplicated succesfully', () => {
    before(() => {
        cy.fixture('tags.json').then((data) => {
            let tag = data[Math.floor(Math.random() * data.length)];
            tagName = tag.tag_190;
        });

        login.go();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
    });

    it('should create tag', () => {
        tag.visit().wait(2000).clickNewTag().setName(tagName).save().wait(1000);
        tag.visit().wait(2000).clickNewTag().setName(tagName).save();
    });

    it('duplicated tag name should be saved', () => {
        cy.contains('Saved').should('exist').wait(3000);
    });
});
