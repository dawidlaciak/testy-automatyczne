/// <reference types='cypress' />

describe('Test związany z wybieraniem select', () => {
	it('Kliknięcie w zakładkę Woman', () => {
		cy.visit('/');
		cy.get('a[title="Women"]').click();
	});
	it('Wybranie filtra In stock', () => {
		// Pobranie elementu select i wybranie opcji In stock
		cy.get('#selectProductSort').select('In stock');
	});

	it('Wybranie filtra Product Name: A to Z', () => {
		// Pobranie elementu select i wybranie opcji Product Name: A to Z
		cy.get('#selectProductSort').select('Product Name: A to Z');
	});

	it('Wybranie filtra Product Name: Z to A po wartości value', () => {
		// Pobranie elementu select i wybranie opcji Product Name: Z to A po wartości value
		cy.get('#selectProductSort').select('name:desc');
	});
});
