Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    fistName: 'João',
    lastName: 'Ambrose',
    email: 'john@ambrose.io',
    text: 'Testando minúsculo e MAIÚSCULO, assim como assentuação.'
}) => {
    cy.get('#firstName').type(data.fistName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)    
    cy.contains('Enviar').click()
})