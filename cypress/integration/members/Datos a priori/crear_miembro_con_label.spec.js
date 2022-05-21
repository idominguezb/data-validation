import {Login} from "../../../pages/login";
import {Member} from "../../../pages/member";

const membersDatos=require("./datos/datos_members.json")
const login= new Login()
const member=new Member()
describe("crear miembro con label", function () {
    it("Members", function () {
      cy.visit("http://localhost:2368/ghost/");
      login.login()
      let index=getRandomInt(0,membersDatos.length)
      member.navigateToNewMember()
      member.setMemberName(membersDatos[index]["name"])
      member.setEmailMember(membersDatos[index]["email"])
      member.createLabel(membersDatos[index]["label"])
      member.setDescription(membersDatos[index]["description"])
      cy.wait(1000)
      member.saveMember()
      cy.wait(2000)
      member.checkMemberName(membersDatos[index]["name"])
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }