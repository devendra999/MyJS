// url : https://stackblitz.com/edit/react-ml3lfym5?file=src%2FApp.js
// todo curd 


describe('📝 Todo App - Cypress Test Cases', () => {
    beforeEach(() => {
      // Visit the app before each test
      cy.visit('http://localhost:3000'); // Update the URL if needed
    });
  
    // ✅ Test 1: Ensure the application loads properly
    it('should display the application title', () => {
      cy.contains('Todo Ap!').should('be.visible');
    });
  
    // ✅ Test 2: Ensure task input and button exist
    it('should display an input field and an Add button', () => {
      cy.get('input[type="text"]').should('exist'); // Input field exists
      cy.get('button').contains('Add').should('exist'); // Add button exists
    });
  
    // ✅ Test 3: Add a new todo item
    it('should allow adding a new todo', () => {
      cy.get('input[type="text"]').type('New Todo'); // Enter task title
      cy.get('button').contains('Add').click(); // Click Add button
  
      // Verify that the new task appears in the list
      cy.contains('New Todo').should('be.visible');
    });
  
    // ✅ Test 4: Prevent adding an empty todo item
    it('should disable the Add button when input is empty', () => {
      cy.get('input[type="text"]').clear(); // Ensure input is empty
      cy.get('button').contains('Add').should('be.disabled'); // Button should be disabled
    });
  
    // ✅ Test 5: Edit an existing todo item
    it('should allow editing a todo', () => {
      cy.get('input[type="text"]').type('Task to Edit'); // Enter task title
      cy.get('button').contains('Add').click(); // Click Add button
  
      // Click the "Edit" button for the newly added task
      cy.contains('Task to Edit').parent().find('button').contains('Edit').click();
  
      // Modify the task title
      cy.get('input[type="text"]').clear().type('Updated Task');
      cy.get('button').contains('Edit').click(); // Save changes
  
      // Verify the edited title appears
      cy.contains('Updated Task').should('be.visible');
    });
  
    // ✅ Test 6: Delete a todo item
    it('should allow deleting a todo', () => {
      cy.get('input[type="text"]').type('Task to Delete'); // Enter task title
      cy.get('button').contains('Add').click(); // Click Add button
  
      // Click the "delt" button on the newly added task
      cy.contains('Task to Delete').parent().find('button').contains('delt').click();
  
      // Ensure the task is removed from the UI
      cy.contains('Task to Delete').should('not.exist');
    });
  
    // ✅ Test 7: Ensure the Edit button updates the existing task
    it('should update the existing task when edited', () => {
      cy.get('input[type="text"]').type('Edit Me'); // Enter task title
      cy.get('button').contains('Add').click(); // Click Add button
  
      // Click "Edit" button for the newly added task
      cy.contains('Edit Me').parent().find('button').contains('Edit').click();
  
      // Change task title
      cy.get('input[type="text"]').clear().type('Edited Task');
      cy.get('button').contains('Edit').click(); // Save changes
  
      // Verify the new title appears and the old one is gone
      cy.contains('Edited Task').should('be.visible');
      cy.contains('Edit Me').should('not.exist');
    });
  });
  