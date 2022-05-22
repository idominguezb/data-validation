
import {Login} from "../../../pages/login";
import {Page} from "../../../pages/page";

const login= new Login()
const page=new Page()
describe("Crear pagina programada con letras", function () {
    let  pageDatos=[]
    before(function(){
        cy.request("https://api.mockaroo.com/api/e2e6c590?count=1000&key=0190dc40").then((response)=>pageDatos=response.body)
    })
    it("Members", function () {
      cy.visit("http://localhost:2368/ghost/");
      login.login()
      let index=getRandomInt(0,pageDatos.length)
     page.navigateToNewPage()
     page.setTitle(pageDatos[index]["title"])
     page.setDescription(pageDatos[index]["description"])
     cy.wait(1000)
     page.schedule((pageDatos[index]["title"]))
      page.checkRetryMessage()
      page.checkRetryMessage()
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }