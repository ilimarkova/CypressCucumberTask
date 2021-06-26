import { Given,When, Then } from 'cypress-cucumber-preprocessor/steps'
import { loginPage } from '../../support/page-objects/loginPage'
import { bookStorePage } from '../../support/page-objects/bookStorePage'

Given('user is logged in successfully', () => {
  cy.visit('/login')
  cy.intercept('POST', '/Account/v1/Login').as('login')
  cy.fixture('auth').then( data => {
    loginPage.getLoginForm(data.username, data.password)
  })
  
  cy.wait('@login').its('response.statusCode').should('be.eql', 200)
  cy.url().should('contain', '/profile')
})

When('search for book title {string}', (book) => {
  cy.visit('/books')
  bookStorePage.searchBook(book)
})

Then('book title {string} is found successfully', (book) => {
  bookStorePage.getSearchResult(0, 'contain', book)
})