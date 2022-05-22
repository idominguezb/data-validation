import Login from "../../../page-objects/login";
import {Member} from "../../../page-objects/member";

const {faker}= require('@faker-js/faker');
const login= new Login()
const member=new Member()
describe("crear miembro con 30 tags", function () {

 
    it("Members", function () {
    login.go()
      member.navigateToNewMember()
      let name=faker.name.findName()
      cy.wait(1000)
      member.setMemberName(name)
      member.setEmailMember(faker.internet.email())
      member.setDescription(faker.lorem.lines(2))
      for(let i=0;i<29;i++){
          let yo=faker.random.alpha(getRandomInt(1,9)).toString()
          member.createLabel(yo)
      }
      cy.wait(4000)
      member.saveMember()
      cy.wait(3000)
      member.checkMemberName(name)
        
    });
  });

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }