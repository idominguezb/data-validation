



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
          cy.xpath("/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/div[1]/div/input").clear()
          cy.xpath("/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/div[1]/div/input").type(date)
          cy.xpath("/html/body/div[1]/div/footer/button[2]/span").click()
        }
      }
      createExcerpt(label){
        this.openSettings()
        cy.wait(1000)
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[5]/textarea").type(label)
      
      }
      createTag(label){
        this.openSettings()
        cy.wait(1000)
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[3]/div/div[1]/ul/input").type(label)
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[3]/div/div[2]/div/ul/li[1]").click()
      }
      setUrl(url,char=false){
        this.openSettings()
        cy.wait(1000)
        let ulrInput=cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[1]/div/input");
        ulrInput.clear()
        cy.wait(1000)
      
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[1]/div/input").type(url)
        
        }
      

        createInjection(r,g,b){
          
          let injection= `<style>.article-title {
            color:rgb(${r},${g},${b}) ;
        }</style>` 
          this.openSettings()
          cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/ul/li[4]/button").click({force:true})
          cy.xpath("/html/body/div[2]/div/main/div/div/div/div[2]/div/div[2]/form/div[1]/div/div/div[6]").type(injection)
          cy.xpath("/html/body/div[2]/div/main/div/div/div/div[2]/div/div[1]/button/span").click({force:true})
        }
      
      openSettings(){
        cy.xpath("/html/body/div[2]/div/main/button").click()
      }
      checkErrorMessageLength(){
        cy.xpath("/html/body/div[2]/aside/article").should("be.visible")
      }
      savePage(){
          cy.xpath("/html/body/div[2]/div/main/div/section/header/section/div[2]/div[1]/span").click()
          cy.wait(1000)
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
      checkTitleWidth(){
        cy.visit("http://localhost:2368/ghost/#/pages");
        cy.wait(2000)
        cy.xpath("/html[1]/body[1]")
        .invoke("width")
        .then((width) => {
          cy.xpath(
            "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]"
          )
            .invoke("width")
            .then((widthTitle) => {
             expect(width*0.7<widthTitle).equal(true)
            });
        });
      }
      checkTitle(title,type="3"){
        cy.visit("http://localhost:2368/ghost/#/pages");
        cy.wait(2000)
        cy.xpath("/html/body/div[2]/div/main/section/div/header/section/div/div[1]/div[1]/span").click()
        cy.wait(1000)
        cy.xpath("/html/body/div[1]/div/ul/li["+type+"]").click()
        cy.wait(1000)
          cy.xpath("/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/h3") .invoke("text")
          .then((text) => expect(text.includes(title)).equal(true));
      }
      checkUrl(url,same=false,title=""){
        if(same){
          cy.visit("http://localhost:2368/"+url)
        
            cy.xpath("/html/body/div[1]/div/main/article/section/h1").invoke("text").then((text) => expect(text.includes(title)).equal(false));
            
          
        }else{
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[1]/p").invoke("text").then((text) => {

           cy.visit(text,{failOnStatusCode:false})
           cy.xpath("/html/body/div[1]/div/section/div/section/h1").invoke("text").then((text)=>expect(text.includes("404")).equal(true))
        });}
      }
      checkUrlLength(url){
        cy.xpath("/html/body/div[2]/div/main/div/section/header/section/div/div[1]/span").click();
        cy.wait(1000)
        cy.xpath("/html/body/div[1]/div/footer/button[2]/span").click()
        cy.wait(1000)
        
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[1]/a").invoke('attr', 'href').then((text) => {
          expect(text.length<url.length).equal(true)
          
        });
      }
      checkPage(title,color=""){
      
        cy.xpath("/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[1]/p").invoke("text").then((text) => {

          cy.visit(text)
          cy.wait(1000)
          cy.xpath("/html/body/div[1]/div/main/article/section/h1").invoke("text").then((text) => expect(text.includes(title)).equal(true));
          
        });
        
        if(color!=""){
          cy.xpath("/html/body/div[1]/div/main/article/section/h1").should('have.css', 'color', color)
        }
      }
}