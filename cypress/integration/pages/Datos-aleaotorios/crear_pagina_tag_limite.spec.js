
import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Crear pagina con tag mas de 190 caracteres", function () {
  
    it("Crear pagina y verificar que sale el mensaje de error", function () {
    login.go()
    cy.wait(2000)
     page.navigateToNewPage()
     let title=faker.word.noun()
     page.setTitle(title)
    
     page.setDescription(faker.lorem.lines(3))
    page.createTag(faker.random.alphaNumeric(191))
     cy.wait(1000)
      page.savePage()
      
      cy.wait(2000)
        
      page.checkErrorMessage( )
    });
  });

  
  