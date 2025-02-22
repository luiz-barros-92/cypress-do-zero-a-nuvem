describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {    
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Ambrose')
    cy.get('#email').type('john@ambrose.io')
    cy.get('#open-text-area').type('Testando minúsculo e MAIÚSCULO, assim como assentuação.')    
    cy.get('.button').click()
    cy.get('.success').should('be.visible')
  })
})