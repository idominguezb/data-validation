import Login from "../../../page-objects/login";
import {Member} from "../../../page-objects/member";

const membersDatos=require("./datos/datos_members.json")
const login= new Login()
const member=new Member()
describe("crear_miembro_nombre_corto", function () {
    it("crear_miembro_nombre_corto", function () {
    
     login.go()
      let index=getRandomInt(0,membersDatos.length)
      member.navigateToNewMember()
      member.setMemberName(membersDatos[index]["name"].substring(0,1))
      member.setEmailMember(membersDatos[index]["email"])
      member.setDescription(membersDatos[index]["description"])
      cy.wait(1000)
      member.saveMember()
      cy.wait(3000)
      member.checkMemberName(membersDatos[index]["name"].substring(0,1))
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }