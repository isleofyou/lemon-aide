describe('Lemon-aide dashboard test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/all-products', {
      fixture: 'productsForOutfits.json'
    });

    cy.intercept('GET', '/api/v1/outfits', {
      fixture: 'outfits.json'
    });

    cy.intercept('POST', '/api/v1/outfits', {
      body: {
        newOutfit: [{
          "id": 1, 
          "top_id": 1, 
          "bottom_id": 4, 
          "accessory_id": null
        }]
      }
    })

    cy.intercept('DELETE', '/api/v1/outfits/1', {
      fixture: 'deletedOutfit.json'
    })

    cy.visit('http://localhost:3000');
  });

  it('As a user when I click the hanger icon it should pop up a window', () => {
    cy.get('img[class="cart-button"]')
      .click()
      .get('div[class="cart-dropdown"]')
      .should('have.length', 1);
  });
  
  it('As a user when I click the x button in the cart dropdown it should close', () => {
    cy.get('img[class="cart-button"]')
      .click()
      .get('div[class="cart-dropdown"]')
      .should('exist')
      .get('svg[class="exit-dropdown-button"]')
      .click()
      .get('div[class="cart-dropdown"]')
      .should('not.exist')
  });

  it('As a user when I click add on product cards it should add it to the cart', () => {
    cy.get('button[class="top"]')
      .first()
      .click();

    cy.get('img[class="cart-button"]')
      .click()
      .get('article[class="outfit-item-container"]')
      .should('have.length', 1)
      .contains('Sculpt Tank');
  });

  it('As a user when I successfully save an outfit the cart dropdown goes away', () => {
    cy.get('button[class="top"]')
      .first()
      .click();

    cy.get('button[class="bottom"]')
      .first()
      .click();

    cy.get('img[class="cart-button"]')
      .click()

    cy.get('button[class="create-outfit-button"]')
      .click()
      .get('article[class="outfit-item-container"]')
      .should('not.exist')
  })

  it('As a user when I select a top and bottom and save the outfit I should see it in saved outfits', () => {
    cy.get('button[class="top"]')
      .first()
      .click();

    cy.get('button[class="bottom"]')
      .first()
      .click();

    cy.get('img[class="cart-button"]')
      .click()

    cy.get('button[class="create-outfit-button"]')
      .click()

      cy.get('div[class="sidebar"]')
      .click()
      .get('a[href="/my-outfits"]')
      .click()

    cy.get('article[class="outfit-card-container"]')
      .should('exist')
  })

  it.only('As a user I should be able to delete a saved outfit', () => {
    cy.get('button[class="top"]')
      .first()
      .click();

    cy.get('button[class="bottom"]')
      .first()
      .click();

    cy.get('img[class="cart-button"]')
      .click()

    cy.get('button[class="create-outfit-button"]')
      .click()

      cy.get('div[class="sidebar"]')
      .click()
      .get('a[href="/my-outfits"]')
      .click()

    cy.get('article[class="outfit-card-container"]')
      .should('exist')
      
    cy.get('button[class="remove-item-card"]')
      .click()

      cy.get('article[class="outfit-card-container"]')
      .should('not.exist')
  })

  it('As a user when I click the x on an outfit cart item it should remove it from the cart', () => {
    cy.get('button[class="top"]')
      .first()
      .click()

    cy.get('img[class="cart-button"]')
      .click()
      .get('article[class="outfit-item-container"]')
      .get('button[class="remove-item-card"]')
      .click()
      .get('article[class="outfit-item-container"]')
      .should('not.exist')
  });
});