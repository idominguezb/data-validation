import Login from '../../../page-objects/login';
import Tag from '../../../page-objects/tag';

const login = new Login();
const tag = new Tag();
let tagName, twitterTitle, twitterDescription;

describe('Should login and not create a tag with twitter description succesfully', () => {
    before(() => {
        cy.request('https://my.api.mockaroo.com/tag.json?key=81544930').then(
            (json) => {
                let tags               = json.body;
                let tag                = tags[Math.floor(Math.random() * tags.length)];
                    tagName            = tag.tag_190;
                    twitterTitle       = tag.meta_title;
                    twitterDescription = tag.meta_description_501;
            }
        );

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
            .toggleSection(2)
            .setValue('[name="twitterTitle"]', twitterTitle)
            .setValue('[name="twitterDescription"]', twitterDescription)
            .save()
            .wait(1000);
    });

    it('twitter title input should have aleatory value', () => {
        cy.contains('Retry').should('exist');
    });
});
