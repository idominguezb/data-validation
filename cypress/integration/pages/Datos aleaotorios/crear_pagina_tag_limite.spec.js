
import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Crear pagina con titulo largo", function () {
  
    it("Members", function () {
      login.go()
      cy.wait(2000)
     page.navigateToNewPage()
     let title=faker.word.noun()
     page.setTitle(title)
    
     page.setDescription(faker.lorem.lines(3))
    page.createTag(faker.random.alphaNumeric(192))
     cy.wait(1000)
      page.savePage()
      
      cy.wait(2000)
        
      page.checkErrorMessage()
    });
  });

  
  