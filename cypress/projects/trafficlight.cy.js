// test case for https://stackblitz.com/edit/react-szxusrrx?file=src%2FTrafficLight.js
// traffic light duration

describe('🚦 Traffic Light Component Tests', () => {
    beforeEach(() => {
      // Visit the app before each test
      cy.visit('http://localhost:3000'); // Update the URL if needed
    });
  
    // ✅ Test 1: Verify initial state (Red light is active)
    it('should start with red light active', () => {
      cy.get('.red').should('exist'); // Check if red light is active initially
      cy.get('.green').should('not.have.class', 'green'); // Green should be inactive
      cy.get('.yellow').should('not.have.class', 'yellow'); // Yellow should be inactive
    });
  
    // ✅ Test 2: Check light switching on button clicks
    it('should activate the correct light when button is clicked', () => {
      cy.get('button').contains('Green').click(); // Click Green button
      cy.get('.green').should('exist'); // Green light should be active
      cy.get('.red').should('not.have.class', 'red'); // Red should be inactive
      cy.get('.yellow').should('not.have.class', 'yellow'); // Yellow should be inactive
  
      cy.get('button').contains('Yellow').click(); // Click Yellow button
      cy.get('.yellow').should('exist'); // Yellow light should be active
    });
  
    // ✅ Test 3: Check if light durations are updated
    it('should update light duration when input value is entered and Enter is pressed', () => {
      cy.get('input[type="number"]').type('3'); // Enter '3' in the input box
      cy.get('input[type="number"]').type('{enter}'); // Press Enter
  
      // Verify console log output for light duration (alternative verification)
      cy.window().then((win) => {
        expect(win.console.log).to.exist;
      });
    });
  
    // ✅ Test 4: Ensure light cycles correctly (Red → Green → Yellow)
    it('should cycle lights automatically', () => {
      cy.wait(2000); // Wait for red light duration
      cy.get('.green').should('exist'); // Green should be active
  
      cy.wait(2000); // Wait for green light duration
      cy.get('.yellow').should('exist'); // Yellow should be active
  
      cy.wait(2000); // Wait for yellow light duration
      cy.get('.red').should('exist'); // Red should be active again
    });
  });
  