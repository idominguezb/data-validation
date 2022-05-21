export class Login{

    login(){
        cy.get("#ember7").type("prueba@example.com", { force: true });
        cy.get("#ember9").type("prueba@example.com123456789", { force: true });
        cy.wait(1000);
        cy.get("#ember11").click({ force: true });
        cy.wait(3000);
    }
}