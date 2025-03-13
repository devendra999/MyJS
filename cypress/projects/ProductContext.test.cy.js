// test case for product Context file for thapa technical

describe("Product Context Tests", () => {
  
    // **Test 1: Checking if the products are displayed after dispatching GET_PRODUCTS**
    it("should render products after dispatching GET_PRODUCTS action", () => {
      // Visit the app that uses the ProductContext
      cy.visit("/");
  
      // **Mock Products Data to be used by GET_PRODUCTS**
      const mockProducts = [
        { id: 1, name: "Product 1", category: "electronics", price: 50 },
        { id: 2, name: "Product 2", category: "fashion", price: 100 },
      ];
  
      // Intercepting the dispatch and mocking the data
      cy.window().then((window) => {
        window.dispatch({
          type: "GET_PRODUCTS",
          payload: mockProducts,
        });
      });
  
      // **Expect the loading state to disappear**
      cy.contains("Loading...").should("not.exist");
  
      // **Expect products to be rendered**
      cy.get('[data-testid="product-item"]').should("have.length", 2);
      cy.get('[data-testid="product-item"]').first().contains("Product 1");
      cy.get('[data-testid="product-item"]').last().contains("Product 2");
    });
  
    // **Test 2: Checking if filter updates the product list**
    it("should filter products based on category", () => {
      const mockProducts = [
        { id: 1, name: "Product 1", category: "electronics", price: 50 },
        { id: 2, name: "Product 2", category: "fashion", price: 100 },
      ];
  
      cy.visit("/");
  
      // Mock products dispatch action
      cy.window().then((window) => {
        window.dispatch({
          type: "GET_PRODUCTS",
          payload: mockProducts,
        });
      });
  
      // Check if all products are displayed first
      cy.get('[data-testid="product-item"]').should("have.length", 2);
  
      // Now apply the category filter
      cy.get("select[name='category']").select("electronics");
  
      // Expect the filter to show only products of the selected category
      cy.get('[data-testid="product-item"]').should("have.length", 1);
      cy.get('[data-testid="product-item"]').first().contains("Product 1");
    });
  
    // **Test 3: Checking the filter text input updates the product list**
    it("should update the product list when filter text is entered", () => {
      const mockProducts = [
        { id: 1, name: "Product 1", category: "electronics", price: 50 },
        { id: 2, name: "Product 2", category: "fashion", price: 100 },
      ];
  
      cy.visit("/");
  
      // Mock products dispatch action
      cy.window().then((window) => {
        window.dispatch({
          type: "GET_PRODUCTS",
          payload: mockProducts,
        });
      });
  
      // **Expect both products to be displayed initially**
      cy.get('[data-testid="product-item"]').should("have.length", 2);
  
      // **Now filter products by entering 'Product 1'**
      cy.get("input[name='text']").type("Product 1");
  
      // **Expect only 'Product 1' to be visible after filtering**
      cy.get('[data-testid="product-item"]').should("have.length", 1);
      cy.get('[data-testid="product-item"]').first().contains("Product 1");
    });
  
    // **Test 4: Checking if the loading state is set correctly**
    it("should show loading state while fetching products", () => {
      cy.visit("/");
  
      // **Simulate setting the loading state before dispatching products**
      cy.window().then((window) => {
        window.dispatch({ type: "SET_LOADING" });
      });
  
      // **Expect the 'Loading...' text to be visible while the products are being fetched**
      cy.contains("Loading...").should("be.visible");
  
      // **Then dispatch products and check loading state disappears**
      cy.window().then((window) => {
        window.dispatch({
          type: "GET_PRODUCTS",
          payload: [
            { id: 1, name: "Product 1", category: "electronics", price: 50 },
          ],
        });
      });
  
      cy.contains("Loading...").should("not.exist");
    });
  
  });
  
  