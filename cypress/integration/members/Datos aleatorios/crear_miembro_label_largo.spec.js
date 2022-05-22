import Login from "../../../page-objects/login";
import {Member} from "../../../page-objects/member";

const {faker}= require('@faker-js/faker');
const login= new Login()
const member=new Member()
describe("crear miembro nombre extenso", function () {

 
    it("Members", function () {
       
      login.go()
      member.navigateToNewMember()
      member.setMemberName(faker.name.findName())
      member.createLabel(faker.random.alpha(150 ))
      member.setEmailMember(faker.internet.email())
      member.setDescription(faker.lorem.lines(2))
      cy.wait(1000)
      member.saveMember()
      cy.wait(2000)
      member.checkLabelWidth()
   
        
    });
  });

