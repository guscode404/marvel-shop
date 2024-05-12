describe('navigation pages', () => {
  it('should be navigate pages correctly', () => {
    cy.visit('/');

    const nextButton = cy.get('section div button')
      .eq(1);

    const previousButton = cy.get('section div button')
      .eq(0);

    cy.get('section > span').should('contain.text', '1 de');

    previousButton.click();
    cy.get('section > span').should('contain.text', '1 de');

    nextButton.click();
    cy.get('section > span').should('contain.text', '2 de');

    previousButton.click();
    cy.get('section > span').should('contain.text', '1 de');

    let title;
    cy.get('li h2').should(($h2) => {
      title = $h2.get(0).innerText;
    })

    nextButton.click();
    cy.get('li h2').should(($h2) => {
      expect($h2.get(0).innerText).to.not.eq(title);
    })

    for(let i = 0; i < 19; i++) {
      nextButton.click()
    }
    cy.get('section > span').should('contain.text', '20 de');
  })
})