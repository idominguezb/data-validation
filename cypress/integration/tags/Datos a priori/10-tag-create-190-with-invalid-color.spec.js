import Login from '../../../page-objects/login';
import Tag from '../../../page-objects/tag';

const login = new Login();
const tag = new Tag();
let tagName, color;

describe('Should login and not create a tag with color succesfully', () => {
    before(() => {
        cy.fixture('tags.json').then((data) => {
            let tag = data[Math.floor(Math.random() * data.length)];
            tagName = tag.tag_190;
            color = tag.color;
        });

        login.go();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
    });

    it('should create tag', () => {
        tag.visit()
            .wait(2000)
            .clickNewTag()
            .setName(tagName)
            .setColor(color)
            .save()
            .wait(1000);
    });

    it('tag should not be available on list', () => {
        tag.visit();
        cy.contains(tagName).should('not.exist').wait(3000);
    });
});
