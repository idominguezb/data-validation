import Login from '../../../page-objects/login';
import Tag from '../../../page-objects/tag';

const login = new Login();
const tag = new Tag();
let tagName, facebookTitle;

describe('Should login and create a tag with facebook title succesfully', () => {
    before(() => {
        cy.request('https://my.api.mockaroo.com/tag.json?key=81544930').then(
            (json) => {
                let tags                = json.body;
                let tag                 = tags[Math.floor(Math.random() * tags.length)];
                    tagName             = tag.tag_190;
                    facebookTitle       = tag.meta_title;
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
            .toggleSection(3)
            .setValue('[name="ogTitle"]', facebookTitle)
            .save()
            .wait(1000);
    });

    it('facebook title input should have aleatory value', () => {
        cy.reload();
        tag.toggleSection(3)
            .validateValue('[name="ogTitle"]', facebookTitle)
            .wait(3000);
    });
});
