import Login from '../../../page-objects/login';
import Tag from '../../../page-objects/tag';

const login = new Login();
const tag   = new Tag();
let tagName, metaDescription;

describe('Should login and create a tag with meta description succesfully', () => {
    before(() => {
        cy.request('https://my.api.mockaroo.com/tag.json?key=81544930').then(
            (json) => {
                let tags            = json.body;
                let tag             = tags[Math.floor(Math.random() * tags.length)];
                    tagName         = tag.tag_190;
                    metaDescription = tag.meta_description;
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
            .setMetaDescription(metaDescription)
            .save()
            .wait(1000);
    });

    it('meta description input should have aleatory value', () => {
        cy.reload();
        tag.toggleSection(1)
            .validateValue('[name="metaDescription"]', metaDescription)
            .wait(3000);
    });
});
