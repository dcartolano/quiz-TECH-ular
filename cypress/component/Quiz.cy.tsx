// @ts-nocheck
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {

  // new method
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: '/api/questions/random'
    },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
    ).as('getQuestion')
  });

  it('should show question if quiz started', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('card').should('be.visible');
  })

  it('should answer questions until complete', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('1').click();
    cy.get('h2').should('contain', 'Quiz Completed');
  })

  it('should restart once complete', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('Take New Quiz').click();
    cy.get('card').should('be.visible');
  })

})