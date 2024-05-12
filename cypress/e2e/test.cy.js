describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get("li button").should("contain.text", "Detalhes")
  })
})