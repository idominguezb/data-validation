
import {Login} from "../../../pages/login";
import {Page} from "../../../pages/page";

const pageDatos=require("./datos/page_datos.json")
const login= new Login()
const page=new Page()
describe("crear pagina con tag", function () {
    it("Members", function () {
       
      cy.visit("http://localhost:2368/ghost/");
      login.login()
      let index=getRandomInt(0,pageDatos.length)
     page.navigateToNewPage()
     page.setTitle(pageDatos[index]["title"])
    page.setDescription(pageDatos[index]["description"])
    page.createMetaData(pageDatos[index]["title"])
      cy.wait(2000)
      page.savePage()
      cy.wait(2000)
      page.checkTitle(pageDatos[index]["title"].toString())
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }