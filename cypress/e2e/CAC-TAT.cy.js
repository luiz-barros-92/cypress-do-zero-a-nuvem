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
    cy.get('#open-text-area').type('Testando minúsculo e MAIÚSCULO, assim como assentuação.', {delay: 0})    
    cy.get('.button').click()
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Ambrose')
    cy.get('#email').type('john@ambrose,io')
    cy.get('#open-text-area').type('Testando minúsculo e MAIÚSCULO, assim como assentuação.', {delay: 0})    
    cy.get('.button').click()

    cy.get('.error').should('be.visible')
  })

  it('teste de valor nao-numerico digitado e permanecendo vazio', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Ambrose')
    cy.get('#email').type('john@ambrose,io')
    cy.get('#open-text-area').type('Testando minúsculo e MAIÚSCULO, assim como assentuação.', {delay: 0})    
    cy.get('#phone').type('abc').should('have.value', '')
    cy.get('.button').click()
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Ambrose')
    cy.get('#email').type('john@ambrose,io')
    cy.get('#open-text-area').type('Testando minúsculo e MAIÚSCULO, assim como assentuação.', {delay: 0})
    cy.get('#phone-checkbox').click()
    cy.get('.button').click()

    cy.get('.error').should('be.visible')
  })
})