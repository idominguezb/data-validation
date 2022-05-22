export class Member {
  navigateToNewMember() {
    cy.visit("http://localhost:2368/ghost/#/members");
    cy.wait(2000);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/div[2]/a/span"
    ).click();
  }

  setMemberName(name) {
    cy.xpath("//input[@id='member-name']").type(name, { force: true });
  }
  setEmailMember(email) {
    cy.xpath("//input[@id='member-email']").type(email, { force: true });
  }
  setDescription(desc) {
    cy.xpath('//*[@id="member-note"]').type(desc, { force: true });
  }
  saveMember() {
    cy.xpath("//span[normalize-space()='Save']").click();
  }
  checkEmailMessageError() {
    cy.xpath(
      "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/p"
    ).should("be.visible");
  }
  checkNoteMessageError(){
    cy.xpath("/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[3]/p[1]").should("be.visible")
  }
  checkRetryMessge() {
    cy.xpath(
      "/html/body/div[2]/div/main/section/div[1]/header/section/button/span"
    )
      .invoke("text")
      .then((text) => expect(text.includes("Retry")).equal(true));
  }
  checkMemberName(name) {
    cy.xpath("/html/body/div[2]/div/main/section/div[1]/header/h2/a").click();
    cy.wait(1000);
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]/div/div/h3"
    )
      .invoke("text")
      .then((text) => expect(text).equal(name.toString()));
  }
  checkMemberWithoutName() {
    cy.xpath("/html/body/div[2]/div/main/section/div[1]/header/h2/a").click();
    cy.wait(1000);
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]/div/div/h3"
    )
      .invoke("text")
      .then((text) => expect(text).not.equal(name));
  }

  createLabel(label) {
    cy.xpath(
      "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[2]/div/div[1]/ul/input"
    ).type(label,{force:true});
   
    cy.xpath(
      "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[2]/div/div[2]/div/ul/li[1]"
    ).click();
  }
  checkEmailExistMessage() {
    cy.xpath("/html/body/div[2]/aside/article/div").should("be.visible");
  }

  checkLabelWidth(){
      cy.xpath("/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[2]/div/div[1]").invoke("width").then((width_lebel)=>{
         
          cy.xpath(
            "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]"
          )
            .invoke("width")
            .then((width) => expect(width_lebel>width).equal(true));
        })
  }
  checktitleWidth() {
    cy.xpath(
      "/html/body/div[2]/div/main/section/div[2]/form/div/section/section"
    )
      .invoke("width")
      .then((width_tittle) => {
        cy.xpath(
          "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]"
        )
          .invoke("width")
          .then((width) => expect(width_tittle>width).equal(true));
      });

    cy.wait(1000);
  }
}
