


import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Programar pagina con fecha pasada", function () {
  
    it("Programar pagina con fecha pasada", function () {
    login.go()
    cy.wait(2000)
     page.navigateToNewPage()
     let titulo=faker.random.words(2)
     page.setTitle(titulo)
     page.setDescription(faker.lorem.lines(3))
     page.schedule(faker.date.past().toISOString().split("T")[0])
     page.checkErrorMessage()
     page.checkRetryMessage()
    });
     


  });

 
