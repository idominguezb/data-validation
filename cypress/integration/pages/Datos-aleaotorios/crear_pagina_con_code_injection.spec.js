
import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Crear pagina con code injection", function () {
  
    it("Crear una pagina con code injection", function () {
   login.go()
   cy.wait(2000)
     page.navigateToNewPage()
     let title=faker.random.word()
     let color=faker.internet.color() 
     page.setTitle(title)
     page.setDescription(faker.lorem.lines(3))
     let r=getRandomInt(0,255)
     let g=getRandomInt(0,255)
     let b=getRandomInt(0,255)
     page.createInjection(r,g,b ) 
     cy.wait(1000)
      page.savePage()
      
      cy.wait(2000)
      
      page.checkPage(title,`rgb(${r}, ${g}, ${b})` )
    });
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  });

  
  