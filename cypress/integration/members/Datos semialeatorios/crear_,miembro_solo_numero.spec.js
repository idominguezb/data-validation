import {Login} from "../../../pages/login";
import {Member} from "../../../pages/member";

const login= new Login()
const member=new Member()
describe("crear miembro solo con numberss", function () {
    let membersDatos=new Array;

    before(  function(){ 
       cy.request('https://api.mockaroo.com/api/355de0d0?count=1000&key=0190dc40').then((json)=>membersDatos=json.body)
    })
 
    it("Members", function () {
      cy.visit("http://localhost:2368/ghost/");
      login.login()
      console.log(membersDatos)
      let index=getRandomInt(0,membersDatos.length)
      member.navigateToNewMember()
      member.setMemberName(membersDatos[index]["numbers"])
      member.setEmailMember(membersDatos[index]["numbers"]+"@"+membersDatos[index]["numbers"]+".com")
      member.setDescription(membersDatos[index]["numbers"])
      cy.wait(1000)
      member.saveMember()
      cy.wait(2000)
      member.checkMemberName(membersDatos[index]["numbers"])
        
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }