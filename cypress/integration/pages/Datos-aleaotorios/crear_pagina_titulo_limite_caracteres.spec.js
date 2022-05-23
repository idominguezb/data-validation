
import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Crear pagina con titulo 256 caracteres", function () {
  
    it("Crear pagina y verificar que sale el mensaje de error", function () {
    
      login.go()
      cy.wait(2000)
     page.navigateToNewPage()
     page.setDescription(faker.lorem.lines(2))
     page.setTitle(faker.random.alpha(256))
 
      cy.wait(1000)
      page.savePage()
      cy.wait(1000)
      page.checkErrorMessageLength()
          });
  });

  
  