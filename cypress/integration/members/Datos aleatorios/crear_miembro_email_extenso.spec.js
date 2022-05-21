import {Login} from "../../../pages/login";
import {Member} from "../../../pages/member";

const {faker}= require('@faker-js/faker');
const login= new Login()
const member=new Member()
describe("crear miembro email extenso", function () {

 
    it("Members", function () {
      cy.visit("http://localhost:2368/ghost/");
      
      cy.viewport(1920,1080)  
      login.login()
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

