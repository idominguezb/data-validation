import Login from "../../../page-objects/login";
import {Member} from "../../../page-objects/member";

const {faker}= require('@faker-js/faker');
const login= new Login()
const member=new Member()
describe("crear miembro email extenso", function () {

 
    it("Members", function () {
      login.go()
      member.navigateToNewMember()
      member.setMemberName(faker.name.findName())
      member.setEmailMember(faker.random.alpha(150)+"@"+"email.com")
      member.setDescription(faker.lorem.lines(2))
      cy.wait(1000)
      member.saveMember()
      cy.wait(2000)
      member.checkRetryMessge(  )
      member.checktitleWidth()
        
    });
  });

