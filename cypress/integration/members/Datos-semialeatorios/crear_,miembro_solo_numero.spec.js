import Login from "../../../page-objects/login";
import {Member} from "../../../page-objects/member";

const login= new Login()
const member=new Member()
describe("crear miembro solo con numberss", function () {
    let membersDatos=new Array;

    before(  function(){ 
       cy.request('https://api.mockaroo.com/api/c65ca9e0?count=1000&key=98c9b430').then((json)=>membersDatos=json.body)
    })
 
    it("Members", function () {
      login.go()
      let index=getRandomInt(0,membersDatos.length)
      member.navigateToNewMember()
      member.setMemberName(membersDatos[index]["numbers"])
      member.setEmailMember(membersDatos[index]["numbers"]+"@"+membersDatos[index]["numbers"]+".com")
      member.setDescription(membersDatos[index]["numbers"])
      cy.wait(1000)
      member.saveMember()
      cy.wait(3000)
      member.checkMemberName(membersDatos[index]["numbers"])
        
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }