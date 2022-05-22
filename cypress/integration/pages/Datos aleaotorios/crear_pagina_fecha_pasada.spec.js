


import {Login} from "../../../pages/login";
import {Page} from "../../../pages/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Programar pagina con fecha pasada", function () {
  
    it("Members", function () {
      cy.visit("http://localhost:2368/ghost/");
      login.login()
      
     page.navigateToNewPage()
     let titulo=faker.random.words(2)
     page.setTitle(titulo)
     page.setDescription(faker.lorem.lines(3))
     page.schedule(faker.date.past().toISOString().split("T")[0])
     page.checkErrorMessage()
     page.checkRetryMessage()
    });
     


  });

 
