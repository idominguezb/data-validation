
import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Crear pagina con titulo largo", function () {
  
    it("Crear pagina y verificar el width de la lista de paginas", function () {
    
      login.go()
      cy.wait(2000)
     page.navigateToNewPage()
     page.setTitle(faker.random.alpha(200))
     page.setDescription(faker.lorem.lines(3))
      cy.wait(1000)
      page.savePage()
      
      cy.wait(2000)
        
      page.checkTitleWidth()
    });
  });

  
  