import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";

const login= new Login()
const page=new Page()
describe("Crear pagina con link iguales", function () {
    let  pageDatos=[]
    before(function(){
        cy.request("https://api.mockaroo.com/api/c98be0f0?count=1000&key=a8a44f40").then((response)=>pageDatos=response.body)
    })
    it("Members", function () {
      
      login.go()
      cy.wait(2000)
      let index=getRandomInt(0,pageDatos.length)
      let index2=getRandomInt(0,pageDatos.length)
     page.navigateToNewPage()
     page.setTitle(pageDatos[index]["title"])
    page.setDescription(pageDatos[index]["description"])
    page.setUrl("link_"+pageDatos[index]["title"].replace(/\s/g, "_"))
      cy.wait(2000)
      page.savePage()
      
      page.navigateToNewPage()
      page.setTitle(pageDatos[index2]["title"])
    page.setDescription(pageDatos[index2]["description"])

    page.setUrl("link_"+pageDatos[index]["title"].replace(/\s/g, "_"))
    cy.wait(2000)
    page.savePage()
   
    page.checkUrl("link_"+pageDatos[index]["title"].replace(/\s/g, "_"),true,pageDatos[index2]["title"])
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }