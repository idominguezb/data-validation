

export class Page{

    navigateToNewPage() {
        cy.visit("http://localhost:2368/ghost/#/pages");
        cy.wait(2000);
        cy.xpath(
          "/html/body/div[2]/div/main/section/div/header/section/a/span"
        ).click();
      }

      setTitle(title){
          cy.xpath(
            "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/textarea[1]"
          ).type(title)
      }

      setDescription(desc){
          cy.xpath(
            "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]"
          ).type(desc)
      }
      schedule(date=""){
        cy.xpath("/html/body/div[2]/div/main/div/section/header/section/div[2]/div[1]/span").click()
        cy.xpath("/html/body/div[1]/div/div/section/div/div[2]/div[1]").click()
        if(date===""){
          cy.xpath("/html/body/div[1]/div/footer/button[2]/span").click()
        }else{
          cy.xpath("/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/div[1]/div/input").type(date)
          cy.xpath("/html/body/div[1]/div/footer/button[2]/span").click()
        }
      }
      createTag(label){
        this.openSettings()
        cy.wait(1000)
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[3]/div/div[1]/ul/input").type(label)
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[3]/div/div[2]/div/ul/li[1]").click()
      }
      setUrl(url){
        this.openSettings()
        cy.wait(1000)
        let ulrInput=cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[1]/div/input");
        ulrInput.clear()
        cy.wait(1000)
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[1]/div/input").type(url)
        this.openSettings()
      }

      createMetaData(title){
        this.openSettings()
        cy.wait(1000)
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/ul/li[1]/button").click()
        cy.wait(500)
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div[2]/div/div[2]/form/div[1]/input").type(title)
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div[2]/div/div[2]/form/div[2]/textarea").type(title)
      
        
      }
      openSettings(){
        cy.xpath("/html/body/div[2]/div/main/button").click()
      }
      savePage(){
          cy.xpath("/html/body/div[2]/div/main/div/section/header/section/div[2]/div[1]/span").click()
          cy.xpath("/html/body/div[1]/div/footer/button[2]/span").click()
      }

      checkRetryMessage(){
        cy.xpath(
          "/html/body/div[1]/div/footer/button[2]"
        )
          .invoke("text")
          .then((text) => expect(text.includes("Retry")).equal(true));
      }
      checkErrorMessage(){
        cy.xpath("/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[3]").should("be.visible")
      }

      checkTitle(title){
        cy.visit("http://localhost:2368/ghost/#/pages");
        cy.wait(2000)
        cy.xpath("/html/body/div[2]/div/main/section/div/header/section/div/div[1]/div[1]/span").click()
        cy.wait(1000)
        cy.xpath("/html/body/div[1]/div/ul/li[3]").click()
        cy.wait(1000)
          cy.xpath("/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/h3") .invoke("text")
          .then((text) => expect(text.includes(title)).equal(true));
      }
      checkUrl(url){
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[1]/p").invoke("text").then((text) => {

           expect(text).not.equal(url)
        });
      }
      checkPage(title){
        this.openSettings()
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[1]/p").invoke("text").then((text) => {

          cy.visit(text)
          cy.wait(1000)
          cy.xpath("/html/body/div[1]/div/main/article/section/h1").invoke("text").then((text) => expect(text.includes(title)).equal(true));
        });
      
      }
}