// url https://stackblitz.com/edit/react-6rn61fhu?file=src%2FApp.js
// kanban or trell card when category change also nested element handle

describe('📝 Trello Board App - Cypress Test Cases', () => {
    beforeEach(() => {
      // Visit the app before each test
      cy.visit('http://localhost:3000'); // Update the URL if needed
    });
  
    // ✅ Test 1: Ensure the application loads properly
    it('should display the application title', () => {
      cy.contains('Trello Card').should('be.visible');
    });
  
    // ✅ Test 2: Ensure categories exist
    it('should display task categories', () => {
      cy.contains('todo').should('be.visible');
      cy.contains('progress').should('be.visible');
      cy.contains('completed').should('be.visible');
    });
  
    // ✅ Test 3: Ensure task form has required input fields
    it('should have a task form with input and category dropdown', () => {
      cy.get('input[type="text"]').should('exist'); // Input field exists
      cy.get('select').should('exist'); // Category dropdown exists
      cy.get('button[type="submit"]').should('exist'); // Add/Edit button exists
    });
  
    // ✅ Test 4: Add a new task card to a category
    it('should allow adding a new card to the todo category', () => {
      cy.get('input[type="text"]').type('New Task'); // Enter task title
      cy.get('select').select('todo'); // Select "todo" category
      cy.get('button[type="submit"]').click(); // Click Add button
  
      // Verify that the new card appears in "todo"
      cy.contains('New Task').should('be.visible');
    });
  
    // ✅ Test 5: Ensure newly added card can be edited
    it('should allow editing an existing card', () => {
      cy.get('input[type="text"]').type('Task to Edit'); // Enter task title
      cy.get('select').select('progress'); // Select "progress" category
      cy.get('button[type="submit"]').click(); // Click Add button
  
      // Click the "Edit" button on the newly added task
      cy.contains('Task to Edit').parent().find('button').contains('Edit').click();
  
      // Modify the task title
      cy.get('input[type="text"]').clear().type('Updated Task');
      cy.get('button[type="submit"]').click(); // Save changes
  
      // Verify the edited title appears
      cy.contains('Updated Task').should('be.visible');
    });
  
    // ✅ Test 6: Delete a task card
    it('should allow deleting a card', () => {
      cy.get('input[type="text"]').type('Task to Delete'); // Enter task title
      cy.get('select').select('completed'); // Select "completed" category
      cy.get('button[type="submit"]').click(); // Click Add button
  
      // Click the "Delt" button on the newly added task
      cy.contains('Task to Delete').parent().find('button').contains('Delt').click();
  
      // Ensure the task is removed from the UI
      cy.contains('Task to Delete').should('not.exist');
    });
  
    // ✅ Test 7: Ensure category selection is required before adding a task
    it('should prevent adding a task without selecting a category', () => {
      cy.get('input[type="text"]').type('No Category Task');
      cy.get('button[type="submit"]').click(); // Try adding without selecting category
  
      // Ensure the task was NOT added
      cy.contains('No Category Task').should('not.exist');
    });
  
    // ✅ Test 8: Ensure editing moves a card to a different category
    it('should allow moving a task to a different category', () => {
      cy.get('input[type="text"]').type('Task to Move'); // Enter task title
      cy.get('select').select('todo'); // Select "todo" category
      cy.get('button[type="submit"]').click(); // Click Add button
  
      // Click "Edit" button for the newly added task
      cy.contains('Task to Move').parent().find('button').contains('Edit').click();
  
      // Change category to "progress"
      cy.get('select').select('progress');
      cy.get('button[type="submit"]').click(); // Save changes
  
      // Verify that the task moved to "progress"
      cy.contains('progress').parent().should('contain', 'Task to Move');
      cy.contains('todo').parent().should('not.contain', 'Task to Move');
    });
  
  });
  
