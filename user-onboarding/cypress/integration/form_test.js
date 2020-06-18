
describe('Form Behaviour' , ()=>{
    it('form loads', () =>{
        cy.visit('http://localhost:3000')

        cy.contains('Enter your Name')
        cy.contains('Registered Users')
    })
    it('Check if button is disabled', ()=>{
        cy.get('button')
            .should('is.disabled')
    })

    it('Check name input', () =>{
        cy.get('input[name= name]')
            .type('Wade Watts')
            .should('have.value', 'Wade Watts')
    })

    it('Check if button is disabled', ()=>{
        cy.get('button')
            .should('is.disabled')
    })

    it('Check email input', () =>{
        cy.get('input[name= email]')
            .type('wadewatts@email.com')
            .should('have.value', 'wadewatts@email.com')
    })

    it('Check if button is disabled', ()=>{
        cy.get('button')
            .should('is.disabled')
    })

    it('Check password input', () =>{
        cy.get('input[name=password]')
            .type('test123')
            .should('have.value', 'test123')
    })

    it('Check if button is disabled', ()=>{
        cy.get('button')
            .should('is.disabled')
    })

    it('Check terms of service checkbox', ()=>{
        cy.get('input[type=checkbox]')
            .click()
            .should('is.checked')
    })

    it('Check if button is enabled', ()=>{
        cy.get('button')
            .should('is.enabled')
    })

    it('Submit Form', ()=>{
        cy.get('button')
            .click()
        cy.contains('name: Wade Watts')    
    })

})


describe('Error Messages' ,()=>{
    it('Check name error message', () =>{
        cy.get('input[name= name]').type('Wad')
        cy.contains('Name must be at least 5 characters long')
        cy.get('button').should('is.disabled')
        
    })

    it('Check email error message', () =>{
        cy.get('input[name= email]')
            .type('Wad')
        cy.contains('Must be a valid email address')
        cy.get('button').should('is.disabled')
    })

    it('Check password error message', () =>{
        cy.get('input[name= password]')
            .type('Wad')
        cy.contains('Passwords must be at least 6 characters long')
        cy.get('button').should('is.disabled')
    })
})
