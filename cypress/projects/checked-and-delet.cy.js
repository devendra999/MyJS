// test cases for https://stackblitz.com/edit/react-62zybm8w?file=src%2FApp.js
// when check show delete button and onclick delet also all select and delet all

describe('📝 Checkbox Table Component Tests', () => {
    beforeEach(() => {
      // Visit the app before each test
      cy.visit('http://localhost:3000'); // Update the URL if needed
    });
  
    // ✅ Test 1: Ensure the table renders with users
    it('should display the table with user data', () => {
      cy.get('table').should('exist'); // Check if the table exists
      cy.get('tbody tr').should('have.length', 5); // Ensure 5 users are displayed
    });
  
    // ✅ Test 2: Select and unselect a single checkbox
    it('should allow selecting and unselecting an individual user', () => {
      cy.get('tbody tr').first().find('input[type="checkbox"]').check(); // Check first user's checkbox
      cy.get('tbody tr').first().find('input[type="checkbox"]').should('be.checked'); // Verify it's checked
  
      cy.get('tbody tr').first().find('input[type="checkbox"]').uncheck(); // Uncheck first user's checkbox
      cy.get('tbody tr').first().find('input[type="checkbox"]').should('not.be.checked'); // Verify it's unchecked
    });
  
    // ✅ Test 3: Select all checkboxes using "Select All"
    it('should select and unselect all checkboxes using "Select All"', () => {
      cy.get('thead input[type="checkbox"]').check(); // Check "Select All" checkbox
      cy.get('tbody input[type="checkbox"]').each(($el) => {
        cy.wrap($el).should('be.checked'); // Ensure all checkboxes are checked
      });
  
      cy.get('thead input[type="checkbox"]').uncheck(); // Uncheck "Select All"
      cy.get('tbody input[type="checkbox"]').each(($el) => {
        cy.wrap($el).should('not.be.checked'); // Ensure all checkboxes are unchecked
      });
    });
  
    // ✅ Test 4: Remove selected users
    it('should remove selected users when clicking "Remove selected"', () => {
      cy.get('tbody tr').eq(1).find('input[type="checkbox"]').check(); // Select second user
      cy.get('tbody tr').eq(2).find('input[type="checkbox"]').check(); // Select third user
  
      cy.contains('button', 'Remove selected').click(); // Click "Remove selected" button
  
      cy.get('tbody tr').should('have.length', 3); // Ensure only 3 users remain
      cy.contains('Jane Smith').should('not.exist'); // Ensure removed users are gone
      cy.contains('Alice Johnson').should('not.exist');
    });
  
    // ✅ Test 5: Check "No users found" message when all users are removed
    it('should show "No users found" when all users are removed', () => {
      cy.get('thead input[type="checkbox"]').check(); // Select all users
      cy.contains('button', 'Remove selected').click(); // Remove all selected users
  
      cy.contains('No users found').should('exist'); // Verify "No users found" message appears
    });
  });
  