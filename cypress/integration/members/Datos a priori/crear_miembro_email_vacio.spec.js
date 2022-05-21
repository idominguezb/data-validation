import {Login} from "../../../pages/login";
import {Member} from "../../../pages/member";

const membersDatos=require("./datos/datos_members.json")
const login= new Login()
const member=new Member()
describe("crear_miembro_email_vacio", function () {
    it("Members", function () {
        cy.visit("http://localhost:2368/ghost/");
      login.login()
      let index=getRandomInt(0,membersDatos.length)
      member.navigateToNewMember()
      member.setMemberName(membersDatos[index]["name"])
   
      member.setDescription(membersDatos[index]["description"])
      cy.wait(1000)
      member.saveMember()
      member.checkRetryMessge()
      member.checkEmailMessageError()

    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }