describe('Shows Appeteasers', () => {
  it('Connect to Dev Server', () => {
    cy.visit('https://hangryhippo.quantic.host/');
  });
  it('selects Handhelds', () => {
    // Find the category item that has the text "Handhelds" and click it
    cy.contains('Handhelds').click();
    cy.contains('Cheese Burger');
    cy.contains('Fajita Tacos');
  });
  it('selects Appeteasers', () => {
    // Find the category item that has the text "Appeteasers" and click it
    cy.contains('Appeteasers').click();
    cy.contains('Tater Tots');
    cy.contains('Buffalo Wings');
    cy.contains('Cheese Burger').should('not.exist');
    cy.contains('Fajita Tacos').should('not.exist');
  });
});
