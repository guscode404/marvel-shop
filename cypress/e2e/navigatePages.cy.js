describe('navigation pages', () => {
  it('should be navigate pages correctly', () => {
    cy.visit('/')
    cy.get('section > span').should('contain.text', '1 de');

    cy.get('section div button')
      .eq(1)
      .click();
    
    cy.get('section > span').should('contain.text', '2 de');

    cy.get('section div button')
      .eq(0)
      .click();

    cy.get('section > span').should('contain.text', '1 de');

    let title;
    cy.get('li h2').should(($h2) => {
      title = $h2.get(0).innerText;
    })

    cy.get('section div button')
      .eq(1)
      .click();

    cy.get('li h2').should(($h2) => {
      expect($h2.get(0).innerText).to.not.eq(title);
    })
    for(let i = 0; i < 19; i++) {
      cy.get('section div button')
        .eq(1)
        .click()
    }

    cy.on('window:alert', (str) => {
      expect(str).to.equal("Página indisponível!")
    })
  })
})