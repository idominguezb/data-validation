


import {Login} from "../../../pages/login";
import {Page} from "../../../pages/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Crear pagina con titulo largo", function () {
  
    it("Members", function () {
      cy.visit("http://localhost:2368/ghost/");
      login.login()
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

 
