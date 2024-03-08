describe('Login tests', () => {

    context('Front-end login tests', () => {
        
        beforeEach(() => {
            // we will create a new alias before each test
            cy.visit('en/signin')
            cy.waitPageToLoad()
        })

        it('Successfull login', () => {
            cy.login(Cypress.env('login_email'), Cypress.env('login_password'))
            cy.waitPageToLoad()

        })


    })
})