const {faker}= require('@faker-js/faker');

describe('Posts flow', function () {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 800)
    })
    it('Validation facebook description extends', function () {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
        scenario_title('/scenario_createPost');
    });
});

function login(directoryScreenshot) {
    let elementUsername = cy.get('#ember7');
    elementUsername.type('prueba@example.com', {force: true});

    let elementcyPass = cy.get('#ember9');
    elementcyPass.type('prueba@example.com123456789', {force: true});

    cy.screenshot(directoryScreenshot + '/step1')
    cy.wait(2000);

    let elementLogin = cy.get('#ember11');
    elementLogin.click({force: true});

    cy.wait(5000);
    cy.screenshot(directoryScreenshot + '/step2')
    cy.wait(1000);

}

function post(directory) {
    let elementPost = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[1]'
    );
    elementPost.click({force: true});
    cy.wait(1000);
    cy.screenshot(directory + '/step3')

    let buttonElement = cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[2]/span[1]/*[name()='svg'][1]"
    );
    buttonElement.click({force: true});

    cy.wait(1000);
    cy.screenshot(directory + '/step4')
}

function writerPost(directory, title, parraf) {
    let elementTitle = cy.xpath(
        "//textarea[@placeholder='Post title'][@class='gh-editor-title ember-text-area gh-input ember-view']"
    );
    elementTitle.type(title, {force: true});

    cy.wait(1000);

    let elementParraf = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]'
    );
    elementParraf.click({force: true});
    elementParraf.type(
        parraf,
        {force: true}
    );

    cy.wait(2000);
    cy.screenshot(directory + '/step5')
}

// Creación de un post
function scenario_title(directory) {
    login(directory)

    post(directory)

    writerPost(directory, faker.random.words(2), faker.lorem.lines(3));

    cy.xpath('/html[1]/body[1]/div[2]/div[1]/main[1]/button[1]/span[1]/*[name()=\'svg\'][1]').click({force:true});
    cy.xpath('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/ul[1]/li[3]/button[1]/b[1]').click({force:true});
    cy.wait(1000);
    cy.xpath('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/input[1]').type(faker.random.words(3), {force:true})
    cy.wait(1000);
    cy.xpath('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[2]/textarea[1]').type(faker.random.words(80), {force:true})

    let elementMenu = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/div[2]/div[1]/span[1]'
    );
    elementMenu.click({force: true});

    cy.wait(2000);
    cy.screenshot(directory + '/step6')

    let elementButtonPublish = cy.xpath(
        '/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]'
    );
    elementButtonPublish.click({force: true});

    cy.wait(2000);
    cy.screenshot(directory + '/step7')

    let elementButtonConfirm = cy.xpath(
        "//button[@class='gh-btn gh-btn-black gh-btn-icon ember-view']"
    );
    elementButtonConfirm.click({force: true});

    cy.wait(2000);
    cy.screenshot(directory + '/step8')

    let elementBackPost = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/div[1]/div[1]/a[1]/span[1]'
    );
    elementBackPost.click({force: true});

    cy.wait(2000);

    cy.xpath("//button[@class='gh-btn gh-btn-red']").click({force: true});

    cy.wait(2000);

    exit();
}

function titleRandom(len) {
    let title = '';
    for (let i = 0; i < len; i++) {
        title += 'a';
    }
    return title;
}

function exit() {
    cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/*[name()='svg'][1]/*[name()='path'][1]"
    ).click({force: true});
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[9]/a[1]').click({
        force: true,
    });
}