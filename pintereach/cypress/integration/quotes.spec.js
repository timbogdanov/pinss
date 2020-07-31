// writing tests here 
describe('Testing input and register button', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/register')
    })
    it('check if register button is disabled', () => {
        cy.get('.registerBtn').should('be.disabled')
    })
    it('can register as a new user', () => {
        cy.get('input.usernameInpt')
    })
})