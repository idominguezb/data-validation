import {Login} from "../../../pages/login";
import {Member} from "../../../pages/member";

const {faker}= require('@faker-js/faker');
const login= new Login()
const member=new Member()
describe("crear miembro con 30 tags", function () {

 
    it("Members", function () {
      cy.visit("http://localhost:2368/ghost/");
      
      cy.viewport(1920,1080)  
      login.login()
      member.navigateToNewMember()
      member.setMemberName(faker.name.findName())
      member.setEmailMember(faker.internet.email())
      member.setDescription(faker.lorem.lines(2))
      for(let i=0;i<29;i++){
          let yo=faker.random.alpha(getRandomInt(1,9)).toString()
          member.createLabel(yo)
      }
      cy.wait(1000)
      member.saveMember()
      cy.wait(2000)
      member.checkMemberName()
        
    });
  });

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }