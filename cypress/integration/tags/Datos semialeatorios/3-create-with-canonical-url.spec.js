import Login from '../../../page-objects/login';
import Tag from '../../../page-objects/tag';

const login = new Login();
const tag   = new Tag();
let tagName, canonicalUrl;

describe('Should login and create a tag with canonical url succesfully', () => {
    before(() => {
        cy.request('https://my.api.mockaroo.com/tag.json?key=81544930').then(
            (json) => {
                let tags         = json.body;
                let tag          = tags[Math.floor(Math.random() * tags.length)];
                    tagName      = tag.tag_190;
                    canonicalUrl = tag.canonical_url;
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
            .toggleSection(1)
            .setCanonicalUrl(canonicalUrl)
            .save()
            .wait(1000);
    });

    it('meta url input should have aleatory value', () => {
        cy.reload();
        tag.toggleSection(1)
            .validateValue('[name="metaTitle"]', canonicalUrl)
            .wait(3000);
    });
});
