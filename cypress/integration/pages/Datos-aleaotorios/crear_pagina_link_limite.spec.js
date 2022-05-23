
import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Crear pagina con link de mas de 300 caracteres ", function () {
  
    it("Crear pagina y verificar que el link no tiene mas de 300 caracteres", function () {
     login.go()
     cy.wait(2000)
     page.navigateToNewPage()
     page.setTitle(faker.random.words(2))
     page.setDescription(faker.lorem.lines(3))
    
      cy.wait(1000)
      page.savePage()
      cy.wait(2000)
      let url=faker.random.alphaNumeric(300)
      page.setUrl(url)
    
      cy.wait(2000)
      page.checkUrlLength(url)
      
    
    });
  });

  
  