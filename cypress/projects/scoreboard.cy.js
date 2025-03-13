// test case for https://stackblitz.com/edit/react-npawiptt?file=src%2FApp.js
// it is simply cricket score or wicket related test cases

describe('🏏 Cricket Scoreboard App Tests', () => {
    // Runs before each test to visit the app
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Change if the app runs on a different port
    });
  
    // ✅ Test 1: Verify initial scoreboard state
    it('should display initial score as 0 and wickets as 0', () => {
      cy.contains('Score: 0');  // Check if initial score is 0
      cy.contains('Wicket : 0'); // Check if initial wickets are 0
    });
  
    // ✅ Test 2: Ensure clicking run buttons updates the score
    it('should increase score when run buttons are clicked', () => {
      cy.get('button').contains('01').click(); // Click "01" run button
      cy.contains('Score: 1');  // Score should update to 1
  
      cy.get('button').contains('04').click(); // Click "04" run button
      cy.contains('Score: 5');  // Score should now be 1 + 4 = 5
    });
  
    // ✅ Test 3: Ensure clicking the wicket button increases the wicket count
    it('should increase wicket count when the wicket button is clicked', () => {
      cy.get('button').contains('wicket').click(); // Click "wicket" button
      cy.contains('Wicket : 1');  // Wicket count should be 1
  
      cy.get('button').contains('wicket').click(); // Click "wicket" again
      cy.contains('Wicket : 2');  // Wicket count should now be 2
    });
  
    // ✅ Test 4: Ensure all buttons disable after 10 wickets
    it('should disable all buttons when 10 wickets are reached', () => {
      // Click the "wicket" button 10 times
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('wicket').click();
      }
      
      // Verify the final wicket count is 10
      cy.contains('Wicket : 10');
  
      // Ensure all buttons are now disabled
      cy.get('button').should('be.disabled');
    });
  });
