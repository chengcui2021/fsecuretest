describe('table test', () => {
  it('table', () => {
    cy.visit('http://localhost:8084/ ');
    cy.get('.container>div').should('have.length', 3);
    cy.get('.table table thead tr td').should('have.length', 4);
  });
  it('click checkbox', () => {
    cy.visit('http://localhost:8084/ ');
    cy.get('.table table thead tr td input').click();
    cy.get('.delete-container');
    cy.get('.No').click();
    cy.get('.delete-container').should('have.length', 0);
    cy.get('.table table thead tr td input').click();
    cy.get('.delete-container');
    cy.get('.Yes').click();
    cy.get('.table table tbody tr').should('have.length', 0);
  });
  it('click add ', () => {
    cy.visit('http://localhost:8084/ ');
    cy.get('.btn').click();
    cy.get('.container>.box');
    cy.get('.title-input').type('vue table').should('have.value', 'vue table');
    cy.get('.content-input')
      .type('Lorem ipsum')
      .should('have.value', 'Lorem ipsum');
    cy.get('.btn-save').click();
    cy.get('.table table tbody tr').should('have.length', 4);
    cy.get('.btn').click();
    cy.get('.btn-cancel').click();
    cy.get('.add-box').should('have.length', 0);
    cy.get('.btn').click();
    cy.get('.btn-save').click();
    cy.get('.not-empty').should('have.length', 1);
  });
  it('sort', () => {
    cy.visit('http://localhost:8084/ ');
    cy.get('.sortButton').click({ multiple: true });
  });
});
