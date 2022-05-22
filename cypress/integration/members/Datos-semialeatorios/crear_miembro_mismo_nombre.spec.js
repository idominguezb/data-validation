import Login from "../../../page-objects/login";
import {Member} from "../../../page-objects/member";

const login= new Login()
const member=new Member()
describe("crear miembro nombre con mimso nombre", function () {
    let membersDatos=new Array;

    before(  function(){ 
       cy.request('https://api.mockaroo.com/api/355de0d0?count=1000&key=0190dc40').then((json)=>membersDatos=json.body)
    })
 
    it("Members", function () {
        login.go()
 
    let index=getRandomInt(0,membersDatos.length)
     let index2=getRandomInt(0,membersDatos.length)
      member.navigateToNewMember()
      cy.wait(1000)
      member.setMemberName(membersDatos[index]["name"])
      member.setEmailMember(membersDatos[index]["email"])
      member.setDescription(membersDatos[index]["description"])
      cy.wait(1000)
      member.saveMember()
      cy.wait(4000)
      member.navigateToNewMember()
      member.setMemberName(membersDatos[index]["name"])
      member.setEmailMember(membersDatos[index2]["email"])
      member.setDescription(membersDatos[index2]["description"])
      cy.wait(1000)
      member.saveMember()
      cy.wait(4000)
      member.checkMemberName(membersDatos[index]["name"])
        
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }