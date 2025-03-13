// test cases https://stackblitz.com/edit/react-mabpyort?file=src%2FMyComponent.js
// test case for dependent api 

describe('📝 MyComponent API Calls Test', () => {
    beforeEach(() => {
      // Visit the app before each test
      cy.visit('http://localhost:3000'); // Update the URL if necessary
    });
  
    // ✅ Test 1: Ensure the component shows "Loading..." initially
    it('should display a loading message before data is fetched', () => {
      cy.contains('Loading...').should('exist'); // Verify "Loading..." text appears
    });
  
    // ✅ Test 2: Mock API responses and check if final data is displayed
    it('should fetch and display data from the third API', () => {
      // Mock all three API calls using `cy.intercept`
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
        statusCode: 200,
        body: [{ id: 1, title: 'Post 1' }], // Mock first API response
      }).as('getPosts');
  
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/comments', {
        statusCode: 200,
        body: [{ id: 1, body: 'Comment 1' }], // Mock second API response
      }).as('getComments');
  
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/albums', {
        statusCode: 200,
        body: [{ id: 1, title: 'Album 1' }], // Mock third API response
      }).as('getAlbums');
  
      // Wait for all API calls to finish
      cy.wait('@getPosts');
      cy.wait('@getComments');
      cy.wait('@getAlbums');
  
      // Verify that the third API's data is displayed
      cy.contains('Final Data from Third API:').should('exist');
      cy.contains('Album 1').should('exist'); // Ensure third API data appears
    });
  
    // ✅ Test 3: Handle API failure gracefully
    it('should show an error message if an API fails', () => {
      // Mock failure of the first API
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
        statusCode: 500,
        body: 'Internal Server Error',
      }).as('getPosts');
  
      // Wait for the failed API request
      cy.wait('@getPosts');
  
      // Verify that the error message appears
      cy.contains('Error: First API failed').should('exist');
    });
  });
  