
describe('Quiz Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should show the first question if start quiz button is clicked', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card').should('be.visible');
  });
  it('should show questions until all are answered', () => {
    cy.get('button').contains('Start Quiz').click();
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains('1').click();
    }
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score:');
  });
  it('should restart quiz if restart button is clicked', () => {
    cy.get('button').contains('Start Quiz').click();
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains('1').click();
    }
    cy.get('button').contains('Take New Quiz').click();
    cy.get('.card').should('be.visible');
  });
});