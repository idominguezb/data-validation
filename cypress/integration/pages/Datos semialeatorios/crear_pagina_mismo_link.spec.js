
import {Login} from "../../../pages/login";
import {Page} from "../../../pages/page";

const login= new Login()
const page=new Page()
describe("Crear pagina con link iguales", function () {
    let  pageDatos=[]
    before(function(){
        cy.request("https://api.mockaroo.com/api/e2e6c590?count=1000&key=0190dc40").then((response)=>pageDatos=response.body)
    })
    it("Members", function () {
      cy.visit("http://localhost:2368/ghost/");
      login.login()
      let index=getRandomInt(0,pageDatos.length)
      let index2=getRandomInt(0,pageDatos.length)
     page.navigateToNewPage()
     page.setTitle(pageDatos[index]["title"])
    page.setDescription(pageDatos[index]["description"])
    page.setUrl("link_"+pageDatos[index]["title"].replace(/\s/g, "_"))
      cy.wait(2000)
      page.savePage()
      page.setTitle(pageDatos[index2]["title"])
    page.setDescription(pageDatos[index2]["description"])
    page.setUrl("link_"+pageDatos[index]["title"].replace(/\s/g, "_"))
    page.checkUrl("link_"+pageDatos[index]["title"].replace(/\s/g, "_"))
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }