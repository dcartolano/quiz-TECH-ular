// import React from 'react'
// @ts-nocheck
import Quiz from '../../client/src/components/Quiz'
// import question from '../fixtures/questions.json'

// QUESTION: how to intercept API?

describe('<Quiz />', () => {
  // // if quiz isn't started
  // it('should render a button with the proper text', () => {
  //   // see: https://on.cypress.io/mounting-react
  //   cy.mount(<Quiz />)
  //   // button should say start quiz
  //   cy.get('button').should('have.text', 'Start Quiz')
  // })

  // //intercept
  // cy.get('button').click()
  // // if length of questions is 0
  // // what should it do?
  // it('renders', () => {
  //   // see: https://on.cypress.io/mounting-react
  //   cy.mount(<Quiz />)
  // })

  // // original method
  // cy.intercept('GET', '/api/questions/random', (req) => {
  //   req.reply({
  //     body: question
  //   });
  // }).as('getQuestion');



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

  // if question loaded
  // should show question
  it('should show question if quiz started', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('card').should('be.visible');
    // cy.get('h2').should('not.be.empty');
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



  // // if quiz is completed
  // it('renders', () => {
  //   // see: https://on.cypress.io/mounting-react
  //   // QUESTION: how to mark quizCompleted as true?
  //   cy.mount(<Quiz />)
  //   // h2 should say quiz completed
  //   cy.get('h2').should('have.text', 'Quiz Completed')
  //   // should say your score: score/questions
  //   cy.get('.alert').should()
  //   // button should say take new quiz
  // })

  // // if questions length is zero
  // // should say loading...
  // it('renders', () => {
  //   // see: https://on.cypress.io/mounting-react
  //   cy.mount(<Quiz />)
  // })
})