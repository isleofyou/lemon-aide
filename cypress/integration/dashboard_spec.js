describe('Lemon-aide dashboard test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/all-products', {
      fixture: 'products.json'
    });
    cy.visit('http://localhost:3000');
  })

  it('As a user when I visit the homepage I should see a header', () => {
    cy.get('header[class="header-container"]')
      .should('have.length', 1)
      .contains('Lemon Aide')
      .get('img[class="logo-img"]')
      .should('have.length', '1');
  });
});