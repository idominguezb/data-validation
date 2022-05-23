


import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Crear pagina con link que contiene caracteres no alfanumericos", function () {
  
    it("Crear pagian y verificar que no tiene caracteres alfanumericos el link", function () {
      login.go()
      cy.wait(2000)
     page.navigateToNewPage()
     let titulo=faker.random.words(2)
     page.setTitle(titulo)
     page.setDescription(faker.lorem.lines(3))
     page.savePage()
     cy.wait(1000)
   
     page.setUrl(titulo.replace(/\s/g, "_").toLowerCase()+"?#*%",true)
    cy.wait(1000)
    page.checkUrl(titulo.replace(/\s/g, "_").toLowerCase()+"?#*%")
    });
     


  });

 
