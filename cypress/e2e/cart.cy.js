describe('view details', () => {
  it('should be able to use the cart correctly', () => {
    cy.visit('/');
    
    const cartButton = cy.get('nav button').eq(0);

    cartButton.click();

    cy.get('.modal-content p').should('contain.text', 'Your cart is empty!');
    
    cy.get('.top-menu button').click();

    const titleList = [];

    for(let i = 0; i < 4; i++) {
      const button = cy.get('li button').eq(i);
      button.click();

      cy.get('h1').should(($h1) => {
        titleList.push($h1.get(0).innerText);
      })

      cy.get('section button').click();

      cy.get('nav button')
        .eq(1)
        .click();
    }

    cartButton.click();

    cy.get('ol h2').each(($h2, index) => {
        expect($h2.get(0).innerText).to.eq(titleList[index]);
    })

    for(let i = 0; i < 4; i++) {
        cy.get('ol li button')
          .eq(0)
          .click();
    }

    cy.get('.modal-content p').should('contain.text', 'Your cart is empty!');
  })
})