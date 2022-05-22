import Login from "../../../page-objects/login";
import {Member} from "../../../page-objects/member";

const login= new Login()
const member=new Member()
describe("crear miembro nombre con caracteres especial", function () {
    let membersDatos=new Array;

    before(  function(){ 
       cy.request('https://api.mockaroo.com/api/355de0d0?count=1000&key=0190dc40').then((json)=>membersDatos=json.body)
    })
 
    it("Members", function () {
      
      login.go()
      console.log(membersDatos)
      let index=getRandomInt(0,membersDatos.length)
      member.navigateToNewMember()
      member.setMemberName(membersDatos[index]["caracteres"])
      member.setEmailMember(membersDatos[index]["email"])
      member.setDescription(membersDatos[index]["description"])
      cy.wait(1000)
      member.saveMember()
      cy.wait(2000)
      member.checkMemberName(membersDatos[index]["caracteres"])
        
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }