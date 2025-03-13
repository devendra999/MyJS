// test cases fro https://stackblitz.com/edit/react-3kykccbu?file=src%2FApp.js
// depent dropdown when select first dropdown then visible second and list selected dropdown

describe('🌍 Dependent Dropdown Tests', () => {
    beforeEach(() => {
      // Visit the app before each test
      cy.visit('http://localhost:3000'); // Update the URL if needed
    });
  
    // ✅ Test 1: Ensure country dropdown is visible
    it('should display the country dropdown', () => {
      cy.get('select').first().should('exist'); // Ensure the first dropdown (Country) exists
      cy.get('select').first().should('contain', 'Select Country'); // Default option exists
    });
  
    // ✅ Test 2: Ensure state dropdown is initially disabled
    it('should disable the state dropdown initially', () => {
      cy.get('select').eq(1).should('be.disabled'); // State dropdown should be disabled initially
    });
  
    // ✅ Test 3: Selecting a country enables state dropdown
    it('should enable state dropdown after selecting a country', () => {
      cy.get('select').first().select('USA'); // Select "USA" from the country dropdown
      cy.get('select').eq(1).should('not.be.disabled'); // Verify state dropdown is now enabled
    });
  
    // ✅ Test 4: Selecting a country updates the state options
    it('should populate state options correctly based on country selection', () => {
      cy.get('select').first().select('Canada'); // Select "Canada"
  
      // Verify that the correct states appear for "Canada"
      cy.get('select').eq(1).should('contain', 'Ontario');
      cy.get('select').eq(1).should('contain', 'Quebec');
      cy.get('select').eq(1).should('contain', 'British Columbia');
    });
  
    // ✅ Test 5: Changing country resets state selection
    it('should reset state selection when country changes', () => {
      cy.get('select').first().select('USA'); // Select "USA"
      cy.get('select').eq(1).select('California'); // Select "California"
      cy.get('select').first().select('India'); // Change country to "India"
  
      // Ensure state selection resets
      cy.get('select').eq(1).should('have.value', ''); 
    });
  
    // ✅ Test 6: Selecting a state updates selection
    it('should allow selecting a state after selecting a country', () => {
      cy.get('select').first().select('India'); // Select "India"
      cy.get('select').eq(1).select('Delhi'); // Select "Delhi"
      
      // Verify state is selected
      cy.get('select').eq(1).should('have.value', 'Delhi');
    });
  });
  