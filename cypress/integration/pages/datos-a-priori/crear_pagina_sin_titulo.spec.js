import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";

const pageDatos=require("./datos/page_datos.json")
const login= new Login()
const page=new Page()
describe("crear pagina sin titulo", function () {
    it("Crear pagian sin titulo", function () {
     
      login.go()
      cy.wait(2000)
      let index=getRandomInt(0,pageDatos.length)
     page.navigateToNewPage()
    
     page.setDescription(pageDatos[index]["description"])
      cy.wait(1000)
      page.savePage()
      cy.wait(2000)
     page.checkTitle("Untitled")
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }