import {Login} from "../../../pages/login";
import {Page} from "../../../pages/page";

const pageDatos=require("./datos/page_datos.json")
const login= new Login()
const page=new Page()
describe("crear pagina sin titulo", function () {
    it("Members", function () {
      cy.visit("http://localhost:2368/ghost/");
      login.login()
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