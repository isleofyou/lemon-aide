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

  it('As a user when I visit the homepage I should see all the products', () => {
    cy.get('main[class="products-container"]')
      .should('have.length', 1)
      .get('article[class="product-card"]')
      .should('have.length', 3);

    cy.get('article[class="product-card"]')
      .get('img[class="unfavorite-button"]')
      .should('have.length', 3)
      .get('img[class="product-image"]')
      .should('have.length', 3)
      .get('h2[class="product-name"]')
      .should('have.length', 3)
      .get('h2[class="product-color"]')
      .should('have.length', 3)
      .get('button')
      .should('have.length', 3);
  });

  it('As a user when I visit the homepage I should see collapsible nav bar', () => {
    cy.get('div[class="sidebar"]')
      .should('have.length', 1)
  });

  it('As a user when I visit the home page and click on the collapsible nav bar I should see a nav menu and be able to close it', () => {
    cy.get('div[class="sidebar"]')
    .click()
    .get('nav[class="aside active"]')
    .should('have.length', 1)
    .get('li[class="aside-items"]')
    .should('have.length', 4)
    .get('li[class="sidebar-toggle"]')
    .click()
    .get('nav[class="aside"]')
    .should('have.length', 1)
  })
});