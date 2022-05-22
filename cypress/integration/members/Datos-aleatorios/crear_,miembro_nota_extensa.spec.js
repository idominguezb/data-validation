import Login from "../../../page-objects/login";
import {Member} from "../../../page-objects/member";

const {faker}= require('@faker-js/faker');
const login= new Login()
const member=new Member()
describe("crear miembro con 30 tags", function () {

 
    it("Members", function () {
     login.go()
      member.navigateToNewMember()
      member.setMemberName(faker.name.findName())
      member.setEmailMember(faker.internet.email())
      member.setDescription(faker.lorem.sentences(15))
  
      cy.wait(1000)
      member.saveMember()
      cy.wait(2000)
      member.checkNoteMessageError()
      member.checkRetryMessge()
        
    });
  });

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }