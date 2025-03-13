// test cases for https://stackblitz.com/edit/react-mddzxvv7?file=src%2FApp.js
// pagination test case

describe('🛍️ Product List Pagination Tests', () => {
    beforeEach(() => {
      // Visit the app before each test
      cy.visit('http://localhost:3000'); // Change the URL if different
    });
  
    // ✅ Test 1: Verify initial state (Page 1, Loading, Products)
    it('should load the first page with products', () => {
      cy.contains('h2', 'Product List'); // Check for the heading
  
      // Ensure loading text appears before data loads
      cy.contains('Loading.....').should('exist');
  
      // Wait for products to load and ensure they are displayed
      cy.get('ul li').should('have.length', 10); // Should load 10 products
    });
  
    // ✅ Test 2: Check pagination functionality
    it('should navigate between pages correctly', () => {
      // Ensure "Page 1" is displayed
      cy.contains('span', 'Page 1');
  
      // Click on "Next" button
      cy.get('button').contains('Next').click();
  
      // Ensure "Page 2" is displayed
      cy.contains('span', 'Page 2');
  
      // Click on "Previous" button to go back to Page 1
      cy.get('button').contains('Previous').click();
      cy.contains('span', 'Page 1');
    });
  
    // ✅ Test 3: Verify specific pagination buttons work
    it('should change pages when number buttons are clicked', () => {
      // Click on Page 3 button (if it exists)
      cy.get('button').contains('3').click();
  
      // Ensure page 3 is displayed
      cy.contains('span', 'Page 3');
  
      // Click on Page 1 button to go back
      cy.get('button').contains('1').click();
      cy.contains('span', 'Page 1');
    });
  
    // ✅ Test 4: Ensure "Previous" button is disabled on the first page
    it('should disable "Previous" button on the first page', () => {
      cy.get('button').contains('Previous').should('be.disabled');
    });
  
    // ✅ Test 5: Ensure "Next" button is disabled on the last page
    it('should disable "Next" button on the last page', () => {
      // Click "Next" until the last page
      cy.get('button')
        .contains('Next')
        .should('not.be.disabled')
        .click({ multiple: true });
  
      // Ensure "Next" is now disabled
      cy.get('button').contains('Next').should('be.disabled');
    });
  });
  