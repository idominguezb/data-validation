

import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Programar pagina con fecha pasada", function () {
  
    it("Members", function () {
     login.go()
     cy.wait(2000)
     page.navigateToNewPage()
     let titulo=faker.random.words(2)
     page.setTitle(titulo)
     page.setDescription(faker.lorem.lines(3))
     for(let i=0;i<30;i++){
        page.createTag(faker.random.alphaNumeric(getRandomInt(1,9   )))
        page.openSettings()
     }
   
     cy.wait(2000)

     page.savePage()
     
     cy.wait(2000)
       
     page.checkTitle(titulo)
    });
     
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

  });

 
