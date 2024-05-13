describe('view details', () => {
  it('should be able to view details correctly', () => {
    cy.visit('/');

    let title;
    cy.get('li h2').should(($h2) => {
      title = $h2.get(0).innerText;
    })

    cy.get('li button')
      .eq(0)
      .click();

    cy.url().should('include', '/view/');

    cy.get('h1').should(($h1) => {
      expect($h1.get(0).innerText).to.eq(title);
    })

    cy.get('header img').click();

    cy.url().should('not.include', '/view');

    cy.get('li button')
      .eq(0)
      .click();

    cy.url().should('include', '/view/');
    
    cy.get('nav button')
      .eq(1)
      .click();
    
    cy.url().should('not.include', '/view');
  })
})