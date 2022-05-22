
import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";

const login= new Login()
const page=new Page()
describe("Crear pagina titutlo con caracteres", function () {
    let  pageDatos=[]
    before(function(){
        cy.request("https://api.mockaroo.com/api/e2e6c590?count=1000&key=0190dc40").then((response)=>pageDatos=response.body)
    })
    it("Members", function () {
     login.go()
     cy.wait(2000)
      let index=getRandomInt(0,pageDatos.length)
     page.navigateToNewPage()
     page.setTitle(pageDatos[index]["caracteres"])
     page.setDescription(pageDatos[index]["description"])
      cy.wait(1000)
      page.savePage()
      cy.wait(2000)
     page.checkTitle(pageDatos[index]["caracteres"].toString())
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }