
import {Login} from "../../../pages/login";
import {Page} from "../../../pages/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Crear pagina con titulo 256 caracteres", function () {
  
    it("Members", function () {
      cy.visit("http://localhost:2368/ghost/");
      login.login()
     page.navigateToNewPage()
     page.setDescription(faker.lorem.lines(2))
     page.setTitle(faker.random.alpha(256))
 
      cy.wait(1000)
      page.savePage()
      cy.wait(1000)
      page.checkErrorMessageLength()
          });
  });

  
  