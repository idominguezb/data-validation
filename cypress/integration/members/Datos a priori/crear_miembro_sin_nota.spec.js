import Login from "../../../page-objects/login";
import {Member} from "../../../page-objects/member";

const membersDatos=require("./datos/datos_members.json")
const login= new Login()
const member=new Member()
describe("crear miembro sin nota", function () {
    it("crear miembro sin nota", function () {
 
      login.go()
      let index=getRandomInt(0,membersDatos.length)
      member.navigateToNewMember()
      member.setMemberName(membersDatos[index]["name"])
      member.setEmailMember(membersDatos[index]["email"])

      cy.wait(1000)
      member.saveMember()
      cy.wait(3000)
      member.checkMemberName(membersDatos[index]["name"])
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }