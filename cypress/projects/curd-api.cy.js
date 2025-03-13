/// <reference types="cypress" />

describe('Product API Tests', () => {
  
    const BASE_URL = 'https://dummyjson.com/products';
  
    // Test GET All Products
    it('should fetch all products successfully', () => {
      cy.request('GET', BASE_URL).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('products');
        expect(response.body.products).to.be.an('array');
      });
    });
  
    // Test GET Single Product
    it('should fetch a single product successfully', () => {
      cy.request('GET', `${BASE_URL}/1`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('title');
      });
    });
  
    // Test SEARCH Products
    it('should search products by query', () => {
      cy.request('GET', `${BASE_URL}/search?q=phone`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.products).to.be.an('array');
      });
    });
  
    // Test PAGINATION - Get products with limit and skip
    it('should fetch paginated products', () => {
      cy.request('GET', `${BASE_URL}?limit=10&skip=10&select=title,price`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.products).to.have.length(10);
      });
    });
  
    // Test ADD a New Product (POST request)
    it('should add a new product successfully', () => {
      cy.request({
        method: 'POST',
        url: `${BASE_URL}/add`,
        body: {
          title: 'BMW Pencil'
        },
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('title', 'BMW Pencil');
        expect(response.body).to.have.property('id');
      });
    });
  
    // Test UPDATE an Existing Product (PUT request)
    it('should update an existing product', () => {
      cy.request({
        method: 'PUT',
        url: `${BASE_URL}/1`,
        body: {
          title: 'Updated BMW Pencil'
        },
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('title', 'Updated BMW Pencil');
      });
    });
  
    // Test DELETE a Product
    it('should delete a product successfully', () => {
      cy.request({
        method: 'DELETE',
        url: `${BASE_URL}/1`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
      });
    });
  
  });
  