describe("Test de pruebas", () => {


    beforeEach(() => {
        //Comentario
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    })

    it("ValidateLogo", () => {
        cy.get('.orangehrm-login-branding > img').should("be.visible")
    })

    it("ValidateInputUsername", () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible")
    })

    it("ValidateTxtVersion", () => {
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should("be.visible")
    })

    it("ValidateButtonLogin", () => {
        cy.get('.oxd-button').should("be.visible")
    })



    //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")



})