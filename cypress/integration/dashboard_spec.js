describe('Lemon-aide dashboard test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/all-products', {
      fixture: 'products.json'
    });
    cy.intercept('GET', '/api/v1/favorites', {
      body: {
        favorites: [],
      }
    })
    cy.visit('http://localhost:3000');
  })

  it('As a user, when I visit the homepage I should see a header', () => {
    cy.get('header[class="header-container"]')
      .should('have.length', 1)
      .contains('Lemon Aide')
      .get('img[class="logo-img"]')
      .should('have.length', '1');
  });

  it('As a user, when I visit the homepage the URL should be "/"', () => {
    cy.url()
      .should('include', '/');
  });

  it(`As a user, when I click on the aside's "All Items" link, I should be directed to the homepage`, () => {
    cy.visit('http://localhost:3000/favorites')

    cy.get('div[class="sidebar"]')
      .click()
      .get('a[href="/"]')
      .click()
      .url()
      .should('include', '/');
  });

  it('As a user, when I visit the homepage I should see all the products', () => {
    cy.get('main[class="products-container"]')
      .should('have.length', 1)
      .get('article[class="product-card"]')
      .should('have.length', 3);

    cy.get('article[class="product-card"]')
      .get('img[class="unfavorite-button"]')
      .should('have.length', 2)
      .get('img[class="product-image"]')
      .should('have.length', 3)
      .get('h2[class="product-name"]')
      .should('have.length', 3)
      .get('h2[class="product-color"]')
      .should('have.length', 3)
      .get('button')
      .should('have.length', 3);
  });

  it('As a user, when I visit the homepage I should see collapsable nav bar', () => {
    cy.get('div[class="sidebar"]')
      .should('have.length', 1);
  });

  it('As a user, when I visit the home page and click on the collapsable nav bar I should see a nav menu and be able to close it', () => {
    cy.get('div[class="sidebar"]')
      .click()
      .get('nav[class="aside active"]')
      .should('have.length', 1)
      .get('li[class="aside-items"]')
      .should('have.length', 3)
      .get('li[class="sidebar-toggle"]')
      .click()
      .get('nav[class="aside"]')
      .should('have.length', 1);
  });

  it('As a user, when I click on an outlined heart of a product it should show a red heart to indicate that the product has now been favorited', () => {
    cy.intercept('PUT', '/api/v1/favorites/1', {
      body: {
        result: {
          "name": "Sculpt Tank",
          "color": "Rainforest Green",
          "img_url": "https://images.lululemon.com/is/image/lululemon/LW1CS9S_049106_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
          "category": "top",
          "id": 1,
          "favorite": true
        }
      }
    })

    cy.get('div[class="product-card-container"]')
      .get('img[class="unfavorite-button"]')
      .first()
      .click()
      .get('img[class="favorite-button"]')
      .should('have.class', "favorite-button");
  });

  it('As a user, when I click on a red heart of a favorited product it should show an outline of a heart to indicate that the product has now been unfavorited', () => {
    cy.intercept('PUT', '/api/v1/favorites/2', {
      body: {
        result: {
          "name": "All Yours Tank",
          "color": "White",
          "img_url": "https://images.lululemon.com/is/image/lululemon/LW1CGLS_0002_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
          "category": "top",
          "id": 2,
          "favorite": false 
        }
      }
    })

    cy.get('div[class="product-card-container"]')
      .get('img[class="favorite-button"]')
      .click()
      .get('img[class="unfavorite-button"]')
      .should('have.length', 2);
  });

  it('As a user, when I click on "Favorites" from the collapsable nav bar it should only show me my favorited products', () => {
    cy.get('div[class="sidebar"]')
      .click()
      .get('a[href="/favorites"]')
      .click()
      .url()
      .should('include', '/favorites')
      .get('main[class="products-container"]')
      .get('article[class="product-card"]')
      .should('have.length', 1);
  });

  it('As a user, when I click on "My Outfits" from the collapsable nav bar it should navigate me to the my outfits route', () => {
    cy.get('div[class="sidebar"]')
      .click()
      .get('a[href="/my-outfits"]')
      .click()
      .url()
      .should('include', '/my-outfits');
  });
});

describe('Lemon aide dashboard error test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/all-products', {
      statusCode: 404
    });
    cy.visit('http://localhost:3000');
  });

  it('As a user, I should see an error message when something goes wrong (e.g. server error)', () => {
    cy.get('div[class="error-container"]')
      .should('have.length', 1);
  });
});

describe('Lemon aide dashboard loading test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/all-products', {
      fixture: 'products.json',
      delay: 3000
    });

    cy.visit('http://localhost:3000');
  });

  it('As a user, when I visit the homepage and the products are still being rendered I should see a Loading component.', () => {
    cy.get('div[class="loading-flex"]')
      .should('have.length', 1);
  });
});

describe('Lemon aide dashboard no favorites test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/all-products', {
      fixture: 'productsNoFav.json',
    });

    cy.visit('http://localhost:3000/favorites')
  });

  it(`As a user, when I visit the favorites page and I haven't favorited any products I should see a div that tells me to "Add favorites to see them here."`, () => {
    cy.get('div[class="no-favorites"]')
      .should('have.length', 1);
  });
});